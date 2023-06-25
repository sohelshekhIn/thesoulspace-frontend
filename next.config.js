/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "trustlock.co",
      "res.cloudinary.com",
      "source.unsplash.com",
      "i.pravatar.cc",
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
