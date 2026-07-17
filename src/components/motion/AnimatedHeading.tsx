import React from 'react'
import { motion } from 'framer-motion'

type AnimatedHeadingProps = {
  /** Small uppercase label above the heading, e.g. "01 — Work" */
  kicker?: string
  children: React.ReactNode
  id?: string
  className?: string
}

/**
 * Section heading with a kicker label, character-staggered title and a
 * gradient underline that draws itself when scrolled into view.
 */
const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ kicker, children, id, className }) => {
  return (
    <div className={className}>
      {kicker && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-[11px] font-semibold tracking-[0.25em] uppercase text-cyan-600 dark:text-cyan-400"
        >
          {kicker}
        </motion.div>
      )}
      <motion.h2
        id={id}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay: 0.08, ease: [0.21, 0.65, 0.25, 1] }}
        className="mt-1 text-2xl md:text-3xl font-bold tracking-tight"
      >
        {children}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.21, 0.65, 0.25, 1] }}
        className="mt-3 h-[3px] w-16 origin-left rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"
      />
    </div>
  )
}

export default AnimatedHeading
