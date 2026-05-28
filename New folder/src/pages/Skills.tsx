import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { RESUME_DATA } from '../data/resume';

export const Skills = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-20">
      <SectionHeading label="Expertise">Technical Arsenal</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESUME_DATA.skills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="bg-card-bg p-8 border border-border rounded-xl hover:border-accent/50 transition-all shadow-sm group"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="text-accent/60 group-hover:text-accent transition-colors transform scale-125 origin-left">
                {skill.icon}
              </div>
              <span className="text-[10px] font-mono text-text/30 group-hover:text-text/60">0{idx + 1}</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-text">{skill.name}</h3>
            <div className="h-1.5 bg-border rounded-full w-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-accent relative"
              >
                <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/30 blur-[2px]"></div>
              </motion.div>
            </div>
          </motion.div>
        ))}

        <div className="bg-card-bg p-8 border border-border rounded-xl lg:col-span-2 xl:col-span-1 flex flex-col justify-between">
          <div>
            <h4 className="section-label text-accent mb-6">Soft Dynamics</h4>
            <ul className="space-y-4">
              {RESUME_DATA.softSkills.map((s, i) => (
                <li key={i} className="text-lg font-medium tracking-tight flex items-center gap-3 text-text">
                  <div className="w-2 h-2 rounded-full bg-accent/60" /> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
