import React from 'react';
import { motion } from 'motion/react';

export const SectionHeading = ({ children, label }: { children: React.ReactNode, label: string }) => (
  <div className="mb-16">
    <span className="section-label">{label}</span>
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-extrabold text-text"
    >
      {children}
    </motion.h2>
  </div>
);
