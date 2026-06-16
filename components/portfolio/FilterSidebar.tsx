"use client";

import { useState } from "react";
import { LuChevronDown, LuX, LuRotateCcw } from "react-icons/lu";
import type { Imovel, SearchFilters } from "@/types/imovel";

interface FilterSidebarProps {
  filters: SearchFilters;
  onChange: (next: SearchFilters) => void;
  onReset: () => void;
  totalResults: number;
  isLoading: boolean;
  imoveis?: Imovel[];
}

const tiposDeImovel = [
  { name: "Apartamento", value: "apartamento" },
  { name: "Cobertura", value: "cobertura" },
  { name: "Casa em Condomínio", value: "casa-condominio" },
  { name: "Casa Residencial", value: "casa-residencial" },
  { name: "Flat / Hotel", value: "flat-hotel" },
  { name: "Loja", value: "loja" },
  { name: "Lote / Terreno", value: "lote-terreno" },
  { name: "Galpão", value: "galpao" },
];

const caracteristicasImovelList = [
  "Mobiliado",
  "Varanda Gourmet",
  "Closet",
  "Churrasqueira",
  "Ar Condicionado",
  "Lavabo",
];

const caracteristicasEdificioList = [
  "Piscina",
  "Academia",
  "Portaria 24h",
  "Salão de Festas",
  "Sauna",
  "Área de Lazer",
];

const numericOpts = ["1", "2", "3", "4"];

