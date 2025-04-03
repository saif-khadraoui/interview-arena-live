
import { useState } from "react";
import { Menu, X } from "lucide-react";
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div>
          <a href="/" className="navbar-logo">
            InterviewArena
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Testimonials</a>
          <button className="navbar-button">
            Get Started
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="navbar-toggle"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="navbar-mobile">
          <div className="container">
            <a 
              href="#features" 
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#pricing" 
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <button className="navbar-mobile-button">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
