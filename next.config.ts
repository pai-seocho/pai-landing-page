import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'about.daangn.com',
      },
    ],
  },
}

export default nextConfig
