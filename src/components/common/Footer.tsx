import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 content-wrapper">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-slate-500 text-sm">
          <p>&copy; 2026 Mahesh Kale. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="text-slate-500 text-sm">
          <p>Designed & Built with <span className="text-pink-400">♥</span></p>
        </div>
      </div>
    </footer>
  );
};
