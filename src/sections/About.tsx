import React from 'react'
import { motion } from 'framer-motion'

const About: React.FC = () => {
  return (
    <section id="about" className="mt-14">
      <motion.h2 initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="text-2xl font-semibold">
        About
      </motion.h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 rounded-2xl p-6 bg-black/[.03] dark:bg-white/3">
          <p className="text-gray-700 dark:text-white/80">I build robust data systems and pipelines. My focus is on production-grade engineering — observability, fault-tolerance, and maintainable code. I enjoy working on complex engineering problems involving data: distributed ETL, streaming ingestion, scheduling and orchestration, and scalable analytics platforms.</p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-black/[.05] dark:bg-white/5">
              <div className="text-xs text-gray-500 dark:text-white/60">Core Strength</div>
              <div className="font-medium mt-1">Systems design & data pipelines</div>
            </div>
            <div className="p-3 rounded-lg bg-black/[.05] dark:bg-white/5">
              <div className="text-xs text-gray-500 dark:text-white/60">Currently learning</div>
              <div className="font-medium mt-1">Advanced Spark tuning & cloud infra</div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-semibold">Career Timeline</h4>
            <ol className="mt-3 space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-indigo-400 mt-2" />
                <div>
                  <div className="text-sm font-medium">Quant Engineer, Bestex Research</div>
                  <div className="text-xs text-gray-500 dark:text-white/60">Architected and maintained ETL systems, report automation, and data platform integrations.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-indigo-400 mt-2" />
                <div>
                  <div className="text-sm font-medium">Software Engineer, AllianceBernstein</div>
                  <div className="text-xs text-gray-500 dark:text-white/60">Worked on analytics pipelines and algorithmic data feeds.</div>
                </div>
              </li>
            </ol>
          </div>
        </div>

        <aside className="p-6 rounded-2xl bg-black/[.04] dark:bg-white/4">
          <h4 className="font-semibold">Contact</h4>
          <div className="mt-3 text-sm text-gray-600 dark:text-white/70">Email: <a className="underline" href="mailto:omengshetti@gmail.com ">omengshetti@gmail.com </a></div>
          <div className="mt-3 flex gap-2 text-xs">
            <a className="px-3 py-2 rounded-md bg-black/[.06] dark:bg-white/6" href="https://github.com/omiiii21">GitHub</a>
            <a className="px-3 py-2 rounded-md bg-black/[.06] dark:bg-white/6" href="https://www.linkedin.com/in/ommengshetti/">LinkedIn</a>
          </div>

          <div className="mt-6">
            <h5 className="text-sm font-medium">Download CV</h5>
            <a className="mt-2 inline-block px-4 py-2 rounded-md bg-gradient-to-r from-cyan-400 to-indigo-500 text-black" href="#">PDF</a>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default About


