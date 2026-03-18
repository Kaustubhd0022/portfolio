'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen, Cpu, Database, Rocket, Globe } from 'lucide-react'

const certifications = [
  {
    title: 'Product Management Fellowship',
    issuer: 'NextLeap',
    icon: <Rocket size={20} className="text-accent-orange" />
  },
  {
    title: 'Generative AI for Product Managers',
    issuer: 'DeepLearning.AI / Maven',
    icon: <Cpu size={20} className="text-accent-purple" />
  },
  {
    title: 'Product Launches Certification (PRLC)',
    issuer: 'Product School',
    icon: <Globe size={20} className="text-accent-blue" />
  },
  {
    title: 'Microsoft SQL Server Architect',
    issuer: 'Microsoft',
    icon: <Database size={20} className="text-secondary" />
  }
]

export const Education = () => {
  return (
    <section id="education" className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-orange/10 text-accent-orange text-[10px] font-bold tracking-widest uppercase mb-4">
          <GraduationCap size={12} />
          Academic & Professional
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-white">
          Structured <span className="text-accent-orange">Credibility</span>
        </h2>
        <p className="text-secondary text-lg max-w-2xl">
          Academic foundation in engineering combined with high-impact product certifications.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Education Highlight Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:w-1/3"
        >
          <div className="glass-card h-full p-10 rounded-[2.5rem] border border-white/5 bg-[#0B0F19]/50 backdrop-blur-xl group hover:border-accent-orange/20 transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-accent-orange/10 flex items-center justify-center text-accent-orange mb-8 group-hover:scale-110 transition-transform">
              <GraduationCap size={32} />
            </div>
            
            <h3 className="text-sm font-black uppercase tracking-widest text-secondary mb-2">Education</h3>
            <h4 className="text-3xl font-black text-white mb-4 leading-tight">B.Tech Mechanical Engineering</h4>
            <p className="text-secondary text-lg font-medium mb-1">PVPIT Budhgaon, Sangli</p>
            <p className="text-accent-orange text-sm font-bold uppercase tracking-widest">2018 — 2021</p>
            
            <div className="mt-12 pt-12 border-t border-white/5 space-y-6">
               <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-accent-orange shrink-0 mt-1">
                     <BookOpen size={14} />
                  </div>
                  <p className="text-secondary text-sm">Focused on analytical problem solving and systems engineering.</p>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all group shadow-xl"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all shrink-0">
                  {cert.icon}
                </div>
                <div>
                  <h5 className="text-lg font-black text-white mb-1 group-hover:text-accent-orange transition-colors">
                    {cert.title}
                  </h5>
                  <p className="text-secondary text-xs font-bold uppercase tracking-widest">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Decorative Stat / Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="md:col-span-2 p-8 rounded-3xl bg-accent-orange/5 border border-dashed border-accent-orange/20 flex items-center justify-center gap-6"
          >
             <Award className="text-accent-orange" size={24} />
             <p className="text-secondary text-sm font-medium">
               Committed to continuous learning in <span className="text-white font-bold">AI Product Management</span> and <span className="text-white font-bold">Technical Strategy</span>.
             </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
