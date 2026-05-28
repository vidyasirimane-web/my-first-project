import React from 'react';
import { motion } from 'motion/react';
import { Mail, Download, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RESUME_DATA } from '../data/resume';

export const Home = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 md:px-12 lg:px-20 pb-20 pt-10">
      <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-12 xl:gap-24">
        <div className="flex-1 w-full mt-10 xl:mt-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label"
          >
            {RESUME_DATA.title}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[1.1] tracking-tighter uppercase mb-8 -ml-1 text-text"
          >
            {RESUME_DATA.name}<br />
            {RESUME_DATA.lastName} <span className="highlight-text italic">P C</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-text/70 max-w-xl leading-relaxed mb-12"
          >
            {RESUME_DATA.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a href={RESUME_DATA.resumeFile} download className="btn-primary">
              <Download size={16} /> Download Resume
            </a>
            <a href={RESUME_DATA.resumeFile} target="_blank" rel="noreferrer" className="btn-outline">
              <Eye size={16} /> View Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative shrink-0 w-full max-w-[350px] md:max-w-[400px] xl:w-[450px]"
        >
          <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden border border-border/50 relative group shadow-2xl">
            <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700" />
            <img
              src={RESUME_DATA.profilePhoto}
              alt={RESUME_DATA.fullName}
              className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/30 rounded-full blur-[60px] -z-10" />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-[60px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
};
