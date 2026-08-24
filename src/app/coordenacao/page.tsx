// src/app/coordenacao/page.tsx
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LuArrowRight,
  LuBuilding2,
  LuShieldCheck,
  LuTarget,
} from "react-icons/lu";

const PLAYFAIR = { fontFamily: "var(--font-playfair-display)" };

const solucoes = [
  {
    num: "01",
    label: "Incorporadoras",
    title: "Imóveis compactos para investimento",
    lead: "Maximizando a rentabilidade do seu empreendimento com inteligência imobiliária.",
    body: "A H55 lidera a estratégia e a coordenação de vendas de imóveis compactos focados em investimento. Conectamos incorporadoras e investidores através de uma gestão comercial estruturada, eficiente e orientada a resultados.",
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
        "Foco em investidores",
        "abordagem técnica baseada em métricas de rentabilidade e valorização.",
      ],
    ],
    fecho:
      "Acelere a liquidez dos seus lançamentos compactos com quem entende o mercado de investimentos.",
  },
  {
    num: "02",
    label: "Proprietários",
    title: "Representação exclusiva de imóveis avulsos",
    lead: "A H55 cuida de tudo. Você conversa apenas com um parceiro.",
    body: "Distribuir a chave do imóvel para dezenas de imobiliárias gera desencontro de informações, desvalorização do patrimônio e dor de cabeça. Assumimos a captação e a coordenação centralizada da venda do seu imóvel.",
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
        "Valorização do seu patrimônio",
        "informações padronizadas, preço alinhado e fotos profissionais que protegem o valor real do imóvel.",
      ],
    ],
    fecho:
      "Menos desgaste, mais controle e muito mais eficiência na venda do seu imóvel.",
  },
];

const pilares = [
  {
    icon: LuBuilding2,
    num: "01",
    title: "Centralização e controle de imagem",
    desc: "Um só padrão de fotos, preço e descrição. O imóvel deixa de aparecer em dez anúncios diferentes, com qualidades distintas e valores divergentes.",
  },
  {
    icon: LuShieldCheck,
    num: "02",
    title: "Governança e blindagem jurídica",
    desc: "Certidões, minutas de contrato, alinhamento bancário e de cartório — o maior gargalo de qualquer venda — sob responsabilidade de uma equipe dedicada.",
  },
  {
    icon: LuTarget,
    num: "03",
    title: "Orquestração de mercado",
    desc: "Regras claras de comissionamento, tabela de preços unificada e campanhas coordenadas para atrair os melhores corretores da região.",
  },
];

const comparativo = [
  {
    criterio: "Foco",
    pontual: "Liquidez do ativo e valorização máxima",
    lancamento: "Velocidade de venda e atingimento do VGV",
  },
  {
    criterio: "Canal",
    pontual: "Curadoria de 3 a 5 imobiliárias parceiras",
    lancamento: "Rede ampla de imobiliárias e corretores autônomos",
  },
  {
    criterio: "Marketing",
    pontual: "Ensaio fotográfico, tour virtual e anúncio direcionado",
    lancamento: "Identidade visual completa, estande e campanhas digitais",
  },
  {
    criterio: "Dor que resolve",
    pontual: "Desgaste na negociação e burocracia de cartório",
    lancamento: "Quebra de tabela de preço e concorrência desalinhada",
  },
];

