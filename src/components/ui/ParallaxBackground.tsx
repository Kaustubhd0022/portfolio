'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export const ParallaxBackground = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // 3 Layers of Motion
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const midY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  // Foreground is the children, which move at 100% speed naturally.

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-[#0B0F19]">
      {/* Background Layer (Layer 1) - Subtle Gradients */}
      <motion.div 
        style={{ y: bgY }}
        className="fixed inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-blue/20 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-[35%] h-[35%] rounded-full bg-accent-purple/20 blur-[100px]" />
        <div className="absolute top-[40%] right-[10%] w-[25%] h-[25%] rounded-full bg-accent-orange/10 blur-[80px]" />
      </motion.div>

      {/* Mid Layer (Layer 2) - Floating Blurred Shapes */}
      <motion.div 
        style={{ y: midY }}
        className="fixed inset-0 z-[1] pointer-events-none"
      >
        {/* Floating Blobs */}
        <div className="absolute top-[15%] right-[20%] w-32 h-32 rounded-full border border-white/5 backdrop-blur-[2px] bg-white/5 animate-pulse" />
        <div className="absolute top-[60%] left-[10%] w-48 h-48 rounded-full border border-white/5 backdrop-blur-[2px] bg-white/5" />
        <div className="absolute bottom-[10%] right-[30%] w-24 h-24 rounded-full border border-white/5 backdrop-blur-[1px] bg-white/5" />
        
        {/* Decorative Grid or Dots */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
      </motion.div>

      {/* Foreground Layer (Layer 3) - Main Content */}
      <div className="relative z-[2]">
        {children}
      </div>
    </div>
  )
}
