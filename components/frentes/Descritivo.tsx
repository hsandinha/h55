"use client";

import React from "react";
import { motion } from "framer-motion";

const PLAYFAIR = { fontFamily: "var(--font-playfair-display)" };

type Props = {
  numero: string;
  titulo: string;
  /** O descritivo literal da frente, como a H55 o escreve. */
  texto: React.ReactNode;
  /** Cada entrega listada no descritivo, uma por linha. */
  entregas: string[];
  tema?: "claro" | "escuro";
};

/**
 * Bloco editorial que apresenta o descritivo de uma frente: a frase da casa em
 * serifa grande e, ao lado, cada entrega numerada como cláusula de escopo.
 */
export const Descritivo = ({ numero, titulo, texto, entregas, tema = "claro" }: Props) => {
  const escuro = tema === "escuro";
  return (
    <section className={escuro ? "bg-[#06121f] py-24 text-[#f4efe6] md:py-32" : "bg-[#f7f3ea] py-24 text-[#0a2540] md:py-32"}>
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className={`flex items-baseline gap-5 border-b pb-6 ${escuro ? "border-[#b8860b]/30" : "border-[#0a2540]/15"}`}
        >
          <span className={`text-[0.68rem] uppercase tracking-[0.3em] ${escuro ? "text-[#caa64a]" : "text-[#9a7b1e]"}`}>
            Descritivo {numero}
          </span>
          <span className={`text-[0.68rem] uppercase tracking-[0.22em] ${escuro ? "text-[#60748d]" : "text-[#8a7a5e]"}`}>
            {titulo}
          </span>
        </motion.div>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className={`border-l pl-6 md:pl-8 ${escuro ? "border-[#b8860b]" : "border-[#b8860b]"}`}
          >
            <p
              className={`text-balance text-2xl leading-[1.35] md:text-[2.1rem] md:leading-[1.3] ${escuro ? "text-[#f4efe6]" : "text-[#0a2540]"}`}
              style={PLAYFAIR}
            >
              {texto}
            </p>
          </motion.blockquote>

          <motion.ol
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`divide-y border-y ${escuro ? "divide-[#b8860b]/20 border-[#b8860b]/20" : "divide-[#0a2540]/12 border-[#0a2540]/12"}`}
          >
            {entregas.map((e, i) => (
              <li key={e} className="grid grid-cols-[3rem_1fr] items-baseline gap-4 py-4">
                <span className={`text-[0.68rem] uppercase tracking-[0.3em] ${escuro ? "text-[#caa64a]" : "text-[#9a7b1e]"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`text-[0.95rem] leading-7 ${escuro ? "text-[#c9d3de]" : "text-[#26364a]"}`}>{e}</span>
              </li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
};
