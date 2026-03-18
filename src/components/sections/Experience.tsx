'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, CheckCircle2, TrendingUp, Users, Target } from 'lucide-react'

const experiences = [
  {
    role: 'Co-founder & Founding Product Manager',
    company: 'Wash On Wheels',
    period: '2022 — Present',
    description: 'Leading the 0-to-1 product build for a disruptive auto-care platform.',
    impact: [
      'Built and shipped the MVP from scratch in under 4 months.',
      'Conducted 30+ deep user interviews to define core product features.',
      'Achieved 40% reduction in operational costs through automated scheduling.',
      'Owned product roadmap, stakeholder management, and go-to-market strategy.'
    ],
    highlight: true,
    color: 'accent-orange'
  },
  {
    role: 'Business Development Manager',
    company: 'SK Autoperformance',
    period: '2021 — 2022',
    description: 'Spearheaded market expansion and revenue optimization strategies.',
    impact: [
      'Executed data-driven market research to identify high-growth segments.',
      'Restructured pricing strategy leading to 15% increase in gross margins.',
      'Optimized sales funnel to drive customer acquisition growth.'
    ],
    highlight: false,
    color: 'accent-purple'
  },
  {
    role: 'Product Manager Fellow',
    company: 'NextLeap',
    period: '2021',
    description: 'Intensive fellowship focused on solving real-world product problems.',
    impact: [
      'Authored comprehensive PRDs and MVPs for consumer-tech products.',
      'Mastered Agile collaboration, user research, and prioritization frameworks.',
      'Defined and tracked north-star metrics and core KPIs for product success.'
    ],
    highlight: false,
    color: 'accent-blue'
  }
]

export const Experience = () => {
  return (
    <section id="experience" className="py-24 max-w-7xl mx-auto px-6 relative">
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 text-accent-purple text-[10px] font-bold tracking-widest uppercase mb-4">
          <Briefcase size={12} />
          Career Journey
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-white">
          Impact & <span className="text-accent-purple">Ownership</span>
        </h2>
        <p className="text-secondary text-lg max-w-2xl">
          A track record of building products from 0-to-1 and driving measurable business growth.
        </p>
      </div>

      <div className="relative">
        {/* Timeline Central Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
        
        {/* Mobile Line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 md:hidden" />

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={exp.role} className="relative">
              {/* Timeline Node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className={`absolute left-0.5 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-[#0B0F19] bg-${exp.color} z-10 hidden md:block shadow-[0_0_20px_rgba(139,92,246,0.3)]`}
              />
              
              {/* Mobile Node */}
              <div className={`absolute left-0 w-8 h-8 rounded-full border-4 border-[#0B0F19] bg-${exp.color} z-10 md:hidden shadow-[0_0_20px_rgba(139,92,246,0.3)]`} />

              <div className={`flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 md:px-12 ml-10 md:ml-0">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className={`glass-card p-8 md:p-10 rounded-[2rem] border border-white/5 bg-[#0B0F19]/50 backdrop-blur-xl transition-all duration-300 ${exp.highlight ? 'border-accent-purple/30 shadow-[0_0_50px_rgba(139,92,246,0.1)]' : ''}`}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2 text-accent-purple font-black text-[10px] uppercase tracking-widest">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      {exp.highlight && (
                        <span className="px-3 py-1 rounded-full bg-accent-purple/20 text-accent-purple text-[10px] font-black uppercase tracking-widest border border-accent-purple/30">
                          Co-founder
                        </span>
                      )}
                    </div>

                    <h3 className="text-3xl font-black text-white mb-2 leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-accent-purple text-lg font-bold mb-4">
                      {exp.company}
                    </p>
                    
                    <p className="text-secondary text-base mb-8 font-medium">
                      {exp.description}
                    </p>

                    <div className="space-y-4">
                      {exp.impact.map((point) => (
                        <div key={point} className="flex items-start gap-4">
                          <div className={`w-5 h-5 rounded-full bg-${exp.color}/10 flex items-center justify-center text-${exp.color} shrink-0 mt-1`}>
                            <CheckCircle2 size={12} />
                          </div>
                          <p className="text-white/80 text-sm leading-relaxed">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
                <div className="hidden md:block w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
