/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.pinimg.com"], // ✅ Add your external image host here
  },
};

module.exports = nextConfig;
