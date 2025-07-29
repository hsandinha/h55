// components/pages/ServicesPage.tsx
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import Tilt from "react-parallax-tilt";
import {
  FaUserTie,
  FaSearchLocation,
  FaFileSignature,
  FaHandshake,
  FaKey,
} from "react-icons/fa"; // Ícones profissionais

const services = [
  {
    title: "Consultoria Personalizada",
    description:
      "Entendemos seu perfil, objetivos e necessidades para traçar a melhor estratégia de compra. Cada cliente é único e recebe atendimento exclusivo.",
    icon: <FaUserTie />,
  },
  {
    title: "Busca Ativa de Imóveis",
    description:
      "Procuramos imóveis alinhados ao seu interesse, incluindo opções fora dos portais tradicionais (off-market), para ampliar suas oportunidades.",
    icon: <FaSearchLocation />,
  },
  {
    title: "Análise Técnica e Documental",
    description:
      "Verificamos toda a documentação, avaliamos aspectos técnicos e identificamos riscos, garantindo uma compra segura e sem surpresas.",
    icon: <FaFileSignature />,
  },
  {
    title: "Negociação Estratégica",
    description:
      "Negociamos o melhor preço e condições para você, sempre defendendo seus interesses e buscando as melhores oportunidades do mercado.",
    icon: <FaHandshake />,
  },
  {
    title: "Acompanhamento Completo",
    description:
      "Estamos ao seu lado em todas as etapas, do início ao pós-compra, até a entrega das chaves e além, para que você tenha total tranquilidade.",
    icon: <FaKey />,
  },
];

const ServicesPage = () => {
  // Inicializador de partículas (padrão do site)
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Partículas para manter a identidade visual */}
      <Particles
        id="services-particles"
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

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-h55-blue mb-6 font-serif text-center"
        >
          Nossos Serviços
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto text-center"
        >
          Atuamos como
          <span className="font-semibold text-h55-gold">
            Concierge Imobiliário
          </span>
          , representando exclusivamente o nosso cliente em todas as etapas do
          processo imobiliário. Conheça como podemos ajudar você a conquistar o
          imóvel ideal com segurança, transparência e tranquilidade:
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, idx) => (
            <Tilt
              key={idx}
              perspective={1000}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 h-full flex flex-col items-start hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl text-h55-blue mb-4">
                  {service.icon}
                </div>
                <h2 className="text-xl font-bold text-h55-blue mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            </Tilt>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <h3 className="text-2xl font-bold text-h55-blue mb-2">
            Quer saber como funciona na prática?
          </h3>
          <p className="text-gray-700 mb-6">
            Fale com um especialista e descubra como podemos representar você na
            busca pelo imóvel ideal.
          </p>
          <Link
            href="/contato"
            className="inline-block px-8 py-3 bg-h55-blue text-gray-700 mb-6 rounded-full font-semibold hover:bg-h55-gold hover:text-h55-blue transition-colors shadow-lg hover:shadow-h55-gold/50 transform hover:scale-105"
          >
            Fale com um Especialista
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;
