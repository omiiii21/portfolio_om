import type { Project } from '../types/portfolio'

export const projects: Project[] = [
  {
    title: 'TCA Report Runner (ETL & Scheduler)',
    blurb: 'High-throughput ETL/Report generation system with multiprocessing, centralized logging, and robust retry semantics.',
    badges: ['Python', 'Multiprocessing', 'RabbitMQ'],
    tag: 'Open-source style',
    link: '#projects',
    icon: '⚙️',
  },
  {
    title: 'Realtime Event Ingestion',
    blurb: 'Event-driven microservices architecture using FastAPI + RabbitMQ to deliver near-real-time processing pipelines.',
    badges: ['FastAPI', 'Docker', 'Kafka/RabbitMQ'],
    tag: 'Design + Code',
    link: '#projects',
    icon: '📡',
  },
  {
    title: 'Large-scale Data ETL (R -> Python migration)',
    blurb: 'Converted and optimized legacy R ETL scripts to Python with multiprocessing and better observability and SFTP integrations.',
    badges: ['R', 'Python', 'SFTP'],
    tag: 'Migration',
    link: '#projects',
    icon: '🔁',
  },
]


