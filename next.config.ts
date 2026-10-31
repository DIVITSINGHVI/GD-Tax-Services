import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Website photos are loaded from Pexels (see src/lib/images.ts)
    remotePatterns: [{ protocol: "https", hostname: "images.pexels.com", pathname: "/photos/**" }],
  },
};

export default nextConfig;
