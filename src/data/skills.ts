import type { SkillGroup } from '../types/portfolio'

export const skillGroups: SkillGroup[] = [
  {
    group: 'Languages',
    items: ['Python', 'SQL', 'C++', 'R', 'TypeScript', 'Bash'],
  },
  {
    group: 'Quant & Analytics',
    items: [
      'Transaction Cost Analysis',
      'Market Impact Models',
      'IS / Arrival / VWAP Benchmarking',
      'Order-Book Microstructure',
      'Pandas',
      'NumPy',
      'SciPy',
      'Polars',
    ],
  },
  {
    group: 'Data Engineering',
    items: ['ETL at Scale', 'Dagster', 'Kafka', 'Snowflake', 'ControlM', 'Data Modeling'],
  },
  {
    group: 'GenAI & LLMs',
    items: [
      'RAG Pipelines',
      'Vector Search (FAISS)',
      'Embeddings',
      'Agentic Workflows (Claude)',
      'LangChain',
      'Prompt Engineering',
    ],
  },
  {
    group: 'Backend & APIs',
    items: ['FastAPI', 'Django', 'REST', 'GraphQL', 'Microservices', 'WebSockets'],
  },
  {
    group: 'Databases',
    items: ['PostgreSQL', 'TimescaleDB', 'Redis', 'MS SQL Server', 'MongoDB', 'MySQL'],
  },
  {
    group: 'Infra & DevOps',
    items: ['Docker', 'CI/CD', 'GCP', 'Vertex AI', 'AWS', 'Grafana', 'Prometheus', 'Git'],
  },
]
