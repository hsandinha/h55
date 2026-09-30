// src/app/services/page.tsx
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { Abertura, BotaoPrimario, Label, PLAYFAIR } from "../../../components/frentes/Base";

// Índice das áreas de atuação: cada frente é detalhada na sua própria página.
const frentes = [
  {
    num: "01",
    label: "Incorporadoras",
    title: "Coordenação de lançamentos imobiliários",
    lead: "Conduzimos a operação de vendas do seu lançamento.",
    href: "/lancamentos",
  },
  {
    num: "02",
    label: "Proprietários",
    title: "Coordenação de imóveis selecionados",
    lead: "Assumimos a operação da venda do seu imóvel.",
    href: "/imoveis-selecionados",
  },
  {
    num: "03",
    label: "Investidores",
    title: "Private equity imobiliário",
    lead: "Participar da operação, não só comprar a unidade.",
    href: "/equity",
  },
];

export default function ServicesPage() {
  return (
    <div className="[font-variant-numeric:lining-nums]">
      {/* 1. Abertura */}
      <Abertura
        rotulo="Áreas de atuação"
        titulo="Como a H55"
        destaque="pode atuar?"
        lead="Três áreas complementares, com soluções específicas para incorporadoras, proprietários e investidores. Escolha a que corresponde ao seu objetivo."
        cta={{ href: "/contact", label: "Falar com a coordenação" }}
      />

      {/* 2. Índice das áreas */}
      <section className="bg-white text-[#0a2540]">
        <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10 md:py-20 lg:px-14">
          <ul className="border-t border-[#0a2540]/15">
            {frentes.map((f) => (
              <li key={f.num} className="border-b border-[#0a2540]/15">
                <Link
                  href={f.href}
                  className="group grid items-baseline gap-x-8 gap-y-4 py-9 transition-colors hover:bg-[#f7f3ea] md:py-11 lg:grid-cols-[3rem_1fr_auto]"
                >
                  <span className="text-sm font-semibold text-[#9a7b1e]">{f.num}</span>
                  <div>
                    <Label>{f.label}</Label>
                    <h2
                      className="mt-3 text-balance text-2xl font-semibold leading-tight md:text-[2rem]"
                      style={PLAYFAIR}
                    >
                      {f.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-base leading-7 text-[#46566e]">{f.lead}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a2540] underline decoration-[#b8860b] decoration-2 underline-offset-8 transition group-hover:text-[#9a7b1e] lg:self-center">
                    Ver em detalhes
                    <LuArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Como operamos */}
      <section className="bg-[#0a2540] text-white">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-2 lg:gap-20 lg:px-14">
          <div>
            <Label dark>Como operamos</Label>
            <h2
              className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
              style={PLAYFAIR}
            >
              Um responsável pela coordenação do processo.
            </h2>
          </div>
          <div className="self-end">
            <p className="text-base leading-8 text-[#c5d0dd] md:text-lg">
              Em cada área de atuação, a H55 centraliza informações, organiza os
              participantes e acompanha a evolução da operação. Assim, quem
              contrata sabe com quem falar e tem clareza sobre os próximos
              passos, da primeira conversa à assinatura.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <BotaoPrimario href="/contact" dark>
                Falar com a coordenação
              </BotaoPrimario>
              <Link
                href="/imoveis"
                className="inline-flex items-center justify-center gap-3 border border-white/35 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Ver a carteira
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
