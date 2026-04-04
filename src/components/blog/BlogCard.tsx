import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/lib/types';
import { formatDate, formatReadTime } from '@/lib/formatters';
import { Card } from '@/components/shared/Card';
import { Badge } from '@/components/shared/Badge';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const badgeVariants = ['cyan', 'indigo', 'pink', 'purple', 'yellow'] as const;

export const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`}>
        <Card className="h-full flex flex-col bg-gradient-to-br from-cyan-500/5 to-indigo-500/5 border-cyan-400/40 hover:border-cyan-400/70 group overflow-hidden relative">
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600"></div>
          
          <div className="flex-1 space-y-6">
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between gap-4">
                <time className="text-xs font-bold text-cyan-300 uppercase tracking-widest whitespace-nowrap">
                  {formatDate(post.date)}
                </time>
                <div className="inline-block px-3 py-1 bg-cyan-500/30 rounded-full text-xs text-cyan-200 font-semibold border border-cyan-400/50">
                  Featured
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-300 transition leading-snug">
                {post.title}
              </h3>
            </div>

            <p className="text-slate-300 text-base leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          <div className="space-y-4 mt-8 pt-6 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 4).map((tag, idx) => (
                <Badge key={tag} variant={badgeVariants[idx % badgeVariants.length]}>
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <span className="reading-time flex items-center gap-2">
                  <i className="fas fa-clock text-cyan-400/70"></i>
                  {formatReadTime(post.readTime)}
                </span>
                <span className="text-slate-500">By {post.author}</span>
              </div>
              <div className="text-cyan-400 group-hover:translate-x-2 transition-transform">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full flex flex-col group overflow-hidden relative border-cyan-400/20 hover:border-cyan-400/50">
        {/* Accent line on top */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        <div className="flex flex-col justify-between h-full p-1">
          {/* Header */}
          <div className="space-y-3 mb-4">
            <div className="flex items-center justify-between gap-4">
              <time className="text-xs font-bold text-cyan-400 uppercase tracking-widest whitespace-nowrap">
                {formatDate(post.date)}
              </time>
              <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent"></div>
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition line-clamp-2 leading-tight">
              {post.title}
            </h3>
          </div>

          {/* Excerpt */}
          <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Footer */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag, idx) => (
                <Badge key={tag} variant={badgeVariants[idx % badgeVariants.length]}>
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <i className="fas fa-clock text-cyan-400/60 text-xs"></i>
                  <span>{formatReadTime(post.readTime)}</span>
                </div>
              </div>
              <div className="text-cyan-400 group-hover:translate-x-1 transition-transform">
                <i className="fas fa-arrow-right text-xs"></i>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};
