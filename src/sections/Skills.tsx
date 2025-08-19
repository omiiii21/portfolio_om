import React from 'react'
import { motion } from 'framer-motion'
import SkillPill from '../components/SkillPill'
import type { Skill } from '../types/portfolio'

type SkillsProps = { skills: Skill[] }

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="mt-34" aria-labelledby="skills-heading">
      <motion.h2 id="skills-heading" initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="text-2xl font-semibold">
        Skills & Tech Stack
      </motion.h2>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((s) => (
          <SkillPill key={s.name} name={s.name} level={s.level} />
        ))}
      </div>
    </section>
  )
}

export default Skills


