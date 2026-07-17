import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const LOG_ROWS = [
  { t: '09:30:01', k: 'INGEST', v: 'TAQ ticks — 2.1B rows', delta: null },
  { t: '09:30:04', k: 'CURVES', v: 'liquidity · 8,000 symbols', delta: null },
  { t: '09:31:12', k: 'IMPACT', v: 'arrival slippage vs est', delta: '−3.2 bps' },
  { t: '09:31:15', k: 'ALLOC', v: 'bandit weights rebalanced', delta: null },
  { t: '09:31:20', k: 'TCA', v: 'client report shipped', delta: null },
]

const SPARK_POINTS = '0,26 12,22 24,24 36,18 48,20 60,13 72,15 84,9 96,12 108,6 120,8 132,3'

/**
 * Decorative "execution monitor" — a stylized nod to the systems Om builds.
 * Purely illustrative, hidden from screen readers.
 */
const Blotter: React.FC = () => {
  const reduce = useReducedMotion()

  return (
    <div aria-hidden="true" className="relative">
      <div className="absolute -inset-px rounded-2xl bg-accent/20 blur-2xl opacity-40" />
      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.7, ease: [0.21, 0.65, 0.25, 1] }}
        className="relative overflow-hidden rounded-2xl border border-line bg-panel shadow-2xl shadow-black/20"
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-down/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-up/70" />
          <span className="ml-3 font-mono text-[11px] tracking-wider text-muted">
            om@bestex — execution monitor
          </span>
        </div>

        {/* Log rows */}
        <motion.div
          className="px-4 py-4 font-mono text-[12px] leading-7"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.18, delayChildren: 0.8 } }, hidden: {} }}
        >
          {LOG_ROWS.map((row) => (
            <motion.div
              key={row.t + row.k}
              variants={{
                hidden: { opacity: 0, x: reduce ? 0 : -8 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
              }}
              className="flex items-baseline gap-3 whitespace-nowrap"
            >
              <span className="text-muted/70 tabular-nums">{row.t}</span>
              <span className="w-16 shrink-0 text-accent">{row.k}</span>
              <span className="truncate text-ink/90">{row.v}</span>
              {row.delta && <span className="ml-auto pl-2 font-semibold text-up tabular-nums">{row.delta}</span>}
            </motion.div>
          ))}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-accent">▸</span>
            <span className="caret inline-block h-4 w-2 bg-accent/80" />
          </div>
        </motion.div>

        {/* Footer: sparkline + status */}
        <div className="flex items-center justify-between border-t border-line px-4 py-3">
          <svg width="132" height="30" viewBox="0 0 132 30" fill="none" className="text-accent">
            <polyline
              points={SPARK_POINTS}
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.9"
            />
          </svg>
          <span className="flex items-center gap-2 font-mono text-[11px] tracking-wider text-muted">
            <span className="live-dot h-2 w-2 rounded-full bg-up" />
            ALL SYSTEMS NOMINAL
          </span>
        </div>
      </motion.div>
    </div>
  )
}

export default Blotter
