import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // a antiga página de coordenação virou as três frentes
      { source: "/coordenacao", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
