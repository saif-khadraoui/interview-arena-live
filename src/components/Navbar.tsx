
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-interview-blue-600">
            InterviewArena
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-interview-slate-700 hover:text-interview-blue-600 transition">
            Features
          </a>
          <a href="#how-it-works" className="text-interview-slate-700 hover:text-interview-blue-600 transition">
            How It Works
          </a>
          <a href="#pricing" className="text-interview-slate-700 hover:text-interview-blue-600 transition">
            Pricing
          </a>
          <a href="#testimonials" className="text-interview-slate-700 hover:text-interview-blue-600 transition">
            Testimonials
          </a>
          <Button className="bg-interview-blue-600 hover:bg-interview-blue-700">
            Get Started
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-interview-slate-700 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 right-0 shadow-md z-50 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              onClick={() => setIsMenuOpen(false)}
              className="text-interview-slate-700 hover:text-interview-blue-600 transition py-2"
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              onClick={() => setIsMenuOpen(false)}
              className="text-interview-slate-700 hover:text-interview-blue-600 transition py-2"
            >
              How It Works
            </a>
            <a 
              href="#pricing" 
              onClick={() => setIsMenuOpen(false)}
              className="text-interview-slate-700 hover:text-interview-blue-600 transition py-2"
            >
              Pricing
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setIsMenuOpen(false)}
              className="text-interview-slate-700 hover:text-interview-blue-600 transition py-2"
            >
              Testimonials
            </a>
            <Button className="bg-interview-blue-600 hover:bg-interview-blue-700 w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
