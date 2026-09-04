"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";

const PLAYFAIR = { fontFamily: "var(--font-playfair-display)" };

const REGRAS = [
  {
    title: "Estratégia definida",
    desc: "Cada operação começa com objetivos, responsabilidades e próximos passos claramente estabelecidos.",
  },
  {
    title: "Coordenação centralizada",
    desc: "A H55 organiza os participantes, as informações e os documentos em um único fluxo de trabalho.",
  },
  {
    title: "Acompanhamento contínuo",
    desc: "A operação é acompanhada em todas as etapas, com alinhamento entre as partes e atenção às pendências.",
  },
  {
    title: "Um ponto de contato",
    desc: "Quem contrata a H55 tem um responsável pela condução do processo e pela comunicação do início ao fim.",
  },
];

function ComoTrabalhamos() {
  return (
    <section className="relative overflow-hidden bg-[#f4efe6] py-24 text-[#06121f] md:py-32">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-6 md:grid-cols-[0.85fr_1.15fr] md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7 }}
          className="border-l border-[#b8860b] pl-6"
        >
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#9a7b1e]">
            Como trabalhamos
          </p>
          <h2
            className="mt-6 text-4xl font-semibold leading-[1.02] text-[#0a2540] md:text-6xl"
            style={PLAYFAIR}
          >
            Estratégia, gestão e acompanhamento em cada etapa.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="flex flex-col justify-end"
        >
          <p className="max-w-2xl text-lg leading-9 text-[#26364a] md:text-xl">
            A H55 atua como centro de coordenação da operação. Estruturamos a
            estratégia, organizamos os participantes, acompanhamos documentos e
            contratos e mantemos cada parte alinhada ao longo do processo.
          </p>
          <div className="mt-10 grid gap-4 border-y border-[#0a2540]/15 py-6 text-sm uppercase tracking-[0.18em] text-[#52617a] sm:grid-cols-3">
            <span>Coordenação</span>
            <span>Curadoria</span>
            <span>Prestação de contas</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Regras() {
  return (
    <section className="relative bg-[#06121f] py-20 text-[#f4efe6] md:py-28">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-6 border-b border-[#b8860b]/30 pb-8 md:flex-row md:items-end"
        >
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#caa64a]">
              As regras da casa
            </p>
            <h2
              className="mt-4 text-3xl font-semibold leading-tight md:text-5xl"
              style={PLAYFAIR}
            >
              Um método que orienta as três frentes.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#9fb0c4]">
            A complexidade muda de uma frente para outra. A disciplina de
            coordenação permanece a mesma.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-px bg-[#b8860b]/22 sm:grid-cols-2 lg:grid-cols-4">
          {REGRAS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group flex min-h-[280px] flex-col bg-[#06121f] p-7 transition duration-500 hover:bg-[#08203a]"
            >
              <span
                className="text-5xl font-semibold leading-none text-[#d9ad45]"
                style={PLAYFAIR}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 text-lg font-semibold leading-snug text-[#f4efe6]">
                {r.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#9fb0c4]">{r.desc}</p>
              <div className="mt-auto pt-6">
                <span className="block h-px w-8 bg-[#b8860b] transition-all duration-500 group-hover:w-20" />
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-[0.64rem] uppercase tracking-[0.24em] text-[#60748d]">
          H55 Negócios Imobiliários · CRECI-PJ 9045
        </p>
      </div>
    </section>
  );
}

function Carteira() {
  return (
    <section className="bg-[#ebe3d5] py-24 md:py-32">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#9a7b1e]">
            A carteira
          </p>
          <h2
            className="mt-5 text-balance text-4xl font-semibold leading-[1.04] text-[#0a2540] md:text-5xl"
            style={PLAYFAIR}
          >
            Imóveis selecionados pela H55.
          </h2>
          <p className="mt-7 max-w-md text-base leading-8 text-[#52617a]">
            Conheça a carteira de imóveis conduzida pela H55, com informações
            organizadas para apoiar visitas, propostas e a evolução da venda.
          </p>
          <Link
            href="/imoveis"
            className="mt-8 inline-flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.22em] text-[#9a7b1e] transition-colors hover:text-[#0a2540]"
          >
            Explorar a carteira
            <LuArrowRight size={14} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 gap-px self-end bg-[#0a2540]/15 sm:grid-cols-3"
        >
          {[
            ["Informações", "dados do imóvel reunidos em um só lugar"],
            ["Apresentação", "material preparado para apoiar a comercialização"],
            ["Atendimento", "visitas e propostas conduzidas pela coordenação"],
          ].map(([t, d]) => (
            <div key={t} className="bg-[#ebe3d5] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0a2540]">{t}</p>
              <p className="mt-2 text-sm leading-7 text-[#52617a]">{d}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export const NarrativeSection = () => (
  <>
    <ComoTrabalhamos />
    <Regras />
    <Carteira />
  </>
);
