import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Whitepaper = () => {
  const sections = [
    {
      title: "Abstract",
      content: `Rocket $ROK introduces an unprecedented approach to decentralized finance by combining AI-driven arbitrage strategies with on-chain liquidity management. Through a dual-token ecosystem, $ROK and $SET, Rocket empowers users with seamless access to algorithmic trading, full liquidity control, and market exposure, enabling individuals and co-investors to participate in a cutting-edge, programmatic hedge fund environment.

The system operates via a managed wallet trading platform supported by proprietary AI agents executing delta-neutral arbitrage across ten major blockchains. With timelock encryption and secondary co-investment opportunities, Rocket $ROK bridges individual investors and institutional-grade trading strategies, offering a secure and innovative financial instrument.`
    },
    {
      title: "Introduction",
      content: `In an era where decentralized finance is transforming global markets, Rocket $ROK positions itself as the leading AI-driven arbitrage and liquidity management solution. Leveraging years of proven expertise in arbitrage and partnerships with global leaders such as Delta1—a top ten ROI global trading firm—we offer a dual-token ecosystem tailored for innovation and scalability.

By utilizing cutting-edge technologies, Rocket introduces secure, AI-managed wallets paired with an arbitrage-optimized trading system. The platform integrates fiat on-ramps and withdrawal systems, making it accessible to a wide audience while maintaining full transparency and liquidity control.`
    },
    {
      title: "System Overview",
      subsections: [
        {
          title: "$ROK: The Primary Token",
          content: `Rocket $ROK serves as the gateway to the platform's algorithmic trading ecosystem. Each $ROK token represents access to a pre-configured wallet, equipped with AI arbitrage capabilities across the following blockchains:

Major Currencies: SOL, MATIC, AVAX, ETH, BTC, BNB, USDC, USDT, XRP, DOGE, ADA, and TRX.
Wallet Requirements: A minimum deposit of $10,000 (equally distributed across the ten supported currencies) is required to activate trading functionality.

Key features include:
• Programmatic Trades: AI-driven arbitrage ensures zero-loss trading across chains.
• Full Liquidity: Wallet holders maintain full withdrawal rights without needing to re-deposit funds.
• Timelock Encryption: Funds are secured in one-year intervals to optimize arbitrage performance.`
        },
        {
          title: "$SET: The Secondary Token",
          content: `$SET acts as a secondary coin designed to support co-investment opportunities. This token allows broader participation in Rocket's arbitrage profits, facilitating liquidity contributions from external investors.

• Growth-Driven Design: $SET tokens provide a mechanism to bootstrap awareness and incentivize ecosystem growth.
• Future Integration: $SET tokens are hard-swapped into attached tokens, aligning with $ROK's performance and enabling broader token utility.`
        }
      ]
    },
    {
      title: "Technical Architecture",
      subsections: [
        {
          title: "Managed Wallet Trading System",
          content: `The core of Rocket's ecosystem is its AI-powered Managed Wallet Trading System. Features include:

• Algorithmic Arbitrage: Autonomous trades are executed across ten biodiverse chains, achieving consistent returns between 2–5% per transaction.
• Delta-Neutral Strategies: Drawing from Delta1's expertise, Rocket adopts strategies that minimize risk while maximizing ROI.
• On-Chain Integration: Built on Solana for its high performance and scalability, ensuring low latency and optimal execution.`
        },
        {
          title: "Fiat On-Ramps and Accessibility",
          content: `Rocket integrates with leading payment solutions, including Eukapay, Crossmint, and Moonpay, for seamless fiat on- and off-ramps. Crypto on-ramps are managed through Rocket's proprietary portal, ensuring a streamlined onboarding experience for all users.

• Universal Access: VISA partnerships expand usability for traditional investors.
• Permanent Wallet Design: Users purchase key pairings linked to pre-configured wallets, ensuring permanent withdrawal addresses and ease of use.`
        }
      ]
    },
    {
      title: "Market Proposition",
      content: `Rocket $ROK redefines arbitrage trading by combining institutional-grade expertise with decentralized technology. Its market proposition is underpinned by:

• Transparency and Trust: Every wallet operates autonomously and securely, offering full liquidity and zero loss guarantees.
• Dual-Token Ecosystem: $ROK and $SET enable primary trading and secondary co-investment, respectively.
• Proven Expertise: Decades of successful arbitrage by its creators and partners like Delta1 form the foundation of the system.`
    },
    {
      title: "Distribution Model",
      content: `• 100,000 Wallets: Each wallet is priced at $1,000, representing $ROK token ownership.
• Deposit Requirement: A $10,000 minimum balance is required to activate trading, split evenly across the ten major currencies.
• Liquidity Assurance: Deposits remain fully liquid and withdrawable, locked for a one-year trading interval.`
    },
    {
      title: "Conclusion",
      content: `Rocket $ROK is more than a decentralized trading solution—it's the next evolution in programmatic hedge funds. Combining AI-driven arbitrage, timelock encryption, and a dual-token ecosystem, Rocket delivers unmatched security, liquidity, and ROI potential.

By democratizing access to institutional-grade trading, Rocket $ROK empowers investors to hedge on-chain with confidence, transparency, and efficiency. Whether as a $ROK wallet holder or $SET co-investor, participants gain unparalleled exposure to a system designed for explosive growth and stability in a volatile market.

It's time to hedge on-chain. Welcome to Rocket $ROK.`
    }
  ];

  return (
    <div className="min-h-screen pb-20">
      <Navigation />
      {/* Header */}
      <div className="container mx-auto px-4 pt-8">
        <Link to="/" className="inline-flex items-center text-rok-blue hover:text-rok-green transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          Rocket $ROK: Revolutionizing Decentralized Arbitrage and Liquidity Management
        </h1>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          {sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-rok-blue">
                {section.title}
              </h2>
              {section.subsections ? (
                section.subsections.map((subsection, subIndex) => (
                  <div key={subIndex} className="mb-8">
                    <h3 className="text-xl font-bold mb-4 text-rok-green">
                      {subsection.title}
                    </h3>
                    <div className="text-gray-300 space-y-4 whitespace-pre-line">
                      {subsection.content}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-gray-300 space-y-4 whitespace-pre-line">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <Link to="/">
            <Button size="lg" className="bg-gradient-to-r from-rok-blue to-rok-green text-white text-lg px-8 py-6 rounded-full hover:opacity-90 transition-all">
              Reserve Your Smart Wallet Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
