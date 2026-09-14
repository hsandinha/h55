// src/app/frontstay/page.tsx
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";

const PLAYFAIR = { fontFamily: "var(--font-playfair-display)" };

const SITE_FRONTSTAY = "https://www.frontstay.com.br";

const numeros = [
  ["240", "unidades hoteleiras em operação"],
  ["250", "estações de coworking"],
  ["1.000", "unidades em administração até 2029"],
];

const pilares = [
  {
    title: "Projeto",
    desc: "Assessoria de arquitetura desde o estudo preliminar. Planta, mix de tipologias e áreas comuns nascem adequados à operação, e não adaptados depois.",
  },
  {
    title: "Marketing",
    desc: "Estudo do mercado local, posicionamento do produto e assessoria de marketing para o lançamento, com leitura de quem vai ocupar e de quem vai investir.",
  },
  {
    title: "Treinamento",
    desc: "Convenção e treinamento das equipes de venda sobre o modelo de renda, para que a operação seja explicada ao investidor com precisão.",
  },
  {
    title: "Conectividade",
    desc: "Aplicativo do empreendimento, autoatendimento, cashback e o Front Stay Market: a camada de tecnologia e serviços que sustenta a experiência do hóspede.",
  },
  {
    title: "Decorado",
    desc: "Decorado Front Stay com projeto, mobiliário e enxoval definidos, entregue em até 120 dias, para a unidade entrar em operação assim que for recebida.",
  },
  {
    title: "Gestão",
    desc: "Reservas, operação, pagamentos e experiência do hóspede sob uma administração única, com prestação de contas ao investidor proprietário.",
  },
];

const publicos = [
  {
    label: "Para a incorporadora",
    title: "Um residencial que nasce pronto para operar.",
    body: "A definição do modelo de operação entra ainda na prancheta, junto com o projeto e o estudo de mercado. O empreendimento chega ao lançamento com uma proposta de renda estruturada, e não com uma promessa genérica de valorização.",
  },
  {
    label: "Para o investidor",
    title: "Uma unidade com operação e administração definidas.",
    body: "O proprietário recebe a unidade decorada, conectada e integrada a uma administração profissional de reservas, sem montar operação própria nem gerir hóspedes. A prestação de contas é feita pela Front Stay.",
  },
];

