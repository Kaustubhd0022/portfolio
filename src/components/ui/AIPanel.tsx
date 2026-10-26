'use client'

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, Loader2, Brain, RotateCcw, AlertTriangle } from 'lucide-react'
import { useAI } from '@/context/AIContext'

export const AIPanel = () => {
  const { isOpen, content, closePanel } = useAI()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closePanel()
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, closePanel])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePanel}
            aria-hidden="true"
            className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-md"
          />

          {/* Slide-up Panel */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            role="dialog"
            aria-modal="true"
            aria-label={content?.title || 'AI Strategic Insights'}
            className="fixed bottom-0 left-0 right-0 z-[120] max-h-[85vh] overflow-hidden"
          >
            <div className="mx-auto max-w-4xl h-full border-t border-x border-white/10 rounded-t-[3rem] bg-[#0B0F19]/95 backdrop-blur-3xl shadow-[0_-20px_80px_rgba(0,0,0,0.7)] flex flex-col">
              
              {/* Header Container */}
              <div className="p-8 pb-4 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-5">
                   <div className="w-14 h-14 rounded-2xl bg-accent-purple flex items-center justify-center text-black shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                     <Brain size={28} />
                   </div>
                   <div>
                     <h3 className="text-2xl font-black text-white">{content?.title || 'AI Insights'}</h3>
                     <p className="text-secondary text-xs uppercase tracking-widest font-black flex items-center gap-2">
                       <Sparkles size={12} className="text-accent-purple" />
                       Strategic Analysis System · Press Esc to Close
                     </p>
                   </div>
                </div>
                <button 
                  onClick={closePanel}
                  aria-label="Close insights panel"
                  className="w-12 h-12 rounded-full flex items-center justify-center text-secondary hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content Area */}
              <div className="p-8 md:p-12 overflow-y-auto flex-grow prose prose-invert max-w-none">
                {content?.isLoading ? (
                  <div className="flex flex-col items-center justify-center py-24 gap-6">
                    <Loader2 size={48} className="text-accent-purple animate-spin" />
                    <p className="text-white text-lg font-medium animate-pulse">Orchestrating strategic thoughts...</p>
                  </div>
                ) : content?.isError ? (
                  <div className="p-8 rounded-3xl bg-red-500/10 border border-red-500/30 text-white space-y-4">
                    <div className="flex items-center gap-3 text-red-400">
                      <AlertTriangle size={24} />
                      <h4 className="text-lg font-bold">Inference Error</h4>
                    </div>
                    <p className="text-white/80 leading-relaxed text-sm">
                      {content.body}
                    </p>
                    {content.retry && (
                      <button
                        onClick={content.retry}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-500 text-white font-bold text-xs uppercase tracking-widest hover:bg-red-400 transition-colors cursor-pointer"
                      >
                        <RotateCcw size={14} />
                        Retry Analysis
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="space-y-6">
                    <p className="text-white/90 text-xl leading-relaxed whitespace-pre-wrap font-medium">
                      {content?.body}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 bg-white/5 p-8 rounded-3xl border border-white/5">
                       <div className="space-y-2">
                          <h4 className="text-accent-purple font-black text-xs uppercase tracking-wider">Product Thinking</h4>
                          <p className="text-secondary text-sm">Deep analysis based on product psychology and market requirements.</p>
                       </div>
                       <div className="space-y-2">
                          <h4 className="text-accent-purple font-black text-xs uppercase tracking-wider">Growth Vector</h4>
                          <p className="text-secondary text-sm">Experiments focused on retention, conversion, and user impact.</p>
                       </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer CTA */}
              <div className="p-8 border-t border-white/5 flex items-center justify-between bg-[#0B0F19]">
                <p className="text-xs text-secondary hidden sm:block">Powered by Groq Llama-3.3-70B Versatile</p>
                <button 
                  onClick={closePanel}
                  className="px-8 py-3 rounded-2xl bg-white text-black font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform cursor-pointer"
                >
                  Close Insights
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
