import React from 'react'
import { ticker } from '../data/metrics'

const Row: React.FC<{ ariaHidden?: boolean }> = ({ ariaHidden }) => (
  <div className="flex shrink-0 items-center" aria-hidden={ariaHidden || undefined}>
    {ticker.map((item) => (
      <span
        key={item.label}
        className="flex items-center gap-2 whitespace-nowrap px-6 py-2.5 font-mono text-[11px] tracking-wider"
      >
        <span className="text-muted">{item.label}</span>
        <span className="font-semibold text-accent tabular-nums">{item.value}</span>
        <span className="pl-4 text-line-strong select-none" aria-hidden="true">
          ◆
        </span>
      </span>
    ))}
  </div>
)

/**
 * Market-data style marquee of career numbers. Pauses on hover; static under
 * reduced motion. Decorative: every number also appears in a section below,
 * so it is hidden from screen readers entirely.
 */
const Ticker: React.FC = () => {
  return (
    <div
      className="ticker relative overflow-hidden border-b border-line bg-panel/70 backdrop-blur"
      aria-hidden="true"
    >
      <div className="ticker-track flex w-max">
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  )
}

export default Ticker
