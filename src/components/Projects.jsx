import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Spotify Clone",
      tech: "React + Vite & Tailwind",
      description: "Built a responsive Spotify-style music player using React + Vite. Added full audio controls (play/pause, next/prev, progress bar). Developed reusable Tailwind components and optimized/deployed with Vite.",
      gradient: "from-green-400 to-emerald-600"
    },
    {
      title: "Dev Investigator",
      tech: "GitHub API, HTML, CSS, JavaScript",
      description: "Built a web tool that fetches and displays GitHub user and repo data using the GitHub API. Implemented search, profile lookup, and repository insights with clean UI components.",
      gradient: "from-purple-400 to-indigo-600"
    },
    {
      title: "Password Generator",
      tech: "HTML, CSS, JavaScript",
      description: "Built a secure password generator web app with customizable length and character sets. Added options for uppercase, lowercase, numbers, special characters, copy-to-clipboard, and real-time strength handling.",
      gradient: "from-orange-400 to-red-600"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-full h-2 rounded-full bg-gradient-to-r ${project.gradient} mb-4`}></div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all">
                {project.title}
              </h3>
              <div className="text-sm text-gray-500 mb-4">{project.tech}</div>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <button className="flex items-center gap-2 text-blue-500 hover:text-purple-500 transition-colors">
                View Project <ExternalLink size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;