function Section({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-[#b8860b]/15">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-center justify-between py-5"
      >
        <span
          className={`text-[0.7rem] uppercase tracking-[0.32em] transition-colors group-hover:text-[#9a7b1e] ${
            open ? "text-[#9a7b1e]" : "text-[#0a2540]"
          }`}
        >
          {title}
        </span>
        <LuChevronDown
          size={16}
          className={`text-[#b8860b] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-3 pb-5">{children}</div>
        </div>
      </div>
    </div>
  );
}

function ChipGroup({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {numericOpts.map((opt) => {
        const active = value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(active ? "Todos" : opt)}
            className={`min-w-[44px] border px-3 py-1.5 text-xs transition-all ${
              active
                ? "border-[#0a2540] bg-[#0a2540] text-[#f2ece0]"
                : "border-[#b8860b]/25 bg-white text-[#0a2540] hover:border-[#b8860b] hover:text-[#9a7b1e]"
            }`}
          >
            {opt}+
          </button>
        );
      })}
    </div>
  );
}

export function FilterSidebar({
  filters,
  onChange,
  onReset,
  totalResults,
  isLoading,
}: FilterSidebarProps) {
  const [openSection, setOpenSection] = useState<string>("Localização");
  const [locInput, setLocInput] = useState("");
  const toggleSection = (title: string) =>
    setOpenSection((c) => (c === title ? "" : title));

  const update = (patch: Partial<SearchFilters>) =>
    onChange({ ...filters, ...patch });

  const toggleArrayItem = (
    key: "tipo" | "caracteristicasImovel" | "caracteristicasEdificio",
    value: string,
  ) => {
    const arr = filters[key];
    const next = arr.includes(value)
      ? arr.filter((x) => x !== value)
      : [...arr, value];
    update({ [key]: next } as Partial<SearchFilters>);
  };

  const addLocation = () => {
    const loc = locInput.trim().toLowerCase();
    if (loc && !filters.localizacao.includes(loc)) {
      update({ localizacao: [...filters.localizacao, loc] });
    }
    setLocInput("");
  };

  const removeLocation = (loc: string) =>
    update({ localizacao: filters.localizacao.filter((l) => l !== loc) });

  const handleCurrencyChange = (key: "valorMin" | "valorMax", raw: string) =>
    update({ [key]: raw.replace(/\D/g, "") } as Partial<SearchFilters>);

  const formatCurrency = (v: string) => {
    if (!v) return "";
    const n = parseInt(v, 10);
    if (Number.isNaN(n)) return "";
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(n);
  };

  return (
    <aside className="w-full">
      <div className="flex items-center justify-between border-b border-[#b8860b]/20 pb-4">
        <div>
          <p className="eyebrow text-[#9a7b1e]">Refinar busca</p>
          <p className="font-display mt-1 text-2xl font-bold text-[#0a2540]">
            {isLoading ? "..." : totalResults}{" "}
            <span className="text-xs uppercase tracking-[0.28em] text-[#8a97a8]">
              {totalResults === 1 ? "imóvel" : "imóveis"}
            </span>
          </p>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="group flex items-center gap-1.5 border border-[#b8860b]/30 px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.28em] text-[#0a2540] transition-colors hover:border-[#b8860b] hover:text-[#9a7b1e]"
        >
          <LuRotateCcw size={12} className="transition-transform group-hover:-rotate-180" />
          Limpar
        </button>
      </div>

      <Section
        title="Localização"
        open={openSection === "Localização"}
        onToggle={() => toggleSection("Localização")}
      >
        <div className="flex gap-2">
          <input
            type="text"
            value={locInput}
            onChange={(e) => setLocInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addLocation();
              }
            }}
            placeholder="Cidade ou bairro"
            className="h-11 flex-1 border border-[#b8860b]/25 bg-white px-3 text-sm text-[#0a2540] placeholder-[#aab4c2] focus:border-[#b8860b] focus:outline-none"
          />
          <button
            type="button"
            onClick={addLocation}
            className="h-11 border border-[#0a2540] bg-[#0a2540] px-4 text-[0.6rem] uppercase tracking-[0.22em] text-[#f2ece0] transition hover:bg-[#b8860b] hover:text-[#1a1206]"
          >
            Add
          </button>
        </div>
        {filters.localizacao.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {filters.localizacao.map((loc) => (
              <span
                key={loc}
                className="flex items-center gap-1.5 border border-[#b8860b]/30 bg-[#f7f4ee] px-2.5 py-1 text-xs capitalize text-[#0a2540]"
              >
                {loc}
                <button
                  type="button"
                  onClick={() => removeLocation(loc)}
                  className="text-[#b8860b] hover:text-[#0a2540]"
                  aria-label={`Remover ${loc}`}
                >
                  <LuX size={11} />
                </button>
              </span>
            ))}
          </div>
        )}
      </Section>

      <Section
        title="Tipo de imóvel"
        open={openSection === "Tipo de imóvel"}
        onToggle={() => toggleSection("Tipo de imóvel")}
      >
        <div className="flex flex-wrap gap-2">
          {tiposDeImovel.map((t) => {
            const active = filters.tipo.includes(t.value);
            return (
              <button
                key={t.value}
                type="button"
                onClick={() => toggleArrayItem("tipo", t.value)}
                className={`border px-3 py-1.5 text-xs transition-all ${
                  active
                    ? "border-[#0a2540] bg-[#0a2540] text-[#f2ece0]"
                    : "border-[#b8860b]/25 bg-white text-[#0a2540] hover:border-[#b8860b] hover:text-[#9a7b1e]"
                }`}
              >
                {t.name}
              </button>
            );
          })}
        </div>
      </Section>

      <Section
        title="Espaços"
        open={openSection === "Espaços"}
        onToggle={() => toggleSection("Espaços")}
      >
        <div className="space-y-4">
          {[
            { label: "Quartos", key: "quartos" as const },
            { label: "Banheiros", key: "banheiros" as const },
            { label: "Suítes", key: "suites" as const },
            { label: "Vagas", key: "vagas" as const },
          ].map((row) => (
            <div key={row.key}>
              <p className="mb-2 text-[0.65rem] uppercase tracking-[0.28em] text-[#8a97a8]">
                {row.label}
              </p>
              <ChipGroup
                value={filters[row.key]}
                onChange={(v) => update({ [row.key]: v } as Partial<SearchFilters>)}
              />
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Faixa de valor"
        open={openSection === "Faixa de valor"}
        onToggle={() => toggleSection("Faixa de valor")}
      >
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Mín"
            value={formatCurrency(filters.valorMin)}
            onChange={(e) => handleCurrencyChange("valorMin", e.target.value)}
            className="h-11 border border-[#b8860b]/25 bg-white px-3 text-sm text-[#0a2540] placeholder-[#aab4c2] focus:border-[#b8860b] focus:outline-none"
          />
          <input
            type="text"
            placeholder="Máx"
            value={formatCurrency(filters.valorMax)}
            onChange={(e) => handleCurrencyChange("valorMax", e.target.value)}
            className="h-11 border border-[#b8860b]/25 bg-white px-3 text-sm text-[#0a2540] placeholder-[#aab4c2] focus:border-[#b8860b] focus:outline-none"
          />
        </div>
      </Section>

      <Section
        title="Área (m²)"
        open={openSection === "Área (m²)"}
        onToggle={() => toggleSection("Área (m²)")}
      >
        <div className="grid grid-cols-2 gap-3">
          <input
            type="number"
            placeholder="Mín"
            value={filters.areaMin}
            onChange={(e) => update({ areaMin: e.target.value })}
            className="h-11 border border-[#b8860b]/25 bg-white px-3 text-sm text-[#0a2540] placeholder-[#aab4c2] focus:border-[#b8860b] focus:outline-none"
          />
          <input
            type="number"
            placeholder="Máx"
            value={filters.areaMax}
            onChange={(e) => update({ areaMax: e.target.value })}
            className="h-11 border border-[#b8860b]/25 bg-white px-3 text-sm text-[#0a2540] placeholder-[#aab4c2] focus:border-[#b8860b] focus:outline-none"
          />
        </div>
      </Section>

      <Section
        title="Código do imóvel"
        open={openSection === "Código do imóvel"}
        onToggle={() => toggleSection("Código do imóvel")}
      >
        <input
          type="text"
          placeholder="Código do imóvel"
          value={filters.codigo}
          onChange={(e) => update({ codigo: e.target.value })}
          className="h-11 w-full border border-[#b8860b]/25 bg-white px-3 text-sm text-[#0a2540] placeholder-[#aab4c2] focus:border-[#b8860b] focus:outline-none"
        />
      </Section>

      <Section
        title="Detalhes do imóvel"
        open={openSection === "Detalhes do imóvel"}
        onToggle={() => toggleSection("Detalhes do imóvel")}
      >
        <div className="flex flex-wrap gap-2">
          {caracteristicasImovelList.map((item) => {
            const active = filters.caracteristicasImovel.includes(item);
            return (
              <button
                key={item}
                type="button"
                onClick={() => toggleArrayItem("caracteristicasImovel", item)}
                className={`border px-3 py-1.5 text-xs transition-all ${
                  active
                    ? "border-[#0a2540] bg-[#0a2540] text-[#f2ece0]"
                    : "border-[#b8860b]/25 bg-white text-[#0a2540] hover:border-[#b8860b] hover:text-[#9a7b1e]"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </Section>

      <Section
        title="Detalhes do edifício"
        open={openSection === "Detalhes do edifício"}
        onToggle={() => toggleSection("Detalhes do edifício")}
      >
        <div className="flex flex-wrap gap-2">
          {caracteristicasEdificioList.map((item) => {
            const active = filters.caracteristicasEdificio.includes(item);
            return (
              <button
                key={item}
                type="button"
                onClick={() => toggleArrayItem("caracteristicasEdificio", item)}
                className={`border px-3 py-1.5 text-xs transition-all ${
                  active
                    ? "border-[#0a2540] bg-[#0a2540] text-[#f2ece0]"
                    : "border-[#b8860b]/25 bg-white text-[#0a2540] hover:border-[#b8860b] hover:text-[#9a7b1e]"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </Section>
    </aside>
  );
}
