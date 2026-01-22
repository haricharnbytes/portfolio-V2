import React from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Selected Work</h2>
            <div className="h-1 w-20 bg-neutral-900"></div>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium hover:underline mt-4 md:mt-0">
            View all projects <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group flex flex-col justify-between border-t border-neutral-200 pt-8 hover:border-neutral-900 transition-colors duration-500"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-neutral-900 group-hover:tracking-wide transition-all duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-4">
                    <a href={project.githubLink} className="text-neutral-400 hover:text-black transition-colors" title="View Code">
                      <Github size={20} strokeWidth={1.5} />
                    </a>
                    <a href={project.liveLink} className="text-neutral-400 hover:text-black transition-colors" title="Live Demo">
                      <ExternalLink size={20} strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
                
                <p className="text-neutral-500 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {project.contributions.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-neutral-600">
                      <span className="mr-2 mt-1.5 w-1 h-1 bg-neutral-400 rounded-full flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs font-mono text-neutral-400 border border-neutral-200 px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:hidden">
            <a href="#" className="flex items-center gap-2 text-sm font-medium hover:underline">
            View all projects <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;