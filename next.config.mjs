import fs from 'fs';
import path from 'path';

// Ensure asset folder and clean file names exist
try {
  const publicDir = path.join(process.cwd(), 'public');
  const sourceDir = path.join(publicDir, 'assects');
  const targetDir = path.join(publicDir, 'assets');

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const sourceFile = path.join(sourceDir, 'WhatsApp Image 2026-08-05 at 5.03.05 PM.jpeg');
  if (fs.existsSync(sourceFile)) {
    fs.copyFileSync(sourceFile, path.join(targetDir, 'logo.jpeg'));
    fs.copyFileSync(sourceFile, path.join(targetDir, 'logo.jpg'));
    fs.copyFileSync(sourceFile, path.join(targetDir, 'favicon.ico'));
    fs.copyFileSync(sourceFile, path.join(publicDir, 'favicon.ico'));
  }
} catch (e) {
  console.error('Asset sync note:', e);
}

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
