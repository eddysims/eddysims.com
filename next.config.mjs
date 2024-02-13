/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["eddysims.com", "localhost"],
    },
  },
};

export default nextConfig;
