/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration for Next.js 14
  reactStrictMode: true,
  // Disable strict mode to prevent hydration issues
  experimental: {
    // Disable strict mode warnings
    strictMode: false,
  },
  // Reduce hydration strictness
  compiler: {
    // Disable some strict checks
    removeConsole: false,
  },
};

module.exports = nextConfig;
