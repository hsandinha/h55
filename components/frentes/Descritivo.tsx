// components/frentes/Descritivo.tsx
import { Label, PLAYFAIR } from "./Base";

type Props = {
  numero: string;
  titulo: string;
  /** O descritivo literal da frente, como a H55 o escreve. */
  texto: React.ReactNode;
  /** Cada entrega listada no descritivo, uma por linha. */
  entregas: string[];
};

/**
 * Descritivo da frente no padrão da /frontstay: texto da casa à esquerda
 * (fixo no desktop) e cada entrega numerada à direita, com divisórias.
 */
export const Descritivo = ({ numero, titulo, texto, entregas }: Props) => (
  <section id="escopo" className="scroll-mt-20 bg-white text-[#0a2540]">
    <div className="mx-auto grid max-w-[1240px] gap-14 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-14">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <Label>
          Descritivo {numero} · {titulo}
        </Label>
        <p
          className="mt-6 text-balance text-2xl font-semibold leading-[1.35] md:text-[1.9rem]"
          style={PLAYFAIR}
        >
          {texto}
        </p>
      </div>

      <ol className="border-t border-[#0a2540]/15">
        {entregas.map((e, i) => (
          <li
            key={e}
            className="grid grid-cols-[3.5rem_1fr] items-baseline gap-4 border-b border-[#0a2540]/15 py-5"
          >
            <span className="text-sm font-semibold text-[#9a7b1e]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-base leading-7 text-[#26364a]">{e}</span>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
