// src/app/page.tsx
import { HeroSection } from "@/components/sections/HeroSection"; // Vamos criar este componente em breve
import { NichesSection } from "@/components/sections/NichesSection"; // E este também

export default function Home() {
  return (
    <>
      <HeroSection />
      <NichesSection />
      {/* Outras seções da Home Page virão aqui */}
    </>
  );
}
