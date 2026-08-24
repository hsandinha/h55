// src/app/coordenacao/page.tsx
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import Tilt from "react-parallax-tilt";

const pilares = [
  {
    title: "Centralização e controle de imagem",
    description:
      "Um só padrão de fotos, preço e descrição. O imóvel deixa de aparecer em dez anúncios diferentes, com qualidades distintas e valores divergentes.",
  },
  {
    title: "Governança e blindagem jurídica",
    description:
      "Certidões, minutas de contrato, alinhamento bancário e de cartório — o maior gargalo de qualquer venda — sob responsabilidade de uma equipe dedicada.",
  },
  {
    title: "Orquestração de mercado",
    description:
      "Regras claras de comissionamento, tabela de preços unificada e campanhas coordenadas para atrair os melhores corretores da região.",
  },
];

const comparativo = [
  {
    criterio: "Foco",
    pontual: "Liquidez do ativo e valorização máxima",
    lancamento: "Velocidade de venda e atingimento do VGV",
  },
  {
    criterio: "Canal",
    pontual: "Curadoria de 3 a 5 imobiliárias parceiras",
    lancamento: "Rede ampla de imobiliárias e corretores autônomos",
  },
  {
    criterio: "Marketing",
    pontual: "Ensaio fotográfico, tour virtual e anúncio direcionado",
    lancamento: "Identidade visual completa, estande e campanhas digitais",
  },
  {
    criterio: "Dor que resolve",
    pontual: "Desgaste na negociação e burocracia de cartório",
    lancamento: "Quebra de tabela de preço e concorrência desalinhada",
  },
];

