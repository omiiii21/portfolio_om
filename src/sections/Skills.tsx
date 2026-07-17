import React from 'react'
import { motion } from 'framer-motion'
import SkillPill from '../components/SkillPill'
import AnimatedHeading from '../components/motion/AnimatedHeading'
import type { Skill } from '../types/portfolio'

type SkillsProps = { skills: Skill[] }

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="mt-20" aria-labelledby="skills-heading">
      <AnimatedHeading kicker="02 — Toolbox" id="skills-heading">
        Skills &amp; Tech Stack
      </AnimatedHeading>
      <motion.div
        className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ visible: { transition: { staggerChildren: 0.07 } }, hidden: {} }}
      >
        {skills.map((s) => (
          <SkillPill key={s.name} name={s.name} level={s.level} />
        ))}
      </motion.div>
    </section>
  )
}

export default Skills
