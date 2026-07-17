import React from 'react'
import { motion } from 'framer-motion'
import CountUp from './motion/CountUp'

export type SkillPillProps = {
  name: string
  level: number
}

const SkillPill: React.FC<SkillPillProps> = ({ name, level }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 22, scale: 0.94 },
      visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 240, damping: 20 } },
    }}
    whileHover={{ y: -6, scale: 1.04 }}
    transition={{ type: 'spring', stiffness: 320, damping: 18 }}
    className="flex flex-col items-center space-y-2 p-3 rounded-2xl shadow-sm backdrop-blur bg-black/[.05] border border-black/10 dark:bg-white/5 dark:border-white/5 hover:border-cyan-400/40 dark:hover:border-cyan-400/40 hover:shadow-[0_8px_30px_rgba(34,211,238,0.15)] transition-colors cursor-default"
  >
    <div className="text-sm font-medium">{name}</div>
    <div className="w-24 h-4 rounded-full overflow-hidden bg-black/10 dark:bg-white/6">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.21, 0.65, 0.25, 1], delay: 0.15 }}
        className="relative h-full overflow-hidden bg-gradient-to-r from-cyan-400 to-indigo-500"
      >
        <span className="bar-shimmer absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </motion.div>
    </div>
    <div className="text-[11px] text-gray-500 dark:text-white/60 tabular-nums">
      <CountUp to={level} suffix="%" duration={1.1} delay={0.15} />
    </div>
  </motion.div>
)

export default SkillPill
