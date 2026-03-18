'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, Play, Search, MessageSquare, Mic, Sparkles, CheckCircle2, Loader2, ArrowRight, Brain, TrendingUp, Copy, X } from 'lucide-react'

// --- MOCK GENERATORS ---

const randomSelect = <T,>(arr: T[], count: number): T[] => {
  return [...arr].sort(() => 0.5 - Math.random()).slice(0, count);
};

const generateMockPRD = (input: string = '') => {
  const lowerInput = input.toLowerCase();
  
  const genericFeatures = [
    "Frictionless onboarding with progressive profiling",
    "Real-time analytics dashboard with deep linking",
    "Push notification engine with smart timezone scheduling",
    "Role-based Access Control (RBAC) & OAuth 2.0",
    "Offline-first mobile architecture with background sync",
    "Automated data export & reporting pipeline",
    "Contextual help system with localized tooltips",
    "Dark mode & customizable accessibility themes"
  ];

  const genericMetrics = [
    "WADU/MAU ratio > " + (Math.floor(Math.random() * 10) + 20) + "%",
    "Day 30 retention > " + (Math.floor(Math.random() * 15) + 35) + "%",
    "Onboarding completion rate > " + (Math.floor(Math.random() * 15) + 65) + "%",
    "Customer Acquisition Cost (CAC) reduced by " + (Math.floor(Math.random() * 10) + 10) + "%",
    "Net Promoter Score (NPS) > " + (Math.floor(Math.random() * 10) + 40),
    "Average Session Length > " + (Math.floor(Math.random() * 3) + 3) + " mins"
  ];

  let features = randomSelect(genericFeatures, 2);
  let metrics = randomSelect(genericMetrics, 2);
  
  const problemTemplates = [
    `Users struggle with fragmented, legacy tools when dealing with: "${input}". Current solutions are disjointed, require high cognitive load, and lack dynamic intelligence.`,
    `The market lacks a cohesive solution for "${input}". Existing platforms force contextual switching and suffer from poor mobile optimization.`,
    `A significant productivity drain occurs during "${input}" workflows due to manual data entry and lack of centralized truth.`
  ];
  
  const solutionTemplates = [
    `A unified, deeply integrated platform that streamlines the "${input}" workflow. We reduce task completion time by 80% through deliberate UX and predictive defaults.`,
    `An automated ecosystem addressing "${input}" end-to-end. By consolidating the user journey, we eliminate 90% of redundant clicks and enforce best practices.`,
    `A mobile-first, consumer-grade enterprise application that makes "${input}" frictionless, leveraging smart defaults to accelerate onboarding.`
  ];
  
  let problem = randomSelect(problemTemplates, 1)[0];
  let solution = randomSelect(solutionTemplates, 1)[0];
  
  let summary = `This initiative targets a clear blue-ocean gap. By building a high-leverage, consumer-grade experience for a complex workflow, we can secure early traction and strong organic word-of-mouth.`;
  let confidence = "GO - MEDIUM CONFIDENCE (3-week discovery sprint)";

  if (lowerInput.match(/ai|smart|agent|llm|gpt|auto/)) {
    features.push(...randomSelect([
      "Context-aware LLM reasoning engine",
      "Multi-agent orchestration for background tasks",
      "Retrieval-Augmented Generation (RAG) for internal docs",
      "Semantic search with natural language querying"
    ], 2));
    metrics.push("AI task completion rate > 95%", "Hallucination/Error rate < 2%");
    summary = `Integrating generative AI provides a highly defensible moat. We can deliver hyper-personalized workflows at a fraction of the operational cost of incumbents.`;
    confidence = "GO - HIGH CONFIDENCE (Fast-follow AI prototype)";
  }
  
  if (lowerInput.match(/market|buy|sell|b2b|platform|store/)) {
    features.push(...randomSelect([
      "Integrated escrow and trust-based payment gateway",
      "Algorithmic buyer-seller discovery matching",
      "Verified multi-tier vendor profiles",
      "Dynamic pricing engine based on supply/demand"
    ], 2));
    metrics.push("Gross Merchandise Value (GMV) growth > 15% MoM", "Marketplace liquidity ratio > 60%");
    summary = `Success depends on solving the cold-start problem. Aggressive supply-side acquisition is required pre-launch to ensure initial buyer liquidity and establish network effects.`;
    confidence = "GO - DEPENDENT ON SUPPLY ACQUISITION";
  }

  if (lowerInput.match(/social|community|network|share|friend/)) {
    features.push(...randomSelect([
      "Viral invite loops with asynchronous incentives",
      "Rich media activity feeds with threaded discussions",
      "Granular privacy controls & blocklists",
      "Gamified reputation and badging system"
    ], 2));
    metrics.push("K-factor (Viral Coefficient) > 1.2", "Daily Active Users (DAU) > 10,000 in Q1");
    summary = `This concept relies on high engagement velocity. Embedding social proof and viral loops into the core onboarding will be critical to achieving sustainable growth.`;
    confidence = "GO - CAUTIOUS (Requires strong viral loop)";
  }

  return {
    problem,
    solution,
    target_users: "Early adopters, tech-forward professionals, and teams seeking high-leverage workflows.",
    key_features: randomSelect(features, 4),
    success_metrics: randomSelect(metrics, 4),
    roadmap: {
      mvp: "Core utility, single-player mode, and basic tracking.",
      v1: "Multi-player collaboration, analytics, and monetization tier.",
      v2: "API ecosystem, enterprise compliance, and global scale."
    },
    executive_summary: {
      summary,
      recommendation: confidence,
      next_steps: [
        "Finalize technical feasibility audit for core features",
        "Secure " + (Math.floor(Math.random() * 10) + 5) + " early beta commitments for MVP",
        "Initiate design sprint for core interaction models"
      ]
    }
  }
}

