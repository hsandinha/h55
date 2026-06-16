"use client";

import { useEffect, useState } from "react";
import { LuUpload, LuTrash2, LuEye, LuEyeOff, LuVideo, LuImage, LuGripVertical } from "react-icons/lu";
import { AdminGuard } from "@/components/admin/AdminGuard";
import { uploadFoto } from "@/lib/storage";
import {
  getAllHeroSlides,
  createHeroSlide,
  updateHeroSlide,
  deleteHeroSlide,
  reorderHeroSlides,
  type HeroSlide,
} from "@/lib/hero";

const errorMessage = (error: unknown) =>
  error instanceof Error ? error.message : String(error);

export default function AdminHeroPage() {
  return (
    <AdminGuard>
      <Inner />
    </AdminGuard>
  );
}

function Inner() {
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [metadataReady, setMetadataReady] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dragId, setDragId] = useState<string | null>(null);
  const [overId, setOverId] = useState<string | null>(null);

  const load = async (preserveError = false) => {
    setLoading(true);
    if (!preserveError) setError(null);
    try {
      setSlides(await getAllHeroSlides());
      setMetadataReady(true);
    } catch (e) {
      setSlides([]);
      setMetadataReady(false);
      setError(`Falha ao carregar mídias do hero: ${errorMessage(e)}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const onFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    if (!metadataReady) {
      setError("Antes de enviar mídia, rode o SQL que cria public.hero_slides no Supabase.");
      return;
    }

    setUploading(true);
    setError(null);
    let firstError: string | null = null;

    try {
      for (const file of Array.from(files)) {
        const upload = await uploadFoto(file);
        if (!upload.ok || !upload.url) {
          firstError = upload.error || "Falha no upload de um arquivo.";
          break;
        }

        const slide = await createHeroSlide({
          tipo: file.type.startsWith("video") ? "video" : "foto",
          url: upload.url,
          ativo: true,
        });

        if (!slide.ok) {
          firstError = `Upload concluído, mas não foi possível salvar no hero: ${
            slide.error || "erro desconhecido"
          }`;
          break;
        }
      }

      if (firstError) setError(firstError);
    } catch (e) {
      firstError = `Falha ao enviar mídia: ${errorMessage(e)}`;
      setError(firstError);
    } finally {
      setUploading(false);
      await load(Boolean(firstError));
    }
  };

  const toggleAtivo = async (s: HeroSlide) => {
    await updateHeroSlide(s.id as string, { ativo: !(s.ativo !== false) });
    load();
  };

  const remove = async (id: string) => {
    if (!window.confirm("Remover este slide do hero?")) return;
    await deleteHeroSlide(id);
    load();
  };

  const handleDrop = async (targetId: string) => {
    if (!dragId || dragId === targetId) {
      setDragId(null);
      setOverId(null);
      return;
    }

    const current = [...slides];
    const from = current.findIndex((s) => s.id === dragId);
    const to = current.findIndex((s) => s.id === targetId);
    if (from === -1 || to === -1) {
      setDragId(null);
      setOverId(null);
      return;
    }

    const [moved] = current.splice(from, 1);
    current.splice(to, 0, moved);

    setSlides(current);
    setDragId(null);
    setOverId(null);

    const result = await reorderHeroSlides(current.map((s) => s.id as string));
    if (!result.ok) {
      setError(`Falha ao salvar a ordem: ${result.error ?? "erro desconhecido"}`);
      load(true);
    }
  };

  return (
    <div className="space-y-7">
      <div className="border-b border-[#d7c7a6] pb-6">
        <p className="eyebrow text-[#9a6b04]">Página inicial</p>
        <h1 className="font-display mt-1 text-4xl font-bold text-[#071b31]">Mídia do hero</h1>
        <p className="mt-1 text-sm text-[#52617a]">
          Envie vídeos ou fotos que entram como fundo da home. Os ativos aparecem no site.
          Arraste os cards para definir a ordem de exibição.
        </p>
      </div>

      <label
        className={`flex flex-col items-center justify-center gap-2 border border-dashed px-4 py-12 text-center transition ${
          uploading || !metadataReady
            ? "cursor-not-allowed border-[#8a97a8]/35 bg-[#eef1f5] opacity-70"
            : "cursor-pointer border-[#b8860b]/40 bg-white/90 hover:border-[#b8860b] hover:bg-white"
        }`}
      >
        <LuUpload size={24} className="text-[#b8860b]" />
        <span className="text-sm text-[#071b31]">
          {uploading ? "Enviando..." : "Clique para enviar vídeo ou foto"}
        </span>
        <span className="text-[0.62rem] uppercase tracking-[0.2em] text-[#8a97a8]">
          MP4, WEBM, JPG, PNG ou WEBP
        </span>
        <input
          type="file"
          accept="video/*,image/*"
          multiple
          className="hidden"
          disabled={uploading || !metadataReady}
          onChange={(e) => onFiles(e.target.files)}
        />
      </label>
      {error && <p className="mt-3 text-xs text-[#a33]">{error}</p>}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {loading ? (
          <p className="text-sm text-[#52617a]">Carregando...</p>
        ) : slides.length === 0 ? (
          <p className="text-sm text-[#52617a]">
            Nenhuma mídia ainda. Sem slides, o hero usa a foto padrão do projeto.
          </p>
        ) : (
          slides.map((s) => (
            <div
              key={s.id}
              draggable
              onDragStart={() => setDragId(s.id as string)}
              onDragEnter={() => setOverId(s.id as string)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(s.id as string)}
              onDragEnd={() => {
                setDragId(null);
                setOverId(null);
              }}
              className={`overflow-hidden border bg-white/90 shadow-[0_18px_50px_rgba(7,27,49,0.05)] transition cursor-grab active:cursor-grabbing ${
                dragId === s.id ? "opacity-50" : ""
              } ${
                overId === s.id && dragId !== s.id
                  ? "border-[#b8860b] ring-2 ring-[#b8860b]/40"
                  : "border-[#d7c7a6]"
              }`}
            >
              <div className="relative aspect-video bg-[#0a2540]">
                <span className="absolute right-2 bottom-2 z-10 inline-flex h-7 w-7 cursor-grab items-center justify-center bg-[#06121f]/80 text-[#caa64a] active:cursor-grabbing">
                  <LuGripVertical size={14} />
                </span>
                {s.tipo === "video" ? (
                  <video src={s.url} className="h-full w-full object-cover" muted loop playsInline />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={s.url} alt="" className="h-full w-full object-cover" />
                )}
                <span className="absolute left-2 top-2 flex items-center gap-1 bg-[#06121f]/80 px-2 py-0.5 text-[0.55rem] uppercase tracking-[0.18em] text-[#caa64a]">
                  {s.tipo === "video" ? <LuVideo size={11} /> : <LuImage size={11} />}
                  {s.tipo}
                </span>
                {s.ativo === false && (
                  <span className="absolute right-2 top-2 bg-[#06121f]/80 px-2 py-0.5 text-[0.55rem] uppercase tracking-[0.18em] text-[#8a97a8]">
                    inativo
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between p-3">
                <button
                  onClick={() => toggleAtivo(s)}
                  className="inline-flex items-center gap-1.5 text-[0.58rem] uppercase tracking-[0.2em] text-[#071b31] hover:text-[#9a7b1e]"
                >
                  {s.ativo !== false ? <LuEye size={13} /> : <LuEyeOff size={13} />}
                  {s.ativo !== false ? "Ativo" : "Inativo"}
                </button>
                <button
                  onClick={() => remove(s.id as string)}
                  aria-label="Remover"
                  className="inline-flex h-8 w-8 items-center justify-center border border-[#d7c7a6] text-[#a33] transition hover:border-[#a33]"
                >
                  <LuTrash2 size={13} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
