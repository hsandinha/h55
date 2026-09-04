// src/app/about/page.tsx
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";

const PLAYFAIR = { fontFamily: "var(--font-playfair-display)" };

const historia = [
  {
    marco: "Estratégia",
    texto:
      "Cada trabalho começa pela compreensão do ativo, do objetivo e das partes envolvidas. A partir disso, definimos a direção comercial e o escopo da coordenação.",
  },
  {
    marco: "Coordenação",
    texto:
      "Centralizamos informações, parceiros, visitas, documentos, contratos e acompanhamentos para que o processo avance de forma organizada.",
  },
  {
    marco: "Especialização",
    texto:
      "Atuamos em três frentes: lançamentos imobiliários, imóveis selecionados e private equity. Cada uma possui público e abordagem próprios.",
  },
];

const valores = [
  {
    title: "Responsabilidade",
    desc: "Um ponto de contato para conduzir o processo, organizar as demandas e manter as partes alinhadas.",
  },
  {
    title: "Clareza",
    desc: "Escopo, responsabilidades e próximos passos definidos desde o início de cada trabalho.",
  },
  {
    title: "Método",
    desc: "Estratégia, acompanhamento e gestão aplicados de maneira consistente em cada frente de atuação.",
  },
  {
    title: "Especialização",
    desc: "Uma abordagem específica para as necessidades de incorporadoras, proprietários e investidores.",
  },
  {
    title: "Discrição",
    desc: "Informações e oportunidades tratadas com cuidado ao longo de todo o relacionamento.",
  },
];

const frentes = [
  ["01", "Coordenação de lançamentos imobiliários", "/lancamentos"],
  ["02", "Coordenação de imóveis selecionados", "/imoveis-selecionados"],
  ["03", "Private equity imobiliário", "/equity"],
];

