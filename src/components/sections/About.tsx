'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, MapPin, ExternalLink } from 'lucide-react'

export const About = () => {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6">
      <div className="glass-card rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-16 items-center">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-accent-orange to-accent-purple p-1 shrink-0">
          <div className="w-full h-full rounded-full bg-[#111827] flex items-center justify-center overflow-hidden relative group">
             <div className="text-6xl font-black text-white/10 group-hover:scale-110 transition-transform duration-700">KD</div>
             {/* Gradient overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-accent-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-orange/10 text-accent-orange text-[10px] font-bold tracking-widest uppercase mb-6">
            <MapPin size={12} />
            Pune, India · Available for 0-1 projects
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
            I solve problems with <span className="text-accent-orange">product</span> thinking.
          </h2>
          <p className="text-secondary text-lg mb-8 leading-relaxed">
            With a background in Mechanical Engineering and a passion for AI, I build products that are technically sound and user-centric. 
            From scaling a car-wash startup as a founding PM to building multi-agent AI pipelines at NextLeap, I thrive in the "zero-to-one" phase.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
             <a 
               href="mailto:kaustubhd0022@gmail.com"
               className="px-6 py-3 rounded-xl bg-white text-black font-bold flex items-center gap-2 hover:bg-accent-orange transition-colors"
             >
               <Mail size={18} />
               Email Me
             </a>
             <a 
               href="https://linkedin.com/in/kaustubhd0022"
               target="_blank"
               className="px-6 py-3 rounded-xl glass border-white/10 text-white font-bold flex items-center gap-2 hover:bg-white/5 transition-colors"
             >
               <Linkedin size={18} />
               LinkedIn
               <ExternalLink size={14} className="opacity-50" />
             </a>
          </div>
        </div>
      </div>
    </section>
  )
}
