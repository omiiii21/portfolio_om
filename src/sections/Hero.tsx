import React from 'react'
import { useIdle } from '../context/IdleContext'
import { motion, AnimatePresence } from 'framer-motion'

const Hero: React.FC = () => {
  const { isIdle } = useIdle()
  const heroCardDarkBg = isIdle ? 'dark:from-[#0b0e1a] dark:to-[#0b0e1a]' : 'dark:from-white/3 dark:to-white/4'
  const heroCardLightBg = isIdle ? 'from-gray-50 to-gray-100' : 'from-black/[.03] to-black/[.04]'
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
            <div className="p-3 rounded-2xl bg-gray-100 dark:bg-white/3">
              <div className="text-xs">Reports / Day</div>
              <div className="text-2xl font-semibold mt-1">3,200+</div>
            </div>
            <div className="p-3 rounded-2xl bg-gray-100 dark:bg-white/3">
              <div className="text-xs">Years Experience</div>
              <div className="text-2xl font-semibold mt-1">2+</div>
            </div>
            <div className="p-3 rounded-2xl bg-gray-100 dark:bg-white/3">
              <div className="text-xs">Projects</div>
              <div className="text-2xl font-semibold mt-1">10+</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className={`p-6 rounded-3xl bg-gradient-to-br ${heroCardLightBg} border border-black/10 ${heroCardDarkBg} dark:border-white/6 shadow-2xl`}
          >
            <div className="relative rounded-xl overflow-hidden">
              <div className="w-full pt-[56.25%]" />
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/avatar.mp4"
                autoPlay
                loop
                muted
                playsInline
                aria-label="Hero video"
              />
            </div>
          </motion.div>

          <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 blur-xl opacity-30" />
        </div>
      </section>
    </AnimatePresence>
  )
}

export default Hero


