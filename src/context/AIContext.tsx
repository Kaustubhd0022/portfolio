'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

export type AIContent = {
  title: string
  body: string
  isLoading: boolean
  isError?: boolean
  retry?: () => void
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
    setContent({
      title,
      body: '',
      isLoading: true,
      isError: false,
      retry: () => openPanel(title, prompt, context)
    })
    
    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, context }),
      })
      const data = await res.json()
      
      if (data.error) {
        setContent({
          title,
          body: data.error || 'Something went wrong connecting to Groq AI.',
          isLoading: false,
          isError: true,
          retry: () => openPanel(title, prompt, context)
        })
      } else {
        setContent({
          title,
          body: data.insight || 'No insight generated.',
          isLoading: false,
          isError: false,
          retry: () => openPanel(title, prompt, context)
        })
      }
    } catch (err: any) {
      setContent({
        title,
        body: `Network connection error: ${err?.message || 'Could not connect to AI backend'}. Please verify your connection or try again.`,
        isLoading: false,
        isError: true,
        retry: () => openPanel(title, prompt, context)
      })
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
    return { 
      isOpen: false, 
      content: null, 
      openPanel: async () => {}, 
      closePanel: () => {} 
    }
  }
  return context
}
