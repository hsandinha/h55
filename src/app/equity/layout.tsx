import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private equity imobiliário · H55",
  description:
    "Conheça a atuação da H55 na apresentação de oportunidades selecionadas de private equity imobiliário.",
};

export default function EquityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
