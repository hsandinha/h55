// lib/leads.ts
// Captação de leads (contato do site) via Supabase (tabela "leads").
import { getSupabase } from "@/lib/supabaseClient";

export type LeadStatus = "Novo" | "Em contato" | "Qualificado" | "Convertido" | "Arquivado";

export type Lead = {
  id?: string;
  nome: string;
  email?: string;
  telefone: string;
  mensagem?: string;
  origem?: string;
  imovelId?: string;
  imovelTitulo?: string;
  status?: LeadStatus;
  criadoEm?: string;
};

const NOT_CONFIGURED = "Supabase não configurado.";

export async function createLead(
  v: Omit<Lead, "id" | "criadoEm" | "status">,
): Promise<{ ok: boolean; error?: string }> {
  const supabase = getSupabase();
  const registro: Lead = { ...v, status: "Novo", criadoEm: new Date().toISOString() };
  if (!supabase) return { ok: false, error: NOT_CONFIGURED };
  try {
    const { error } = await supabase.from("leads").insert(registro);
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}

export async function getLeads(): Promise<Lead[]> {
  const supabase = getSupabase();
  if (!supabase) return [];
  try {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("criadoEm", { ascending: false });
    if (error || !data) return [];
    return data as unknown as Lead[];
  } catch {
    return [];
  }
}

export async function updateLeadStatus(
  id: string,
  status: LeadStatus,
): Promise<{ ok: boolean; error?: string }> {
  const supabase = getSupabase();
  if (!supabase) return { ok: false, error: NOT_CONFIGURED };
  try {
    const { error } = await supabase.from("leads").update({ status }).eq("id", id);
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}

export async function deleteLead(id: string): Promise<{ ok: boolean; error?: string }> {
  const supabase = getSupabase();
  if (!supabase) return { ok: false, error: NOT_CONFIGURED };
  try {
    const { error } = await supabase.from("leads").delete().eq("id", id);
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}
