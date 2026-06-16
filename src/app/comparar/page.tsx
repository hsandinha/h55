"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LuX, LuArrowLeft, LuArrowUpRight } from "react-icons/lu";
import { useCompare } from "@/context/CompareContext";
import { getImovelById } from "@/lib/properties";
import type { Imovel } from "@/types/imovel";

const brl = (n?: number) =>
  typeof n === "number"
    ? new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        maximumFractionDigits: 0,
      }).format(n)
    : "·";

const pct = (n?: number) => (typeof n === "number" ? `${n.toLocaleString("pt-BR")}%` : "·");
const m2 = (n?: number) => (typeof n === "number" && n > 0 ? `${n} m²` : "·");
const txt = (v?: string | number | null) =>
  v === undefined || v === null || v === "" ? "·" : String(v);

const rows: { label: string; render: (im: Imovel) => React.ReactNode; highlight?: boolean }[] = [
  { label: "Preço", render: (im) => brl(im.preco) },
  { label: "Rentabilidade", render: (im) => pct(im.rentabilidadeAnual), highlight: true },
  { label: "Valorização 12m", render: (im) => (typeof im.valorizacao12m === "number" ? `+${im.valorizacao12m}%` : "·") },
  { label: "Entrada mínima", render: (im) => brl(im.entradaMinima) },
  { label: "Cidade", render: (im) => txt(im.endereco?.cidade) },
  { label: "Bairro", render: (im) => txt(im.endereco?.bairro) },
  { label: "Tipo", render: (im) => txt(im.tipo?.replace(/-/g, " ")) },
  { label: "Área", render: (im) => m2(im.area) },
  { label: "Quartos", render: (im) => txt(im.quartos) },
  { label: "Suítes", render: (im) => txt(im.suites) },
  { label: "Banheiros", render: (im) => txt(im.banheiros) },
  { label: "Vagas", render: (im) => txt(im.vagas) },
  { label: "Ano", render: (im) => txt(im.anoConstrucao) },
  { label: "Condomínio", render: (im) => brl(im.valorCondominio) },
  { label: "IPTU/ano", render: (im) => brl(im.valorIptu) },
];

export default function CompararPage() {
  const { ids, remove, clear } = useCompare();
  const [items, setItems] = useState<Imovel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    (async () => {
      const res = await Promise.all(ids.map((id) => getImovelById(id)));
      if (!cancelled) {
        setItems(res.filter(Boolean) as Imovel[]);
        setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [ids]);

  return (
    <main className="min-h-screen bg-[#f7f4ee]">
      <section className="border-b border-[#b8860b]/20 bg-[#0a2540] py-14">
        <div className="mx-auto max-w-[1400px] px-6">
          <Link
            href="/imoveis"
            className="inline-flex items-center gap-1.5 text-[0.6rem] uppercase tracking-[0.28em] text-[#9fb0c4] hover:text-[#fbbf24]"
          >
            <LuArrowLeft size={13} /> Voltar ao portfólio
          </Link>
          <div className="mt-4 flex items-end justify-between gap-4">
            <h1 className="font-display text-4xl font-bold text-[#f4efe6] md:text-5xl">
              Comparar imóveis
            </h1>
            {ids.length > 0 && (
              <button
                onClick={clear}
                className="text-[0.6rem] uppercase tracking-[0.28em] text-[#9fb0c4] hover:text-[#fbbf24]"
              >
                limpar tudo
              </button>
            )}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-6 py-10">
        {loading ? (
          <p className="text-sm text-[#52617a]">Carregando...</p>
        ) : items.length === 0 ? (
          <div className="border border-[#b8860b]/20 bg-white py-20 text-center">
            <p className="eyebrow text-[#9a7b1e]">Nada para comparar</p>
            <p className="font-display mt-3 text-2xl font-bold text-[#0a2540]">
              Selecione imóveis no portfólio.
            </p>
            <p className="mt-3 text-sm text-[#52617a]">
              Use o botão de comparar (↔) nos cards para adicionar até 4 imóveis.
            </p>
            <Link
              href="/imoveis"
              className="mt-5 inline-flex items-center gap-2 bg-[#0a2540] px-6 py-3 text-[0.65rem] uppercase tracking-[0.28em] text-[#f2ece0] transition hover:bg-[#b8860b] hover:text-[#1a1206]"
            >
              Ir para o portfólio
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto border border-[#b8860b]/15 bg-white">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="sticky left-0 z-10 w-40 border-b border-[#b8860b]/15 bg-white p-4" />
                  {items.map((im) => (
                    <th key={im.id} className="min-w-[220px] border-b border-l border-[#b8860b]/15 p-4 align-top">
                      <div className="relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={im.fotos?.[0] || "/images/hero-background.webp"}
                          alt={im.titulo}
                          className="mb-3 h-28 w-full object-cover"
                        />
                        <button
                          onClick={() => remove(im.id)}
                          aria-label="Remover"
                          className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center bg-[#06121f]/80 text-[#f2ece0] hover:bg-[#a33]"
                        >
                          <LuX size={13} />
                        </button>
                        <Link
                          href={`/imoveis/${im.id}`}
                          className="font-display block text-left text-base font-bold leading-tight text-[#0a2540] hover:text-[#9a7b1e]"
                        >
                          {im.titulo}
                        </Link>
                        <Link
                          href={`/imoveis/${im.id}`}
                          className="mt-1 inline-flex items-center gap-1 text-[0.6rem] uppercase tracking-[0.24em] text-[#9a7b1e]"
                        >
                          Ver <LuArrowUpRight size={11} />
                        </Link>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label} className="border-b border-[#b8860b]/10 last:border-0">
                    <td className="sticky left-0 z-10 bg-white p-4 text-[0.6rem] uppercase tracking-[0.24em] text-[#8a97a8]">
                      {r.label}
                    </td>
                    {items.map((im) => (
                      <td
                        key={im.id}
                        className={`border-l border-[#b8860b]/10 p-4 ${
                          r.highlight ? "font-display text-base font-bold text-[#9a7b1e]" : "text-[#0a2540]"
                        }`}
                      >
                        {r.render(im)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
