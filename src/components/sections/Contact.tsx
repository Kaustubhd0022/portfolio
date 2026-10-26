'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Send, Sparkles, CheckCircle2, AlertCircle, Copy, Check, Phone, ArrowUpRight, Loader2 } from 'lucide-react'
import { EXTERNAL_LINKS } from '@/config/links'

export const Contact = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kaustubhd0022@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || isSubmitting) return

    setIsSubmitting(true)
    setStatus('idle')
    setStatusMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('success')
        setStatusMessage(data.message || 'Message received! Kaustubh will respond within 24 hours.')
        setEmail('')
      } else {
        setStatus('error')
        setStatusMessage(data.error || 'Unable to submit right now. Please reach out directly via email.')
      }
    } catch (err: any) {
      console.error('Submission failed:', err)
      setStatus('error')
      setStatusMessage('Network error. Please email directly at kaustubhd0022@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
      <div className="relative glass-card rounded-[3rem] p-8 md:p-20 overflow-hidden bg-gradient-to-br from-accent-purple/20 to-accent-orange/10 border-white/10">
        <div className="absolute inset-0 bg-grid-white/5 mask-gradient pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center text-black mb-8 shadow-2xl">
            <Mail size={40} />
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tight bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text drop-shadow-sm">
            Ready to <span className="text-accent-orange">build</span> something?
          </h2>
          <p className="text-xl text-secondary mb-10 max-w-2xl leading-relaxed">
            I'm currently open for Product Management roles, 0-to-1 ventures, and AI system design. 
            Drop your email below or reach out directly.
          </p>

          {/* Quick Direct Contact Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border-white/10 hover:border-accent-orange/40 text-xs font-bold uppercase tracking-wider text-white transition-all hover:scale-105 active:scale-95"
              aria-label="Copy Kaustubh's email address to clipboard"
            >
              {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copiedEmail ? 'Copied kaustubhd0022@gmail.com!' : 'kaustubhd0022@gmail.com'}</span>
            </button>

            <a
              href="tel:+919002737771"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border-white/10 hover:border-accent-purple/40 text-xs font-bold uppercase tracking-wider text-white transition-all hover:scale-105"
            >
              <Phone size={14} className="text-accent-purple" />
              <span>+91-9002737771</span>
            </a>

            <a
              href={EXTERNAL_LINKS.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border-white/10 hover:border-blue-400/40 text-xs font-bold uppercase tracking-wider text-white transition-all hover:scale-105"
            >
              <span>LinkedIn</span>
              <ArrowUpRight size={14} className="text-blue-400" />
            </a>
          </div>

          {/* Verified Contact Form */}
          <form onSubmit={handleSubmit} className="w-full max-w-md relative">
            <div className="relative">
              <label htmlFor="contact-email" className="sr-only">
                Your Email Address
              </label>
              <input 
                id="contact-email"
                type="email" 
                required
                disabled={isSubmitting}
                placeholder="Enter your email address"
                className="w-full px-8 py-5 rounded-2xl bg-black/50 border border-white/15 text-white placeholder:text-white/30 focus:outline-none focus:border-accent-orange transition-colors disabled:opacity-50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                type="submit"
                disabled={isSubmitting || !email.trim()}
                className="mt-4 w-full md:mt-0 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-auto md:px-6 md:py-3 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-accent-orange transition-all disabled:opacity-50 disabled:hover:bg-white cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin text-black" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Get in Touch</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </div>

            {/* Status Messages */}
            <AnimatePresence mode="wait">
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-2 text-left"
                >
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-400" />
                  <span>{statusMessage}</span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm flex items-center gap-2 text-left"
                >
                  <AlertCircle size={18} className="shrink-0 text-red-400" />
                  <span>{statusMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>
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
          <a href={EXTERNAL_LINKS.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href={EXTERNAL_LINKS.social.email} className="hover:text-white transition-colors">Email</a>
        </div>
      </footer>
    </section>
  )
}