const CoordenacaoPage = () => {
  return (
    <>
      {/* ---------- Abertura ---------- */}
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
                Coordenação de vendas
              </p>
              <h1
                className="mt-6 text-4xl font-semibold leading-[1.02] md:text-6xl lg:text-[4.2rem]"
                style={PLAYFAIR}
              >
                Um só interlocutor.
                <br />
                <span className="text-[#d9ad45]">O mercado inteiro</span>{" "}
                vendendo o seu imóvel.
              </h1>
            </div>
            <p className="max-w-xl self-end border-l border-[#b8860b]/55 pl-6 text-base leading-8 text-[#b9c6d4] md:text-lg">
              A H55 funciona como a inteligência central do proprietário e da
              incorporadora: assumimos a estratégia comercial, a gestão
              documental e a curadoria das imobiliárias parceiras. Você conversa
              com um só parceiro — e o mercado inteiro trabalha pela venda.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-16 grid grid-cols-1 gap-px border-t border-[#b8860b]/25 bg-[#b8860b]/22 sm:grid-cols-3"
          >
            {[
              ["Estratégia comercial", "preço, posicionamento e canais"],
              ["Gestão documental", "certidões, minuta, cartório e banco"],
              ["Curadoria de parceiros", "quem vende, com qual regra"],
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

      {/* ---------- As duas soluções ---------- */}
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
                Duas frentes
              </p>
              <h2
                className="mt-5 text-4xl font-semibold leading-[1.04] text-[#0a2540] md:text-6xl"
                style={PLAYFAIR}
              >
                Do lançamento inteiro ao imóvel único.
              </h2>
            </div>
            <p className="max-w-xl self-end text-base leading-8 text-[#52617a] md:text-lg">
              A estrutura é a mesma: estratégia, documentação e mercado sob uma
              só coordenação. O que muda é a escala e a velocidade que cada
              negócio exige.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-[#0a2540]/15 lg:grid-cols-2">
            {solucoes.map((s, i) => (
              <motion.article
                key={s.num}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex h-full flex-col bg-[#ebe3d5] p-8 transition-colors duration-500 hover:bg-[#e3d9c7] md:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[#8a7a5e]">
                    {s.num}
                  </span>
                  <span className="border border-[#9a7b1e]/45 px-3 py-1 text-[0.58rem] uppercase tracking-[0.22em] text-[#9a7b1e]">
                    {s.label}
                  </span>
                </div>

                <h3
                  className="mt-8 text-3xl font-semibold leading-tight text-[#0a2540] md:text-[2.4rem]"
                  style={PLAYFAIR}
                >
                  {s.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#9a7b1e]">
                  {s.lead}
                </p>
                <p className="mt-6 text-[0.95rem] leading-7 text-[#52617a]">
                  {s.body}
                </p>

                <ul className="mt-8 flex-1 border-t border-[#0a2540]/12">
                  {s.itens.map(([titulo, texto]) => (
                    <li
                      key={titulo}
                      className="border-b border-[#0a2540]/12 py-4"
                    >
                      <span className="block text-sm font-semibold uppercase tracking-[0.1em] text-[#0a2540]">
                        {titulo}
                      </span>
                      <span className="mt-1 block text-[0.95rem] leading-7 text-[#52617a]">
                        {texto}
                      </span>
                    </li>
                  ))}
                </ul>

                <p
                  className="mt-8 text-xl leading-8 text-[#0a2540]"
                  style={PLAYFAIR}
                >
                  {s.fecho}
                </p>
                <span className="mt-6 block h-px w-10 bg-[#b8860b] transition-all duration-500 group-hover:w-24" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- O que muda na prática ---------- */}
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
                className="mt-5 text-4xl font-semibold leading-[1.04] md:text-5xl"
                style={PLAYFAIR}
              >
                Três frentes que separam venda coordenada de imóvel jogado no
                mercado.
              </h2>
            </div>
            <p className="max-w-xl self-end border-l border-[#b8860b]/55 pl-6 text-base leading-8 text-[#b9c6d4] md:text-lg">
              Não é anunciar mais. É controlar a informação, blindar o processo
              e alinhar todo mundo que vende em torno da mesma regra.
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

      {/* ---------- Comparativo ---------- */}
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
              Como a estratégia muda
            </p>
            <h2
              className="mt-5 text-4xl font-semibold leading-[1.04] text-[#0a2540] md:text-5xl"
              style={PLAYFAIR}
            >
              Um ativo pontual ou um lançamento inteiro.
            </h2>
          </motion.div>

          {/* Matriz — desktop */}
          <div className="mt-12 hidden gap-px bg-[#0a2540]/15 md:grid md:grid-cols-[170px_1fr_1fr]">
            <div className="bg-[#f7f3ea]" />
            <div className="bg-[#0a2540] px-6 py-5">
              <p className="text-[0.62rem] uppercase tracking-[0.24em] text-[#d9ad45]">
                Ativo pontual
              </p>
            </div>
            <div className="bg-[#0a2540] px-6 py-5">
              <p className="text-[0.62rem] uppercase tracking-[0.24em] text-[#d9ad45]">
                Lançamento de empreendimento
              </p>
            </div>

            {comparativo.map((linha) => (
              <React.Fragment key={linha.criterio}>
                <div className="bg-[#f7f3ea] px-2 py-6">
                  <p className="text-[0.62rem] uppercase tracking-[0.2em] text-[#9a7b1e]">
                    {linha.criterio}
                  </p>
                </div>
                <div className="bg-[#f7f3ea] px-6 py-6">
                  <p className="text-[0.95rem] leading-7 text-[#33455c]">
                    {linha.pontual}
                  </p>
                </div>
                <div className="bg-[#efe8dc] px-6 py-6">
                  <p className="text-[0.95rem] leading-7 text-[#33455c]">
                    {linha.lancamento}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Empilhado — mobile */}
          <div className="mt-10 grid grid-cols-1 gap-px bg-[#0a2540]/15 md:hidden">
            {[
              { titulo: "Ativo pontual", chave: "pontual" as const },
              {
                titulo: "Lançamento de empreendimento",
                chave: "lancamento" as const,
              },
            ].map((coluna) => (
              <div key={coluna.titulo} className="bg-[#f7f3ea] p-6">
                <p className="border-b border-[#0a2540]/15 pb-4 text-[0.62rem] uppercase tracking-[0.24em] text-[#9a7b1e]">
                  {coluna.titulo}
                </p>
                {comparativo.map((linha) => (
                  <div
                    key={linha.criterio}
                    className="border-b border-[#0a2540]/10 py-4 last:border-0"
                  >
                    <p className="text-[0.6rem] uppercase tracking-[0.2em] text-[#8a7a5e]">
                      {linha.criterio}
                    </p>
                    <p className="mt-1 text-[0.95rem] leading-7 text-[#33455c]">
                      {linha[coluna.chave]}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Remuneração + CTA ---------- */}
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
                Coordenar uma venda tem custo — uma taxa de gestão ou uma fatia
                da comissão. Por isso ela só se justifica quando devolve ganho
                real de velocidade ou de preço final. É esse o nosso
                compromisso: relatório aberto do funil, tabela e comissionamento
                claros para todas as imobiliárias parceiras e um único
                responsável por prestar contas para você.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-[#d8ad45] bg-[#d8ad45] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#191207] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f0c85a]"
                >
                  Falar com a coordenação
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-3 border border-[#d8ad45]/80 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#f7efe2] transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Ver serviços
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

export default CoordenacaoPage;
