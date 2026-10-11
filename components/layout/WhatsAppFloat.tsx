"use client";

import { FaWhatsapp } from "react-icons/fa6";
import { useCompare } from "@/context/CompareContext";

const NUMERO = "5531991697999";
const MENSAGEM = "Olá! Vim pelo site da H55 e gostaria de falar com a coordenação.";

/**
 * Atalho para o WhatsApp da coordenação, fixo no canto inferior direito.
 * Substitui o botão que antes ocupava espaço no header.
 */
export function WhatsAppFloat() {
  // A barra de comparação ocupa o rodapé quando há imóveis selecionados.
  const { count } = useCompare();

  return (
    <a
      href={`https://wa.me/${NUMERO}?text=${encodeURIComponent(MENSAGEM)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a coordenação no WhatsApp"
      className={`group fixed right-5 z-40 flex items-center gap-0 overflow-hidden rounded-full bg-[#0a2540] pl-4 pr-4 text-white shadow-[0_8px_30px_rgba(10,37,64,0.28)] transition-all duration-300 hover:bg-[#12375c] hover:shadow-[0_10px_34px_rgba(10,37,64,0.38)] md:right-8 ${
        count > 0 ? "bottom-24" : "bottom-6"
      } h-14`}
    >
      <FaWhatsapp size={24} className="shrink-0" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-[0.68rem] font-semibold uppercase tracking-[0.16em] opacity-0 transition-all duration-300 group-hover:max-w-[16rem] group-hover:pl-3 group-hover:opacity-100 motion-reduce:transition-none">
        Falar com a coordenação
      </span>
    </a>
  );
}
