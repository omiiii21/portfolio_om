import './index.css';
import DefaultLayout from './layouts/DefaultLayout';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import ResearchPapers from './sections/ResearchPapers';
import { projects } from './data/projects'
import { skills } from './data/skills'
import About from './sections/About';
import Contact from './sections/Contact';
import { Analytics } from '@vercel/analytics/react'

function App() {
  // consuming typed data from src/data

  return (
    <DefaultLayout>
      <Analytics />
      <Hero />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <ResearchPapers />
      <About />
      <Contact />
    </DefaultLayout>
  )
}

export default App;