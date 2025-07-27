import React from 'react';
import { Award, Shield, FileCheck, Target } from 'lucide-react';

const certifications = [
  {
    icon: Award,
    title: 'ISO 9001:2015',
    description: 'Quality management system certification ensuring consistent, high-quality results.'
  },
  {
    icon: Shield,
    title: 'ITAR Registered',
    description: 'Authorized to handle defense-related articles and technical data.'
  },
  {
    icon: FileCheck,
    title: 'AS9100 Compliant',
    description: 'Aerospace quality management system standards compliance.'
  },
  {
    icon: Target,
    title: 'Mil-Spec Certified',
    description: 'Military specification processes and documentation standards.'
  }
];

export default function Quality() {
  return (
    <section id="quality" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Uncompromising Quality Standards
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our commitment to quality is reflected in our certifications, processes, 
            and the trust our customers place in us for their most critical applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div key={index} className="text-center">
              <div className="bg-yellow-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <cert.icon size={36} className="text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-4">{cert.title}</h3>
              <p className="text-blue-100 leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-800 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Quality Assurance Process</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-900 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Incoming Inspection</h4>
                    <p className="text-blue-100">Thorough evaluation of all incoming materials and components.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-900 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Process Control</h4>
                    <p className="text-blue-100">Real-time monitoring and documentation of all critical parameters.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-900 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Final Testing</h4>
                    <p className="text-blue-100">Comprehensive testing and certification before delivery.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-yellow-400 mb-4">99.8%</div>
              <div className="text-2xl font-semibold mb-2">Quality Rating</div>
              <p className="text-blue-100">Based on customer satisfaction surveys and defect rates over the past 5 years.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}