"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";

const PLAYFAIR = { fontFamily: "var(--font-playfair-display)" };

const REGRAS = [
  {
    title: "Um interlocutor",
    desc: "Incorporadora, proprietário ou investidor conversam com uma pessoa só. Quem responde pelo processo é quem presta contas.",
  },
  {
    title: "Uma regra para todas as imobiliárias",
    desc: "Mesmo preço, mesmo material, mesma comissão. Quem vende com a H55 vende na mesma tabela que todo mundo.",
  },
  {
    title: "Auditado antes de anunciar",
    desc: "Matrícula, certidões e documentos conferidos antes do primeiro anúncio, para o contrato não morrer no cartório.",
  },
  {
    title: "Nunca pelas duas pontas",
    desc: "Quando a H55 coordena a venda de um imóvel, ela não representa quem está comprando aquele imóvel.",
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
            Não vendemos imóveis. Coordenamos a venda.
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
            Não colocamos corretor próprio na ponta. Definimos a estratégia,
            selecionamos e treinamos quem vende, distribuímos os leads,
            conferimos cada documento e centralizamos o contrato. O mercado
            trabalha pela venda; a H55 responde por ela.
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
              Quatro compromissos que valem nas três frentes.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#9fb0c4]">
            Não são slogans. São as condições para a H55 aceitar coordenar uma
            venda, e o que você pode cobrar de nós depois.
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
            Os imóveis que a H55 coordena.
          </h2>
          <p className="mt-7 max-w-md text-base leading-8 text-[#52617a]">
            Cada imóvel da carteira passou pela mesma régua: documentação
            auditada, material próprio e preço definido com leitura de
            liquidez. O que está aqui está pronto para proposta.
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
            ["Documentação", "matrícula e certidões conferidas"],
            ["Material", "fotos, drone, tour virtual e página própria"],
            ["Preço", "comparativos e leitura de liquidez"],
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
