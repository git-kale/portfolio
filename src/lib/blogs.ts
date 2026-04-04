import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { BlogPost } from './types';
import { calculateReadTime } from './formatters';

const blogsDirectory = path.join(process.cwd(), 'content', 'blog');

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    if (!fs.existsSync(blogsDirectory)) {
      console.warn(`Blog directory not found at ${blogsDirectory}`);
      return [];
    }

    const fileNames = fs.readdirSync(blogsDirectory).filter(f => f.endsWith('.md'));
    const allPosts: BlogPost[] = [];

    for (const fileName of fileNames) {
      const slug = fileName.replace(/\.md$/, '').replace(/^\d+-/, '');
      const post = await getBlogPost(slug);
      if (post) allPosts.push(post);
    }

    return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(blogsDirectory, `${slug}.md`);
    let fileContents: string | null = null;

    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, 'utf8');
    } else {
      // Try with number prefix
      const files = fs.readdirSync(blogsDirectory);
      const file = files.find(f => f.endsWith(`-${slug}.md`));
      if (!file) {
        console.warn(`Blog post not found: ${slug}`);
        return null;
      }
      fileContents = fs.readFileSync(path.join(blogsDirectory, file), 'utf8');
    }

    return await parsePost(slug, fileContents);
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

async function parsePost(slug: string, fileContents: string): Promise<BlogPost> {
  const { data, content } = matter(fileContents);
  const wordCount = content.split(/\s+/).length;
  const readTime = calculateReadTime(wordCount);

  const htmlContent = await marked(content);

  return {
    slug,
    title: data.title || '',
    date: data.date || new Date().toISOString().split('T')[0],
    author: data.author || 'Mahesh Kale',
    excerpt: data.excerpt || content.substring(0, 150).replace(/[#*_]/g, ''),
    content: htmlContent as string,
    tags: data.tags || [],
    readTime,
  };
}

export function getRelatedPosts(currentPost: BlogPost, allPosts: BlogPost[], limit: number = 3): BlogPost[] {
  return allPosts
    .filter(post => post.slug !== currentPost.slug)
    .filter(post => post.tags.some(tag => currentPost.tags.includes(tag)))
    .sort((a, b) => {
      const aSharedTags = a.tags.filter(tag => currentPost.tags.includes(tag)).length;
      const bSharedTags = b.tags.filter(tag => currentPost.tags.includes(tag)).length;
      return bSharedTags - aSharedTags;
    })
    .slice(0, limit);
}

export function getAllTags(posts: BlogPost[]): string[] {
  const tags = new Set<string>();
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}
