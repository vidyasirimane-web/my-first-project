import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { RESUME_DATA } from '../data/resume';

export const Experience = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-20">
      <SectionHeading label="Chronology">History</SectionHeading>
      <div className="max-w-4xl bg-card-bg border border-border rounded-xl p-8 md:p-12 shadow-sm">
        {RESUME_DATA.experience.map((exp, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 group">
            <div className="md:w-1/3 shrink-0">
              <span className="text-xs font-mono px-3 py-1 bg-accent/10 text-accent rounded-full">{exp.duration}</span>
              <h4 className="text-xl font-bold mt-4 text-text">{exp.company}</h4>
            </div>
            <div className="flex-1">
              <h5 className="text-2xl font-semibold mb-4 text-accent">{exp.role}</h5>
              <p className="text-text/70 leading-relaxed text-lg">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
