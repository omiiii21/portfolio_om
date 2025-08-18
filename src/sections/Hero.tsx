import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TypingText: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  const text = 'Hello'
  const [displayed, setDisplayed] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [phase, setPhase] = useState('initial') // 'initial', 'typing', 'blinking', 'done'
  const [blinkCount, setBlinkCount] = useState(0)

  useEffect(() => {
    // Phase 1: Initial cursor blinking (2 seconds)
    const initialTimer = setTimeout(() => {
      setPhase('typing')
    }, 2000)

    return () => clearTimeout(initialTimer)
  }, [])

  useEffect(() => {
    if (phase === 'typing') {
      let i = 0
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1))
        i += 1
        if (i === text.length) {
          clearInterval(interval)
          setPhase('blinking')
        }
      }, 150)
      return () => clearInterval(interval)
    }
  }, [phase, text])

  useEffect(() => {
    if (phase === 'blinking') {
      const blinkInterval = setInterval(() => {
        setShowCursor(prev => !prev)
        if (!showCursor) {
          setBlinkCount(prev => {
            const newCount = prev + 1
            if (newCount >= 3) {
              setPhase('done')
              clearInterval(blinkInterval)
            }
            return newCount
          })
        }
      }, 300)
      return () => clearInterval(blinkInterval)
    }
  }, [phase, showCursor])

  return (
    <motion.div
      className="text-6xl font-mono text-white text-left"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 0 : 1 }}
    >
      {displayed}
      {(phase === 'initial' || phase === 'typing' || (phase === 'blinking' && showCursor)) && (
        <span className="bg-white inline-block ml-1" style={{ width: '8px', height: '48px' }}>█</span>
      )}
    </motion.div>
  )
}

const Hero: React.FC = () => {
  return (
    <AnimatePresence mode="wait">
      <section
        key="hero-section"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8"
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
              <div className="text-2xl font-semibold mt-1">2+</div>
            </div>
            <div className="p-3 rounded-2xl bg-black/[.05] dark:bg-white/3">
              <div className="text-xs">Projects</div>
              <div className="text-2xl font-semibold mt-1">10+</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <SpotlightCard />
          <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 blur-xl opacity-30" />
        </div>
      </section>
    </AnimatePresence>
  )
}

export default Hero

const SpotlightCard: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [shouldEnlarge, setShouldEnlarge] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
    setIsLoading(true)
    
    // Start enlarging after 2 seconds
    setTimeout(() => {
      setShouldEnlarge(true)
      setIsLoading(false)
    }, 2000)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setIsLoading(false)
    setShouldEnlarge(false)
  }

  return (
    <>
      {/* Backdrop overlay when enlarged */}
      <AnimatePresence>
        {shouldEnlarge && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleMouseLeave}
          />
        )}
      </AnimatePresence>

      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ 
          scale: shouldEnlarge ? 1.8 : 1, 
          opacity: 1,
          zIndex: shouldEnlarge ? 50 : 'auto'
        }}
        transition={{ 
          duration: 0.4,
          ease: "easeOut"
        }}
        className={`p-6 rounded-3xl bg-gradient-to-br from-black/[.03] to-black/[.04] border border-black/10 dark:from-white/3 dark:to-white/4 dark:border-white/6 shadow-2xl cursor-pointer relative ${
          shouldEnlarge ? 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : 'relative'
        }`}
        style={{
          transformOrigin: 'center center'
        }}
      >
        {/* Glowing border trace animation */}
        {isLoading && (
          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
            {/* Top line - center to left and right */}
            <motion.div
              className="absolute top-0 left-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg"
              initial={{ width: 0, x: '-50%' }}
              animate={{ width: '50%', x: '-100%' }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ 
                boxShadow: '0 0 10px rgba(6, 182, 212, 0.8), 0 0 20px rgba(6, 182, 212, 0.4)' 
              }}
            />
            <motion.div
              className="absolute top-0 left-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg"
              initial={{ width: 0 }}
              animate={{ width: '50%' }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ 
                boxShadow: '0 0 10px rgba(6, 182, 212, 0.8), 0 0 20px rgba(6, 182, 212, 0.4)' 
              }}
            />
            
            {/* Right line - top to bottom */}
            <motion.div
              className="absolute top-0 right-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500"
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              style={{ 
                boxShadow: '0 0 10px rgba(6, 182, 212, 0.8), 0 0 20px rgba(6, 182, 212, 0.4)' 
              }}
            />
            
            {/* Left line - top to bottom */}
            <motion.div
              className="absolute top-0 left-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500"
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              style={{ 
                boxShadow: '0 0 10px rgba(6, 182, 212, 0.8), 0 0 20px rgba(6, 182, 212, 0.4)' 
              }}
            />
            
            {/* Bottom line - left and right to center */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: '50%' }}
              transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
              style={{ 
                boxShadow: '0 0 10px rgba(6, 182, 212, 0.8), 0 0 20px rgba(6, 182, 212, 0.4)' 
              }}
            />
            <motion.div
              className="absolute bottom-0 right-0 h-0.5 bg-gradient-to-l from-cyan-400 to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: '50%' }}
              transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
              style={{ 
                boxShadow: '0 0 10px rgba(6, 182, 212, 0.8), 0 0 20px rgba(6, 182, 212, 0.4)' 
              }}
            />
          </div>
        )}

        <motion.div 
          className="h-56 rounded-xl bg-gradient-to-br from-[#061026] to-[#09122a] p-6 flex flex-col justify-center items-center relative overflow-hidden"
          animate={{
            boxShadow: shouldEnlarge 
              ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 100px rgba(6, 182, 212, 0.3)' 
              : '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
          }}
        >
          <TypingText isHovered={shouldEnlarge} />
          
          {/* Enhanced content when enlarged */}
          <AnimatePresence>
            {shouldEnlarge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-center">
                  <motion.img
                    src="/images/profile.jpg"
                    alt="Om Mengshetti"
                    className="w-32 h-32 rounded-full border-3 border-white shadow-lg object-cover mx-auto mb-6"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-2 gap-3 text-sm text-white/90 font-mono"
                  >
                    <div>Systems & Data</div>
                    <div>ETL • Realtime</div>
                    <div>Python • FastAPI</div>
                    <div>Kafka • Redis</div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Default hint text - hide when enlarged */}
          <motion.div 
            className="text-[13px] text-gray-500 dark:text-white/60 mt-4 absolute bottom-4"
            animate={{ opacity: shouldEnlarge ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          >
            Hover for spotlight
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}