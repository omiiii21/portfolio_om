import type { Project } from '../types/portfolio'

export const projects: Project[] = [
  {
    title: 'You Betcha',
    blurb:
      'Developed sports betting platform with memory-first architecture and asynchronous processing. Implemented custom order book with heapq-based priority queues achieving ~50ms per match operation. Built WebSocket market data distribution with Redis pub/sub and a real-time risk engine.',
    badges: ['Python', 'Async', 'FastAPI', 'Redis', 'Kafka', 'PostgreSQL', 'Docker', 'WebSockets'],
    tag: 'Betting Platform',
    link: '#projects',
    icon: '🎯',
    accentColor: 'blue',
  },
  {
    title: 'StockSense',
    blurb:
      'Researched market mood index using factors like India VIX, OI, Volume, theta decay. Improved win rate from 42.8% → 80.42%. Built indicator-driven strategies yielding ~46.34% average gross profit across live and historical data; added price-action analysis via chart patterns.',
    badges: ['TradingView', 'PineScript', 'Streak', 'NSE OI', 'Excel', 'Matplotlib'],
    tag: 'Trading Automation',
    link: '#projects',
    icon: '📈',
    accentColor: 'green',
  },
  {
    title: 'Finfit',
    blurb:
      'Prototype of a gamified expense tracking and financial literacy app for young adults. Daily quizzes, customizable avatars, and intuitive tracking to encourage better saving and spending habits.',
    badges: ['Figma', 'Python', 'Django REST', 'Excel'],
    tag: 'Gamified Personal Finance',
    link: '#projects',
    icon: '🧩',
    accentColor: 'purple',
  },
]


