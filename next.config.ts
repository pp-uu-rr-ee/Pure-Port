import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/Pure-Port',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
