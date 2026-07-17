import React from 'react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/motion/Reveal'
import { Target, Layers, Zap, BarChart, Dumbbell, TrendingUp, GraduationCap } from '../components/icons'
import { education, competitions } from '../data/experience'

const PRINCIPLES = [
  {
    icon: Target,
    title: 'Deploy forward',
    text: 'Value gets created where the system meets the user. 70+ client requests across 5 institutional clients — the feedback loop is the product.',
  },
  {
    icon: Layers,
    title: 'Own the whole stack',
    text: 'Impact model → pipeline → API → client report. One owner, no seams. I take problems from research idea to production SLA.',
  },
  {
    icon: Zap,
    title: 'Ship, then sharpen',
    text: 'CI/CD, automated testing, 3× faster release cycles. Iteration speed compounds harder than perfection ever will.',
  },
  {
    icon: BarChart,
    title: 'Prove it with data',
    text: 'Three peer-reviewed publications. Benchmarked claims, not vibes — every number on this page comes from something I built.',
  },
]

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-24 border-t border-line py-20 md:py-28" aria-labelledby="about-heading">
      <SectionHeading
        index="05"
        kicker="How I operate"
        title="Forward-deployed by default"
        description="The engineers I admire don't hand off at the API boundary. They sit with the problem — and the person who has it — until it's solved."
        id="about-heading"
      />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PRINCIPLES.map((principle, i) => (
          <Reveal key={principle.title} delay={i * 0.07} className="h-full">
            <article className="h-full rounded-xl border border-line bg-panel/60 p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <principle.icon size={22} />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{principle.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{principle.text}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <h3 className="mt-16 font-mono text-xs tracking-[0.2em] text-muted uppercase">Beyond the desk</h3>
      </Reveal>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
        <Reveal delay={0.05} className="h-full">
          <article className="h-full rounded-xl border border-line bg-panel/60 p-6">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <Dumbbell size={22} />
            </span>
            <h4 className="mt-4 font-display text-lg font-semibold text-ink">Hybrid athlete</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Strength and endurance, most mornings. The discipline that gets a barbell moving at 6am is
              the same one that ships production systems: show up, log the reps, trust the compounding.
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.12} className="h-full">
          <article className="h-full rounded-xl border border-line bg-panel/60 p-6">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <TrendingUp size={22} />
            </span>
            <h4 className="mt-4 font-display text-lg font-semibold text-ink">Competitive by default</h4>
            <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted">
              {competitions.map((comp) => (
                <li key={comp.name}>
                  <span className="font-medium text-ink/90">{comp.name}</span> — {comp.result}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={0.19} className="h-full">
          <article className="h-full rounded-xl border border-line bg-panel/60 p-6">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <GraduationCap size={22} />
            </span>
            <h4 className="mt-4 font-display text-lg font-semibold text-ink">Built on fundamentals</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {education.degree}, {education.school} ({education.period}). GPA {education.gpa}.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  )
}

export default About
