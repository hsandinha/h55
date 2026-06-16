"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Tilt from "react-parallax-tilt";
import { LuArrowRight } from "react-icons/lu";

type Stat = {
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

const STATS: Stat[] = [
  { end: 18, suffix: "%", label: "ROI médio entregue" },
  { end: 32, prefix: "+", suffix: "%", label: "Valorização média" },
  { end: 50, suffix: "+", label: "Imóveis selecionados" },
  { end: 300, suffix: "+", label: "Investidores atendidos" },
];

const PINS = [
  { cx: 102, cy: 116, label: "BH" },
  { cx: 226, cy: 72, label: "SP" },
  { cx: 346, cy: 150, label: "RJ" },
  { cx: 464, cy: 94, label: "DF" },
  { cx: 542, cy: 180, label: "NE" },
  { cx: 290, cy: 214, label: "SUL" },
];

function Tese() {
  return (
    <section className="relative overflow-hidden bg-[#f4efe6] py-24 text-[#06121f] md:py-32">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-6 md:grid-cols-[0.85fr_1.15fr] md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7 }}
          className="border-l border-[#b8860b] pl-6"
        >
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#9a7b1e]">
            A nossa tese
          </p>
          <h2
            className="mt-6 text-4xl font-semibold leading-[1.02] text-[#0a2540] md:text-6xl"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            Onde o capital encontra o lar certo.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="flex flex-col justify-end"
        >
          <p className="max-w-2xl text-lg leading-9 text-[#26364a] md:text-xl">
            Não vendemos imóveis por impulso. Curamos oportunidades: analisamos
            risco, liquidez, rentabilidade e horizonte patrimonial para que cada
            aquisição tenha tese, contexto e propósito.
          </p>
          <div className="mt-10 grid gap-4 border-y border-[#0a2540]/15 py-6 text-sm uppercase tracking-[0.18em] text-[#52617a] sm:grid-cols-3">
            <span>Curadoria</span>
            <span>Negociação</span>
            <span>Patrimônio</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Numeros() {
  return (
    <section className="relative bg-[#06121f] py-20 text-[#f4efe6]">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-6 border-b border-[#b8860b]/30 pb-8 md:flex-row md:items-end"
        >
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#caa64a]">
              Números que sustentam
            </p>
            <h2
              className="mt-4 text-3xl font-semibold leading-tight md:text-5xl"
              style={{ fontFamily: "var(--font-playfair-display)" }}
            >
              Critério antes de escala.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#9fb0c4]">
            Os indicadores funcionam como filtro. Só entra no portfólio o que
            suporta análise, comparação e tomada de decisão com clareza.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 border border-[#b8860b]/20 md:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="border-[#b8860b]/20 p-6 odd:border-r md:border-r md:last:border-r-0 md:p-8"
            >
              <div
                className="text-4xl font-semibold text-[#d9ad45] md:text-6xl"
                style={{ fontFamily: "var(--font-playfair-display)" }}
              >
                <CountUp
                  end={s.end}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  duration={2.2}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#9fb0c4]">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioModel() {
  return (
    <Tilt
      tiltMaxAngleX={6}
      tiltMaxAngleY={8}
      glareEnable={false}
      transitionSpeed={1400}
      className="relative [perspective:1200px]"
    >
      <div className="relative min-h-[430px] [transform-style:preserve-3d]">
        <div className="absolute inset-x-8 top-10 h-[330px] border border-[#b8860b]/20 bg-[#0a2540]/35 [transform:translateZ(-34px)_rotateX(8deg)]" />
        <div className="absolute inset-x-4 top-5 h-[360px] border border-[#b8860b]/30 bg-[#08203a]/70 [transform:translateZ(-12px)_rotateX(5deg)]" />
        <div className="relative border border-[#d9ad45]/45 bg-[#06121f] p-6 shadow-2xl shadow-[#06121f]/45 [transform:translateZ(26px)] md:p-8">
          <div className="flex items-start justify-between gap-6 border-b border-[#b8860b]/30 pb-5">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#caa64a]">
                Dossiê H55
              </p>
              <h3
                className="mt-3 text-2xl font-semibold text-[#f4efe6]"
                style={{ fontFamily: "var(--font-playfair-display)" }}
              >
                Portfólio em mercados selecionados
              </h3>
            </div>
            <span className="border border-[#b8860b]/35 px-3 py-1 text-[0.58rem] uppercase tracking-[0.22em] text-[#d9ad45]">
              Ativo
            </span>
          </div>

          <svg viewBox="0 0 640 280" className="mt-8 w-full" aria-hidden="true">
            {PINS.map((p, i) =>
              PINS.slice(i + 1).map((q, j) => (
                <line
                  key={`${i}-${j}`}
                  x1={p.cx}
                  y1={p.cy}
                  x2={q.cx}
                  y2={q.cy}
                  stroke="#b8860b"
                  strokeWidth={0.7}
                  strokeOpacity={0.18}
                />
              )),
            )}
            {PINS.map((p, i) => (
              <g key={p.label}>
                <motion.circle
                  cx={p.cx}
                  cy={p.cy}
                  r={12}
                  fill="#d9ad45"
                  initial={{ opacity: 0.3, scale: 0.5 }}
                  whileInView={{ opacity: [0.3, 0.04, 0.3], scale: [0.5, 1.8, 0.5] }}
                  viewport={{ once: false }}
                  transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.25 }}
                  style={{ transformOrigin: `${p.cx}px ${p.cy}px` }}
                />
                <circle cx={p.cx} cy={p.cy} r={4} fill="#f4efe6" />
                <text
                  x={p.cx + 12}
                  y={p.cy - 9}
                  fill="#9fb0c4"
                  fontSize="16"
                  fontFamily="var(--font-inter)"
                >
                  {p.label}
                </text>
              </g>
            ))}
          </svg>

          <div className="mt-8 grid grid-cols-3 border-t border-[#b8860b]/25 pt-5 text-center">
            <div>
              <p className="text-xl text-[#f4efe6]">Risco</p>
              <span className="text-[0.58rem] uppercase tracking-[0.2em] text-[#9fb0c4]">
                calibrado
              </span>
            </div>
            <div className="border-x border-[#b8860b]/20">
              <p className="text-xl text-[#f4efe6]">Liquidez</p>
              <span className="text-[0.58rem] uppercase tracking-[0.2em] text-[#9fb0c4]">
                projetada
              </span>
            </div>
            <div>
              <p className="text-xl text-[#f4efe6]">Tese</p>
              <span className="text-[0.58rem] uppercase tracking-[0.2em] text-[#9fb0c4]">
                validada
              </span>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
}

function Portfolio() {
  return (
    <section className="relative overflow-hidden bg-[#f4efe6] py-24 md:py-32">
      <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-6 md:grid-cols-[0.85fr_1.15fr] md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75 }}
        >
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#9a7b1e]">
            O portfólio
          </p>
          <h2
            className="mt-5 text-4xl font-semibold leading-[1.04] text-[#0a2540] md:text-6xl"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            Um mapa privado de oportunidades.
          </h2>
          <p className="mt-7 max-w-md text-base leading-8 text-[#52617a]">
            Cada imóvel é apresentado como tese de aquisição: localização,
            entrada, prazo, liquidez e potencial de valorização.
          </p>
          <Link
            href="/imoveis"
            className="mt-9 inline-flex items-center gap-3 border border-[#0a2540] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#0a2540] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0a2540] hover:text-[#f4efe6]"
          >
            Explorar portfólio
            <LuArrowRight size={16} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          <PortfolioModel />
        </motion.div>
      </div>
    </section>
  );
}

export const NarrativeSection = () => (
  <>
    <Tese />
    <Numeros />
    <Portfolio />
  </>
);
