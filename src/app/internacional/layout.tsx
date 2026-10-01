import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investimento no exterior · H55 Negócios Imobiliários",
  description:
    "Residências de alto padrão em Orlando, na Flórida: a H55 apresenta ao investidor brasileiro a tese de desenvolvimento de spec homes, do terreno à venda, em ciclos de 12 a 18 meses.",
};

export default function InternacionalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
