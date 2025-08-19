import React, { useState } from 'react'
import ThemeToggle from '../components/ThemeToggle'
import { AnimatePresence, motion } from 'framer-motion'
import Starfield from '../components/Starfield'

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
      <div className="min-h-screen relative overflow-hidden font-sans bg-white text-gray-900 dark:bg-[#05060b] dark:text-white transition-colors duration-700 ease-in-out">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-2 focus:rounded focus:bg-indigo-600 focus:text-white">Skip to content</a>
      <WaveBackground />
      <Starfield />

      <div className="relative z-10">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center font-bold text-black">OM</div>
          <div>
            <div className="text-sm font-medium">Om Mengshetti</div>
            <div className="text-[12px] text-gray-500 dark:text-white/60">Quant • Data • Systems</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-4" aria-label="Primary">
          <a className="text-sm px-3 py-1 rounded-md hover:bg-black/5 dark:hover:bg-white/4 transition" href="#projects">Work</a>
          <a className="text-sm px-3 py-1 rounded-md hover:bg-black/5 dark:hover:bg-white/4 transition" href="#skills">Skills</a>
          <a className="text-sm px-3 py-1 rounded-md hover:bg-black/5 dark:hover:bg-white/4 transition" href="#about">About</a>
          <a className="text-sm px-3 py-1 rounded-md bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-medium" href="#contact">Contact</a>
          <ThemeToggle />
        </nav>
        <MobileNav />
      </header>

      <main id="main" className="max-w-6xl mx-auto px-6 py-12">
        {children}
      </main>

        <footer className="py-8 border-t border-gray-200 text-gray-600 dark:border-white/6 dark:text-white/60 text-sm text-center transition-colors duration-700 ease-in-out">© {new Date().getFullYear()} Om Mengshetti — Built with React, Tailwind & Framer Motion</footer>
      </div>
    </div>
  )
}

export default DefaultLayout

const MobileNav: React.FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="md:hidden">
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800 dark:text-white">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              aria-label="Close menu"
              className="fixed inset-0 z-40 bg-black/30 dark:bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              className="fixed z-50 top-0 right-0 left-0 mt-[64px] mx-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0b0e1a] shadow-xl"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="p-3" onClick={() => setOpen(false)}>
                <a className="block px-3 py-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10" href="#projects">Work</a>
                <a className="block px-3 py-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10" href="#skills">Skills</a>
                <a className="block px-3 py-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10" href="#about">About</a>
                <a className="block px-3 py-2 rounded-md bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-medium" href="#contact">Contact</a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}


