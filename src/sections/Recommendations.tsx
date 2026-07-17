import React from 'react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/motion/Reveal'
import { ArrowUpRight, Quote } from '../components/icons'
import { recommendations } from '../data/recommendations'
import { profile } from '../data/profile'

const Recommendations: React.FC = () => {
  return (
    <section
      id="recommendations"
      className="scroll-mt-24 border-t border-line py-20 md:py-28"
      aria-labelledby="recommendations-heading"
    >
      <SectionHeading
        index="04"
        kicker="Recommendations"
        title="What people I've worked with say"
        description="Taken verbatim from LinkedIn — from the people who reviewed the code, sat in the client calls, and shipped alongside me."
        id="recommendations-heading"
      />

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((rec, i) => (
          <Reveal key={`${rec.name}-${i}`} delay={i * 0.08} className="h-full">
            <figure
              className={`flex h-full flex-col rounded-xl p-6 ${
                rec.placeholder ? 'border border-dashed border-line-strong bg-transparent' : 'border-fluent card-glow'
              }`}
            >
              {rec.placeholder && (
                <p className="mb-4 inline-flex w-fit rounded bg-amber-500/15 px-2 py-1 font-mono text-[11px] font-semibold tracking-wider text-amber-700 uppercase dark:text-amber-400">
                  Sample — paste real quote
                </p>
              )}
              <Quote size={22} className="text-accent" />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/90">
                {rec.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <p className="font-semibold text-ink">{rec.name}</p>
                <p className="mt-0.5 text-sm text-muted">{rec.title}</p>
                <p className="mt-1 font-mono text-[11px] tracking-wide text-muted">{rec.relationship}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <a
          href={profile.linkedinRecommendations}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-8 inline-flex h-12 items-center gap-2 font-medium text-accent transition-opacity hover:opacity-80"
        >
          Read them all on LinkedIn
          <ArrowUpRight size={16} />
        </a>
      </Reveal>
    </section>
  )
}

export default Recommendations
