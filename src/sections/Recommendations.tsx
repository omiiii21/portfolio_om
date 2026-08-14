import React, { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/motion/Reveal'
import { ArrowUpRight, Quote } from '../components/icons'
import { recommendations } from '../data/recommendations'
import { profile } from '../data/profile'
import type { Recommendation } from '../types/portfolio'

/** Roughly the point where a single-paragraph quote outgrows the card. */
const CLAMP_ABOVE = 340

const RecommendationCard: React.FC<{ rec: Recommendation }> = ({ rec }) => {
  const [expanded, setExpanded] = useState(false)
  const paragraphs = rec.quote.split('\n\n')
  // Collapsed cards show the opening paragraph only — clamping across a
  // paragraph break strands the ellipsis on a blank line.
  const isLong = paragraphs.length > 1 || rec.quote.length > CLAMP_ABOVE
  const visible = expanded ? paragraphs : paragraphs.slice(0, 1)

  return (
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
      <blockquote className="mt-4 flex-1 space-y-3 text-[15px] leading-relaxed text-ink/90">
        {visible.map((para, i) => (
          <p key={i} className={!expanded && isLong ? 'line-clamp-6' : ''}>
            {para}
          </p>
        ))}
      </blockquote>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-3 w-fit font-mono text-[11px] tracking-wide text-accent uppercase transition-opacity hover:opacity-80"
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
      <figcaption className="mt-6 border-t border-line pt-4">
        <p className="font-semibold text-ink">{rec.name}</p>
        <p className="mt-0.5 text-sm text-muted">{rec.title}</p>
        <p className="mt-1 font-mono text-[11px] tracking-wide text-muted">{rec.relationship}</p>
      </figcaption>
    </figure>
  )
}

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
            <RecommendationCard rec={rec} />
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
