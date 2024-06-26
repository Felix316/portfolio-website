import About from '@/components/about'
import Contact from '@/components/contact'
import { Intro } from '@/components/intro'
import Projects from '@/components/projects'
import SectionDivider from '@/components/section-divider'
import Skills from '@/components/skills'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center px-4'>
    <Intro />  
    <SectionDivider/>
    <About />
    <Projects />
    <Skills />
    <Contact />
    
    </div>
  )
}

export default page