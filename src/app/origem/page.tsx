// components/pages/OriginPage.tsx
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import Tilt from "react-parallax-tilt";

const OriginPage = () => {
  // Inicializador de partículas (padrão do site)
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Partículas para manter a identidade visual */}
      <Particles
        id="origin-particles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          particles: {
            color: { value: ["#3b82f6", "#fbbf24"] }, // h55-blue e gold
            move: { enable: true, speed: 0.5, direction: "none", random: true },
            number: { density: { enable: true, area: 800 }, value: 30 },
            opacity: { value: 0.2 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Cards de Descoberta e Compromisso */}
        <div className="grid grid-cols-1 gap-8 my-16">
          <Tilt perspective={1000} tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              // className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 sm:p-12 md:p-16 min-h-[75vh] flex flex-col justify-center hover:shadow-xl transition-shadow"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-h55-blue mb-6 text-center">
                Nossa Origem
              </h2>
              <div className="text-gray-700 text-lg md:text-xl space-y-6 text-left md:text-justify">
                <p>
                  Nossa história começou de forma singular: atender com
                  excelência um único investidor, detentor de uma robusta
                  carteira de imóveis e apetite para novas oportunidades em
                  equity e revenda de ativos prontos. Essa relação exclusiva nos
                  ensinou que o mercado imobiliário carece de algo essencial —
                  uma representação estratégica e personalizada, voltada apenas
                  aos interesses de quem compra e investe.
                </p>
                <p>
                  A partir dessa jornada, percebemos que o mercado carecia de
                  uma atuação realmente personalizada, com foco em resultado
                  financeiro, economia de tempo e decisão estratégica. Assim,
                  adotamos uma abordagem de concierge imobiliário, conduzindo
                  nossos clientes em todo o ciclo de aquisição e desinvestimento
                  de forma inteligente, segura e eficiente.
                </p>
                <p className="font-semibold text-h55-gold text-center pt-4">
                  Nosso compromisso é representar, com excelência, quem deseja
                  comprar bem e investir melhor.
                </p>
              </div>
            </motion.div>
          </Tilt>
        </div>

        {/* Citação de Destaque */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-2xl md:text-3xl font-serif text-gray-800 my-16 italic"
        >
          "Afinal, não vendemos imóveis.{" "}
          <span className="text-h55-gold not-italic font-semibold">
            Representamos pessoas.
          </span>
          "
        </motion.blockquote>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <h3 className="text-2xl font-bold text-h55-blue mb-2">
            Conectando história e futuro
          </h3>
          <p className="text-gray-700 mb-6">
            Descubra como nossa origem e filosofia se traduzem em serviços de
            excelência para você.
          </p>
          <Link
            href="/services"
            className="inline-block px-8 py-3 bg-h55-blue text-gray-700 mb-6 rounded-full font-semibold hover:bg-h55-gold hover:text-h55-blue transition-colors shadow-lg hover:shadow-h55-gold/50 transform hover:scale-105"
          >
            Conheça Nossos Serviços
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OriginPage;
