"use client";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getProgram,
  deriveVaultPDA,
  deriveContributionPDA,
} from "../../utils/anchor-setup";
import { LAMPORTS_PER_SOL, SystemProgram, Transaction } from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";
import Navigation from "@/components/Navigation";
import { Wallet, Coins, Lock, Users, ArrowUpCircle } from "lucide-react";
import { motion } from "framer-motion";

// Add the authorized wallet address
const AUTHORIZED_WALLET = "AGxGbR4qZ2priXXvVEpYSx8w5T2VEuJgG57eq54H1ALY";

export default function Presale() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction, wallet } = useWallet();
  const [totalAmount, setTotalAmount] = useState(0);
  const [contribution, setContribution] = useState(0);
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(0);
  const [contributors, setContributors] = useState([
    { address: "8xyd...3Rfx", amount: 2.5, twitter: "@user1" },
    { address: "9mkt...7Tpq", amount: 1.8, twitter: "@user2" },
  ]);
  const [isContributeOpen, setIsContributeOpen] = useState(false);

  const program = publicKey && wallet ? getProgram(connection, wallet) : null;

  // Check if the connected wallet is authorized
  const isAuthorized = publicKey?.toBase58() === AUTHORIZED_WALLET;

  // Rest of the functions remain the same...
  const showTransactionToast = (signature, message) => {
    const explorerLink = `https://explorer.solana.com/tx/${signature}?cluster=devnet`;

    toast.success(
      <div
        onClick={() => window.open(explorerLink, "_blank")}
        className="cursor-pointer"
      >
        {message}
        <div className="text-sm text-blue-500 mt-1">
          Click to view transaction
        </div>
      </div>,
      {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );
  };

  const fetchBalance = async () => {
    if (!publicKey) return;
    try {
      const bal = await connection.getBalance(publicKey);
      setBalance(bal / LAMPORTS_PER_SOL);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  const updateContributors = () => {
    if (!publicKey) return;
    const shortenedAddress = `${publicKey.toString().slice(0, 4)}...${publicKey
      .toString()
      .slice(-4)}`;
    const existingContributor = contributors.find(
      (c) => c.address === shortenedAddress
    );

    if (existingContributor) {
      setContributors(
        contributors.map((c) =>
          c.address === shortenedAddress ? { ...c, amount: contribution } : c
        )
      );
    } else {
      setContributors([
        ...contributors,
        {
          address: shortenedAddress,
          amount: contribution,
          twitter: "@user" + (contributors.length + 1),
        },
      ]);
    }
  };

  const initialize = async () => {
    if (!program || !publicKey) return;

    try {
      const vault = anchor.web3.Keypair.generate();

      const tx = await program.methods
        .initialize()
        .accounts({
          vault: vault.publicKey,
          authority: publicKey,
          systemProgram: SystemProgram.programId,
        })
        .transaction();

      const transaction = new Transaction().add(tx);
      transaction.feePayer = publicKey;
      transaction.recentBlockhash = (
        await connection.getLatestBlockhash()
      ).blockhash;
      transaction.sign(vault);

      const signature = await sendTransaction(transaction, connection, {
        signers: [vault],
      });

      await connection.confirmTransaction(signature, "confirmed");
      showTransactionToast(signature, "Vault initialized successfully!");
    } catch (error) {
      console.error("Error initializing:", error);
      toast.error("Failed to initialize vault");
    }
  };

  const contribute = async () => {
    if (!program || !publicKey || !amount) return;

    try {
      const vaultAccounts = await program.account.vault.all();
      if (vaultAccounts.length === 0) {
        alert("No vault initialized");
        return;
      }

      const vault = vaultAccounts[0];
      const [vaultPda] = await deriveVaultPDA(vault.publicKey);
      const [contributionPda] = await deriveContributionPDA(publicKey);

      const lamports = parseFloat(amount) * LAMPORTS_PER_SOL;

      const tx = await program.methods
        .contribute(new anchor.BN(lamports))
        .accounts({
          vault: vault.publicKey,
          vaultPda,
          contribution: contributionPda,
          contributor: publicKey,
          systemProgram: SystemProgram.programId,
        })
        .transaction();

      const transaction = new Transaction().add(tx);
      transaction.feePayer = publicKey;
      transaction.recentBlockhash = (
        await connection.getLatestBlockhash()
      ).blockhash;

      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, "confirmed");

      await fetchContribution();
      updateContributors();
      fetchBalance();
      showTransactionToast(
        signature,
        `Successfully contributed ${amount} SOL!`
      );
    } catch (error) {
      console.error("Error contributing:", error);
      toast.error("Failed to contribute");
    }
  };

  const withdraw = async () => {
    if (!program || !publicKey) return;

    try {
      const vaultAccounts = await program.account.vault.all();
      if (vaultAccounts.length === 0) {
        alert("No vault initialized");
        return;
      }

      const vault = vaultAccounts[0];
      const [vaultPda] = await deriveVaultPDA(vault.publicKey);

      const tx = await program.methods
        .withdraw()
        .accounts({
          vault: vault.publicKey,
          vaultPda,
          authority: publicKey,
          systemProgram: SystemProgram.programId,
        })
        .transaction();

      const transaction = new Transaction().add(tx);
      transaction.feePayer = publicKey;
      transaction.recentBlockhash = (
        await connection.getLatestBlockhash()
      ).blockhash;

      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, "confirmed");

      fetchTotalAmount();
      fetchBalance();
      showTransactionToast(signature, "Successfully withdrew funds!");
    } catch (error) {
      console.error("Error withdrawing:", error);
      toast.error("Failed to withdraw");
    }
  };

  const fetchTotalAmount = async () => {
    if (!program) return;

    try {
      const vaultAccounts = await program.account.vault.all();
      if (vaultAccounts.length > 0) {
        const vault = vaultAccounts[0];
        setTotalAmount(vault.account.totalAmount.toNumber() / LAMPORTS_PER_SOL);
      }
    } catch (error) {
      console.error("Error fetching total amount:", error);
    }
  };

  const fetchContribution = async () => {
    if (!program || !publicKey) return;

    try {
      const [contributionPda] = await deriveContributionPDA(publicKey);
      const contributionAccount = await program.account.contribution.fetch(
        contributionPda
      );
      setContribution(contributionAccount.amount.toNumber() / LAMPORTS_PER_SOL);
    } catch (error) {
      console.error("Error fetching contribution:", error);
      setContribution(0);
    }
  };

  useEffect(() => {
    fetchTotalAmount();
    if (publicKey) {
      fetchContribution();
      fetchBalance();
    }
  }, [publicKey, program]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12">
          <motion.div whileHover={{ scale: 1.02 }} className="p-4">
            <Navigation />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm"
          >
            <WalletMultiButton />
            {publicKey && (
              <div className="flex items-center gap-2">
                <Coins className="text-yellow-400" size={20} />
                <span className="text-yellow-400 font-bold">
                  {balance.toFixed(2)} SOL
                </span>
              </div>
            )}
          </motion.div>
        </div>

        {publicKey && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <Lock className="text-purple-400" size={24} />
                  <div>
                    <div className="text-gray-400">Total Locked</div>
                    <div className="text-2xl font-bold text-white">
                      {totalAmount} SOL
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <Wallet className="text-green-400" size={24} />
                  <div>
                    <div className="text-gray-400">Your Contribution</div>
                    <div className="text-2xl font-bold text-white">
                      {contribution} SOL
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <Users className="text-blue-400" size={24} />
                  <div>
                    <div className="text-gray-400">Total Contributors</div>
                    <div className="text-2xl font-bold text-white">
                      {contributors.length}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 items-center">
              {/* Only show Initialize and Withdraw buttons for authorized wallet */}
              {isAuthorized && (
                <>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={initialize}
                    className="w-64 px-6 py-3 bg-purple-600 text-white rounded-xl font-bold shadow-lg hover:bg-purple-700 transition-colors"
                  >
                    Initialize Vault
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={withdraw}
                    className="w-64 px-6 py-3 bg-red-600 text-white rounded-xl font-bold shadow-lg hover:bg-red-700 transition-colors"
                  >
                    Withdraw
                  </motion.button>
                </>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsContributeOpen(!isContributeOpen)}
                className="w-64 px-6 py-3 bg-green-600 text-white rounded-xl font-bold shadow-lg hover:bg-green-700 transition-colors"
              >
                Contribute
              </motion.button>

              {isContributeOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="flex gap-2"
                >
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount in SOL"
                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={contribute}
                    className="px-4 py-2 bg-blue-600 text-white rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-colors"
                  >
                    <ArrowUpCircle size={24} />
                  </motion.button>
                </motion.div>
              )}
            </div>

            {/* Contributors Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Contributors
              </h2>
              <div className="overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                        Wallet Address
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                        Amount (SOL)
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                        Twitter
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {contributors.map((contributor, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="hover:bg-white/5"
                      >
                        <td className="px-6 py-4 text-sm text-gray-300 font-mono">
                          {contributor.address}
                        </td>
                        <td className="px-6 py-4 text-sm text-green-400 font-bold">
                          {contributor.amount.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <a
                            href={`https://twitter.com/${contributor.twitter.slice(
                              1
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            {contributor.twitter}
                          </a>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>
      <ToastContainer />
    </div>
  );
}
