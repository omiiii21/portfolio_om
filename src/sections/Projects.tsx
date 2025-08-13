import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import type { Project } from '../types/portfolio'

type ProjectsProps = {
  projects: Project[]
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="mt-14" aria-labelledby="projects-heading">
      <motion.h2 id="projects-heading" initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="text-2xl font-semibold">
        Selected Projects
      </motion.h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  )
}

export default Projects


