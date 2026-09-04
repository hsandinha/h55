import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coordenação de imóveis selecionados · H55",
  description:
    "A H55 representa o proprietário e coordena toda a venda do imóvel, das imobiliárias e visitas aos contratos e à transferência.",
};

export default function ImoveisSelecionadosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
