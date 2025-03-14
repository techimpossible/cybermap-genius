
import React from "react";
import { Link } from "react-router-dom";
import { Shield, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cyber-navy text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Shield className="w-6 h-6 text-cyber-teal" />
              <span className="text-xl font-medium">CyberMap</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              A comprehensive cybersecurity roadmap to guide you through the complex landscape of 
              digital security skills and certifications.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-cyber-teal transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyber-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyber-teal transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-cyber-teal transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-gray-300 hover:text-cyber-teal transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-cyber-teal transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/progress" className="text-gray-300 hover:text-cyber-teal transition-colors">
                  Progress
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-cyber-teal transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-cyber-teal transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-300 hover:text-cyber-teal transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center md:text-left text-gray-400">
          <p>&copy; {new Date().getFullYear()} CyberMap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
