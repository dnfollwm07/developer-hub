/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable ESM support for next-mdx-remote
  experimental: {
    esmExternals: true,
  },
};

module.exports = nextConfig; 