import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investimento no exterior · H55 Negócios Imobiliários",
  description:
    "Invista no mercado imobiliário da Flórida Central: a H55 assessora você na construção de casas na região, com uma estrutura completa para o seu projeto de investimento.",
};

export default function InternacionalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