const generateStockOutput = () => {
    const stocks = ['AAPL', 'TSLA', 'NVDA', 'MSFT', 'AMZN']
    const stock = stocks[Math.floor(Math.random() * stocks.length)]
    const change = (8 + Math.random() * 10).toFixed(1)
    const sentiment = (7 + Math.random() * 2).toFixed(1)
    return `Bullish thesis for ${stock}.

📊 Market Context:
The stock is currently trading within an upward momentum channel, supported by strong institutional accumulation and sector-wide tailwinds.

📈 Price Target:
Short-term upside potential of +${change}% driven by breakout above key resistance levels.

🧠 Sentiment Analysis:
Overall sentiment score: ${sentiment}/10  
- Positive news coverage and earnings outlook  
- Strong social sentiment with increasing retail interest  
- Analyst upgrades indicating confidence in growth trajectory  

📉 Technical Indicators:
- RSI indicating bullish momentum (above 60, not yet overbought)  
- MACD crossover confirming upward trend  
- Volume spike suggesting strong buying pressure  
- Support holding at key moving averages (50-day / 200-day)

🏗️ Fundamental Signals:
- Revenue growth aligned with sector expansion  
- Strong product/market positioning  
- Improving margins or operational efficiency  

⚠️ Risk Factors:
- Potential short-term correction after rapid run-up  
- Macro volatility (interest rates / global cues)  
- Overbought zone if momentum overheats  

🎯 Investment Thesis:
The convergence of strong technical breakout, positive sentiment, and solid fundamentals suggests a high-probability bullish scenario. Ideal for short-to-mid term positioning with monitored downside risk.`
};

const generateWAOutput = () => {
   const products = ['Nike Air Zoom', 'Apple AirPods Pro', 'Sony WH-1000XM5', 'Adidas Ultraboost', 'Samsung Galaxy Watch']
   const product = products[Math.floor(Math.random() * products.length)]
   const price = (Math.floor(Math.random() * 15) * 1000 + 4999).toLocaleString('en-IN')
   const intents = ['Buy running shoes', 'Looking for wireless earbuds', 'Need over-ear headphones', 'Buy gym shoes', 'Smartwatch for fitness tracking']
   const intent = intents[Math.floor(Math.random() * intents.length)]

   return `user: "I want to ${intent.toLowerCase()}"

🤖 Intent Match: Purchase intent detected -> Category: Electronics/Apparel
🔍 Catalog Search: Querying inventory...
✅ Top Match: ${product}
💰 Price: ₹${price}

🔗 Checkout link generated successfully using Razorpay API integration.
Status: Awaiting user payment.`
};

// --- CORE HOOK ---
const useSimulation = (loadingMessages: string[], generator: (input?: string) => any) => {
  const [isSimulating, setIsSimulating] = useState(false)
  const [loadingStep, setLoadingStep] = useState(0)
  const [result, setResult] = useState<any>(null)
  
  const runSimulation = async (input?: string) => {
    setIsSimulating(true)
    setResult(null)
    for (let i = 0; i < loadingMessages.length; i++) {
        setLoadingStep(i)
        await new Promise(r => setTimeout(r, 600 + Math.random() * 500))
    }
    setResult(generator(input))
    setIsSimulating(false)
  }
  
  return { isSimulating, loadingStep, result, setResult, runSimulation }
}

