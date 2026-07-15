/** @type {import('next').NextConfig} */
// Trigger GitHub Actions build with new Pages settings
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'AscentCommerce-Amazon-Growth-Agency';

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
  ...(isGithubPages
    ? {
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
      }
    : {}),
};

export default nextConfig;
