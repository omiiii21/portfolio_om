import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

type MagneticProps = {
  children: React.ReactNode
  /** How strongly the element is pulled toward the cursor (0–1) */
  strength?: number
  className?: string
}

/**
 * Wrapper that makes its child gently follow the cursor while hovered and
 * spring back on leave. Disabled for touch / reduced-motion users.
 */
const Magnetic: React.FC<MagneticProps> = ({ children, strength = 0.35, className }) => {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.6 })

  const onMouseMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength)
  }

  const onMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className ?? ''}`}
      style={{ x: sx, y: sy }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.div>
  )
}

export default Magnetic
