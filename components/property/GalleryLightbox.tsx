"use client";

import { useEffect } from "react";
import { LuX, LuChevronLeft, LuChevronRight } from "react-icons/lu";

export function GalleryLightbox({
  photos,
  open,
  index,
  setIndex,
  onClose,
}: {
  photos: string[];
  open: boolean;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((p) => (p - 1 + photos.length) % photos.length);
      if (e.key === "ArrowRight") setIndex((p) => (p + 1) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, photos.length, onClose, setIndex]);

  if (!open) return null;

  const prev = () => setIndex((p) => (p - 1 + photos.length) % photos.length);
  const next = () => setIndex((p) => (p + 1) % photos.length);

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-[#06121f]/96">
      <div className="flex items-center justify-between px-6 py-4 text-[#f2ece0]">
        <span className="text-[0.62rem] uppercase tracking-[0.28em] text-[#9fb0c4]">
          {index + 1} / {photos.length}
        </span>
        <button onClick={onClose} aria-label="Fechar" className="text-[#9fb0c4] hover:text-[#fbbf24]">
          <LuX size={24} />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photos[index]}
          alt=""
          className="max-h-full max-w-full object-contain"
        />
        {photos.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Anterior"
              className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/25 bg-[#0a2540]/60 text-[#f2ece0] transition hover:border-[#fbbf24] hover:text-[#fbbf24]"
            >
              <LuChevronLeft size={22} />
            </button>
            <button
              onClick={next}
              aria-label="Próxima"
              className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/25 bg-[#0a2540]/60 text-[#f2ece0] transition hover:border-[#fbbf24] hover:text-[#fbbf24]"
            >
              <LuChevronRight size={22} />
            </button>
          </>
        )}
      </div>

      {photos.length > 1 && (
        <div className="flex justify-center gap-2 overflow-x-auto px-6 py-4 [scrollbar-width:thin]">
          {photos.map((src, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-14 w-20 shrink-0 overflow-hidden border transition ${
                i === index ? "border-[#fbbf24]" : "border-transparent opacity-50 hover:opacity-100"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
