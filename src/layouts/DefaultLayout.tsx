import React, { useEffect, useState } from 'react'
import ThemeToggle from '../components/ThemeToggle'
import AuroraBackground from '../components/AuroraBackground'
import ScrollProgress from '../components/motion/ScrollProgress'
import Magnetic from '../components/motion/Magnetic'
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion'

const NAV_LINKS = [
  { href: '#projects', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
] as const

/** Tracks which section is currently in the middle band of the viewport. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }
      },
      { rootMargin: '-35% 0px -55% 0px' },
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(',')])

  return active
}

type DefaultLayoutProps = {
  children: React.ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24))

  const active = useActiveSection(['projects', 'skills', 'about', 'contact'])

  return (
    <div className="min-h-screen relative font-sans bg-transparent text-gray-900 dark:text-white transition-colors duration-700 ease-in-out">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-2 focus:rounded focus:bg-indigo-600 focus:text-white">Skip to content</a>
      <ScrollProgress />
      <AuroraBackground />

      <motion.header
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.21, 0.65, 0.25, 1] }}
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-xl bg-white/70 dark:bg-[#05060b]/70 border-b border-black/[.06] dark:border-white/[.06] shadow-[0_8px_30px_rgba(0,0,0,0.04)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#main" className="flex items-center gap-3 group" aria-label="Back to top">
            <motion.div
              whileHover={{ rotate: -8, scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 320, damping: 14 }}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center font-bold text-black shadow-lg shadow-indigo-500/25"
            >
              OM
            </motion.div>
            <div>
              <div className="text-sm font-medium">Om Mengshetti</div>
              <div className="text-[12px] text-gray-500 dark:text-white/60">Quant • Data • Systems</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                className="relative text-sm px-3 py-1.5 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition"
                href={link.href}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-x-2 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"
                  />
                )}
              </a>
            ))}
            <Magnetic strength={0.25} className="ml-2">
              <a
                className="shine inline-block text-sm px-4 py-1.5 rounded-md bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-medium shadow-md shadow-indigo-500/25"
                href="#contact"
              >
                Contact
              </a>
            </Magnetic>
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </nav>
          <MobileNav />
        </div>
      </motion.header>

      <main id="main" className="max-w-6xl mx-auto px-6 py-12">
        {children}
      </main>

      <footer className="py-8 border-t border-gray-200 dark:border-white/[.06] text-sm text-center transition-colors duration-700 ease-in-out">
        <span className="text-gray-600 dark:text-white/60">
          © {new Date().getFullYear()} Om Mengshetti — Built with{' '}
          <span className="gradient-text font-medium">React, Tailwind & Framer Motion</span>
        </span>
      </footer>
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
              className="fixed z-50 top-0 right-0 left-0 mt-[64px] mx-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0b0e1a] shadow-xl overflow-hidden"
              initial={{ y: -16, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -16, opacity: 0, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            >
              <motion.nav
                className="p-3"
                onClick={() => setOpen(false)}
                initial="closed"
                animate="open"
                variants={{ open: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } }, closed: {} }}
              >
                {[...NAV_LINKS, { href: '#contact', label: 'Contact' }].map((link) => (
                  <motion.a
                    key={link.href}
                    variants={{ closed: { opacity: 0, x: 16 }, open: { opacity: 1, x: 0 } }}
                    className={
                      link.href === '#contact'
                        ? 'block px-3 py-2 mt-1 rounded-md bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-medium'
                        : 'block px-3 py-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10'
                    }
                    href={link.href}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
