'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Sparkles, Send, Command } from 'lucide-react'
import { useAI } from '@/context/AIContext'

const suggestedPrompts = [
  "What do you specialize in?",
  "Tell me about your AI Roadmap agent.",
  "Which project had the most impact?",
  "How do you handle product strategy?",
]

export const AskAI = () => {
  const [query, setQuery] = useState('')
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const { openPanel } = useAI()

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % suggestedPrompts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    openPanel('AI Personal Assistant', query, 'Context: User is asking about Kaustubh\'s portfolio from the Hero section.')
    setQuery('')
  }

  return (
    <div className="w-full max-w-2xl mx-auto mt-12 relative">
      <form 
        onSubmit={handleSubmit}
        className="relative group shrink-0"
      >
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-orange rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
        
        <div className="relative flex items-center bg-[#0B0F19]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2 pl-6">
          <Search className="text-secondary group-focus-within:text-accent-purple transition-colors" size={20} />
          
          <div className="relative flex-grow h-12 flex items-center ml-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-white placeholder-transparent focus:ring-0 text-sm md:text-base"
              placeholder="Ask me anything..."
            />
            
            <AnimatePresence mode="wait">
              {!query && (
                <motion.span
                  key={placeholderIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 pointer-events-none text-secondary/50 text-sm md:text-base italic"
                >
                  {suggestedPrompts[placeholderIndex]}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-3 pr-2">
            <div className="hidden md:flex items-center gap-1 px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-secondary font-mono mr-2">
              <Command size={10} />
              <span>Enter</span>
            </div>
            
            <button
              type="submit"
              className="h-10 w-10 md:w-auto md:px-6 rounded-xl bg-accent-purple text-black font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
            >
              <span className="hidden md:inline">Ask AI</span>
              <Send size={14} />
            </button>
          </div>
        </div>
      </form>
      
      {/* Decorative Labels */}
      <div className="mt-4 flex flex-wrap justify-center gap-4">
         <p className="text-[10px] text-secondary flex items-center gap-1.5 uppercase tracking-widest font-black">
            <Sparkles size={10} className="text-accent-purple" />
            AI-Native Assistant
         </p>
         <div className="h-4 w-px bg-white/10" />
         <p className="text-[10px] text-secondary flex items-center gap-1.5 uppercase tracking-widest font-black">
            Ask about: Tech Stack · Case Studies · PM Philosophy
         </p>
      </div>
    </div>
  )
}
