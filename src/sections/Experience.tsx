import React from 'react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/motion/Reveal'
import { roles } from '../data/experience'

const Experience: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-line py-20 md:py-28" aria-labelledby="experience-heading">
      <SectionHeading
        index="01"
        kicker="Experience"
        title="Where I've shipped"
        description="Production systems for institutional trading — built end-to-end and run in front of the clients who depend on them."
        id="experience-heading"
      />

      <div className="mt-12 space-y-14">
        {roles.map((role) => (
          <Reveal key={role.company}>
            <article className="grid grid-cols-1 gap-6 md:grid-cols-[240px_1fr] md:gap-10">
              <div>
                <p className="font-mono text-xs tracking-wider text-muted">{role.period}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{role.company}</h3>
                <p className="mt-1 text-sm text-muted">{role.title}</p>
              </div>

              <div>
                <p className="text-muted leading-relaxed">{role.summary}</p>
                <ul className="mt-5 space-y-3">
                  {role.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-[15px] leading-relaxed text-ink/90">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-sm bg-accent" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Technologies used at ${role.company}`}>
                  {role.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-line px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Experience
