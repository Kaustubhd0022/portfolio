'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, Sparkles } from 'lucide-react'

export const Contact = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSent(true)
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
      <div className="relative glass-card rounded-[3rem] p-8 md:p-20 overflow-hidden bg-gradient-to-br from-accent-purple/20 to-accent-orange/10 border-white/10">
        <div className="absolute inset-0 bg-grid-white/5 mask-gradient" />
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center text-black mb-8 shadow-2xl">
            <Mail size={40} />
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">
            Ready to <span className="text-accent-orange">build</span> something?
          </h2>
          <p className="text-xl text-secondary mb-12 max-w-2xl">
            I'm currently looking for new opportunities and interesting 0-to-1 projects. 
            Drop your email below and I'll get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-md relative">
            <input 
              type="email" 
              required
              placeholder="Enter your email address"
              className="w-full px-8 py-5 rounded-2xl bg-black/40 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-orange transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              type="submit"
              disabled={isSubmitting || isSent}
              className="mt-4 w-full md:mt-0 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-auto md:px-6 md:py-3 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-accent-orange transition-all disabled:opacity-50 disabled:hover:bg-white"
            >
              {isSent ? 'Sent!' : isSubmitting ? 'Sending...' : 'Get in Touch'}
              <Send size={18} className={isSent ? 'scale-0' : 'scale-100'} />
            </button>
          </form>
          
          <div className="mt-12 flex items-center gap-3 text-sm font-bold text-accent-purple uppercase tracking-widest">
            <Sparkles size={16} />
            Always building · Always learning
          </div>
        </div>
      </div>
      
      <footer className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-secondary text-sm">
        <p>© {new Date().getFullYear()} Kaustubh Deshmukh. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="https://linkedin.com/in/kaustubhd0022" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="mailto:kaustubhd0022@gmail.com" className="hover:text-white transition-colors">Email</a>
        </div>
      </footer>
    </section>
  )
}
