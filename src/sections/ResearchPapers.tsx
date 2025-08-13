import React from 'react'
import { motion } from 'framer-motion'

const ResearchPapers: React.FC = () => {
  return (
    <section id="research-papers" className="mt-14" aria-labelledby="research-heading">
      <motion.h2
        id="research-heading"
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold"
      >
        Research Papers
      </motion.h2>

      <div className="mt-6 flex flex-col gap-8">
        {/* Paper 1 */}
        <div className="group relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/3 dark:to-white/4 border-l-4 border-blue-500 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 p-6">
          {/* hover fill overlay (desktop) */}
          <div className="pointer-events-none absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out bg-gradient-to-l from-blue-500/20 to-transparent dark:from-blue-400/15" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            🎓 Synergizing quantitative finance models for Algorithmic trading strategies
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-400/20 dark:text-blue-300 text-xs font-medium rounded-full">
              Q1 journal | Publisher - ELSEVIER [2024]
            </span>
            {/* mobile link */}
            <a
              href="https://www.sciencedirect.com/science/article/pii/S2199853124001288?via%3Dihub"
              target="_blank"
              rel="noreferrer"
              className="md:hidden text-xs font-medium underline text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200"
              aria-label="View paper on ScienceDirect"
            >
              View paper ↗
            </a>
          </div>
          <p className="mt-4 text-gray-600 dark:text-white/70 leading-relaxed">
            Conducted an in-depth research study on Algorithmic Trading in NSE, India, utilizing a multi-indicator strategy combining RSI, VWAP, EMA & MACD, which resulted in 80% win trade rate, thereby enhancing the precision of trading signals & algorithmic trading decisions.
          </p>
          {/* desktop icon link appears on hover */}
          <a
            href="https://www.sciencedirect.com/science/article/pii/S2199853124001288?via%3Dihub"
            target="_blank"
            rel="noreferrer noopener"
            className="hidden md:flex items-center justify-center absolute top-4 right-4 w-8 h-8 rounded-full bg-blue-500 text-white dark:bg-blue-400/90 dark:text-black translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
            aria-label="Open paper in new tab"
            title="Open paper"
          >
            ↗
          </a>
        </div>

        {/* Paper 2 */}
        <div className="group relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/3 dark:to-white/4 border-l-4 border-green-500 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 p-6">
          <div className="pointer-events-none absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out bg-gradient-to-l from-green-500/20 to-transparent dark:from-green-400/15" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            📊 Technical Analysis of Stock Market Trends using LSTM for Price Prognosis
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 dark:bg-green-400/20 dark:text-green-300 text-xs font-medium rounded-full">
              Publisher - IEEE [2023]
            </span>
            <a
              href="https://ieeexplore.ieee.org/abstract/document/10304934"
              target="_blank"
              rel="noreferrer"
              className="md:hidden text-xs font-medium underline text-green-700 hover:text-green-900 dark:text-green-300 dark:hover:text-green-200"
              aria-label="View paper on IEEE Xplore"
            >
              View paper ↗
            </a>
          </div>
          <p className="mt-4 text-gray-600 dark:text-white/70 leading-relaxed">
            Leveraging LSTM neural networks, my research paper demonstrates an approach to stock market analysis that outperforms traditional techniques, significantly enhancing forecasting precision and empowering traders and investors in their decision-making.
          </p>
          <a
            href="https://ieeexplore.ieee.org/abstract/document/10304934"
            target="_blank"
            rel="noreferrer noopener"
            className="hidden md:flex items-center justify-center absolute top-4 right-4 w-8 h-8 rounded-full bg-green-500 text-white dark:bg-green-400/90 dark:text-black translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
            aria-label="Open paper in new tab"
            title="Open paper"
          >
            ↗
          </a>
        </div>

        {/* Paper 3 */}
        <div className="group relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/3 dark:to-white/4 border-l-4 border-purple-500 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 p-6">
          <div className="pointer-events-none absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out bg-gradient-to-l from-purple-500/20 to-transparent dark:from-purple-400/15" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            📈 Apache Spark for Analysis of EHR: A Case Study of Diabetes Management
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-400/20 dark:text-purple-300 text-xs font-medium rounded-full">
              Publisher - IIETA (Revue AI) [2023]
            </span>
            <a
              href="https://www.iieta.org/journals/ria/paper/10.18280/ria.370616"
              target="_blank"
              rel="noreferrer"
              className="md:hidden text-xs font-medium underline text-purple-700 hover:text-purple-900 dark:text-purple-300 dark:hover:text-purple-200"
              aria-label="View paper on IIETA"
            >
              View paper ↗
            </a>
          </div>
          <p className="mt-4 text-gray-600 dark:text-white/70 leading-relaxed">
            Integrated Apache Spark with Machine Learning for advanced diabetes-focused EHR analysis, leveraging distributed processing and in-memory data handling for optimized performance, scalability, and data-driven healthcare decision-making.
          </p>
          <a
            href="https://www.iieta.org/journals/ria/paper/10.18280/ria.370616"
            target="_blank"
            rel="noreferrer noopener"
            className="hidden md:flex items-center justify-center absolute top-4 right-4 w-8 h-8 rounded-full bg-purple-500 text-white dark:bg-purple-400/90 dark:text-black translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
            aria-label="Open paper in new tab"
            title="Open paper"
          >
            ↗
          </a>
        </div>
      </div>
    </section>
  )
}

export default ResearchPapers


