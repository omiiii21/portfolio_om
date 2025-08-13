import React from 'react'
import { motion } from 'framer-motion'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="mt-16 mb-24" aria-labelledby="contact-heading">
      <motion.h2 id="contact-heading" initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="text-2xl font-semibold">
        Say hello
      </motion.h2>
      <motion.form initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <label className="sr-only" htmlFor="email">Your email</label>
        <input id="email" name="email" type="email" autoComplete="email" className="md:col-span-2 p-4 rounded-xl border h-12 bg-white text-gray-900 placeholder:text-gray-500 border-gray-300 dark:bg-white/5 dark:text-white dark:placeholder:text-white/60 dark:border-white/6" placeholder="Your email" />
        <label className="sr-only" htmlFor="message">Your message</label>
        <textarea id="message" name="message" className="md:col-span-2 p-4 rounded-xl border h-36 bg-white text-gray-900 placeholder:text-gray-500 border-gray-300 dark:bg-white/5 dark:text-white dark:placeholder:text-white/60 dark:border-white/6" placeholder="What’s up?" />
        <div className="flex items-center gap-3">
          <button type="submit" className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 dark:focus-visible:ring-offset-[#05060b]">Send</button>
          <div className="text-sm text-gray-600 dark:text-white/60">Or email directly at <a className="underline" href="mailto:omengshetti@gmail.com">omengshetti@gmail.com</a></div>
        </div>
      </motion.form>
    </section>
  )
}

export default Contact


