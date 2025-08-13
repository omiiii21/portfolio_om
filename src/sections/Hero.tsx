import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Hero: React.FC = () => {
  return (
    <AnimatePresence mode="wait">
      <section
        key="hero-section"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12"
        aria-labelledby="hero-heading"
      >
        <div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            id="hero-heading"
          >
            Building systems that think, scale, and last.
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-6 text-lg text-gray-600 dark:text-white/70"
          >
            I design and build resilient ETL pipelines, event-driven systems, and
            analytics platforms that turn raw data into reliable products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-8 flex items-center gap-3"
          >
            <a
              href="#projects"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-semibold"
              aria-label="See my work"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="px-4 py-3 rounded-xl border border-gray-300 dark:border-white/6"
              aria-label="Get in touch"
            >
              Get in touch
            </a>
          </motion.div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-2xl bg-black/[.05] dark:bg-white/3">
              <div className="text-xs">Reports / Day</div>
              <div className="text-2xl font-semibold mt-1">3,200+</div>
            </div>
            <div className="p-3 rounded-2xl bg-black/[.05] dark:bg-white/3">
              <div className="text-xs">Years Experience</div>
              <div className="text-2xl font-semibold mt-1">6+</div>
            </div>
            <div className="p-3 rounded-2xl bg-black/[.05] dark:bg-white/3">
              <div className="text-xs">Projects</div>
              <div className="text-2xl font-semibold mt-1">20+</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-3xl bg-gradient-to-br from-black/[.03] to-black/[.04] border border-black/10 dark:from-white/3 dark:to-white/4 dark:border-white/6 shadow-2xl"
          >
            <div className="h-56 rounded-xl bg-gradient-to-br from-[#061026] to-[#09122a] p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold  text-white">Live Demo</div>
                <div className="text-xs text-gray-500 dark:text-white/60">Prototype</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">🐍</div>
                <div>
                  <div className="text-sm font-medium text-white">TCA Runner</div>
                  <div className="text-xs text-gray-500 dark:text-white/60">
                    ETL / Scheduler / Multiprocessing
                  </div>
                </div>
              </div>
              <div className="text-[13px] text-gray-500 dark:text-white/60">
                Click a project to explore details and view architecture diagrams.
              </div>
            </div>
          </motion.div>

          <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 blur-xl opacity-30" />
        </div>
      </section>
    </AnimatePresence>
  )
}

export default Hero


