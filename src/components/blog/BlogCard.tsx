import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/lib/types';
import { formatDate, formatReadTime } from '@/lib/formatters';
import { Card } from '@/components/shared/Card';
import { Badge } from '@/components/shared/Badge';

interface BlogCardProps {
  post: BlogPost;
}

const badgeVariants = ['cyan', 'indigo', 'pink', 'purple', 'yellow'] as const;

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Card className="h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 space-y-2">
          <time className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
            {formatDate(post.date)}
          </time>
          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition line-clamp-2">
            {post.title}
          </h3>
        </div>
        <div className="text-xl text-slate-500 ml-4 cursor-pointer hover:text-pink-400 transition">
          <i className="fas fa-bookmark"></i>
        </div>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
        {post.excerpt}
      </p>

      <div className="space-y-4 mt-auto">
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag, idx) => (
            <Badge key={tag} variant={badgeVariants[idx % badgeVariants.length]}>
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="reading-time">
            <i className="fas fa-clock"></i>
            {formatReadTime(post.readTime)}
          </span>
          <span className="text-xs text-slate-500">By {post.author}</span>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 hover:from-cyan-500/40 hover:to-indigo-500/40 rounded-lg text-cyan-300 font-bold transition flex items-center justify-center gap-2 border border-cyan-400/30"
        >
          Read Article <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </Card>
  );
};
