'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, MapPin, ExternalLink, Phone } from 'lucide-react'
import { EXTERNAL_LINKS } from '@/config/links'

export const About = () => {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6">
      <div className="glass-card rounded-[3rem] p-8 md:p-16 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        {/* Left Column: Image */}
        <div className="md:col-span-5 relative flex justify-center w-full">
           {/* Subtle glow behind image */}
           <div className="absolute inset-0 bg-accent-orange/20 blur-[100px] rounded-full" />
           
           <div className="relative w-64 md:w-full md:max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,107,0,0.15)] group">
             <img 
               src="/images/profile.jpg" 
               alt="Kaustubh Deshmukh" 
               className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-60" />
           </div>
        </div>

        {/* Right Column: Content */}
        <div className="md:col-span-7 flex flex-col justify-center text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-orange/10 text-accent-orange text-xs font-bold tracking-widest uppercase mb-6 self-center md:self-start border border-accent-orange/20 cursor-default hover:bg-accent-orange/20 transition-colors">
            <MapPin size={14} />
            Pune, India · Available for 0-1 projects
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight text-white leading-tight">
            Kaustubh <span className="text-accent-orange block mt-2">Deshmukh.</span>
          </h2>
          
          <p className="text-secondary text-lg mb-8 leading-relaxed font-medium">
            With a background in Mechanical Engineering from PVPIT Sangli and a passion for AI, I build products that are technically sound and obsessively user-centric. From scaling a startup as a founding PM to building multi-agent AI pipelines at NextLeap, I thrive in the "zero-to-one" phase.
          </p>

          {/* Premium Info Block */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1 glass-card border border-white/5 py-4 px-6 rounded-3xl group hover:border-accent-orange/30 transition-all duration-300 text-left bg-white/[0.02]">
               <p className="text-secondary text-[10px] uppercase font-black tracking-widest mb-1 opacity-50">Portfolio Owner</p>
               <h4 className="text-white font-black text-xl tracking-tight">Kaustubh Deshmukh</h4>
            </div>
            <div className="flex-1 glass-card border border-white/5 py-4 px-6 rounded-3xl group hover:border-accent-orange/30 transition-all duration-300 flex items-center gap-4 text-left bg-white/[0.02]">
               <div className="w-10 h-10 rounded-2xl bg-accent-orange/10 flex items-center justify-center text-accent-orange shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={18} />
               </div>
               <div>
                  <p className="text-secondary text-[10px] uppercase font-black tracking-widest opacity-50">Direct Line</p>
                  <a href="tel:+919002737771" className="text-white font-black text-lg hover:text-accent-orange transition-colors tracking-tight">+91-9002737771</a>
               </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-10">
            {[
              { label: '0→1 Execution', color: 'accent-orange' },
              { label: 'AI Product Strategy', color: 'accent-purple' },
              { label: 'Growth & Analytics', color: 'accent-blue' },
              { label: 'Cross-functional Leadership', color: 'green-400' }
            ].map(strength => (
              <div key={strength.label} className="glass border border-white/5 py-3 px-4 rounded-2xl flex items-center gap-3">
                 <div className={`w-2 h-2 rounded-full bg-${strength.color} shadow-[0_0_10px_currentColor]`} />
                 <span className="text-sm font-bold text-white/90">{strength.label}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
             <a 
               href={EXTERNAL_LINKS.social.email}
               className="px-8 py-4 rounded-2xl bg-white text-black font-black flex items-center gap-3 hover:bg-accent-orange transition-colors hover:shadow-[0_0_30px_rgba(255,107,0,0.3)] duration-300"
             >
               <Mail size={20} />
               Email Me
             </a>
             <a 
               href={EXTERNAL_LINKS.social.linkedin}
               target="_blank"
               rel="noopener noreferrer"
               className="px-8 py-4 rounded-2xl glass border border-white/10 text-white font-black flex items-center gap-3 hover:bg-white/5 hover:border-white/20 transition-all duration-300"
             >
               <Linkedin size={20} />
               LinkedIn
               <ExternalLink size={16} className="opacity-50" />
             </a>
          </div>
        </div>
      </div>
    </section>
  )
}
