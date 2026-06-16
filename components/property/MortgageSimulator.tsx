"use client";

import { useMemo, useState } from "react";

const brl = (n: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(Math.round(n));

export function MortgageSimulator({
  preco,
  entradaSugerida,
}: {
  preco: number;
  entradaSugerida?: number;
}) {
  const [entrada, setEntrada] = useState(
    Math.min(entradaSugerida ?? Math.round(preco * 0.2), preco),
  );
  const [taxaAA, setTaxaAA] = useState(10);
  const [anos, setAnos] = useState(30);

  const { principal, parcela, total, juros } = useMemo(() => {
    const principal = Math.max(preco - entrada, 0);
    const n = anos * 12;
    const i = Math.pow(1 + taxaAA / 100, 1 / 12) - 1; // taxa mensal equivalente
    const parcela =
      i > 0 ? (principal * (i * Math.pow(1 + i, n))) / (Math.pow(1 + i, n) - 1) : principal / n;
    const total = parcela * n;
    return { principal, parcela, total, juros: total - principal };
  }, [preco, entrada, taxaAA, anos]);

  const sliderCls = "w-full accent-[#b8860b]";
  const pctEntrada = preco > 0 ? Math.round((entrada / preco) * 100) : 0;

  return (
    <div className="border border-[#b8860b]/15 bg-white p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-5">
          <div>
            <div className="mb-1 flex items-center justify-between">
              <label className="text-[0.6rem] uppercase tracking-[0.24em] text-[#52617a]">Entrada</label>
              <span className="text-sm font-medium text-[#0a2540]">
                {brl(entrada)} <span className="text-[#8a97a8]">({pctEntrada}%)</span>
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={preco}
              step={10000}
              value={entrada}
              onChange={(e) => setEntrada(Number(e.target.value))}
              className={sliderCls}
            />
          </div>
          <div>
            <div className="mb-1 flex items-center justify-between">
              <label className="text-[0.6rem] uppercase tracking-[0.24em] text-[#52617a]">Juros (% ao ano)</label>
              <span className="text-sm font-medium text-[#0a2540]">{taxaAA.toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min={1}
              max={20}
              step={0.5}
              value={taxaAA}
              onChange={(e) => setTaxaAA(Number(e.target.value))}
              className={sliderCls}
            />
          </div>
          <div>
            <div className="mb-1 flex items-center justify-between">
              <label className="text-[0.6rem] uppercase tracking-[0.24em] text-[#52617a]">Prazo</label>
              <span className="text-sm font-medium text-[#0a2540]">{anos} anos</span>
            </div>
            <input
              type="range"
              min={5}
              max={35}
              step={1}
              value={anos}
              onChange={(e) => setAnos(Number(e.target.value))}
              className={sliderCls}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center border-t border-[#b8860b]/15 pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
          <p className="text-[0.6rem] uppercase tracking-[0.24em] text-[#8a97a8]">Parcela mensal estimada</p>
          <p className="font-display mt-1 text-3xl font-bold text-[#9a7b1e]">{brl(parcela)}</p>
          <dl className="mt-5 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-[#52617a]">Valor financiado</dt>
              <dd className="text-[#0a2540]">{brl(principal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-[#52617a]">Total de juros</dt>
              <dd className="text-[#0a2540]">{brl(juros)}</dd>
            </div>
            <div className="flex justify-between border-t border-[#b8860b]/15 pt-2">
              <dt className="text-[#52617a]">Total pago</dt>
              <dd className="font-medium text-[#0a2540]">{brl(total)}</dd>
            </div>
          </dl>
          <p className="mt-4 text-[0.62rem] leading-relaxed text-[#8a97a8]">
            Simulação aproximada (tabela Price), apenas informativa. Não é uma oferta de crédito.
          </p>
        </div>
      </div>
    </div>
  );
}
