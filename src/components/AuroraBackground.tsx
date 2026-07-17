import React, { useEffect, useMemo } from 'react'
import { motion, useMotionValue, useSpring, useMotionTemplate, useReducedMotion } from 'framer-motion'

type Star = { left: number; top: number; size: number; delay: number; duration: number }

/** Deterministic PRNG so the starfield is stable across re-renders. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/**
 * Full-viewport ambient backdrop: slow-drifting aurora blobs, a faint
 * engineering grid, a twinkling starfield (dark mode) and a spotlight that
 * follows the cursor. Everything is transform/opacity based and sits on a
 * fixed layer behind the content.
 */
const AuroraBackground: React.FC = () => {
  const reduce = useReducedMotion()

  const mx = useMotionValue(-600)
  const my = useMotionValue(-600)
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.8 })
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.8 })
  const spotlight = useMotionTemplate`radial-gradient(560px circle at ${sx}px ${sy}px, var(--spotlight-color), transparent 70%)`

  useEffect(() => {
    if (reduce) return
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my, reduce])

  const stars = useMemo<Star[]>(() => {
    const rand = mulberry32(21)
    return Array.from({ length: 56 }, () => ({
      left: rand() * 100,
      top: rand() * 100,
      size: 1 + rand() * 1.8,
      delay: rand() * 6,
      duration: 2.4 + rand() * 4,
    }))
  }, [])

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base wash */}
      <div className="absolute inset-0 bg-white dark:bg-[#05060b] transition-colors duration-700" />

      {/* Aurora blobs — pure transform keyframes, GPU friendly */}
      <div className="aurora-blob absolute -top-[20%] -left-[10%] w-[55vw] h-[55vw] rounded-full blur-[110px] opacity-[0.13] dark:opacity-[0.17] bg-cyan-400" style={{ animationDuration: '26s' }} />
      <div className="aurora-blob aurora-blob-2 absolute top-[25%] -right-[15%] w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-[0.11] dark:opacity-[0.15] bg-indigo-500" style={{ animationDuration: '32s' }} />
      <div className="aurora-blob aurora-blob-3 absolute -bottom-[25%] left-[20%] w-[45vw] h-[45vw] rounded-full blur-[130px] opacity-[0.08] dark:opacity-[0.12] bg-fuchsia-500" style={{ animationDuration: '38s' }} />

      {/* Engineering grid, fading out toward the bottom */}
      <div
        className="absolute inset-0 opacity-[0.5] dark:opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--grid-color) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 90% 65% at 50% 0%, black 35%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 65% at 50% 0%, black 35%, transparent 100%)',
        }}
      />

      {/* Starfield — dark mode only */}
      <div className="absolute inset-0 hidden dark:block">
        {stars.map((s, i) => (
          <span
            key={i}
            className="star absolute rounded-full bg-white"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size,
              height: s.size,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Cursor spotlight */}
      {!reduce && (
        <motion.div className="absolute inset-0 hidden md:block" style={{ background: spotlight }} />
      )}
    </div>
  )
}

export default AuroraBackground
