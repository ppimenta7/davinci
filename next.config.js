/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  }, 
  images: {
    loader: 'akamai',
    path: '',
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
}

module.exports = nextConfig
