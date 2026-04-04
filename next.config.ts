import type { NextConfig } from "next";

// Determine if we're building for static export (GitHub Pages) or server (Vercel)
const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true';

const nextConfig: NextConfig = {
  // Static export for GitHub Pages, otherwise keep as hybrid
  ...(isStaticExport && { output: 'export' }),
  
  // Vercel automatically optimizes images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Disable image optimization for static export
    unoptimized: isStaticExport,
  },
  
  // Enable compression
  compress: true,
  
  // React strict mode for development
  reactStrictMode: true,
};

export default nextConfig;
