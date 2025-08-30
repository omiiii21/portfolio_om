import React from 'react'
import { useIdle } from '../context/IdleContext'
import { motion } from 'framer-motion'

const About: React.FC = () => {
  const { isIdle } = useIdle()
  const mainDark = isIdle ? 'dark:bg-[#0b0e1a]' : 'dark:bg-white/3'
  const tileDark = isIdle ? 'dark:bg-[#0f1324]' : 'dark:bg-white/5'
  const asideDark = isIdle ? 'dark:bg-[#0f1324]' : 'dark:bg-white/4'
  const mainLight = isIdle ? 'bg-gray-50' : 'bg-black/[.03]'
  const tileLight = isIdle ? 'bg-gray-100' : 'bg-black/[.05]'
  const asideLight = isIdle ? 'bg-gray-100' : 'bg-black/[.04]'
  const RESUME_GDRIVE_ID = '1v1F-Vz9bQgJ9IAtfY25oamB6_Od5hV2C'
  return (
    <section id="about" className="mt-14">
      <motion.h2 initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="text-2xl font-semibold">
        About
      </motion.h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`md:col-span-2 rounded-2xl p-6 ${mainLight} ${mainDark}`}>
          <p className="text-gray-700 dark:text-white/80">I build robust data systems and pipelines. My focus is on production-grade engineering — observability, fault-tolerance, and maintainable code. I enjoy working on complex engineering problems involving data: distributed ETL, streaming ingestion, scheduling and orchestration, and scalable analytics platforms.</p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className={`p-3 rounded-lg ${tileLight} ${tileDark}`}>
              <div className="text-xs text-gray-500 dark:text-white/60">Core Strength</div>
              <div className="font-medium mt-1">Systems design & data pipelines</div>
            </div>
            <div className={`p-3 rounded-lg ${tileLight} ${tileDark}`}>
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

        <aside className={`p-6 rounded-2xl ${asideLight} ${asideDark}`}>
          <h4 className="font-semibold">Contact</h4>
          <div className="mt-3 text-sm text-gray-600 dark:text-white/70">Email: <a className="underline" href="mailto:omengshetti@gmail.com ">omengshetti@gmail.com </a></div>
          <div className="mt-3 flex gap-2 text-xs">
            <a className="px-3 py-2 rounded-md bg-black/[.06] dark:bg-white/6" href="https://github.com/omiiii21">GitHub</a>
            <a className="px-3 py-2 rounded-md bg-black/[.06] dark:bg-white/6" href="https://www.linkedin.com/in/ommengshetti/">LinkedIn</a>
          </div>

          <div className="mt-6">
            <div className="mt-2 group inline-block w-full rounded-xl border border-black/10 dark:border-white/10 overflow-hidden transition-shadow group-hover:shadow-lg">
              <div className="px-5 py-2 bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-medium">
                <span className="transition-opacity duration-200 group-hover:opacity-0">Resume</span>
              </div>
              <div className="transition-all duration-300 max-h-0 opacity-0 translate-y-2 group-hover:max-h-[520px] group-hover:opacity-100 group-hover:translate-y-0">
                <div className="relative bg-white dark:bg-black">
                  <img
                    src={"https://drive.google.com/thumbnail?id=1fvurntzc3RPMGsz6s3UGczvaOUmUWnWz&sz=w2000"} 
                    alt="Resume preview"
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white dark:from-black to-transparent" />
                </div>
                <div className="py-3 flex items-center justify-center gap-4">
                  <a
                    
                    href={`https://drive.google.com/file/d/${RESUME_GDRIVE_ID}/view`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Resume"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/12 transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
                    {/* <span className="text-sm">View</span> */}
                  </a>
                  <a
                    href={`https://drive.google.com/uc?export=download&id=${RESUME_GDRIVE_ID}`}
                    aria-label="Download Resume"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-black/15 dark:border-white/10 hover:bg-black/[.05] dark:hover:bg-white/5 transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 3a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4.007 4.007a1 1 0 0 1-1.414 0L7.279 11.707a1 1 0 0 1 1.414-1.414L11 12.586V4a1 1 0 0 1 1-1z"/><path d="M5 17a1 1 0 0 1 1 1v1h12v-1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0z"/></svg>
                    {/* <span className="text-sm">Download</span> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default About


