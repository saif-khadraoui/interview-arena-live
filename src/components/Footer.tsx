
import { Twitter, Linkedin, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-interview-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-white">InterviewArena</h3>
            <p className="text-interview-slate-300 mb-6 max-w-md">
              Helping job seekers practice interviews and land their dream jobs through peer-to-peer interview simulation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-interview-slate-300 hover:text-interview-blue-400 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-interview-slate-300 hover:text-interview-blue-400 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-interview-slate-300 hover:text-interview-blue-400 transition">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-interview-slate-300 hover:text-interview-blue-400 transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-interview-slate-300 hover:text-white transition">Features</a>
              </li>
              <li>
                <a href="#pricing" className="text-interview-slate-300 hover:text-white transition">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-interview-slate-300 hover:text-white transition">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-interview-slate-300 hover:text-white transition">Resources</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-interview-slate-300 hover:text-white transition">About Us</a>
              </li>
              <li>
                <a href="#" className="text-interview-slate-300 hover:text-white transition">Careers</a>
              </li>
              <li>
                <a href="#" className="text-interview-slate-300 hover:text-white transition">Blog</a>
              </li>
              <li>
                <a href="#" className="text-interview-slate-300 hover:text-white transition">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-interview-slate-300 hover:text-white transition">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-interview-slate-700 mt-12 pt-8 text-center md:text-left">
          <p className="text-interview-slate-400">
            © {currentYear} InterviewArena. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
