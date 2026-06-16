import type { Metadata } from "next";
import Link from "next/link";
import { bairros } from "@/data/bairros";

export const metadata: Metadata = {
  title: "Bairros · H55 Negócios Imobiliários",
  description:
    "Conheça os bairros onde o h55 tem imóveis no portfólio: Savassi, Lourdes, Boa Viagem e Barra da Tijuca.",
};

export default function BairrosPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] pb-20">
      <section className="border-b border-[#b8860b]/20 bg-[#0a2540] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow text-[#caa64a]">Onde estamos</p>
          <span className="mt-4 block h-px w-16 bg-[#b8860b]" />
          <h1
            className="mt-5 text-4xl font-bold text-[#f4efe6] md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            Bairros do portfólio
          </h1>
          <p className="mt-4 max-w-xl text-sm text-[#9fb0c4] md:text-base">
            Curadoria nos endereços mais desejados do país. Conheça cada região e as
            oportunidades que selecionamos nelas.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {bairros.map((b) => (
            <Link
              key={b.slug}
              href={`/bairros/${b.slug}`}
              className="group relative block aspect-[16/10] overflow-hidden border border-[#b8860b]/20"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={b.img}
                alt={`${b.nome}, ${b.cidade}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(6,18,31,0.15) 0%, rgba(6,18,31,0.55) 50%, rgba(6,18,31,0.92) 100%)",
                }}
              />
              <div className="relative flex h-full flex-col justify-end p-7">
                <p className="text-[0.6rem] uppercase tracking-[0.28em] text-[#caa64a]">
                  {b.cidade}, {b.estado}
                </p>
                <h2
                  className="mt-1 text-2xl font-bold text-[#f4efe6] md:text-3xl"
                  style={{ fontFamily: "var(--font-playfair-display)" }}
                >
                  {b.nome}
                </h2>
                <p className="mt-1.5 max-w-md text-sm text-[#c4cfdc]">{b.tagline}</p>
                <span className="mt-4 block h-px w-8 bg-[#b8860b] transition-all duration-500 group-hover:w-20" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
