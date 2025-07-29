"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt"; // Pra o efeito 3D nos cards
import Particles from "react-tsparticles"; // Adicionado pra partículas
import { loadSlim } from "tsparticles-slim"; // Loader slim pra performance
import { Engine } from "tsparticles-engine"; // Tipo pra init

const niches = [
  // Conteúdo dos benefits trazido do HeroSection
  {
    id: "compre-com-confianca",
    title: "Compre com Confiança",
    description: "Representação exclusiva do nosso cliente",
    image: "/images/hero-background.webp", // Usando imagem padrão
    stat: "100% focado em você",
    color: "amber",
  },
  {
    id: "poder-de-comprar-certo",
    title: "O Poder de Comprar Certo",
    description: "Expertise e negociação estratégica",
    image: "/images/hero-background.webp", // Usando imagem padrão
    stat: "Negociação especializada",
    color: "green",
  },
  {
    id: "compra-descomplicada",
    title: "Compra Descomplicada",
    description: "Processo simplificado e seguro",
    image: "/images/hero-background.webp", // Usando imagem padrão
    stat: "Processo seguro",
    color: "purple",
  },
  {
    id: "agente-exclusivo",
    title: "Seu Agente Exclusivo",
    description: "100% focado nos seus interesses",
    image: "/images/hero-background.webp", // Usando imagem padrão
    stat: "Atendimento personalizado",
    color: "blue",
  },
];

export const NichesSection = () => {
  // Função pra inicializar o engine de partículas
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Partículas adicionadas: Fundo animado sutil */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } }, // Transparente pra não cobrir o gradiente
          fpsLimit: 120,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } }, // Interativo: partículas se afastam do mouse
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: ["#ffffff", "#fbbf24"] }, // Branco e amber pra combinar com o tema
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            }, // Linhas conectando partículas pra efeito rede
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1, // Lento pra sutileza
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 50 }, // Densidade baixa pra não poluir
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0" // Z-index baixo, atrás de tudo
      />

      {/* Fundo gradiente (mantido, partículas ficam por cima dele) */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-blue-900 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-white text-center mb-16"
        >
          Assessoria Personalizada para{" "}
          <span className="text-amber-400">Seu Sucesso Imobiliário</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {niches.map((niche) => (
            <Tilt
              key={niche.id}
              tiltReverse
              perspective={500}
              className="group relative rounded-2xl overflow-hidden shadow-2xl"
            >
              {" "}
              {/* Tilt 3D pra inovação */}
              <Image
                src={niche.image}
                alt={niche.title}
                fill
                className="object-cover brightness-75 group-hover:brightness-100 transition-all"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />{" "}
              {/* Overlay pros cards se destacarem */}
              <div className="relative p-6 text-white flex flex-col h-full justify-end">
                <h3 className="text-2xl font-bold mb-2">{niche.title}</h3>
                <p className="mb-4">{niche.description}</p>
                <p className="text-amber-400 font-semibold">{niche.stat}</p>
                <Link
                  href={`/servicos/${niche.id}`}
                  className="mt-4 inline-block text-white font-bold hover:text-amber-400 transition-colors"
                >
                  Explore Agora →
                </Link>
              </div>
            </Tilt>
          ))}
        </div>

        {/* CTA adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Não encontrou seu tipo de imóvel?
            </h3>
            <p className="text-gray-300 mb-6">
              Atendemos qualquer necessidade imobiliária. Fale conosco e
              descubra como podemos te ajudar.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 transition-colors shadow-lg hover:shadow-amber-500/50"
            >
              Fale com um Especialista
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
