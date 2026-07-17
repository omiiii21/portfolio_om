import React from 'react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/motion/Reveal'
import { ArrowUpRight } from '../components/icons'
import { papers } from '../data/research'

const Research: React.FC = () => {
  return (
    <section id="research" className="scroll-mt-24 border-t border-line py-20 md:py-28" aria-labelledby="research-heading">
      <SectionHeading
        index="03"
        kicker="Published research"
        title="Peer-reviewed, not just deployed"
        description="Three publications spanning algorithmic trading, deep learning for markets, and distributed data systems."
        id="research-heading"
      />

      <div className="mt-10 border-t border-line">
        {papers.map((paper, i) => (
          <Reveal key={paper.title} delay={i * 0.06}>
            <a
              href={paper.link}
              target="_blank"
              rel="noreferrer noopener"
              className="group grid grid-cols-[1fr_auto] items-start gap-4 border-b border-line py-6 transition-colors hover:bg-panel/50 md:grid-cols-[110px_1fr_auto] md:gap-8 md:px-4"
            >
              <p className="hidden font-mono text-sm text-muted tabular-nums md:block">{paper.year}</p>
              <span>
                <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="rounded bg-accent-soft px-2 py-0.5 font-mono text-[11px] font-medium tracking-wide text-accent">
                    {paper.venue}
                  </span>
                  <span className="font-mono text-xs text-muted md:hidden">{paper.year}</span>
                </span>
                <span className="mt-2 block font-display text-lg font-semibold leading-snug text-ink group-hover:text-accent transition-colors">
                  {paper.title}
                </span>
                <span className="mt-2 block max-w-3xl text-sm leading-relaxed text-muted">{paper.blurb}</span>
              </span>
              <span
                className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-muted transition-colors group-hover:border-accent/50 group-hover:text-accent"
                aria-hidden="true"
              >
                <ArrowUpRight size={18} />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Research
