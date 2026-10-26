'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, CheckCircle2, TrendingUp, Sparkles, ArrowRight, Zap, Target } from 'lucide-react'

const expThemeMap: Record<string, {
  nodeBg: string
  text: string
  badgeBg: string
  badgeBorder: string
  iconBg: string
  cardBorder: string
}> = {
  'accent-purple': {
    nodeBg: 'bg-purple-500',
    text: 'text-purple-400',
    badgeBg: 'bg-purple-500/20 text-purple-300',
    badgeBorder: 'border-purple-500/40',
    iconBg: 'bg-purple-500/10 text-purple-400',
    cardBorder: 'border-purple-500/30 shadow-[0_0_50px_rgba(139,92,246,0.15)]',
  },
  'accent-orange': {
    nodeBg: 'bg-orange-500',
    text: 'text-orange-400',
    badgeBg: 'bg-orange-500/20 text-orange-300',
    badgeBorder: 'border-orange-500/40',
    iconBg: 'bg-orange-500/10 text-orange-400',
    cardBorder: 'border-orange-500/30 shadow-[0_0_50px_rgba(251,146,60,0.1)]',
  },
  'accent-blue': {
    nodeBg: 'bg-sky-500',
    text: 'text-sky-400',
    badgeBg: 'bg-sky-500/20 text-sky-300',
    badgeBorder: 'border-sky-500/40',
    iconBg: 'bg-sky-500/10 text-sky-400',
    cardBorder: 'border-sky-500/20',
  },
  'emerald-400': {
    nodeBg: 'bg-emerald-400',
    text: 'text-emerald-400',
    badgeBg: 'bg-emerald-500/20 text-emerald-300',
    badgeBorder: 'border-emerald-500/40',
    iconBg: 'bg-emerald-500/10 text-emerald-400',
    cardBorder: 'border-emerald-500/20',
  },
}

