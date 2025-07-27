import React, { useState } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-teal-500 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="border-b border-teal-400 py-2">
          <div className="flex justify-between items-center text-sm text-white">
            <div className="flex space-x-4">
              <div className="flex items-center space-x-1">
                <Phone size={14} />
                <span>+91-80-28395555</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail size={14} />
                <span>info@spectronicplating.com</span>
              </div>
            </div>
            <div className="text-xs">
              ISO 9001:2015 • AS9100 Rev-D • ISO 14001:2015
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-16 h-16 rounded-lg flex items-center justify-center mr-4">
                <div className="text-teal-800 font-bold text-2xl">SP</div>
              </div>
              <div className="text-white">
                <div className="text-xl font-bold">Spectronic Plating</div>
                <div className="text-xs text-teal-100">Excellence in Metal Finishing</div>
              </div>
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:flex space-x-8">
              <a href="#home" className="text-white hover:text-yellow-300 transition-colors font-medium">
                HOME
              </a>
              <div className="relative group">
                <button className="text-white hover:text-yellow-300 transition-colors font-medium flex items-center">
                  ABOUT US
                  <ChevronDown size={16} className="ml-1" />
                </button>
              </div>
              <a href="#team" className="text-white hover:text-yellow-300 transition-colors font-medium">
                TEAM
              </a>
              <div className="relative group">
                <button className="text-white hover:text-yellow-300 transition-colors font-medium flex items-center">
                  SERVICES
                  <ChevronDown size={16} className="ml-1" />
                </button>
              </div>
              <a href="#types" className="text-white hover:text-yellow-300 transition-colors font-medium">
                TYPES OF PLATING
              </a>
              <a href="#gallery" className="text-white hover:text-yellow-300 transition-colors font-medium">
                GALLERY
              </a>
              <div className="relative group">
                <button className="text-white hover:text-yellow-300 transition-colors font-medium flex items-center">
                  BUSINESS PARTNERS
                  <ChevronDown size={16} className="ml-1" />
                </button>
              </div>
              <a href="#contact" className="text-white hover:text-yellow-300 transition-colors font-medium">
                CONTACT US
              </a>
            </div>

            <div className="hidden lg:block">
              <button className="bg-yellow-500 text-teal-800 px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors font-semibold">
                Get Quote
              </button>
            </div>

            {/* Mobile menu button */}
            <button onClick={toggleMenu} className="lg:hidden text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-teal-400">
              <div className="flex flex-col space-y-3 mt-4">
                <a href="#home" className="text-white hover:text-yellow-300 transition-colors">
                  HOME
                </a>
                <a href="#about" className="text-white hover:text-yellow-300 transition-colors">
                  ABOUT US
                </a>
                <a href="#team" className="text-white hover:text-yellow-300 transition-colors">
                  TEAM
                </a>
                <a href="#services" className="text-white hover:text-yellow-300 transition-colors">
                  SERVICES
                </a>
                <a href="#types" className="text-white hover:text-yellow-300 transition-colors">
                  TYPES OF PLATING
                </a>
                <a href="#gallery" className="text-white hover:text-yellow-300 transition-colors">
                  GALLERY
                </a>
                <a href="#contact" className="text-white hover:text-yellow-300 transition-colors">
                  CONTACT US
                </a>
                <button className="bg-yellow-500 text-teal-800 px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors font-semibold text-left">
                  Get Quote
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}