import React, { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion, animate } from 'framer-motion'

type CountUpProps = {
  to: number
  prefix?: string
  suffix?: string
  duration?: number
  delay?: number
  className?: string
}

/** Counts from 0 to `to` with an ease-out curve once scrolled into view. */
const CountUp: React.FC<CountUpProps> = ({ to, prefix = '', suffix = '', duration = 1.6, delay = 0, className }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setValue(to)
      return
    }
    const controls = animate(0, to, {
      duration,
      delay,
      ease: [0.16, 0.78, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to, duration, delay, reduce])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  )
}

export default CountUp
