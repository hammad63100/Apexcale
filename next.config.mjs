/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production' || process.env.GITHUB_PAGES === 'true';
const repoName = 'Apexcale';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  ...(isProd
    ? {
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
      }
    : {}),
};

export default nextConfig;
