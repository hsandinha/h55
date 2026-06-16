"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { getHeroSlides, type HeroSlide } from "@/lib/hero";

const HeroParticles = dynamic(
  () => import("@/components/hero/HeroParticles").then((m) => m.HeroParticles),
  { ssr: false },
);

// Foto padrão usada quando nenhum slide foi cadastrado no painel.
const HERO_POSTER = "/images/hero-background.webp";

function SlideLayer({ slide, active }: { slide: HeroSlide; active: boolean }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (active) v.play().catch(() => {});
    else v.pause();
  }, [active]);

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
        active ? "opacity-100" : "opacity-0"
      }`}
    >
      {slide.tipo === "video" ? (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          poster={slide.poster}
          src={slide.url}
          className="h-full w-full object-cover"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={slide.url} alt="" className="h-full w-full object-cover" />
      )}
    </div>
  );
}

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const [slides, setSlides] = useState<HeroSlide[]>([{ tipo: "foto", url: HERO_POSTER }]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const data = await getHeroSlides();
      if (!cancelled && data.length > 0) setSlides(data);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % slides.length), 9000);
    return () => window.clearInterval(id);
  }, [slides.length]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a2540]"
    >
      {/* Fundo: vídeos/fotos cadastrados (carrossel) */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <SlideLayer key={s.id || i} slide={s} active={i === active} />
        ))}
      </div>

      {/* Overlay navy para leitura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(3,12,23,0.88) 0%, rgba(6,18,31,0.72) 36%, rgba(6,18,31,0.26) 70%, rgba(6,18,31,0.46) 100%), linear-gradient(180deg, rgba(10,37,64,0.18) 0%, rgba(6,18,31,0.88) 100%)",
        }}
      />

      {/* Rede animada (efeito que se move) */}
      <div className="absolute inset-0 hidden opacity-20 md:block">
        <HeroParticles />
      </div>

      {/* Conteúdo */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1320px] items-center px-6 py-24 md:px-10 lg:px-14"
      >
        <div className="w-full max-w-[680px] text-left">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mb-10 flex items-center gap-5"
          >
            <Image
              src="/images/h55.png"
              alt="H55 Negócios Imobiliários"
              width={96}
              height={64}
              priority
              className="h-auto w-14"
            />
            <span className="h-px w-16 bg-[#caa64a]/70 sm:w-20" />
            <span className="hidden text-[0.64rem] uppercase tracking-[0.34em] text-[#d7b766] sm:inline">
              H55 Negócios Imobiliários
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="mb-5 text-[0.68rem] uppercase tracking-[0.16em] text-[#caa64a] sm:tracking-[0.28em] md:text-xs"
          >
            Curadoria imobiliária para investidores
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.22 }}
            className="text-4xl font-semibold leading-[0.95] text-[#f7efe2] sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            Exclusividade
            <br />
            que <span className="text-[#d9ad45]">muda tudo</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.34 }}
            className="mt-8 max-w-xl border-l border-[#caa64a]/55 pl-5 text-base leading-8 text-[#f1eee7]/88 md:text-lg"
          >
            Direcionamos compradores e investidores às melhores oportunidades,
            com foco exclusivo nos seus interesses, negociação estratégica e
            resultados que transformam capital em patrimônio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.46 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/imoveis"
              className="inline-flex items-center justify-center border border-[#d8ad45] bg-[#d8ad45] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#191207] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f0c85a]"
            >
              Ver portfólio
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-[#d8ad45]/80 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#f7efe2] transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Falar com especialista
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        style={{ opacity: contentOpacity }}
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#cfd8e3]">
          Role para descobrir
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-white/40 pt-1.5"
        >
          <div className="h-1.5 w-1 rounded-full bg-[#e8b23a]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
