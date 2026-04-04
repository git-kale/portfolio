import Link from 'next/link';
import { getAllBlogPosts, getBlogPost, getRelatedPosts } from '@/lib/blogs';
import { formatDate, formatReadTime } from '@/lib/formatters';
import { Badge } from '@/components/shared/Badge';
import { BlogCard } from '@/components/blog/BlogCard';
import { Card } from '@/components/shared/Card';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamicParams = false;

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }
  return {
    title: `${post.title} | Mahesh Kale`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  console.log(`generateStaticParams: ${posts.length} posts`);
  console.log('Generated params:', posts.map(p => ({ slug: p.slug })));
  return posts.map(post => ({
    slug: post.slug,
  }));
}

const badgeVariants = ['cyan', 'indigo', 'pink', 'purple', 'yellow'] as const;

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllBlogPosts();
  const relatedPosts = getRelatedPosts(post, allPosts);

  return (
    <>
      {/* Post Header */}
      <article className="py-16 px-6 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-sm text-slate-400">
            <Link href="/blog" className="hover:text-cyan-400 transition flex items-center gap-1">
              <i className="fas fa-arrow-left text-xs"></i>
              Back to Blog
            </Link>
          </div>

          {/* Post Meta */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                {/* Category indicator */}
                <div className="h-1 w-8 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full"></div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                  {post.tags[0] || 'Article'}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black gradient-text leading-tight">
                {post.title}
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
                {post.excerpt}
              </p>
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                  MK
                </div>
                <div>
                  <p className="font-semibold text-white">{post.author}</p>
                  <time className="text-xs text-slate-500">{formatDate(post.date)}</time>
                </div>
              </div>
              <span className="hidden sm:inline text-slate-500">•</span>
              <div className="flex items-center gap-2 text-slate-400 whitespace-nowrap">
                <i className="fas fa-clock text-cyan-400/60"></i>
                <span className="text-sm">{formatReadTime(post.readTime)}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {post.tags.map((tag, idx) => (
                <Badge key={tag} variant={badgeVariants[idx % badgeVariants.length]}>
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Blog Content with Enhanced Styling */}
          <style>{`
            .blog-content {
              font-size: 1.05rem;
              line-height: 1.8;
            }
            
            .blog-content h2, .blog-content h3, .blog-content h4, .blog-content h5, .blog-content h6 {
              font-family: 'Playfair Display', serif;
              color: #00f5ff;
              font-weight: 700 !important;
              margin-top: 2rem;
              margin-bottom: 1.5rem;
              letter-spacing: -0.02em;
            }
            
            .blog-content h2 {
              font-size: 2rem;
              color: #00f5ff;
            }
            
            .blog-content h3 {
              font-size: 1.5rem;
              color: #ffffff;
            }
            
            .blog-content h4 {
              font-size: 1.25rem;
              color: #f0f9ff;
            }
            
            .blog-content p {
              color: #cbd5e1;
              margin-bottom: 1.5rem;
              line-height: 1.8;
            }
            
            .blog-content a {
              color: #00f5ff;
              text-decoration: underline;
              text-decoration-color: rgba(0, 245, 255, 0.3);
              transition: all 0.2s ease;
            }
            
            .blog-content a:hover {
              color: #06d6d6;
              text-decoration-color: #00f5ff;
            }
            
            .blog-content ul {
              list-style: disc inside;
              margin-bottom: 1.5rem;
              margin-left: 1.5rem;
            }
            
            .blog-content ol {
              list-style: decimal inside;
              margin-bottom: 1.5rem;
              margin-left: 1.5rem;
            }
            
            .blog-content li {
              color: #cbd5e1;
              margin-bottom: 0.75rem;
              line-height: 1.7;
            }
            
            .blog-content blockquote {
              border-left: 4px solid #00f5ff;
              background: rgba(0, 245, 255, 0.08);
              padding-left: 1.5rem;
              padding-top: 1rem;
              padding-bottom: 1rem;
              padding-right: 1rem;
              margin: 2rem 0;
              border-radius: 0.5rem;
              font-style: italic;
              color: #e2e8f0;
              font-size: 0.95rem;
            }
            
            .blog-content code {
              background: rgba(0, 0, 0, 0.6);
              color: #06d6d6;
              padding: 0.25rem 0.5rem;
              border-radius: 0.375rem;
              font-family: Monaco, 'Courier New', monospace;
              font-size: 0.9em;
              border: 1px solid rgba(0, 245, 255, 0.2);
            }
            
            .blog-content pre {
              background: rgba(0, 0, 0, 0.8);
              border: 1px solid rgba(255, 255, 255, 0.1);
              border-radius: 0.75rem;
              padding: 1.5rem;
              overflow-x: auto;
              margin: 2rem 0;
              backdrop-filter: blur(10px);
            }
            
            .blog-content pre code {
              background: transparent;
              color: #cbd5e1;
              padding: 0;
              border: none;
              font-size: 0.875rem;
              line-height: 1.6;
            }
            
            .blog-content table {
              width: 100%;
              border-collapse: collapse;
              margin: 2rem 0;
            }
            
            .blog-content th {
              background: rgba(0, 245, 255, 0.15);
              color: #00f5ff;
              padding: 0.75rem 1rem;
              text-align: left;
              font-weight: 600;
              border-bottom: 2px solid rgba(0, 245, 255, 0.3);
            }
            
            .blog-content td {
              padding: 0.75rem 1rem;
              border-bottom: 1px solid rgba(255, 255, 255, 0.1);
              color: #cbd5e1;
            }
            
            .blog-content strong {
              color: #f1f5f9;
              font-weight: 600;
            }
            
            .blog-content em {
              font-style: italic;
              color: #e2e8f0;
            }
          `}</style>
          
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <Card className="space-y-6 bg-gradient-to-br from-cyan-500/5 to-indigo-500/5 border-cyan-400/20">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <i className="fas fa-envelope text-cyan-400"></i>
                <h3 className="text-2xl font-bold text-white">Don't Miss New Articles</h3>
              </div>
              <p className="text-slate-400 mt-2">Subscribe to get notified when I publish new content on backend systems, DevOps, and architecture.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition"
              />
              <button className="btn-glow px-8 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-lg font-bold text-white transition whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-slate-500">No spam, unsubscribe anytime.</p>
          </Card>
        </div>
      </section>

      {/* Article Navigation */}
      <section className="py-12 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-6 py-8">
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg text-cyan-400 hover:bg-cyan-500/10 border border-cyan-400/30 hover:border-cyan-400/60 transition">
            <i className="fas fa-arrow-left"></i>
            Previous
          </button>
          <Link
            href="/blog"
            className="px-6 py-3 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-400/30 transition"
          >
            All Articles
          </Link>
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg text-cyan-400 hover:bg-cyan-500/10 border border-cyan-400/30 hover:border-cyan-400/60 transition">
            Next
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-2">
                <i className="fas fa-lightbulb text-indigo-400"></i>
                <h2 className="text-4xl font-black gradient-text">Related Articles</h2>
              </div>
              <p className="text-slate-400">Continue reading on similar topics</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
