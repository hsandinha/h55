// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AppProviders } from "../../components/providers/AppProviders";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://h55negociosimob.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "H55 Negócios Imobiliários · Coordenação imobiliária",
    template: "%s",
  },
  description:
    "Coordenação de lançamentos imobiliários, coordenação de imóveis selecionados e private equity imobiliário.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "H55 Negócios Imobiliários",
    title: "H55 Negócios Imobiliários · Coordenação imobiliária",
    description:
      "Três frentes de atuação: lançamentos imobiliários, imóveis selecionados e private equity imobiliário.",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfairDisplay.variable}`}
      data-kantu="1"
    >
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
