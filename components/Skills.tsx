import React from 'react';
import { SKILLS } from '../constants';
import { Cpu, Database, Code, Cloud, Terminal, Layers } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  "Machine Learning": <Cpu size={24} />,
  "Deep Learning": <Layers size={24} />,
  "Data Science": <Database size={24} />,
  "MLOps & Cloud": <Cloud size={24} />,
  "Languages": <Code size={24} />,
  "Tools": <Terminal size={24} />,
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-neutral-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technical Expertise</h2>
          <div className="h-1 w-20 bg-neutral-900"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((category) => (
            <div 
              key={category.category} 
              className="bg-white p-8 border border-neutral-200 hover:border-neutral-400 transition-colors duration-300 group"
            >
              <div className="mb-6 text-neutral-400 group-hover:text-neutral-900 transition-colors duration-300">
                {iconMap[category.category] || <Cpu size={24} />}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-neutral-900">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium tracking-wide"
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