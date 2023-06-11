/** @type {import('next').NextConfig} */
const nextConfig = {};
// allow pexel.com images
nextConfig.images = {
  domains: ["trustlock.co", "res.cloudinary.com", "source.unsplash.com"],
};

module.exports = nextConfig;
