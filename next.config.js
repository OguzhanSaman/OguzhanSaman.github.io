// next.config.js
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  output: {
    publicPath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  },
  generateBuildId: async () => {
    // You can leave this function empty or customize it if needed
    return 'build';
  },
};

module.exports = nextConfig;
