"use client";

import Link from "next/link";
import { LuArrowLeftRight } from "react-icons/lu";
import { useCompare } from "@/context/CompareContext";

export function CompareBar() {
  const { count, clear, max } = useCompare();
  if (count === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#b8860b]/30 bg-[#0a2540] text-[#f2ece0]">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-3">
        <div className="flex items-center gap-2 text-sm">
          <LuArrowLeftRight size={16} className="text-[#caa64a]" />
          <span className="font-medium">{count}</span>
          <span className="text-[#9fb0c4]">de {max} para comparar</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={clear}
            className="text-[0.6rem] uppercase tracking-[0.28em] text-[#9fb0c4] transition hover:text-[#fbbf24]"
          >
            limpar
          </button>
          <Link
            href="/comparar"
            className="bg-[#fbbf24] px-5 py-2 text-[0.65rem] uppercase tracking-[0.28em] text-[#1a1206] transition hover:bg-[#e8b23a]"
          >
            Comparar
          </Link>
        </div>
      </div>
    </div>
  );
}
