
import { Twitter, Linkedin, Youtube, Mail } from "lucide-react";
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          {/* Company Info */}
          <div className="footer-brand">
            <h3 className="footer-brand-name">InterviewArena</h3>
            <p className="footer-brand-description">
              Helping job seekers practice interviews and land their dream jobs through peer-to-peer interview simulation.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="footer-social-link">
                <Linkedin size={20} />
              </a>
              <a href="#" className="footer-social-link">
                <Youtube size={20} />
              </a>
              <a href="#" className="footer-social-link">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            {/* Links */}
            <div className="footer-links-column">
              <h4>Product</h4>
              <ul className="footer-links-list">
                <li className="footer-links-item">
                  <a href="#features">Features</a>
                </li>
                <li className="footer-links-item">
                  <a href="#pricing">Pricing</a>
                </li>
                <li className="footer-links-item">
                  <a href="#">FAQ</a>
                </li>
                <li className="footer-links-item">
                  <a href="#">Resources</a>
                </li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Company</h4>
              <ul className="footer-links-list">
                <li className="footer-links-item">
                  <a href="#">About Us</a>
                </li>
                <li className="footer-links-item">
                  <a href="#">Careers</a>
                </li>
                <li className="footer-links-item">
                  <a href="#">Blog</a>
                </li>
                <li className="footer-links-item">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="footer-links-item">
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} InterviewArena. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
