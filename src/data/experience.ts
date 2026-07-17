import type { Role } from '../types/portfolio'

export const roles: Role[] = [
  {
    company: 'BestEx Research',
    title: 'Senior Quantitative Engineer',
    period: 'Jul 2024 — Present',
    summary:
      'Execution analytics and market impact modeling for institutional trading — owning systems end-to-end, from research to the client conversation.',
    highlights: [
      'Built a Transaction Cost Analytics platform processing billions of TAQ records per month, combining market data with client trades for execution benchmarking — drove a 2× increase in platform usage.',
      'Shipped a SaaS platform for institutional clients to predict execution costs (IS, Arrival) and evaluate model portfolios using market impact models, exposed via a low-latency, high-concurrency API with SLA-backed observability.',
      'Developed an ML-driven volume curve framework covering 8,000+ US stocks — dedicated curves for stable symbols, k-means clustering for multi-regime names, standardized fallbacks for unstable ones.',
      'Orchestrated 4 Dagster ETL pipelines with country × date partitioning computing volume, volatility, spread, depth, and liquidity curves — augmented with a headless Claude debugging agent that does root-cause analysis and posts fix suggestions to Slack.',
      'Designed a multi-arm bandit execution strategy allocator for equities and futures, normalizing VWAP and Arrival costs with impact models to remove order-difficulty bias and rebalancing weights via z-score comparison.',
      'Built and tuned a RAG pipeline over internal trading models so sales teams can query model logic directly — cut turnaround time by 40%.',
      'Migrated legacy TCA and analytics systems from SVN to Bitbucket with CI/CD and automated testing — 3× faster release cycles.',
      'Primary point of contact for institutional clients on TCA reporting: 70+ custom and ad hoc requests delivered across 5 clients.',
    ],
    tags: ['Python', 'SQL', 'Dagster', 'FastAPI', 'Market Impact', 'TCA', 'RAG', 'CI/CD'],
  },
  {
    company: 'AllianceBernstein',
    title: 'Software Developer Intern',
    period: 'Jan 2024 — Jun 2024',
    summary:
      'Data platform work for a global asset manager.',
    highlights: [
      'Standardized heterogeneous client data with custom ETL pipelines, integrating 1M+ records into a centralized warehouse for downstream analytics.',
      'Built 3 monitoring dashboards for directory and file usage with scheduled ControlM alerting for early issue detection.',
    ],
    tags: ['Python', 'ETL', 'ControlM', 'SQL'],
  },
]

export const education = {
  school: 'Symbiosis Institute of Technology, SIU',
  degree: 'B.Tech, Computer Science & Engineering',
  period: '2020 — 2024',
  gpa: '8.5 / 10',
}

export const competitions = [
  {
    name: 'CME Group Trading Challenge',
    result: '+$35K P&L in 5 days · Rank 188 of 7,000+ teams',
  },
  {
    name: 'IMC Trading Challenge (Prosperity)',
    result: 'Top 7% globally',
  },
]
