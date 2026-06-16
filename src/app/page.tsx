// src/app/page.tsx
import { HeroSection } from "@/components/sections/HeroSection";
import { NarrativeSection } from "@/components/sections/NarrativeSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { NichesSection } from "@/components/sections/NichesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <NarrativeSection />
      <CategoriesSection />
      <NichesSection />
    </>
  );
}
