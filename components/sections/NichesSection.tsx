"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const niches = [
  {
    id: "primeira-casa",
    title: "Primeira Casa",
    description:
      "Orientação completa para quem está comprando o primeiro imóvel, desde financiamento até documentação.",
    icon: "🏠",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "imovel-investimento",
    title: "Investimentos",
    description:
      "Análise de rentabilidade, localização estratégica e potencial de valorização para investidores.",
    icon: "📊",
    color: "from-green-500 to-green-600",
  },
  {
    id: "imovel-comercial",
    title: "Imóvel Comercial",
    description:
      "Escritórios, lojas e galpões com foco em localização, fluxo e retorno sobre investimento.",
    icon: "🏢",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "imovel-luxo",
    title: "Imóveis de Alto Padrão",
    description:
      "Casas e apartamentos de luxo com análise criteriosa de exclusividade e diferenciação.",
    icon: "💎",
    color: "from-amber-500 to-amber-600",
  },
];

export const NichesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Fundo absoluto, atrás de tudo */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Não é sobre vender imoveis, é sobre assessorar você!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white max-w-3xl mx-auto"
          >
            Representamos, exclusivamente, o seus interesses.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {niches.map((niche, index) => (
            <motion.div
              key={niche.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group h-full"
            >
              <Link
                href={`/servicos/${niche.id}`}
                className="block relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full"
              >
                {/* Gradiente de fundo */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${niche.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <div className="relative p-8 text-center flex flex-col h-full">
                  {/* Ícone padronizado */}
                  <div className="flex justify-center mb-6">
                    <span className="inline-flex items-center justify-center w-16 h-16 text-6xl leading-none">
                      {niche.icon}
                    </span>
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-h55-blue transition-colors">
                    {niche.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                    {niche.description}
                  </p>

                  {/* Call to action */}
                  <div className="inline-flex items-center text-h55-blue font-semibold group-hover:text-h55-gold transition-colors mt-auto">
                    Saiba mais
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Não encontrou seu tipo de imóvel?
            </h3>
            <p className="text-gray-600 mb-6">
              Atendemos qualquer necessidade imobiliária. Fale conosco e
              descubra como podemos te ajudar.
            </p>
            <Link
              href="/contato"
              className="inline-block px-8 py-3 bg-h55-blue text-gray-700 rounded-full font-semibold hover:bg-h55-gold transition-colors shadow-lg hover:shadow-xl"
            >
              Fale com um Especialista
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
