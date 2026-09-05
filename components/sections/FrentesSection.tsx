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
    href: "/lancamentos",
  },
  {
    num: "02",
    label: "Proprietários",
    title: "Coordenação de imóveis selecionados",
    href: "/imoveis-selecionados",
  },
  {
    num: "03",
    label: "Investidores",
    title: "Private equity imobiliário",
    href: "/equity",
  },
];

export const FrentesSection = () => {
  return (
    <section className="bg-[#ebe3d5] py-24 md:py-28">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-14">
        <h2
          className="mb-12 text-balance text-4xl font-semibold leading-[1.04] text-[#0a2540] md:text-5xl"
          style={PLAYFAIR}
        >
          Três pilares de atuação imobiliária
        </h2>
        <div className="grid grid-cols-1 gap-px bg-[#0a2540]/15 md:grid-cols-3">
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
