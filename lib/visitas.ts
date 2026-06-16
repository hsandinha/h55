// lib/visitas.ts
// Agendamento e gestão de visitas via Supabase (tabela "visitas").
import { getSupabase } from "@/lib/supabaseClient";

export type VisitaStatus = "Agendada" | "Confirmada" | "Realizada" | "Cancelada";

export type Visita = {
  id?: string;
  imovelId: string;
  imovelTitulo?: string;
  nome: string;
  telefone: string;
  email?: string;
  data: string;
  hora?: string;
  mensagem?: string;
  status?: VisitaStatus;
  criadoEm?: string;
};

const NOT_CONFIGURED = "Supabase não configurado.";

export async function createVisita(
  v: Omit<Visita, "id" | "criadoEm" | "status">,
): Promise<{ ok: boolean; error?: string }> {
  const supabase = getSupabase();
  const registro: Visita = {
    ...v,
    status: "Agendada",
    criadoEm: new Date().toISOString(),
  };
  if (!supabase) return { ok: false, error: NOT_CONFIGURED };
  try {
    const { error } = await supabase.from("visitas").insert(registro);
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}

export async function getVisitas(): Promise<Visita[]> {
  const supabase = getSupabase();
  if (!supabase) return [];
  try {
    const { data, error } = await supabase
      .from("visitas")
      .select("*")
      .order("criadoEm", { ascending: false });
    if (error || !data) return [];
    return data as unknown as Visita[];
  } catch {
    return [];
  }
}

export async function updateVisitaStatus(
  id: string,
  status: VisitaStatus,
): Promise<{ ok: boolean; error?: string }> {
  const supabase = getSupabase();
  if (!supabase) return { ok: false, error: NOT_CONFIGURED };
  try {
    const { error } = await supabase.from("visitas").update({ status }).eq("id", id);
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}

export async function deleteVisita(id: string): Promise<{ ok: boolean; error?: string }> {
  const supabase = getSupabase();
  if (!supabase) return { ok: false, error: NOT_CONFIGURED };
  try {
    const { error } = await supabase.from("visitas").delete().eq("id", id);
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}
