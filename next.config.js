/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  optimizeFonts: true,
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || '',

  experimental: {
    swcMinify: true,
    scrollRestoration: true,
  },
};