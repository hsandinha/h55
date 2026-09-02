// src/app/page.tsx
import { HeroSection } from "@/components/sections/HeroSection";
import { FrentesSection } from "@/components/sections/FrentesSection";
import { NarrativeSection } from "@/components/sections/NarrativeSection";
import { NichesSection } from "@/components/sections/NichesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FrentesSection />
      <NarrativeSection />
      <NichesSection />
    </>
  );
}
