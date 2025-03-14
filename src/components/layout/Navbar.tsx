
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "Resources", path: "/resources" },
    { name: "Progress", path: "/progress" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12 py-4",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-cyber-navy font-medium text-lg"
        >
          <Shield className="w-6 h-6 text-cyber-teal" />
          <span className="animate-fade-in">CyberMap</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="cyber-link py-2 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button variant="outline" className="mr-2">
            Sign In
          </Button>
          <Button>Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyber-navy"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white/95 backdrop-blur-md z-40 md:hidden flex flex-col transition-transform duration-300 ease-in-out pt-20",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center space-y-6 px-8 py-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-xl font-medium text-cyber-navy py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-6 flex flex-col w-full space-y-4">
            <Button variant="outline" className="w-full">
              Sign In
            </Button>
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
