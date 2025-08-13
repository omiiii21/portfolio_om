import React from 'react'
import { motion } from 'framer-motion'

export type SkillPillProps = {
  name: string
  level: number
}

const SkillPill: React.FC<SkillPillProps> = ({ name, level }) => (
  <div className="flex flex-col items-center space-y-2 p-3 rounded-2xl shadow-sm backdrop-blur bg-black/[.05] border border-black/10 dark:bg-white/5 dark:border-white/5">
    <div className="text-sm font-medium">{name}</div>
    <div className="w-24 h-4 rounded-full overflow-hidden bg-black/10 dark:bg-white/6">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500"
      />
    </div>
    <div className="text-[11px] text-white/60">{level}%</div>
  </div>
)

export default SkillPill


