import React from 'react';
import { MessageCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between relative z-10 border-t border-border gap-6 bg-bg mt-auto">
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-sm font-medium text-text/80 mb-2">Built with ❤️ by Vidya</p>
        <p className="text-xs font-mono text-text/40 uppercase">&copy; {new Date().getFullYear()} VIDYA SIRIMANE / ALL RIGHTS RESERVED</p>
      </div>
      
      <div className="flex items-center gap-4">
        <a 
          href="https://wa.me/9187483151?text=say%20hello" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 hover:bg-green-500 hover:text-white transition-all text-green-500 text-sm font-medium"
        >
          <MessageCircle size={16} /> WhatsApp Me
        </a>
        <button onClick={() => window.scrollTo(0, 0)} className="w-10 h-10 rounded-full border border-border bg-card-bg flex items-center justify-center hover:bg-accent hover:text-white transition-all text-text" aria-label="Scroll to top">
          &uarr;
        </button>
      </div>
    </footer>
  );
};
