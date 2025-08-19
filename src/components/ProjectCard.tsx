import React from 'react'
import { useIdle } from '../context/IdleContext'
import { motion } from 'framer-motion'
import type { Project } from '../types/portfolio'

export type ProjectCardProps = { p: Project }

const ProjectCard: React.FC<ProjectCardProps> = ({ p }) => {
  const { isIdle } = useIdle()
  const darkBg = isIdle ? 'dark:from-[#0b0e1a] dark:to-[#0b0e1a]' : 'dark:from-white/3 dark:to-white/2'
  const lightBg = isIdle ? 'from-gray-50 to-gray-100' : 'from-black/[.03] to-black/[.05]'
  return (
  <motion.div
    whileHover={{ y: -2 }}
    className={`group relative overflow-hidden rounded-2xl p-5 pb-12 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${lightBg} ${darkBg} border-l-4 border-cyan-500 dark:border-l-cyan-500`}
    aria-label={`${p.title} — ${p.tag}`}
  >
    {/* Single accent slide overlay (uniform color) */}
    <div className="pointer-events-none absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out bg-gradient-to-l from-cyan-500/20 to-transparent" />

    <div className="grid grid-cols-[3.5rem_1fr] items-start gap-4">
      <div className="w-14 h-14 rounded-lg bg-white/5 flex items-center justify-center text-2xl">
        {p.icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg leading-tight">{p.title}</h3>
        <div className="mt-1 text-xs inline-flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-white/6">{p.tag}</span>
        </div>
      </div>

      <p className="col-span-2 mt-3 text-sm text-gray-700 dark:text-white/70 leading-relaxed">{p.blurb}</p>

      <div className="col-span-2 mt-4 flex flex-wrap gap-2 text-[12px] text-gray-600 dark:text-white/60">
        {p.badges.map((b, i) => (
          <span key={i} className="px-2 py-1 rounded-md bg-white/3">
            {b}
          </span>
        ))}
      </div>

      {/* Fixed CTA at bottom-right; appears on hover */}
      <a
        href={p.link}
        aria-label="View project details"
        className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        {/* <span className="text-[11px] text-gray-500 dark:text-white/60">View details</span> */}
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10">↗</span>
      </a>
    </div>
  </motion.div>
)}

export default ProjectCard


