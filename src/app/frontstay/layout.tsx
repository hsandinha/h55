import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Front Stay · H55 Negócios Imobiliários",
  description:
    "Parceria entre a H55 e a Front Stay: empreendimentos residenciais estruturados para gerar renda, do projeto de arquitetura à administração do prédio pronto.",
};

export default function FrontStayLayout({ children }: { children: React.ReactNode }) {
  return children;
}
