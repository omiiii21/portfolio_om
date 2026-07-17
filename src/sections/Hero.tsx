import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Blotter from '../components/Blotter'
import CountUp from '../components/motion/CountUp'
import { ArrowDown, FileText, Github, Linkedin } from '../components/icons'
import { heroStats } from '../data/metrics'
import { profile } from '../data/profile'

const fadeUp = (reduce: boolean, delay: number) => ({
  initial: { opacity: 0, y: reduce ? 0 : 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.55, ease: [0.21, 0.65, 0.25, 1] as const },
})

const Hero: React.FC = () => {
  const reduce = useReducedMotion() ?? false

  return (
    <section className="pt-14 pb-20 md:pt-20 md:pb-28" aria-labelledby="hero-heading">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            {...fadeUp(reduce, 0)}
            className="flex flex-wrap items-center gap-2 font-mono text-xs tracking-[0.18em] text-muted uppercase"
          >
            <span className="live-dot h-2 w-2 rounded-full bg-up" aria-hidden="true" />
            {profile.role} @ {profile.company}
          </motion.p>

          <motion.h1
            id="hero-heading"
            {...fadeUp(reduce, 0.1)}
            className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl"
          >
            Systems that trade.
            <br />
            <span className="text-accent">Research that ships.</span>
          </motion.h1>

          <motion.p {...fadeUp(reduce, 0.22)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I'm Om. I build execution analytics, market-impact models, and the billion-row pipelines
            underneath them for institutional trading — then sit with the clients who use them until
            the numbers make sense. Peer-reviewed on the side, hybrid athlete before breakfast.
          </motion.p>

          <motion.div {...fadeUp(reduce, 0.34)} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-accent px-6 font-semibold text-on-accent transition-opacity hover:opacity-90"
            >
              Let's talk
              <ArrowDown size={16} />
            </a>
            <a
              href={profile.resumeView}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-line px-5 font-medium text-ink transition-colors hover:border-line-strong"
            >
              <FileText size={16} />
              Résumé
            </a>
            <span className="flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className="inline-flex h-12 w-12 items-center justify-center rounded-lg text-muted transition-colors hover:text-ink"
              >
                <Github size={19} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
                className="inline-flex h-12 w-12 items-center justify-center rounded-lg text-muted transition-colors hover:text-ink"
              >
                <Linkedin size={19} />
              </a>
            </span>
          </motion.div>
        </div>

        <Blotter />
      </div>

      {/* Proof strip */}
      <motion.dl
        {...fadeUp(reduce, 0.5)}
        className="mt-16 grid grid-cols-2 divide-line overflow-hidden rounded-xl border border-line bg-panel/60 sm:grid-cols-4 sm:divide-x"
      >
        {heroStats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse gap-1 px-5 py-5">
            <dt className="font-mono text-[11px] leading-snug tracking-wide text-muted uppercase">
              {stat.label}
            </dt>
            <dd className="font-display text-3xl font-semibold tabular-nums text-ink">
              <CountUp to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            </dd>
          </div>
        ))}
      </motion.dl>
    </section>
  )
}

export default Hero
