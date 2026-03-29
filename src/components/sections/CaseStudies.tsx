'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Target, Lightbulb, CheckCircle2, Sparkles } from 'lucide-react'
import { useAI } from '@/context/AIContext'

const caseStudies = [
  {
    title: 'Netflix Continue Watching 2.0',
    subtitle: 'Streaming Retention & Personalization',
    problem: 'High churn rates due to "decision fatigue" in the Continue Watching tray.',
    solution: 'Implemented a multi-agent recommendation layer that prioritizes "vibe-consistent" content over chronological order.',
    impact: 'Predicted +12% increase in session length and -5% churn reduction.',
    metrics: ['+12% Session Length', '-5% Churn'],
    color: 'from-red-500/20 to-transparent',
  },
  {
    title: 'Zomato Tool Review Enhancement',
    subtitle: 'Improving User Feedback Loops',
    problem: 'Low review quality and high friction in the photo-upload journey.',
    solution: 'Designed an AI-assisted review picker that auto-tags photos and suggests high-intent keywords.',
    impact: 'Increased review completion rate by 22% during pilot phase.',
    metrics: ['+22% Completion Rate', '30% Faster Reviewing'],
    color: 'from-orange-500/20 to-transparent',
  },
  {
    title: 'AI in Gaming Advertising',
    subtitle: 'Contextual Monetization Strategy',
    problem: 'Intrusive ads breaking immersion in AAA mobile gaming titles.',
    solution: 'Developed a dynamic ad-injection engine that uses real-time gameplay context to serve non-breaking native ads.',
    impact: 'Improved Ad-Recall by 40% and developer revenue by 18%.',
    metrics: ['+40% Ad-Recall', '+18% Revenue'],
    color: 'from-green-500/20 to-transparent',
  },
  {
    title: 'Village Image Collection Platform',
    subtitle: 'AI Data Acquisition (Josh Talks)',
    problem: 'Critical need for culturally rich, hyper-local Indian datasets from remote villages to improve AI understanding of Bharat.',
    solution: 'Mobile-responsive web tool with geofencing, regional language support, and offline draft mode for low-connectivity areas.',
    impact: 'Targeted 1,000 images per village with a submission time under 30 seconds for users with low digital literacy.',
    metrics: ['1,000 images/village', '< 30s submission'],
    color: 'from-blue-500/20 to-transparent',
  },
  {
    title: 'Transcriber Quality Detection',
    subtitle: 'Fraud Prevention & QC (Josh Talks)',
    problem: 'Mass data pollution from bad actors using Whisper-copied text and gaming the system via physically impossible speeds.',
    solution: 'Multi-layered QC system using real-time signals: time-to-length ratio, edit-distance, and pattern matching.',
    impact: 'Targets < 2% word-level error rate and significantly reduces operational waste by preventing fraudulent payouts.',
    metrics: ['< 2% Error Rate', 'Shadow Ban System'],
    color: 'from-purple-500/20 to-transparent',
  },
  {
    title: 'Voice AI Evaluation System',
    subtitle: 'Standardized Framework (Josh Talks)',
    problem: 'Scaling model improvement for multilingual voice agents without objective ways to judge conversation quality.',
    solution: 'Standardized evaluation framework using 5 weighted rubrics and AI-assisted workflows for consistent feedback loops.',
    impact: 'Achieves κ > 0.7 inter-rater agreement and reduces manual evaluation time to 2-4 minutes per conversation.',
    metrics: ['κ > 0.7 Agreement', '2-4m Eval Time'],
    color: 'from-yellow-500/20 to-transparent',
  },
]

export const CaseStudies = () => {
  const { openPanel } = useAI()
  
  return (
    <section id="case-studies" className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-orange/10 text-accent-orange text-[10px] font-bold tracking-widest uppercase mb-4">
          <Target size={12} />
          Deep Dives
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
          Product <span className="text-accent-orange">Thinking</span>
        </h2>
        <p className="text-secondary text-lg max-w-2xl">
          Detailed case studies focusing on user psychology, market requirements, and technical feasibility.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className={`relative glass-card rounded-[2.5rem] p-8 md:p-12 overflow-hidden flex flex-col lg:flex-row gap-12 group`}
          >
            <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${study.color} opacity-30 -z-10`} />
            
            <div className="flex-1">
              <span className="text-accent-orange font-bold text-sm uppercase tracking-widest mb-2 block">
                {study.subtitle}
              </span>
              <h3 className="text-3xl md:text-5xl font-black mb-8 text-white">
                {study.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="flex items-center gap-2 text-white font-bold mb-3 uppercase tracking-tighter text-sm">
                    <TrendingUp size={16} className="text-red-400" />
                    The Problem
                  </div>
                  <p className="text-secondary text-sm leading-relaxed">
                    {study.problem}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-white font-bold mb-3 uppercase tracking-tighter text-sm">
                    <Lightbulb size={16} className="text-yellow-400" />
                    The Solution
                  </div>
                  <p className="text-secondary text-sm leading-relaxed">
                    {study.solution}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                {study.metrics.map((metric) => (
                  <div key={metric} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-widest flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-accent-orange" />
                    {metric}
                  </div>
                ))}
              </div>

              <button 
                onClick={() => openPanel(
                  `Strategic Analysis: ${study.title}`,
                  `Explain this case study: "${study.title}". 
                  Focus on:
                  1. Problem: ${study.problem}
                  2. Solution: ${study.solution}
                  3. Impact: ${study.impact}
                  4. Key Trade-offs: Provide 2-3 strategic trade-offs made during development.`,
                  `Context: Detailed case study analysis for ${study.title}.`
                )}
                className="mt-8 flex items-center gap-3 px-6 py-3 rounded-xl bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-sm font-black uppercase tracking-widest hover:bg-accent-purple hover:text-white transition-all group"
              >
                <Sparkles size={18} className="group-hover:animate-spin" />
                Get AI Insight
              </button>
            </div>

            <div className="lg:w-1/3 flex flex-col justify-center">
              <div className="p-8 rounded-3xl bg-black/40 border border-white/5 backdrop-blur-sm">
                <div className="text-white font-bold mb-4 uppercase tracking-widest text-xs flex items-center gap-2">
                  <TrendingUp size={14} /> Major Impact
                </div>
                <p className="text-xl font-medium text-white italic leading-relaxed">
                  "{study.impact}"
                </p>
                <div className="mt-8 h-[2px] w-12 bg-accent-orange" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
