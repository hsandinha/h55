import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre a H55 · Negócios Imobiliários",
  description:
    "Conheça a H55 e sua atuação em coordenação de lançamentos, imóveis selecionados e private equity imobiliário.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
