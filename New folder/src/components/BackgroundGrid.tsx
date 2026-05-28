import React from 'react';
import { motion } from 'motion/react';

export const BackgroundGrid = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30 dark:opacity-50">
    <motion.div 
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent rounded-full blur-[120px] mix-blend-screen"
    />
    <motion.div 
      animate={{
        scale: [1, 1.5, 1],
        rotate: [0, -90, 0],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-500 rounded-full blur-[150px] mix-blend-screen"
    />
    <div className="absolute inset-0 grid grid-cols-[80px_1fr_1fr_80px] grid-rows-[80px_1fr_80px] h-full w-full opacity-50">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="border-[0.5px] border-border" />
      ))}
    </div>
  </div>
);
