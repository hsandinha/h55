import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // fotos dos empreendimentos publicadas no site da Front Stay (empresa do grupo)
    remotePatterns: [{ protocol: "https", hostname: "www.frontstay.com.br" }],
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
