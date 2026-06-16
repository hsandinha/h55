"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LuTrash2, LuPhone, LuMail, LuCalendar } from "react-icons/lu";
import { AdminGuard } from "@/components/admin/AdminGuard";
import {
  getVisitas,
  updateVisitaStatus,
  deleteVisita,
  type Visita,
  type VisitaStatus,
} from "@/lib/visitas";

const STATUSES: VisitaStatus[] = ["Agendada", "Confirmada", "Realizada", "Cancelada"];

const statusCls: Record<VisitaStatus, string> = {
  Agendada: "border-[#b57f0b]/40 text-[#9a7b1e] bg-[#fbbf24]/10",
  Confirmada: "border-[#185fa5]/40 text-[#185fa5] bg-[#185fa5]/10",
  Realizada: "border-[#1d7a4d]/40 text-[#1d7a4d] bg-[#1d7a4d]/10",
  Cancelada: "border-[#8a97a8]/40 text-[#8a97a8] bg-[#8a97a8]/10",
};

export default function AdminVisitasPage() {
  return (
    <AdminGuard>
      <Inner />
    </AdminGuard>
  );
}

function Inner() {
  const [itens, setItens] = useState<Visita[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    setItens(await getVisitas());
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const onStatus = async (id: string, s: VisitaStatus) => {
    setItens((prev) => prev.map((v) => (v.id === id ? { ...v, status: s } : v)));
    await updateVisitaStatus(id, s);
  };

  const onDelete = async (id: string) => {
    if (!window.confirm("Excluir esta visita?")) return;
    await deleteVisita(id);
    load();
  };

  const counts = STATUSES.map((s) => ({
    s,
    n: itens.filter((v) => (v.status || "Agendada") === s).length,
  }));

  return (
    <div className="space-y-7">
      <div className="border-b border-[#d7c7a6] pb-6">
        <p className="eyebrow text-[#9a6b04]">Agenda comercial</p>
        <h1 className="font-display mt-1 text-4xl font-bold text-[#071b31]">Visitas</h1>
        <p className="mt-1 text-sm text-[#52617a]">
          {loading ? "Carregando..." : `${itens.length} solicitações`}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {counts.map(({ s, n }) => (
          <div key={s} className="border border-[#d7c7a6] bg-white/90 p-4">
            <p className="text-[0.58rem] uppercase tracking-[0.22em] text-[#8a97a8]">{s}</p>
            <p className="font-display mt-1 text-2xl font-bold text-[#071b31]">{n}</p>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto border border-[#d7c7a6] bg-white/90 shadow-[0_18px_50px_rgba(7,27,49,0.05)]">
        {loading ? (
          <div className="p-10 text-center text-sm text-[#52617a]">Carregando visitas...</div>
        ) : itens.length === 0 ? (
          <div className="p-10 text-center text-sm text-[#52617a]">
            Nenhuma visita solicitada ainda. As solicitações feitas no site aparecem aqui.
          </div>
        ) : (
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[#d7c7a6] bg-[#f8f4ed] text-[0.58rem] uppercase tracking-[0.22em] text-[#7c8797]">
                <th className="px-4 py-3 font-medium">Imóvel</th>
                <th className="px-4 py-3 font-medium">Contato</th>
                <th className="px-4 py-3 font-medium">Quando</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 text-right font-medium">Ações</th>
              </tr>
            </thead>
            <tbody>
              {itens.map((v) => (
                <tr key={v.id} className="border-b border-[#eadfca] align-top last:border-0 hover:bg-[#fbf8f2]">
                  <td className="px-4 py-3">
                    <Link
                      href={`/imoveis/${v.imovelId}`}
                      className="font-medium text-[#071b31] hover:text-[#9a7b1e]"
                    >
                      {v.imovelTitulo || v.imovelId}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-[#52617a]">
                    <p className="font-medium text-[#071b31]">{v.nome}</p>
                    <p className="mt-0.5 flex items-center gap-1.5 text-xs">
                      <LuPhone size={11} className="text-[#b8860b]" /> {v.telefone}
                    </p>
                    {v.email && (
                      <p className="mt-0.5 flex items-center gap-1.5 text-xs">
                        <LuMail size={11} className="text-[#b8860b]" /> {v.email}
                      </p>
                    )}
                  </td>
                  <td className="px-4 py-3 text-[#52617a]">
                    <span className="flex items-center gap-1.5">
                      <LuCalendar size={12} className="text-[#b8860b]" />
                      {v.data}
                      {v.hora ? ` · ${v.hora}` : ""}
                    </span>
                    {v.mensagem && (
                      <p className="mt-1 max-w-xs text-xs italic text-[#8a97a8]">“{v.mensagem}”</p>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <select
                      value={v.status || "Agendada"}
                      onChange={(e) => onStatus(v.id as string, e.target.value as VisitaStatus)}
                      className={`border px-2 py-1 text-[0.62rem] uppercase tracking-[0.18em] focus:outline-none ${
                        statusCls[(v.status || "Agendada") as VisitaStatus]
                      }`}
                    >
                      {STATUSES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => onDelete(v.id as string)}
                      aria-label="Excluir"
                      className="inline-flex h-9 w-9 items-center justify-center border border-[#d7c7a6] text-[#a33] transition hover:border-[#a33]"
                    >
                      <LuTrash2 size={14} />
                    </button>
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
