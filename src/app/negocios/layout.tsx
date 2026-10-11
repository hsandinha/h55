import type { Metadata } from "next";

// Rota em validação com os sócios: existe, mas não é linkada pela LP, pelo
// header, pelo /services nem pelo sitemap — e sai do índice dos buscadores.
export const metadata: Metadata = {
  title: "Originação de negócios · H55",
  description:
    "A H55 identifica, apresenta e conduz conexões entre pessoas e empresas que têm negócio a fazer.",
  robots: { index: false, follow: false },
};

export default function NegociosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
