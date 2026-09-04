import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imóveis selecionados · H55",
  description:
    "Conheça a carteira de imóveis apresentados pela H55 e encontre opções por localização, tipo e características.",
};

export default function ImoveisLayout({ children }: { children: React.ReactNode }) {
  return children;
}
