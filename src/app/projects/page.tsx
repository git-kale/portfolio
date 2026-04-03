import { Card } from '@/components/shared/Card';
import { Badge } from '@/components/shared/Badge';
import Link from 'next/link';

export const metadata = {
  title: 'Projects | Mahesh Kale',
  description: 'Explore my selected projects and work in backend engineering and systems design.',
};

const projects = [
  {
    title: 'High-Performance Caching System',
    description: 'Built a distributed caching layer handling 100K requests/sec with LRU and LFU eviction policies. Reduced database load by 60% and improved p95 latency by 200ms.',
    tags: ['Golang', 'Redis', 'Architecture'],
    link: '#',
    github: 'https://github.com',
    icon: 'fa-bolt',
  },
  {
    title: 'Microservices Orchestration Platform',
    description: 'Designed and deployed a microservices platform using Kubernetes. Automated service discovery, load balancing, and failover. Reduced deployment time from 30min to 5min.',
    tags: ['Kubernetes', 'Docker', 'DevOps'],
    link: '#',
    github: 'https://github.com',
    icon: 'fa-cube',
  },
  {
    title: 'Real-Time Analytics Engine',
    description: 'Engineered a real-time data processing pipeline using event streaming. Handles 1M+ events per second with sub-second latency using Golang and PostgreSQL.',
    tags: ['Golang', 'PostgreSQL', 'Systems Design'],
    link: '#',
    github: 'https://github.com',
    icon: 'fa-chart-line',
  },
  {
    title: 'API Gateway & Rate Limiter',
    description: 'Developed a robust API gateway with token bucket rate limiting, request queuing, and circuit breaker pattern. Deployed across multiple regions with 99.9% uptime.',
    tags: ['Python', 'Architecture', 'DevOps'],
    link: '#',
    github: 'https://github.com',
    icon: 'fa-network-wired',
  },
  {
    title: 'Database Query Optimizer',
    description: 'Created an intelligent query optimizer that analyzes and rewrites SQL queries. Achieved 5-10x performance improvement on slow queries.',
    tags: ['Python', 'SQL', 'Performance'],
    link: '#',
    github: 'https://github.com',
    icon: 'fa-database',
  },
  {
    title: 'Distributed Tracing System',
    description: 'Implemented a distributed tracing solution for microservices. Visualizes request flow across services with sub-millisecond precision tracing.',
    tags: ['Golang', 'DevOps', 'Observability'],
    link: '#',
    github: 'https://github.com',
    icon: 'fa-sitemap',
  },
];

const badgeVariants = ['cyan', 'indigo', 'pink', 'purple', 'yellow'] as const;

export default function ProjectsPage() {
  return (
    <section className="py-20 px-6 min-h-screen bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-black gradient-text">Projects</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Selected projects showcasing backend engineering, systems design, and DevOps expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Card key={idx} className="h-full flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center">
                  <i className={`fas ${project.icon} text-white text-lg`}></i>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <Badge key={tag} variant={badgeVariants[tagIdx % badgeVariants.length]}>
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Link
                    href={project.link}
                    className="flex-1 py-2 px-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 hover:from-cyan-500/40 hover:to-indigo-500/40 text-cyan-300 font-bold transition text-center text-sm border border-cyan-400/30"
                  >
                    Learn More
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-lg glass text-slate-300 hover:text-cyan-400 transition text-center border border-white/10"
                  >
                    <i className="fab fa-github"></i>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <Card className="inline-block">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Interested in Collaborating?</h2>
              <p className="text-slate-400">Let's discuss how I can help with your backend infrastructure challenges.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-lg font-bold text-white shadow-xl shadow-cyan-500/30 transition btn-glow"
              >
                Start a Conversation
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
