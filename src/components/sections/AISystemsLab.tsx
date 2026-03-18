'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, Play, Search, MessageSquare, Mic, Sparkles, CheckCircle2, Loader2, ArrowRight, Brain, TrendingUp } from 'lucide-react'

const systems = [
  {
    id: 'prd-gen',
    title: 'Idea → PRD Generator',
    description: 'Transforming vague product ideas into structured PRDs using multi-agent strategic reasoning.',
    steps: ['Extract Intent', 'Market Sizing', 'Comp. Analysis', 'PRD Draft'],
    tags: ['Strategy', 'LLM', 'Automation'],
    simulated: true,
    color: 'accent-purple'
  },
  {
    id: 'stock-analyzer',
    title: 'Multi-Agent Stock Analyst',
    description: 'Autonomous financial agents collaborating to build investment theses from real-time data.',
    steps: ['Data Fetch', 'Sentiment', 'Technical', 'Thesis'],
    tags: ['Finance', 'Multi-Agent', 'Real-time'],
    simulated: true,
    color: 'accent-orange'
  },
  {
    id: 'voice-research',
    title: 'AI Voice Research Agent',
    description: 'Analyzing user audio interviews to extract actionable product insights and feature requests.',
    steps: ['Audio NLP', 'Insight Extraction', 'Feature Recs'],
    tags: ['Voice AI', 'NLP', 'Flipkart'],
    simulated: false,
    color: 'accent-blue'
  },
  {
    id: 'wa-commerce',
    title: 'WhatsApp Commerce Agent',
    description: 'End-to-end sales automation from chat intent to final payment link generation.',
    steps: ['Intent Match', 'Catalog Search', 'Payment Link'],
    tags: ['Sales', 'WhatsApp', 'Commerce'],
    simulated: false,
    color: 'accent-orange'
  }
]

export const AISystemsLab = () => {
  const [simulating, setSimulating] = useState<string | null>(null)
  const [result, setResult] = useState<{ id: string, output: string, steps: string[] } | null>(null)

  const runSimulation = async (id: string) => {
    setSimulating(id)
    setResult(null)
    
    try {
      const response = await fetch('/api/simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ systemId: id, input: id === 'prd-gen' ? 'Next-gen AI Portfolio' : 'AAPL' })
      })
      const data = await response.json()
      if (data.success) {
        setResult({ id, output: data.output, steps: data.steps })
      }
    } catch (error) {
      console.error('Simulation failed:', error)
    } finally {
      setSimulating(null)
    }
  }

  return (
    <section id="ai-lab" className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 text-accent-purple text-[10px] font-bold tracking-widest uppercase mb-4">
          <Cpu size={12} />
          AI Innovation Hub
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-white">
          AI Systems <span className="text-accent-purple">Lab</span>
        </h2>
        <p className="text-secondary text-lg max-w-2xl">
          A sandbox for multi-agent systems, where I architect autonomous flows to solve complex product problems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {systems.map((system, index) => (
          <motion.div
            key={system.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden flex flex-col group hover:border-white/20 transition-all duration-500"
          >
            {/* Background Glow */}
            <div className={`absolute -right-20 -top-20 w-64 h-64 bg-${system.color}/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />

            <div className="flex items-start justify-between mb-8">
              <div className={`w-14 h-14 rounded-2xl bg-${system.color}/10 flex items-center justify-center text-${system.color}`}>
                {system.id === 'prd-gen' && <Sparkles size={28} />}
                {system.id === 'stock-analyzer' && <TrendingUp size={28} />}
                {system.id === 'voice-research' && <Mic size={28} />}
                {system.id === 'wa-commerce' && <MessageSquare size={28} />}
              </div>
              <div className="flex flex-wrap gap-2 justify-end">
                {system.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest bg-white/5 text-secondary border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="text-3xl font-black text-white mb-4">{system.title}</h3>
            <p className="text-secondary text-base mb-8 leading-relaxed">
              {system.description}
            </p>

            {/* Pipeline Visualization */}
            <div className="space-y-4 mb-10">
               <div className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-purple mb-4">Pipeline Workflow</div>
               <div className="flex flex-wrap items-center gap-3">
                  {system.steps.map((step, i) => (
                    <React.Fragment key={step}>
                      <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-medium text-white/70">
                        {step}
                      </div>
                      {i < system.steps.length - 1 && <ArrowRight size={12} className="text-white/20 shrink-0" />}
                    </React.Fragment>
                  ))}
               </div>
            </div>

            <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
              {system.simulated ? (
                <button
                  onClick={() => runSimulation(system.id)}
                  disabled={simulating !== null}
                  className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                    simulating === system.id 
                    ? 'bg-accent-purple/50 cursor-not-allowed' 
                    : 'bg-white text-black hover:bg-accent-purple hover:text-white group'
                  }`}
                >
                  {simulating === system.id ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Running agents...
                    </>
                  ) : (
                    <>
                      <Play size={16} fill="currentColor" />
                      Run Simulation
                    </>
                  )}
                </button>
              ) : (
                <span className="text-[10px] font-black uppercase tracking-widest text-secondary flex items-center gap-2">
                   Case Study Coming Soon
                </span>
              )}

              <AnimatePresence>
                {result?.id === system.id && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-accent-orange font-bold text-xs"
                  >
                    <CheckCircle2 size={16} />
                    Simulation Complete
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Simulation Result Overlay */}
            <AnimatePresence>
              {result?.id === system.id && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="mt-6 p-6 rounded-2xl bg-accent-purple/5 border border-accent-purple/20 relative"
                >
                  <button 
                    onClick={() => setResult(null)}
                    className="absolute top-4 right-4 text-secondary hover:text-white"
                  >
                    ×
                  </button>
                  <p className="text-accent-purple font-black text-[10px] uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Brain size={12} /> Agent Output
                  </p>
                  <p className="text-white text-sm font-medium leading-relaxed italic">
                    "{result.output}"
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 0.5, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-10 rounded-[2.5rem] border border-dashed border-white/10 flex flex-col items-center justify-center text-center gap-4 group hover:opacity-100 transition-opacity duration-500"
        >
           <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white/30 group-hover:text-accent-purple transition-colors">
              <Brain size={32} />
           </div>
           <div>
              <h3 className="text-2xl font-black text-white/50 mb-2">Autonomous Growth Agent</h3>
              <p className="text-secondary text-sm">Self-optimizing marketing loops & conversion funnels.</p>
           </div>
           <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] font-black uppercase tracking-widest text-secondary">
              Experimental Phase
           </div>
        </motion.div>
      </div>
    </section>
  )
}
