"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const HeroSection = () => {
  const benefits = [
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Padrão geométrico sutil */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        ></motion.div>

        {/* Título em duas linhas */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-2"
        >
          <span className="block text-4xl md:text-6xl font-bold text-gray-700 leading-tight">
            EXCLUSIVIDADE
          </span>
          <span className="block text-xl md:text-2xl font-semibold text-amber-500 mt-2 tracking-wide">
            Estamos apenas do seu lado
          </span>
        </motion.h1>

        {/* Novo subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Compartilhe seu propósito conosco. Vamos conduzir todo o processo com
          transparência e segurança, garantindo o melhor negócio para você.
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
              className="bg-gray-100 rounded-xl p-6 border border-gray-200 hover:bg-gray-200 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-500 text-sm">{benefit.description}</p>
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
            href="/servicos"
            className="group relative px-8 py-4 bg-amber-500 text-white rounded-xl font-semibold hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="relative z-10">Como Funciona</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </Link>

          <Link
            href="/contato"
            className="px-8 py-4 border-2 border-amber-500 text-amber-500 rounded-xl font-semibold hover:bg-amber-50 hover:border-amber-600 transition-all duration-300"
          >
            Fale com um Buyer&apos;s Agent
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
            <div className="text-2xl font-bold text-amber-500 mb-1">100%</div>
            <div className="text-gray-700 text-sm">Do seu lado</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-500 mb-1">0</div>
            <div className="text-gray-700 text-sm">Conflito de interesses</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-500 mb-1">24/7</div>
            <div className="text-gray-700 text-sm">Suporte especializado</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
