"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  LuBed,
  LuBath,
  LuMaximize,
  LuCar,
  LuMapPin,
  LuArrowLeft,
  LuChevronLeft,
  LuChevronRight,
  LuTrendingUp,
  LuCalendar,
  LuCheck,
  LuLayers,
  LuHeart,
  LuArrowLeftRight,
  LuExpand,
} from "react-icons/lu";
import type { Imovel } from "@/types/imovel";
import { getImovelById } from "@/lib/properties";
import { useFavorites } from "@/context/FavoritesContext";
import { useCompare } from "@/context/CompareContext";
import { ScheduleVisitModal } from "@/components/portfolio/ScheduleVisitModal";
import { ContactModal } from "@/components/leads/ContactModal";
import { GalleryLightbox } from "@/components/property/GalleryLightbox";
import { Tour360 } from "@/components/property/Tour360";
import { MortgageSimulator } from "@/components/property/MortgageSimulator";

const brl = (n?: number) =>
  typeof n === "number"
    ? new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        maximumFractionDigits: 0,
      }).format(n)
    : "·";

const featureLabels: Record<string, string> = {
  mobiliado: "Mobiliado",
  varandaGourmet: "Varanda gourmet",
  closet: "Closet",
  churrasqueira: "Churrasqueira",
  arCondicionado: "Ar condicionado",
  lavabo: "Lavabo",
  areaDeServico: "Área de serviço",
  aceitaPermuta: "Aceita permuta",
  dce: "DCE",
  piscina: "Piscina",
  academia: "Academia",
  portaria24h: "Portaria 24h",
  salaodefestas: "Salão de festas",
  sauna: "Sauna",
  areadelazer: "Área de lazer",
  quadraesportiva: "Quadra esportiva",
  playground: "Playground",
  elevadorsocial: "Elevador social",
  interfone: "Interfone",
  jardim: "Jardim",
  rooftop: "Rooftop",
};

const prettify = (k: string) =>
  featureLabels[k] || k.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());

const trueKeys = (obj?: Record<string, unknown>) =>
  obj
    ? Object.entries(obj)
        .filter(([, v]) => v === true)
        .map(([k]) => k)
    : [];

