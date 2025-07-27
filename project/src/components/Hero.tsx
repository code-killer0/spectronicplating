import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Military aircraft - Defense Industry" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Navigation arrows */}
      <button className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-300 transition-colors z-10">
        <ChevronLeft size={48} />
      </button>
      <button className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-300 transition-colors z-10">
        <ChevronRight size={48} />
      </button>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              PLATING FOR
              <br />
              <span className="text-yellow-400">DEFENSE INDUSTRY</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-yellow-500 text-teal-800 px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors font-bold text-lg flex items-center justify-center group">
                Learn More
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-teal-800 transition-colors font-bold text-lg">
                Our Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full"></div>
        <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full"></div>
      </div>
    </section>
  );
}