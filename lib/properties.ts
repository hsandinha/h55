// lib/properties.ts
// Camada de dados da vitrine + admin.
// - Leitura PÚBLICA usa a view "imoveis_publicos" (sem dados sensíveis).
// - Leitura/escrita ADMIN usa a tabela base "imoveis" (autenticado).
import type { Imovel } from "@/types/imovel";
import { getSupabase } from "@/lib/supabaseClient";

const TABLE = "imoveis";
const PUBLIC_VIEW = "imoveis_publicos";
const NOT_CONFIGURED = "Supabase não configurado.";
const warned = new Set<string>();
const PUBLIC_COLUMNS = [
  "id",
  "dataCadastro",
  "codigo",
  "titulo",
  "descricao",
  "preco",
  "descontoPercent",
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
];

/**
 * Extras da vitrine. Se o GRANT de alguma destas faltar para o "anon", a
 * listagem inteira cai com 42501 — então a leitura pública sabe repetir a
 * consulta sem elas em vez de devolver uma carteira vazia.
 */
const OPTIONAL_COLUMNS = ["descontoPercent"];
const PUBLIC_SELECT = PUBLIC_COLUMNS.join(",");
const CORE_SELECT = PUBLIC_COLUMNS.filter((c) => !OPTIONAL_COLUMNS.includes(c)).join(",");

function logSupabaseError(context: string, error: unknown) {
  // Em produção também: sem isto, uma falha de permissão vira "0 imóveis"
  // na tela e nenhum rastro em lugar nenhum.
  const chave = `${context}|${codigoDoErro(error)}`;
  if (warned.has(chave)) return;
  warned.add(chave);
  console.error(`[Supabase] ${context}`, error);
}

function codigoDoErro(error: unknown): string | undefined {
  if (typeof error !== "object" || error === null || !("code" in error)) return undefined;
  return (error as { code?: string }).code;
}

/** A view pública não existe neste banco. */
function isMissingPublicView(error: unknown) {
  return codigoDoErro(error) === "PGRST205";
}

/**
 * 42501: falta GRANT para o "anon" em alguma coluna. Como a view roda com
 * security_invoker, uma única coluna sem grant derruba a view inteira.
 */
function isPermissionDenied(error: unknown) {
  return codigoDoErro(error) === "42501";
}

const devePularParaTabelaBase = (error: unknown) =>
  isMissingPublicView(error) || isPermissionDenied(error);

async function getImoveisFallback(): Promise<Imovel[]> {
  const supabase = getSupabase();
  if (!supabase) return [];
  for (const select of [PUBLIC_SELECT, CORE_SELECT]) {
    const { data, error } = await supabase
      .from(TABLE)
      .select(select)
      .eq("status", "Ativo")
      .order("dataCadastro", { ascending: false });
    if (!error && data) return data as unknown as Imovel[];
    if (error) {
      logSupabaseError("Falha ao ler a tabela base.", error);
      if (!isPermissionDenied(error)) break;
    }
  }
  return [];
}

async function getImovelByIdFallback(id: string): Promise<Imovel | null> {
  const supabase = getSupabase();
  if (!supabase) return null;
  for (const select of [PUBLIC_SELECT, CORE_SELECT]) {
    const { data, error } = await supabase
      .from(TABLE)
      .select(select)
      .eq("status", "Ativo")
      .eq("id", id)
      .single();
    if (!error && data) return data as unknown as Imovel;
    if (error) {
      logSupabaseError("Falha ao ler o imóvel na tabela base.", error);
      if (!isPermissionDenied(error)) break;
    }
  }
  return null;
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
        if (devePularParaTabelaBase(error)) return getImoveisFallback();
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
        if (devePularParaTabelaBase(error)) return getImovelByIdFallback(id);
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
