import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade · H55",
  description: "Política de Privacidade da H55 Negócios Imobiliários.",
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
