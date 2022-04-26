/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  optimizeFonts: true,
  swcMinify: true,
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || '',

  experimental: {
    scrollRestoration: true,
  },
};