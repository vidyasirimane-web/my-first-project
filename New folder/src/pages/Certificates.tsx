import React from 'react';
import { Award } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { RESUME_DATA } from '../data/resume';

export const Certificates = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-20">
      <SectionHeading label="Credentials">Certifications</SectionHeading>
      <div className="grid md:grid-cols-2 gap-8">
        {RESUME_DATA.certifications.map((cert, idx) => (
          <div key={idx} className="p-6 border border-border bg-card-bg hover:border-accent/40 transition-colors rounded-xl shadow-sm flex flex-col group overflow-hidden">
            {cert.image ? (
              <div className="w-full aspect-video rounded-lg overflow-hidden mb-6 border border-border">
                <img src={cert.image} alt={cert.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ) : (
              <div className="mb-4">
                <Award size={32} className="text-accent/40 group-hover:text-accent transition-colors" />
              </div>
            )}
            <div className="mt-auto">
              <p className="font-bold text-xl group-hover:text-accent transition-colors text-text">{cert.name}</p>
              <p className="text-xs uppercase tracking-widest text-text/50 mt-2">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
