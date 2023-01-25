/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.api-sports.io',
        port: '',
        pathname: '/football/teams/**',
      },
    ],
  }
}

module.exports = nextConfig
