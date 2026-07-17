import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Terminal from '../components/Terminal'
import TiltCard from '../components/motion/TiltCard'
import Magnetic from '../components/motion/Magnetic'
import CountUp from '../components/motion/CountUp'
import Typewriter from '../components/motion/Typewriter'

const HEADLINE: { text: string; gradient?: boolean }[] = [
  { text: 'Building' },
  { text: 'systems' },
  { text: 'that' },
  { text: 'think,', gradient: true },
  { text: 'scale,', gradient: true },
  { text: 'and' },
  { text: 'last.', gradient: true },
]

const STATS = [
  { label: 'Reports / Day', value: 3200, suffix: '+' },
  { label: 'Years Experience', value: 2, suffix: '+' },
  { label: 'Projects', value: 10, suffix: '+' },
]

const FLOATING_CHIPS = [
  { label: '🐍 Python', className: '-top-5 -left-4 md:-left-8', delay: 1.1, duration: '5.5s' },
  { label: '⚡ Kafka', className: '-top-4 right-6', delay: 1.25, duration: '6.5s' },
  { label: '🧱 Redis', className: '-bottom-5 -left-2 md:-left-6', delay: 1.4, duration: '7s' },
  { label: '✨ Spark', className: '-bottom-4 right-10', delay: 1.55, duration: '6s' },
]

const Hero: React.FC = () => {
  const reduce = useReducedMotion()

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-8 md:mt-14" aria-labelledby="hero-heading">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-black/[.03] dark:bg-white/[.04] text-xs text-gray-600 dark:text-white/70"
        >
          <span className="live-dot relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
          Open to interesting problems
        </motion.div>

        {/* Word-by-word masked rise */}
        <motion.h1
          id="hero-heading"
          className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.08] tracking-tight"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.085, delayChildren: 0.15 } }, hidden: {} }}
        >
          {HEADLINE.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
              <motion.span
                className={`inline-block mr-[0.28em] ${word.gradient ? 'gradient-text' : ''}`}
                variants={{
                  hidden: { y: reduce ? 0 : '105%', opacity: reduce ? 0 : 1 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.21, 0.65, 0.25, 1] } },
                }}
              >
                {word.text}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="mt-6 text-lg text-gray-600 dark:text-white/70 min-h-[3.5rem]"
        >
          I design and build{' '}
          <Typewriter
            className="font-semibold text-gray-900 dark:text-white"
            phrases={[
              'resilient ETL pipelines.',
              'event-driven systems.',
              'real-time risk engines.',
              'scalable analytics platforms.',
            ]}
          />
          <br />
          Turning raw data into reliable products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="mt-8 flex items-center gap-3"
        >
          <Magnetic>
            <a
              href="#projects"
              className="shine group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-semibold shadow-lg shadow-indigo-500/30"
              aria-label="See my work"
            >
              See my work
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-300 dark:border-white/10 hover:border-cyan-400/60 dark:hover:border-cyan-400/60 hover:shadow-[0_0_24px_rgba(34,211,238,0.18)] transition-all duration-300"
              aria-label="Get in touch"
            >
              Get in touch
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 1.1 } }, hidden: {} }}
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 18, scale: 0.96 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 220, damping: 22 } },
              }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="p-3 rounded-2xl bg-black/[.05] dark:bg-white/[.03] border border-transparent hover:border-cyan-400/30 transition-colors"
            >
              <div className="text-xs text-gray-500 dark:text-white/60">{stat.label}</div>
              <div className="text-2xl font-semibold mt-1 tabular-nums">
                <CountUp to={stat.value} suffix={stat.suffix} delay={0.2} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="relative mt-6 md:mt-0">
        {/* Glow behind the terminal */}
        <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-400/25 to-indigo-500/25 blur-2xl" aria-hidden />

        <TiltCard maxTilt={6} className="group relative rounded-2xl">
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.55, duration: 0.8, ease: [0.21, 0.65, 0.25, 1] }}
          >
            <Terminal />
          </motion.div>
        </TiltCard>

        {/* Floating tech chips */}
        {FLOATING_CHIPS.map((chip) => (
          <motion.span
            key={chip.label}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: chip.delay, type: 'spring', stiffness: 260, damping: 16 }}
            className={`float-y absolute ${chip.className} px-3 py-1.5 rounded-full text-xs font-medium border border-black/10 dark:border-white/15 bg-white/80 dark:bg-[#0b0e1a]/85 backdrop-blur shadow-lg`}
            style={{ animationDelay: `${chip.delay}s`, animationDuration: chip.duration }}
          >
            {chip.label}
          </motion.span>
        ))}

        <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 blur-xl opacity-30" aria-hidden />
      </div>
    </section>
  )
}

export default Hero
