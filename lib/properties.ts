// lib/properties.ts
// Camada de dados da vitrine + admin.
// - Leitura PÚBLICA usa a view "imoveis_publicos" (sem dados sensíveis).
// - Leitura/escrita ADMIN usa a tabela base "imoveis" (autenticado).
import type { Imovel } from "@/types/imovel";
import { getSupabase } from "@/lib/supabaseClient";

const TABLE = "imoveis";
const PUBLIC_VIEW = "imoveis_publicos";
const NOT_CONFIGURED = "Supabase não configurado.";
let warnedMissingPublicView = false;
const PUBLIC_SELECT = [
  "id",
  "dataCadastro",
  "codigo",
  "titulo",
  "descricao",
  "preco",
  "finalidade",
  "tipo",
  "emDestaque",
  "fotos",
  "videoUrl",
  "panoUrl",
  "matterportUrl",
  "endereco",
  "lat",
  "lng",
  "area",
  "quartos",
  "suites",
  "banheiros",
  "vagas",
  "varandas",
  "anoConstrucao",
  "valorCondominio",
  "valorIptu",
  "rentabilidadeAnual",
  "valorizacao12m",
  "entradaMinima",
  "caracteristicasImovel",
  "caracteristicasEdificio",
  "status",
  "finalidadeUso",
  "exclusividade",
  "aceitaFinanciamento",
  "aceitaProposta",
].join(",");

function logSupabaseError(context: string, error: unknown) {
  if (process.env.NODE_ENV !== "production") {
    if (isMissingPublicView(error) && warnedMissingPublicView) return;
    if (isMissingPublicView(error)) warnedMissingPublicView = true;
    console.warn(`[Supabase] ${context}`, error);
  }
}

function isMissingPublicView(error: unknown) {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    (error as { code?: string }).code === "PGRST205"
  );
}

async function getImoveisFallback(): Promise<Imovel[]> {
  const supabase = getSupabase();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from(TABLE)
    .select(PUBLIC_SELECT)
    .eq("status", "Ativo")
    .order("dataCadastro", { ascending: false });
  if (error || !data) return [];
  return data as unknown as Imovel[];
}

async function getImovelByIdFallback(id: string): Promise<Imovel | null> {
  const supabase = getSupabase();
  if (!supabase) return null;
  const { data, error } = await supabase
    .from(TABLE)
    .select(PUBLIC_SELECT)
    .eq("status", "Ativo")
    .eq("id", id)
    .single();
  if (error || !data) return null;
  return data as unknown as Imovel;
}

export type ImovelInput = Partial<Imovel>;
export type MutationResult = { ok: boolean; id?: string; error?: string };

// ---------- Leitura pública (view sem "proprietario") ----------
export async function getImoveis(): Promise<Imovel[]> {
  const supabase = getSupabase();
  if (!supabase) return [];
  try {
    const { data, error } = await supabase.from(PUBLIC_VIEW).select("*");
    if (error || !data) {
      if (error) {
        logSupabaseError("Falha ao carregar imoveis_publicos.", error);
        if (isMissingPublicView(error)) return getImoveisFallback();
      }
      return [];
    }
    return data as unknown as Imovel[];
  } catch (error) {
    logSupabaseError("Falha inesperada ao carregar imoveis_publicos.", error);
    return [];
  }
}

export async function getImovelById(id: string): Promise<Imovel | null> {
  const supabase = getSupabase();
  if (!supabase) return null;
  try {
    const { data, error } = await supabase
      .from(PUBLIC_VIEW)
      .select("*")
      .eq("id", id)
      .single();
    if (error || !data) {
      if (error) {
        logSupabaseError("Falha ao carregar imóvel público.", error);
        if (isMissingPublicView(error)) return getImovelByIdFallback(id);
      }
      return null;
    }
    return data as unknown as Imovel;
  } catch (error) {
    logSupabaseError("Falha inesperada ao carregar imóvel público.", error);
    return null;
  }
}

// ---------- Leitura admin (tabela base, todos os status) ----------
export async function getAllImoveis(): Promise<Imovel[]> {
  const supabase = getSupabase();
  if (!supabase) return [];
  try {
    const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .order("dataCadastro", { ascending: false });
    if (error || !data) return [];
    return data as unknown as Imovel[];
  } catch {
    return [];
  }
}

export async function getImovelByIdAdmin(id: string): Promise<Imovel | null> {
  const supabase = getSupabase();
  if (!supabase) return null;
  try {
    const { data, error } = await supabase.from(TABLE).select("*").eq("id", id).single();
    if (error || !data) return null;
    return data as unknown as Imovel;
  } catch {
    return null;
  }
}

// ---------- Escrita (tabela base, autenticado) ----------
export async function createImovel(input: ImovelInput): Promise<MutationResult> {
  const supabase = getSupabase();
  if (!supabase) return { ok: false, error: NOT_CONFIGURED };
  try {
    const { data, error } = await supabase.from(TABLE).insert(input).select("id").single();
    if (error) return { ok: false, error: error.message };
    return { ok: true, id: (data as { id?: string })?.id };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}

export async function updateImovel(id: string, patch: ImovelInput): Promise<MutationResult> {
  const supabase = getSupabase();
  if (!supabase) return { ok: false, error: NOT_CONFIGURED };
  try {
    const { error } = await supabase.from(TABLE).update(patch).eq("id", id);
    if (error) return { ok: false, error: error.message };
    return { ok: true, id };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}

export async function deleteImovel(id: string): Promise<MutationResult> {
  const supabase = getSupabase();
  if (!supabase) return { ok: false, error: NOT_CONFIGURED };
  try {
    const { error } = await supabase.from(TABLE).delete().eq("id", id);
    if (error) return { ok: false, error: error.message };
    return { ok: true, id };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}
