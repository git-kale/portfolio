import { BlogGrid } from '@/components/blog/BlogGrid';
import { getAllBlogPosts, getAllTags } from '@/lib/blogs';

export const metadata = {
  title: 'Blog | Mahesh Kale',
  description: 'Read my latest articles on backend engineering, systems design, DevOps, and cloud-native technologies.',
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  const tags = getAllTags(posts);

  return (
    <section className="py-20 px-6 min-h-screen bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-black gradient-text">Blog</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Exploring backend architecture, systems design, DevOps practices, and cloud-native technologies
          </p>
        </div>

        <BlogGrid posts={posts} tags={tags} />
      </div>
    </section>
  );
}