export function ImovelDetailClient({ id }: { id: string }) {
  const [imovel, setImovel] = useState<Imovel | null>(null);
  const [loading, setLoading] = useState(true);
  const [idx, setIdx] = useState(0);
  const [visitOpen, setVisitOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { isFav, toggle: toggleFav } = useFavorites();
  const { has, toggle: toggleCmp, full: cmpFull } = useCompare();
  const fav = isFav(id);
  const cmp = has(id);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    (async () => {
      const data = await getImovelById(id);
      if (!cancelled) {
        setImovel(data);
        setIdx(0);
        setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [id]);

  const mapUrl = useMemo(() => {
    if (!imovel?.lat || !imovel?.lng) return null;
    const d = 0.008;
    const bbox = [imovel.lng - d, imovel.lat - d, imovel.lng + d, imovel.lat + d].join(",");
    return `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(
      bbox,
    )}&layer=mapnik&marker=${imovel.lat},${imovel.lng}`;
  }, [imovel]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7f4ee]">
        <p className="eyebrow text-[#9a7b1e]">Carregando oportunidade...</p>
      </main>
    );
  }

  if (!imovel) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#f7f4ee] px-6 text-center">
        <p className="eyebrow text-[#9a7b1e]">Imóvel não encontrado</p>
        <h1 className="font-display text-3xl font-bold text-[#0a2540]">
          Essa oportunidade não está disponível.
        </h1>
        <Link
          href="/imoveis"
          className="mt-2 inline-flex items-center gap-2 border border-[#0a2540] bg-[#0a2540] px-6 py-3 text-[0.7rem] uppercase tracking-[0.28em] text-[#f2ece0] transition hover:bg-[#b8860b] hover:text-[#1a1206]"
        >
          <LuArrowLeft size={14} /> Voltar ao portfólio
        </Link>
      </main>
    );
  }

  const photos = imovel.fotos?.length ? imovel.fotos : ["/images/hero-background.webp"];
  const caracImovel = trueKeys(imovel.caracteristicasImovel as Record<string, unknown>);
  const caracEdificio = trueKeys(imovel.caracteristicasEdificio as Record<string, unknown>);

  const specs = [
    { icon: LuBed, label: "Quartos", value: imovel.quartos },
    { icon: LuLayers, label: "Suítes", value: imovel.suites },
    { icon: LuBath, label: "Banheiros", value: imovel.banheiros },
    { icon: LuCar, label: "Vagas", value: imovel.vagas },
    { icon: LuMaximize, label: "Área", value: imovel.area ? `${imovel.area} m²` : null },
    { icon: LuCalendar, label: "Ano", value: imovel.anoConstrucao },
  ].filter((s) => s.value !== undefined && s.value !== null && s.value !== 0);

  return (
    <main className="min-h-screen bg-[#f7f4ee] pb-20">
      {/* GALERIA */}
      <section className="relative bg-[#0a2540]">
        <div className="relative mx-auto max-w-[1500px]">
          <div className="relative aspect-[16/9] max-h-[68vh] w-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photos[idx]} alt={imovel.titulo} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06121f]/70 via-transparent to-[#06121f]/30" />

            <button
              onClick={() => setLightboxOpen(true)}
              aria-label="Ver em tela cheia"
              className="absolute bottom-5 right-5 z-20 inline-flex items-center gap-1.5 border border-white/30 bg-[#0a2540]/70 px-3 py-2 text-[0.6rem] uppercase tracking-[0.24em] text-[#f2ece0] backdrop-blur-sm transition hover:border-[#fbbf24] hover:text-[#fbbf24]"
            >
              <LuExpand size={13} /> Tela cheia
            </button>

            <Link
              href="/imoveis"
              className="absolute left-5 top-5 z-20 inline-flex items-center gap-2 border border-white/30 bg-[#0a2540]/70 px-4 py-2 text-[0.62rem] uppercase tracking-[0.28em] text-[#f2ece0] backdrop-blur-sm transition hover:border-[#fbbf24] hover:text-[#fbbf24]"
            >
              <LuArrowLeft size={13} /> Portfólio
            </Link>

            {typeof imovel.rentabilidadeAnual === "number" && (
              <div className="absolute right-5 top-5 z-20 flex items-center gap-1.5 border border-[#fbbf24]/50 bg-[#06121f]/80 px-3 py-1.5 text-xs font-semibold text-[#fbbf24] backdrop-blur-sm">
                <LuTrendingUp size={13} />
                {imovel.rentabilidadeAnual.toLocaleString("pt-BR")}% ao ano
              </div>
            )}

            {photos.length > 1 && (
              <>
                <button
                  onClick={() => setIdx((p) => (p - 1 + photos.length) % photos.length)}
                  aria-label="Foto anterior"
                  className="absolute left-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/30 bg-[#0a2540]/60 text-[#f2ece0] backdrop-blur-sm transition hover:border-[#fbbf24] hover:bg-[#0a2540]/80"
                >
                  <LuChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setIdx((p) => (p + 1) % photos.length)}
                  aria-label="Próxima foto"
                  className="absolute right-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/30 bg-[#0a2540]/60 text-[#f2ece0] backdrop-blur-sm transition hover:border-[#fbbf24] hover:bg-[#0a2540]/80"
                >
                  <LuChevronRight size={18} />
                </button>
                <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                  {photos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      aria-label={`Foto ${i + 1}`}
                      className={`h-[3px] transition-all duration-300 ${
                        i === idx ? "w-8 bg-[#fbbf24]" : "w-4 bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {photos.length > 1 && (
            <div className="flex gap-2 overflow-x-auto bg-[#06121f] p-3 [scrollbar-width:thin]">
              {photos.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`relative h-16 w-24 shrink-0 overflow-hidden border transition ${
                    i === idx ? "border-[#fbbf24]" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CORPO */}
      <div className="mx-auto max-w-[1500px] px-6 pt-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px]">
          {/* ESQUERDA */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="border border-[#0a2540]/20 bg-[#0a2540]/5 px-2.5 py-0.5 text-[0.58rem] uppercase tracking-[0.22em] text-[#0a2540]">
                {imovel.finalidade}
              </span>
              {imovel.tipo && (
                <span className="border border-[#b8860b]/40 bg-[#b8860b]/10 px-2.5 py-0.5 text-[0.58rem] uppercase tracking-[0.22em] text-[#9a7b1e]">
                  {imovel.tipo.replace(/-/g, " ")}
                </span>
              )}
              {imovel.exclusividade && (
                <span className="border border-[#fbbf24]/50 bg-[#fbbf24]/15 px-2.5 py-0.5 text-[0.58rem] uppercase tracking-[0.22em] text-[#9a7b1e]">
                  Exclusivo
                </span>
              )}
              {imovel.codigo && (
                <span className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8a97a8]">
                  Cód · {imovel.codigo}
                </span>
              )}
            </div>

            <h1 className="font-display mt-4 text-3xl font-bold leading-tight text-[#0a2540] md:text-4xl lg:text-5xl">
              {imovel.titulo}
            </h1>

            <div className="mt-4 flex items-center gap-2 text-sm text-[#52617a]">
              <LuMapPin size={15} className="text-[#b8860b]" />
              {[imovel.endereco?.bairro, imovel.endereco?.cidade, imovel.endereco?.estado]
                .filter(Boolean)
                .join(" · ")}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden border border-[#b8860b]/15 bg-[#b8860b]/15 sm:grid-cols-6">
              {specs.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="flex flex-col items-center gap-1.5 bg-white px-2 py-5">
                    <Icon size={18} className="text-[#b8860b]" />
                    <span className="font-display text-lg font-bold text-[#0a2540]">{s.value}</span>
                    <span className="text-[0.58rem] uppercase tracking-[0.22em] text-[#8a97a8]">
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {imovel.descricao && (
              <div className="mt-10">
                <p className="eyebrow text-[#9a7b1e]">Sobre o imóvel</p>
                <span className="mt-3 block h-px w-12 bg-[#b8860b]/50" />
                <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#3c4a5e]">
                  {imovel.descricao}
                </p>
              </div>
            )}

            {(caracImovel.length > 0 || caracEdificio.length > 0) && (
              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {caracImovel.length > 0 && (
                  <div>
                    <p className="eyebrow text-[#9a7b1e]">Detalhes do imóvel</p>
                    <ul className="mt-4 space-y-2">
                      {caracImovel.map((k) => (
                        <li key={k} className="flex items-center gap-2 text-sm text-[#3c4a5e]">
                          <LuCheck size={15} className="text-[#b8860b]" />
                          {prettify(k)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {caracEdificio.length > 0 && (
                  <div>
                    <p className="eyebrow text-[#9a7b1e]">Detalhes do edifício</p>
                    <ul className="mt-4 space-y-2">
                      {caracEdificio.map((k) => (
                        <li key={k} className="flex items-center gap-2 text-sm text-[#3c4a5e]">
                          <LuCheck size={15} className="text-[#b8860b]" />
                          {prettify(k)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {imovel.panoUrl && (
              <div className="mt-12">
                <p className="eyebrow text-[#9a7b1e]">Tour 360°</p>
                <span className="mt-3 mb-5 block h-px w-12 bg-[#b8860b]/50" />
                <div className="overflow-hidden border border-[#b8860b]/20">
                  <Tour360 src={imovel.panoUrl} />
                </div>
              </div>
            )}

            <div className="mt-12">
              <p className="eyebrow text-[#9a7b1e]">Simulador de financiamento</p>
              <span className="mt-3 mb-5 block h-px w-12 bg-[#b8860b]/50" />
              <MortgageSimulator preco={imovel.preco} entradaSugerida={imovel.entradaMinima} />
            </div>

            {mapUrl && (
              <div className="mt-12">
                <p className="eyebrow text-[#9a7b1e]">Localização</p>
                <span className="mt-3 mb-5 block h-px w-12 bg-[#b8860b]/50" />
                <div className="relative h-80 w-full overflow-hidden border border-[#b8860b]/20">
                  <iframe
                    src={mapUrl}
                    title="Localização do imóvel"
                    className="h-full w-full grayscale-[0.12]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="mt-2 text-[0.62rem] uppercase tracking-[0.28em] text-[#8a97a8]">
                  Localização aproximada
                </p>
              </div>
            )}
          </div>

          {/* DIREITA · ficha de retorno (sticky) */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="border border-[#b8860b]/20 bg-white">
              <div className="border-b border-[#b8860b]/15 bg-[#0a2540] p-6 text-[#f2ece0]">
                <p className="text-[0.6rem] uppercase tracking-[0.28em] text-[#caa64a]">Valor</p>
                <p className="font-display mt-1 text-3xl font-bold">{brl(imovel.preco)}</p>
                {typeof imovel.entradaMinima === "number" && (
                  <p className="mt-1 text-xs text-[#9fb0c4]">
                    Entrada a partir de {brl(imovel.entradaMinima)}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-px bg-[#b8860b]/15">
                <Indicator
                  label="Rentabilidade"
                  value={
                    typeof imovel.rentabilidadeAnual === "number"
                      ? `${imovel.rentabilidadeAnual.toLocaleString("pt-BR")}%/ano`
                      : "·"
                  }
                  highlight
                />
                <Indicator
                  label="Valorização 12m"
                  value={typeof imovel.valorizacao12m === "number" ? `+${imovel.valorizacao12m}%` : "·"}
                />
                <Indicator label="Condomínio" value={brl(imovel.valorCondominio)} />
                <Indicator label="IPTU/ano" value={brl(imovel.valorIptu)} />
              </div>

              <div className="space-y-3 p-6">
                <button
                  type="button"
                  onClick={() => setVisitOpen(true)}
                  className="flex w-full items-center justify-center bg-[#fbbf24] px-6 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#1a1206] transition hover:bg-[#e8b23a]"
                >
                  Agendar visita
                </button>
                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="flex w-full items-center justify-center border border-[#0a2540] px-6 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#0a2540] transition hover:bg-[#0a2540] hover:text-[#f2ece0]"
                >
                  Falar com um especialista
                </button>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => toggleFav(imovel.id)}
                    className={`flex items-center justify-center gap-2 border px-4 py-2.5 text-[0.6rem] uppercase tracking-[0.22em] transition ${
                      fav
                        ? "border-[#fbbf24] bg-[#fbbf24]/15 text-[#9a7b1e]"
                        : "border-[#b8860b]/30 text-[#52617a] hover:border-[#b8860b]"
                    }`}
                  >
                    <LuHeart size={14} /> {fav ? "Salvo" : "Favoritar"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (cmp || !cmpFull) toggleCmp(imovel.id);
                    }}
                    disabled={!cmp && cmpFull}
                    className={`flex items-center justify-center gap-2 border px-4 py-2.5 text-[0.6rem] uppercase tracking-[0.22em] transition disabled:opacity-40 ${
                      cmp
                        ? "border-[#fbbf24] bg-[#fbbf24]/15 text-[#9a7b1e]"
                        : "border-[#b8860b]/30 text-[#52617a] hover:border-[#b8860b]"
                    }`}
                  >
                    <LuArrowLeftRight size={14} /> {cmp ? "Comparando" : "Comparar"}
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <GalleryLightbox
        photos={photos}
        open={lightboxOpen}
        index={idx}
        setIndex={setIdx}
        onClose={() => setLightboxOpen(false)}
      />
      <ScheduleVisitModal imovel={imovel} open={visitOpen} onClose={() => setVisitOpen(false)} />
      <ContactModal imovel={imovel} open={contactOpen} onClose={() => setContactOpen(false)} />
    </main>
  );
}

function Indicator({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="bg-white px-5 py-4">
      <p className="text-[0.58rem] uppercase tracking-[0.22em] text-[#8a97a8]">{label}</p>
      <p
        className={`font-display mt-1 text-lg font-bold ${
          highlight ? "text-[#9a7b1e]" : "text-[#0a2540]"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
