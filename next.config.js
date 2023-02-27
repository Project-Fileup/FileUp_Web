const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withPlugins = require('next-compose-plugins');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  optimizeFonts: true,
  poweredByHeader: false,

  compiler: {
    styledComponents: true,
  },

  experimental: {
    scrollRestoration: true,
    esmExternals: true,
  },
};

module.exports = withPlugins([
  withBundleAnalyzer,
], nextConfig);