// components/pages/ServicesPage.tsx
"use client";
import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Consultoria Personalizada",
    description:
      "Entendemos seu perfil, objetivos e necessidades para traçar a melhor estratégia de compra. Cada cliente é único e recebe atendimento exclusivo.",
    icon: "🧑‍💼",
  },
  {
    title: "Busca Ativa de Imóveis",
    description:
      "Procuramos imóveis alinhados ao seu interesse, incluindo opções fora dos portais tradicionais (off-market), para ampliar suas oportunidades.",
    icon: "🔎",
  },
  {
    title: "Análise Técnica e Documental",
    description:
      "Verificamos toda a documentação, avaliamos aspectos técnicos e identificamos riscos, garantindo uma compra segura e sem surpresas.",
    icon: "📑",
  },
  {
    title: "Negociação Estratégica",
    description:
      "Negociamos o melhor preço e condições para você, sempre defendendo seus interesses e buscando as melhores oportunidades do mercado.",
    icon: "🤝",
  },
  {
    title: "Acompanhamento Completo",
    description:
      "Estamos ao seu lado em todas as etapas, do início ao pós-compra, até a entrega das chaves e além, para que você tenha total tranquilidade.",
    icon: "🗝️",
  },
];

const ServicesPage = () => {
  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-h55-blue mb-6 font-serif">
          Nossos Serviços
        </h1>
        <p className="text-lg text-gray-700 mb-12">
          Atuamos como{" "}
          <span className="font-semibold text-h55-gold">
            Buyer&apos;s Agent
          </span>
          , representando exclusivamente o comprador em todas as etapas do
          processo imobiliário. Conheça como podemos ajudar você a conquistar o
          imóvel ideal com segurança, transparência e tranquilidade:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-bold text-h55-blue mb-2">
                {service.title}
              </h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-h55-blue mb-2">
            Quer saber como funciona na prática?
          </h3>
          <p className="text-gray-700 mb-6">
            Fale com um especialista e descubra como podemos representar você na
            busca pelo imóvel ideal.
          </p>
          <Link
            href="/contato"
            className="inline-block px-8 py-3 bg-h55-blue text-gray-700 rounded-full font-semibold hover:bg-h55-gold hover:text-h55-blue transition-colors shadow-lg"
          >
            Fale com um Especialista
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
