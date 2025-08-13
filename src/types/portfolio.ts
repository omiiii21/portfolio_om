import type { ReactNode } from 'react'

export type Project = {
  link: string
  icon: ReactNode
  title: string
  tag: string
  blurb: string
  badges: string[]
  accentColor?: 'blue' | 'green' | 'purple'
}

export type Skill = {
  name: string
  level: number
}


