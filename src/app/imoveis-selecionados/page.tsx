// src/app/imoveis-selecionados/page.tsx
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";
import { Descritivo } from "../../../components/frentes/Descritivo";

const PLAYFAIR = { fontFamily: "var(--font-playfair-display)" };

const entregas = [
  "Seleção e curadoria das imobiliárias que vão vender o imóvel",
  "Precificação com comparativos e leitura de liquidez da região",
  "Auditoria de matrícula e certidões antes de anunciar",
  "Material próprio: fotos, drone, tour virtual e página do imóvel",
  "Liberação e acompanhamento das visitas",
  "Propostas qualificadas, com capacidade de pagamento verificada",
  "Elaboração e conferência dos contratos",
  "Transferência do imóvel, até a entrega das chaves",
];

const antesDepois = {
  sem: [
    "A chave circula em dez imobiliárias, cada uma com uma foto e um preço.",
    "Corretor liga no domingo pedindo visita para amanhã cedo.",
    "Proposta chega por recado, sem saber se o comprador tem crédito.",
    "Matrícula e certidões só aparecem na hora do contrato, e a venda trava.",
    "Ninguém responde por nada. O dono administra gente em vez de vender.",
  ],
  com: [
    "Um só anúncio, um só preço, um só material, em todas as imobiliárias.",
    "A H55 libera e acompanha as visitas. O proprietário só é chamado quando há proposta.",
    "Proposta chega qualificada, com capacidade de pagamento verificada.",
    "Imóvel auditado antes de anunciar. O contrato não morre no cartório.",
    "Um interlocutor, um relatório, um responsável: a H55.",
  ],
};

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
    title: "Seleção das imobiliárias",
    desc: "Escolhemos as imobiliárias que fazem sentido para aquele imóvel e alinhamos preço, discurso e regra de comissão.",
  },
  {
    title: "Visitas e propostas",
    desc: "Liberamos e acompanhamos as visitas. Você recebe proposta real, com capacidade de pagamento verificada, e não recado de corretor.",
  },
  {
    title: "Contrato e transferência",
    desc: "Elaboração e conferência do contrato, assinatura, acompanhamento do pagamento e transferência do imóvel.",
  },
];

