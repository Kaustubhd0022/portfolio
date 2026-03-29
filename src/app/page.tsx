'use client'
import { Hero } from '@/components/sections/Hero';
import { Metrics } from '@/components/sections/Metrics';
import { Experience } from '@/components/sections/Experience';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Projects } from '@/components/sections/Projects';
import { AISystemsLab } from '@/components/sections/AISystemsLab';
import { ProductThinking } from '@/components/sections/ProductThinking';
import { PRDs } from '@/components/sections/PRDs';
import { Education } from '@/components/sections/Education';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <Experience />
      <CaseStudies />
      <ProductThinking />
      <PRDs />
      <AISystemsLab />
      <Projects />
      <Education />
      <About />
      <Contact />
    </>
  );
}
