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
    title: "Coordenação de empreendimentos",
    lead: "Maximizando a rentabilidade do seu empreendimento com inteligência imobiliária.",
    body: "A H55 lidera a estratégia e a coordenação de vendas do seu empreendimento. Conectamos incorporadoras e investidores através de uma gestão comercial estruturada, eficiente e orientada a resultados.",
    itens: [
      [
        "Estratégia comercial integrada",
        "alinhamento de preço, posicionamento e canais de distribuição.",
      ],
      [
        "Gestão de parcerias e corretores",
        "treinamento, engajamento e acompanhamento ativo do funil de vendas.",
      ],
      [
        "Governança do contrato",
        "conferência, assinatura digital e repasse, sem atraso no caixa da obra.",
      ],
    ],
    fecho:
      "Acelere a liquidez do seu lançamento com quem responde pelo processo inteiro.",
    href: "/empreendimentos",
    cta: "Ver coordenação de empreendimentos",
  },
  {
    num: "02",
    label: "Proprietários",
    title: "Coordenação de imóveis selecionados",
    lead: "A H55 cuida de tudo. Você conversa apenas com um parceiro.",
    body: "Distribuir a chave do imóvel para dezenas de imobiliárias gera desencontro de informações, desvalorização do patrimônio e dor de cabeça. Assumimos a captação, a documentação e a coordenação centralizada da venda.",
    itens: [
      [
        "Um único ponto de contato",
        "a H55 representa você perante todo o mercado imobiliário.",
      ],
      [
        "Estratégia multicanal sem desordem",
        "coordenamos as melhores imobiliárias e corretores parceiros sem que você precise gerenciar ninguém.",
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
    lead: "Participar do resultado da incorporação, não do metro quadrado.",
    body: "Estruturamos a entrada do investidor em incorporações, da leitura da tese até a saída. Foi assim que a H55 nasceu: atendendo um investidor com carteira e apetite para equity e revenda de ativos prontos.",
    itens: [
      [
        "Leitura da tese",
        "viabilidade, ciclo do empreendimento e cenário de saída.",
      ],
      [
        "Estruturação da entrada",
        "participação societária, permuta ou estruturação de dívida.",
      ],
      ["Acompanhamento", "do aporte até o desinvestimento."],
    ],
    fecho: "Converse com a coordenação sobre as teses em análise.",
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
                O que você precisa fazer?
              </h1>
            </div>
            <p className="max-w-xl self-end text-base leading-8 text-[#52617a] md:text-lg">
              A H55 atua em três frentes. Cada uma tem cliente, processo e
              equipe de trabalho próprios. Escolha a sua e a conversa começa no
              ponto certo.
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

      {/* Regra de operação entre as frentes */}
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
                A regra que atravessa as três
              </p>
              <h2
                className="mt-5 text-balance text-3xl font-semibold leading-[1.06] text-[#0a2540] md:text-5xl"
                style={PLAYFAIR}
              >
                Nunca pelas duas pontas do mesmo negócio.
              </h2>
            </div>
            <div className="self-end">
              <p className="max-w-xl text-base leading-8 text-[#52617a] md:text-lg">
                Quando a H55 coordena a venda de um imóvel, ela não representa
                quem está comprando aquele imóvel. Os interesses são opostos e
                fingir que não são é o que faz o comprador desconfiar de tudo
                que ouve. É essa linha que garante que a nossa recomendação valha
                alguma coisa.
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
