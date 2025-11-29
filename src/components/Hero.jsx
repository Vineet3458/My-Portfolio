import React from 'react';
import myPic from '../assets/myPic.png';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import TypeWriter from '../utils/TypeWriter';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-slate-950 to-blue-900/30"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Profile Circle */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-5xl font-bold shadow-2xl shadow-blue-500/50 animate-glow">
              <img src={myPic} alt="VY" />
            </div>
            <div className="absolute inset-0 rounded-full  blur-xl opacity-50 animate-pulse"></div>
          </div>
        </div>
        
        <div className="mb-4 text-blue-400 text-lg font-medium tracking-wider animate-slide-down">
          FULL STACK DEVELOPER
        </div>
        
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Vineet Yadav
          </span>
        </h1>
        
        <div className="text-xl md:text-2xl mb-8 text-gray-400 h-8 animate-fade-in">
          <TypeWriter 
            texts={[
              "Building Modern Web Experiences",
              "React & Node.js Developer",
              "Turning Ideas Into Reality",
              "Clean Code Enthusiast"
            ]}
          />
        </div>
        
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Passionate computer science student crafting elegant solutions with modern technologies. 
          Specializing in full-stack development with React and Node.js.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <button 
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105 flex items-center gap-2"
          >
            View My Work
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-lg font-semibold hover:border-blue-500 hover:bg-slate-800 transition-all hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
        
        <div className="flex justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a href="mailto:vineetyadav3458@gmail.com" 
             className="w-12 h-12 rounded-full bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:scale-110 transition-all group">
            <Mail size={20} className="text-gray-400 group-hover:text-white transition-colors" />
          </a>
          <a href="https://github.com/Vineet" target="_blank" rel="noopener noreferrer"
             className="w-12 h-12 rounded-full bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:scale-110 transition-all group">
            <Github size={20} className="text-gray-400 group-hover:text-white transition-colors" />
          </a>
          <a href="https://linkedin.com/in/vineet" target="_blank" rel="noopener noreferrer"
             className="w-12 h-12 rounded-full bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:scale-110 transition-all group">
            <Linkedin size={20} className="text-gray-400 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-500/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-blue-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;