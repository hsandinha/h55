"use client";

import { useState } from "react";
import { LuX, LuCheck } from "react-icons/lu";
import { createVisita } from "@/lib/visitas";
import type { Imovel } from "@/types/imovel";

const inputCls =
  "h-11 w-full border border-[#b8860b]/25 bg-white px-3 text-sm text-[#0a2540] placeholder-[#aab4c2] focus:border-[#b8860b] focus:outline-none";
const labelCls = "mb-1.5 block text-[0.6rem] uppercase tracking-[0.24em] text-[#52617a]";

export function ScheduleVisitModal({
  imovel,
  open,
  onClose,
}: {
  imovel: Imovel;
  open: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    data: "",
    hora: "",
    mensagem: "",
  });
  const [saving, setSaving] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!open) return null;

  const set = (k: keyof typeof form, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    const r = await createVisita({
      imovelId: imovel.id,
      imovelTitulo: imovel.titulo,
      ...form,
    });
    setSaving(false);
    if (r.ok) setDone(true);
    else setError(r.error || "Não foi possível agendar. Tente novamente.");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#06121f]/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md border border-[#b8860b]/25 bg-white">
        <div className="flex items-center justify-between border-b border-[#b8860b]/15 bg-[#0a2540] px-6 py-4 text-[#f2ece0]">
          <div>
            <p className="text-[0.58rem] uppercase tracking-[0.28em] text-[#caa64a]">Agendar visita</p>
            <p className="font-display mt-0.5 line-clamp-1 text-base font-bold">{imovel.titulo}</p>
          </div>
          <button onClick={onClose} aria-label="Fechar" className="text-[#9fb0c4] hover:text-[#fbbf24]">
            <LuX size={20} />
          </button>
        </div>

        {done ? (
          <div className="flex flex-col items-center gap-3 px-6 py-12 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1d7a4d]/10 text-[#1d7a4d]">
              <LuCheck size={24} />
            </div>
            <p className="font-display text-xl font-bold text-[#0a2540]">Visita solicitada!</p>
            <p className="max-w-xs text-sm text-[#52617a]">
              Recebemos seu pedido. Um especialista vai confirmar a data com você em breve.
            </p>
            <button
              onClick={onClose}
              className="mt-2 bg-[#0a2540] px-6 py-3 text-[0.65rem] uppercase tracking-[0.28em] text-[#f2ece0] transition hover:bg-[#b8860b] hover:text-[#1a1206]"
            >
              Fechar
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4 p-6">
            <div>
              <label className={labelCls}>Nome *</label>
              <input required className={inputCls} value={form.nome} onChange={(e) => set("nome", e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelCls}>Telefone *</label>
                <input required className={inputCls} value={form.telefone} onChange={(e) => set("telefone", e.target.value)} />
              </div>
              <div>
                <label className={labelCls}>E-mail</label>
                <input type="email" className={inputCls} value={form.email} onChange={(e) => set("email", e.target.value)} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelCls}>Data *</label>
                <input required type="date" className={inputCls} value={form.data} onChange={(e) => set("data", e.target.value)} />
              </div>
              <div>
                <label className={labelCls}>Horário</label>
                <input type="time" className={inputCls} value={form.hora} onChange={(e) => set("hora", e.target.value)} />
              </div>
            </div>
            <div>
              <label className={labelCls}>Mensagem</label>
              <textarea
                className="min-h-20 w-full border border-[#b8860b]/25 bg-white p-3 text-sm text-[#0a2540] placeholder-[#aab4c2] focus:border-[#b8860b] focus:outline-none"
                value={form.mensagem}
                onChange={(e) => set("mensagem", e.target.value)}
              />
            </div>
            {error && <p className="text-xs text-[#a33]">{error}</p>}
            <button
              type="submit"
              disabled={saving}
              className="w-full bg-[#fbbf24] py-3.5 text-[0.7rem] uppercase tracking-[0.28em] text-[#1a1206] transition hover:bg-[#e8b23a] disabled:opacity-50"
            >
              {saving ? "Enviando..." : "Solicitar visita"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
