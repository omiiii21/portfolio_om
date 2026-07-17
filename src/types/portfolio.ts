export type Metric = {
  value: number
  prefix?: string
  suffix?: string
  label: string
}

export type TickerItem = {
  label: string
  value: string
}

export type Role = {
  company: string
  title: string
  period: string
  location?: string
  summary: string
  highlights: string[]
  tags: string[]
}

export type Project = {
  title: string
  tag: string
  blurb: string
  impact: { value: string; label: string }
  stack: string[]
  link?: string
  icon: 'orderbook' | 'radar' | 'trending'
}

export type Paper = {
  title: string
  venue: string
  year: string
  link: string
  blurb: string
}

export type Recommendation = {
  quote: string
  name: string
  title: string
  relationship: string
  placeholder?: boolean
}

export type SkillGroup = {
  group: string
  items: string[]
}
