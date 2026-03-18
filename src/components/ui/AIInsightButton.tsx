'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Loader2, X, Brain } from 'lucide-react'

interface AIInsightButtonProps {
  context: string
  title: string
}

export const AIInsightButton: React.FC<AIInsightButtonProps> = ({ context, title }) => {
  const [insight, setInsight] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const generateInsight = async () => {
    setIsLoading(true)
    setIsOpen(true)
    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `Analyze this product case study: "${title}". Provide 3 unique product insights or growth experiments that could improve this product even further.`,
          context,
        }),
      })
      const data = await res.json()
      if (data.insight) {
        setInsight(data.insight)
      } else {
        setInsight('Error: Could not generate insight at this time. Please check your API key.')
      }
    } catch (err) {
      setInsight('Error: Something went wrong.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <button
        onClick={generateInsight}
        className="w-full flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-sm font-black uppercase tracking-widest hover:bg-accent-purple hover:text-white transition-all group"
      >
        <Sparkles size={16} className="group-hover:animate-spin" />
        Get AI Product Insight
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-card max-w-2xl w-full p-8 rounded-[2rem] relative border-accent-purple/30 bg-[#0B0F19]/90 shadow-[0_0_50px_rgba(139,92,246,0.2)]"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-secondary hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-accent-purple flex items-center justify-center text-black">
                  <Brain size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">AI Product Strategist</h3>
                  <p className="text-xs text-accent-purple font-bold uppercase tracking-widest">Analyzing: {title}</p>
                </div>
              </div>

              <div className="min-h-[200px] flex flex-col justify-center">
                {isLoading ? (
                  <div className="flex flex-col items-center gap-4 py-12">
                    <Loader2 size={40} className="text-accent-purple animate-spin" />
                    <p className="text-secondary animate-pulse">Orchestrating product thoughts...</p>
                  </div>
                ) : (
                  <div className="prose prose-invert max-w-none">
                    <p className="text-white/90 leading-relaxed whitespace-pre-wrap">
                      {insight}
                    </p>
                    <div className="mt-8 pt-8 border-t border-white/5 flex justify-end">
                      <button 
                        onClick={() => setIsOpen(false)}
                        className="px-6 py-2 rounded-xl bg-white text-black font-bold text-sm"
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
