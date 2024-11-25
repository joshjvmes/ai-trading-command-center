import { Link } from "react-router-dom";
import { navItems } from "../nav-items";

const Navigation = () => {
  return (
    <nav className="border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold gradient-text">
              ROCKET $ROK
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;