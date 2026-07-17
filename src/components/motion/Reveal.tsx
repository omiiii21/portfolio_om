import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type RevealProps = {
  children: React.ReactNode
  /** Slide-in direction */
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  delay?: number
  duration?: number
  /** Extra distance in px */
  distance?: number
  className?: string
  once?: boolean
}

/**
 * Scroll-triggered reveal: fades in with a directional slide and a blur
 * that sharpens as the element lands. Falls back to a plain fade when the
 * user prefers reduced motion.
 */
const Reveal: React.FC<RevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  distance = 28,
  className,
  once = true,
}) => {
  const reduce = useReducedMotion()

  const offset = reduce
    ? { x: 0, y: 0 }
    : {
        x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
        y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset, filter: reduce ? 'none' : 'blur(6px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration, delay, ease: [0.21, 0.65, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
