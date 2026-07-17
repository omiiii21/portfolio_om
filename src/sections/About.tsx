import React from 'react'
import { motion } from 'framer-motion'
import AnimatedHeading from '../components/motion/AnimatedHeading'
import Reveal from '../components/motion/Reveal'

const TIMELINE = [
  {
    role: 'Quant Engineer, Bestex Research',
    detail: 'Architected and maintained ETL systems, report automation, and data platform integrations.',
  },
  {
    role: 'Software Engineer, AllianceBernstein',
    detail: 'Worked on analytics pipelines and algorithmic data feeds.',
  },
]

const About: React.FC = () => {
  return (
    <section id="about" className="mt-20">
      <AnimatedHeading kicker="04 — Behind the code">About</AnimatedHeading>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Reveal direction="up" className="md:col-span-2">
          <div className="h-full rounded-2xl p-6 bg-black/[.03] dark:bg-white/3 border border-transparent hover:border-black/[.06] dark:hover:border-white/[.08] transition-colors">
            <p className="text-gray-700 dark:text-white/80">I build robust data systems and pipelines. My focus is on production-grade engineering — observability, fault-tolerance, and maintainable code. I enjoy working on complex engineering problems involving data: distributed ETL, streaming ingestion, scheduling and orchestration, and scalable analytics platforms.</p>

            <motion.div
              className="mt-6 grid grid-cols-2 gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={{ visible: { transition: { staggerChildren: 0.12 } }, hidden: {} }}
            >
              {[
                { label: 'Core Strength', value: 'Systems design & data pipelines' },
                { label: 'Currently learning', value: 'Advanced Spark tuning & cloud infra' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, y: 16, scale: 0.97 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 240, damping: 22 } },
                  }}
                  whileHover={{ y: -3 }}
                  className="p-3 rounded-lg bg-black/[.05] dark:bg-white/5"
                >
                  <div className="text-xs text-gray-500 dark:text-white/60">{item.label}</div>
                  <div className="font-medium mt-1">{item.value}</div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold">Career Timeline</h4>
              <div className="relative mt-3">
                {/* Self-drawing spine */}
                <motion.div
                  aria-hidden
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.9, ease: [0.21, 0.65, 0.25, 1] }}
                  className="absolute left-[5px] top-2 bottom-2 w-[2px] origin-top rounded-full bg-gradient-to-b from-cyan-400 to-indigo-500"
                />
                <ol className="space-y-5">
                  {TIMELINE.map((item, i) => (
                    <motion.li
                      key={item.role}
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ delay: 0.25 + i * 0.25, duration: 0.55, ease: [0.21, 0.65, 0.25, 1] }}
                      className="relative flex items-start gap-4 pl-0"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ delay: 0.3 + i * 0.25, type: 'spring', stiffness: 380, damping: 16 }}
                        className="relative z-10 w-3 h-3 rounded-full bg-indigo-400 ring-4 ring-indigo-400/20 mt-1.5 shrink-0"
                      />
                      <div>
                        <div className="text-sm font-medium">{item.role}</div>
                        <div className="text-xs text-gray-500 dark:text-white/60">{item.detail}</div>
                      </div>
                    </motion.li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.15}>
          <aside className="h-full p-6 rounded-2xl bg-black/[.04] dark:bg-white/4 border border-transparent hover:border-black/[.06] dark:hover:border-white/[.08] transition-colors">
            <h4 className="font-semibold">Contact</h4>
            <div className="mt-3 text-sm text-gray-600 dark:text-white/70">Email: <a className="underline hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors" href="mailto:omengshetti@gmail.com">omengshetti@gmail.com</a></div>
            <div className="mt-3 flex gap-2 text-xs">
              {[
                { label: 'GitHub', href: 'https://github.com/omiiii21' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ommengshetti/' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-2 rounded-md bg-black/[.06] dark:bg-white/6 hover:bg-cyan-400/15 transition-colors"
                  href={social.href}
                >
                  {social.label}
                </motion.a>
              ))}
            </div>

            <div className="mt-6">
              <div className="mt-2 group inline-block w-full rounded-xl border border-black/10 dark:border-white/10 overflow-hidden transition-shadow group-hover:shadow-lg">
                <div className="shine px-5 py-2 bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-medium">
                  <span className="transition-opacity duration-200 group-hover:opacity-0">Resume</span>
                </div>
                <div className="transition-all duration-300 max-h-0 opacity-0 translate-y-2 group-hover:max-h-[520px] group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="relative bg-white dark:bg-black">
                    <img
                      src="https://drive.google.com/thumbnail?id=1fvurntzc3RPMGsz6s3UGczvaOUmUWnWz&sz=w2000"
                      alt="Resume preview"
                      className="w-full h-64 object-cover object-top"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white dark:from-black to-transparent" />
                  </div>
                  <div className="py-3 flex items-center justify-center gap-4">
                    <a
                      href="https://drive.google.com/file/d/1fvurntzc3RPMGsz6s3UGczvaOUmUWnWz/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Resume"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-black/[.05] dark:bg-white/10 hover:bg-black/[.08] dark:hover:bg-white/12 transition"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
                      <span className="text-sm">View</span>
                    </a>
                    <a
                      href="https://drive.google.com/uc?export=download&id=1fvurntzc3RPMGsz6s3UGczvaOUmUWnWz"
                      aria-label="Download Resume"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-black/15 dark:border-white/10 hover:bg-black/[.05] dark:hover:bg-white/5 transition"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 3a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4.007 4.007a1 1 0 0 1-1.414 0L7.279 11.707a1 1 0 0 1 1.414-1.414L11 12.586V4a1 1 0 0 1 1-1z"/><path d="M5 17a1 1 0 0 1 1 1v1h12v-1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0z"/></svg>
                      <span className="text-sm">Download</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}

export default About
