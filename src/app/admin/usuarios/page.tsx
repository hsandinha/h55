"use client";

import { useEffect, useState } from "react";
import { LuUserPlus, LuTrash2, LuMail } from "react-icons/lu";
import { AdminGuard } from "@/components/admin/AdminGuard";
import { isSupabaseConfigured } from "@/lib/supabaseClient";
import {
  listAdminUsers,
  createAdminUser,
  deleteAdminUser,
  type AdminUser,
} from "@/lib/users";

export default function AdminUsuariosPage() {
  return (
    <AdminGuard>
      <Inner />
    </AdminGuard>
  );
}

const fmtDate = (v?: string) => {
  if (!v) return "·";
  try {
    return new Date(v).toLocaleDateString("pt-BR");
  } catch {
    return "·";
  }
};

function Inner() {
  const configured = isSupabaseConfigured();
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(configured);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);

  const load = async () => {
    if (!configured) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const r = await listAdminUsers();
    if (r.error) setError(r.error);
    setUsers(r.users);
    setLoading(false);
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setMsg(null);
    const r = await createAdminUser(email, password);
    setSaving(false);
    if (r.ok) {
      setMsg(`Usuário ${email} criado.`);
      setEmail("");
      setPassword("");
      load();
    } else {
      setError(r.error || "Não foi possível criar o usuário.");
    }
  };

  const remove = async (id: string) => {
    if (!window.confirm("Excluir este usuário?")) return;
    const r = await deleteAdminUser(id);
    if (!r.ok) {
      setError(r.error || "Não foi possível excluir.");
      return;
    }
    load();
  };

  const inputCls =
    "h-11 w-full border border-[#d7c7a6] bg-[#fbf8f2] px-3 text-sm text-[#071b31] placeholder-[#aab4c2] focus:border-[#b8860b] focus:bg-white focus:outline-none";

  return (
    <div className="space-y-7">
      <div className="border-b border-[#d7c7a6] pb-6">
        <p className="eyebrow text-[#9a6b04]">Equipe</p>
        <h1 className="font-display mt-1 text-4xl font-bold text-[#071b31]">Usuários</h1>
        <p className="mt-1 text-sm text-[#52617a]">
          Crie acessos para a sua equipe. Cada pessoa entra com o próprio email e senha.
        </p>
      </div>

      {!configured ? (
        <div className="border border-[#d7c7a6] bg-white/90 p-8">
          <p className="font-display text-xl font-bold text-[#071b31]">
            Conecte o Supabase para gerenciar usuários
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#52617a]">
            A gestão de usuários usa a chave secreta no servidor. Preencha o `.env.local` e crie o
            primeiro usuário (hebertsandinha@gmail.com) em Authentication, Users no painel do
            Supabase. Depois, você adiciona os demais por aqui.
          </p>
        </div>
      ) : (
        <>
          {/* Form novo usuário */}
          <form onSubmit={submit} className="border border-[#d7c7a6] bg-white/90 p-6">
            <p className="eyebrow text-[#9a6b04]">Novo usuário</p>
            <span className="mt-3 mb-5 block h-px w-12 bg-[#b8860b]/50" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-[0.6rem] uppercase tracking-[0.24em] text-[#52617a]">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputCls}
                  placeholder="pessoa@h55.com.br"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[0.6rem] uppercase tracking-[0.24em] text-[#52617a]">
                  Senha
                </label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={inputCls}
                  placeholder="mínimo 6 caracteres"
                />
              </div>
            </div>
            {error && <p className="mt-3 text-xs text-[#a33]">{error}</p>}
            {msg && <p className="mt-3 text-xs text-[#1d7a4d]">{msg}</p>}
            <button
              type="submit"
              disabled={saving}
              className="mt-5 inline-flex items-center gap-2 bg-[#071b31] px-6 py-3 text-[0.62rem] uppercase tracking-[0.24em] text-[#f7f4ee] transition hover:bg-[#b8860b] hover:text-[#1a1206] disabled:opacity-50"
            >
              <LuUserPlus size={14} />
              {saving ? "Criando..." : "Criar usuário"}
            </button>
          </form>

          {/* Lista */}
          <div className="overflow-x-auto border border-[#d7c7a6] bg-white/90 shadow-[0_18px_50px_rgba(7,27,49,0.05)]">
            {loading ? (
              <div className="p-10 text-center text-sm text-[#52617a]">Carregando usuários...</div>
            ) : users.length === 0 ? (
              <div className="p-10 text-center text-sm text-[#52617a]">Nenhum usuário ainda.</div>
            ) : (
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#d7c7a6] bg-[#f8f4ed] text-[0.58rem] uppercase tracking-[0.22em] text-[#7c8797]">
                    <th className="px-4 py-3 font-medium">Email</th>
                    <th className="px-4 py-3 font-medium">Criado em</th>
                    <th className="px-4 py-3 font-medium">Último acesso</th>
                    <th className="px-4 py-3 text-right font-medium">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.id} className="border-b border-[#eadfca] last:border-0 hover:bg-[#fbf8f2]">
                      <td className="px-4 py-3">
                        <span className="flex items-center gap-2 text-[#071b31]">
                          <LuMail size={13} className="text-[#b8860b]" />
                          {u.email}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-[#52617a]">{fmtDate(u.createdAt)}</td>
                      <td className="px-4 py-3 text-[#52617a]">{fmtDate(u.lastSignIn)}</td>
                      <td className="px-4 py-3 text-right">
                        <button
                          onClick={() => remove(u.id)}
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
        </>
      )}
    </div>
  );
}
