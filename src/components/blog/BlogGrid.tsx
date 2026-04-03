'use client';

import React, { useState, useMemo } from 'react';
import { BlogPost } from '@/lib/types';
import { BlogCard } from './BlogCard';
import { Card } from '@/components/shared/Card';
import { Badge } from '@/components/shared/Badge';
import { formatReadTime } from '@/lib/formatters';

interface BlogGridProps {
  posts: BlogPost[];
  tags: string[];
}

export const BlogGrid: React.FC<BlogGridProps> = ({ posts, tags }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const articlesPerPage = 6;

  const filteredPosts = useMemo(() => {
    if (selectedTags.length === 0) return posts;
    return posts.filter(post =>
      selectedTags.some(tag => post.tags.includes(tag))
    );
  }, [posts, selectedTags]);

  const totalPages = Math.ceil(filteredPosts.length / articlesPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const handleTagClick = (tag: string) => {
    setCurrentPage(1);
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleClearFilters = () => {
    setSelectedTags([]);
    setCurrentPage(1);
  };

  // Calculate stats
  const totalArticles = posts.length;
  const totalReadTime = posts.reduce((acc, post) => acc + post.readTime, 0);
  const popularTags = [...tags].sort(
    (a, b) =>
      posts.filter(p => p.tags.includes(b)).length -
      posts.filter(p => p.tags.includes(a)).length
  );

  return (
    <div className="space-y-8">
      {/* Filter Bar */}
      <div className="glass rounded-2xl p-6 border border-white/10 animate-slide-in space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">Filter by Topic</h3>
            <p className="text-sm text-slate-400 mt-1">
              {selectedTags.length > 0
                ? `${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''} found`
                : `All ${totalArticles} articles`}
            </p>
          </div>
          {selectedTags.length > 0 && (
            <button
              onClick={handleClearFilters}
              className="text-xs px-3 py-1 rounded-full text-cyan-400 hover:text-cyan-300 transition"
            >
              Clear all
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`tag-button ${
                selectedTags.includes(tag)
                  ? 'active bg-cyan-500/40 text-cyan-200 border border-cyan-400'
                  : 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-500/30'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Articles */}
        <div className="lg:col-span-2 space-y-8">
          {paginatedPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {paginatedPosts.map(post => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between py-6 px-4 glass rounded-lg border border-white/10">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg border border-cyan-400/30 text-cyan-400 hover:bg-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition"
                  >
                    <i className="fas fa-chevron-left mr-2"></i>
                    Previous
                  </button>

                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      page => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-10 h-10 rounded-lg font-bold transition ${
                            currentPage === page
                              ? 'bg-cyan-500 text-white'
                              : 'bg-white/5 text-slate-400 hover:bg-white/10'
                          }`}
                        >
                          {page}
                        </button>
                      )
                    )}
                  </div>

                  <button
                    onClick={() =>
                      setCurrentPage(prev => Math.min(totalPages, prev + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg border border-cyan-400/30 text-cyan-400 hover:bg-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition"
                  >
                    Next
                    <i className="fas fa-chevron-right ml-2"></i>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12 glass rounded-2xl border border-white/10">
              <i className="fas fa-search text-4xl text-slate-500 mb-4"></i>
              <p className="text-slate-400">No articles found with these filters.</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Newsletter */}
          <Card className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Stay Updated</h3>
              <p className="text-sm text-slate-400">Get new articles delivered to your inbox</p>
            </div>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition"
            />
            <button className="btn-glow w-full py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-lg font-bold text-white transition">
              Subscribe
            </button>
            <p className="text-xs text-slate-500 text-center">No spam, just great content</p>
          </Card>

          {/* Stats */}
          <Card>
            <h3 className="text-lg font-bold text-white mb-4">By The Numbers</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <i className="fas fa-newspaper text-cyan-400"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Articles</p>
                  <p className="text-2xl font-bold text-cyan-400">{totalArticles}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                  <i className="fas fa-clock text-indigo-400"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Total Read Time</p>
                  <p className="text-2xl font-bold text-indigo-400">{totalReadTime}h</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                  <i className="fas fa-tags text-pink-400"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Topics</p>
                  <p className="text-2xl font-bold text-pink-400">{tags.length}</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Popular Topics */}
          <Card>
            <h3 className="text-lg font-bold text-white mb-4">Popular Topics</h3>
            <div className="flex flex-wrap gap-2">
              {popularTags.slice(0, 6).map((tag, idx) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`tag-button ${
                    selectedTags.includes(tag)
                      ? 'active bg-cyan-500/40 text-cyan-200 border border-cyan-400'
                      : 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-500/30'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
