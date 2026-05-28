import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { RESUME_DATA } from '../data/resume';

export const About = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-20">
      <SectionHeading label="Philosophy">The Core</SectionHeading>
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <p className="text-xl md:text-2xl font-light text-text/80 leading-relaxed max-w-xl">
            {RESUME_DATA.objective}
          </p>
          <div className="mt-12 flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-text/50 mb-1">Based</span>
              <span className="font-bold text-text">{RESUME_DATA.location}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-text/50 mb-1">Status</span>
              <span className="font-bold text-text">BCA Student (v2026)</span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="p-8 border border-border bg-card-bg hover:border-accent/40 transition-colors rounded-xl shadow-sm">
            <span className="section-label mb-6 text-accent">Education</span>
            <div className="space-y-8">
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-accent before:rounded-full">
                  <h4 className="text-xl font-bold uppercase tracking-tight mb-1 text-text">{edu.degree}</h4>
                  <p className="text-text/70 mb-2">{edu.institution}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono text-text/50">{edu.year}</span>
                    <span className="text-xs font-bold text-accent px-2 py-1 bg-accent/10 rounded-md">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
