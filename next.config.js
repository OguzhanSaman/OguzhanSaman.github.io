/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '/oguzhansaman.github.io',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '/oguzhansaman.github.io',
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    };
  },
};

module.exports = nextConfig;
