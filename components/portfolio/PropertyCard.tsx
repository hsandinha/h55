"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LuBed,
  LuBath,
  LuMaximize,
  LuMapPin,
  LuChevronLeft,
  LuChevronRight,
  LuArrowUpRight,
  LuArrowLeftRight,
  LuTrendingUp,
  LuHeart,
} from "react-icons/lu";
import type { Imovel } from "@/types/imovel";
import { useFavorites } from "@/context/FavoritesContext";
import { useCompare } from "@/context/CompareContext";

const formatPrice = (price: number) => {
  if (!price) return "Sob consulta";
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export function PropertyCard({ imovel }: { imovel: Imovel }) {
  const [isHovered, setIsHovered] = useState(false);
  const [idx, setIdx] = useState(0);

  const { isFav, toggle: toggleFav } = useFavorites();
  const { has, toggle: toggleCmp, full } = useCompare();
  const fav = isFav(imovel.id);
  const cmp = has(imovel.id);

  const photos = imovel.fotos || [];
  const many = photos.length > 1;
  const link = `/imoveis/${imovel.id}`;
  const codigo = imovel.codigo || imovel.id?.substring(0, 6).toUpperCase();

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    setIdx((p) => (p + 1) % photos.length);
  };
  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    setIdx((p) => (p - 1 + photos.length) % photos.length);
  };

  const onFav = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFav(imovel.id);
  };
  const onCmp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!cmp && full) return;
    toggleCmp(imovel.id);
  };

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex h-full flex-col overflow-hidden border border-[#b8860b]/15 bg-white transition-all duration-500 hover:border-[#b8860b] hover:shadow-[0_28px_60px_-30px_rgba(10,37,64,0.45)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#eef0f4]">
        {/* Badges esquerda */}
        <div className="absolute left-4 top-4 z-20 flex flex-col gap-1.5">
          <span className="w-fit border border-white/30 bg-[#0a2540]/80 px-2.5 py-0.5 text-[0.58rem] uppercase tracking-[0.22em] text-[#f2ece0] backdrop-blur-sm">
            {imovel.finalidade || "Comprar"}
          </span>
          {imovel.tipo && (
            <span className="w-fit border border-[#b8860b]/40 bg-[#b8860b]/90 px-2.5 py-0.5 text-[0.58rem] uppercase tracking-[0.22em] text-[#1a1206] backdrop-blur-sm">
              {imovel.tipo.replace(/-/g, " ")}
            </span>
          )}
        </div>

        {/* Ações direita: favoritar + comparar */}
        <div className="absolute right-4 top-4 z-20 flex flex-col gap-2">
          <button
            onClick={onFav}
            aria-label={fav ? "Remover dos favoritos" : "Favoritar"}
            className={`flex h-9 w-9 items-center justify-center border backdrop-blur-sm transition ${
              fav
                ? "border-[#fbbf24] bg-[#fbbf24] text-[#1a1206]"
                : "border-white/30 bg-[#0a2540]/60 text-[#f2ece0] hover:border-[#fbbf24]"
            }`}
          >
            <LuHeart size={15} />
          </button>
          <button
            onClick={onCmp}
            aria-label="Comparar"
            disabled={!cmp && full}
            className={`flex h-9 w-9 items-center justify-center border backdrop-blur-sm transition disabled:cursor-not-allowed disabled:opacity-40 ${
              cmp
                ? "border-[#fbbf24] bg-[#fbbf24] text-[#1a1206]"
                : "border-white/30 bg-[#0a2540]/60 text-[#f2ece0] hover:border-[#fbbf24]"
            }`}
          >
            <LuArrowLeftRight size={15} />
          </button>
        </div>

        <Link href={link} className="block h-full w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos[idx] || photos[0] || "/images/hero-background.webp"}
            alt={imovel.titulo}
            className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.07]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/45 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
        </Link>

        {/* Rentabilidade */}
        {typeof imovel.rentabilidadeAnual === "number" && (
          <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1 border border-[#fbbf24]/50 bg-[#06121f]/85 px-2.5 py-1 text-[0.62rem] font-semibold text-[#fbbf24] backdrop-blur-sm">
            <LuTrendingUp size={12} />
            {imovel.rentabilidadeAnual.toLocaleString("pt-BR")}%/ano
          </div>
        )}

        {many && (
          <>
            <button
              onClick={prev}
              aria-label="Foto anterior"
              className={`absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-white/30 bg-[#0a2540]/60 text-[#f2ece0] backdrop-blur-sm transition-all duration-300 hover:border-[#fbbf24] hover:bg-[#0a2540]/80 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <LuChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              aria-label="Próxima foto"
              className={`absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-white/30 bg-[#0a2540]/60 text-[#f2ece0] backdrop-blur-sm transition-all duration-300 hover:border-[#fbbf24] hover:bg-[#0a2540]/80 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <LuChevronRight size={16} />
            </button>
          </>
        )}

        <span className="absolute bottom-4 right-4 z-20 text-[0.62rem] uppercase tracking-[0.28em] text-[#f2ece0]/70">
          Cód · {codigo}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.28em] text-[#9a7b1e]">
          <LuMapPin size={12} />
          <span className="truncate">
            {imovel.endereco?.bairro}
            {imovel.endereco?.cidade ? ` · ${imovel.endereco.cidade}` : ""}
          </span>
        </div>

        <Link href={link}>
          <h3 className="font-display line-clamp-2 min-h-[3.4rem] text-[1.5rem] font-bold leading-tight text-[#0a2540] transition-colors duration-300 group-hover:text-[#9a7b1e]">
            {imovel.titulo}
          </h3>
        </Link>

        <span className="my-5 block h-px w-10 bg-[#b8860b]/50 transition-all duration-500 group-hover:w-20 group-hover:bg-[#b8860b]" />

        <div className="mb-6 flex items-center gap-5 text-[#52617a]">
          <div className="flex items-center gap-2">
            <LuBed size={16} className="text-[#b8860b]" />
            <span className="text-sm">{imovel.quartos || 0}</span>
          </div>
          <div className="flex items-center gap-2">
            <LuBath size={16} className="text-[#b8860b]" />
            <span className="text-sm">{imovel.banheiros || 0}</span>
          </div>
          <div className="flex items-center gap-2">
            <LuMaximize size={16} className="text-[#b8860b]" />
            <span className="text-sm">{imovel.area || 0} m²</span>
          </div>
        </div>

        <div className="mt-auto border-t border-[#b8860b]/15 pt-5">
          <div className="mb-4 flex items-end justify-between gap-3">
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.28em] text-[#8a97a8]">Valor</p>
              <p className="font-display mt-1 text-2xl font-bold leading-none text-[#0a2540]">
                {formatPrice(imovel.preco)}
              </p>
            </div>
            {typeof imovel.valorizacao12m === "number" && (
              <p className="text-right text-[0.62rem] leading-tight text-[#52617a]">
                <span className="font-semibold text-[#1d7a4d]">+{imovel.valorizacao12m}%</span>
                <br />
                12 meses
              </p>
            )}
          </div>
          <Link
            href={link}
            className="group/btn flex h-11 w-full items-center justify-center gap-2 border border-[#b8860b] bg-[#0a2540] text-[0.7rem] uppercase tracking-[0.28em] text-[#f2ece0] transition-all duration-300 hover:bg-[#b8860b] hover:text-[#1a1206]"
          >
            Ver oportunidade
            <LuArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
