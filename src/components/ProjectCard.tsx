import React from 'react'
import { motion } from 'framer-motion'
import type { Project } from '../types/portfolio'

export type ProjectCardProps = { p: Project }

const ProjectCard: React.FC<ProjectCardProps> = ({ p }) => (
  <motion.a
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.99 }}
    className="group block rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-transform duration-200 bg-gradient-to-br from-black/[.03] to-black/[.05] border border-black/10 dark:from-white/3 dark:to-white/2 dark:border-white/5"
    href={p.link}
    target="_blank"
    rel="noreferrer"
    aria-label={`${p.title} — ${p.tag}`}
  >
    <div className="flex items-start gap-4">
      <div className="w-14 h-14 rounded-lg bg-white/5 flex items-center justify-center text-2xl">
        {p.icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">{p.title}</h3>
          <div className="text-xs px-2 py-1 rounded-md bg-white/6">{p.tag}</div>
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-white/70">{p.blurb}</p>
        <div className="mt-3 flex gap-2 text-[12px] text-gray-500 dark:text-white/60">
          {p.badges.map((b, i) => (
            <div key={i} className="px-2 py-1 bg-white/3 rounded-md">
              {b}
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.a>
)

export default ProjectCard


