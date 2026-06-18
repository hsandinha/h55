"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LuPlus, LuPencil, LuTrash2, LuDownload, LuFileText } from "react-icons/lu";
import { AdminGuard } from "@/components/admin/AdminGuard";
import { getAllImoveis, deleteImovel } from "@/lib/properties";
import { exportImoveisXlsx } from "@/lib/exportImoveis";
import { exportImoveisPdf } from "@/lib/exportImoveisPdf";
import type { Imovel } from "@/types/imovel";

const brl = (n?: number) =>
  n
    ? new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        maximumFractionDigits: 0,
      }).format(n)
    : "Sob consulta";

export default function AdminImoveisPage() {
  return (
    <AdminGuard>
      <Inner />
    </AdminGuard>
  );
}

function Inner() {
  const [itens, setItens] = useState<Imovel[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState<string | null>(null);
  const [pdfBusy, setPdfBusy] = useState(false);

  const load = async () => {
    setLoading(true);
    setItens(await getAllImoveis());
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const onDelete = async (id: string) => {
    if (!window.confirm("Excluir este imóvel? Essa ação não pode ser desfeita.")) return;
    setBusy(id);
    await deleteImovel(id);
    setBusy(null);
    load();
  };

  const onPdf = async () => {
    setPdfBusy(true);
    try {
      await exportImoveisPdf(itens);
    } finally {
      setPdfBusy(false);
    }
  };

  return (
    <div className="space-y-7">
      <div className="flex flex-col gap-4 border-b border-[#d7c7a6] pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow text-[#9a6b04]">Portfólio</p>
          <h1 className="font-display mt-1 text-4xl font-bold text-[#071b31]">Imóveis</h1>
          <p className="mt-1 text-sm text-[#52617a]">
            {loading ? "Carregando..." : `${itens.length} cadastrados`}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => exportImoveisXlsx(itens)}
            disabled={loading || itens.length === 0}
            className="inline-flex items-center justify-center gap-2 border border-[#b8860b] px-5 py-3 text-[0.62rem] uppercase tracking-[0.24em] text-[#9a6b04] transition hover:bg-[#b8860b]/10 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <LuDownload size={14} /> Exportar XLSX
          </button>
          <button
            type="button"
            onClick={onPdf}
            disabled={loading || pdfBusy || itens.length === 0}
            className="inline-flex items-center justify-center gap-2 border border-[#b8860b] px-5 py-3 text-[0.62rem] uppercase tracking-[0.24em] text-[#9a6b04] transition hover:bg-[#b8860b]/10 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <LuFileText size={14} /> {pdfBusy ? "Gerando..." : "Gerar PDF"}
          </button>
          <Link
            href="/admin/imoveis/novo"
            className="inline-flex items-center justify-center gap-2 bg-[#071b31] px-5 py-3 text-[0.62rem] uppercase tracking-[0.24em] text-[#f7f4ee] transition hover:bg-[#b8860b] hover:text-[#1a1206]"
          >
            <LuPlus size={14} /> Novo imóvel
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto border border-[#d7c7a6] bg-white/90 shadow-[0_18px_50px_rgba(7,27,49,0.05)]">
        {loading ? (
          <div className="p-10 text-center text-sm text-[#52617a]">Carregando imóveis...</div>
        ) : itens.length === 0 ? (
          <div className="p-10 text-center text-sm text-[#52617a]">
            Nenhum imóvel cadastrado ainda.
          </div>
        ) : (
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[#d7c7a6] bg-[#f8f4ed] text-[0.58rem] uppercase tracking-[0.22em] text-[#7c8797]">
                <th className="px-4 py-3 font-medium">Imóvel</th>
                <th className="px-4 py-3 font-medium">Cidade</th>
                <th className="px-4 py-3 font-medium">Preço</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 text-right font-medium">Ações</th>
              </tr>
            </thead>
            <tbody>
              {itens.map((im) => (
                <tr key={im.id} className="border-b border-[#eadfca] last:border-0 hover:bg-[#fbf8f2]">
                  <td className="min-w-[320px] px-4 py-3">
                    <div className="flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={im.fotos?.[0] || "/images/hero-background.webp"}
                        alt=""
                        className="h-12 w-16 shrink-0 object-cover"
                      />
                      <div className="min-w-0">
                        <p className="truncate font-medium text-[#071b31]">{im.titulo}</p>
                        <p className="text-[0.62rem] uppercase tracking-[0.2em] text-[#8a97a8]">
                          {im.codigo || im.id?.slice(0, 8)}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[#52617a]">{im.endereco?.cidade || "·"}</td>
                  <td className="px-4 py-3 font-medium text-[#071b31]">{brl(im.preco)}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`border px-2 py-0.5 text-[0.58rem] uppercase tracking-[0.18em] ${
                        im.status === "Ativo"
                          ? "border-[#1d7a4d]/40 text-[#1d7a4d]"
                          : "border-[#8a97a8]/40 text-[#8a97a8]"
                      }`}
                    >
                      {im.status || "Ativo"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/imoveis/${im.id}/editar`}
                        className="flex h-9 w-9 items-center justify-center border border-[#d7c7a6] text-[#071b31] transition hover:border-[#b8860b] hover:text-[#9a7b1e]"
                        aria-label="Editar"
                      >
                        <LuPencil size={14} />
                      </Link>
                      <button
                        onClick={() => onDelete(im.id)}
                        disabled={busy === im.id}
                        className="flex h-9 w-9 items-center justify-center border border-[#d7c7a6] text-[#a33] transition hover:border-[#a33] disabled:opacity-40"
                        aria-label="Excluir"
                      >
                        <LuTrash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
