// lib/storage.ts
// Upload de fotos e vídeos para o Supabase Storage (bucket "imoveis").
import { getSupabase } from "@/lib/supabaseClient";

const BUCKET = "imoveis";

export type UploadResult = { ok: boolean; url?: string; error?: string };

export async function uploadFoto(file: File): Promise<UploadResult> {
  const supabase = getSupabase();

  if (!supabase) {
    return { ok: false, error: "Supabase não configurado." };
  }

  try {
    const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(path, file, { upsert: false, contentType: file.type });
    if (error) return { ok: false, error: error.message };
    const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
    return { ok: true, url: data.publicUrl };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}
