import React from 'react';
import { EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-neutral-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Experience Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Experience</h2>
              <div className="h-1 w-20 bg-neutral-900"></div>
            </div>

            <div className="space-y-12">
              {EXPERIENCE.map((exp) => (
                <div key={exp.id} className="relative pl-8 border-l border-neutral-200">
                  <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-neutral-900 rounded-full ring-4 ring-neutral-50"></span>
                  <h3 className="text-xl font-bold text-neutral-900">{exp.role}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-neutral-500 mb-4 mt-1">
                    <span className="font-medium text-neutral-700">{exp.company}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-neutral-600 text-sm leading-relaxed">
                        — {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certs Column */}
          <div className="flex flex-col gap-16">
            
            {/* Education */}
            <div>
              <div className="mb-12">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Education</h2>
                <div className="h-1 w-20 bg-neutral-900"></div>
              </div>

              <div className="space-y-8">
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="group">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-lg font-bold text-neutral-900">{edu.degree}</h3>
                      <span className="text-xs text-neutral-500 font-mono flex-shrink-0 ml-4">{edu.period}</span>
                    </div>
                    <p className="text-sm font-medium text-neutral-700 mb-2">{edu.institution}</p>
                    <p className="text-sm text-neutral-500">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-bold tracking-tight mb-2">Certifications</h3>
                <div className="h-0.5 w-10 bg-neutral-400"></div>
              </div>

              <div className="space-y-4">
                {CERTIFICATIONS.map((cert) => (
                  <a 
                    href={cert.link} 
                    key={cert.id} 
                    className="block p-4 border border-neutral-200 hover:border-neutral-900 hover:bg-white transition-all duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-neutral-900 text-sm">{cert.name}</h4>
                        <p className="text-xs text-neutral-500 mt-1">{cert.issuer}</p>
                      </div>
                      <span className="text-xs font-mono text-neutral-400">{cert.date}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;