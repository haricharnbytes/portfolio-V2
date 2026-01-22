import React from 'react';
import { Mail, MapPin, Github, Linkedin, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-neutral-900 text-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
              Let's build something <br />
              <span className="text-neutral-500">intelligent together.</span>
            </h2>
            <p className="text-neutral-400 max-w-md leading-relaxed mb-8">
              Open to full-time opportunities and freelance collaborations. 
              If you have a project that needs deep learning expertise or 
              just want to say hi, my inbox is open.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:hccharankatta@gmail.com" className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group">
                <div className="p-2 bg-neutral-800 rounded-full group-hover:bg-neutral-700 transition-colors">
                  <Mail size={18} />
                </div>
                <span>hccharankatta@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 text-neutral-300">
                <div className="p-2 bg-neutral-800 rounded-full">
                  <MapPin size={18} />
                </div>
                <span>Available for Remote Work</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <p className="text-sm font-bold uppercase tracking-widest text-neutral-500">Socials</p>
              <div className="flex flex-col gap-4">
                <a href="#" className="flex items-center justify-between py-4 border-b border-neutral-800 hover:text-neutral-300 hover:border-neutral-600 transition-all">
                  <span className="flex items-center gap-3"><Linkedin size={20} /> LinkedIn</span>
                  <span className="text-xs font-mono text-neutral-500">Connect</span>
                </a>
                <a href="#" className="flex items-center justify-between py-4 border-b border-neutral-800 hover:text-neutral-300 hover:border-neutral-600 transition-all">
                  <span className="flex items-center gap-3"><Github size={20} /> GitHub</span>
                  <span className="text-xs font-mono text-neutral-500">Follow</span>
                </a>
                <a href="#" className="flex items-center justify-between py-4 border-b border-neutral-800 hover:text-neutral-300 hover:border-neutral-600 transition-all">
                  <span className="flex items-center gap-3"><MessageSquare size={20} /> Kaggle</span>
                  <span className="text-xs font-mono text-neutral-500">View</span>
                </a>
              </div>
            </div>

            <div className="mt-16 text-neutral-600 text-sm flex justify-between items-end">
              <p>© {new Date().getFullYear()} Katta Hari Charan.</p>
              <p className="text-xs font-mono">Designed & Built with React</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;