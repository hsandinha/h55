import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato · H55 Negócios Imobiliários",
  description:
    "Fale com a H55 sobre lançamentos imobiliários, venda de imóveis selecionados ou private equity imobiliário.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
