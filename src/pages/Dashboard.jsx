import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Will implement with Supabase later
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-xl font-bold">$ROK</Link>
            <div className="text-sm breadcrumbs">
              <ul className="flex space-x-2">
                <li><Link to="/">Home</Link></li>
                <li>Dashboard</li>
              </ul>
            </div>
          </div>
          <Button variant="ghost" onClick={handleLogout}>Logout</Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/dashboard/trading">
            <Card className="p-6 hover:bg-accent transition-colors">
              <h3 className="text-lg font-semibold mb-2">Trading Dashboard</h3>
              <p className="text-sm text-muted-foreground">Track prices and manage your trades</p>
            </Card>
          </Link>
          
          <Link to="/dashboard/portfolio">
            <Card className="p-6 hover:bg-accent transition-colors">
              <h3 className="text-lg font-semibold mb-2">Portfolio</h3>
              <p className="text-sm text-muted-foreground">View your assets and performance</p>
            </Card>
          </Link>
          
          <Link to="/dashboard/fund">
            <Card className="p-6 hover:bg-accent transition-colors">
              <h3 className="text-lg font-semibold mb-2">Fund Account</h3>
              <p className="text-sm text-muted-foreground">Add funds to your account</p>
            </Card>
          </Link>
          
          <Link to="/dashboard/balance">
            <Card className="p-6 hover:bg-accent transition-colors">
              <h3 className="text-lg font-semibold mb-2">Balance</h3>
              <p className="text-sm text-muted-foreground">Check your account balance</p>
            </Card>
          </Link>
          
          <Link to="/dashboard/history">
            <Card className="p-6 hover:bg-accent transition-colors">
              <h3 className="text-lg font-semibold mb-2">Trade History</h3>
              <p className="text-sm text-muted-foreground">View your past transactions</p>
            </Card>
          </Link>
          
          <Link to="/dashboard/messages">
            <Card className="p-6 hover:bg-accent transition-colors">
              <h3 className="text-lg font-semibold mb-2">Messages</h3>
              <p className="text-sm text-muted-foreground">Chat with support and community</p>
            </Card>
          </Link>
          
          <Link to="/dashboard/withdraw">
            <Card className="p-6 hover:bg-accent transition-colors">
              <h3 className="text-lg font-semibold mb-2">Withdraw</h3>
              <p className="text-sm text-muted-foreground">Withdraw your funds</p>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;