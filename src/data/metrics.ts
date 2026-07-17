import type { Metric, TickerItem } from '../types/portfolio'

/** Scrolling proof strip under the nav. All numbers come from the resume. */
export const ticker: TickerItem[] = [
  { label: 'TAQ RECORDS / MO', value: '2B+' },
  { label: 'US SYMBOLS MODELED', value: '8,000+' },
  { label: 'PUBLISHED PAPERS', value: '3' },
  { label: 'CME CHALLENGE P&L', value: '+$35K' },
  { label: 'STRATEGY WIN RATE', value: '80.4%' },
  { label: 'RELEASE CYCLE', value: '3× FASTER' },
  { label: 'RAG QUERY TAT', value: '−40%' },
  { label: 'CLIENT REQUESTS SHIPPED', value: '70+' },
  { label: 'FALSE-POSITIVE ALERTS', value: '−90%' },
]

/** Hero stat row — animated count-ups. */
export const heroStats: Metric[] = [
  { value: 2, suffix: 'B+', label: 'TAQ records processed monthly' },
  { value: 8000, suffix: '+', label: 'US symbols with liquidity models' },
  { value: 3, label: 'peer-reviewed publications' },
  { value: 70, suffix: '+', label: 'client requests delivered' },
]
