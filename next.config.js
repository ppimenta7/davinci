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
    loader: "akamai",
    path: "",
  },
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  webpack: (config) => config,
  async redirects() {
    return [
      {
        source: "/landing-page",
        destination: "/404",
        permanent: true,
      },
      {
        source: "/pdf",
        destination: "/404",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig
