import React from 'react'
import Reveal from './motion/Reveal'

type SectionHeadingProps = {
  index: string
  kicker: string
  title: string
  description?: string
  id?: string
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ index, kicker, title, description, id }) => {
  return (
    <Reveal>
      <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
        <span aria-hidden="true">{index} / </span>
        {kicker}
      </p>
      <h2 id={id} className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink">
        {title}
      </h2>
      {description && <p className="mt-4 max-w-2xl text-muted leading-relaxed">{description}</p>}
    </Reveal>
  )
}

export default SectionHeading