const FrontStayPage = () => {
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
        <div className="relative z-10 mx-auto grid max-w-[1240px] gap-12 px-6 md:px-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12 lg:px-14">
          <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[0.68rem] uppercase tracking-[0.28em] text-[#caa64a]"
          >
            Front Stay · empresa do grupo H55
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="mt-6 text-balance text-3xl font-semibold leading-[1.06] sm:text-4xl md:text-[2.9rem] lg:text-[2.4rem] xl:text-5xl"
            style={PLAYFAIR}
          >
            Da concepção da arquitetura
            <br />
            <span className="text-[#d9ad45]">à administração da unidade.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mt-8 max-w-2xl border-l border-[#b8860b]/55 pl-6 text-base leading-8 text-[#b9c6d4] md:text-lg"
          >
            A Front Stay é a empresa do grupo H55 que participa de ponta a
            ponta do empreendimento residencial: arquitetura, vendas, decorado,
            entrega da obra e administração da unidade em funcionamento. A
            mesma estrutura que coordena a venda responde também pela operação.
          </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-start lg:justify-end"
          >
            <Image
              src="/images/frontstay.svg"
              alt="Front Stay"
              width={1063}
              height={496}
              unoptimized
              priority
              className="h-auto w-full max-w-[260px] invert lg:max-w-[330px]"
            />
          </motion.div>
        </div>
      </section>

      {/* Quem é a Front Stay */}
      <section className="bg-[#f7f3ea] py-24 text-[#0a2540] md:py-32">
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
                Quem opera
              </p>
              <h2
                className="mt-5 text-balance text-4xl font-semibold leading-[1.04] md:text-5xl"
                style={PLAYFAIR}
              >
                Uma operação hoteleira aplicada ao residencial.
              </h2>
            </div>
            <p className="max-w-xl self-end text-base leading-8 text-[#52617a] md:text-lg">
              A Front Stay nasce da Front Hotéis e Coworking, que já administra
              unidades hoteleiras e estações de coworking em operação própria. É
              esse repertório de gestão que passa a sustentar empreendimentos
              residenciais de renda.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-[#0a2540]/15 sm:grid-cols-3">
            {numeros.map(([valor, texto], i) => (
              <motion.div
                key={texto}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-[#f7f3ea] p-8"
              >
                <span
                  className="block text-5xl font-semibold leading-none text-[#b8860b] md:text-6xl"
                  style={PLAYFAIR}
                >
                  {valor}
                </span>
                <span className="mt-5 block text-sm leading-7 text-[#52617a]">
                  {texto}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Os seis pilares */}
      <section className="bg-[#ebe3d5] py-24 text-[#0a2540] md:py-32">
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
                Como a Front Stay opera
              </p>
              <h2
                className="mt-5 text-balance text-4xl font-semibold leading-[1.04] md:text-5xl"
                style={PLAYFAIR}
              >
                Seis processos sob uma única administradora.
              </h2>
            </div>
            <p className="max-w-xl self-end text-base leading-8 text-[#52617a] md:text-lg">
              A administradora acompanha o empreendimento desde o estudo de
              projeto até a rotina do prédio ocupado. Nenhuma etapa é
              terceirizada para fornecedores avulsos contratados fase a fase.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-[#0a2540]/15 sm:grid-cols-2 lg:grid-cols-3">
            {pilares.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className="group flex min-h-[270px] flex-col bg-[#ebe3d5] p-8 transition-colors duration-500 hover:bg-[#e3d9c7]"
              >
                <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[#8a7a5e]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="mt-8 text-2xl font-semibold leading-tight text-[#0a2540]"
                  style={PLAYFAIR}
                >
                  {p.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#52617a]">{p.desc}</p>
                <div className="mt-auto pt-7">
                  <span className="block h-px w-8 bg-[#b8860b] transition-all duration-500 group-hover:w-20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem */}
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
                Incorporadora e investidor
              </p>
              <h2
                className="mt-5 text-balance text-4xl font-semibold leading-[1.04] md:text-5xl"
                style={PLAYFAIR}
              >
                Critérios diferentes para o mesmo modelo.
              </h2>
            </div>
            <p className="max-w-xl self-end border-l border-[#b8860b]/55 pl-6 text-base leading-8 text-[#b9c6d4] md:text-lg">
              Quem incorpora avalia diferencial comercial e velocidade de
              vendas. Quem investe avalia previsibilidade de renda e isenção da
              gestão. A estrutura da Front Stay responde às duas exigências.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-px bg-[#b8860b]/22 md:grid-cols-2">
            {publicos.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex flex-col bg-[#06121f] p-8 md:p-10"
              >
                <span className="w-fit border border-[#caa64a]/45 px-3 py-1 text-[0.58rem] uppercase tracking-[0.22em] text-[#caa64a]">
                  {p.label}
                </span>
                <h3
                  className="mt-8 text-[1.75rem] font-semibold leading-tight text-[#f4efe6]"
                  style={PLAYFAIR}
                >
                  {p.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-[#9fb0c4] md:text-base md:leading-8">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Onde a H55 entra */}
      <section className="bg-[#f7f3ea] py-24 text-[#0a2540] md:py-32">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-10 border-t border-[#0a2540]/20 pt-12 md:grid-cols-[0.9fr_1.1fr]"
          >
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#9a7b1e]">
                Onde a H55 entra
              </p>
              <h2
                className="mt-5 text-balance text-3xl font-semibold leading-[1.06] md:text-5xl"
                style={PLAYFAIR}
              >
                A H55 coordena a venda. A Front Stay opera o empreendimento.
              </h2>
            </div>
            <div className="self-end">
              <p className="max-w-xl text-base leading-8 text-[#52617a] md:text-lg">
                Os papéis são separados, mas o grupo é o mesmo. A H55 conduz a
                operação comercial do lançamento e responde por ela perante a
                incorporadora. A Front Stay assume o projeto, o decorado e a
                administração do prédio depois de pronto. Uma única estrutura
                responde do lançamento à unidade em funcionamento.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/lancamentos"
                  className="inline-flex items-center justify-center gap-3 border border-[#0a2540]/40 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#0a2540] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0a2540]/5"
                >
                  Ver coordenação de lançamentos
                  <LuArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
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
                Avalie o modelo para o seu empreendimento.
              </h2>
            </div>
            <div>
              <p className="text-sm leading-7 text-[#b9c6d4] md:text-base">
                O estudo de mercado, a análise tarifária e as projeções de
                ocupação são elaborados caso a caso, a partir da localização e
                do mix de tipologias. A coordenação da H55 organiza a conversa
                com a Front Stay, empresa do mesmo grupo.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact?area=frontstay"
                  className="inline-flex items-center justify-center border border-[#d8ad45] bg-[#d8ad45] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#191207] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f0c85a]"
                >
                  Falar com a coordenação
                </Link>
                <a
                  href={SITE_FRONTSTAY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 border border-[#d8ad45]/80 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#f7efe2] transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Conhecer a Front Stay
                  <LuArrowUpRight size={16} />
                </a>
              </div>
              <p className="mt-8 text-xs leading-6 text-[#6b7a90]">
                A Front Stay é uma empresa do grupo H55. As projeções de tarifa,
                ocupação e resultado do modelo são elaboradas pela Front Stay
                para cada empreendimento e não constituem promessa de
                rentabilidade.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FrontStayPage;
