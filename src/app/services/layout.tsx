import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Áreas de atuação · H55 Negócios Imobiliários",
  description:
    "Conheça as três frentes da H55: coordenação de lançamentos, coordenação de imóveis selecionados e private equity imobiliário.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