const AboutPage = () => {
  return (
    <>
      {/* Abertura */}
      <section className="relative overflow-hidden bg-[#06121f] py-24 text-[#f4efe6] md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,37,64,0.55) 0%, rgba(6,18,31,1) 78%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1240px] px-6 md:px-10 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]"
          >
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#caa64a]">
                Sobre a H55
              </p>
              <h1
                className="mt-6 text-balance text-4xl font-semibold leading-[1.02] md:text-6xl lg:text-[3.8rem]"
                style={PLAYFAIR}
              >
                Estratégia e coordenação para{` `}
                <span className="text-[#d9ad45]">negócios imobiliários.</span>
              </h1>
            </div>
            <p className="max-w-xl self-end border-l border-[#b8860b]/55 pl-6 text-base leading-8 text-[#b9c6d4] md:text-lg">
              A H55 coordena lançamentos para incorporadoras, assume a condução
              da venda de imóveis selecionados para proprietários e apresenta
              oportunidades de private equity para investidores.
            </p>
          </motion.div>
        </div>
      </section>

      {/* História */}
      <section className="bg-[#f7f3ea] py-24 md:py-32">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#9a7b1e]">
              Como atuamos
            </p>
            <h2
              className="mt-5 text-balance text-4xl font-semibold leading-[1.04] text-[#0a2540] md:text-5xl"
              style={PLAYFAIR}
            >
              Uma atuação estruturada em três movimentos.
            </h2>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-[#0a2540]/15 md:grid-cols-3">
            {historia.map((h, i) => (
              <motion.div
                key={h.marco}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex min-h-[300px] flex-col bg-[#f7f3ea] p-8"
              >
                <span
                  className="text-5xl font-semibold leading-none text-[#d9ad45]"
                  style={PLAYFAIR}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-base font-semibold uppercase tracking-[0.08em] text-[#0a2540]">
                  {h.marco}
                </h3>
                <p className="mt-4 text-[0.95rem] leading-7 text-[#52617a]">{h.texto}</p>
              </motion.div>
            ))}
          </div>

          <motion.blockquote
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16 border-l border-[#b8860b] pl-6 md:pl-8"
          >
            <p
              className="max-w-3xl text-balance text-2xl leading-[1.35] text-[#0a2540] md:text-[2.1rem] md:leading-[1.3]"
              style={PLAYFAIR}
            >
              Diferentes objetivos exigem abordagens específicas.{" "}
              <span className="text-[#9a7b1e]">A coordenação conecta todas as etapas.</span>
            </p>
          </motion.blockquote>
        </div>
      </section>

      {/* Três frentes */}
      <section className="bg-[#ebe3d5] py-24 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-10 border-b border-[#0a2540]/15 pb-10 md:grid-cols-[0.9fr_1.1fr]"
          >
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#9a7b1e]">
                O que fazemos
              </p>
              <h2
                className="mt-5 text-balance text-4xl font-semibold leading-[1.04] text-[#0a2540] md:text-5xl"
                style={PLAYFAIR}
              >
                Três frentes de atuação.
              </h2>
            </div>
            <p className="max-w-xl self-end text-base leading-8 text-[#52617a] md:text-lg">
              Cada frente tem cliente, processo e equipe próprios. O que não
              muda é a regra: um responsável pelo processo inteiro.
            </p>
          </motion.div>

          <ul className="divide-y divide-[#0a2540]/12">
            {frentes.map(([num, titulo, href]) => (
              <li key={num}>
                <Link
                  href={href}
                  className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 py-6 transition-colors hover:bg-[#e3d9c7]/60 md:py-8"
                >
                  <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[#8a7a5e]">
                    {num}
                  </span>
                  <span
                    className="text-2xl font-semibold leading-tight text-[#0a2540] md:text-3xl"
                    style={PLAYFAIR}
                  >
                    {titulo}
                  </span>
                  <LuArrowRight
                    size={18}
                    className="text-[#9a7b1e] transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Valores */}
      <section className="relative overflow-hidden bg-[#06121f] py-24 text-[#f4efe6] md:py-32">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]"
          >
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#caa64a]">
                Nossos valores
              </p>
              <h2
                className="mt-5 text-balance text-4xl font-semibold leading-[1.04] md:text-5xl"
                style={PLAYFAIR}
              >
                O que você pode cobrar de nós.
              </h2>
            </div>
            <p className="max-w-xl self-end border-l border-[#b8860b]/55 pl-6 text-base leading-8 text-[#b9c6d4] md:text-lg">
              Estes princípios orientam a maneira como estruturamos a estratégia,
              conduzimos a operação e nos relacionamos com cada cliente.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-px bg-[#b8860b]/22 sm:grid-cols-2 lg:grid-cols-5">
            {valores.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="group flex min-h-[280px] flex-col bg-[#08203a]/70 p-7 transition duration-500 hover:bg-[#0a2540]"
              >
                <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[#60748d]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="mt-8 text-xl font-semibold leading-tight text-[#f4efe6]"
                  style={PLAYFAIR}
                >
                  {v.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#9fb0c4]">{v.desc}</p>
                <div className="mt-auto pt-7">
                  <span className="block h-px w-8 bg-[#b8860b] transition-all duration-500 group-hover:w-20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#ebe3d5] py-24 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-10 border-t border-[#0a2540]/20 pt-12 md:grid-cols-[0.9fr_1.1fr]"
          >
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#9a7b1e]">
                Próximo passo
              </p>
              <h2
                className="mt-5 text-balance text-3xl font-semibold leading-[1.06] text-[#0a2540] md:text-5xl"
                style={PLAYFAIR}
              >
                Qual é o seu caso?
              </h2>
            </div>
            <div className="self-end">
              <p className="max-w-xl text-base leading-8 text-[#52617a] md:text-lg">
                Um lançamento para coordenar, um imóvel para vender ou capital
                para alocar. Diga qual é o seu caso e a conversa começa no
                ponto certo.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-[#0a2540] bg-[#0a2540] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#f4efe6] transition duration-300 hover:-translate-y-0.5 hover:bg-[#123457]"
                >
                  Falar com a H55
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-3 border border-[#0a2540]/40 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#0a2540] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0a2540]/5"
                >
                  Ver as três frentes
                  <LuArrowRight size={16} />
                </Link>
              </div>
              <p className="mt-8 text-[0.64rem] uppercase tracking-[0.24em] text-[#8a7a5e]">
                H55 Negócios Imobiliários · CRECI-PJ 9045
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
