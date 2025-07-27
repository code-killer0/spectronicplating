import React from 'react';
import { MapPin, Phone, Mail, ArrowUp, Globe } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center mr-3">
                <div className="text-teal-800 font-bold text-lg">SP</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-yellow-400">Spectronic Plating</h3>
                <p className="text-xs text-gray-300">Excellence in Metal Finishing</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of precision electroplating services since 1984. 
              Serving aerospace, defense, electronics, and industrial markets with 
              ISO certified quality standards.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="bg-teal-600 px-3 py-1 rounded text-xs font-bold">
                ISO 9001:2015
              </div>
              <div className="bg-yellow-600 px-3 py-1 rounded text-xs font-bold">
                AS9100 Rev-D
              </div>
              <div className="bg-teal-600 px-3 py-1 rounded text-xs font-bold">
                ISO 14001:2015
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Gold Plating</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Silver Plating</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Nickel Plating</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Electroless Plating</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Selective Plating</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Reel-to-Reel Plating</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Industries Served</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Aerospace</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Defense</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Electronics</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Automotive</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Medical Devices</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Telecommunications</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-yellow-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  Bangalore Aero Space Park<br />
                  Bangalore, Karnataka<br />
                  India
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-yellow-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">+91-80-28395555</div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-yellow-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">info@spectronicplating.com</div>
              </div>
              <div className="flex items-center space-x-3">
                <Globe size={18} className="text-yellow-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">www.spectronicplating.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Spectronic Plating India Private Limited. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <button
              onClick={scrollToTop}
              className="bg-teal-500 hover:bg-teal-600 p-3 rounded-full transition-colors"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}