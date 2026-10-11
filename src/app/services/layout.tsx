import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Áreas de atuação · H55 Negócios Imobiliários",
  description:
    "Conheça as áreas de atuação da H55: lançamentos, imóveis selecionados, private equity, originação de negócios, Front Stay e investimento nos EUA.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
