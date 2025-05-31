/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
