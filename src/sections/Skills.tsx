import React from 'react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/motion/Reveal'
import { skillGroups } from '../data/skills'

const Skills: React.FC = () => {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-line py-20 md:py-28" aria-labelledby="skills-heading">
      <SectionHeading
        index="06"
        kicker="Toolkit"
        title="What I reach for"
        id="skills-heading"
      />

      <div className="mt-10 border-t border-line">
        {skillGroups.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.04}>
            <div className="grid grid-cols-1 gap-3 border-b border-line py-5 sm:grid-cols-[220px_1fr] sm:gap-8">
              <h3 className="font-mono text-xs tracking-[0.16em] text-muted uppercase sm:pt-1.5">{group.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-panel/60 px-3 py-1.5 text-sm text-ink/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Skills
