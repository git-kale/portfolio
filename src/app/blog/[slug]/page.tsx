import Link from 'next/link';
import { getAllBlogPosts, getBlogPost, getRelatedPosts } from '@/lib/blogs';
import { formatDate, formatReadTime } from '@/lib/formatters';
import { Badge } from '@/components/shared/Badge';
import { BlogCard } from '@/components/blog/BlogCard';
import { Card } from '@/components/shared/Card';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export const dynamicParams = false;

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);
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
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllBlogPosts();
  const relatedPosts = getRelatedPosts(post, allPosts);

  return (
    <>
      {/* Post Header */}
      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-sm text-slate-400">
            <Link href="/blog" className="hover:text-cyan-400 transition">
              Blog
            </Link>
            <span>/</span>
            <span className="text-slate-300">{post.title}</span>
          </div>

          {/* Post Meta */}
          <div className="space-y-4 mb-8">
            <h1 className="text-5xl md:text-6xl font-black gradient-text leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <time className="text-cyan-400 font-semibold">{formatDate(post.date)}</time>
              <span>•</span>
              <span className="reading-time">
                <i className="fas fa-clock"></i>
                {formatReadTime(post.readTime)}
              </span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>

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

      {/* Post Content */}
      <section className="py-12 px-6 max-w-3xl mx-auto prose prose-invert">
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
        <div className="max-w-3xl mx-auto">
          <Card className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-white">Stay Updated with New Articles</h3>
              <p className="text-slate-400 mt-2">Get notified when I publish new content on backend systems, DevOps, and cloud architecture.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition"
              />
              <button className="btn-glow px-8 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-lg font-bold text-white transition">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-slate-500">No spam, just great content.</p>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-black gradient-text mb-2">Related Articles</h2>
              <p className="text-slate-400">You might also like these articles</p>
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
