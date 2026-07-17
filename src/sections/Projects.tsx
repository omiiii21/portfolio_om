import React from 'react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/motion/Reveal'
import { ArrowUpRight, OrderBook, Radar, TrendingUp } from '../components/icons'
import { projects } from '../data/projects'
import type { Project } from '../types/portfolio'

const ICONS: Record<Project['icon'], React.FC<{ size?: number; className?: string }>> = {
  orderbook: OrderBook,
  radar: Radar,
  trending: TrendingUp,
}

const Projects: React.FC = () => {
  return (
    <section id="work" className="scroll-mt-24 border-t border-line py-20 md:py-28" aria-labelledby="work-heading">
      <SectionHeading
        index="02"
        kicker="Selected work"
        title="Built to hold up under load"
        description="Personal projects with the same standards as production: measured, benchmarked, and honest about the numbers."
        id="work-heading"
      />

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => {
          const Icon = ICONS[project.icon]
          return (
            <Reveal key={project.title} delay={i * 0.08} className="h-full">
              <article className="group flex h-full flex-col rounded-xl border border-line bg-panel/60 p-6 transition-colors hover:border-accent/50">
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Icon size={22} />
                  </span>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`Open ${project.title}`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-muted transition-colors hover:text-accent"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>

                <p className="mt-5 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">{project.tag}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.blurb}</p>

                <div className="mt-5 rounded-lg bg-panel-2 px-4 py-3">
                  <p className="font-display text-2xl font-semibold tabular-nums text-accent">{project.impact.value}</p>
                  <p className="mt-0.5 font-mono text-[11px] tracking-wide text-muted">{project.impact.label}</p>
                </div>

                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${project.title} stack`}>
                  {project.stack.map((tech) => (
                    <li key={tech} className="rounded border border-line px-2 py-0.5 font-mono text-[10px] text-muted">
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
