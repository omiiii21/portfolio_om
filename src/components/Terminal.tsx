import React, { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

type Line =
  | { kind: 'cmd'; text: string }
  | { kind: 'out'; text: string; tone?: 'ok' | 'info' | 'live' }

const SCRIPT: Line[] = [
  { kind: 'cmd', text: 'python -m tca_runner --mode live' },
  { kind: 'out', text: '✓ market data loaded · 1.2M rows in 3.4s', tone: 'ok' },
  { kind: 'out', text: '✓ 8 workers spawned · queue depth 0', tone: 'ok' },
  { kind: 'out', text: '✓ 3,200+ reports scheduled for today', tone: 'ok' },
  { kind: 'cmd', text: 'tail -f pipeline.log' },
  { kind: 'out', text: '● ETL healthy · p99 latency 42ms · 0 retries', tone: 'live' },
]

const TYPE_MS = 34
const OUT_DELAY_MS = 380
const CMD_PAUSE_MS = 500
const LOOP_HOLD_MS = 4200

const toneClass = (tone?: 'ok' | 'info' | 'live') =>
  tone === 'ok' ? 'text-emerald-400' : tone === 'live' ? 'text-cyan-300' : 'text-slate-300'

/**
 * Self-typing terminal that replays a small "day in the life of the
 * pipeline" session on loop. Command lines are typed character by
 * character; output lines pop in after a beat.
 */
const Terminal: React.FC = () => {
  const reduce = useReducedMotion()
  const [lineIndex, setLineIndex] = useState(reduce ? SCRIPT.length : 0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (reduce) return

    let timeout: number
    if (lineIndex >= SCRIPT.length) {
      // Hold the finished session on screen, then replay
      timeout = window.setTimeout(() => {
        setLineIndex(0)
        setCharIndex(0)
      }, LOOP_HOLD_MS)
      return () => window.clearTimeout(timeout)
    }

    const line = SCRIPT[lineIndex]
    if (line.kind === 'cmd') {
      if (charIndex < line.text.length) {
        timeout = window.setTimeout(() => setCharIndex((c) => c + 1), TYPE_MS)
      } else {
        timeout = window.setTimeout(() => {
          setLineIndex((i) => i + 1)
          setCharIndex(0)
        }, CMD_PAUSE_MS)
      }
    } else {
      timeout = window.setTimeout(() => {
        setLineIndex((i) => i + 1)
        setCharIndex(0)
      }, OUT_DELAY_MS)
    }
    return () => window.clearTimeout(timeout)
  }, [lineIndex, charIndex, reduce])

  const visible = SCRIPT.slice(0, lineIndex)
  const typing = !reduce && lineIndex < SCRIPT.length ? SCRIPT[lineIndex] : null

  return (
    <div className="rounded-xl overflow-hidden border border-white/10 bg-[#070d1d] shadow-2xl font-mono text-[13px] leading-6">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[.04] border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[11px] text-white/40 tracking-wide">om@quant ~ pipeline</span>
        <span className="ml-auto flex items-center gap-1.5 text-[10px] text-emerald-400/90">
          <span className="live-dot relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-400" />
          LIVE
        </span>
      </div>

      {/* Session body — fixed height so the loop never reflows the page */}
      <div className="px-4 py-3 h-44 text-slate-300">
        {visible.map((line, i) =>
          line.kind === 'cmd' ? (
            <div key={i}>
              <span className="text-cyan-400">$ </span>
              <span className="text-slate-100">{line.text}</span>
            </div>
          ) : (
            <div key={i} className={toneClass(line.tone)}>
              {line.tone === 'live' ? (
                <>
                  <span className="live-dot relative inline-flex w-2 h-2 rounded-full bg-cyan-400 mr-2 align-middle" />
                  {line.text.replace('● ', '')}
                </>
              ) : (
                line.text
              )}
            </div>
          ),
        )}

        {typing && typing.kind === 'cmd' && (
          <div>
            <span className="text-cyan-400">$ </span>
            <span className="text-slate-100">{typing.text.slice(0, charIndex)}</span>
            <span className="typewriter-caret inline-block w-[7px] h-[1.05em] align-[-0.15em] bg-cyan-400" />
          </div>
        )}
        {(!typing || typing.kind !== 'cmd') && lineIndex >= SCRIPT.length && (
          <div>
            <span className="text-cyan-400">$ </span>
            <span className="typewriter-caret inline-block w-[7px] h-[1.05em] align-[-0.15em] bg-cyan-400" />
          </div>
        )}
      </div>
    </div>
  )
}

export default Terminal
