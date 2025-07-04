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
  // images: {
  //   domains: ['ahlesunnat.mws.ngo'], // add your image domain here
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ahlesunnat.mws.ngo",
      },
    ],
  },
};

module.exports = nextConfig;
