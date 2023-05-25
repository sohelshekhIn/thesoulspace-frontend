/** @type {import('next').NextConfig} */
const nextConfig = {};
// allow pexel.com images
nextConfig.images = {
  domains: ["images.pexels.com", "images.unsplash.com", "source.unsplash.com"],
};

module.exports = nextConfig;
