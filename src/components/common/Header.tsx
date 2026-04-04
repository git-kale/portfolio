'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-lg border-b border-cyan-500/20 shadow-lg shadow-black/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between content-wrapper">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center">
              <i className="fas fa-code text-white font-bold"></i>
            </div>
            <span className="text-xl font-bold gradient-text">mahesh.dev</span>
          </Link>

          {/* Center Navigation Links - Desktop only */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-sm font-medium text-slate-300 hover:text-cyan-400 transition"
              >
                {link.label}
              </Link>
            ))}
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

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden menu-toggle w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 flex items-center justify-center transition shadow-lg shadow-cyan-500/50 border border-cyan-400/50"
              aria-label="Toggle menu"
              title="Open menu"
            >
              <i className={`fas fa-${menuOpen ? 'times' : 'bars'} text-white text-lg font-bold`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />

          {/* Menu Drawer */}
          <div className="fixed top-16 right-0 w-80 max-w-full bg-slate-900/95 backdrop-blur-lg border-l border-cyan-500/20 shadow-lg shadow-black/50 z-40 md:hidden animate-in slide-in-from-right-48">
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-slate-300 hover:text-cyan-400 transition py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="border-t border-cyan-500/20 my-4 pt-4">
                <button className="btn-glow w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-semibold text-white transition shadow-lg shadow-indigo-500/30">
                  <i className="fas fa-bell"></i>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
