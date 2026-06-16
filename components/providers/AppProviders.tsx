"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { FavoritesProvider } from "@/context/FavoritesContext";
import { CompareProvider } from "@/context/CompareContext";
import { CompareBar } from "@/components/portfolio/CompareBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export function AppProviders({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <FavoritesProvider>
      <CompareProvider>
        {!isAdmin && <Header />}
        <main className={isAdmin ? "min-h-screen" : "min-h-screen pt-16"}>
          {children}
        </main>
        {!isAdmin && <Footer />}
        {!isAdmin && <CompareBar />}
      </CompareProvider>
    </FavoritesProvider>
  );
}
