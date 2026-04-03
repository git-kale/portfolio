import Link from 'next/link';
import React from 'react';

export const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between content-wrapper">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center">
            <i className="fas fa-code text-white font-bold"></i>
          </div>
          <span className="text-xl font-bold gradient-text">mahesh.dev</span>
        </Link>

        {/* Center Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="nav-link text-sm font-medium text-slate-300 hover:text-cyan-400 transition">Home</Link>
          <Link href="/blog" className="nav-link text-sm font-medium text-slate-300 hover:text-cyan-400 transition">Blog</Link>
          <Link href="/projects" className="nav-link text-sm font-medium text-slate-300 hover:text-cyan-400 transition">Projects</Link>
          <Link href="/about" className="nav-link text-sm font-medium text-slate-300 hover:text-cyan-400 transition">About</Link>
          <Link href="/contact" className="nav-link text-sm font-medium text-slate-300 hover:text-cyan-400 transition">Contact</Link>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-4">
          <button className="btn-glow hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-semibold text-white transition shadow-lg shadow-indigo-500/30">
            <i className="fas fa-bell"></i>
            Subscribe
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-white/10 transition"
          >
            <i className="fab fa-github text-cyan-400"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};
