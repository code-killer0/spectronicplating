import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Globe } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-600 mb-4">
            CONTACT US
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your metal finishing needs? Contact our expert team 
            for a consultation and customized quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin size={24} className="text-teal-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">
                    Bangalore Aero Space Park<br />
                    Bangalore, Karnataka<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone size={24} className="text-teal-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">+91-80-28395555</p>
                  <p className="text-gray-600">+91-80-28395556</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail size={24} className="text-teal-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">info@spectronicplating.com</p>
                  <p className="text-gray-600">sales@spectronicplating.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Globe size={24} className="text-teal-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Website</h4>
                  <p className="text-gray-600">www.spectronicplating.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock size={24} className="text-teal-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-teal-50 rounded-lg">
              <h4 className="font-semibold text-teal-800 mb-2">Quality Certifications</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-teal-500 text-white px-3 py-1 rounded text-sm">ISO 9001:2015</span>
                <span className="bg-teal-500 text-white px-3 py-1 rounded text-sm">AS9100 Rev-D</span>
                <span className="bg-teal-500 text-white px-3 py-1 rounded text-sm">ISO 14001:2015</span>
                <span className="bg-teal-500 text-white px-3 py-1 rounded text-sm">ITAR Registered</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="gold-plating">Gold Plating</option>
                  <option value="silver-plating">Silver Plating</option>
                  <option value="nickel-plating">Nickel Plating</option>
                  <option value="electroless-plating">Electroless Plating</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your project requirements, specifications, quantities, and timeline..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-3 px-6 rounded-lg hover:bg-teal-600 transition-colors font-semibold flex items-center justify-center"
              >
                Send Message
                <Send size={20} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}