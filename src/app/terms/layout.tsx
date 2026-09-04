import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso · H55",
  description: "Termos de Uso do site da H55 Negócios Imobiliários.",
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
