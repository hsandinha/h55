// src/app/services/page.tsx
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
    lead: "Conduzimos o lançamento do início ao fim.",
    body: "Estratégia comercial, tabela de vendas, curadoria e treinamento das imobiliárias parceiras, gestão documental, plataforma própria para distribuição e follow-up de leads, alinhamento com o marketing e centralização de contratos e assinaturas, com distribuição a todas as partes interessadas.",
    itens: [
      [
        "Estratégia e tabela",
        "assessoria na tabela de vendas, posicionamento e regra de comissionamento antes de abrir as vendas.",
      ],
      [
        "Imobiliárias selecionadas e treinadas",
        "curadoria das parceiras e plataforma própria para distribuir e acompanhar os leads.",
      ],
      [
        "Contratos centralizados",
        "documentos, contratos e assinaturas em um só lugar, distribuídos às partes.",
      ],
    ],
    fecho:
      "Acelere a liquidez do seu lançamento com quem responde pelo processo inteiro.",
    href: "/lancamentos",
    cta: "Ver coordenação de lançamentos",
  },
  {
    num: "02",
    label: "Proprietários",
    title: "Coordenação de imóveis selecionados",
    lead: "Fazemos o papel do dono.",
    body: "O proprietário trata apenas com a H55, e nós coordenamos a venda inteira: seleção das imobiliárias, liberação de visitas, contratos e transferência do imóvel. Profissionalizar a venda é não perder tempo nem dinheiro.",
    itens: [
      [
        "Um único interlocutor",
        "a H55 representa você perante todo o mercado imobiliário.",
      ],
      [
        "Imobiliárias selecionadas",
        "coordenamos quem vende, com qual material e com qual regra, sem que você gerencie ninguém.",
      ],
      [
        "Imóvel auditado antes de anunciar",
        "matrícula, certidões e vistoria conferidas, para a proposta não morrer no cartório.",
      ],
    ],
    fecho:
      "Menos desgaste, mais controle e muito mais eficiência na venda do seu imóvel.",
    href: "/imoveis-selecionados",
    cta: "Ver coordenação de imóveis selecionados",
  },
  {
    num: "03",
    label: "Investidores",
    title: "Private equity imobiliário",
    lead: "Investir em imóvel vai muito além da unidade na planta.",
    body: "Investir em imóvel pode ir muito além da compra de uma unidade na planta. A H55 apresenta oportunidades selecionadas de private equity imobiliário de acordo com o perfil e os objetivos de cada investidor.",
    itens: [
      ["Acesso", "oportunidades selecionadas no mercado imobiliário."],
      [
        "Leitura",
        "avaliação do contexto, da estrutura e do horizonte de cada oportunidade.",
      ],
      ["Relacionamento", "conversa conduzida por especialistas da H55."],
    ],
    fecho: "Agende uma reunião com nossos especialistas.",
    href: "/equity",
    cta: "Ver private equity",
  },
];

const ServicesPage = () => {
  return (
    <>
      <section className="bg-[#ebe3d5] py-24 md:py-32">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid gap-10 border-b border-[#0a2540]/15 pb-12 md:grid-cols-[0.9fr_1.1fr]"
          >
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#9a7b1e]">
                Nossos serviços
              </p>
              <h1
                className="mt-5 text-balance text-4xl font-semibold leading-[1.04] text-[#0a2540] md:text-6xl"
                style={PLAYFAIR}
              >
                Como a H55 pode atuar?
              </h1>
            </div>
            <p className="max-w-xl self-end text-base leading-8 text-[#52617a] md:text-lg">
              A H55 atua em três frentes complementares, com soluções específicas
              para incorporadoras, proprietários e investidores. Conheça cada
              atuação e encontre o caminho mais adequado ao seu objetivo.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-[#0a2540]/15 md:grid-cols-2 lg:grid-cols-3">
            {frentes.map((f, i) => (
              <motion.article
                key={f.num}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex h-full flex-col bg-[#ebe3d5] p-8 transition-colors duration-500 hover:bg-[#e3d9c7] md:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[#8a7a5e]">
                    {f.num}
                  </span>
                  <span className="border border-[#9a7b1e]/45 px-3 py-1 text-[0.58rem] uppercase tracking-[0.22em] text-[#9a7b1e]">
                    {f.label}
                  </span>
                </div>

                <h2
                  className="mt-8 text-[1.75rem] font-semibold leading-tight text-[#0a2540]"
                  style={PLAYFAIR}
                >
                  {f.title}
                </h2>
                <p className="mt-4 text-[0.95rem] leading-7 text-[#9a7b1e]">
                  {f.lead}
                </p>
                <p className="mt-5 text-[0.95rem] leading-7 text-[#52617a]">
                  {f.body}
                </p>

                <ul className="mt-7 flex-1 border-t border-[#0a2540]/12">
                  {f.itens.map(([titulo, texto]) => (
                    <li
                      key={titulo}
                      className="border-b border-[#0a2540]/12 py-4"
                    >
                      <span className="block text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[#0a2540]">
                        {titulo}
                      </span>
                      <span className="mt-1 block text-[0.9rem] leading-7 text-[#52617a]">
                        {texto}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-7 text-lg leading-7 text-[#0a2540]" style={PLAYFAIR}>
                  {f.fecho}
                </p>

                <Link
                  href={f.href}
                  className="mt-7 inline-flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.22em] text-[#9a7b1e] transition-colors hover:text-[#0a2540]"
                >
                  {f.cta}
                  <LuArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Método de atuação */}
      <section className="bg-[#f7f3ea] py-24 md:py-28">
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
                Nosso método
              </p>
              <h2
                className="mt-5 text-balance text-3xl font-semibold leading-[1.06] text-[#0a2540] md:text-5xl"
                style={PLAYFAIR}
              >
                Um responsável pela coordenação do processo.
              </h2>
            </div>
            <div className="self-end">
              <p className="max-w-xl text-base leading-8 text-[#52617a] md:text-lg">
                Em cada frente, a H55 centraliza informações, organiza os
                participantes e acompanha a evolução da operação. Assim, quem
                contrata sabe com quem falar e tem clareza sobre os próximos
                passos do início ao fim.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-[#0a2540] bg-[#0a2540] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#f4efe6] transition duration-300 hover:-translate-y-0.5 hover:bg-[#123457]"
                >
                  Falar com um especialista
                </Link>
                <Link
                  href="/imoveis"
                  className="inline-flex items-center justify-center gap-3 border border-[#0a2540]/40 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#0a2540] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0a2540]/5"
                >
                  Ver portfólio
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

export default ServicesPage;
