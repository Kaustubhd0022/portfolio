'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type AIContent = {
  title: string
  body: string
  isLoading: boolean
}

interface AIContextType {
  isOpen: boolean
  content: AIContent | null
  openPanel: (title: string, prompt: string, context?: string) => Promise<void>
  closePanel: () => void
}

const AIContext = createContext<AIContextType | undefined>(undefined)

export const AIProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<AIContent | null>(null)

  const openPanel = async (title: string, prompt: string, context?: string) => {
    setIsOpen(true)
    setContent({ title, body: '', isLoading: true })
    
    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, context }),
      })
      const data = await res.json()
      
      if (data.error) {
        setContent({ title, body: `Backend Error: ${data.error}`, isLoading: false })
      } else {
        setContent({ title, body: data.insight || 'No insight generated.', isLoading: false })
      }
    } catch (err: any) {
      setContent({ title, body: `Network Error: Could not reach the AI strategist. ${err?.message || ''}`, isLoading: false })
    }
  }

  const closePanel = () => {
    setIsOpen(false)
    setContent(null)
  }

  return (
    <AIContext.Provider value={{ isOpen, content, openPanel, closePanel }}>
      {children}
    </AIContext.Provider>
  )
}

export const useAI = () => {
  const context = useContext(AIContext)
  if (context === undefined) {
    // Return a safe fallback during SSR/Build where the AIProvider might not be active
    return { 
      isOpen: false, 
      content: null, 
      openPanel: async () => {}, 
      closePanel: () => {} 
    }
  }
  return context
}
