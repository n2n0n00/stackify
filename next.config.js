/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    mdxRs: true,
    serverComponentExternalPackages: ["mongoose"],
  },
};

module.exports = nextConfig;
