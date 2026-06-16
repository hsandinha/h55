"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LuTrash2, LuPhone, LuMail } from "react-icons/lu";
import { AdminGuard } from "@/components/admin/AdminGuard";
import {
  getLeads,
  updateLeadStatus,
  deleteLead,
  type Lead,
  type LeadStatus,
} from "@/lib/leads";

const STATUSES: LeadStatus[] = ["Novo", "Em contato", "Qualificado", "Convertido", "Arquivado"];

const statusCls: Record<LeadStatus, string> = {
  Novo: "border-[#b57f0b]/40 text-[#9a7b1e] bg-[#fbbf24]/10",
  "Em contato": "border-[#185fa5]/40 text-[#185fa5] bg-[#185fa5]/10",
  Qualificado: "border-[#7a5cc0]/40 text-[#5b3fa0] bg-[#7a5cc0]/10",
  Convertido: "border-[#1d7a4d]/40 text-[#1d7a4d] bg-[#1d7a4d]/10",
  Arquivado: "border-[#8a97a8]/40 text-[#8a97a8] bg-[#8a97a8]/10",
};

export default function AdminLeadsPage() {
  return (
    <AdminGuard>
      <Inner />
    </AdminGuard>
  );
}

function Inner() {
  const [itens, setItens] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    setItens(await getLeads());
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const onStatus = async (id: string, s: LeadStatus) => {
    setItens((prev) => prev.map((l) => (l.id === id ? { ...l, status: s } : l)));
    await updateLeadStatus(id, s);
  };

  const onDelete = async (id: string) => {
    if (!window.confirm("Excluir este lead?")) return;
    await deleteLead(id);
    load();
  };

  const counts = STATUSES.map((s) => ({
    s,
    n: itens.filter((l) => (l.status || "Novo") === s).length,
  }));

  return (
    <div className="space-y-7">
      <div className="border-b border-[#d7c7a6] pb-6">
        <p className="eyebrow text-[#9a6b04]">Relacionamento</p>
        <h1 className="font-display mt-1 text-4xl font-bold text-[#071b31]">Leads</h1>
        <p className="mt-1 text-sm text-[#52617a]">
          {loading ? "Carregando..." : `${itens.length} contatos`}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
        {counts.map(({ s, n }) => (
          <div key={s} className="border border-[#d7c7a6] bg-white/90 p-4">
            <p className="text-[0.58rem] uppercase tracking-[0.22em] text-[#8a97a8]">{s}</p>
            <p className="font-display mt-1 text-2xl font-bold text-[#071b31]">{n}</p>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto border border-[#d7c7a6] bg-white/90 shadow-[0_18px_50px_rgba(7,27,49,0.05)]">
        {loading ? (
          <div className="p-10 text-center text-sm text-[#52617a]">Carregando leads...</div>
        ) : itens.length === 0 ? (
          <div className="p-10 text-center text-sm text-[#52617a]">
            Nenhum lead ainda. Os contatos enviados pelo site aparecem aqui.
          </div>
        ) : (
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[#d7c7a6] bg-[#f8f4ed] text-[0.58rem] uppercase tracking-[0.22em] text-[#7c8797]">
                <th className="px-4 py-3 font-medium">Contato</th>
                <th className="px-4 py-3 font-medium">Interesse / origem</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 text-right font-medium">Ações</th>
              </tr>
            </thead>
            <tbody>
              {itens.map((l) => (
                <tr key={l.id} className="border-b border-[#eadfca] align-top last:border-0 hover:bg-[#fbf8f2]">
                  <td className="px-4 py-3 text-[#52617a]">
                    <p className="font-medium text-[#071b31]">{l.nome}</p>
                    <p className="mt-0.5 flex items-center gap-1.5 text-xs">
                      <LuPhone size={11} className="text-[#b8860b]" /> {l.telefone}
                    </p>
                    {l.email && (
                      <p className="mt-0.5 flex items-center gap-1.5 text-xs">
                        <LuMail size={11} className="text-[#b8860b]" /> {l.email}
                      </p>
                    )}
                  </td>
                  <td className="px-4 py-3 text-[#52617a]">
                    {l.imovelTitulo ? (
                      <Link href={`/imoveis/${l.imovelId}`} className="text-[#071b31] hover:text-[#9a7b1e]">
                        {l.imovelTitulo}
                      </Link>
                    ) : (
                      <span className="text-[#8a97a8]">{l.origem || "Contato geral"}</span>
                    )}
                    {l.mensagem && (
                      <p className="mt-1 max-w-sm text-xs italic text-[#8a97a8]">“{l.mensagem}”</p>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <select
                      value={l.status || "Novo"}
                      onChange={(e) => onStatus(l.id as string, e.target.value as LeadStatus)}
                      className={`border px-2 py-1 text-[0.62rem] uppercase tracking-[0.18em] focus:outline-none ${
                        statusCls[(l.status || "Novo") as LeadStatus]
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
                      onClick={() => onDelete(l.id as string)}
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
