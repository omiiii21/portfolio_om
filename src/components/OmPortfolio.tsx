/*
Om_Mengshetti_Portfolio_Scaffold.jsx
Single-file React component scaffold for a dope, animated portfolio.

How to use:
1. Create a React app with Vite: `npm create vite@latest my-portfolio --template react`
2. Install deps: `npm i framer-motion tailwindcss@latest postcss@latest autoprefixer@latest`
   and set up Tailwind per their docs (or use the provided styles in your project).
3. Drop this file into `src/components/OmPortfolio.jsx` and import it in App.jsx.
4. Deploy to Vercel with one-click GitHub import.

Notes:
- This scaffold uses Tailwind classes. Tweak colors and animations to taste.
- Replace placeholder data with your real projects, links, and media.
*/

// Legacy single-file scaffold retained for reference
import { motion, AnimatePresence } from 'framer-motion'
import { Analytics } from "@vercel/analytics/react"


// Small helper components inside the file so it's a single-file scaffold.
const WaveBackground = () => (
  <svg className="absolute inset-0 w-full h-full -z-10" preserveAspectRatio="none" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g1" x1="0" x2="1">
        <stop offset="0%" stopColor="#0f172a" />
        <stop offset="100%" stopColor="#070617" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g1)" />
    <g opacity="0.06">
      <path d="M0,200 C360,80 1080,320 1440,200 L1440,400 L0,400 Z" fill="#7c3aed" />
    </g>
  </svg>
)


// deprecated local SkillPill (moved to components/SkillPill)

// export default SkillPill;

// const SkillPill = ({name, level}) => (
//   <div className="flex flex-col items-center space-y-2 p-3 bg-white/5 backdrop-blur rounded-2xl border border-white/5 shadow-sm">
//     <div className="text-sm font-medium">{name}</div>
//     <div className="w-24 h-4 bg-white/6 rounded-full overflow-hidden">
//       <motion.div initial={{width:0}} whileInView={{width:`${level}%`}} viewport={{once:true}} transition={{duration:0.8}} className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500" />
//     </div>
//     <div className="text-xxs text-white/60 text-[11px]">{level}%</div>
//   </div>
// )


// deprecated local ProjectCard (moved to components/ProjectCard)



// const ProjectCard = ({p}) => (
//   <motion.a whileHover={{scale:1.02}} whileTap={{scale:0.99}} className="group block bg-gradient-to-br from-white/3 to-white/2 border border-white/5 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-transform duration-200" href={p.link} target="_blank" rel="noreferrer">
//     <div className="flex items-start gap-4">
//       <div className="w-14 h-14 rounded-lg bg-white/5 flex items-center justify-center text-2xl">{p.icon}</div>
//       <div className="flex-1">
//         <div className="flex items-center justify-between">
//           <h3 className="font-semibold text-lg">{p.title}</h3>
//           <div className="text-xs px-2 py-1 rounded-md bg-white/6">{p.tag}</div>
//         </div>
//         <p className="mt-2 text-sm text-white/70">{p.blurb}</p>
//         <div className="mt-3 flex gap-2 text-[12px] text-white/60">
//           {p.badges.map((b: string, i: number) => (<div key={i} className="px-2 py-1 bg-white/3 rounded-md">{b}</div> ))} 
//         </div>
//       </div>
//     </div>
//   </motion.a>
// )

