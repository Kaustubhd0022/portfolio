'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Rocket, MousePointer2 } from 'lucide-react'
import Link from 'next/link'
import { AskAI } from '@/components/ui/AskAI'

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as any },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-xs font-bold tracking-widest uppercase mb-8 text-accent-orange"
          >
            <Rocket size={14} />
            Product Manager · AI Builder · Founder
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight max-w-4xl"
          >
            I build and ship <span className="text-accent-purple">AI-powered</span> products<span className="text-accent-orange">.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-2xl text-secondary mb-12 max-w-2xl font-medium leading-relaxed"
          >
            Specializing in 0-to-1 products, multi-agent AI pipelines, and high-impact consumer experiences.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link 
              href="#projects" 
              className="px-8 py-4 rounded-xl bg-white text-black font-bold text-lg flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 group shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#ai-systems" 
              className="px-8 py-4 rounded-xl glass border-white/10 text-white font-bold text-lg flex items-center gap-3 transition-all hover:bg-white/5"
            >
              <Play size={20} fill="currentColor" />
              Watch AI Agent Demo
            </Link>
          </motion.div>
          
          <motion.div variants={itemVariants} className="w-full">
            <AskAI />
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm font-bold tracking-tighter uppercase text-white/40"
          >
            <div className="flex items-center gap-2 grayscale brightness-200 opacity-50">
              <span className="text-xl">NextLeap</span>
            </div>
            <div className="flex items-center gap-2 grayscale brightness-200 opacity-50">
              <span className="text-xl">Wash on Wheels</span>
            </div>
            <div className="flex items-center gap-2 grayscale brightness-200 opacity-50">
              <span className="text-xl">MechTech</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative arrow pointing down */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent mx-auto mb-2" />
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
      </motion.div>
    </section>
  )
}
