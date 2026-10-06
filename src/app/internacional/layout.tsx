import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investimento no exterior · H55 Negócios Imobiliários",
  description:
    "A H55 constrói spec homes e custom homes na Flórida Central e está à disposição de quem tem interesse em investir em dólar.",
};

export default function InternacionalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
