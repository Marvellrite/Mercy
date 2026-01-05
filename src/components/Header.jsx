import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              FJF
            </div>
            <span className="font-semibold text-gray-900 hidden sm:block">
              Family Joy Food Ventures
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-green-600 transition"
            >
              Home
            </a>
            <a
              href="#products"
              className="text-gray-700 hover:text-green-600 transition"
            >
              Products
            </a>
            <a
              href="#nutrition"
              className="text-gray-700 hover:text-green-600 transition"
            >
              Nutrition & Benefits
            </a>
            <a
              href="#gallery"
              className="text-gray-700 hover:text-green-600 transition"
            >
              Gallery
            </a>
            <a
              href="#land-lease"
              className="text-gray-700 hover:text-green-600 transition"
            >
              Land Leasing
            </a>
            <a
              href="#investors"
              className="text-gray-700 hover:text-green-600 transition"
            >
              Investors
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a
              href="#home"
              className="block text-gray-700 hover:text-green-600 transition"
            >
              Home
            </a>
            <a
              href="#products"
              className="block text-gray-700 hover:text-green-600 transition"
            >
              Products
            </a>
            <a
              href="#nutrition"
              className="block text-gray-700 hover:text-green-600 transition"
            >
              Nutrition & Benefits
            </a>
            <a
              href="#gallery"
              className="block text-gray-700 hover:text-green-600 transition"
            >
              Gallery
            </a>
            <a
              href="#land-lease"
              className="block text-gray-700 hover:text-green-600 transition"
            >
              Land Leasing
            </a>
            <a
              href="#investors"
              className="block text-gray-700 hover:text-green-600 transition"
            >
              Investors
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
