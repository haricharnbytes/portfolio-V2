import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { HERO_ROLES } from '../constants';

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % HERO_ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative pt-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="space-y-8 animate-slide-up">
          <p className="text-neutral-500 font-medium tracking-wide text-sm uppercase">
            Portfolio
          </p>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-neutral-900 leading-tight">
            Katta Hari <br />
            Charan<span className="text-neutral-400">.</span>
          </h1>

          <div className="h-12 overflow-hidden relative">
            {HERO_ROLES.map((role, index) => (
              <div
                key={role}
                className={`absolute top-0 left-0 transition-all duration-700 ease-in-out transform ${
                  index === roleIndex
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <span className="text-2xl md:text-3xl font-light text-neutral-600">
                  {role}
                </span>
              </div>
            ))}
          </div>

          <p className="max-w-xl text-neutral-500 leading-relaxed text-lg">
            Leveraging advanced machine learning algorithms and data engineering principles 
            to solve complex real-world problems. Passionate about scalable AI and turning 
            raw data into actionable insights.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-neutral-900 text-white font-medium text-sm hover:bg-neutral-700 transition-colors duration-300"
            >
              Contact Me
            </a>
            <a 
              href="#" 
              className="px-8 py-3 border border-neutral-300 text-neutral-900 font-medium text-sm hover:border-neutral-900 hover:bg-neutral-50 transition-all duration-300"
            >
              Download Resume
            </a>
          </div>

          <div className="flex items-center gap-6 pt-8 text-neutral-400">
            <a href="#" className="hover:text-black transition-colors"><Github size={20} /></a>
            <a href="#" className="hover:text-black transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-black transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-neutral-300">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;