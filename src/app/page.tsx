import Link from 'next/link';
import { Button } from '@/components/shared/Button';
import { Card } from '@/components/shared/Card';
import { Badge } from '@/components/shared/Badge';
import { BlogCard } from '@/components/blog/BlogCard';
import { getAllBlogPosts } from '@/lib/blogs';

export default async function Home() {
  const allPosts = await getAllBlogPosts();
  const recentPosts = allPosts.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black gradient-text leading-tight">
                Mahesh Kale
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto">
                Backend engineer crafting scalable systems with Golang, Python, and modern DevOps.
                <span className="text-cyan-400 block">Building the infrastructure that powers tomorrow.</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="primary" size="lg" href="/projects" icon="arrow-right">
                View My Work
              </Button>
              <Button variant="glass" size="lg" href="/contact" icon="envelope">
                Get In Touch
              </Button>
            </div>

            {/* Tech Stack */}
            <div className="pt-12 space-y-6">
              <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Tech Stack</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <div className="group glow-hover glass px-4 py-3 rounded-xl hover:border-cyan-400/50 transition cursor-default border border-white/10">
                  <div className="flex items-center gap-2">
                    <i className="fab fa-golang text-cyan-400"></i>
                    <span className="text-sm font-semibold">Golang</span>
                  </div>
                </div>
                <div className="group glow-hover glass px-4 py-3 rounded-xl hover:border-indigo-400/50 transition cursor-default border border-white/10">
                  <div className="flex items-center gap-2">
                    <i className="fab fa-python text-indigo-400"></i>
                    <span className="text-sm font-semibold">Python</span>
                  </div>
                </div>
                <div className="group glow-hover glass px-4 py-3 rounded-xl hover:border-pink-400/50 transition cursor-default border border-white/10">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-cube text-pink-400"></i>
                    <span className="text-sm font-semibold">Docker</span>
                  </div>
                </div>
                <div className="group glow-hover glass px-4 py-3 rounded-xl hover:border-purple-400/50 transition cursor-default border border-white/10">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-ship text-purple-400"></i>
                    <span className="text-sm font-semibold">Kubernetes</span>
                  </div>
                </div>
                <div className="group glow-hover glass px-4 py-3 rounded-xl hover:border-yellow-400/50 transition cursor-default border border-white/10">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-database text-yellow-400"></i>
                    <span className="text-sm font-semibold">PostgreSQL</span>
                  </div>
                </div>
                <div className="group glow-hover glass px-4 py-3 rounded-xl hover:border-cyan-400/50 transition cursor-default border border-white/10">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-terminal text-cyan-400"></i>
                    <span className="text-sm font-semibold">Linux</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="space-y-4 mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-black gradient-text">Recent Articles</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              In-depth explorations of backend architecture, systems design, and modern DevOps practices
            </p>
          </div>

          {/* Articles Grid */}
          {recentPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {recentPosts.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-400">No articles published yet.</p>
            </div>
          )}

          {/* View All Articles Button */}
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-lg font-bold text-white shadow-xl shadow-cyan-500/30 transition btn-glow"
            >
              View All Articles
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
