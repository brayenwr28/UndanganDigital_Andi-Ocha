import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "invitation.metamedia.ac.id",
      },
      {
        protocol: "https",
        hostname: "invit.metamedia.ac.id",
      },
    ],
  },
};

export default nextConfig;
