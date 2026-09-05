// src/app/lancamentos/page.tsx
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";
import { Descritivo } from "../../../components/frentes/Descritivo";

const PLAYFAIR = { fontFamily: "var(--font-playfair-display)" };

const entregas = [
  "Estratégia comercial do lançamento",
  "Assessoria para elaboração da tabela de vendas",
  "Seleção e curadoria das imobiliárias parceiras",
  "Treinamento das equipes de venda",
  "Gestão dos documentos do empreendimento",
  "Plataforma própria para distribuição e follow-up de leads",
  "Alinhamento contínuo com as ações de marketing",
  "Centralização dos contratos e assinaturas, com distribuição às partes interessadas",
];

const ganhos = [
  {
    title: "Estratégia comercial integrada",
    desc: "Posicionamento, tabela de vendas, condições comerciais e canais de distribuição são alinhados antes e durante o lançamento.",
  },
  {
    title: "Leads acompanhados",
    desc: "A plataforma própria distribui os leads entre as imobiliárias parceiras e apoia o acompanhamento de cada oportunidade.",
  },
  {
    title: "Documentos centralizados",
    desc: "A gestão documental, os contratos e as assinaturas são organizados em um fluxo único, com distribuição às partes interessadas.",
  },
];

const metodo = [
  {
    fase: "Antes de abrir",
    etapas: [
      ["Estratégia comercial", "Leitura do produto, do público e da concorrência. Posicionamento e canais de distribuição definidos com a incorporadora."],
      ["Tabela de vendas", "Assessoria na elaboração da tabela, das condições de pagamento e da regra de comissionamento."],
      ["Curadoria das imobiliárias", "Seleção das parceiras que fazem sentido para aquele produto, convenção de vendas e treinamento das equipes."],
    ],
  },
  {
    fase: "Com as vendas abertas",
    etapas: [
      ["Distribuição de leads", "Plataforma própria da H55 distribui os leads entre as imobiliárias e registra cada contato."],
      ["Follow-up e funil", "Acompanhamento do atendimento e da evolução dos leads ao longo da jornada comercial."],
      ["Marketing alinhado", "Alinhamento contínuo entre as ações de marketing, a disponibilidade e a estratégia de vendas."],
    ],
  },
  {
    fase: "Do sim ao contrato",
    etapas: [
      ["Gestão documental", "Documentos do comprador e do empreendimento reunidos e conferidos antes de virar minuta."],
      ["Contratos e assinaturas", "Contrato centralizado na H55, conferido, assinado e distribuído a incorporadora, imobiliária e comprador."],
      ["Prestação de contas", "Relatório aberto de vendas, comissionamento e pendências, com um único responsável por responder."],
    ],
  },
];

const LancamentosPage = () => {
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
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-balance text-4xl font-semibold leading-[1.02] md:text-6xl lg:text-[3.8rem]"
            style={PLAYFAIR}
          >
            Conduzimos o lançamento{" "}
            <span className="text-[#d9ad45]">do início ao fim.</span>
          </motion.h1>
        </div>
      </section>

      {/* Descritivo */}
      <Descritivo
        numero="01"
        titulo="Coordenação de lançamentos imobiliários"
        texto={
          <>
            Estratégia comercial, tabela de vendas, curadoria e treinamento das
            imobiliárias, gestão dos documentos, plataforma própria para
            distribuição e follow-up de leads, alinhamento contínuo com o
            marketing e centralização dos contratos e assinaturas.{" "}
            <span className="text-[#9a7b1e]">
              Uma gestão integrada para todas as etapas comerciais.
            </span>
          </>
        }
        entregas={entregas}
      />

      {/* O que a incorporadora ganha */}
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
                Para incorporadoras e loteadoras
              </p>
              <h2
                className="mt-5 text-balance text-4xl font-semibold leading-[1.04] text-[#0a2540] md:text-5xl"
                style={PLAYFAIR}
              >
                Uma operação comercial alinhada do início ao fim.
              </h2>
            </div>
            <p className="max-w-xl self-end text-base leading-8 text-[#52617a] md:text-lg">
              A coordenação conecta estratégia, imobiliárias, leads, marketing
              e documentos. Com todos trabalhando a partir das mesmas
              informações, o lançamento ganha continuidade e clareza.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-[#0a2540]/15 md:grid-cols-3">
            {ganhos.map((g, i) => (
              <motion.div
                key={g.title}
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
                  {g.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#52617a]">{g.desc}</p>
                <div className="mt-auto pt-7">
                  <span className="block h-px w-8 bg-[#b8860b] transition-all duration-500 group-hover:w-20" />
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 max-w-2xl text-xl leading-9 text-[#0a2540]" style={PLAYFAIR}>
            Acelere a liquidez do seu lançamento com quem responde pelo processo
            inteiro.
          </p>
        </div>
      </section>

      {/* Método */}
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
                Como operamos
              </p>
              <h2
                className="mt-5 text-balance text-4xl font-semibold leading-[1.04] md:text-5xl"
                style={PLAYFAIR}
              >
                Nove etapas, três fases, um responsável.
              </h2>
            </div>
            <p className="max-w-xl self-end border-l border-[#b8860b]/55 pl-6 text-base leading-8 text-[#b9c6d4] md:text-lg">
              O mesmo método em todo lançamento que coordenamos. A incorporadora
              sabe em que fase está, o que já foi entregue e o que vem a
              seguir.
            </p>
          </motion.div>

          <div className="mt-14 space-y-px">
            {metodo.map((bloco, bi) => (
              <motion.div
                key={bloco.fase}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: bi * 0.08 }}
                className="grid gap-6 border-t border-[#b8860b]/25 py-10 lg:grid-cols-[0.28fr_1fr]"
              >
                <div className="flex items-start gap-4">
                  <span
                    className="text-5xl font-semibold leading-none text-[#d9ad45] md:text-6xl"
                    style={PLAYFAIR}
                  >
                    {String(bi + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-2 text-[0.68rem] uppercase tracking-[0.28em] text-[#9fb0c4]">
                    {bloco.fase}
                  </span>
                </div>
                <div className="grid gap-px bg-[#b8860b]/22 sm:grid-cols-3">
                  {bloco.etapas.map(([titulo, texto], ei) => (
                    <div key={titulo} className="bg-[#06121f] p-6">
                      <span className="text-[0.62rem] uppercase tracking-[0.3em] text-[#60748d]">
                        Etapa {bi * 3 + ei + 1}
                      </span>
                      <h3 className="mt-3 text-base font-semibold uppercase tracking-[0.08em] text-[#f4efe6]">
                        {titulo}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#9fb0c4]">{texto}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparência e CTA */}
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
                Transparência
              </p>
              <h2
                className="mt-5 text-balance text-3xl font-semibold leading-[1.06] text-[#0a2540] md:text-5xl"
                style={PLAYFAIR}
              >
                Uma proposta adequada ao seu empreendimento.
              </h2>
            </div>
            <div className="self-end">
              <p className="max-w-xl text-base leading-8 text-[#52617a] md:text-lg">
                Cada lançamento possui características, estágio comercial e
                necessidades próprias. Em uma reunião inicial, entendemos o
                empreendimento e definimos o escopo de coordenação mais adequado
                para a operação.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact?frente=lancamentos"
                  className="inline-flex items-center justify-center border border-[#0a2540] bg-[#0a2540] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#f4efe6] transition duration-300 hover:-translate-y-0.5 hover:bg-[#123457]"
                >
                  Apresentar o lançamento
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-3 border border-[#0a2540]/40 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#0a2540] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0a2540]/5"
                >
                  Ver as três frentes
                  <LuArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default LancamentosPage;
