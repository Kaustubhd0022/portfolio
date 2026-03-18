'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Search, ListTodo, Map, FileText, Zap, ArrowRight } from 'lucide-react'

const agents = [
  {
    name: 'Ideation',
    icon: <Brain size={24} />,
    color: 'bg-accent-orange',
    description: 'Brainstorms 10+ divergent solutions based on problem-market fit.',
  },
  {
    name: 'Market Analysis',
    icon: <Search size={24} />,
    color: 'bg-blue-500',
    description: 'Scrapes competitors and identifies unique value propositions.',
  },
  {
    name: 'Prioritization',
    icon: <ListTodo size={24} />,
    color: 'bg-green-500',
    description: 'Applies RICE scoring to rank features by impact and effort.',
  },
  {
    name: 'Roadmap',
    icon: <Map size={24} />,
    color: 'bg-accent-purple',
    description: 'Sequences development into phases (MVP → V1 → V2).',
  },
  {
    name: 'PRD Generator',
    icon: <FileText size={24} />,
    color: 'bg-pink-500',
    description: 'Synthesizes all insights into a comprehensive product spec.',
  },
]

export const AIPipeline = () => {
  return (
    <section id="ai-systems" className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 text-accent-purple text-[10px] font-bold tracking-widest uppercase mb-4">
          <Zap size={12} />
          AI Multi-Agent Systems
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
          From Idea to <span className="text-accent-purple">PRD</span> in 60s
        </h2>
        <p className="text-secondary text-lg max-w-2xl mx-auto">
          A proprietary orchestration layer that automates product discovery and documentation.
        </p>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-accent-orange via-accent-purple to-pink-500 opacity-20 hidden lg:block" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group"
            >
              <div className={`w-16 h-16 rounded-2xl ${agent.color} flex items-center justify-center text-black mb-6 shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform`}>
                {agent.icon}
              </div>
              
              <div className="glass-card p-6 rounded-2xl text-center flex-grow flex flex-col items-center">
                <h3 className="text-lg font-black mb-3 text-white uppercase tracking-tighter">
                  {agent.name}
                </h3>
                <p className="text-xs text-secondary leading-relaxed">
                  {agent.description}
                </p>
              </div>
              
              {index < agents.length - 1 && (
                <div className="mt-4 text-white/20 lg:hidden">
                  <ArrowRight size={20} className="rotate-90 md:rotate-0" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <button className="px-8 py-4 rounded-xl glass border-white/10 text-accent-purple font-bold text-lg flex items-center gap-3 hover:border-accent-purple transition-all group">
          Run Pipeline Simulation
          <Zap size={20} className="group-hover:fill-accent-purple transition-colors" />
        </button>
      </div>
    </section>
  )
}
