import type { Project } from '../types/portfolio'

// TODO(Om): point `link` at the actual GitHub repos / live demos.
export const projects: Project[] = [
  {
    title: 'You Betcha',
    tag: 'Real-time betting exchange',
    blurb:
      'Sports betting platform with a memory-first architecture: custom order book on heapq priority queues, WebSocket market-data distribution over Redis pub/sub, and a real-time risk engine — all fully asynchronous.',
    impact: { value: '~50ms', label: 'per match operation' },
    stack: ['Python', 'FastAPI', 'Redis', 'Kafka', 'PostgreSQL', 'WebSockets', 'Docker'],
    link: 'https://github.com/omiiii21',
    icon: 'orderbook',
  },
  {
    title: 'Crypto Microstructure Surveillance',
    tag: 'Market anomaly detection',
    blurb:
      'Surveillance platform monitoring bid-ask spreads, order-book depth, and basis drift across crypto derivatives venues. Dual-condition alerting (threshold + z-score) with plug-and-play exchange adapters and automatic gap recovery.',
    impact: { value: '−90%', label: 'false-positive alerts vs static thresholds' },
    stack: ['Python 3.12', 'FastAPI', 'WebSocket', 'Redis', 'TimescaleDB', 'Plotly.js', 'Docker'],
    link: 'https://github.com/omiiii21',
    icon: 'radar',
  },
  {
    title: 'StockSense',
    tag: 'Trade automation research',
    blurb:
      'Market mood index research on India VIX, open interest, and volume, layered with MACD / RSI / VWAP signal logic. Raised win-trade accuracy from 42.8% to 80.42% with ~46% average gross profit on historical data.',
    impact: { value: '80.4%', label: 'win rate, up from 42.8%' },
    stack: ['TradingView', 'PineScript', 'Streak', 'NSE OI', 'Matplotlib'],
    link: 'https://github.com/omiiii21',
    icon: 'trending',
  },
]
