"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { LuArrowUpRight, LuMapPin } from "react-icons/lu";
import type { Imovel } from "@/types/imovel";

interface MapPoint {
  imovel: Imovel;
  lng: number;
  lat: number;
}

// Fallback: Brasil (sudeste) caso nenhum imóvel tenha coordenadas
const FALLBACK = { west: -53, south: -28, east: -41, north: -18 };

const formatPriceCompact = (value: number) => {
  if (value >= 1_000_000)
    return `R$ ${(value / 1_000_000).toFixed(value % 1_000_000 === 0 ? 0 : 1)}M`;
  if (value >= 1000) return `R$ ${Math.round(value / 1000)}k`;
  return `R$ ${value}`;
};

const formatPrice = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  }).format(value);

const clamp = (v: number, min: number, max: number) =>
  Math.min(Math.max(v, min), max);

export function PropertyMap({ imoveis }: { imoveis: Imovel[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const points = useMemo<MapPoint[]>(
    () =>
      imoveis
        .filter((i) => typeof i.lat === "number" && typeof i.lng === "number")
        .map((imovel) => ({
          imovel,
          lat: imovel.lat as number,
          lng: imovel.lng as number,
        })),
    [imoveis],
  );

  // bbox dinâmica a partir dos pontos (com folga), ou centro padrão
  const bounds = useMemo(() => {
    if (points.length === 0) return FALLBACK;
    const lats = points.map((p) => p.lat);
    const lngs = points.map((p) => p.lng);
    const padLat = Math.max((Math.max(...lats) - Math.min(...lats)) * 0.25, 0.4);
    const padLng = Math.max((Math.max(...lngs) - Math.min(...lngs)) * 0.25, 0.4);
    return {
      west: Math.min(...lngs) - padLng,
      east: Math.max(...lngs) + padLng,
      south: Math.min(...lats) - padLat,
      north: Math.max(...lats) + padLat,
    };
  }, [points]);

  const mapUrl = useMemo(
    () =>
      `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(
        [bounds.west, bounds.south, bounds.east, bounds.north].join(","),
      )}&layer=mapnik`,
    [bounds],
  );

  const project = (p: MapPoint) => ({
    left: `${clamp(
      ((p.lng - bounds.west) / (bounds.east - bounds.west)) * 100,
      4,
      96,
    )}%`,
    top: `${clamp(
      ((bounds.north - p.lat) / (bounds.north - bounds.south)) * 100,
      4,
      96,
    )}%`,
  });

  const activePoint = points.find((p) => p.imovel.id === activeId);

  return (
    <div className="relative h-[calc(100vh-220px)] min-h-[560px] w-full overflow-hidden border border-[#b8860b]/20 bg-[#f7f4ee]">
      <iframe
        src={mapUrl}
        title="Mapa dos imóveis"
        className="absolute inset-0 h-full w-full grayscale-[0.12]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="absolute inset-0 z-10">
        {points.map((point) => {
          const isActive = activeId === point.imovel.id;
          return (
            <button
              key={point.imovel.id}
              type="button"
              onMouseEnter={() => setActiveId(point.imovel.id)}
              onClick={() => setActiveId(point.imovel.id)}
              style={project(point)}
              className={`absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold shadow-lg backdrop-blur-md transition-all duration-300 ${
                isActive
                  ? "z-20 border-[#b8860b] bg-[#b8860b] text-[#1a1206]"
                  : "border-[#fbbf24]/60 bg-[#0a2540]/85 text-[#f2ece0] hover:border-[#fbbf24] hover:bg-[#0a2540]"
              }`}
              aria-label={point.imovel.titulo}
            >
              <LuMapPin size={12} />
              <span>{formatPriceCompact(point.imovel.preco)}</span>
            </button>
          );
        })}
      </div>

      {activePoint && (
        <div className="absolute bottom-5 left-5 z-20 w-72 overflow-hidden border border-[#b8860b]/30 bg-white shadow-[0_24px_48px_-20px_rgba(10,37,64,0.4)]">
          {activePoint.imovel.fotos?.[0] && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={activePoint.imovel.fotos[0]}
              alt={activePoint.imovel.titulo}
              className="h-36 w-full object-cover"
            />
          )}
          <div className="p-4">
            <p className="eyebrow text-[#9a7b1e]">{activePoint.imovel.endereco?.bairro}</p>
            <p className="font-display mt-1 line-clamp-2 text-lg font-bold leading-tight text-[#0a2540]">
              {activePoint.imovel.titulo}
            </p>
            <p className="font-display mt-2 text-xl font-bold text-[#0a2540]">
              {formatPrice(activePoint.imovel.preco)}
            </p>
            <Link
              href={`/imoveis/${activePoint.imovel.id}`}
              className="mt-3 inline-flex items-center gap-1 text-[0.65rem] uppercase tracking-[0.28em] text-[#0a2540] hover:text-[#9a7b1e]"
            >
              Ver oportunidade
              <LuArrowUpRight size={12} />
            </Link>
          </div>
        </div>
      )}

      {points.length === 0 && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#f7f4ee]/80 p-8 text-center backdrop-blur-sm">
          <div>
            <p className="eyebrow text-[#9a7b1e]">Mapa sem pinos</p>
            <p className="mt-2 max-w-sm text-sm text-[#52617a]">
              Nenhum imóvel com coordenadas para exibir no mapa.
            </p>
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute bottom-4 right-4 z-20 border border-[#b8860b]/20 bg-[#f7f4ee]/90 px-3 py-1 backdrop-blur-md">
        <span className="text-[0.6rem] uppercase tracking-[0.28em] text-[#0a2540]/70">
          {points.length} no mapa · localização aproximada
        </span>
      </div>
    </div>
  );
}
