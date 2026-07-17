import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, useReducedMotion } from 'framer-motion'

type TiltCardProps = {
  children: React.ReactNode
  className?: string
  /** Max tilt angle in degrees */
  maxTilt?: number
}

/**
 * 3D perspective tilt card with a cursor-tracking glare highlight.
 * Pointer-only; inert for touch and reduced-motion users.
 */
const TiltCard: React.FC<TiltCardProps> = ({ children, className, maxTilt = 9 }) => {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  // Cursor position normalised to [-0.5, 0.5]
  const px = useMotionValue(0)
  const py = useMotionValue(0)

  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [maxTilt, -maxTilt]), { stiffness: 260, damping: 20 })
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-maxTilt, maxTilt]), { stiffness: 260, damping: 20 })

  const glareX = useTransform(px, [-0.5, 0.5], [0, 100])
  const glareY = useTransform(py, [-0.5, 0.5], [0, 100])
  const glare = useMotionTemplate`radial-gradient(380px circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.14), transparent 65%)`

  const onMouseMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width - 0.5)
    py.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const onMouseLeave = () => {
    px.set(0)
    py.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX: reduce ? 0 : rotateX, rotateY: reduce ? 0 : rotateY, transformStyle: 'preserve-3d', perspective: 900 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: glare }}
      />
    </motion.div>
  )
}

export default TiltCard
