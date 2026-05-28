import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { RESUME_DATA } from '../data/resume';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export const Projects = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-20">
      <SectionHeading label="Projects">Selected Works</SectionHeading>
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 gap-6"
      >
        {RESUME_DATA.projects.map((project, idx) => (
          <motion.div 
            variants={item}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            key={idx} 
            className="bg-card-bg p-10 border border-border rounded-xl group hover:border-accent transition-all relative overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-accent/20"
          >
            <div className="absolute top-0 right-0 p-6 text-8xl font-black text-text/5 -mr-6 -mt-6 group-hover:text-accent/10 transition-colors pointer-events-none transform group-hover:scale-110 group-hover:rotate-12">
              0{idx + 1}
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                {project.link && project.link !== "#" ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-text text-bg text-xs font-bold uppercase tracking-widest rounded-full hover:bg-accent hover:scale-105 transition-all">
                    Show Project
                  </a>
                ) : (
                  <span />
                )}
                {project.link && project.link !== "#" ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} className="text-text/40 group-hover:text-accent group-hover:rotate-45 transition-all cursor-pointer" />
                  </a>
                ) : (
                  <ExternalLink size={18} className="text-text/40 group-hover:text-accent transition-colors cursor-pointer" />
                )}
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-text group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-text/70 mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                   <span key={t} className="text-[10px] uppercase tracking-wider px-3 py-1.5 bg-bg border border-border rounded-md text-text/80 group-hover:border-accent/30 group-hover:bg-accent/10 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
