import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Originação de negócios · H55",
  description:
    "A H55 identifica, apresenta e conduz conexões entre pessoas e empresas que têm negócio a fazer.",
};

export default function NegociosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
