import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all">
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            I'm a passionate Computer Science student at Dr. A.P.J. Abdul Kalam Technical University with a CGPA of 8.2. I specialize in building modern, responsive web applications using cutting-edge technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-6 rounded-xl border border-blue-500/20 hover:scale-105 transition-transform">
              <MapPin className="mb-2 text-blue-500" />
              <div className="text-gray-400 text-sm">Location</div>
              <div className="font-semibold">Greater Noida, UP</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 p-6 rounded-xl border border-purple-500/20 hover:scale-105 transition-transform">
              <Phone className="mb-2 text-purple-500" />
              <div className="text-gray-400 text-sm">Phone</div>
              <div className="font-semibold">+91 8527330280</div>
            </div>
            <div className="bg-gradient-to-br from-pink-600/10 to-red-600/10 p-6 rounded-xl border border-pink-500/20 hover:scale-105 transition-transform">
              <Mail className="mb-2 text-pink-500" />
              <div className="text-gray-400 text-sm">Email</div>
              <div className="font-semibold text-sm">vineetyadav3458@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;