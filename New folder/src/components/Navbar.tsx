import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';
import { RESUME_DATA } from '../data/resume';

export const Navbar = ({ isDarkMode, setIsDarkMode }: { isDarkMode: boolean, setIsDarkMode: (val: boolean) => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 flex items-center h-20 px-6 md:px-12 lg:px-20 ${scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-border shadow-md' : 'bg-bg/50 backdrop-blur-sm border-b border-border/50'}`}>
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-base font-bold uppercase tracking-widest text-text hover:text-accent transition-colors">
            VIDYA <span className="font-light">SIRIMANE</span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${isActive ? 'text-text opacity-100 after:w-full' : 'opacity-60 hover:opacity-100'}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a href={RESUME_DATA.github} target="_blank" rel="noreferrer" className="p-2 rounded-full border border-border bg-bg/50 hover:bg-accent/10 transition-colors text-text" aria-label="GitHub">
            <Github size={16} />
          </a>
          <a href={RESUME_DATA.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-full border border-border bg-bg/50 hover:bg-accent/10 transition-colors text-text" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full border border-border bg-bg/50 hover:bg-accent/10 transition-colors text-text"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          
          <Link to="/contact" className="hidden sm:flex items-center gap-2 bg-text text-bg px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-accent hover:text-white transition-all ml-2">
            <Mail size={14} /> Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
};
