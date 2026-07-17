import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type RevealProps = {
  children: React.ReactNode
  delay?: number
  className?: string
}

/** Scroll-triggered fade-up. Plain fade under reduced motion. */
const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className }) => {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-48px' }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.65, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
