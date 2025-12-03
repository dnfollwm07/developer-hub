/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable ESM support for next-mdx-remote
  experimental: {
    esmExternals: true,
  },
  webpack: (config, { isServer }) => {
    // Ensure tailwind-merge is properly handled
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig; 