'use client';

import React, { useState } from 'react';

interface FilterBarProps {
  tags: string[];
  onFilterChange: (selectedTags: string[]) => void;
  postCount?: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  tags,
  onFilterChange,
  postCount,
}) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    const newSelected = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newSelected);
    onFilterChange(newSelected);
  };

  const handleClearAll = () => {
    setSelectedTags([]);
    onFilterChange([]);
  };

  return (
    <div className="space-y-4 animate-slide-in">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Filter by Topic</h3>
          <p className="text-sm text-slate-400">
            {selectedTags.length > 0
              ? `${postCount || 0} article${postCount !== 1 ? 's' : ''} found`
              : 'All articles'}
          </p>
        </div>
        {selectedTags.length > 0 && (
          <button
            onClick={handleClearAll}
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
  );
};
