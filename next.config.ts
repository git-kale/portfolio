import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel automatically optimizes images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable compression
  compress: true,
  // React strict mode for development
  reactStrictMode: true,
};

export default nextConfig;
