// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "../../components/layout/Header"; // Caminho corrigido
import Footer from "../../components/layout/Footer"; // Caminho corrigido

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "H55 Negócios Imobiliários - Investimento e Oportunidades",
  description:
    "Sua agência de investimentos em múltiplos nichos com visão global e expertise local.",
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
    >
      <body>
        <Header />
        <main className="min-h-screen">
          {" "}
          {/* Adicionei min-h-screen para empurrar o footer para baixo */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
