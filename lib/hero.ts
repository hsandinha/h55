// lib/hero.ts
// Slides do hero (vídeo ou foto) gerenciados no painel admin via Supabase.
import { getSupabase } from "@/lib/supabaseClient";

export type HeroSlide = {
  id?: string;
  tipo: "video" | "foto";
  url: string;
  poster?: string;
  ordem?: number;
  ativo?: boolean;
  criadoEm?: string;
};

const NOT_CONFIGURED = "Supabase não configurado.";

// Público: apenas slides ativos, ordenados (usado no HeroSection)
export async function getHeroSlides(): Promise<HeroSlide[]> {
  const supabase = getSupabase();
  if (!supabase) return [];
  try {
    const { data, error } = await supabase
      .from("hero_slides")
      .select("*")
      .eq("ativo", true)
      .order("ordem", { ascending: true });
    if (error || !data) return [];
    return data as unknown as HeroSlide[];
  } catch {
    return [];
  }
}

// Admin: todos os slides
export async function getAllHeroSlides(): Promise<HeroSlide[]> {
  const supabase = getSupabase();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("hero_slides")
    .select("*")
    .order("ordem", { ascending: true });

  if (error) throw new Error(error.message);
  return (data ?? []) as unknown as HeroSlide[];
}

export async function createHeroSlide(
  input: Omit<HeroSlide, "id" | "criadoEm">,
): Promise<{ ok: boolean; error?: string }> {
  const supabase = getSupabase();
  const registro: HeroSlide = {
    ativo: true,
    ordem: Date.now(),
    ...input,
    criadoEm: new Date().toISOString(),
  };
  if (!supabase) return { ok: false, error: NOT_CONFIGURED };
  try {
    const { error } = await supabase.from("hero_slides").insert(registro);
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}

export async function updateHeroSlide(
  id: string,
  patch: Partial<HeroSlide>,
): Promise<{ ok: boolean; error?: string }> {
  const supabase = getSupabase();
  if (!supabase) return { ok: false, error: NOT_CONFIGURED };
  try {
    const { error } = await supabase.from("hero_slides").update(patch).eq("id", id);
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}

export async function deleteHeroSlide(id: string): Promise<{ ok: boolean; error?: string }> {
  const supabase = getSupabase();
  if (!supabase) return { ok: false, error: NOT_CONFIGURED };
  try {
    const { error } = await supabase.from("hero_slides").delete().eq("id", id);
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}

// Admin: persiste a nova ordem de exibição dos slides.
// Recebe os ids já na ordem desejada e grava `ordem` sequencial.
export async function reorderHeroSlides(
  orderedIds: string[],
): Promise<{ ok: boolean; error?: string }> {
  const supabase = getSupabase();
  if (!supabase) return { ok: false, error: NOT_CONFIGURED };
  try {
    const results = await Promise.all(
      orderedIds.map((id, index) =>
        supabase.from("hero_slides").update({ ordem: index }).eq("id", id),
      ),
    );
    const failed = results.find((r) => r.error);
    if (failed?.error) return { ok: false, error: failed.error.message };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}
