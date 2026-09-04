"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";

const PLAYFAIR = { fontFamily: "var(--font-playfair-display)" };

const frentes = [
  {
    num: "01",
    label: "Incorporadoras",
    title: "Coordenação de lançamentos imobiliários",
    desc: "Estratégia comercial, tabela de vendas, imobiliárias parceiras, leads, marketing, documentos e contratos coordenados pela H55.",
    href: "/lancamentos",
  },
  {
    num: "02",
    label: "Proprietários",
    title: "Coordenação de imóveis selecionados",
    desc: "Fazemos o papel do dono e coordenamos toda a venda, da seleção das imobiliárias à transferência do imóvel.",
    href: "/imoveis-selecionados",
  },
  {
    num: "03",
    label: "Investidores",
    title: "Private equity imobiliário",
    desc: "Ampliamos a forma de investir no mercado imobiliário com acesso a oportunidades selecionadas.",
    href: "/equity",
  },
];

export const FrentesSection = () => {
  return (
    <section className="bg-[#ebe3d5] py-24 md:py-28">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-10 border-b border-[#0a2540]/15 pb-12 md:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#9a7b1e]">
              Três frentes
            </p>
            <h2
              className="mt-5 text-balance text-4xl font-semibold leading-[1.04] text-[#0a2540] md:text-5xl"
              style={PLAYFAIR}
            >
              Uma frente para cada objetivo.
            </h2>
          </div>
          <p className="max-w-xl self-end text-base leading-8 text-[#52617a] md:text-lg">
            Incorporadoras, proprietários e investidores têm necessidades
            diferentes. Por isso, cada frente possui uma atuação clara e uma
            conversa conduzida por especialistas.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-px bg-[#0a2540]/15 md:grid-cols-3">
          {frentes.map((f, i) => (
            <motion.div
              key={f.num}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-[#ebe3d5]"
            >
              <Link
                href={f.href}
                className="group flex h-full min-h-[280px] flex-col p-8 transition-colors duration-500 hover:bg-[#e3d9c7]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[#8a7a5e]">
                    {f.num}
                  </span>
                  <span className="border border-[#9a7b1e]/45 px-3 py-1 text-[0.58rem] uppercase tracking-[0.22em] text-[#9a7b1e]">
                    {f.label}
                  </span>
                </div>
                <h3
                  className="mt-10 text-2xl font-semibold leading-tight text-[#0a2540]"
                  style={PLAYFAIR}
                >
                  {f.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#52617a]">
                  {f.desc}
                </p>
                <span className="mt-auto flex items-center gap-3 pt-8 text-[0.62rem] uppercase tracking-[0.24em] text-[#9a7b1e]">
                  Conhecer
                  <LuArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