const experiences = [
  {
    role: 'AI Product Manager',
    company: "DV’s TattvaCo Originals LLP",
    period: 'September 2026 – Present',
    location: 'Remote / Mumbai',
    description: 'Leading 0→1 development of an AI-native film development and production platform (tattvaCo / DVS) targeting a 97% reduction in story turnaround time.',
    targetImpact: '30× faster story development, reduced creative iteration time, and accelerated delivery of pitch-ready stories.',
    impact: [
      'Leading 0→1 development of an AI-native film development and production platform.',
      'Targeting a reduction in story development time from 30 days to 1 day (up to 97% faster) through AI-powered workflows.',
      'Defining product vision, MVP strategy, roadmap, PRDs, and product success metrics.',
      'Designing AI workflows for script refinement, character development, narrative continuity, and Hinglish dialogue generation.',
      'Driving user journey optimization, AI output quality evaluation, and script fidelity requirements.',
      'Translating creative and business needs into technical specifications, user stories, and acceptance criteria.',
      'Aligning product priorities, technical dependencies, and delivery plans with cross-functional stakeholders.'
    ],
    highlight: true,
    aiBadge: true,
    badgeText: 'Current Role',
    color: 'accent-purple'
  },
  {
    role: 'AI Product Intern',
    company: 'Product School',
    period: 'Jan 2026',
    description: 'Specialized in applying artificial intelligence to enhance product workflows and operational automation.',
    impact: [
      'Architected AI-driven product workflows to streamline discovery operations.',
      'Applied generative AI in consumer product use cases to improve user engagement loops.',
      'Contributed to research, prompt tuning, and feature definition for next-gen productivity tools.'
    ],
    highlight: false,
    aiBadge: true,
    badgeText: 'AI Specialization',
    color: 'accent-blue'
  },
  {
    role: 'Co-founder & Founding Product Manager',
    company: 'Wash On Wheels',
    period: 'Oct 2023 – Sep 2025',
    location: 'Sangli, MH',
    description: 'Built the internal tech backbone for a doorstep car-wash operation: a customer-facing booking flow (app + WhatsApp) paired with an ops dashboard (Supabase/Firebase) for real-time fleet dispatch.',
    impact: [
      'Scaled demand 4–5x in under 4 months (2 → 8–10 orders/day/vehicle): validated PMF through 30+ customer discovery interviews, launched MVP in 3 months, and grew a 4–5 vehicle fleet to ₹2L+/month GMV.',
      'Used Firebase/Supabase analytics to track booking conversion, driver utilization, and repeat-order rate — prioritizing dispatch dashboard improvements that reduced manual reassignment time.',
      'Drove 65%+ repeat customer rate (vs. 40–50% industry average): ran A/B-tested WhatsApp/app reminder cadences and loyalty tiers, cutting churn 30% over 6 months.',
      'Cut per-zone launch cost by ~85% (₹1.5–6L → under ₹90K): designed an asset-light, mobile-first service model after competitive analysis of 5+ local operators, enabling 3x faster expansion.'
    ],
    highlight: true,
    aiBadge: false,
    badgeText: '0→1 Founder',
    color: 'accent-orange'
  },
  {
    role: 'Product Manager Fellow',
    company: 'NextLeap',
    period: '2024',
    description: 'Intensive fellowship focused on solving complex, real-world product problems using structured frameworks.',
    impact: [
      'Built detailed PRDs and conceptualized MVPs for consumer-tech products (Zomato, Flipkart).',
      'Utilized RICE and ICE frameworks for rigorous feature prioritization against business constraints.',
      'Defined KPIs, north-star metrics, and behavioral cohort funnels to track holistic product success.'
    ],
    highlight: false,
    aiBadge: false,
    badgeText: 'Fellowship',
    color: 'emerald-400'
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
    badgeText: 'Founder',
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
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text drop-shadow-sm">
          Impact & <span className="text-accent-purple">Ownership</span>
        </h2>
        <p className="text-secondary text-lg max-w-2xl">
          A track record of building products from 0-to-1, architecting AI workflows, and driving measurable business growth.
        </p>
      </div>

      <div className="relative">
        {/* Timeline Central Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
        
        {/* Mobile Line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 md:hidden" />

        <div className="space-y-16">
          {experiences.map((exp, index) => {
            const theme = expThemeMap[exp.color] || expThemeMap['accent-purple']
            return (
              <div key={`${exp.company}-${exp.period}`} className="relative">
                {/* Timeline Node Desktop */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className={`absolute left-0.5 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-[#0B0F19] ${theme.nodeBg} z-10 hidden md:block shadow-[0_0_20px_rgba(139,92,246,0.3)]`}
                />
                
                {/* Mobile Node */}
                <div className={`absolute left-0 w-8 h-8 rounded-full border-4 border-[#0B0F19] ${theme.nodeBg} z-10 md:hidden shadow-[0_0_20px_rgba(139,92,246,0.3)]`} />

                <div className={`flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-1/2 md:px-12 ml-10 md:ml-0">
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.01 }}
                      className={`glass-card p-8 md:p-10 rounded-[2rem] border border-white/10 bg-[#0B0F19]/60 backdrop-blur-xl transition-all duration-300 ${exp.highlight ? theme.cardBorder : ''}`}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex flex-wrap items-center gap-2 text-white/50 font-black text-[10px] uppercase tracking-widest">
                          <Calendar size={14} className={theme.text} />
                          <span>{exp.period}</span>
                          {exp.location && (
                            <>
                              <span className="opacity-50">•</span>
                              <span>{exp.location}</span>
                            </>
                          )}
                        </div>
                        <div className="flex gap-2">
                          {exp.badgeText && (
                            <span className={`px-3 py-1 rounded-full ${theme.badgeBg} text-[10px] font-black uppercase tracking-widest border ${theme.badgeBorder} flex items-center gap-1.5`}>
                              {exp.aiBadge && <Sparkles size={10} />}
                              {exp.badgeText}
                            </span>
                          )}
                        </div>
                      </div>

                      <h3 className="text-3xl font-black text-white mb-2 leading-tight">
                        {exp.role}
                      </h3>
                      <div className="mb-4">
                        <p className={`${theme.text} text-lg font-bold`}>
                          {exp.company}
                        </p>
                      </div>
                      
                      <div className="flex items-start gap-3 mb-6">
                        <div className={`mt-1 flex items-center justify-center ${theme.text} shrink-0`}>
                          <ArrowRight size={18} />
                        </div>
                        <p className="text-secondary text-base font-medium leading-relaxed">
                          {exp.description}
                        </p>
                      </div>

                      {/* Highlighted Target Impact Banner */}
                      {exp.targetImpact && (
                        <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-purple-500/15 via-orange-500/10 to-transparent border border-purple-500/30 flex items-start gap-3">
                          <Target size={18} className="text-accent-purple shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[10px] font-black text-accent-purple uppercase tracking-widest block mb-0.5">Target Impact</span>
                            <p className="text-white font-semibold text-xs leading-relaxed">{exp.targetImpact}</p>
                          </div>
                        </div>
                      )}

                      <div className="space-y-4">
                        {exp.impact.map((point) => (
                          <div key={point} className="flex items-start gap-4">
                            <div className={`w-5 h-5 rounded-full ${theme.iconBg} flex items-center justify-center shrink-0 mt-1`}>
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
