// components/frentes/Base.tsx
// Peças visuais compartilhadas pelas páginas de frente (padrão da /frontstay).
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

export const PLAYFAIR = { fontFamily: "var(--font-playfair-display)" };

export const Label = ({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) => (
  <p
    className={`text-[0.7rem] font-semibold uppercase tracking-[0.24em] ${
      dark ? "text-[#d8ad45]" : "text-[#9a7b1e]"
    }`}
  >
    {children}
  </p>
);

export const BotaoPrimario = ({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) => (
  <Link
    href={href}
    className={`inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm font-semibold transition ${
      dark
        ? "bg-[#d8ad45] text-[#191207] hover:bg-[#f0c85a]"
        : "bg-[#0a2540] text-white hover:bg-[#12375c]"
    }`}
  >
    {children}
    <LuArrowRight size={16} />
  </Link>
);

export const LinkSecundario = ({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) =>
  dark ? (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-3 border border-white/35 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
    >
      {children}
    </Link>
  ) : (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 px-2 py-3.5 text-sm font-semibold text-[#0a2540] underline decoration-[#b8860b] decoration-2 underline-offset-8 transition hover:text-[#9a7b1e]"
    >
      {children}
    </Link>
  );

type AberturaProps = {
  rotulo: string;
  titulo: string;
  destaque: string;
  lead?: React.ReactNode;
  cta: { href: string; label: string };
  secundario?: { href: string; label: string };
};

/** Abertura clara das páginas de frente: rótulo, título e ações. */
export const Abertura = ({ rotulo, titulo, destaque, lead, cta, secundario }: AberturaProps) => (
  <section className="bg-[#f7f3ea] text-[#0a2540]">
    <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10 md:py-24 lg:px-14">
      <div className="max-w-3xl">
        <Label>{rotulo}</Label>
        <h1
          className="mt-8 text-balance text-4xl font-semibold leading-[1.08] md:text-[3.4rem]"
          style={PLAYFAIR}
        >
          {titulo} <span className="text-[#9a7b1e]">{destaque}</span>
        </h1>
      </div>
      <div className="mt-10 max-w-xl">
        {lead && <p className="mb-8 text-lg leading-8 text-[#46566e]">{lead}</p>}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <BotaoPrimario href={cta.href}>{cta.label}</BotaoPrimario>
          {secundario && <LinkSecundario href={secundario.href}>{secundario.label}</LinkSecundario>}
        </div>
      </div>
    </div>
  </section>
);
