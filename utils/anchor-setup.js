import { Program, AnchorProvider } from "@project-serum/anchor";
import { Connection, PublicKey } from "@solana/web3.js";
import idl from "../utils/idl.json";

// Program ID should be a valid 32-byte public key
export const PROGRAM_ID = new PublicKey(
  "7X6QKRLJUmBwjiNFwhtkqfvtBtjQTCYtMsY7zqrz3aZk"
);

export function getProgram(connection, wallet) {
  const provider = new AnchorProvider(
    connection,
    wallet,
    AnchorProvider.defaultOptions()
  );
  return new Program(idl, PROGRAM_ID, provider);
}

export const deriveVaultPDA = async (vaultKey) => {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("vault"), vaultKey.toBuffer()],
    PROGRAM_ID
  );
};

export const deriveContributionPDA = async (contributor) => {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("contribution"), contributor.toBuffer()],
    PROGRAM_ID
  );
};
