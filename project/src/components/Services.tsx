import React from 'react';
import { ChevronDown } from 'lucide-react';

const services = [
  'ELECTROLESS PLATING',
  'REEL TO REEL SELECTIVE GOLD PLATING',
  'SELECTIVE GOLD PLATING',
  'REEL TO REEL GOLD PLATING',
  'REEL TO REEL NICKEL PLATING',
  'REEL TO REEL SILVER PLATING',
  'ELECTROLESS NICKEL PLATING',
  'SILVER PLATING',
  'NICKEL PLATING',
  'BARREL PLATING',
  'RACK PLATING',
  'GOLD PLATING',
  'PALLADIUM PLATING'
];

const platingTypes = [
  'Gold Plating',
  'Palladium Plating',
  'Silver Plating',
  'Nickel Plating',
  'Copper Plating',
  'Tin Plating',
  'Electroless Nickel Plating',
  'Electroless Copper Plating',
  'Passivation',
  'Anodizing Treatment of Aluminum'
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Certificates Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-600 mb-12">
            CERTIFICATES AND POLICIES
          </h2>
          <div className="flex justify-center space-x-4 mb-16">
            <div className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold">
              ISO 9001:2015
            </div>
            <div className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold">
              AS9100 Rev-D
            </div>
            <div className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold">
              ISO 14001:2015
            </div>
            <div className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold">
              ITAR Registered
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-yellow-600 text-center mb-12">
            SERVICES
          </h2>
          <div className="max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-yellow-500 text-white p-4 mb-2 rounded-lg hover:bg-yellow-600 transition-colors cursor-pointer flex justify-between items-center"
              >
                <span className="font-semibold">{service}</span>
                <ChevronDown size={20} />
              </div>
            ))}
          </div>
        </div>

        {/* Types of Plating Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-yellow-600 text-center mb-12">
            TYPES OF PLATING
          </h2>
          <div className="max-w-4xl mx-auto">
            {platingTypes.map((type, index) => (
              <div 
                key={index} 
                className="bg-yellow-500 text-white p-4 mb-2 rounded-lg hover:bg-yellow-600 transition-colors cursor-pointer flex justify-between items-center"
              >
                <span className="font-semibold">{type}</span>
                <ChevronDown size={20} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}