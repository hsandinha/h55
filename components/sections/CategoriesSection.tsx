"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuBuilding2, LuGem, LuHouse, LuTrendingUp, LuArrowRight } from "react-icons/lu";

const categorias = [
  {
    icon: LuHouse,
    title: "Primeira Casa",
    desc: "Leitura financeira, segurança contratual e escolha sem ansiedade.",
    img: "/images/primeira-casa.jpg",
    label: "Residencial",
  },
  {
    icon: LuTrendingUp,
    title: "Investimentos",
    desc: "Ativos avaliados por liquidez, valorização e tese de retorno.",
    img: "/images/investimentos.jpg",
    label: "Capital",
  },
  {
    icon: LuBuilding2,
    title: "Imóvel Comercial",
    desc: "Pontos e espaços analisados pelo potencial real do negócio.",
    img: "/images/comercial.jpg",
    label: "Operação",
  },
  {
    icon: LuGem,
    title: "Imóveis de Luxo",
    desc: "Discrição, escassez e negociação para patrimônios exigentes.",
    img: "/images/luxo.jpg",
    label: "Alto padrão",
  },
];

export const CategoriesSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#ebe3d5] py-24 md:py-32">
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
              Para cada objetivo
            </p>
            <h2
              className="mt-5 text-4xl font-semibold leading-[1.04] text-[#0a2540] md:text-6xl"
              style={{ fontFamily: "var(--font-playfair-display)" }}
            >
              O imóvel certo para a sua estratégia.
            </h2>
          </div>
          <p className="max-w-xl self-end text-base leading-8 text-[#52617a] md:text-lg">
            A categoria não define apenas o tipo de imóvel. Ela define o nível
            de análise, o processo de decisão e a forma de proteger o capital.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-px bg-[#0a2540]/15 sm:grid-cols-2 lg:grid-cols-4">
          {categorias.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-[#ebe3d5]"
              >
                <Link
                  href="/imoveis"
                  className="group relative block min-h-[520px] overflow-hidden bg-[#06121f]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.img}
                    alt={c.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(6,18,31,0.08) 0%, rgba(6,18,31,0.42) 42%, rgba(6,18,31,0.94) 100%)",
                    }}
                  />
                  <div className="relative flex min-h-[520px] flex-col justify-between p-6">
                    <div className="flex items-center justify-between">
                      <span className="border border-[#d9ad45]/45 px-3 py-1 text-[0.58rem] uppercase tracking-[0.22em] text-[#d9ad45]">
                        {c.label}
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center border border-[#d9ad45]/45 text-[#f4efe6]">
                        <Icon size={18} />
                      </span>
                    </div>

                    <div>
                      <h3
                        className="text-3xl font-semibold leading-tight text-[#f4efe6]"
                        style={{ fontFamily: "var(--font-playfair-display)" }}
                      >
                        {c.title}
                      </h3>
                      <p className="mt-4 min-h-[84px] text-sm leading-7 text-[#d8e0ea]">
                        {c.desc}
                      </p>
                      <span className="mt-6 flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.24em] text-[#d9ad45]">
                        Ver seleção
                        <LuArrowRight
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
