import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

/** Thin gradient bar pinned to the top of the viewport tracking page scroll. */
const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"
      style={{ scaleX }}
    />
  )
}

export default ScrollProgress
