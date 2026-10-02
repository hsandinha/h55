import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investimento no exterior · H55 Negócios Imobiliários",
  description:
    "Spec homes e custom homes na região de Orlando, na Flórida: a H55 apresenta ao investidor brasileiro o desenvolvimento de casas, do terreno à venda, em ciclos de 12 a 18 meses.",
};

export default function InternacionalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
