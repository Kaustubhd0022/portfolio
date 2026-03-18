'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, ExternalLink, Tag, ArrowRight } from 'lucide-react'

const prds = [
  {
    title: 'Farm-to-Table (Zomato)',
    summary: 'Streamlining fresh produce supply chain for restaurant partners through optimized logistics.',
    tags: ['Supply Chain', 'Logistics', 'B2B'],
    link: 'https://example.com/prd-farm-to-table',
    gradient: 'from-accent-orange/20 to-accent-purple/5'
  },
  {
    title: 'NomadAI PRD v2.0',
    summary: 'Scaling the AI travel companion with multi-agent orchestration and real-time booking flows.',
    tags: ['AI', 'Multi-Agent', 'Travel'],
    link: 'https://example.com/prd-nomadai-v2',
    gradient: 'from-accent-purple/20 to-accent-blue/5'
  },
  {
    title: 'COD Zombies Mobile Game',
    summary: 'Deep dive into level design, progression mechanics, and monetization for survival mobile gaming.',
    tags: ['Gaming', 'UX', 'Engagement'],
    link: 'https://example.com/prd-cod-zombies',
    gradient: 'from-accent-blue/20 to-accent-orange/5'
  },
  {
    title: 'Zomato Review Enhancement',
    summary: 'AI-assisted review prompts to boost UGC quality, social proof, and user engagement loops.',
    tags: ['UGC', 'AI', 'Growth'],
    link: 'https://example.com/prd-zomato-reviews',
    gradient: 'from-accent-orange/20 to-accent-blue/5'
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
            href={prd.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative block"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-[2.5rem] blur opacity-0 group-hover:opacity-40 transition duration-500" />
            
            <div className="glass-card relative overflow-hidden h-full rounded-[2.5rem] border border-white/5 bg-[#0B0F19]/50 backdrop-blur-xl transition-all duration-500 group-hover:translate-y-[-8px] group-hover:border-white/20">
              
              {/* Thumbnail / Gradient Shimmer */}
              <div className={`h-48 w-full bg-gradient-to-br ${prd.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"
                  animate={{ 
                    x: ['-100%', '100%'],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: 'linear' 
                  }}
                />
                
                {/* Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-16 h-16 rounded-2xl glass border-white/20 flex items-center justify-center text-white/50 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                      <FileText size={32} />
                   </div>
                </div>
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
                   <span className="text-sm font-black uppercase tracking-[0.2em] text-accent-blue flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                     Read PRD
                     <ArrowRight size={16} />
                   </span>
                   
                   <div className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center text-secondary group-hover:text-white group-hover:bg-white/10 transition-all">
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
