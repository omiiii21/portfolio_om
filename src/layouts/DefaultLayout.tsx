import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion'
import ThemeToggle from '../components/ThemeToggle'
import Ticker from '../components/Ticker'
import { Menu, Close, Github, Linkedin } from '../components/icons'
import { profile } from '../data/profile'

const NAV_LINKS = [
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#research', label: 'Research' },
  { href: '#about', label: 'About' },
] as const

/** Tracks which section currently sits in the middle band of the viewport. */
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

const LogoMark: React.FC = () => (
  <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true" className="rounded-lg">
    <rect width="64" height="64" rx="14" className="fill-ink" />
    <path
      d="M14 44 26 20l6 12 6-12 12 24"
      fill="none"
      className="stroke-canvas"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

type DefaultLayoutProps = {
  children: React.ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress, scrollY } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })
  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24))

  const active = useActiveSection(['experience', 'work', 'research', 'about', 'contact'])

  return (
    <div className="relative min-h-screen bg-canvas text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:font-medium focus:text-on-accent"
      >
        Skip to content
      </a>

      {/* Decorative graph-paper backdrop */}
      <div className="bg-grid pointer-events-none fixed inset-0" aria-hidden="true" />

      {/* Reading progress */}
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-accent"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'border-b border-line bg-canvas/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-6">
          <a href="#main" className="group flex items-center gap-3" aria-label="Om Mengshetti — back to top">
            <LogoMark />
            <span className="leading-tight">
              <span className="block text-sm font-semibold tracking-tight">Om Mengshetti</span>
              <span className="block font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                Quant Engineer
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-md px-3 py-2 text-sm transition-colors hover:text-ink ${
                  active === link.href ? 'text-ink' : 'text-muted'
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent"
                  />
                )}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 inline-flex h-10 items-center rounded-lg bg-accent px-4 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90"
            >
              Let's talk
            </a>
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </nav>

          <MobileNav />
        </div>
        {/* Collapses once the reader scrolls — no permanent motion next to body text */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
          }`}
        >
          <Ticker />
        </div>
      </header>

      <main id="main" className="relative mx-auto max-w-6xl px-5 md:px-6">
        {children}
      </main>

      <footer className="relative border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 font-mono text-[11px] tracking-wider text-muted uppercase sm:flex-row md:px-6">
          <span>© {new Date().getFullYear()} Om Mengshetti</span>
          <span className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:text-ink"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:text-ink"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </span>
          <span>React · TypeScript · Tailwind</span>
        </div>
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
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink transition-colors hover:border-line-strong"
        >
          {open ? <Close size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              aria-label="Close menu"
              className="fixed inset-0 z-40 bg-black/40"
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
              aria-label="Navigation menu"
              className="absolute inset-x-4 top-full z-50 mt-2 overflow-hidden rounded-xl border border-line bg-panel shadow-2xl"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            >
              <nav className="p-3" aria-label="Mobile" onClick={() => setOpen(false)}>
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-4 py-3 text-sm text-ink transition-colors hover:bg-panel-2"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-2 block rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-on-accent"
                >
                  Let's talk
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
