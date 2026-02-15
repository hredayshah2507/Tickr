import { Menu, X, Search, MapPin, Wallet } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("All Cities");

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const connectWallet = () => {
    alert("Wallet connection feature would integrate MetaMask here!");
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-black/80">
      <div className="container px-4 mx-auto relative">
        <div className="flex justify-between items-center mb-4">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-violet-500 to-violet-800 text-transparent bg-clip-text">
              Tixly
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex ml-14 space-x-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="text-neutral-300 hover:text-violet-500 transition">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden lg:flex justify-center space-x-4 items-center">
            <button
              onClick={connectWallet}
              className="flex items-center gap-2 bg-gradient-to-r from-violet-500 to-violet-800 py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-violet-500/50 transition"
            >
              <Wallet size={18} />
              <span>Connect Wallet</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleNavbar} className="text-white">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex gap-3 items-center flex-col md:flex-row">
          <div className="flex items-center gap-2 bg-neutral-800 rounded-lg px-4 py-2 w-full md:w-auto flex-1">
            <Search size={20} className="text-violet-500" />
            <input
              type="text"
              placeholder="Search events, movies, concerts..."
              className="bg-transparent outline-none text-white flex-1 placeholder-neutral-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 bg-neutral-800 rounded-lg px-4 py-2 w-full md:w-auto">
            <MapPin size={20} className="text-violet-500" />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-transparent outline-none text-white placeholder-neutral-400 cursor-pointer"
            >
              <option>All Cities</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
              <option>Pune</option>
            </select>
          </div>

          <button className="hidden md:block bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-lg transition w-full md:w-auto">
            Search
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-black w-full p-6 flex flex-col justify-center items-center lg:hidden mt-4">
            <ul className="space-y-4 mb-6">
              {navItems.map((item, index) => (
                <li key={index} className="text-center">
                  <a href={item.href} className="text-neutral-300 hover:text-orange-500">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={connectWallet}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-500 to-violet-800 py-3 px-4 rounded-lg hover:shadow-lg hover:shadow-violet-500/50 transition"
            >
              <Wallet size={18} />
              <span>Connect Wallet</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
