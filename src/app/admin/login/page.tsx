"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isSupabaseConfigured } from "@/lib/supabaseClient";
import { signIn } from "@/lib/auth";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isSupabaseConfigured()) router.replace("/admin/imoveis");
  }, [router]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const r = await signIn(email, password);
    setLoading(false);
    if (r.ok) router.replace("/admin/imoveis");
    else setError(r.error || "Falha no login.");
  };

  return (
    <main className="grid min-h-screen bg-[#071b31] text-[#f4efe6] lg:grid-cols-[1.1fr_0.9fr]">
      <section className="hidden border-r border-[#caa64a]/20 p-10 lg:flex lg:flex-col lg:justify-between">
        <div>
          <p className="font-display text-4xl font-bold">H55</p>
          <p className="mt-2 text-[0.58rem] uppercase tracking-[0.32em] text-[#caa64a]">
            Painel executivo
          </p>
        </div>
        <div className="max-w-xl">
          <p className="eyebrow text-[#caa64a]">Acesso restrito</p>
          <h1 className="font-display mt-4 text-5xl font-bold leading-tight">
            Operação imobiliária com controle e discrição.
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-[#9fb0c4]">
            Gerencie portfólio, contatos, visitas, mídia institucional e usuários da equipe em um
            ambiente reservado.
          </p>
        </div>
        <p className="text-[0.58rem] uppercase tracking-[0.28em] text-[#6f839c]">
          H55 Negócios Imobiliários
        </p>
      </section>

      <section className="flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-sm border border-[#caa64a]/25 bg-white/[0.04] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
          <p className="eyebrow text-[#caa64a]">Entrar</p>
          <h2 className="font-display mt-2 text-3xl font-bold text-[#f4efe6]">Acesso ao painel</h2>
          <form onSubmit={submit} className="mt-7 space-y-4">
            <div>
              <label className="mb-1.5 block text-[0.6rem] uppercase tracking-[0.24em] text-[#9fb0c4]">
                E-mail
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 w-full border border-[#caa64a]/30 bg-[#071b31] px-3 text-sm text-[#f2ece0] focus:border-[#fbbf24] focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-[0.6rem] uppercase tracking-[0.24em] text-[#9fb0c4]">
                Senha
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11 w-full border border-[#caa64a]/30 bg-[#071b31] px-3 text-sm text-[#f2ece0] focus:border-[#fbbf24] focus:outline-none"
              />
            </div>
            {error && <p className="text-xs text-[#ef9a9a]">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#caa64a] py-3 text-[0.65rem] uppercase tracking-[0.24em] text-[#1a1206] transition hover:bg-[#fbbf24] disabled:opacity-50"
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
