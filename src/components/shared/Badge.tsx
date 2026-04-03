import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'indigo' | 'pink' | 'purple' | 'yellow';
  className?: string;
}

const variantColors = {
  cyan: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30',
  indigo: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/30',
  pink: 'bg-pink-500/20 text-pink-300 border-pink-400/30',
  purple: 'bg-purple-500/20 text-purple-300 border-purple-400/30',
  yellow: 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30',
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  className = '',
}) => {
  return (
    <span className={`text-xs px-3 py-1 rounded-full font-semibold border ${variantColors[variant]} ${className}`}>
      {children}
    </span>
  );
};
