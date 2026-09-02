import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
