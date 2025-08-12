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

import React from 'react'
import { type ReactNode } from "react";
import { motion, AnimatePresence } from 'framer-motion'
import { Analytics } from "@vercel/analytics/next"


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


interface SkillPillProps {
  name: string;
  level: number;
}

const SkillPill: React.FC<SkillPillProps> = ({ name, level }) => (
  <div className="flex flex-col items-center space-y-2 p-3 bg-white/5 backdrop-blur rounded-2xl border border-white/5 shadow-sm">
    <div className="text-sm font-medium">{name}</div>
    <div className="w-24 h-4 bg-white/6 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500"
      />
    </div>
    <div className="text-[11px] text-white/60">{level}%</div>
  </div>
);

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


interface Project {
  link: string;
  icon: ReactNode;
  title: string;
  tag: string;
  blurb: string;
  badges: string[];
}

interface ProjectCardProps {
  p: Project;
}

const ProjectCard = ({ p }: ProjectCardProps) => (
  <motion.a
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.99 }}
    className="group block bg-gradient-to-br from-white/3 to-white/2 border border-white/5 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-transform duration-200"
    href={p.link}
    target="_blank"
    rel="noreferrer"
  >
    <div className="flex items-start gap-4">
      <div className="w-14 h-14 rounded-lg bg-white/5 flex items-center justify-center text-2xl">
        {p.icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">{p.title}</h3>
          <div className="text-xs px-2 py-1 rounded-md bg-white/6">{p.tag}</div>
        </div>
        <p className="mt-2 text-sm text-white/70">{p.blurb}</p>
        <div className="mt-3 flex gap-2 text-[12px] text-white/60">
          {p.badges.map((b, i) => (
            <div key={i} className="px-2 py-1 bg-white/3 rounded-md">
              {b}
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.a>
);



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
  const projects = [
    {
      title: 'TCA Report Runner (ETL & Scheduler)',
      blurb: 'High-throughput ETL/Report generation system with multiprocessing, centralized logging, and robust retry semantics.',
      badges: ['Python','Multiprocessing','RabbitMQ'],
      tag: 'Open-source style',
      link: '#projects',
      icon: '⚙️'
    },{
      title: 'Realtime Event Ingestion',
      blurb: 'Event-driven microservices architecture using FastAPI + RabbitMQ to deliver near-real-time processing pipelines.',
      badges: ['FastAPI','Docker','Kafka/RabbitMQ'],
      tag: 'Design + Code',
      link: '#projects',
      icon: '📡'
    },{
      title: 'Large-scale Data ETL (R -> Python migration)',
      blurb: 'Converted and optimized legacy R ETL scripts to Python with multiprocessing and better observability and SFTP integrations.',
      badges: ['R','Python','SFTP'],
      tag: 'Migration',
      link: '#projects',
      icon: '🔁'
    }
  ]

  const skills = [
    {name:'Python', level:92}, {name:'Data Engineering', level:90}, {name:'APIs (FastAPI)', level:86}, {name:'Spark / Hadoop', level:72}, {name:'SQL', level:88}, {name:'R', level:75}, {name:'Docker', level:80}
  ]

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
                    <div className="text-sm font-semibold">Live Demo</div>
                    <div className="text-xs text-white/60">Prototype</div>
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


        {/* SKILLS */}
        <section id="skills" className="mt-14">
          <motion.h2 initial={{x:-20,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:true}} className="text-2xl font-semibold">Skills & Tech Stack</motion.h2>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((s, i) => <SkillPill key={i} name={s.name} level={s.level} />)}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-14">
          <motion.h2 initial={{x:-20,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:true}} className="text-2xl font-semibold">Selected Projects</motion.h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p,i) => <ProjectCard key={i} p={p} />)}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-14">
          <motion.h2 initial={{x:-20,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:true}} className="text-2xl font-semibold">About</motion.h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white/3 rounded-2xl p-6">
              <p className="text-white/80">I build robust data systems and pipelines. My focus is on production-grade engineering — observability, fault-tolerance, and maintainable code. I enjoy working on complex engineering problems involving data: distributed ETL, streaming ingestion, scheduling and orchestration, and scalable analytics platforms.</p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="text-xs text-white/60">Core Strength</div>
                  <div className="font-medium mt-1">Systems design & data pipelines</div>
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="text-xs text-white/60">Currently learning</div>
                  <div className="font-medium mt-1">Advanced Spark tuning & cloud infra</div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold">Career Timeline</h4>
                <ol className="mt-3 space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full bg-indigo-400 mt-2" />
                    <div>
                      <div className="text-sm font-medium">Senior Quant Engineer — Current</div>
                      <div className="text-xs text-white/60">Architected and maintained ETL systems, report automation, and data platform integrations.</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full bg-indigo-400 mt-2" />
                    <div>
                      <div className="text-sm font-medium">Quant Engineer — Previous</div>
                      <div className="text-xs text-white/60">Worked on analytics pipelines and algorithmic data feeds.</div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            <aside className="p-6 rounded-2xl bg-white/4">
              <h4 className="font-semibold">Contact</h4>
              <div className="mt-3 text-sm text-white/70">Email: <a className="underline" href="mailto:omengshetti@gmail.com ">omengshetti@gmail.com </a></div>
              <div className="mt-3 flex gap-2 text-xs">
                <a className="px-3 py-2 rounded-md bg-white/6" href="https://github.com/omiiii21">GitHub</a>
                <a className="px-3 py-2 rounded-md bg-white/6" href="https://www.linkedin.com/in/ommengshetti/">LinkedIn</a>
              </div>

              <div className="mt-6">
                <h5 className="text-sm font-medium">Download CV</h5>
                <a className="mt-2 inline-block px-4 py-2 rounded-md bg-gradient-to-r from-cyan-400 to-indigo-500 text-black" href="#">PDF</a>
              </div>
            </aside>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-16 mb-24">
          <motion.h2 initial={{x:-20,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:true}} className="text-2xl font-semibold">Say hello</motion.h2>
          <motion.form initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <input className="md:col-span-2 p-4 rounded-xl bg-white/5 border border-white/6" placeholder="Your email" />
            <textarea className="md:col-span-2 p-4 rounded-xl bg-white/5 border border-white/6 h-36" placeholder="What’s up?" />
            <div className="flex items-center gap-3">
              <button type="submit" className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-semibold">Send</button>
              <div className="text-sm text-white/60">Or email directly at <a className="underline" href="mailto:you@domain.com">you@domain.com</a></div>
            </div>
          </motion.form>
        </section>
      </main>

      <footer className="py-8 border-t border-white/6 text-white/60 text-sm text-center">© {new Date().getFullYear()} Om Mengshetti — Built with React, Tailwind & Framer Motion</footer>
    </div>
  )
}