// --- COMPONENTS ---

const PRDGeneratorCard = ({ system }: { system: any }) => {
  const [ideaInput, setIdeaInput] = useState('')
  const [copied, setCopied] = useState(false)
  const loadingMessages = [
    "Establishing context & intent extraction...",
    "Scanning market adjacencies & competitive landscape...",
    "Synthesizing user pain points into core problems...",
    "Prioritization Agent scoring feature opportunity...",
    "Formulating MVP scope & release milestones...",
    "Drafting Executive Summary & ROI analysis..."
  ]

  const { isSimulating, loadingStep, result: prdResult, setResult: setPrdResult, runSimulation } = useSimulation(loadingMessages, generateMockPRD)

  return (
    <div className="mt-auto space-y-4">
      <input 
        type="text"
        placeholder="Describe your product idea..."
        value={ideaInput}
        onChange={(e) => setIdeaInput(e.target.value)}
        className="w-full px-6 py-4 rounded-2xl bg-black/40 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-accent-purple transition-colors"
      />
      <button
        onClick={() => runSimulation(ideaInput)}
        disabled={isSimulating || !ideaInput}
        className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
          isSimulating || !ideaInput
          ? 'bg-accent-purple/20 text-white/50 cursor-not-allowed' 
          : 'bg-white text-black hover:bg-accent-purple hover:text-white shadow-[0_0_20px_rgba(182,102,210,0.3)]'
        }`}
      >
        {isSimulating ? (
          <>
            <Loader2 size={16} className="animate-spin text-accent-purple" />
            <AnimatePresence mode="wait">
              <motion.span
                key={loadingStep}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="text-accent-purple"
              >
                {loadingMessages[loadingStep]}
              </motion.span>
            </AnimatePresence>
          </>
        ) : (
          <>Run Simulation ⚡</>
        )}
      </button>

      <AnimatePresence>
        {prdResult && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 p-6 rounded-2xl bg-[#0B0F19] border border-white/10 relative"
          >
            <button 
              onClick={() => {
                navigator.clipboard.writeText(JSON.stringify(prdResult, null, 2))
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
              }}
              className="absolute right-12 top-4 flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-accent-purple hover:text-white transition-colors"
            >
              {copied ? <CheckCircle2 size={14} /> : <Copy size={14} />}
              {copied ? 'Copied' : 'Copy PRD'}
            </button>
            <button 
              onClick={() => setPrdResult(null)}
              className="absolute top-3 right-4 text-white/30 hover:text-white"
            >
              <X size={16} />
            </button>
            
            <div className="space-y-6 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar text-sm mt-4">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                <h4 className="font-black text-[10px] uppercase tracking-widest text-accent-orange mb-2">Problem</h4>
                <p className="text-white/80 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">{prdResult.problem}</p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <h4 className="font-black text-[10px] uppercase tracking-widest text-accent-purple mb-2">Solution</h4>
                <p className="text-white/80 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">{prdResult.solution}</p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <h4 className="font-black text-[10px] uppercase tracking-widest text-accent-blue mb-2">Target Users</h4>
                <p className="text-white/80 leading-relaxed">{prdResult.target_users}</p>
              </motion.div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                  <h4 className="font-black text-[10px] uppercase tracking-widest text-accent-orange mb-2">Key Features</h4>
                  <ul className="space-y-2">
                    {prdResult.key_features?.map((f: string, i: number) => (
                      <li key={i} className="flex gap-2 text-white/80 text-xs">
                        <Sparkles size={12} className="text-accent-orange shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                  <h4 className="font-black text-[10px] uppercase tracking-widest text-accent-blue mb-2">Success Metrics</h4>
                  <ul className="space-y-2">
                    {prdResult.success_metrics?.map((m: string, i: number) => (
                      <li key={i} className="flex gap-2 text-white/80 text-xs">
                        <TrendingUp size={12} className="text-accent-blue shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                <h4 className="font-black text-[10px] uppercase tracking-widest text-white mb-2">Release Roadmap</h4>
                <div className="bg-black/50 p-4 rounded-xl border border-white/5 space-y-3">
                    <div className="flex gap-4">
                      <span className="text-accent-purple font-black text-xs uppercase w-8 shrink-0">MVP</span>
                      <span className="text-white/70 text-xs">{prdResult.roadmap?.mvp || prdResult.roadmap}</span>
                    </div>
                    {prdResult.roadmap?.v1 && (
                      <div className="flex gap-4">
                        <span className="text-accent-blue font-black text-xs uppercase w-8 shrink-0">V1.0</span>
                        <span className="text-white/70 text-xs">{prdResult.roadmap.v1}</span>
                      </div>
                    )}
                    {prdResult.roadmap?.v2 && (
                      <div className="flex gap-4">
                        <span className="text-accent-orange font-black text-xs uppercase w-8 shrink-0">V2.0</span>
                        <span className="text-white/70 text-xs">{prdResult.roadmap.v2}</span>
                      </div>
                    )}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                <h4 className="font-black text-[10px] uppercase tracking-widest text-accent-orange bg-accent-orange/10 border border-accent-orange/20 px-3 py-1 rounded-full inline-flex mb-3">Executive Summary</h4>
                <div className="bg-gradient-to-br from-accent-orange/10 to-transparent p-5 rounded-xl border border-accent-orange/20 space-y-4">
                  <p className="text-white font-medium text-sm italic leading-relaxed">"{prdResult.executive_summary?.summary}"</p>
                  
                  <div>
                      <span className="text-xs font-black text-white/50 uppercase tracking-widest block mb-1">Recommendation</span>
                      <span className="text-accent-orange font-bold text-sm bg-accent-orange/10 px-2 py-1 rounded inline-block">
                        {prdResult.executive_summary?.recommendation}
                      </span>
                  </div>

                  <div>
                      <span className="text-xs font-black text-white/50 uppercase tracking-widest block mb-2">Immediate Next Steps</span>
                      <ul className="space-y-1">
                        {prdResult.executive_summary?.next_steps?.map((step: string, i: number) => (
                          <li key={i} className="flex gap-2 text-white/80 text-xs items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-orange shrink-0 mt-1" />
                            {step}
                          </li>
                        ))}
                      </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


const GenericAgentCard = ({ system }: { system: any }) => {
  let generator = () => "Coming Soon";
  let messages = ["Running simulations..."];
  
  if (system.id === 'stock-analyzer') {
    generator = generateStockOutput;
    messages = [
      "Fetching real-time market data...",
      "Analyzing news & social sentiment...",
      "Running technical indicators...",
      "Generating investment thesis..."
    ];
  } else if (system.id === 'wa-commerce') {
    generator = generateWAOutput;
    messages = [
      "Understanding user intent...",
      "Querying product catalog...",
      "Matching availability and pricing...",
      "Generating secure checkout link..."
    ];
  }

  const { isSimulating, loadingStep, result, setResult, runSimulation } = useSimulation(messages, generator)

  return (
    <>
      <div className="mt-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        {system.simulated ? (
          <button
            onClick={() => runSimulation()}
            disabled={isSimulating}
            className={`flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
              isSimulating 
              ? `bg-${system.color}/20 text-white/50 cursor-not-allowed` 
              : `bg-white text-black hover:bg-${system.color} hover:text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] group`
            }`}
          >
            {isSimulating ? (
              <>
                <Loader2 size={16} className={`animate-spin text-${system.color}`} />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={loadingStep}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className={`text-${system.color}`}
                  >
                    {messages[loadingStep]}
                  </motion.span>
                </AnimatePresence>
              </>
            ) : (
              <>
                <Play size={16} fill="currentColor" />
                Run Simulation ⚡
              </>
            )}
          </button>
        ) : (
          <span className="text-[10px] font-black uppercase tracking-widest text-secondary flex items-center gap-2">
             Case Study Coming Soon
          </span>
        )}

        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`flex items-center gap-2 text-accent-orange font-bold text-xs shrink-0`}
            >
              <CheckCircle2 size={16} />
              Simulation Complete
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`mt-6 p-6 rounded-2xl bg-${system.color}/5 border border-${system.color}/20 relative shadow-[0_0_30px_rgba(255,255,255,0.02)] backdrop-blur-xl`}
          >
            <button 
              onClick={() => setResult(null)}
              className="absolute top-4 right-4 text-secondary hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
            <p className={`text-${system.color} font-black text-[10px] uppercase tracking-widest mb-4 flex items-center gap-2`}>
              <Brain size={14} /> Agent Output
            </p>
            
            <div className="space-y-4 text-sm max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              <TypewriterText text={result} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// --- UTILS ---

const TypewriterText = ({ text }: { text: string }) => {
  // Simple fade-in staggered rows instead of character typewriter for readability
  return (
    <div className="space-y-4">
      {text.split('\n\n').map((paragraph, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="text-white/80 leading-relaxed whitespace-pre-wrap"
        >
          {paragraph}
        </motion.p>
      ))}
    </div>
  )
}

// --- MAIN PORTFOLIO COMPONENT ---

const systems = [
  {
    id: 'prd-gen',
    title: 'Idea → PRD Generator',
    description: 'Transforming vague product ideas into structured PRDs using multi-agent strategic reasoning.',
    steps: ['Extract Intent', 'Market Sizing', 'Comp. Analysis', 'PRD Draft'],
    tags: ['Strategy', 'LLM', 'Automation'],
    simulated: true,
    color: 'accent-purple'
  },
  {
    id: 'stock-analyzer',
    title: 'Multi-Agent Stock Analyst',
    description: 'Autonomous financial agents collaborating to build investment theses from real-time data.',
    steps: ['Data Fetch', 'Sentiment', 'Technical', 'Thesis'],
    tags: ['Finance', 'Multi-Agent', 'Real-time'],
    simulated: true,
    color: 'accent-orange'
  },
  {
    id: 'wa-commerce',
    title: 'WhatsApp Commerce Agent',
    description: 'End-to-end sales automation from chat intent to final payment link generation.',
    steps: ['Intent Match', 'Catalog Search', 'Payment Link'],
    tags: ['Sales', 'WhatsApp', 'Commerce'],
    simulated: false,
    color: 'accent-orange'
  },
  {
    id: 'voice-research',
    title: 'AI Voice Research Agent',
    description: 'Analyzing user audio interviews to extract actionable product insights and feature requests.',
    steps: ['Audio NLP', 'Insight Extraction', 'Feature Recs'],
    tags: ['Voice AI', 'NLP', 'Flipkart'],
    simulated: false,
    color: 'accent-blue'
  }
]

export const AISystemsLab = () => {
  return (
    <section id="ai-lab" className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 text-accent-purple text-[10px] font-bold tracking-widest uppercase mb-4">
          <Cpu size={12} />
          AI Innovation Hub
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-white">
          AI Systems <span className="text-accent-purple">Lab</span>
        </h2>
        <p className="text-secondary text-lg max-w-2xl">
          A sandbox for multi-agent systems, where I architect autonomous flows to solve complex product problems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {systems.map((system, index) => (
          <motion.div
            key={system.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden flex flex-col group hover:border-white/20 transition-all duration-500"
          >
            {/* Background Glow */}
            <div className={`absolute -right-20 -top-20 w-64 h-64 bg-${system.color}/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />

            <div className="flex items-start justify-between mb-8">
              <div className={`w-14 h-14 rounded-2xl bg-${system.color}/10 flex items-center justify-center text-${system.color}`}>
                {system.id === 'prd-gen' && <Sparkles size={28} />}
                {system.id === 'stock-analyzer' && <TrendingUp size={28} />}
                {system.id === 'voice-research' && <Mic size={28} />}
                {system.id === 'wa-commerce' && <MessageSquare size={28} />}
              </div>
              <div className="flex flex-wrap gap-2 justify-end">
                {system.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest bg-white/5 text-secondary border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="text-3xl font-black text-white mb-4">{system.title}</h3>
            <p className="text-secondary text-base mb-8 leading-relaxed">
              {system.description}
            </p>

            {/* Pipeline Visualization */}
            <div className="space-y-4 mb-10">
               <div className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-purple mb-4">Pipeline Workflow</div>
               <div className="flex flex-wrap items-center gap-3">
                  {system.steps.map((step, i) => (
                    <React.Fragment key={step}>
                      <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-medium text-white/70">
                        {step}
                      </div>
                      {i < system.steps.length - 1 && <ArrowRight size={12} className="text-white/20 shrink-0" />}
                    </React.Fragment>
                  ))}
               </div>
            </div>

            {system.id === 'prd-gen' ? (
               <PRDGeneratorCard system={system} />
            ) : (
               <GenericAgentCard system={system} />
            )}
            
          </motion.div>
        ))}

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 0.5, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-10 rounded-[2.5rem] border border-dashed border-white/10 flex flex-col items-center justify-center text-center gap-4 group hover:opacity-100 transition-opacity duration-500"
        >
           <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white/30 group-hover:text-accent-purple transition-colors">
              <Brain size={32} />
           </div>
           <div>
              <h3 className="text-2xl font-black text-white/50 mb-2">Autonomous Growth Agent</h3>
              <p className="text-secondary text-sm">Self-optimizing marketing loops & conversion funnels.</p>
           </div>
           <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] font-black uppercase tracking-widest text-secondary">
              Experimental Phase
           </div>
        </motion.div>
      </div>
    </section>
  )
}