export default function OmPortfolio(){
  return (
    <div className="min-h-screen text-white bg-[#05060b] relative overflow-hidden font-sans">
      <WaveBackground />
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center font-bold text-black">OM</div>
          <div>
            <div className="text-sm font-medium">Om Mengshetti</div>
            <div className="text-[12px] text-white/60">Quant • Data • Systems</div>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <a className="text-sm px-3 py-1 rounded-md hover:bg-white/4 transition" href="#projects">Work</a>
          <a className="text-sm px-3 py-1 rounded-md hover:bg-white/4 transition" href="#skills">Skills</a>
          <a className="text-sm px-3 py-1 rounded-md hover:bg-white/4 transition" href="#about">About</a>
          <a className="text-sm px-3 py-1 rounded-md bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-medium" href="#contact">Contact</a>
        </nav>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* HERO */}
        {/* <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
          <div>
            <motion.h1 initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.05}} className="text-4xl md:text-6xl font-extrabold leading-tight">Building systems that think, scale, and last.</motion.h1>
            <motion.p initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.15}} className="mt-6 text-lg text-white/70">I design and build resilient ETL pipelines, event-driven systems, and analytics platforms that turn raw data into reliable products.</motion.p>

            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.25}} className="mt-8 flex items-center gap-3">
              <a href="#projects" className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-semibold">See my work</a>
              <a href="#contact" className="px-4 py-3 rounded-xl border border-white/6">Get in touch</a>
            </motion.div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-white/3 rounded-2xl">
                <div className="text-xs">Reports / Day</div>
                <div className="text-2xl font-semibold mt-1">3,200+</div>
              </div>
              <div className="p-3 bg-white/3 rounded-2xl">
                <div className="text-xs">Years Experience</div>
                <div className="text-2xl font-semibold mt-1">6+</div>
              </div>
              <div className="p-3 bg-white/3 rounded-2xl">
                <div className="text-xs">Projects</div>
                <div className="text-2xl font-semibold mt-1">20+</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.div initial={{scale:0.95, opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.6}} className="p-6 rounded-3xl bg-gradient-to-br from-white/3 to-white/4 border border-white/6 shadow-2xl">
              <div className="h-56 rounded-xl bg-gradient-to-br from-[#061026] to-[#09122a] p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">Live Demo</div>
                  <div className="text-xs text-white/60">Prototype</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">🐍</div>
                  <div>
                    <div className="text-sm font-medium">TCA Runner</div>
                    <div className="text-xs text-white/60">ETL / Scheduler / Multiprocessing</div>
                  </div>
                </div>
                <div className="text-[13px] text-white/60">Click a project to explore details and view architecture diagrams.</div>
              </div>
            </motion.div>

            <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 blur-xl opacity-30" />
          </div>
        </section> */}
        <Analytics />
        <AnimatePresence mode="wait">
        <section
            key="hero-section"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12"
        >
            <div>
            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ delay: 0.05 }}
                className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
                Building systems that think, scale, and last.
            </motion.h1>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ delay: 0.15 }}
                className="mt-6 text-lg text-white/70"
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
                >
                See my work
                </a>
                <a
                href="#contact"
                className="px-4 py-3 rounded-xl border border-white/6"
                >
                Get in touch
                </a>
            </motion.div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-white/3 rounded-2xl">
                <div className="text-xs">Reports / Day</div>
                <div className="text-2xl font-semibold mt-1">3,200+</div>
                </div>
                <div className="p-3 bg-white/3 rounded-2xl">
                <div className="text-xs">Years Experience</div>
                <div className="text-2xl font-semibold mt-1">6+</div>
                </div>
                <div className="p-3 bg-white/3 rounded-2xl">
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
                className="p-6 rounded-3xl bg-gradient-to-br from-white/3 to-white/4 border border-white/6 shadow-2xl"
            >
                <div className="h-56 rounded-xl bg-gradient-to-br from-[#061026] to-[#09122a] p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-white">Live Demo</div>
                    <div className="text-xs text-white/80">Prototype</div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">🐍</div>
                    <div>
                    <div className="text-sm font-medium">TCA Runner</div>
                    <div className="text-xs text-white/60">
                        ETL / Scheduler / Multiprocessing
                    </div>
                    </div>
                </div>
                <div className="text-[13px] text-white/60">
                    Click a project to explore details and view architecture diagrams.
                </div>
                </div>
            </motion.div>

            <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 blur-xl opacity-30" />
            </div>
        </section>
        </AnimatePresence>


        {/* SKILLS (moved to sections/Skills.tsx in new layout) */}

        {/* PROJECTS (moved to sections/Projects.tsx in new layout) */}

        {/* ABOUT (moved to sections/About.tsx in new layout) */}

        {/* CONTACT (moved to sections/Contact.tsx in new layout) */}
      </main>
      <footer className="py-8 border-t border-white/6 text-white/60 text-sm text-center">© {new Date().getFullYear()} Om Mengshetti — Built with React, Tailwind & Framer Motion</footer>
    </div>
  )
}
