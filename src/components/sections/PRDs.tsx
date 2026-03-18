'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, ExternalLink, ArrowRight, Truck, Map, Crosshair, Star, BrainCircuit } from 'lucide-react'
import { EXTERNAL_LINKS } from '@/config/links'

const prds = [
  {
    title: 'Farm-to-Table (Zomato)',
    summary: 'Streamlining fresh produce supply chain for restaurant partners through optimized logistics.',
    tags: ['Supply Chain', 'Logistics', 'B2B'],
    link: EXTERNAL_LINKS.prds.farmToTable,
    gradient: 'from-[#0B0F19] to-accent-orange/10',
    thumbnail: (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Abstract mesh / supply chain nodes */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,107,0,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          <div className="w-20 h-20 rounded-[2rem] bg-accent-orange/10 border border-accent-orange/30 flex items-center justify-center backdrop-blur-md relative z-10 group-hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(255,107,0,0.2)]">
            <Truck size={36} className="text-accent-orange drop-shadow-[0_0_15px_rgba(255,107,0,0.8)]" />
          </div>
        </motion.div>
      </div>
    )
  },
  {
    title: 'NomadAI PRD v2.0',
    summary: 'Scaling the AI travel companion with multi-agent orchestration and real-time booking flows.',
    tags: ['AI', 'Multi-Agent', 'Travel'],
    link: EXTERNAL_LINKS.prds.nomadAI,
    gradient: 'from-[#0B0F19] to-accent-blue/10',
    thumbnail: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* Radar sweep */}
        <div className="absolute w-64 h-64 rounded-full border border-accent-purple/10 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full border border-accent-purple/20 flex items-center justify-center">
             <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="w-full h-full rounded-full border-t-2 border-accent-blue/40" />
          </div>
        </div>
        <motion.div animate={{ scale: [0.95, 1.05, 0.95] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
          <div className="w-20 h-20 rounded-full bg-[#0B0F19] border border-accent-blue/30 flex items-center justify-center backdrop-blur-xl relative z-10 group-hover:rotate-12 transition-all duration-700 shadow-[0_0_30px_rgba(0,204,255,0.2)]">
            <Map size={36} className="text-accent-blue drop-shadow-[0_0_15px_rgba(0,204,255,0.8)]" />
          </div>
        </motion.div>
      </div>
    )
  },
  {
    title: 'COD Zombies Mobile Game',
    summary: 'Deep dive into level design, progression mechanics, and monetization for survival mobile gaming.',
    tags: ['Gaming', 'UX', 'Engagement'],
    link: EXTERNAL_LINKS.prds.codZombies,
    gradient: 'from-[#0B0F19] to-red-500/10',
    thumbnail: (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Gritty background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <motion.div animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <div className="absolute w-32 h-32 rounded-full bg-red-600/20 blur-[40px]" />
        </motion.div>
        <div className="w-20 h-20 rounded-2xl bg-[#0B0F19] border border-red-500/40 flex items-center justify-center backdrop-blur-md relative z-10 rotate-45 group-hover:rotate-90 transition-all duration-700 shadow-[0_0_30px_rgba(220,38,38,0.2)]">
          <div className="-rotate-45 group-hover:-rotate-90 transition-all duration-700">
            <Crosshair size={40} className="text-red-500 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]" />
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Zomato Review Enhancement',
    summary: 'AI-assisted review prompts to boost UGC quality, social proof, and user engagement loops.',
    tags: ['UGC', 'AI', 'Growth'],
    link: EXTERNAL_LINKS.prds.zomatoReviews,
    gradient: 'from-[#0B0F19] to-accent-orange/10',
    thumbnail: (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Floating stars */}
        <motion.div animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute left-10 top-10 opacity-60">
           <Star fill="currentColor" size={20} className="text-accent-orange" />
        </motion.div>
        <motion.div animate={{ y: [15, -15, 15], rotate: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute right-12 bottom-10 opacity-40">
           <Star fill="currentColor" size={28} className="text-accent-orange" />
        </motion.div>
        <motion.div animate={{ scale: [0.95, 1.05, 0.95] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          <div className="w-24 h-24 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl relative z-10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-[0_0_40px_rgba(255,107,0,0.15)]">
            <BrainCircuit size={48} className="text-accent-purple drop-shadow-[0_0_15px_rgba(182,102,210,0.8)]" />
          </div>
        </motion.div>
      </div>
    )
  }
]

export const PRDs = () => {
  return (
    <section id="prds" className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-[10px] font-bold tracking-widest uppercase mb-4">
          <FileText size={12} />
          Product Documentation
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-white">
          Product <span className="text-accent-blue">Artifacts</span>
        </h2>
        <p className="text-secondary text-lg max-w-2xl">
          High-fidelity PRDs and technical documentation showcasing product strategy and execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {prds.map((prd, index) => (
          <motion.a
            key={prd.title}
            href={prd.link || '#'}
            target={prd.link ? "_blank" : undefined}
            rel={prd.link ? "noopener noreferrer" : undefined}
            onClick={(e) => {
              if (!prd.link) {
                 e.preventDefault();
                 alert('Coming Soon!');
              }
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className={`group relative block ${prd.link ? 'cursor-pointer' : 'cursor-not-allowed'}`}
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-[2.5rem] blur opacity-0 group-hover:opacity-40 transition duration-500" />
            
            <div className="glass-card relative overflow-hidden h-full rounded-[2.5rem] border border-white/5 bg-[#0B0F19]/50 backdrop-blur-xl transition-all duration-500 group-hover:translate-y-[-8px] group-hover:border-white/20">
              
              {/* Thumbnail Container */}
              <div className={`h-48 w-full bg-gradient-to-br ${prd.gradient} relative overflow-hidden border-b border-white/5`}>
                {prd.thumbnail}
                
                {/* Subtle light sweep */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                  animate={{ 
                    x: ['-100%', '100%'],
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: 'linear' 
                  }}
                />
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {prd.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-black mb-3 group-hover:text-accent-blue transition-colors">
                  {prd.title}
                </h3>
                
                <p className="text-secondary text-sm leading-relaxed mb-8 line-clamp-2">
                  {prd.summary}
                </p>

                <div className="flex items-center justify-between mt-auto">
                   <span className={`text-sm font-black uppercase tracking-[0.2em] flex items-center gap-2 transition-transform ${prd.link ? 'text-accent-blue group-hover:translate-x-2' : 'text-secondary/50'}`}>
                     {prd.link ? 'Read PRD' : 'Coming Soon'}
                     {prd.link && <ArrowRight size={16} />}
                   </span>
                   
                   <div className={`w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center transition-all ${prd.link ? 'text-secondary group-hover:text-white group-hover:bg-white/10 group-hover:scale-110' : 'text-white/20'}`}>
                     <ExternalLink size={18} />
                   </div>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