const CoordenacaoPage = () => {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <Particles
        id="coordenacao-particles"
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
        {/* Abertura */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xs uppercase tracking-[0.24em] text-h55-gold text-center mb-4"
        >
          Para proprietários e incorporadoras
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-h55-blue mb-6 font-serif text-center"
        >
          Coordenação de Vendas
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg text-gray-700 mb-16 max-w-3xl mx-auto text-center"
        >
          A H55 funciona como a inteligência central do proprietário e da
          incorporadora: assumimos a estratégia comercial, a gestão documental e
          a curadoria das imobiliárias parceiras. Você conversa com um só
          parceiro — o mercado inteiro trabalha para vender o seu imóvel.
        </motion.p>

        {/* Solução 1 — compactos de investimento */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 sm:p-10 border-l-4 border-h55-gold"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-h55-blue mb-2 font-serif">
            Imóveis compactos para investimento
          </h2>
          <p className="text-h55-gold font-medium mb-6">
            Maximizando a rentabilidade do seu empreendimento com inteligência
            imobiliária.
          </p>
          <p className="text-gray-700 mb-6">
            A H55 lidera a estratégia e a coordenação de vendas de imóveis
            compactos focados em investimento. Conectamos incorporadoras e
            investidores através de uma gestão comercial estruturada, eficiente
            e orientada a resultados.
          </p>
          <ul className="space-y-4 mb-6">
            {[
              [
                "Estratégia comercial integrada",
                "alinhamento de preço, posicionamento e canais de distribuição.",
              ],
              [
                "Gestão de parcerias e corretores",
                "treinamento, engajamento e acompanhamento ativo do funil de vendas.",
              ],
              [
                "Foco em investidores",
                "abordagem técnica baseada em métricas de rentabilidade e valorização.",
              ],
            ].map(([titulo, texto]) => (
              <li key={titulo} className="text-gray-700">
                <span className="font-semibold text-h55-blue">{titulo}</span> —{" "}
                {texto}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 italic">
            Acelere a liquidez dos seus lançamentos compactos com quem entende o
            mercado de investimentos.
          </p>
        </motion.div>

        {/* Solução 2 — avulsos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 sm:p-10 border-l-4 border-h55-blue"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-h55-blue mb-2 font-serif">
            Representação exclusiva de imóveis avulsos
          </h2>
          <p className="text-h55-gold font-medium mb-6">
            A H55 cuida de tudo. Você conversa apenas com um parceiro.
          </p>
          <p className="text-gray-700 mb-6">
            Distribuir a chave do imóvel para dezenas de imobiliárias gera
            desencontro de informações, desvalorização do patrimônio e dor de
            cabeça. Na H55, assumimos a captação e a coordenação centralizada da
            venda do seu imóvel.
          </p>
          <ul className="space-y-4 mb-6">
            {[
              [
                "Um único ponto de contato",
                "a H55 representa você perante todo o mercado imobiliário.",
              ],
              [
                "Estratégia multicanal sem desordem",
                "coordenamos as melhores imobiliárias e corretores parceiros sem que você precise gerenciar ninguém.",
              ],
              [
                "Valorização do seu patrimônio",
                "informações padronizadas, preço alinhado e fotos profissionais que protegem o valor real do imóvel.",
              ],
            ].map(([titulo, texto]) => (
              <li key={titulo} className="text-gray-700">
                <span className="font-semibold text-h55-blue">{titulo}</span> —{" "}
                {texto}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 italic">
            Menos desgaste, mais controle e muito mais eficiência na venda do
            seu imóvel.
          </p>
        </motion.div>

        {/* Pilares */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-h55-blue mb-3 text-center font-serif">
            O que muda na prática
          </h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto mb-10">
            Três frentes que separam uma venda coordenada de um imóvel jogado no
            mercado.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pilares.map((pilar, index) => (
              <Tilt key={index} tiltReverse perspective={500} className="group">
                <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-lg transition-all h-full">
                  <h3 className="font-semibold text-h55-blue mb-2">
                    {pilar.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{pilar.description}</p>
                </div>
              </Tilt>
            ))}
          </div>
        </motion.div>

        {/* Comparativo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-h55-blue mb-3 text-center font-serif">
            Um ativo pontual ou um lançamento inteiro
          </h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto mb-10">
            A estrutura é a mesma; a estratégia muda conforme o que você precisa
            vender.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-lg bg-white/90">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="bg-h55-blue text-white">
                  <th className="p-4 font-semibold w-40"> </th>
                  <th className="p-4 font-semibold">Ativo pontual</th>
                  <th className="p-4 font-semibold">
                    Lançamento de empreendimento
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparativo.map((linha, index) => (
                  <tr
                    key={linha.criterio}
                    className={index % 2 === 1 ? "bg-gray-50" : ""}
                  >
                    <td className="p-4 font-semibold text-h55-blue align-top">
                      {linha.criterio}
                    </td>
                    <td className="p-4 text-gray-700 align-top">
                      {linha.pontual}
                    </td>
                    <td className="p-4 text-gray-700 align-top">
                      {linha.lancamento}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Transparência sobre a remuneração */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 rounded-2xl border border-h55-gold/50 bg-h55-gold/10 p-8"
        >
          <h2 className="text-2xl font-semibold text-h55-blue mb-3">
            E quanto custa essa camada a mais?
          </h2>
          <p className="text-gray-700">
            Coordenar uma venda tem custo — uma taxa de gestão ou uma fatia da
            comissão. Por isso ela só se justifica quando devolve ganho real de
            velocidade ou de preço final. É esse o nosso compromisso: relatório
            aberto do funil, tabela e comissionamento claros para todas as
            imobiliárias parceiras, e um único responsável por prestar contas
            para você.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-h55-blue mb-2">
            Quer coordenar a venda do seu imóvel com a H55?
          </h3>
          <p className="text-gray-700 mb-6">
            Conte o que você precisa vender e montamos a estratégia comercial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-h55-blue text-white rounded-full font-semibold hover:bg-h55-gold hover:text-h55-blue transition-colors shadow-lg"
            >
              Falar com a coordenação
            </Link>
            <Link
              href="/services"
              className="inline-block px-8 py-3 border border-h55-blue text-h55-blue rounded-full font-semibold hover:bg-h55-blue hover:text-white transition-colors"
            >
              Ver todos os serviços
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoordenacaoPage;
