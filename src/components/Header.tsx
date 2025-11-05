import { useState } from "react";
import { Grid3X3, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="absolute text-white top-0 bg-transparent left-0 right-0 z-50">
      <div className="container mx-auto py-4 px-4 flex items-start justify-between relative">
        {/* Logo + tagline */}
        <div className="md:mt-10">
          <p className="text-2xl md:text-5xl font-semibold tracking-tight">
            CANDYSPACE
          </p>
          <p className="text-sm text-white text-start md:mt-5">
            Where Wisdom Meets Ambition.
          </p>
        </div>

        {/* Menu Button */}
        <button
          onClick={toggleMenu}
          className="p-2 rounded-lg transition-colors md:hidden z-[60] relative"
        >
          {menuOpen ? (
            <X className="w-8 h-8 text-white" />
          ) : (
            <Grid3X3 className="w-8 h-8 text-white" />
          )}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 items-center mt-10">
          <Link to="#" className="hover:text-purple-400 transition-colors">
            Home
          </Link>
          <Link to="#" className="hover:text-purple-400 transition-colors">
            About
          </Link>
          <Link to="#" className="hover:text-purple-400 transition-colors">
            Services
          </Link>
          <Link to="#" className="hover:text-purple-400 transition-colors">
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-black/90 flex flex-col justify-center items-center space-y-8 text-lg z-50"
          >
            <Link to="#" onClick={toggleMenu} className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            <Link to="#" onClick={toggleMenu} className="hover:text-purple-400 transition-colors">
              About
            </Link>
            <Link to="#" onClick={toggleMenu} className="hover:text-purple-400 transition-colors">
              Services
            </Link>
            <Link to="#" onClick={toggleMenu} className="hover:text-purple-400 transition-colors">
              Contact
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
