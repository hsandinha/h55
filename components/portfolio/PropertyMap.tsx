"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import type { Imovel } from "@/types/imovel";

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

export function PropertyMap({ imoveis }: { imoveis: Imovel[] }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [activeImovel, setActiveImovel] = useState<Imovel | null>(null);

  const points = imoveis.filter(
    (i) => typeof i.lat === "number" && typeof i.lng === "number"
  );

  useEffect(() => {
    if (!mapRef.current || points.length === 0) return;

    setOptions({
      key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!,
      v: "weekly",
    });

    let map: google.maps.Map;
    let markers: google.maps.marker.AdvancedMarkerElement[] = [];

    (async () => {
      const { Map } = await importLibrary("maps");
      const { LatLngBounds } = await importLibrary("core");
      const { AdvancedMarkerElement } = await importLibrary("marker");

      map = new Map(mapRef.current!, {
        mapId: "h55-map",
        disableDefaultUI: false,
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        styles: [
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          { featureType: "transit", stylers: [{ visibility: "off" }] },
        ],
      });

      const bounds = new LatLngBounds();

      markers = points.map((imovel) => {
        const lat = imovel.lat as number;
        const lng = imovel.lng as number;

        const pin = document.createElement("div");
        pin.className = "gm-pin";
        pin.innerHTML = `
          <div style="
            background:#0a2540;
            border:2px solid rgba(184,134,11,0.6);
            color:#f2ece0;
            padding:6px 12px;
            border-radius:999px;
            font-size:11px;
            font-weight:700;
            white-space:nowrap;
            box-shadow:0 4px 16px rgba(10,37,64,0.35);
            cursor:pointer;
            transition:all .2s;
            letter-spacing:.03em;
          ">${formatPriceCompact(imovel.preco)}</div>
        `;

        const marker = new AdvancedMarkerElement({
          map,
          position: { lat, lng },
          content: pin,
          title: imovel.titulo,
        });

        marker.addListener("click", () => {
          setActiveImovel(imovel);
          // destaca o marcador ativo
          markers.forEach((m) => {
            const el = (m.content as HTMLElement).querySelector("div");
            if (el) {
              el.style.background = "#0a2540";
              el.style.borderColor = "rgba(184,134,11,0.6)";
            }
          });
          const el = (marker.content as HTMLElement).querySelector("div");
          if (el) {
            el.style.background = "#b8860b";
            el.style.borderColor = "#b8860b";
            el.style.color = "#1a1206";
          }
        });

        bounds.extend({ lat, lng });
        return marker;
      });

      if (points.length === 1) {
        map.setCenter({ lat: points[0].lat as number, lng: points[0].lng as number });
        map.setZoom(15);
      } else {
        map.fitBounds(bounds, 80);
      }
    })();

    return () => {
      markers.forEach((m) => (m.map = null));
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative h-[calc(100vh-220px)] min-h-[560px] w-full overflow-hidden border border-[#b8860b]/20 bg-[#f7f4ee]">
      <div ref={mapRef} className="absolute inset-0 h-full w-full" />

      {activeImovel && (
        <div className="absolute bottom-5 left-5 z-20 w-72 overflow-hidden border border-[#b8860b]/30 bg-white shadow-[0_24px_48px_-20px_rgba(10,37,64,0.4)]">
          {activeImovel.fotos?.[0] && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={activeImovel.fotos[0]}
              alt={activeImovel.titulo}
              className="h-36 w-full object-cover"
            />
          )}
          <div className="p-4">
            <p className="eyebrow text-[#9a7b1e]">{activeImovel.endereco?.bairro}</p>
            <p className="font-display mt-1 line-clamp-2 text-lg font-bold leading-tight text-[#0a2540]">
              {activeImovel.titulo}
            </p>
            <p className="font-display mt-2 text-xl font-bold text-[#0a2540]">
              {formatPrice(activeImovel.preco)}
            </p>
            <Link
              href={`/imoveis/${activeImovel.id}`}
              className="mt-3 inline-flex items-center gap-1 text-[0.65rem] uppercase tracking-[0.28em] text-[#0a2540] hover:text-[#9a7b1e]"
            >
              Ver oportunidade
              <LuArrowUpRight size={12} />
            </Link>
          </div>
          <button
            type="button"
            onClick={() => setActiveImovel(null)}
            className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center bg-[#0a2540]/70 text-white hover:bg-[#0a2540]"
            aria-label="Fechar"
          >
            ×
          </button>
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
