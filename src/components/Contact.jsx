import React from 'react';
import { Mail, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="mailto:vineetyadav3458@gmail.com"
            className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <Mail /> Send Email
          </a>
          <a 
            href="https://github.com/Vineet"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 border border-gray-700 px-8 py-4 rounded-full font-semibold hover:border-purple-500 transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <Github /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;