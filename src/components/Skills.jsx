import React from 'react';
import { Code, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skills = {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Redux Toolkit", "Vite", "Tailwind CSS"],
    Backend: ["Node.js", "Express.js"],
    Database: ["MongoDB", "MySQL"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Netlify"]
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <div 
              key={category}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                {category === 'Frontend' && <Code className="text-blue-500" size={28} />}
                {category === 'Backend' && <Database className="text-green-500" size={28} />}
                {category === 'Database' && <Database className="text-purple-500" size={28} />}
                {category === 'Tools & Platforms' && <Wrench className="text-orange-500" size={28} />}
                <h3 className="text-2xl font-bold">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full text-sm border border-gray-700 hover:border-purple-500 hover:scale-110 transition-all cursor-default"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;