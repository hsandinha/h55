"use client";

import { useEffect, useMemo, useState } from "react";
import {
  LuX,
  LuChevronLeft,
  LuChevronRight,
  LuLayoutGrid,
  LuMap,
  LuSlidersHorizontal,
  LuHeart,
} from "react-icons/lu";
import {
  type Imovel,
  type SearchFilters,
  defaultFilters,
} from "@/types/imovel";
import { getImoveis } from "@/lib/properties";
import { PropertyCard } from "@/components/portfolio/PropertyCard";
import { FilterSidebar } from "@/components/portfolio/FilterSidebar";
import { PropertyMap } from "@/components/portfolio/PropertyMap";
import { useFavorites } from "@/context/FavoritesContext";

const ITEMS_PER_PAGE = 9;

const imovelFeatureKey: Record<string, string> = {
  Mobiliado: "mobiliado",
  "Varanda Gourmet": "varandaGourmet",
  Closet: "closet",
  Churrasqueira: "churrasqueira",
  "Ar Condicionado": "arCondicionado",
  Lavabo: "lavabo",
};
const edificioFeatureKey: Record<string, string> = {
  Piscina: "piscina",
  Academia: "academia",
  "Portaria 24h": "portaria24h",
  "Salão de Festas": "salaodefestas",
  Sauna: "sauna",
  "Área de Lazer": "areadelazer",
};

