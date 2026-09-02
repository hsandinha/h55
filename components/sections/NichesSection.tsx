"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { LuArrowRight, LuKey, LuLock, LuShieldCheck, LuTarget } from "react-icons/lu";

const pilares = [
  {
    icon: LuTarget,
    num: "01",
    title: "Operamos a venda por dentro",
    desc: "Coordenamos lançamentos e imóveis selecionados todos os dias. A leitura de preço, velocidade e liquidez vem da mesa de vendas, não de relatório de terceiros.",
  },
  {
    icon: LuShieldCheck,
    num: "02",
    title: "Processo antes de promessa",
    desc: "Documento conferido, contrato centralizado, relatório aberto. O que prometemos é método, e método se cobra.",
  },
  {
    icon: LuKey,
    num: "03",
    title: "Plataforma própria",
    desc: "Leads distribuídos, follow-up registrado e funil visível para quem contrata. Ninguém depende da memória de um corretor.",
  },
  {
    icon: LuLock,
    num: "04",
    title: "Discrição",
    desc: "Proprietário, incorporadora e investidor tratam com um só interlocutor. O que é reservado fica reservado.",
  },
];

export const NichesSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#06121f] py-24 text-[#f4efe6] md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,37,64,0.35) 0%, rgba(6,18,31,1) 72%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#caa64a]">
              Por que a H55
            </p>
            <h2
              className="mt-5 text-4xl font-semibold leading-[1.04] md:text-6xl"
              style={{ fontFamily: "var(--font-playfair-display)" }}
            >
              Coordenação discreta, precisa e com um responsável.
            </h2>
          </div>
          <p className="max-w-xl self-end border-l border-[#b8860b]/55 pl-6 text-base leading-8 text-[#b9c6d4] md:text-lg">
            Quem contrata a H55 não precisa administrar imobiliárias, cobrar
            corretor nem conferir minuta. A coordenação existe para devolver
            tempo, controle e preço.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-px bg-[#b8860b]/22 sm:grid-cols-2 lg:grid-cols-4">
          {pilares.map((p, i) => {
            const Icon = p.icon;
            return (
              <Tilt
                key={p.num}
                tiltMaxAngleX={4}
                tiltMaxAngleY={5}
                glareEnable={false}
                transitionSpeed={1400}
                className="h-full bg-[#06121f] [transform-style:preserve-3d]"
              >
                <motion.div
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group relative flex min-h-[320px] flex-col justify-between bg-[#08203a]/70 p-7 transition duration-500 hover:bg-[#0a2540]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[#60748d]">
                      {p.num}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center border border-[#b8860b]/45 text-[#d9ad45] [transform:translateZ(22px)]">
                      <Icon size={18} />
                    </span>
                  </div>
                  <div className="[transform:translateZ(18px)]">
                    <h3
                      className="text-2xl font-semibold leading-tight text-[#f4efe6]"
                      style={{ fontFamily: "var(--font-playfair-display)" }}
                    >
                      {p.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#9fb0c4]">{p.desc}</p>
                    <span className="mt-7 block h-px w-8 bg-[#b8860b] transition-all duration-500 group-hover:w-20" />
                  </div>
                </motion.div>
              </Tilt>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-16 grid gap-8 border border-[#b8860b]/30 bg-[#030c17]/55 p-8 md:grid-cols-[1.05fr_0.95fr] md:p-10"
        >
          <div>
            <p className="text-[0.64rem] uppercase tracking-[0.26em] text-[#caa64a]">
              Próximo passo
            </p>
            <h3
              className="mt-4 text-3xl font-semibold leading-tight text-[#f4efe6] md:text-4xl"
              style={{ fontFamily: "var(--font-playfair-display)" }}
            >
              Qual é o seu caso?
            </h3>
          </div>
          <div>
            <p className="text-sm leading-7 text-[#b9c6d4] md:text-base">
              Um lançamento para coordenar, um imóvel para vender ou capital
              para alocar. Diga qual é o seu caso e a conversa começa no ponto
              certo, com quem vai responder por ela.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-[#d8ad45] bg-[#d8ad45] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#191207] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f0c85a]"
              >
                Falar com especialista
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-3 border border-[#d8ad45]/80 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#f7efe2] transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Ver as três frentes
                <LuArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
