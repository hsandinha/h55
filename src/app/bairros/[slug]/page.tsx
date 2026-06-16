import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { bairros, getBairro } from "@/data/bairros";
import { getImoveis } from "@/lib/properties";
import { PropertyCard } from "@/components/portfolio/PropertyCard";

const norm = (s?: string) =>
  (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://h55negociosimob.com.br";

export function generateStaticParams() {
  return bairros.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const b = getBairro(slug);
  if (!b) return { title: "Bairro não encontrado · H55" };
  const titulo = `Imóveis em ${b.nome}, ${b.cidade} · H55`;
  return {
    title: titulo,
    description: b.tagline,
    alternates: { canonical: `${SITE}/bairros/${slug}` },
    openGraph: {
      title: titulo,
      description: b.tagline,
      url: `${SITE}/bairros/${slug}`,
      type: "website",
      images: [{ url: b.img }],
    },
  };
}

export default async function BairroPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = getBairro(slug);
  if (!b) notFound();

  const todos = await getImoveis();
  const imoveis = todos.filter((i) => norm(i.endereco?.bairro) === norm(b.nome));

  return (
    <main className="min-h-screen bg-[#f7f4ee] pb-20">
      {/* HERO */}
      <section className="relative h-[42vh] min-h-[320px] w-full overflow-hidden bg-[#0a2540]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={b.img} alt={`${b.nome}, ${b.cidade}`} className="absolute inset-0 h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,18,31,0.35) 0%, rgba(6,18,31,0.55) 55%, rgba(6,18,31,0.9) 100%)",
          }}
        />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-10">
          <Link
            href="/bairros"
            className="mb-auto mt-6 inline-flex w-fit items-center gap-1.5 border border-white/30 bg-[#0a2540]/60 px-4 py-2 text-[0.6rem] uppercase tracking-[0.28em] text-[#f2ece0] backdrop-blur-sm transition hover:border-[#fbbf24] hover:text-[#fbbf24]"
          >
            Bairros
          </Link>
          <p className="text-[0.62rem] uppercase tracking-[0.3em] text-[#caa64a]">
            {b.cidade}, {b.estado}
          </p>
          <h1
            className="mt-2 text-4xl font-bold text-[#f4efe6] md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            {b.nome}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 pt-12">
        {/* Editorial */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_300px]">
          <div>
            <p
              className="text-xl font-bold text-[#0a2540] md:text-2xl"
              style={{ fontFamily: "var(--font-playfair-display)" }}
            >
              {b.tagline}
            </p>
            <div className="mt-5 space-y-4">
              {b.descricao.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-[#3c4a5e]">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <aside>
            <p className="eyebrow text-[#9a7b1e]">Destaques</p>
            <span className="mt-3 mb-4 block h-px w-12 bg-[#b8860b]/50" />
            <ul className="space-y-2">
              {b.destaques.map((d) => (
                <li key={d} className="flex items-center gap-2 text-sm text-[#3c4a5e]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#b8860b]" />
                  {d}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {/* Empreendimento em destaque */}
        {b.empreendimento && (
          <div className="mt-14 overflow-hidden border border-[#b8860b]/25 bg-[#0a2540] text-[#f2ece0] lg:grid lg:grid-cols-2">
            <div className="relative min-h-[260px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={b.empreendimento.img}
                alt={b.empreendimento.nome}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/60 to-transparent lg:bg-gradient-to-r" />
            </div>
            <div className="p-8 md:p-10">
              <p className="eyebrow text-[#caa64a]">Empreendimento em destaque</p>
              <h2
                className="mt-3 text-3xl font-bold"
                style={{ fontFamily: "var(--font-playfair-display)" }}
              >
                {b.empreendimento.nome}
              </h2>
              <p className="mt-1 text-sm text-[#9fb0c4]">{b.empreendimento.construtora}</p>
              <div className="mt-5 space-y-3">
                {b.empreendimento.descricao.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-[#c4cfdc]">
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {b.empreendimento.destaques.map((d) => (
                  <span
                    key={d}
                    className="border border-[#b8860b]/40 px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-[#caa64a]"
                  >
                    {d}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center justify-center bg-[#fbbf24] px-7 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#1a1206] transition hover:bg-[#e8b23a]"
              >
                Fale sobre o {b.empreendimento.nome}
              </Link>
            </div>
          </div>
        )}

        {/* Imóveis no bairro */}
        <div className="mt-16">
          <p className="eyebrow text-[#9a7b1e]">No portfólio</p>
          <h2
            className="mt-2 text-2xl font-bold text-[#0a2540] md:text-3xl"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            Imóveis em {b.nome}
          </h2>
          <span className="mt-4 mb-8 block h-px w-12 bg-[#b8860b]/50" />

          {imoveis.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {imoveis.map((imovel) => (
                <PropertyCard key={imovel.id} imovel={imovel} />
              ))}
            </div>
          ) : (
            <div className="border border-[#b8860b]/20 bg-white py-16 text-center">
              <p className="text-sm text-[#52617a]">
                Estamos selecionando novas oportunidades em {b.nome}.
              </p>
              <Link
                href="/imoveis"
                className="mt-4 inline-flex items-center gap-2 bg-[#0a2540] px-6 py-3 text-[0.65rem] uppercase tracking-[0.28em] text-[#f2ece0] transition hover:bg-[#b8860b] hover:text-[#1a1206]"
              >
                Ver todo o portfólio
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
