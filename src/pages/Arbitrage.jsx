import Navigation from "../components/Navigation";
import { Card } from "@/components/ui/card";

const Arbitrage = () => {
  const types = [
    {
      title: "Pure Arbitrage",
      description: "Exploiting price differences for the same asset across different markets or platforms (e.g., buying a stock on the New York Stock Exchange and selling it on the London Stock Exchange)."
    },
    {
      title: "Risk Arbitrage",
      description: "This involves more uncertainty, such as betting on price changes during mergers and acquisitions. For example, an arbitrageur might buy shares of a company being acquired, expecting the share price to rise as the deal closes."
    },
    {
      title: "Triangular Arbitrage",
      description: "Often seen in currency trading, this involves exploiting exchange rate differences between three currencies. For instance, converting USD to EUR, EUR to GBP, and GBP back to USD to gain profit from discrepancies."
    },
    {
      title: "Statistical Arbitrage",
      description: "This uses quantitative models to identify assets whose prices deviate from their historical relationships, assuming they will revert to the mean."
    },
    {
      title: "Crypto Arbitrage",
      description: "Buying cryptocurrencies on one exchange at a lower price and selling them on another exchange at a higher price."
    }
  ];

  const challenges = [
    "Transaction Costs: Fees for buying and selling can eat into profits.",
    "Market Efficiency: As markets become more efficient, arbitrage opportunities diminish quickly.",
    "Execution Speed: Arbitrage often requires rapid execution to capitalize on fleeting price differences.",
    "Capital Requirements: To make substantial profits, arbitrageurs often need significant capital."
  ];

  return (
    <div className="min-h-screen bg-black/95">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Understanding Arbitrage</h1>
        
        {/* Introduction */}
        <div className="prose prose-invert max-w-none mb-16">
          <p className="text-lg text-gray-300 leading-relaxed">
            Arbitrage is a financial strategy that involves taking advantage of price differences for the same or similar assets in different markets or forms. The basic idea is to buy an asset in one market where it is priced lower and simultaneously sell it in another market where it is priced higher, thereby making a profit without assuming significant risk.
          </p>
        </div>

        {/* How it Works */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 gradient-text">How Arbitrage Works</h2>
          <div className="space-y-4 text-gray-300">
            <p><span className="font-bold text-white">1. Identify Price Disparities:</span> Arbitrageurs look for situations where the same asset is priced differently across markets. For example, a stock might trade at $100 on one exchange and $101 on another.</p>
            <p><span className="font-bold text-white">2. Simultaneous Transactions:</span> To minimize risk, the arbitrageur buys the asset at the lower price and sells it at the higher price at nearly the same time. This ensures the price gap is locked in as profit.</p>
            <p><span className="font-bold text-white">3. Profit Realization:</span> The profit is the difference between the buying and selling prices, minus any transaction costs.</p>
          </div>
        </section>

        {/* Types of Arbitrage */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 gradient-text">Types of Arbitrage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {types.map((type, index) => (
              <Card key={index} className="p-6 glass-card">
                <h3 className="text-xl font-bold mb-3 text-white">{type.title}</h3>
                <p className="text-gray-300">{type.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section>
          <h2 className="text-2xl font-bold mb-6 gradient-text">Challenges in Arbitrage</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            {challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
          <p className="mt-8 text-gray-300">
            Arbitrage plays an essential role in financial markets by helping to ensure prices remain consistent across different platforms and regions, ultimately contributing to market efficiency.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Arbitrage;