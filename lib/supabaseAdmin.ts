import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Cliente Supabase com a chave SECRETA (service role). Roda SOMENTE no servidor
// (o import "server-only" impede que ele vaze para o bundle do navegador).
// Ignora RLS, então use apenas em código server-side confiável.
let admin: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const secret = process.env.SUPABASE_SECRET_KEY;
  if (!url || !secret) return null;
  if (!admin) {
    admin = createClient(url, secret, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return admin;
}

export const isSupabaseAdminConfigured = () =>
  Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SECRET_KEY);
