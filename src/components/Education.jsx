import React from 'react';
import { Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="space-y-6">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all hover:scale-102">
            <div className="flex items-start gap-4">
              <Award className="text-blue-500 mt-1" size={32} />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Bachelor of Technology</h3>
                <div className="text-purple-400 mb-2">Computer Science and Information Technology</div>
                <div className="text-gray-400 mb-2">Dr. A.P.J. Abdul Kalam Technical University, Lucknow</div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">2023 – 2027</span>
                  <span className="px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-semibold">CGPA: 8.2</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all hover:scale-102">
            <div className="flex items-start gap-4">
              <Award className="text-purple-500 mt-1" size={32} />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Class XII</h3>
                <div className="text-gray-400 mb-2">Kendriya Vidyalaya Janakpuri</div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">2021 – 2022</span>
                  <span className="px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-semibold">80.33%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all hover:scale-102">
            <div className="flex items-start gap-4">
              <Award className="text-cyan-500 mt-1" size={32} />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Class X</h3>
                <div className="text-gray-400 mb-2">Kendriya Vidyalaya Janakpuri</div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">2019 – 2020</span>
                  <span className="px-4 py-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-sm font-semibold">75.6%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;