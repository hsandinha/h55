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
        {/* Seção Sobre Nós */}
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
          exclusivamente o nosso cliente. Atuamos como{" "}
          <span className="font-semibold text-h55-gold">
            Concierge Imobiliário
          </span>
          , trazendo para o Brasil um conceito inovador, transparente e focado
          em você.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
              Conectar pessoas às melhores oportunidades imobiliárias do
              mercado, oferecendo uma assessoria especializada e isenta,
              garantindo que cada decisão de compra ou investimento seja feita
              com segurança e confiança.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <h2 className="text-2xl font-semibold text-h55-blue mb-3">
              Nossa Visão
            </h2>
            <p className="text-gray-700">
              Ser a referência no mercado imobiliário brasileiro como a
              principal assessoria independente para compradores e investidores,
              reconhecida pela expertise, confiabilidade e pela geração de valor
              em cada transação.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <h2 className="text-2xl font-semibold text-h55-blue mb-3">
              Por que H55?
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

        {/* Seção Nossa Origem */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-h55-blue mb-8 text-center">
            Nossa Origem
          </h2>
          <Tilt perspective={1000} tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 sm:p-12 hover:shadow-xl transition-shadow">
              <div className="text-gray-700 text-lg space-y-6 text-left md:text-justify">
                <p>
                  Nossa história começou de forma singular: atender com
                  excelência um único investidor, detentor de uma robusta
                  carteira de imóveis e apetite para novas oportunidades em
                  equity e revenda de ativos prontos. Essa relação exclusiva nos
                  ensinou que o mercado imobiliário carece de algo essencial:
                  uma representação estratégica e personalizada, voltada apenas
                  aos interesses de quem compra e investe.
                </p>
                <p>
                  A partir dessa jornada inicial, percebemos que o mercado
                  carecia de uma atuação realmente personalizada, voltada
                  exclusivamente para os interesses do comprador e do investidor
                  — com foco em resultado financeiro, economia de tempo e tomada
                  de decisão estratégica. Assim, adotamos uma abordagem de
                  concierge imobiliário, conduzindo nossos clientes em todo o
                  ciclo de aquisição e desinvestimento de forma inteligente,
                  segura e eficiente.
                </p>
                <p>
                  Nosso compromisso é representar, com excelência, quem deseja
                  comprar bem, investir melhor e encontrar oportunidades sólidas
                  no mercado imobiliário. Atuamos lado a lado com nossos
                  clientes, oferecendo uma curadoria criteriosa, acesso a ativos
                  off-market e inteligência de mercado — sempre com discrição,
                  agilidade e alinhamento total de interesses.
                </p>
              </div>
            </div>
          </Tilt>
        </motion.div>

        {/* Citação de Destaque */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-2xl md:text-3xl font-serif text-gray-800 mb-16 italic"
        >
          &ldquo;Afinal, não vendemos imóveis.{" "}
          <span className="text-h55-gold not-italic font-semibold">
            Representamos pessoas.
          </span>
          &rdquo;
        </motion.blockquote>

        {/* Nova Seção: Soluções Financeiras Avançadas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-h55-blue mb-4 text-center">
            Soluções Financeiras Avançadas
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Potencialize seus investimentos através de estratégias financeiras
            diversificadas no mercado imobiliário
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Tilt perspective={1000} tiltMaxAngleX={5} tiltMaxAngleY={5}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all h-full"
              >
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <h3 className="text-2xl font-bold text-h55-blue mb-4 text-center">
                  Equity Imobiliário
                </h3>
                <p className="text-gray-700 text-center">
                  Maximize seus retornos através de investimentos estratégicos
                  em participação societária. Identificamos oportunidades em
                  fundos imobiliários, SPEs e parcerias estratégicas, permitindo
                  diversificação com menor capital inicial e maior potencial de
                  rentabilidade.
                </p>
              </motion.div>
            </Tilt>

            <Tilt perspective={1000} tiltMaxAngleX={5} tiltMaxAngleY={5}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all h-full"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <h3 className="text-2xl font-bold text-h55-blue mb-4 text-center">
                  Estruturação de Dívida
                </h3>
                <p className="text-gray-700 text-center">
                  Otimize sua capacidade de investimento através de estratégias
                  inteligentes de financiamento. Analisamos as melhores linhas
                  de crédito e estruturamos operações que potencializam seus
                  recursos, utilizando alavancagem de forma segura e
                  estratégica.
                </p>
              </motion.div>
            </Tilt>

            <Tilt perspective={1000} tiltMaxAngleX={5} tiltMaxAngleY={5}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all h-full"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <h3 className="text-2xl font-bold text-h55-blue mb-4 text-center">
                  Permutas Estratégicas
                </h3>
                <p className="text-gray-700 text-center">
                  Evolua seu patrimônio através de trocas inteligentes e
                  estratégicas. Identificamos oportunidades de permuta que
                  agregam valor ao seu portfólio, seja para upgrade residencial,
                  diversificação ou otimização tributária.
                </p>
              </motion.div>
            </Tilt>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="text-gray-600 italic text-lg">
              &ldquo;No mercado imobiliário, a estratégia financeira certa faz
              toda a diferença entre um bom negócio e um negócio
              excepcional.&rdquo;
            </p>
          </motion.div>
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
                title: "Foco no Cliente",
                desc: "Nossas ações são sempre direcionadas para entender e satisfazer as necessidades de quem busca o imóvel, colocando seus interesses acima de tudo.",
              },
              {
                title: "Imparcialidade e Transparência",
                desc: "Atuamos sem conflitos de interesse, garantindo que o cliente receba as informações mais claras e objetivas para tomar a melhor decisão.",
              },
              {
                title: "Expertise de Mercado",
                desc: "Conhecimento aprofundado e atualizado sobre o mercado imobiliário, transformado em vantagem para nossos clientes.",
              },
              {
                title: "Segurança e Confiança",
                desc: "Nosso compromisso é proporcionar um processo de compra ou investimento seguro, construindo um relacionamento duradouro.",
              },
              {
                title: "Inovação",
                desc: "Buscamos constantemente novas formas de aprimorar nossa assessoria, com as melhores ferramentas e abordagens do mercado.",
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-h55-gold text-h55-blue rounded-full font-semibold hover:bg-h55-blue hover:text-white transition-colors shadow-lg hover:shadow-h55-blue/50"
            >
              Fale com um Especialista
            </Link>
            <Link
              href="/services"
              className="inline-block px-8 py-3 bg-h55-gold text-h55-blue rounded-full font-semibold hover:bg-h55-blue hover:text-white transition-colors shadow-lg hover:shadow-h55-blue/50"
            >
              Conheça Nossos Serviços
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
