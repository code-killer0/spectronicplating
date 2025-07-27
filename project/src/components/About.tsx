import React from 'react';
import { Users, Calendar, Globe, Eye } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Content Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-yellow-600 mb-8 leading-tight">
            To Make Your Life Easier – Is Our Top Priority
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Team collaboration" 
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Culture</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Spectronic has grown a long way since its inception in 1984, from a 4 member team with just one client to be one of the most preferred electroplating service providers by the best companies in the manufacturing industry.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The core reason behind the growth is our culture of innovation, a positive and an insatiable appetite for excellence. Our shared goal to achieve excellence has been pivotal to our growth.
            </p>
          </div>
        </div>

        {/* Milestones Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 mb-12">Milestones</h3>
          <div className="space-y-8">
            <div className="border-l-4 border-teal-500 pl-8">
              <div className="text-xl font-bold text-teal-600 mb-2">1984</div>
              <p className="text-gray-700">Spectronic Corp was founded in Canada</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-8">
              <div className="text-xl font-bold text-teal-600 mb-2">2005</div>
              <p className="text-gray-700">Spectronic Plating India Private Limited was found with a strength of 4 employees, catering to one client order</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-8">
              <div className="text-xl font-bold text-teal-600 mb-2">2006</div>
              <p className="text-gray-700">Reel-to-Reel setup and start-up of production for Electronics & Electrical Industries</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-8">
              <div className="text-xl font-bold text-teal-600 mb-2">2010</div>
              <p className="text-gray-700">Electronics & Electrical Industries. ISO 14001:2005 certification was awarded to us in consideration for our constant endeavor to work on environmentally friendly processes and practices</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-8">
              <div className="text-xl font-bold text-teal-600 mb-2">2016</div>
              <p className="text-gray-700">A green and eco-friendly campus located in Bangalore Aero Space Park, became our new home.</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-8">
              <div className="text-xl font-bold text-teal-600 mb-2">2018</div>
              <p className="text-gray-700">We were awarded with AS 9100 Rev–D for Aerospace processes. We were awarded with revised certification for quality system (ISO 9001:2015) and EMS (ISO 14001:2015).</p>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-teal-500 text-white py-20 rounded-2xl text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-8">Our Vision</h3>
            <div className="flex justify-center mb-8">
              <div className="bg-black w-20 h-20 rounded-full flex items-center justify-center">
                <Eye size={40} className="text-teal-400" />
              </div>
            </div>
            <p className="text-2xl font-light max-w-4xl mx-auto leading-relaxed">
              To be the preferred supplier to original equipment manufacturers across the globe.
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-400 opacity-50"></div>
        </div>
      </div>
    </section>
  );
}