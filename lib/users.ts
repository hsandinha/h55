// lib/users.ts
// Helpers (cliente) para a tela de usuários. Chamam a API server-side
// /api/admin/usuarios enviando o token da sessão do Supabase.
import { getSupabase } from "@/lib/supabaseClient";

export type AdminUser = {
  id: string;
  email?: string;
  createdAt?: string;
  lastSignIn?: string;
};

async function authHeaders(): Promise<Record<string, string>> {
  const supabase = getSupabase();
  if (!supabase) return {};
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function listAdminUsers(): Promise<{ users: AdminUser[]; error?: string }> {
  try {
    const res = await fetch("/api/admin/usuarios", { headers: await authHeaders() });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) return { users: [], error: json.error || "Erro ao listar usuários." };
    return { users: json.users || [] };
  } catch (e) {
    return { users: [], error: String(e) };
  }
}

export async function createAdminUser(
  email: string,
  password: string,
): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch("/api/admin/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(await authHeaders()) },
      body: JSON.stringify({ email, password }),
    });
    const json = await res.json().catch(() => ({}));
    return res.ok ? { ok: true } : { ok: false, error: json.error || "Erro ao criar usuário." };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}

export async function deleteAdminUser(id: string): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch(`/api/admin/usuarios?id=${encodeURIComponent(id)}`, {
      method: "DELETE",
      headers: await authHeaders(),
    });
    const json = await res.json().catch(() => ({}));
    return res.ok ? { ok: true } : { ok: false, error: json.error || "Erro ao excluir usuário." };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}
