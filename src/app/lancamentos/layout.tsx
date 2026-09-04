import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coordenação de lançamentos imobiliários · H55",
  description:
    "Estratégia comercial, tabela de vendas, imobiliárias parceiras, leads, marketing, documentos, contratos e assinaturas coordenados pela H55.",
};

export default function LancamentosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
