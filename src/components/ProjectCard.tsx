import React from 'react'
import { motion } from 'framer-motion'
import type { Project } from '../types/portfolio'

export type ProjectCardProps = { p: Project }

const ProjectCard: React.FC<ProjectCardProps> = ({ p }) => (
  <motion.div
    whileHover={{ y: -2 }}
    className="group relative overflow-hidden rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-black/[.03] to-black/[.05] dark:from-white/3 dark:to-white/2 border-l-4 border-cyan-500 dark:border-l-cyan-500"
    aria-label={`${p.title} — ${p.tag}`}
  >
    {/* Single accent slide overlay (uniform color) */}
    <div className="pointer-events-none absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out bg-gradient-to-l from-cyan-500/20 to-transparent" />

    <div className="flex items-start gap-4">
      <div className="w-14 h-14 rounded-lg bg-white/5 flex items-center justify-center text-2xl">
        {p.icon}
      </div>
      <div className="flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-lg leading-tight">{p.title}</h3>
            <div className="mt-1 text-xs inline-flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-white/6">{p.tag}</span>
            </div>
          </div>
        </div>

        <p className="mt-3 text-sm text-gray-700 dark:text-white/70 leading-relaxed">{p.blurb}</p>

        <div className="mt-4 flex flex-wrap gap-2 text-[12px] text-gray-600 dark:text-white/60">
          {p.badges.map((b, i) => (
            <span key={i} className="px-2 py-1 rounded-md bg-white/3">
              {b}
            </span>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-5 flex items-center justify-between">
          <a href={p.link} className="text-sm font-medium text-cyan-600 hover:text-cyan-700 transition-colors">Learn more</a>
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
            <span className="text-[11px] text-gray-500 dark:text-white/60">View details</span>
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 translate-x-3 group-hover:translate-x-0 transition-transform">↗</span>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
)

export default ProjectCard


