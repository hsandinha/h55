// src/app/imoveis-selecionados/page.tsx
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";

const PLAYFAIR = { fontFamily: "var(--font-playfair-display)" };

const servicos = [
  {
    title: "Consultoria personalizada",
    publico: "Para quem procura",
    description:
      "Entendemos seu perfil, objetivos e necessidades para traçar a melhor estratégia de compra. Cada cliente é único e recebe atendimento exclusivo.",
  },
  {
    title: "Busca ativa de imóveis",
    publico: "Para quem procura",
    description:
      "Procuramos imóveis alinhados ao seu interesse, incluindo opções fora dos portais tradicionais (off-market), para ampliar as suas oportunidades.",
  },
  {
    title: "Due diligence completa",
    publico: null,
    description:
      "Análise técnica, documental e de valorização: certidões, matrícula, situação do vendedor e potencial de retorno. O imóvel entra na carteira auditado e a proposta não morre no cartório.",
  },
  {
    title: "Negociação estratégica",
    publico: null,
    description:
      "Negociamos preço, condições e prazos representando o interesse de quem nos contratou, com as propostas chegando filtradas e pré-qualificadas.",
  },
  {
    title: "Vistoria técnica de recebimento",
    publico: null,
    description:
      "Fazemos a vistoria técnica de recebimento do imóvel, conferindo acabamentos, instalações e o memorial descritivo antes da assinatura do termo de entrega.",
  },
  {
    title: "Acompanhamento completo",
    publico: null,
    description:
      "Estamos ao lado do cliente em todas as etapas, do início ao pós-compra, até a entrega das chaves e além, para que ninguém fique sem resposta no meio do caminho.",
  },
];

const conducao = [
  {
    title: "Leitura do imóvel",
    desc: "Entendemos o ativo, o seu prazo e o seu objetivo, e definimos o preço de anúncio com comparativos e leitura de liquidez da região.",
  },
  {
    title: "Auditoria documental",
    desc: "Matrícula atualizada, certidões e pendências resolvidas enquanto o material é produzido.",
  },
  {
    title: "Material próprio",
    desc: "Fotos profissionais, drone quando o imóvel pede, tour virtual e uma página só dele.",
  },
  {
    title: "Curadoria das parceiras",
    desc: "Selecionamos as imobiliárias que fazem sentido para aquele imóvel e alinhamos preço e discurso.",
  },
  {
    title: "Propostas qualificadas",
    desc: "Você recebe proposta real, com capacidade de pagamento verificada, e não recado de corretor.",
  },
  {
    title: "Contrato e entrega",
    desc: "Conferência do contrato, assinatura digital, acompanhamento do pagamento e vistoria na entrega.",
  },
];

