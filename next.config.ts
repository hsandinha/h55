import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // fotos dos empreendimentos publicadas no site da Front Stay (empresa do grupo)
      { protocol: "https", hostname: "www.frontstay.com.br" },
      // foto da /internacional (Pexels)
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
  async redirects() {
    return [
      // a antiga página de coordenação virou as três frentes
      { source: "/coordenacao", destination: "/services", permanent: true },
      // a frente 01 passou a se chamar lançamentos
      { source: "/empreendimentos", destination: "/lancamentos", permanent: true },
    ];
  },
};

export default nextConfig;
