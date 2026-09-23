import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Front Stay · H55 Negócios Imobiliários",
  description:
    "Front Stay, empresa de gestão de estadias do grupo H55: decoração, reservas, hóspedes, manutenção e prestação de contas do seu apartamento em BH e Nova Lima.",
};

export default function FrontStayLayout({ children }: { children: React.ReactNode }) {
  return children;
}
