import { Menu, X, Search, MapPin, Wallet, Ticket } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("All Cities");
  const navigate = useNavigate();
  const currentLocation = useLocation();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const connectWallet = () => {
    alert("Wallet connection feature would integrate MetaMask here!");
  };

  // Handle navigation - go to home then scroll to section
  const handleNavClick = (e, href) => {
    e.preventDefault();
    
    // If it's just "#" (no section), just go to home
    if (href === '#' || href === '') {
      if (currentLocation.pathname !== '/') {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setMobileDrawerOpen(false);
      return;
    }
    
    // If we're not on home page, navigate to home first
    if (currentLocation.pathname !== '/') {
      navigate('/');
      // Wait for navigation, then try to scroll
      setTimeout(() => {
        if (href.startsWith('#')) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            // Section doesn't exist, just scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      }, 100);
    } else {
      // Already on home, just scroll
      if (href.startsWith('#')) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // Section doesn't exist, just scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }
    
    // Close mobile menu if open
    setMobileDrawerOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-black/80">
      <div className="container px-4 mx-auto relative">
        <div className="flex justify-between items-center mb-4">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 cursor-pointer">
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-violet-500 to-violet-800 text-transparent bg-clip-text">
              Tixly
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex ml-14 space-x-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-neutral-300 hover:text-violet-500 transition cursor-pointer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden lg:flex justify-center space-x-4 items-center">
            {/* My Tickets Button */}
            <Link to="/my-tickets">
              <button className="flex items-center gap-2 bg-neutral-800 hover:bg-violet-600 text-white py-2 px-4 rounded-lg transition-all duration-300 border border-neutral-700 hover:border-violet-500">
                <Ticket size={18} />
                <span>My Tickets</span>
              </button>
            </Link>
            
            {/* Connect Wallet Button */}
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
                  <a 
                    href={item.href} 
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-neutral-300 hover:text-orange-500 cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* My Tickets Button - Mobile */}
            <Link to="/my-tickets" className="w-full mb-3" onClick={() => setMobileDrawerOpen(false)}>
              <button className="w-full flex items-center justify-center gap-2 bg-neutral-800 hover:bg-violet-600 text-white py-3 px-4 rounded-lg transition-all duration-300 border border-neutral-700">
                <Ticket size={18} />
                <span>My Tickets</span>
              </button>
            </Link>
            
            {/* Connect Wallet Button - Mobile */}
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