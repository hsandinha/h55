// components/pages/AboutPage.tsx
"use client";
import React from "react";

const AboutPage = () => {
  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-h55-blue mb-6 font-serif">
          Sobre Nós
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Somos uma consultoria imobiliária especializada em representar
          exclusivamente o comprador. Atuamos como{" "}
          <span className="font-semibold text-h55-gold">
            Buyer&apos;s Agent
          </span>
          , trazendo para o Brasil um conceito inovador, transparente e focado
          em você.
        </p>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-h55-blue mb-3">
            Nossa Missão
          </h2>
          <p className="text-gray-700">
            Nossa missão é garantir que cada cliente realize o melhor negócio
            imobiliário possível, com total segurança, tranquilidade e sem
            conflitos de interesse. Colocamos você no centro de tudo, ouvindo
            seus objetivos e sonhos para apresentar as melhores oportunidades do
            mercado.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-h55-blue mb-3">
            Por que Buyer&apos;s Agent?
          </h2>
          <p className="text-gray-700">
            No modelo tradicional, o mesmo corretor pode atender vendedor e
            comprador, o que pode gerar dúvidas e insegurança. Como Buyer&apos;s
            Agent, nosso compromisso é exclusivamente com você, comprador.
            Analisamos, buscamos, negociamos e acompanhamos cada etapa do
            processo, sempre defendendo seus interesses.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-h55-blue mb-3">
            Como Atuamos
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Entendimento profundo do seu perfil, objetivos e necessidades.
            </li>
            <li>
              Busca ativa e criteriosa de imóveis, inclusive opções off-market.
            </li>
            <li>Análise técnica, documental e de valorização.</li>
            <li>Negociação estratégica para garantir as melhores condições.</li>
            <li>Acompanhamento completo até a entrega das chaves.</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-h55-blue mb-3">
            Nossos Valores
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <span className="font-semibold">Transparência:</span> Comunicação
              clara e honesta em todas as etapas.
            </li>
            <li>
              <span className="font-semibold">Segurança:</span> Análise
              criteriosa para evitar riscos e surpresas.
            </li>
            <li>
              <span className="font-semibold">Exclusividade:</span> Foco total
              nos interesses do comprador.
            </li>
            <li>
              <span className="font-semibold">Excelência:</span> Atendimento
              personalizado e soluções sob medida.
            </li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-h55-blue mb-2">
            Pronto para realizar o melhor negócio?
          </h3>
          <p className="text-gray-700 mb-6">
            Fale com um especialista e descubra como podemos ajudar você a
            conquistar seu imóvel com segurança e tranquilidade.
          </p>
          <a
            href="/contato"
            className="inline-block px-8 py-3 bg-h55-blue text-gray-700 rounded-full font-semibold hover:bg-h55-gold hover:text-h55-blue transition-colors shadow-lg"
          >
            Fale com um Especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
