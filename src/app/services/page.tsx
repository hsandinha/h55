// src/app/services/page.tsx
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
  FaClipboardCheck,
  FaKey,
} from "react-icons/fa";

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
    title: "Due Diligence Completa",
    description:
      "Análise técnica, documental e de valorização do imóvel: certidões, matrícula, situação do vendedor e potencial de retorno. Você compra sabendo exatamente o que está comprando.",
    icon: <FaFileSignature />,
  },
  {
    title: "Negociação Estratégica",
    description:
      "Negociamos o melhor preço e as melhores condições para você, sempre defendendo seus interesses e nunca os de quem está vendendo.",
    icon: <FaHandshake />,
  },
  {
    title: "Vistoria Técnica de Recebimento",
    description:
      "Fazemos a vistoria técnica de recebimento do seu imóvel, conferindo acabamentos, instalações e o memorial descritivo antes de você assinar o termo de entrega.",
    icon: <FaClipboardCheck />,
  },
  {
    title: "Acompanhamento Completo",
    description:
      "Estamos ao seu lado em todas as etapas, do início ao pós-compra, até a entrega das chaves e além, para que você tenha total tranquilidade.",
    icon: <FaKey />,
  },
];

const etapas = [
  {
    title: "Análise de perfil",
    description:
      "Entendimento profundo do seu perfil, objetivos e necessidades para traçar uma estratégia personalizada de compra ou investimento.",
  },
  {
    title: "Busca ativa e curadoria",
    description:
      "Busca criteriosa no mercado, inclusive de ativos off-market, e curadoria das opções que realmente fazem sentido para a sua tese.",
  },
  {
    title: "Due diligence",
    description:
      "Análise técnica, documental e de valorização para garantir segurança jurídica e potencial real de retorno.",
  },
  {
    title: "Negociação",
    description:
      "Conduzimos a negociação de preço, condições e prazos representando exclusivamente os seus interesses.",
  },
  {
    title: "Contrato e assinatura",
    description:
      "Conferência do contrato e dos anexos, alinhamento com cartório e banco e acompanhamento até a assinatura.",
  },
  {
    title: "Vistoria e pós-compra",
    description:
      "Vistoria técnica na entrega das chaves e suporte na gestão do ativo depois da compra.",
  },
];

const ServicesPage = () => {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <Particles
        id="services-particles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          particles: {
            color: { value: ["#3b82f6", "#fbbf24"] },
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
          Atuamos como{" "}
          <span className="font-semibold text-h55-gold">
            Concierge Imobiliário
          </span>
          , representando exclusivamente o nosso cliente em todas as etapas do
          processo imobiliário. Conheça como podemos ajudar você a conquistar o
          imóvel ideal com segurança, transparência e tranquilidade:
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
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

        {/* Como Atuamos — processo, na ordem em que acontece */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-h55-blue mb-3 text-center font-serif">
            Como Atuamos
          </h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto mb-10">
            Um processo definido, do primeiro contato à entrega das chaves.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {etapas.map((etapa, index) => (
              <Tilt key={index} tiltReverse perspective={500} className="group">
                <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-lg transition-all h-full border-t-2 border-h55-gold/60">
                  <span className="block text-sm font-semibold text-h55-gold tabular-nums mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-semibold text-h55-blue mb-2">
                    {etapa.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{etapa.description}</p>
                </div>
              </Tilt>
            ))}
          </div>
        </motion.div>

        {/* Ponte para a coordenação de vendas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 rounded-2xl bg-h55-blue text-white p-8 sm:p-10 shadow-lg"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-h55-gold mb-3">
            Para quem vende
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 font-serif">
            Também coordenamos a venda do seu imóvel ou do seu empreendimento
          </h2>
          <p className="text-white/85 mb-6 max-w-2xl">
            Assumimos a estratégia comercial, a gestão documental e a curadoria
            das imobiliárias parceiras — para o proprietário de um ativo pontual
            e para a incorporadora que precisa de velocidade de vendas.
          </p>
          <Link
            href="/coordenacao"
            className="inline-block px-8 py-3 bg-h55-gold text-h55-blue rounded-full font-semibold hover:bg-white transition-colors shadow-lg"
          >
            Conhecer a coordenação de vendas
          </Link>
        </motion.div>

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
            href="/contact"
            className="inline-block px-8 py-3 bg-h55-blue text-white rounded-full font-semibold hover:bg-h55-gold hover:text-h55-blue transition-colors shadow-lg hover:shadow-h55-gold/50 transform hover:scale-105"
          >
            Fale com um Especialista
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;