const normalize = (v?: string) =>
  (v || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim();

function matchesLocation(imovel: Imovel, location: string) {
  const q = normalize(location);
  if (!q) return false;
  const fields = [
    imovel.endereco?.cidade,
    imovel.endereco?.bairro,
    imovel.endereco?.rua,
  ].map(normalize);
  if (fields.some((f) => f.includes(q))) return true;
  const terms = q.split(/\s+/).filter(Boolean);
  const full = fields.filter(Boolean).join(" ");
  return terms.length > 1 && terms.every((t) => full.includes(t));
}

export default function ImoveisPage() {
  const [todos, setTodos] = useState<Imovel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<SearchFilters>(defaultFilters);
  const [view, setView] = useState<"list" | "map">("list");
  const [sort, setSort] = useState("relevancia");
  const [page, setPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { ids: favIds, count: favCount } = useFavorites();
  const [onlyFav, setOnlyFav] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await getImoveis();
        if (!cancelled) setTodos(data);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    let list = [...todos];
    const f = filters;

    if (f.tipo.length) list = list.filter((p) => f.tipo.includes(p.tipo));
    if (f.localizacao.length)
      list = list.filter((p) => f.localizacao.some((loc) => matchesLocation(p, loc)));
    if (f.quartos !== "Todos")
      list = list.filter((p) => (p.quartos || 0) >= parseInt(f.quartos));
    if (f.banheiros !== "Todos")
      list = list.filter((p) => (p.banheiros || 0) >= parseInt(f.banheiros));
    if (f.suites !== "Todos")
      list = list.filter((p) => (p.suites || 0) >= parseInt(f.suites));
    if (f.vagas !== "Todos")
      list = list.filter((p) => (p.vagas || 0) >= parseInt(f.vagas));
    if (f.valorMin) list = list.filter((p) => p.preco >= parseInt(f.valorMin));
    if (f.valorMax) list = list.filter((p) => p.preco <= parseInt(f.valorMax));
    if (f.areaMin) list = list.filter((p) => p.area >= parseInt(f.areaMin));
    if (f.areaMax) list = list.filter((p) => p.area <= parseInt(f.areaMax));
    if (f.caracteristicasImovel.length)
      list = list.filter((p) =>
        f.caracteristicasImovel.every((label) => {
          const k = imovelFeatureKey[label];
          return k && (p.caracteristicasImovel as Record<string, boolean>)?.[k] === true;
        }),
      );
    if (f.caracteristicasEdificio.length)
      list = list.filter((p) =>
        f.caracteristicasEdificio.every((label) => {
          const k = edificioFeatureKey[label];
          return k && (p.caracteristicasEdificio as Record<string, boolean>)?.[k] === true;
        }),
      );
    if (f.codigo) {
      const cod = f.codigo.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.codigo?.toLowerCase().includes(cod) || p.id?.toLowerCase().includes(cod),
      );
    }

    if (onlyFav) list = list.filter((p) => favIds.includes(p.id));

    if (sort === "preco_asc") list.sort((a, b) => a.preco - b.preco);
    else if (sort === "preco_desc") list.sort((a, b) => b.preco - a.preco);
    else if (sort === "area_desc") list.sort((a, b) => b.area - a.area);
    else if (sort === "rentabilidade_desc")
      list.sort((a, b) => (b.rentabilidadeAnual || 0) - (a.rentabilidadeAnual || 0));
    else if (sort === "data_desc")
      list.sort(
        (a, b) =>
          new Date(b.dataCadastro).getTime() - new Date(a.dataCadastro).getTime(),
      );
    else list.sort((a, b) => Number(b.emDestaque || 0) - Number(a.emDestaque || 0));

    return list;
  }, [todos, filters, sort, onlyFav, favIds]);

  useEffect(() => setPage(1), [filters, sort]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  const updateFilters = (next: SearchFilters) => setFilters(next);
  const resetFilters = () => setFilters(defaultFilters);

  const activeChips = useMemo(() => {
    const chips: { key: keyof SearchFilters; value?: string; label: string }[] = [];
    filters.localizacao.forEach((l) => chips.push({ key: "localizacao", value: l, label: l }));
    filters.tipo.forEach((t) =>
      chips.push({ key: "tipo", value: t, label: t.replace(/-/g, " ") }),
    );
    (["quartos", "banheiros", "suites", "vagas"] as const).forEach((k) => {
      if (filters[k] !== "Todos") chips.push({ key: k, label: `${filters[k]}+ ${k}` });
    });
    if (filters.valorMin) chips.push({ key: "valorMin", label: `Mín R$ ${filters.valorMin}` });
    if (filters.valorMax) chips.push({ key: "valorMax", label: `Máx R$ ${filters.valorMax}` });
    if (filters.codigo) chips.push({ key: "codigo", label: `Cód: ${filters.codigo}` });
    filters.caracteristicasImovel.forEach((c) =>
      chips.push({ key: "caracteristicasImovel", value: c, label: c }),
    );
    filters.caracteristicasEdificio.forEach((c) =>
      chips.push({ key: "caracteristicasEdificio", value: c, label: c }),
    );
    return chips;
  }, [filters]);

  const removeChip = (key: keyof SearchFilters, value?: string) => {
    const current = filters[key];
    if (Array.isArray(current) && value) {
      setFilters({ ...filters, [key]: current.filter((v) => v !== value) });
    } else {
      setFilters({ ...filters, [key]: defaultFilters[key] });
    }
  };

  return (
    <main className="min-h-screen bg-[#f7f4ee]">
      {/* HERO PEQUENO */}
      <section className="relative overflow-hidden border-b border-[#b8860b]/20 bg-[#0a2540] py-16 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(0,74,173,0.22), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <p className="eyebrow text-[#caa64a]">Curadoria para investidores</p>
          <span className="mt-4 block h-px w-16 bg-[#b8860b]" />
          <h1 className="font-display mt-5 text-4xl font-bold text-[#f4efe6] md:text-5xl lg:text-6xl">
            Portfólio de oportunidades
          </h1>
          <p className="mt-4 max-w-xl text-sm text-[#9fb0c4] md:text-base">
            Imóveis selecionados com análise de rentabilidade e valorização.
            Refine pela barra lateral ou explore no mapa.
          </p>
        </div>
      </section>

      {/* TOOLBAR */}
      <div className="sticky top-16 z-30 border-b border-[#b8860b]/20 bg-[#f7f4ee]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 border border-[#b8860b]/30 px-4 py-2 text-[0.65rem] uppercase tracking-[0.28em] text-[#0a2540] hover:border-[#b8860b] hover:text-[#9a7b1e] lg:hidden"
            >
              <LuSlidersHorizontal size={14} />
              Filtros
            </button>
            <p className="hidden text-xs uppercase tracking-[0.28em] text-[#52617a] md:block">
              {isLoading
                ? "Carregando..."
                : `${filtered.length} ${filtered.length === 1 ? "imóvel" : "imóveis"}`}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setOnlyFav((v) => !v)}
              className={`flex items-center gap-1.5 border px-3 py-2 text-[0.6rem] uppercase tracking-[0.28em] transition ${
                onlyFav
                  ? "border-[#fbbf24] bg-[#fbbf24]/15 text-[#9a7b1e]"
                  : "border-[#b8860b]/25 text-[#0a2540] hover:border-[#b8860b]"
              }`}
              aria-pressed={onlyFav}
            >
              <LuHeart size={12} /> {favCount > 0 ? favCount : "Favoritos"}
            </button>
            <div className="flex border border-[#b8860b]/25">
              <button
                type="button"
                onClick={() => setView("list")}
                className={`flex items-center gap-1.5 px-3 py-2 text-[0.6rem] uppercase tracking-[0.28em] transition ${
                  view === "list" ? "bg-[#0a2540] text-[#f2ece0]" : "text-[#0a2540] hover:text-[#9a7b1e]"
                }`}
              >
                <LuLayoutGrid size={12} />
                Lista
              </button>
              <button
                type="button"
                onClick={() => setView("map")}
                className={`flex items-center gap-1.5 border-l border-[#b8860b]/25 px-3 py-2 text-[0.6rem] uppercase tracking-[0.28em] transition ${
                  view === "map" ? "bg-[#0a2540] text-[#f2ece0]" : "text-[#0a2540] hover:text-[#9a7b1e]"
                }`}
              >
                <LuMap size={12} />
                Mapa
              </button>
            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-9 border border-[#b8860b]/25 bg-white px-3 text-xs text-[#0a2540] focus:border-[#b8860b] focus:outline-none"
            >
              <option value="relevancia">Mais relevantes</option>
              <option value="rentabilidade_desc">Maior rentabilidade</option>
              <option value="data_desc">Mais recentes</option>
              <option value="preco_asc">Menor preço</option>
              <option value="preco_desc">Maior preço</option>
              <option value="area_desc">Maior área</option>
            </select>
          </div>
        </div>

        {activeChips.length > 0 && (
          <div className="border-t border-[#b8860b]/15 bg-white/40">
            <div className="mx-auto flex max-w-[1500px] flex-wrap items-center gap-2 px-6 py-3">
              <span className="text-[0.6rem] uppercase tracking-[0.28em] text-[#9a7b1e]">
                Filtros ativos
              </span>
              {activeChips.map((chip, i) => (
                <button
                  key={`${chip.key}-${chip.value || ""}-${i}`}
                  type="button"
                  onClick={() => removeChip(chip.key, chip.value)}
                  className="group flex items-center gap-1.5 border border-[#b8860b]/30 bg-white px-2.5 py-1 text-xs capitalize text-[#0a2540] hover:border-[#b8860b] hover:text-[#9a7b1e]"
                >
                  {chip.label}
                  <LuX size={11} className="text-[#b8860b] group-hover:text-[#0a2540]" />
                </button>
              ))}
              <button
                type="button"
                onClick={resetFilters}
                className="text-[0.6rem] uppercase tracking-[0.28em] text-[#52617a] hover:text-[#9a7b1e]"
              >
                limpar tudo
              </button>
            </div>
          </div>
        )}
      </div>

      {/* MAIN */}
      <div className="mx-auto max-w-[1500px] px-6 py-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]">
          <div className="hidden lg:block">
            <div className="sticky top-44 max-h-[calc(100vh-12rem)] overflow-y-auto pr-2 [scrollbar-width:thin]">
              <FilterSidebar
                filters={filters}
                onChange={updateFilters}
                onReset={resetFilters}
                totalResults={filtered.length}
                isLoading={isLoading}
                imoveis={todos}
              />
            </div>
          </div>

          <div>
            {view === "map" ? (
              <PropertyMap imoveis={filtered} />
            ) : isLoading ? (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-[420px] animate-pulse border border-[#b8860b]/15 bg-white/60"
                  />
                ))}
              </div>
            ) : paginated.length === 0 ? (
              <div className="border border-[#b8860b]/20 bg-white py-20 text-center">
                <p className="eyebrow text-[#9a7b1e]">Sem resultados</p>
                <p className="font-display mt-3 text-2xl font-bold text-[#0a2540] md:text-3xl">
                  Nenhum imóvel encontrado.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-4 text-sm text-[#9a7b1e] underline-offset-4 hover:underline"
                >
                  Limpar a busca
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
                  {paginated.map((imovel) => (
                    <PropertyCard key={imovel.id} imovel={imovel} />
                  ))}
                </div>

                {totalPages > 1 && (
                  <nav className="mt-14 flex items-center justify-center gap-2" aria-label="Paginação">
                    <button
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={page === 1}
                      className="flex h-10 w-10 items-center justify-center border border-[#b8860b]/25 text-[#0a2540] transition hover:border-[#b8860b] hover:text-[#9a7b1e] disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      <LuChevronLeft size={16} />
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                      <button
                        key={p}
                        onClick={() => setPage(p)}
                        className={`h-10 min-w-[2.5rem] border px-3 text-sm transition ${
                          page === p
                            ? "border-[#0a2540] bg-[#0a2540] text-[#f2ece0]"
                            : "border-[#b8860b]/25 text-[#0a2540] hover:border-[#b8860b] hover:text-[#9a7b1e]"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                    <button
                      onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                      disabled={page === totalPages}
                      className="flex h-10 w-10 items-center justify-center border border-[#b8860b]/25 text-[#0a2540] transition hover:border-[#b8860b] hover:text-[#9a7b1e] disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      <LuChevronRight size={16} />
                    </button>
                  </nav>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* DRAWER MOBILE */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="absolute inset-0 bg-[#0a2540]/60 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="relative ml-auto flex h-full w-full max-w-md flex-col bg-[#f7f4ee]">
            <div className="flex items-center justify-between border-b border-[#b8860b]/20 px-6 py-4">
              <p className="eyebrow text-[#9a7b1e]">Refinar busca</p>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-[#0a2540] hover:text-[#9a7b1e]"
                aria-label="Fechar"
              >
                <LuX size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6">
              <FilterSidebar
                filters={filters}
                onChange={updateFilters}
                onReset={resetFilters}
                totalResults={filtered.length}
                isLoading={isLoading}
                imoveis={todos}
              />
            </div>
            <div className="border-t border-[#b8860b]/20 bg-white px-6 py-4">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-[#0a2540] py-3 text-center text-[0.7rem] uppercase tracking-[0.28em] text-[#f2ece0] transition hover:bg-[#b8860b] hover:text-[#1a1206]"
              >
                Ver {filtered.length} imóveis
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
