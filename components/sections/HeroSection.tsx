"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // Adicionado pra otimizar a imagem de fundo e a logo
import CountUp from "react-countup"; // npm i react-countup pra contadores animados nas stats

export const HeroSection = () => {
  const benefits = [
    // Mantive os mesmos, mas se quiser, a gente expande com mais detalhes ou ícones
    {
      title: "Compre com Confiança",
      description: "Representação exclusiva do comprador",
    },
    {
      title: "O Poder de Comprar Certo",
      description: "Expertise e negociação estratégica",
    },
    {
      title: "Compra Descomplicada",
      description: "Processo simplificado e seguro",
    },
    {
      title: "Seu Agente Exclusivo",
      description: "100% focado nos seus interesses",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-20 md:pb-24">
      {" "}
      {/* pb- pra espaço antes do Niches */}
      {/* Imagem de fundo impactante */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-background.webp" // Substitua por uma imagem real (ex: casa dos sonhos)
          alt="Casa moderna em localização premium"
          fill
          className="object-cover"
          priority // Pra carregar rápido
        />
        <div className="absolute inset-0 bg-black opacity-50" />{" "}
        {/* Overlay pra contraste */}
      </div>
      {/* Padrão geométrico sutil (mantido, mas opcional com imagem) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      {/* Conteúdo principal (com pt- pra margem do topo) */}
      <div className="relative z-10 text-center px-0 max-w-7xl mx-auto pt-0 md:pt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", delay: 0.1 }} // Animação impactante pra logo e título
          className="mb-4"
        >
          {/* Logomarca adicionada: Impactante, centralizada acima do título */}
          <Image
            src="/images/h55.png" // Substitua pelo caminho real da sua logomarca (ex: .png ou .svg)
            alt="Logomarca da Imobiliária"
            width={192} // Largura base (ajuste pra seu tamanho ideal, ex: 192px = 12rem)
            height={192} // Altura (mantenha proporcional)
            className="mx-auto mb-0 w-24 md:w-32" // Responsivo: 8rem mobile, 12rem desktop
            priority // Carrega rápido
          />
          <span className="block text-4xl md:text-6xl font-bold text-white leading-tight">
            EXCLUSIVIDADE QUE MUDA TUDO
          </span>
          <span className="block text-xl md:text-2xl font-semibold text-amber-300 mt-2 tracking-wide">
            A MELHOR ASSESSORIA PARA SEU SUCESSO NO MERCADO IMOBILIÁRIO
          </span>
        </motion.div>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Direcionamos compradores e investidores para as melhores oportunidades
          imobiliárias, com foco exclusivo nos seus interesses, negociações
          estratégicas e resultados que transformam sonhos em realidade.
        </motion.p>

        {/* Grid de benefícios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white/80 rounded-xl p-6 border border-gray-200 hover:bg-white hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Botões de ação */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link
            href="/services"
            className="group relative px-8 py-4 bg-amber-500 text-white rounded-xl font-semibold hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="relative z-10">Como Funciona</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </Link>

          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-amber-500 text-amber-500 rounded-xl font-semibold hover:bg-amber-50 hover:border-amber-600 transition-all duration-300"
          >
            Fale com um Especialista
          </Link>
        </motion.div>

        {/* Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <CountUp
              end={100}
              duration={2}
              className="text-2xl font-bold text-amber-300 mb-1"
              suffix="%"
            />
            <div className="text-gray-200 text-sm">Do seu lado</div>
          </div>
          <div className="text-center">
            <CountUp
              end={0}
              duration={2}
              className="text-2xl font-bold text-amber-300 mb-1"
            />
            <div className="text-gray-200 text-sm">Conflito de interesses</div>
          </div>
          <div className="text-center">
            <CountUp
              end={24}
              duration={2}
              className="text-2xl font-bold text-amber-300 mb-1"
              suffix="/7"
            />
            <div className="text-gray-200 text-sm">Suporte especializado</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
