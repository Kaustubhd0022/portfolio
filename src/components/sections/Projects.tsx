'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Tag, Briefcase, Sparkles, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { useAI } from '@/context/AIContext'

const projects = [
  {
    title: 'NomadAI',
    description: 'AI travel companion that generates personalized itineraries based on user vibes and budget.',
    tags: ['Next.js', 'OpenAI', 'Google Maps API'],
    link: 'https://nomad-ai.example.com',
    metrics: '20% higher conversion',
    image: '/projects/nomadai_thumb_1773821912714.png',
  },
  {
    title: 'Netflix Smart Cleanup',
    description: 'A retention tool for streaming services that helps users curate their "Continue Watching" list using AI.',
    tags: ['Python', 'Tuned Llama-3', 'React'],
    link: 'https://netflix-cleanup.example.com',
    metrics: '+15% Month-1 Retention',
    image: '/projects/netflix_cleanup_thumb_1773821929708.png',
  },
  {
    title: 'Seed to Plate',
    description: 'FoodTech supply chain optimization system using predictive AI for inventory management.',
    tags: ['PostgreSQL', 'Node.js', 'StatsModel'],
    link: 'https://seed-to-plate.example.com',
    metrics: 'reduced waste by 40%',
    image: '/projects/seed_to_plate_thumb_1773822280707.png',
  },
  {
    title: 'AI Wedding Orchestrator',
    description: 'A multi-agent system that plans complex Indian weddings, managing 100+ tasks effortlessly.',
    tags: ['LangChain', 'Next.js', 'Supabase'],
    link: 'https://wedding-ai.example.com',
    metrics: '100+ tasks managed',
    image: '/projects/wedding_orchestrator_thumb_1773822349661.png',
  },
]

export const Projects = () => {
  const { openPanel } = useAI()
  
  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-orange/10 text-accent-orange text-[10px] font-bold tracking-widest uppercase mb-4 text-orange-400">
            <Briefcase size={12} />
            Live Prototypes
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            Featured <span className="text-accent-orange">Experiments</span>
          </h2>
          <p className="text-secondary text-lg">
            Functional AI applications built from 0-to-1. Click any card to explore the live prototype.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative flex flex-col h-full cursor-pointer"
            onClick={() => window.open(project.link, '_blank')}
          >
            {/* Card Content Container */}
            <div className="glass-card rounded-[2rem] overflow-hidden flex flex-col h-full border border-white/5 group-hover:border-white/20 transition-all duration-500 shadow-2xl">
              
              {/* Thumbnail with 16:9 Aspect Ratio */}
              <div className="relative aspect-video w-full overflow-hidden bg-surface">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Impact Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="px-3 py-1 rounded-full glass border-white/10 text-[10px] font-black text-white uppercase tracking-widest shadow-xl">
                    {project.metrics}
                  </div>
                </div>
                
                {/* Indicator Icon */}
                <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <ArrowUpRight size={20} />
                   </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-3xl font-black group-hover:text-accent-orange transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-secondary text-base mb-8 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-secondary text-[10px] font-bold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-3">
                  {/* Primary CTA */}
                  <div 
                    className="w-full py-4 rounded-xl bg-white text-black font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-accent-orange transition-all"
                  >
                    View Prototype
                    <ExternalLink size={16} />
                  </div>
                  
                  {/* Secondary CTA */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      openPanel(
                        `Technical Deep Dive: ${project.title}`,
                        `How was this built? Explain the technical architecture and AI implementation of "${project.title}". Highlight the LLM choice, prompts, and system design.`,
                        `Context: Technical project analysis for ${project.title}.`
                      )
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-sm font-bold uppercase tracking-widest hover:bg-accent-purple hover:text-white transition-all group"
                  >
                    <Sparkles size={16} className="group-hover:animate-spin" />
                    Technical Deep Dive
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
