'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Sparkles, Brain, Loader2, ChevronDown } from 'lucide-react'

export const PortfolioAssistant = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: string }[]>([
    { role: 'ai', content: "Hi! I'm Kaustubh's AI Assistant. Ask me anything about his experience, projects, or product thinking." }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isLoading])

  const suggestedQueries = [
    "Tell me about your journey",
    "Which project had most impact?",
    "What makes you different?"
  ]

  const handleSend = async (query: string) => {
    if (!query.trim()) return

    const userMessage = { role: 'user' as const, content: query }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/ask-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      })
      
      const data = await response.json()
      
      if (data.answer) {
        setMessages(prev => [...prev, { role: 'ai', content: data.answer }])
      } else {
        setMessages(prev => [...prev, { role: 'ai', content: "Sorry, I couldn't process that right now." }])
      }
    } catch (error) {
      console.error(error)
      setMessages(prev => [...prev, { role: 'ai', content: "An error occurred fetching the response." }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Floating Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-accent-purple text-black flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:scale-110 transition-transform"
          >
            <Sparkles size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[600px] max-h-[calc(100vh-48px)] glass-card rounded-[2rem] border border-white/10 flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="p-5 border-b border-white/5 flex items-center justify-between bg-black/40 backdrop-blur-md shrink-0">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-purple/20 flex items-center justify-center text-accent-purple">
                    <Brain size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Portfolio Assistant</h3>
                    <p className="text-accent-purple text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-pulse" /> Online
                    </p>
                  </div>
               </div>
               <button 
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-secondary hover:text-white hover:bg-white/10 transition-colors"
                >
                  <ChevronDown size={20} />
               </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar bg-[#0B0F19]/50">
              {messages.map((msg, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                    ? 'bg-accent-purple text-black rounded-tr-sm font-medium' 
                    : 'bg-white/5 text-white/90 border border-white/5 rounded-tl-sm'
                  }`}>
                    {msg.role === 'ai' && idx > 0 && (
                      <div className="flex items-center gap-1.5 mb-2 opacity-50">
                        <Sparkles size={10} />
                        <span className="text-[8px] uppercase tracking-widest font-bold">Groq Llama-3</span>
                      </div>
                    )}
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="max-w-[85%] p-4 rounded-2xl bg-white/5 border border-white/5 rounded-tl-sm flex items-center gap-3">
                    <Loader2 size={16} className="text-accent-purple animate-spin" />
                    <span className="text-xs text-white/50 font-medium">Synthesizing context...</span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-5 border-t border-white/5 bg-black/40 backdrop-blur-md shrink-0">
              {/* Suggested Queries */}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {suggestedQueries.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(q)}
                      className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-[10px] text-white/70 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
                className="relative flex items-center"
              >
                <input
                   type="text"
                   value={input}
                   onChange={e => setInput(e.target.value)}
                   placeholder="Ask me anything..."
                   className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 pr-12 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-accent-purple transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 w-10 h-10 flex items-center justify-center rounded-lg bg-accent-purple text-black hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 transition-all"
                >
                  <Send size={16} className="ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
