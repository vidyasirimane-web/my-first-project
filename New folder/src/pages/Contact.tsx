import React from 'react';
import { ArrowRight } from 'lucide-react';
import { RESUME_DATA } from '../data/resume';

export const Contact = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-20">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-[50px] md:text-[70px] font-black uppercase leading-[0.9] tracking-tighter mb-8 text-text">
            Let's Build<br /> <span className="text-accent italic">Together</span>
          </h2>
          <div className="space-y-10">
            <div className="group">
              <p className="section-label mb-2">Direct Channel</p>
              <a href={`mailto:${RESUME_DATA.email}`} className="text-xl md:text-2xl font-medium border-b border-text/20 pb-1 text-text hover:text-accent hover:border-accent transition-all break-all">
                {RESUME_DATA.email}
              </a>
            </div>
            <div>
               <p className="section-label mb-2">Phone</p>
               <p className="text-xl text-text">{RESUME_DATA.phone}</p>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12 border border-border bg-card-bg rounded-xl shadow-lg">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2 group">
              <label className="text-xs uppercase tracking-widest text-text/60 font-medium">Full Name</label>
              <input type="text" className="w-full bg-bg border border-border rounded-lg px-4 py-3 outline-none text-text focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
            </div>
            <div className="space-y-2 group">
              <label className="text-xs uppercase tracking-widest text-text/60 font-medium">Email Address</label>
              <input type="email" className="w-full bg-bg border border-border rounded-lg px-4 py-3 outline-none text-text focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
            </div>
            <div className="space-y-2 group">
              <label className="text-xs uppercase tracking-widest text-text/60 font-medium">Message</label>
              <textarea className="w-full bg-bg border border-border rounded-lg px-4 py-3 outline-none text-text focus:border-accent focus:ring-1 focus:ring-accent transition-all h-32 resize-none" />
            </div>
            <button className="btn-primary w-full justify-center py-4 text-sm mt-4">
              Send Message <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