const ImoveisSelecionadosPage = () => {
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
                Coordenação de imóveis selecionados
              </p>
              <h1
                className="mt-6 text-balance text-4xl font-semibold leading-[1.02] md:text-6xl lg:text-[3.8rem]"
                style={PLAYFAIR}
              >
                Um só interlocutor.
                <br />
                <span className="text-[#d9ad45]">
                  Imobiliárias selecionadas
                </span>{" "}
                vendendo o seu imóvel.
              </h1>
            </div>
            <p className="max-w-xl self-end border-l border-[#b8860b]/55 pl-6 text-base leading-8 text-[#b9c6d4] md:text-lg">
              A H55 assume a captação, a documentação e a coordenação
              centralizada da venda. Você conversa com um só parceiro e um grupo
              de imobiliárias selecionadas trabalha pela venda.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-16 grid grid-cols-1 gap-px border-t border-[#b8860b]/25 bg-[#b8860b]/22 sm:grid-cols-3"
          >
            {[
              ["Imóvel auditado", "matrícula e certidões antes de anunciar"],
              ["Material próprio", "fotos, drone, tour virtual e página do imóvel"],
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

      {/* A proposta ao proprietário */}
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
                Para proprietários
              </p>
              <h2
                className="mt-5 text-balance text-4xl font-semibold leading-[1.04] text-[#0a2540] md:text-5xl"
                style={PLAYFAIR}
              >
                A H55 cuida de tudo. Você conversa apenas com um parceiro.
              </h2>
            </div>
            <p className="max-w-xl self-end text-base leading-8 text-[#52617a] md:text-lg">
              Distribuir a chave do imóvel para dezenas de imobiliárias gera
              desencontro de informações, desvalorização do patrimônio e dor de
              cabeça. Assumimos a captação, a documentação e a coordenação
              centralizada da venda.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-[#0a2540]/15 md:grid-cols-3">
            {[
              [
                "Um único ponto de contato",
                "A H55 representa você perante todo o mercado imobiliário. Uma pessoa para cobrar, uma pessoa para responder.",
              ],
              [
                "Estratégia multicanal sem desordem",
                "Coordenamos as melhores imobiliárias e corretores parceiros sem que você precise gerenciar ninguém.",
              ],
              [
                "Imóvel auditado antes de anunciar",
                "Matrícula, certidões e vistoria conferidas, para a proposta não morrer no cartório.",
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
            Menos desgaste, mais controle e muito mais eficiência na venda do seu
            imóvel.
          </p>
        </div>
      </section>

      {/* O que fazemos por cada imóvel */}
      <section className="bg-[#f7f3ea] py-24 md:py-32">
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
                O que fazemos por cada imóvel
              </p>
              <h2
                className="mt-5 text-balance text-4xl font-semibold leading-[1.04] text-[#0a2540] md:text-5xl"
                style={PLAYFAIR}
              >
                Tudo isto está dentro da coordenação.
              </h2>
            </div>
            <p className="max-w-xl self-end text-base leading-8 text-[#52617a] md:text-lg">
              Não são serviços avulsos nem extras cobrados à parte. É o que a
              H55 faz por cada imóvel que aceita coordenar, de um lado e do
              outro da mesa. O que vale para quem vende está sem etiqueta; o que
              é específico de quem procura está marcado.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-[#0a2540]/15 sm:grid-cols-2 lg:grid-cols-3">
            {servicos.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="group flex min-h-[240px] flex-col bg-[#f7f3ea] p-8 transition-colors duration-500 hover:bg-[#efe8dc]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[#8a7a5e]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.publico ? (
                    <span className="border border-[#9a7b1e]/45 px-3 py-1 text-[0.55rem] uppercase tracking-[0.2em] text-[#9a7b1e]">
                      {s.publico}
                    </span>
                  ) : null}
                </div>
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
              Como conduzimos
            </p>
            <h3
              className="mt-4 text-3xl font-semibold leading-tight text-[#0a2540] md:text-4xl"
              style={PLAYFAIR}
            >
              Da leitura do imóvel à entrega das chaves.
            </h3>
            <div className="mt-10 grid grid-cols-1 gap-px bg-[#0a2540]/15 sm:grid-cols-2 lg:grid-cols-3">
              {conducao.map((etapa, index) => (
                <div key={etapa.title} className="bg-[#f7f3ea] p-6">
                  <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[#8a7a5e]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-4 text-base font-semibold uppercase tracking-[0.08em] text-[#0a2540]">
                    {etapa.title}
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-[#52617a]">
                    {etapa.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Para quem procura */}
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
                Os dois lados da mesa
              </p>
              <h2
                className="mt-5 text-balance text-4xl font-semibold leading-[1.04] md:text-5xl"
                style={PLAYFAIR}
              >
                Do outro lado, quem compra encontra o imóvel já auditado.
              </h2>
            </div>
            <p className="max-w-xl self-end border-l border-[#b8860b]/55 pl-6 text-base leading-8 text-[#b9c6d4] md:text-lg">
              Quem chega até um imóvel da nossa carteira não recebe promessa,
              recebe documento. Isso só funciona porque existe uma regra clara
              sobre quem a H55 representa em cada negócio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-14 border border-[#b8860b]/30 bg-[#030c17]/55 p-8 md:p-10"
          >
            <p className="text-[0.64rem] uppercase tracking-[0.26em] text-[#caa64a]">
              A regra da casa
            </p>
            <h3
              className="mt-4 max-w-3xl text-2xl font-semibold leading-tight text-[#f4efe6] md:text-3xl"
              style={PLAYFAIR}
            >
              Nunca pelas duas pontas do mesmo negócio.
            </h3>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-[#b9c6d4] md:text-base">
              Quando a H55 coordena a venda de um imóvel, ela não representa quem
              está comprando aquele imóvel. Os interesses são opostos, e é essa
              linha que garante que a informação que você recebe de nós valha
              alguma coisa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Remuneração e CTA */}
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
                E quanto custa essa camada a mais?
              </h2>
            </div>
            <div className="self-end">
              <p className="max-w-xl text-base leading-8 text-[#52617a] md:text-lg">
                Coordenar uma venda tem custo: uma taxa de gestão ou uma fatia da
                comissão. Ela só se justifica quando devolve ganho real de
                velocidade ou de preço final. É esse o compromisso: relatório
                aberto das tratativas, regra clara com todas as imobiliárias
                parceiras e um único responsável por prestar contas para você.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-[#0a2540] bg-[#0a2540] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#f4efe6] transition duration-300 hover:-translate-y-0.5 hover:bg-[#123457]"
                >
                  Quero vender o meu imóvel
                </Link>
                <Link
                  href="/imoveis"
                  className="inline-flex items-center justify-center gap-3 border border-[#0a2540]/40 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#0a2540] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0a2540]/5"
                >
                  Ver a carteira
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

export default ImoveisSelecionadosPage;
