import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import AnimatedHeading from '../components/motion/AnimatedHeading'
import type { Project } from '../types/portfolio'

type ProjectsProps = {
  projects: Project[]
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="mt-20" aria-labelledby="projects-heading">
      <AnimatedHeading kicker="01 — Work" id="projects-heading">
        Selected Projects
      </AnimatedHeading>
      <motion.div
        className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ visible: { transition: { staggerChildren: 0.14 } }, hidden: {} }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </motion.div>
    </section>
  )
}

export default Projects
