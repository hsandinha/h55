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
    label: "Para quem compra ou investe",
    title: "Concierge imobiliário",
    body: "Você passa a ter um representante que trabalha só pelo seu interesse: encontra, analisa, negocia e acompanha a compra até depois da entrega das chaves.",
    itens: [
      "Consultoria personalizada",
      "Busca ativa e ativos off-market",
      "Due diligence completa",
      "Negociação estratégica",
      "Vistoria técnica de recebimento",
      "Acompanhamento pós-compra",
    ],
    cta: "Como conduzimos a compra",
    href: "#compra",
  },
  {
    num: "02",
    label: "Para quem vende",
    title: "Coordenação de vendas",
    body: "O proprietário ou a incorporadora entrega a operação comercial para uma coordenação única: estratégia, documentação e todas as imobiliárias parceiras alinhadas na mesma regra.",
    itens: [
      "Estratégia comercial e tabela de preços",
      "Gestão documental e contratos",
      "Curadoria das imobiliárias parceiras",
      "Material de venda e campanhas",
      "Funil acompanhado e relatório aberto",
      "Assinatura, repasse e prestação de contas",
    ],
    cta: "Ver a coordenação de vendas",
    href: "/coordenacao",
  },
];

const servicosCompra = [
  {
    title: "Consultoria personalizada",
    description:
      "Entendemos seu perfil, objetivos e necessidades para traçar a melhor estratégia de compra. Cada cliente é único e recebe atendimento exclusivo.",
  },
  {
    title: "Busca ativa de imóveis",
    description:
      "Procuramos imóveis alinhados ao seu interesse, incluindo opções fora dos portais tradicionais (off-market), para ampliar suas oportunidades.",
  },
  {
    title: "Due diligence completa",
    description:
      "Análise técnica, documental e de valorização: certidões, matrícula, situação do vendedor e potencial de retorno. Você compra sabendo exatamente o que está comprando.",
  },
  {
    title: "Negociação estratégica",
    description:
      "Negociamos o melhor preço e as melhores condições para você, sempre defendendo seus interesses e nunca os de quem está vendendo.",
  },
  {
    title: "Vistoria técnica de recebimento",
    description:
      "Fazemos a vistoria técnica de recebimento do seu imóvel, conferindo acabamentos, instalações e o memorial descritivo antes de você assinar o termo de entrega.",
  },
  {
    title: "Acompanhamento completo",
    description:
      "Estamos ao seu lado em todas as etapas, do início ao pós-compra, até a entrega das chaves e além, para que você tenha total tranquilidade.",
  },
];

const etapas = [
  {
    title: "Análise de perfil",
    description:
      "Entendimento profundo do seu perfil, objetivos e necessidades para traçar uma estratégia personalizada de compra ou investimento.",
  },
  {
    title: "Busca ativa e curadoria",
    description:
      "Busca criteriosa no mercado, inclusive de ativos off-market, e curadoria das opções que realmente fazem sentido para a sua tese.",
  },
  {
    title: "Due diligence",
    description:
      "Análise técnica, documental e de valorização para garantir segurança jurídica e potencial real de retorno.",
  },
  {
    title: "Negociação",
    description:
      "Conduzimos a negociação de preço, condições e prazos representando exclusivamente os seus interesses.",
  },
  {
    title: "Contrato e assinatura",
    description:
      "Conferência do contrato e dos anexos, alinhamento com cartório e banco e acompanhamento até a assinatura.",
  },
  {
    title: "Vistoria e pós-compra",
    description:
      "Vistoria técnica na entrega das chaves e suporte na gestão do ativo depois da compra.",
  },
];

