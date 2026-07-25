'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, CheckCircle2, TrendingUp, Users, Target, Sparkles, ArrowRight } from 'lucide-react'

const experiences = [
  {
    role: 'Co-founder',
    company: 'Wash On Wheels',
    subRole: 'Founding Product Manager',
    period: 'Oct 2023 – Sep 2025',
    location: 'Sangli, MH',
    description: 'Built the internal tech backbone for a doorstep car-wash operation: a customer-facing booking flow (app + WhatsApp) paired with an ops dashboard (Supabase/Firebase) for real-time scheduling and dispatch across a mobile fleet — replacing manual call/spreadsheet coordination as order volume scaled.',
    impact: [
      'Scaled demand 4–5x in under 4 months (2 → 8–10 orders/day/vehicle): validated PMF through 30+ customer discovery interviews, launched MVP in 3 months, and grew a 4–5 vehicle fleet to ₹2L+/month GMV.',
      'Used Firebase/Supabase analytics to track booking conversion, driver utilization, and repeat-order rate — prioritizing dispatch dashboard improvements that reduced manual reassignment time.',
      'Drove 65%+ repeat customer rate (vs. 40–50% industry average): ran A/B-tested WhatsApp/app reminder cadences and loyalty tiers, cutting churn 30% over 6 months.',
      'Cut per-zone launch cost by ~85% (₹1.5–6L → under ₹90K): designed an asset-light, mobile-first service model after competitive analysis of 5+ local operators, enabling 3x faster expansion.'
    ],
    highlight: true,
    aiBadge: false,
    color: 'accent-orange'
  },
  {
    role: 'AI Product Intern',
    company: 'Product School',
    period: 'Jan 2026',
    description: 'Specialized in applying artificial intelligence to enhance product workflows.',
    impact: [
      'Worked on AI-driven product workflows to streamline operations.',
      'Applied generative AI in product use cases to improve user engagement.',
      'Contributed to research and feature definition for next-gen tools.'
    ],
    highlight: false,
    aiBadge: true,
    color: 'accent-purple'
  },
  {
    role: 'Founder',
    company: 'SK Autoperformance',
    period: '2021 — 2023',
    description: 'Founded and scaled an auto-performance venture from zero — owning the full product, pricing, and customer experience lifecycle.',
    impact: [
      'Defined the service offering and go-to-market strategy through direct customer discovery and competitive analysis.',
      'Designed the end-to-end customer journey, reducing friction in onboarding and improving repeat purchase rate.',
      'Built dynamic pricing models based on demand signals, driving measurable revenue growth.',
      'Iterated on the core service based on customer feedback loops, improving satisfaction and long-term retention.'
    ],
    highlight: false,
    aiBadge: false,
    color: 'accent-blue'
  },
  {
    role: 'Product Manager Fellow',
    company: 'NextLeap',
    period: '2024',
    description: 'Intensive fellowship focused on solving real-world product problems.',
    impact: [
      'Built detailed PRDs and conceptualized MVPs for consumer-tech products.',
      'Utilized RICE/ICE frameworks for rigorous feature prioritization.',
      'Defined KPIs and north-star metrics to track holistic product success.'
    ],
    highlight: false,
    aiBadge: false,
    color: 'green-400'
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
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text drop-shadow-sm">
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
                      <div className="flex flex-wrap items-center gap-2 text-white/50 font-black text-[10px] uppercase tracking-widest">
                        <Calendar size={14} className={`text-${exp.color}`} />
                        {exp.period}
                        {/* @ts-ignore */}
                        {exp.location && (
                          <>
                            <span className="opacity-50">•</span>
                            {/* @ts-ignore */}
                            <span>{exp.location}</span>
                          </>
                        )}
                      </div>
                      <div className="flex gap-2">
                        {exp.highlight && (
                          <span className={`px-3 py-1 rounded-full bg-${exp.color}/20 text-${exp.color} text-[10px] font-black uppercase tracking-widest border border-${exp.color}/30 shadow-[0_0_15px_rgba(255,107,0,0.2)]`}>
                            Co-founder
                          </span>
                        )}
                        {exp.aiBadge && (
                          <span className={`px-3 py-1 rounded-full bg-${exp.color}/20 text-${exp.color} text-[10px] font-black uppercase tracking-widest border border-${exp.color}/30 shadow-[0_0_15px_rgba(139,92,246,0.2)] flex items-center gap-1.5`}>
                            <Sparkles size={10} />
                            AI Focus
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="text-3xl font-black text-white mb-2 leading-tight">
                      {exp.role}
                    </h3>
                    <div className="mb-4">
                      <p className="text-accent-purple text-lg font-bold">
                        {exp.company}
                      </p>
                      {/* @ts-ignore */}
                      {exp.subRole && (
                        <p className="text-white/70 font-medium text-base mt-1">
                          {/* @ts-ignore */}
                          {exp.subRole}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex items-start gap-3 mb-8">
                      <div className={`mt-1 flex items-center justify-center text-${exp.color} shrink-0`}>
                        <ArrowRight size={18} />
                      </div>
                      <p className="text-secondary text-base font-medium">
                        {exp.description}
                      </p>
                    </div>

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
