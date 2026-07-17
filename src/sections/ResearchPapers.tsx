import React from 'react'
import { motion } from 'framer-motion'
import AnimatedHeading from '../components/motion/AnimatedHeading'

type Paper = {
  emoji: string
  title: string
  badge: string
  link: string
  linkLabel: string
  blurb: string
  // Full literal class strings so Tailwind keeps them
  borderClass: string
  overlayClass: string
  badgeClass: string
  mobileLinkClass: string
  desktopLinkClass: string
}

const PAPERS: Paper[] = [
  {
    emoji: '🎓',
    title: 'Synergizing quantitative finance models for Algorithmic trading strategies',
    badge: 'Q1 journal | Publisher - ELSEVIER [2024]',
    link: 'https://www.sciencedirect.com/science/article/pii/S2199853124001288?via%3Dihub',
    linkLabel: 'View paper on ScienceDirect',
    blurb:
      'Conducted an in-depth research study on Algorithmic Trading in NSE, India, utilizing a multi-indicator strategy combining RSI, VWAP, EMA & MACD, which resulted in 80% win trade rate, thereby enhancing the precision of trading signals & algorithmic trading decisions.',
    borderClass: 'border-blue-500',
    overlayClass: 'bg-gradient-to-l from-blue-500/20 to-transparent dark:from-blue-400/15',
    badgeClass: 'bg-blue-100 text-blue-800 dark:bg-blue-400/20 dark:text-blue-300',
    mobileLinkClass: 'text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200',
    desktopLinkClass: 'bg-blue-500 text-white dark:bg-blue-400/90 dark:text-black',
  },
  {
    emoji: '📊',
    title: 'Technical Analysis of Stock Market Trends using LSTM for Price Prognosis',
    badge: 'Publisher - IEEE [2023]',
    link: 'https://ieeexplore.ieee.org/abstract/document/10304934',
    linkLabel: 'View paper on IEEE Xplore',
    blurb:
      'Leveraging LSTM neural networks, my research paper demonstrates an approach to stock market analysis that outperforms traditional techniques, significantly enhancing forecasting precision and empowering traders and investors in their decision-making.',
    borderClass: 'border-green-500',
    overlayClass: 'bg-gradient-to-l from-green-500/20 to-transparent dark:from-green-400/15',
    badgeClass: 'bg-green-100 text-green-800 dark:bg-green-400/20 dark:text-green-300',
    mobileLinkClass: 'text-green-700 hover:text-green-900 dark:text-green-300 dark:hover:text-green-200',
    desktopLinkClass: 'bg-green-500 text-white dark:bg-green-400/90 dark:text-black',
  },
  {
    emoji: '📈',
    title: 'Apache Spark for Analysis of EHR: A Case Study of Diabetes Management',
    badge: 'Publisher - IIETA (Revue AI) [2023]',
    link: 'https://www.iieta.org/journals/ria/paper/10.18280/ria.370616',
    linkLabel: 'View paper on IIETA',
    blurb:
      'Integrated Apache Spark with Machine Learning for advanced diabetes-focused EHR analysis, leveraging distributed processing and in-memory data handling for optimized performance, scalability, and data-driven healthcare decision-making.',
    borderClass: 'border-purple-500',
    overlayClass: 'bg-gradient-to-l from-purple-500/20 to-transparent dark:from-purple-400/15',
    badgeClass: 'bg-purple-100 text-purple-800 dark:bg-purple-400/20 dark:text-purple-300',
    mobileLinkClass: 'text-purple-700 hover:text-purple-900 dark:text-purple-300 dark:hover:text-purple-200',
    desktopLinkClass: 'bg-purple-500 text-white dark:bg-purple-400/90 dark:text-black',
  },
]

const ResearchPapers: React.FC = () => {
  return (
    <section id="research-papers" className="mt-20" aria-labelledby="research-heading">
      <AnimatedHeading kicker="03 — Published" id="research-heading">
        Research Papers
      </AnimatedHeading>

      <div className="mt-6 flex flex-col gap-8">
        {PAPERS.map((paper, i) => (
          <motion.div
            key={paper.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -56 : 56, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.21, 0.65, 0.25, 1] }}
            whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
            className={`group relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/3 dark:to-white/4 border-l-4 ${paper.borderClass} rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 p-6`}
          >
            {/* hover fill overlay (desktop) */}
            <div className={`pointer-events-none absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out ${paper.overlayClass}`} />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              {paper.emoji} {paper.title}
            </h3>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className={`inline-block px-3 py-1 ${paper.badgeClass} text-xs font-medium rounded-full`}>
                {paper.badge}
              </span>
              {/* mobile link */}
              <a
                href={paper.link}
                target="_blank"
                rel="noreferrer"
                className={`md:hidden text-xs font-medium underline ${paper.mobileLinkClass}`}
                aria-label={paper.linkLabel}
              >
                View paper ↗
              </a>
            </div>
            <p className="mt-4 text-gray-600 dark:text-white/70 leading-relaxed">{paper.blurb}</p>
            {/* desktop icon link appears on hover */}
            <a
              href={paper.link}
              target="_blank"
              rel="noreferrer noopener"
              className={`hidden md:flex items-center justify-center absolute top-4 right-4 w-8 h-8 rounded-full ${paper.desktopLinkClass} translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300`}
              aria-label="Open paper in new tab"
              title="Open paper"
            >
              ↗
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ResearchPapers
