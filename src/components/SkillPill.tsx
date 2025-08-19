import React from 'react'
import { useIdle } from '../context/IdleContext'
import { motion } from 'framer-motion'

export type SkillPillProps = {
  name: string
  level: number
}

const SkillPill: React.FC<SkillPillProps> = ({ name, level }) => {
  const { isIdle } = useIdle()
  const lightBg = isIdle ? 'bg-gray-100' : 'bg-black/[.05]'
  const darkBg = isIdle ? 'dark:bg-[#0f1324]' : 'dark:bg-white/5'
  const trackDark = isIdle ? 'dark:bg-[#141a33]' : 'dark:bg-white/6'
  return (
    <div className={`flex flex-col items-center space-y-2 p-3 rounded-2xl shadow-sm ${lightBg} border border-black/10 ${darkBg} dark:border-white/5`}>
      <div className="text-sm font-medium">{name}</div>
      <div className={`w-24 h-4 rounded-full overflow-hidden bg-gray-200 ${trackDark}`}>
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
}

export default SkillPill


