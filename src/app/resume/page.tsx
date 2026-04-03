import { Card } from '@/components/shared/Card';
import Link from 'next/link';

export const metadata = {
  title: 'Resume | Mahesh Kale',
  description: 'Download my resume and view my professional background, skills, and experience.',
};

export default function ResumePage() {
  return (
    <section className="py-20 px-6 min-h-screen bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-black gradient-text">Resume</h1>
          <p className="text-lg text-slate-400">Backend Engineer | Systems Architect | DevOps Specialist</p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <a
              href="https://example.com/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-lg font-bold text-white shadow-xl shadow-cyan-500/30 transition btn-glow"
            >
              <i className="fas fa-download"></i>
              Download PDF
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <i className="fas fa-user text-cyan-400"></i>
            Professional Summary
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Experienced backend engineer with 5+ years of expertise in designing and building scalable distributed systems. Proven track record of architecting microservices, optimizing databases, and implementing DevOps solutions that improve performance and reliability. Strong foundation in Golang, Python, and cloud-native technologies. Passionate about solving complex engineering problems and mentoring junior developers.
          </p>
        </Card>

        {/* Core Skills */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <i className="fas fa-code text-indigo-400"></i>
            Core Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Languages</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  Golang (Expert)
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                  Python (Advanced)
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-pink-400"></span>
                  SQL (Advanced)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-indigo-400 mb-3">Technologies</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  Kubernetes, Docker
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                  PostgreSQL, Redis
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-pink-400"></span>
                  AWS, GCP
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-pink-400 mb-3">Architecture</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  Microservices
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                  Distributed Systems
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-pink-400"></span>
                  System Design
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-purple-400 mb-3">Tools & Practices</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  CI/CD, Git
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                  Linux, Bash
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-pink-400"></span>
                  API Design, REST
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Experience */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <i className="fas fa-briefcase text-pink-400"></i>
            Experience
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-cyan-400 pl-4">
              <p className="text-sm text-cyan-400 font-bold">2021 - Present</p>
              <h3 className="text-xl font-bold text-white">Backend Developer</h3>
              <p className="text-slate-400 mb-2">IBM – Infrastructure & DevOps Division</p>
              <ul className="space-y-1 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">›</span>
                  <span>Architected and maintained microservices serving millions of requests daily</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">›</span>
                  <span>Led system design initiatives for distributed caching reducing database load by 60%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">›</span>
                  <span>Implemented CI/CD pipelines improving deployment frequency from weekly to daily</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-indigo-400 pl-4">
              <p className="text-sm text-indigo-400 font-bold">2019 - 2021</p>
              <h3 className="text-xl font-bold text-white">Junior Backend Engineer</h3>
              <p className="text-slate-400 mb-2">Tech Startup – B2B SaaS Platform</p>
              <ul className="space-y-1 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">›</span>
                  <span>Developed backend services using Golang and Python processing 10K+ requests/sec</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">›</span>
                  <span>Containerized applications with Docker and orchestrated using Kubernetes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">›</span>
                  <span>Optimized database queries improving query performance by 40%</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-pink-400 pl-4">
              <p className="text-sm text-pink-400 font-bold">2018 - 2019</p>
              <h3 className="text-xl font-bold text-white">Software Development Intern</h3>
              <p className="text-slate-400 mb-2">Web Development Agency</p>
              <ul className="space-y-1 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">›</span>
                  <span>Started with full-stack development, transitioned to backend specialization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">›</span>
                  <span>Learned API design principles, database optimization, and deployment practices</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Education */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <i className="fas fa-graduation-cap text-purple-400"></i>
            Education
          </h2>

          <div className="space-y-4">
            <div className="border-l-4 border-cyan-400 pl-4">
              <p className="text-sm text-cyan-400 font-bold">2014 - 2018</p>
              <h3 className="text-xl font-bold text-white">B.Tech Computer Science</h3>
              <p className="text-slate-400">Indian Institute of Technology (IIT) Roorkee</p>
              <p className="text-slate-300 text-sm mt-2">CGPA: 7.4/10 | Relevant Coursework: Operating Systems, Databases, Networks, Algorithms</p>
            </div>
          </div>
        </Card>

        {/* Certifications */}
        <Card>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <i className="fas fa-certificate text-yellow-400"></i>
            Certifications
          </h2>

          <div className="space-y-3">
            <div className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-b-0">
              <i className="fas fa-checkmark text-cyan-400 text-lg mt-1"></i>
              <div>
                <p className="font-bold text-white">Certified Kubernetes Administrator (CKA)</p>
                <p className="text-sm text-slate-400">Cloud Native Computing Foundation – 2022</p>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-b-0">
              <i className="fas fa-checkmark text-indigo-400 text-lg mt-1"></i>
              <div>
                <p className="font-bold text-white">AWS Certified Solutions Architect – Associate</p>
                <p className="text-sm text-slate-400">Amazon Web Services – 2021</p>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-b-0">
              <i className="fas fa-checkmark text-pink-400 text-lg mt-1"></i>
              <div>
                <p className="font-bold text-white">System Design for High Availability</p>
                <p className="text-sm text-slate-400">Coursera – 2023</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-6">Want to learn more or discuss opportunities?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-lg font-bold text-white shadow-xl shadow-cyan-500/30 transition btn-glow"
          >
            Get In Touch
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
