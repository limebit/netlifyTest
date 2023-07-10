/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["place-puppy.com"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
