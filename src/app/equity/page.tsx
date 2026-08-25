// src/app/equity/page.tsx
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";

const PLAYFAIR = { fontFamily: "var(--font-playfair-display)" };

const comoFunciona = [
  {
    title: "Leitura da tese",
    desc: "Viabilidade, ciclo do empreendimento, capacidade do incorporador e cenário de saída, analisados antes de qualquer conversa sobre valor.",
  },
  {
    title: "Estruturação da entrada",
    desc: "Participação societária, permuta ou estruturação de dívida, conforme o que faz sentido para o seu capital e para a fase da obra.",
  },
  {
    title: "Acompanhamento",
    desc: "Do aporte ao desinvestimento, com acompanhamento do andamento da obra, das vendas e do momento de saída.",
  },
];

const modalidades = [
  {
    title: "Equity imobiliário",
    desc: "Participação societária em incorporações e SPEs. Permite entrar em um empreendimento com capital menor do que o de comprar uma unidade pronta e participar do resultado da operação, com o risco que ela carrega.",
  },
  {
    title: "Estruturação de dívida",
    desc: "Análise das linhas de crédito disponíveis e desenho da operação de financiamento, para que a alavancagem seja usada de forma consciente e dentro da capacidade de pagamento.",
  },
  {
    title: "Permutas estratégicas",
    desc: "Troca de ativos que reposiciona a carteira: um terreno que vira participação, uma unidade que vira outra melhor situada, com leitura tributária feita antes.",
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
                Private equity imobiliário
              </p>
              <h1
                className="mt-6 text-balance text-4xl font-semibold leading-[1.02] md:text-6xl lg:text-[3.8rem]"
                style={PLAYFAIR}
              >
                Participar do resultado da incorporação,{" "}
                <span className="text-[#d9ad45]">não do metro quadrado.</span>
              </h1>
            </div>
            <p className="max-w-xl self-end border-l border-[#b8860b]/55 pl-6 text-base leading-8 text-[#b9c6d4] md:text-lg">
              Estruturamos a entrada do investidor em incorporações, da leitura
              da tese até a saída. Foi assim que a H55 nasceu: atendendo um
              investidor com carteira e apetite para equity e revenda de ativos
              prontos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Como funciona */}
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
                Como funciona
              </p>
              <h2
                className="mt-5 text-balance text-4xl font-semibold leading-[1.04] text-[#0a2540] md:text-5xl"
                style={PLAYFAIR}
              >
                Da tese à saída, com quem opera a venda por dentro.
              </h2>
            </div>
            <p className="max-w-xl self-end text-base leading-8 text-[#52617a] md:text-lg">
              A H55 coordena vendas de empreendimentos todos os dias. É de lá que
              vem a leitura de velocidade de venda, preço e liquidez que sustenta
              a análise de uma tese.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-[#0a2540]/15 md:grid-cols-3">
            {comoFunciona.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group flex min-h-[240px] flex-col bg-[#ebe3d5] p-8 transition-colors duration-500 hover:bg-[#e3d9c7]"
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

      {/* Modalidades */}
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
                Formas de entrar
              </p>
              <h2
                className="mt-5 text-balance text-4xl font-semibold leading-[1.04] md:text-5xl"
                style={PLAYFAIR}
              >
                Nem todo capital entra do mesmo jeito.
              </h2>
            </div>
            <p className="max-w-xl self-end border-l border-[#b8860b]/55 pl-6 text-base leading-8 text-[#b9c6d4] md:text-lg">
              A estrutura muda conforme o momento da obra, o horizonte de saída e
              o que você já tem em carteira.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-px bg-[#b8860b]/22 md:grid-cols-3">
            {modalidades.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group flex min-h-[320px] flex-col bg-[#08203a]/70 p-7 transition duration-500 hover:bg-[#0a2540]"
              >
                <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[#60748d]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="mt-10 text-2xl font-semibold leading-tight text-[#f4efe6]"
                  style={PLAYFAIR}
                >
                  {m.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#9fb0c4]">{m.desc}</p>
                <div className="mt-auto pt-7">
                  <span className="block h-px w-8 bg-[#b8860b] transition-all duration-500 group-hover:w-20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA sóbrio */}
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
                Converse com a coordenação sobre as teses em análise.
              </h2>
            </div>
            <div className="self-end">
              <p className="max-w-xl text-base leading-8 text-[#52617a] md:text-lg">
                Cada operação é analisada caso a caso, com o material aberto e o
                risco explicado antes do aporte. A conversa começa entendendo o
                seu horizonte e o seu apetite, não o produto que temos para
                oferecer.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-[#0a2540] bg-[#0a2540] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#f4efe6] transition duration-300 hover:-translate-y-0.5 hover:bg-[#123457]"
                >
                  Falar com a coordenação
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-3 border border-[#0a2540]/40 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#0a2540] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0a2540]/5"
                >
                  Ver as três frentes
                  <LuArrowRight size={16} />
                </Link>
              </div>
              <p className="mt-8 max-w-xl text-xs leading-6 text-[#6b7a90]">
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
