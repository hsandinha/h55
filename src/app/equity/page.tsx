// src/app/equity/page.tsx
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";
import { Descritivo } from "../../../components/frentes/Descritivo";

const PLAYFAIR = { fontFamily: "var(--font-playfair-display)" };

const entregas = [
  "Acesso a oportunidades que não chegam ao mercado aberto",
  "Leitura da oportunidade: incorporador, produto, ciclo e cenário de saída",
  "Estruturação da entrada conforme o capital e o horizonte do investidor",
  "Acompanhamento da operação até o desinvestimento",
];

const oQueFazemos = [
  {
    title: "Acesso",
    desc: "Coordenamos vendas de lançamentos e de imóveis selecionados todos os dias. É dessa mesa que saem as oportunidades que apresentamos, antes de virarem anúncio.",
  },
  {
    title: "Leitura",
    desc: "Quem opera a venda por dentro sabe quanto e em quanto tempo um produto vende. É essa leitura de velocidade, preço e liquidez que sustenta a análise de cada oportunidade.",
  },
  {
    title: "Acompanhamento",
    desc: "Do aporte à saída, com o andamento da obra, das vendas e do momento de desinvestir acompanhados pela mesma equipe que apresentou a oportunidade.",
  },
];

const EquityPage = () => {
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
                03 · Private equity imobiliário
              </p>
              <h1
                className="mt-6 text-balance text-4xl font-semibold leading-[1.02] md:text-6xl lg:text-[3.8rem]"
                style={PLAYFAIR}
              >
                Investir em imóvel vai muito além{" "}
                <span className="text-[#d9ad45]">da unidade na planta.</span>
              </h1>
            </div>
            <p className="max-w-xl self-end border-l border-[#b8860b]/55 pl-6 text-base leading-8 text-[#b9c6d4] md:text-lg">
              Temos acesso a oportunidades que não chegam ao mercado aberto,
              porque operamos a venda por dentro. Foi assim que a H55 nasceu:
              atendendo um investidor com carteira e apetite para equity e
              revenda de ativos prontos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Descritivo */}
      <Descritivo
        numero="03"
        titulo="Private equity imobiliário"
        texto={
          <>
            Investir em imóvel pode ir muito além da compra de uma unidade na
            planta. Temos acesso a diversas oportunidades no mercado.{" "}
            <span className="text-[#9a7b1e]">
              Agende uma reunião com nossos especialistas.
            </span>
          </>
        }
        entregas={entregas}
      />

      {/* O que fazemos */}
      <section className="bg-[#ebe3d5] py-24 md:py-32">
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
                Para investidores
              </p>
              <h2
                className="mt-5 text-balance text-4xl font-semibold leading-[1.04] text-[#0a2540] md:text-5xl"
                style={PLAYFAIR}
              >
                Participar do resultado da incorporação, não do metro quadrado.
              </h2>
            </div>
            <p className="max-w-xl self-end text-base leading-8 text-[#52617a] md:text-lg">
              Cada operação é analisada caso a caso, com o material aberto e o
              risco explicado antes de qualquer conversa sobre valor. A conversa
              começa pelo seu horizonte e o seu apetite, não pelo produto que
              temos para oferecer.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-[#0a2540]/15 md:grid-cols-3">
            {oQueFazemos.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group flex min-h-[260px] flex-col bg-[#ebe3d5] p-8 transition-colors duration-500 hover:bg-[#e3d9c7]"
              >
                <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[#8a7a5e]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="mt-8 text-2xl font-semibold leading-tight text-[#0a2540]"
                  style={PLAYFAIR}
                >
                  {c.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#52617a]">{c.desc}</p>
                <div className="mt-auto pt-7">
                  <span className="block h-px w-8 bg-[#b8860b] transition-all duration-500 group-hover:w-20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA sóbrio */}
      <section className="relative overflow-hidden bg-[#06121f] py-24 text-[#f4efe6] md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-8 border border-[#b8860b]/30 bg-[#030c17]/55 p-8 md:grid-cols-[1.05fr_0.95fr] md:p-10"
          >
            <div>
              <p className="text-[0.64rem] uppercase tracking-[0.26em] text-[#caa64a]">
                Próximo passo
              </p>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight text-[#f4efe6] md:text-4xl"
                style={PLAYFAIR}
              >
                Agende uma reunião com nossos especialistas.
              </h2>
            </div>
            <div>
              <p className="text-sm leading-7 text-[#b9c6d4] md:text-base">
                Uma conversa reservada, sem apresentação de produto. Entendemos
                o seu capital, o seu prazo e o que você já tem em carteira, e
                só então falamos das oportunidades em análise.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact?frente=equity"
                  className="inline-flex items-center justify-center border border-[#d8ad45] bg-[#d8ad45] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#191207] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f0c85a]"
                >
                  Agendar reunião
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-3 border border-[#d8ad45]/80 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#f7efe2] transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Ver as três frentes
                  <LuArrowRight size={16} />
                </Link>
              </div>
              <p className="mt-8 text-xs leading-6 text-[#6b7a90]">
                Esta página tem caráter institucional. Não constitui oferta
                pública de investimento nem promessa de rentabilidade.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default EquityPage;
