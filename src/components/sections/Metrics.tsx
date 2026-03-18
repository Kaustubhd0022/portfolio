'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Users, Code, Workflow } from 'lucide-react'

const metrics = [
  {
    label: 'Live Prototypes',
    value: '5+',
    icon: <Code className="text-accent-orange" size={24} />,
    description: 'Shipped AI-native applications from concept to cloud.',
  },
  {
    label: 'Years 0-to-1 Exp',
    value: '2+',
    icon: <Zap className="text-accent-purple" size={24} />,
    description: 'Founding PM experience scaling startups from zero.',
  },
  {
    label: 'User Interviews',
    value: '30+',
    icon: <Users className="text-accent-orange" size={24} />,
    description: 'Deep qualitative research driving product decisions.',
  },
  {
    label: 'AI Agents Deployed',
    value: '5',
    icon: <Workflow className="text-accent-purple" size={24} />,
    description: 'Multi-agent orchestration pipelines for automation.',
  },
]

export const Metrics = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-accent-orange opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="mb-6 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3">
              {metric.icon}
            </div>
            
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-black text-white">{metric.value}</span>
              <span className="text-sm font-bold text-accent-orange uppercase tracking-widest">{metric.label}</span>
            </div>
            
            <p className="text-secondary text-sm leading-relaxed">
              {metric.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
