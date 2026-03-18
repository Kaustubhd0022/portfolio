'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Brain, Lightbulb, Target, TrendingUp, Sparkles, ArrowRight, X } from 'lucide-react'
import { useAI } from '@/context/AIContext'
import { EXTERNAL_LINKS } from '@/config/links'

const thinkingCards = [
  {
    type: '0→1 Thinking',
    project: 'NomadAI',
    insight: 'Solving "itinerary fatigue" through generative travel flows.',
    framework: 'Lean Canvas & User Journey Mapping',
    icon: <Lightbulb size={24} className="text-accent-orange" />,
    color: 'accent-orange',
    logo: null,
    previewUrl: '/NomadAIDeck (1).pdf',
    details: 'How we moved from a vague idea of "AI travel" to a functional prototype by mapping the exact friction points in manual planning.'
  },
  {
    type: 'First Principles Thinking',
    project: 'Flipkart Refund System',
    insight: 'Deconstructing trust barriers to automate e-commerce returns.',
    framework: 'Five Whys & Risk-Reward Matrix',
    icon: <Brain size={24} className="text-accent-purple" />,
    color: 'accent-purple',
    logo: '/logos/flipkart.png',
    previewUrl: '/flipkart.pdf',
    details: 'Redesigning the refund architecture by asking: "Why do we wait for physical verification?" and building a trust-score based instant refund engine.'
  },
  {
    type: 'UX Heuristics Thinking',
    project: 'Google Maps Analysis',
    insight: 'Reducing cognitive load through Progressive Disclosure.',
    framework: "Nielsen's 10 Heuristics",
    icon: <Target size={24} className="text-accent-blue" />,
    color: 'accent-blue',
    logo: '/logos/google-maps.png',
    previewUrl: '/GOOGLEMAPS-20ba1985-2f88-4b92-9e3e-8eb760d41a24.pdf',
    details: 'An audit of the navigation experience, proposing a decluttered UI that only shows high-priority info based on user velocity and intent.'
  },
  {
    type: 'Growth Thinking',
    project: 'Zomato Reviews',
    insight: 'Gamifying social proof to drive organic acquisition loops.',
    framework: 'AARRR (Pirate Metrics) & Hook Model',
    icon: <TrendingUp size={24} className="text-accent-orange" />,
    color: 'accent-orange',
    logo: '/logos/zomato.jpg',
    previewUrl: '/Milestone--1Final-c7285664-8b23-40b9-b1e1-1f3633ae3406.pdf',
    details: 'Implementing a viral feedback loop where high-quality reviews trigger social triggers, increasing resurrection by 12%.'
  }
]

export const ProductThinking = () => {
  const { openPanel } = useAI()
  const [activePreview, setActivePreview] = useState<string | null>(null)

  return (
    <section id="thinking" className="py-24 max-w-7xl mx-auto px-6 relative">
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 text-accent-purple text-[10px] font-bold tracking-widest uppercase mb-4">
          <Brain size={12} />
          Artifacts & Frameworks
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
          Product <span className="text-accent-purple">Thinking</span>
        </h2>
        <p className="text-secondary text-lg max-w-2xl">
          A deep dive into the mental models and frameworks used to solve complex product problems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {thinkingCards.map((card, index) => (
          <motion.div
            key={card.type}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className={`group relative ${card.previewUrl ? 'cursor-pointer' : 'cursor-not-allowed'}`}
            onClick={() => {
              if (card.previewUrl) {
                setActivePreview(card.previewUrl)
              }
            }}
          >
            {/* Glow Effect on Hover */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-${card.color} to-transparent rounded-[2.5rem] blur opacity-0 group-hover:opacity-20 transition duration-500`} />
            
            <div className="glass-card relative p-10 h-full flex flex-col rounded-[2.5rem] border border-white/5 overflow-hidden">
              {card.logo && (
                <div className="absolute top-8 right-8 w-6 h-6 z-20">
                  <Image 
                    src={card.logo} 
                    alt={`${card.project} logo`} 
                    width={24} 
                    height={24} 
                    className="grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] object-contain" 
                  />
                </div>
              )}
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all">
                  {card.icon}
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                  {card.project}
                </div>
              </div>

              <h3 className="text-2xl font-black mb-3">{card.type}</h3>
              <p className="text-white font-medium text-lg mb-6 leading-relaxed">
                {card.insight}
              </p>

              <div className="mt-auto space-y-8">
                <div className="flex flex-col gap-2">
                   <span className="text-[10px] font-black uppercase tracking-widest text-accent-purple">Framework</span>
                   <span className="text-secondary text-sm font-medium">{card.framework}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      if (card.previewUrl) {
                        setActivePreview(card.previewUrl)
                      } else {
                        alert('Deck Coming Soon!')
                      }
                    }}
                    className={`flex-grow py-4 px-6 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl ${card.previewUrl ? 'bg-white text-black hover:bg-accent-purple hover:text-white' : 'bg-white/5 text-white/40 cursor-not-allowed'}`}
                  >
                    {card.previewUrl ? 'View Breakdown' : 'Coming Soon'}
                    {card.previewUrl && <ArrowRight size={14} />}
                  </button>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      openPanel(
                        `AI Analysis: ${card.type}`,
                        `Explain the product management concept of "${card.type}" and why the "${card.framework}" framework is effective for projects like "${card.project}".`,
                        `Context: General PM education on ${card.type}.`
                      )
                    }}
                    className="py-4 px-6 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                  >
                    <Sparkles size={14} className="text-accent-purple" />
                    Explain concept
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Embedded Iframe Modal */}
      <AnimatePresence>
        {activePreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-sm"
            onClick={() => setActivePreview(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-6xl h-full max-h-[90vh] glass-card rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0B0F19]/80 backdrop-blur-md z-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent-purple/20 flex items-center justify-center text-accent-purple">
                    <Brain size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-white leading-none mb-1">Interactive Deck Preview</h3>
                    <p className="text-[10px] text-secondary uppercase tracking-widest">Product Thinking Artifact</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <a 
                    href={activePreview} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-accent-purple hover:text-white transition-colors flex items-center gap-1 uppercase tracking-widest"
                  >
                    Open in new tab <ArrowRight size={12} />
                  </a>
                  <button 
                    onClick={() => setActivePreview(null)}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-secondary hover:text-white transition-all"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
              
              {/* Embedded Iframe */}
              <div className="flex-1 w-full bg-[#0B0F19] relative">
                {/* Loader showing while iframe loads */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-2 border-accent-purple/30 border-t-accent-purple animate-spin" />
                </div>
                
                <iframe 
                  src={activePreview} 
                  className="absolute inset-0 w-full h-full border-none bg-surface/50 z-10"
                  title="Document Preview"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
