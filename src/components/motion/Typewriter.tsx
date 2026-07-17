import React, { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

type TypewriterProps = {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  /** How long a completed phrase stays on screen (ms) */
  holdTime?: number
  className?: string
}

/** Cycles through phrases with a type / hold / delete loop and a blinking caret. */
const Typewriter: React.FC<TypewriterProps> = ({
  phrases,
  typingSpeed = 55,
  deletingSpeed = 28,
  holdTime = 2100,
  className,
}) => {
  const reduce = useReducedMotion()
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [text, setText] = useState(reduce ? phrases[0] : '')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduce) return
    const current = phrases[phraseIndex]

    let timeout: number
    if (!deleting && text === current) {
      timeout = window.setTimeout(() => setDeleting(true), holdTime)
    } else if (deleting && text === '') {
      setDeleting(false)
      setPhraseIndex((i) => (i + 1) % phrases.length)
    } else {
      timeout = window.setTimeout(
        () => setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)),
        deleting ? deletingSpeed : typingSpeed,
      )
    }
    return () => window.clearTimeout(timeout)
  }, [text, deleting, phraseIndex, phrases, typingSpeed, deletingSpeed, holdTime, reduce])

  return (
    <span className={className}>
      {text}
      <span aria-hidden className="typewriter-caret ml-0.5 inline-block w-[2px] h-[1.05em] align-[-0.15em] bg-cyan-500 dark:bg-cyan-400" />
    </span>
  )
}

export default Typewriter
