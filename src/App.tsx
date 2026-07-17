import './index.css'
import DefaultLayout from './layouts/DefaultLayout'
import Hero from './sections/Hero'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Research from './sections/Research'
import Recommendations from './sections/Recommendations'
import About from './sections/About'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <DefaultLayout>
      <Analytics />
      <Hero />
      <Experience />
      <Projects />
      <Research />
      <Recommendations />
      <About />
      <Skills />
      <Contact />
    </DefaultLayout>
  )
}

export default App
