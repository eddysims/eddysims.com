/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@react-email/render"],
  },
};

export default nextConfig;