const cenarios = [
  {
    label: "Ativo pontual",
    title: "Um imóvel, uma estratégia",
    itens: [
      "Posicionamento como produto exclusivo, com material profissional e preço definido",
      "Filtro de propostas: chegam a você apenas ofertas reais e pré-qualificadas",
      "Certidões, matrícula e minuta de contrato sob a nossa gestão",
    ],
  },
  {
    label: "Lançamento de empreendimento",
    title: "Uma carteira, uma regra",
    itens: [
      "Convenção de vendas, treinamento das imobiliárias e regra de comissionamento única",
      "VGV lançado contra vendido acompanhado em tempo real, com campanhas ajustadas ao ritmo",
      "Contratos padronizados, apoio ao financiamento e coordenação do repasse",
    ],
  },
];

const ServicesPage = () => {
  return (
    <>
      {/* ---------- Abertura: as duas frentes ---------- */}
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
                className="mt-5 text-4xl font-semibold leading-[1.04] text-[#0a2540] md:text-6xl"
                style={PLAYFAIR}
              >
                Duas frentes. O mesmo rigor.
              </h1>
            </div>
            <p className="max-w-xl self-end text-base leading-8 text-[#52617a] md:text-lg">
              A H55 representa quem compra e coordena quem vende. São duas
              operações com o mesmo padrão de análise, documentação e
              negociação, conduzidas separadamente: em cada negócio, a H55
              representa um lado só.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-[#0a2540]/15 lg:grid-cols-2">
            {frentes.map((f, i) => (
              <motion.article
                key={f.num}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex h-full flex-col bg-[#ebe3d5] p-8 transition-colors duration-500 hover:bg-[#e3d9c7] md:p-10"
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
                  className="mt-8 text-3xl font-semibold leading-tight text-[#0a2540] md:text-[2.6rem]"
                  style={PLAYFAIR}
                >
                  {f.title}
                </h2>
                <p className="mt-5 text-[0.95rem] leading-7 text-[#52617a]">
                  {f.body}
                </p>

                <ul className="mt-8 flex-1 border-t border-[#0a2540]/12">
                  {f.itens.map((item) => (
                    <li
                      key={item}
                      className="border-b border-[#0a2540]/12 py-3 text-sm font-medium uppercase tracking-[0.08em] text-[#0a2540]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={f.href}
                  className="mt-8 inline-flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.22em] text-[#9a7b1e] transition-colors hover:text-[#0a2540]"
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

      {/* ---------- Frente 1: compra ---------- */}
      <section id="compra" className="scroll-mt-24 bg-[#f7f3ea] py-24 md:py-32">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]"
          >
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#9a7b1e]">
                Frente 01
              </p>
              <h2
                className="mt-5 text-4xl font-semibold leading-[1.04] text-[#0a2540] md:text-5xl"
                style={PLAYFAIR}
              >
                Para quem compra ou investe.
              </h2>
            </div>
            <p className="max-w-xl self-end text-base leading-8 text-[#52617a] md:text-lg">
              No modelo tradicional, quem atende o comprador é o mesmo corretor
              contratado para vender o imóvel. Aqui não: o seu representante não
              tem nada a ganhar com um imóvel específico.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-[#0a2540]/15 sm:grid-cols-2 lg:grid-cols-3">
            {servicosCompra.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="group flex min-h-[260px] flex-col bg-[#f7f3ea] p-7 transition-colors duration-500 hover:bg-[#efe8dc]"
              >
                <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[#8a7a5e]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="mt-8 text-2xl font-semibold leading-tight text-[#0a2540]"
                  style={PLAYFAIR}
                >
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#52617a]">
                  {s.description}
                </p>
                <div className="mt-auto pt-7">
                  <span className="block h-px w-8 bg-[#b8860b] transition-all duration-500 group-hover:w-20" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16"
          >
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#9a7b1e]">
              Como atuamos
            </p>
            <h3
              className="mt-4 text-3xl font-semibold leading-tight text-[#0a2540] md:text-4xl"
              style={PLAYFAIR}
            >
              Do primeiro contato à entrega das chaves.
            </h3>
            <div className="mt-10 grid grid-cols-1 gap-px bg-[#0a2540]/15 sm:grid-cols-2 lg:grid-cols-3">
              {etapas.map((etapa, index) => (
                <div key={etapa.title} className="bg-[#f7f3ea] p-6">
                  <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[#8a7a5e]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-4 text-base font-semibold uppercase tracking-[0.08em] text-[#0a2540]">
                    {etapa.title}
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-[#52617a]">
                    {etapa.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- Frente 2: venda ---------- */}
      <section
        id="venda"
        className="relative scroll-mt-24 overflow-hidden bg-[#06121f] py-24 text-[#f4efe6] md:py-32"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,37,64,0.5) 0%, rgba(6,18,31,1) 78%)",
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
                Frente 02
              </p>
              <h2
                className="mt-5 text-4xl font-semibold leading-[1.04] md:text-5xl"
                style={PLAYFAIR}
              >
                Para quem vende: coordenação de vendas.
              </h2>
            </div>
            <p className="max-w-xl self-end border-l border-[#b8860b]/55 pl-6 text-base leading-8 text-[#b9c6d4] md:text-lg">
              Assumimos a estratégia comercial, a gestão documental e a
              curadoria das imobiliárias parceiras. Uma coordenação só,
              respondendo pelo resultado, em vez de dez imobiliárias
              anunciando o mesmo imóvel de dez formas diferentes.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-px bg-[#b8860b]/22 lg:grid-cols-2">
            {cenarios.map((c, i) => (
              <motion.article
                key={c.label}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex flex-col bg-[#08203a]/70 p-8 transition duration-500 hover:bg-[#0a2540] md:p-10"
              >
                <span className="border border-[#b8860b]/45 px-3 py-1 text-[0.58rem] uppercase tracking-[0.22em] text-[#d9ad45] self-start">
                  {c.label}
                </span>
                <h3
                  className="mt-8 text-3xl font-semibold leading-tight text-[#f4efe6]"
                  style={PLAYFAIR}
                >
                  {c.title}
                </h3>
                <ul className="mt-7 border-t border-[#f4efe6]/12">
                  {c.itens.map((item) => (
                    <li
                      key={item}
                      className="border-b border-[#f4efe6]/12 py-4 text-sm leading-7 text-[#b9c6d4]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-7">
                  <span className="block h-px w-8 bg-[#b8860b] transition-all duration-500 group-hover:w-20" />
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-14 grid gap-8 border border-[#b8860b]/30 bg-[#030c17]/55 p-8 md:grid-cols-[1.05fr_0.95fr] md:p-10"
          >
            <div>
              <p className="text-[0.64rem] uppercase tracking-[0.26em] text-[#caa64a]">
                Página completa
              </p>
              <h3
                className="mt-4 text-3xl font-semibold leading-tight text-[#f4efe6] md:text-4xl"
                style={PLAYFAIR}
              >
                Os três pilares, o comparativo e como cobramos.
              </h3>
            </div>
            <div>
              <p className="text-sm leading-7 text-[#b9c6d4] md:text-base">
                Centralização e controle de imagem, governança e blindagem
                jurídica, orquestração de mercado. Está tudo aberto na página da
                coordenação, inclusive a conversa sobre a nossa remuneração.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/coordenacao"
                  className="inline-flex items-center justify-center gap-3 border border-[#d8ad45] bg-[#d8ad45] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#191207] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f0c85a]"
                >
                  Ver a coordenação
                  <LuArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-[#d8ad45]/80 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#f7efe2] transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Falar com especialista
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- O que não fazemos ---------- */}
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
                O que não fazemos
              </p>
              <h2
                className="mt-5 text-3xl font-semibold leading-[1.06] text-[#0a2540] md:text-5xl"
                style={PLAYFAIR}
              >
                Nunca pelas duas pontas do mesmo negócio.
              </h2>
            </div>
            <div className="self-end">
              <p className="max-w-xl text-base leading-8 text-[#52617a] md:text-lg">
                Representar o comprador e coordenar a venda são frentes
                separadas porque os interesses são opostos. Quando a H55
                coordena a venda de um imóvel, ela não representa quem está
                comprando esse imóvel. É essa linha que garante que a
                recomendação que você recebe valha alguma coisa.
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
