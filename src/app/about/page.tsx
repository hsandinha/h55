"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Particles from "react-tsparticles"; // Pra partículas inovadoras no fundo
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import Tilt from "react-parallax-tilt"; // Pra tilt 3D nos cards (opcional, mas adiciona impacto)

const AboutPage = () => {
  // Inicializador de partículas (sutil, como no Niches)
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {" "}
      {/* Gradiente moderno e clean */}
      {/* Partículas sutis pra inovação e movimento */}
      <Particles
        id="about-particles"
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
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-h55-blue mb-6 font-serif text-center"
        >
          Sobre Nós
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto"
        >
          Somos uma consultoria imobiliária especializada em representar
          exclusivamente o comprador. Atuamos como{" "}
          <span className="font-semibold text-h55-gold">
            Concierge Imobiliário
          </span>
          , trazendo para o Brasil um conceito inovador, transparente e focado
          em você.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <h2 className="text-2xl font-semibold text-h55-blue mb-3">
              Nossa Missão
            </h2>
            <p className="text-gray-700">
              Garantir que cada cliente realize o melhor negócio imobiliário
              possível, com total segurança, tranquilidade e sem conflitos de
              interesse. Colocamos você no centro de tudo, ouvindo seus
              objetivos e sonhos para apresentar as melhores oportunidades do
              mercado.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <h2 className="text-2xl font-semibold text-h55-blue mb-3">
              Por que Buyer&apos;s Agent?
            </h2>
            <p className="text-gray-700">
              No modelo tradicional, o mesmo corretor pode atender vendedor e
              comprador, gerando dúvidas e insegurança. Como Concierge
              Imobiliário, nosso compromisso é exclusivamente com você.
              Analisamos, buscamos, negociamos e acompanhamos cada etapa, sempre
              defendendo seus interesses.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-h55-blue mb-6 text-center">
            Como Atuamos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Entendimento profundo do seu perfil, objetivos e necessidades.",
              "Busca ativa e criteriosa de imóveis, inclusive opções off-market.",
              "Análise técnica, documental e de valorização.",
              "Negociação estratégica para garantir as melhores condições.",
              "Acompanhamento completo até a entrega das chaves.",
            ].map((item, index) => (
              <Tilt key={index} tiltReverse perspective={500} className="group">
                <div className="bg-gray-50 rounded-xl p-4 shadow-md hover:shadow-lg transition-all group-hover:scale-105">
                  <p className="text-gray-700">{item}</p>
                </div>
              </Tilt>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-h55-blue mb-6 text-center">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Transparência",
                desc: "Comunicação clara e honesta em todas as etapas.",
              },
              {
                title: "Segurança",
                desc: "Análise criteriosa para evitar riscos e surpresas.",
              },
              {
                title: "Exclusividade",
                desc: "Foco total nos interesses do comprador.",
              },
              {
                title: "Excelência",
                desc: "Atendimento personalizado e soluções sob medida.",
              },
            ].map((value, index) => (
              <Tilt key={index} tiltReverse perspective={500} className="group">
                <div className="bg-gray-50 rounded-xl p-4 shadow-md hover:shadow-lg transition-all group-hover:scale-105">
                  <span className="font-semibold text-h55-gold">
                    {value.title}:
                  </span>{" "}
                  {value.desc}
                </div>
              </Tilt>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-h55-blue mb-2">
            Pronto para realizar o melhor negócio?
          </h3>
          <p className="text-gray-700 mb-6">
            Fale com um especialista e descubra como podemos ajudar você a
            conquistar seu imóvel com segurança e tranquilidade.
          </p>
          <Link
            href="/contato"
            className="inline-block px-8 py-3 bg-h55-blue text-gray-700 rounded-full font-semibold hover:bg-h55-gold hover:text-h55-blue transition-colors shadow-lg hover:shadow-h55-gold/50"
          >
            Fale com um Especialista
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
