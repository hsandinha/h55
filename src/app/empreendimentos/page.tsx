// src/app/empreendimentos/page.tsx
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuArrowRight, LuBuilding2, LuShieldCheck, LuTarget } from "react-icons/lu";

const PLAYFAIR = { fontFamily: "var(--font-playfair-display)" };

const pilares = [
  {
    icon: LuBuilding2,
    num: "01",
    title: "Centralização e controle de imagem",
    desc: "Um só padrão de material, preço e discurso. O empreendimento deixa de aparecer em dez versões diferentes, com tabelas divergentes e promessas que ninguém autorizou.",
  },
  {
    icon: LuShieldCheck,
    num: "02",
    title: "Governança e blindagem jurídica",
    desc: "Contratos conferidos, anexo de corretagem correto, assinatura digital e repasse acompanhado. O maior gargalo entre a proposta e o caixa da obra sai do caminho.",
  },
  {
    icon: LuTarget,
    num: "03",
    title: "Orquestração de mercado",
    desc: "Regra de comissionamento clara, tabela unificada e campanhas coordenadas para atrair as melhores imobiliárias da região em vez de disputar com elas.",
  },
];

const ciclo = [
  {
    title: "Convenção e treinamento",
    desc: "Apresentação do produto às imobiliárias parceiras, com material padronizado e regra de comissionamento definida antes da primeira visita.",
  },
  {
    title: "Tabela e mapa chave",
    desc: "Tabela unificada e disponibilidade em tempo real, para ninguém vender a mesma unidade duas vezes nem furar preço.",
  },
  {
    title: "Funil e campanhas",
    desc: "Leads acompanhados por unidade e campanhas ajustadas ao ritmo do estoque remanescente.",
  },
  {
    title: "Contrato e assinatura",
    desc: "Conferência do contrato e dos anexos, correção com a imobiliária e subida para assinatura digital.",
  },
  {
    title: "Repasse e prestação de contas",
    desc: "Acompanhamento do pagamento, do comissionamento e do relatório de vendas do período.",
  },
];

const EmpreendimentosPage = () => {
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
                Coordenação de empreendimentos
              </p>
              <h1
                className="mt-6 text-balance text-4xl font-semibold leading-[1.02] md:text-6xl lg:text-[3.8rem]"
                style={PLAYFAIR}
              >
                Uma coordenação.
                <br />
                Todas as imobiliárias{" "}
                <span className="text-[#d9ad45]">na mesma regra.</span>
              </h1>
            </div>
            <p className="max-w-xl self-end border-l border-[#b8860b]/55 pl-6 text-base leading-8 text-[#b9c6d4] md:text-lg">
              A H55 assume a operação comercial do seu empreendimento: convenção
              de vendas, tabela unificada, funil acompanhado por unidade e
              contratos padronizados até o repasse.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-16 grid grid-cols-1 gap-px border-t border-[#b8860b]/25 bg-[#b8860b]/22 sm:grid-cols-3"
          >
            {[
              ["VGV acompanhado", "lançado contra vendido, unidade a unidade"],
              ["Tabela e comissionamento", "uma regra só para todo o mercado"],
              ["Contrato e repasse", "conferência, assinatura e prestação de contas"],
            ].map(([titulo, texto]) => (
              <div key={titulo} className="bg-[#06121f] px-1 py-7 sm:px-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d9ad45]">
                  {titulo}
                </p>
                <p className="mt-2 text-sm leading-7 text-[#9fb0c4]">{texto}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* A proposta */}
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
                Para incorporadoras
              </p>
              <h2
                className="mt-5 text-balance text-4xl font-semibold leading-[1.04] text-[#0a2540] md:text-5xl"
                style={PLAYFAIR}
              >
                Maximizando a rentabilidade do seu empreendimento.
              </h2>
            </div>
            <p className="max-w-xl self-end text-base leading-8 text-[#52617a] md:text-lg">
              A H55 lidera a estratégia e a coordenação de vendas do seu
              empreendimento. Conectamos incorporadoras e investidores através de
              uma gestão comercial estruturada, eficiente e orientada a
              resultados.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-[#0a2540]/15 md:grid-cols-3">
            {[
              [
                "Estratégia comercial integrada",
                "Alinhamento de preço, posicionamento e canais de distribuição, definidos antes de abrir as vendas.",
              ],
              [
                "Gestão de parcerias e corretores",
                "Treinamento, engajamento e acompanhamento ativo do funil de vendas de cada imobiliária parceira.",
              ],
              [
                "Governança do contrato",
                "Conferência, assinatura digital e repasse, sem atraso no caixa da obra por erro de minuta.",
              ],
            ].map(([titulo, texto], i) => (
              <motion.div
                key={titulo}
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
                  {titulo}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#52617a]">{texto}</p>
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

      {/* Pilares */}
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
                O que muda na prática
              </p>
              <h2
                className="mt-5 text-balance text-4xl font-semibold leading-[1.04] md:text-5xl"
                style={PLAYFAIR}
              >
                Três frentes que separam lançamento coordenado de estoque solto
                no mercado.
              </h2>
            </div>
            <p className="max-w-xl self-end border-l border-[#b8860b]/55 pl-6 text-base leading-8 text-[#b9c6d4] md:text-lg">
              Não é colocar mais gente vendendo. É controlar a informação,
              blindar o processo e alinhar todo mundo em torno da mesma tabela.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-px bg-[#b8860b]/22 md:grid-cols-3">
            {pilares.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group flex min-h-[340px] flex-col bg-[#08203a]/70 p-7 transition duration-500 hover:bg-[#0a2540]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[#60748d]">
                      {p.num}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center border border-[#b8860b]/45 text-[#d9ad45]">
                      <Icon size={18} />
                    </span>
                  </div>
                  <h3
                    className="mt-10 text-2xl font-semibold leading-tight text-[#f4efe6]"
                    style={PLAYFAIR}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#9fb0c4]">
                    {p.desc}
                  </p>
                  <div className="mt-auto pt-7">
                    <span className="block h-px w-8 bg-[#b8860b] transition-all duration-500 group-hover:w-20" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ciclo */}
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
              O ciclo
            </p>
            <h2
              className="mt-5 text-balance text-4xl font-semibold leading-[1.04] text-[#0a2540] md:text-5xl"
              style={PLAYFAIR}
            >
              Da convenção de vendas ao repasse.
            </h2>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-[#0a2540]/15 sm:grid-cols-2 lg:grid-cols-3">
            {ciclo.map((etapa, i) => (
              <div key={etapa.title} className="bg-[#f7f3ea] p-7">
                <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[#8a7a5e]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-base font-semibold uppercase tracking-[0.08em] text-[#0a2540]">
                  {etapa.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#52617a]">
                  {etapa.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remuneração e CTA */}
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
                Transparência
              </p>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight text-[#f4efe6] md:text-4xl"
                style={PLAYFAIR}
              >
                E quanto custa essa camada a mais?
              </h2>
            </div>
            <div>
              <p className="text-sm leading-7 text-[#b9c6d4] md:text-base">
                Coordenar um lançamento tem custo: uma taxa de gestão ou uma
                fatia da comissão. Ela só se justifica quando devolve velocidade
                de vendas ou preço final. É esse o compromisso: relatório aberto
                do funil, tabela e comissionamento claros para todas as
                imobiliárias parceiras e um único responsável por prestar contas.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-[#d8ad45] bg-[#d8ad45] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#191207] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f0c85a]"
                >
                  Apresentar o empreendimento
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
    </>
  );
};

export default EmpreendimentosPage;
