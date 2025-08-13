import React from 'react'
import ThemeToggle from '../components/ThemeToggle'

const WaveBackground: React.FC = () => (
  <svg className="absolute inset-0 w-full h-full -z-10 hidden dark:block" preserveAspectRatio="none" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g1" x1="0" x2="1">
        <stop offset="0%" stopColor="#0f172a" />
        <stop offset="100%" stopColor="#070617" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g1)" />
    <g opacity="0.06">
      <path d="M0,200 C360,80 1080,320 1440,200 L1440,400 L0,400 Z" fill="#7c3aed" />
    </g>
  </svg>
)

type DefaultLayoutProps = {
  children: React.ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-hidden font-sans bg-white text-gray-900 dark:bg-[#05060b] dark:text-white">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-2 focus:rounded focus:bg-indigo-600 focus:text-white">Skip to content</a>
      <WaveBackground />

      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center font-bold text-black">OM</div>
          <div>
            <div className="text-sm font-medium">Om Mengshetti</div>
            <div className="text-[12px] text-gray-500 dark:text-white/60">Quant • Data • Systems</div>
          </div>
        </div>
        <nav className="flex items-center gap-4" aria-label="Primary">
          <a className="text-sm px-3 py-1 rounded-md hover:bg-black/5 dark:hover:bg-white/4 transition" href="#projects">Work</a>
          <a className="text-sm px-3 py-1 rounded-md hover:bg-black/5 dark:hover:bg-white/4 transition" href="#skills">Skills</a>
          <a className="text-sm px-3 py-1 rounded-md hover:bg-black/5 dark:hover:bg-white/4 transition" href="#about">About</a>
          <a className="text-sm px-3 py-1 rounded-md bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-medium" href="#contact">Contact</a>
          <ThemeToggle />
        </nav>
      </header>

      <main id="main" className="max-w-6xl mx-auto px-6 py-12">
        {children}
      </main>

      <footer className="py-8 border-t border-gray-200 text-gray-600 dark:border-white/6 dark:text-white/60 text-sm text-center">© {new Date().getFullYear()} Om Mengshetti — Built with React, Tailwind & Framer Motion</footer>
    </div>
  )
}

export default DefaultLayout


