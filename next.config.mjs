/** @type {import('next').NextConfig} */
const nextConfig = {
  // disable eslint for this file
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
