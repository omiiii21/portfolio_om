import type { ReactNode } from 'react'

export type Project = {
  link: string
  icon: ReactNode
  title: string
  tag: string
  blurb: string
  badges: string[]
}

export type Skill = {
  name: string
  level: number
}


