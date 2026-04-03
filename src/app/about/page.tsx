import { Card } from '@/components/shared/Card';

export const metadata = {
  title: 'About | Mahesh Kale',
  description: 'Learn more about me, my experience, and my journey in backend engineering.',
};

export default function AboutPage() {
  return (
    <section className="py-20 px-6 min-h-screen bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-black gradient-text">About Me</h1>
          <p className="text-lg text-slate-400">Backend engineer, systems architect, and DevOps enthusiast</p>
        </div>

        <div className="space-y-8">
          <Card className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  I'm a backend engineer at IBM with a passion for building scalable systems. With a B.Tech in Computer Science from IIT Roorkee, I've had the opportunity to work with some of the most sophisticated infrastructure in the world.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  My expertise spans Golang, Python, and modern DevOps practices. I'm particularly interested in distributed systems, microservices architecture, and cloud-native technologies. I believe in writing clean, maintainable code and designing systems that scale.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Through this blog, I share my learnings and insights from real-world system design challenges, architectural decisions, and DevOps best practices.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-sm font-bold text-cyan-400 uppercase tracking-widest">Experience</p>
                  <p className="text-slate-300 text-lg font-semibold">5+ years</p>
                  <p className="text-slate-400 text-sm">Backend engineering and systems design</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-bold text-indigo-400 uppercase tracking-widest">Education</p>
                  <p className="text-slate-300 text-lg font-semibold">B.Tech CS</p>
                  <p className="text-slate-400 text-sm">IIT Roorkee (CGPA: 7.4)</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-bold text-pink-400 uppercase tracking-widest">Currently</p>
                  <p className="text-slate-300 text-lg font-semibold">Backend Developer</p>
                  <p className="text-slate-400 text-sm">IBM – Infrastructure & DevOps</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Skills Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black gradient-text">Core Competencies</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Languages</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Golang</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Python</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-indigo-400"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">SQL</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-pink-400"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-indigo-400 mb-4">Technologies</h3>
                <div className="space-y-2">
                  <p className="text-slate-300">
                    <i className="fas fa-check text-cyan-400 mr-2"></i>
                    Docker & Kubernetes
                  </p>
                  <p className="text-slate-300">
                    <i className="fas fa-check text-indigo-400 mr-2"></i>
                    PostgreSQL & Redis
                  </p>
                  <p className="text-slate-300">
                    <i className="fas fa-check text-pink-400 mr-2"></i>
                    CI/CD & Git
                  </p>
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-pink-400 mb-4">Specializations</h3>
                <div className="space-y-2">
                  <p className="text-slate-300">
                    <i className="fas fa-check text-cyan-400 mr-2"></i>
                    Microservices Architecture
                  </p>
                  <p className="text-slate-300">
                    <i className="fas fa-check text-indigo-400 mr-2"></i>
                    Distributed Systems
                  </p>
                  <p className="text-slate-300">
                    <i className="fas fa-check text-pink-400 mr-2"></i>
                    System Design
                  </p>
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-purple-400 mb-4">Tools & Practices</h3>
                <div className="space-y-2">
                  <p className="text-slate-300">
                    <i className="fas fa-check text-cyan-400 mr-2"></i>
                    API Design & REST
                  </p>
                  <p className="text-slate-300">
                    <i className="fas fa-check text-indigo-400 mr-2"></i>
                    Performance Optimization
                  </p>
                  <p className="text-slate-300">
                    <i className="fas fa-check text-pink-400 mr-2"></i>
                    DevOps & Infrastructure
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black gradient-text">Experience Timeline</h2>

            <div className="space-y-4">
              <Card className="border-l-4 border-cyan-400">
                <div className="space-y-2">
                  <p className="text-sm text-cyan-400 font-bold">2021 - Present</p>
                  <h3 className="text-xl font-bold text-white">Backend Developer</h3>
                  <p className="text-slate-400">IBM – Infrastructure & DevOps Division</p>
                  <p className="text-slate-300 text-sm mt-2">
                    Architected and maintained microservices serving millions of requests daily. Led system design initiatives for distributed caching and database optimization.
                  </p>
                </div>
              </Card>

              <Card className="border-l-4 border-indigo-400">
                <div className="space-y-2">
                  <p className="text-sm text-indigo-400 font-bold">2019 - 2021</p>
                  <h3 className="text-xl font-bold text-white">Junior Backend Engineer</h3>
                  <p className="text-slate-400">Tech Startup – B2B SaaS</p>
                  <p className="text-slate-300 text-sm mt-2">
                    Developed and deployed backend services using Golang and Python. Implemented CI/CD pipelines and containerized applications with Docker and Kubernetes.
                  </p>
                </div>
              </Card>

              <Card className="border-l-4 border-pink-400">
                <div className="space-y-2">
                  <p className="text-sm text-pink-400 font-bold">2018 - 2019</p>
                  <h3 className="text-xl font-bold text-white">Internship</h3>
                  <p className="text-slate-400">Web Development Firm</p>
                  <p className="text-slate-300 text-sm mt-2">
                    Started with full-stack development, transitioned to backend specialization. Learned API design, database optimization, and deployment practices.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