const paraQuemProcura = [
  {
    title: "Consultoria personalizada",
    description:
      "Entendemos seu perfil, objetivo e prazo para traçar a estratégia de compra. Cada cliente recebe atendimento exclusivo.",
  },
  {
    title: "Busca ativa de imóveis",
    description:
      "Procuramos imóveis alinhados ao seu interesse, incluindo opções fora dos portais tradicionais, para ampliar as suas oportunidades.",
  },
  {
    title: "Vistoria técnica de recebimento",
    description:
      "Conferimos acabamentos, instalações e memorial descritivo antes da assinatura do termo de entrega.",
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
                02 · Coordenação de imóveis selecionados
              </p>
              <h1
                className="mt-6 text-balance text-4xl font-semibold leading-[1.02] md:text-6xl lg:text-[3.8rem]"
                style={PLAYFAIR}
              >
                Fazemos{" "}
                <span className="text-[#d9ad45]">o papel do dono.</span>
              </h1>
            </div>
            <p className="max-w-xl self-end border-l border-[#b8860b]/55 pl-6 text-base leading-8 text-[#b9c6d4] md:text-lg">
              O proprietário trata apenas com a H55. Nós coordenamos a venda
              inteira: seleção das imobiliárias, liberação de visitas,
              contratos e transferência do imóvel. Profissionalizar a venda é
              não perder tempo nem dinheiro.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-16 grid grid-cols-1 gap-px border-t border-[#b8860b]/25 bg-[#b8860b]/22 sm:grid-cols-3"
          >
            {[
              ["Um só interlocutor", "você conversa com a H55, e só com a H55"],
              ["Imóvel auditado", "matrícula e certidões antes de anunciar"],
              ["Imobiliárias selecionadas", "quem vende, com qual regra"],
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

      {/* Descritivo */}
      <Descritivo
        numero="02"
        titulo="Coordenação de imóveis selecionados"
        texto={
          <>
            Fazemos o papel do dono. O proprietário trata apenas com a H55.
            Somos os responsáveis por coordenar a venda, da seleção das
            imobiliárias, liberação de visitas e elaboração de contratos até a
            transferência do imóvel.{" "}
            <span className="text-[#9a7b1e]">
              Profissionalizar a venda do seu imóvel é não perder tempo nem
              dinheiro.
            </span>
          </>
        }
        entregas={entregas}
      />

      {/* Sem a H55 / Com a H55 */}
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
                Vender um imóvel não devia ser um segundo emprego.
              </h2>
            </div>
            <p className="max-w-xl self-end text-base leading-8 text-[#52617a] md:text-lg">
              Distribuir a chave para dezenas de imobiliárias gera desencontro
              de informação, desvalorização do patrimônio e dor de cabeça. A
              diferença entre vender solto e vender coordenado é esta.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-[#0a2540]/15 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="bg-[#ebe3d5] p-8 md:p-10"
            >
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#8a7a5e]">
                Vendendo solto
              </p>
              <ul className="mt-8 divide-y divide-[#0a2540]/12 border-y border-[#0a2540]/12">
                {antesDepois.sem.map((t) => (
                  <li key={t} className="flex gap-4 py-4 text-[0.95rem] leading-7 text-[#6b7a90]">
                    <span className="mt-3 block h-px w-4 shrink-0 bg-[#8a7a5e]" />
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#0a2540] p-8 text-[#f4efe6] md:p-10"
            >
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#caa64a]">
                Com a H55 no papel do dono
              </p>
              <ul className="mt-8 divide-y divide-[#b8860b]/25 border-y border-[#b8860b]/25">
                {antesDepois.com.map((t) => (
                  <li key={t} className="flex gap-4 py-4 text-[0.95rem] leading-7 text-[#e6e0d3]">
                    <span className="mt-3 block h-px w-4 shrink-0 bg-[#d9ad45]" />
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <p className="mt-10 max-w-2xl text-xl leading-9 text-[#0a2540]" style={PLAYFAIR}>
            Menos desgaste, mais controle e muito mais eficiência na venda do seu
            imóvel.
          </p>
        </div>
      </section>

      {/* Como conduzimos */}
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
                Como conduzimos
              </p>
              <h2
                className="mt-5 text-balance text-4xl font-semibold leading-[1.04] text-[#0a2540] md:text-5xl"
                style={PLAYFAIR}
              >
                Da leitura do imóvel à transferência.
              </h2>
            </div>
            <p className="max-w-xl self-end text-base leading-8 text-[#52617a] md:text-lg">
              Não são serviços avulsos nem extras cobrados à parte. É o que a
              H55 faz por cada imóvel que aceita coordenar.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-[#0a2540]/15 sm:grid-cols-2 lg:grid-cols-3">
            {conducao.map((etapa, index) => (
              <motion.div
                key={etapa.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                className="group flex min-h-[220px] flex-col bg-[#f7f3ea] p-7 transition-colors duration-500 hover:bg-[#efe8dc]"
              >
                <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[#8a7a5e]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-base font-semibold uppercase tracking-[0.08em] text-[#0a2540]">
                  {etapa.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#52617a]">{etapa.desc}</p>
                <div className="mt-auto pt-6">
                  <span className="block h-px w-8 bg-[#b8860b] transition-all duration-500 group-hover:w-20" />
                </div>
              </motion.div>
            ))}
          </div>
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
                Do outro lado da mesa
              </p>
              <h2
                className="mt-5 text-balance text-4xl font-semibold leading-[1.04] md:text-5xl"
                style={PLAYFAIR}
              >
                Quem compra encontra o imóvel já auditado.
              </h2>
            </div>
            <p className="max-w-xl self-end border-l border-[#b8860b]/55 pl-6 text-base leading-8 text-[#b9c6d4] md:text-lg">
              Quem chega a um imóvel da nossa carteira não recebe promessa,
              recebe documento. E para quem ainda procura, representamos o
              comprador em outros imóveis, com a mesma disciplina.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-px bg-[#b8860b]/22 md:grid-cols-3">
            {paraQuemProcura.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group flex min-h-[240px] flex-col bg-[#08203a]/70 p-7 transition duration-500 hover:bg-[#0a2540]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[#60748d]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="border border-[#b8860b]/45 px-3 py-1 text-[0.55rem] uppercase tracking-[0.2em] text-[#d9ad45]">
                    Para quem procura
                  </span>
                </div>
                <h3
                  className="mt-8 text-2xl font-semibold leading-tight text-[#f4efe6]"
                  style={PLAYFAIR}
                >
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#9fb0c4]">{s.description}</p>
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
                  href="/contact?frente=imoveis-selecionados"
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
