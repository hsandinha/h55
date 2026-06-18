// lib/exportImoveis.ts
// Exporta o portfólio para uma planilha .xlsx (formato de divulgação):
// Imóvel, Ref., Tipo, Área, Quartos, Condomínio, IPTU e Preço de venda, com total.
import * as XLSX from "xlsx";
import type { Imovel } from "@/types/imovel";

const tipoLabel = (t?: string) =>
  (t || "")
    .replace(/-/g, " ")
    .replace(/^./, (c) => c.toUpperCase());

function enderecoCompleto(im: Imovel): string {
  const e = im.endereco;
  if (!e) return im.titulo || "";
  const partes = [
    e.rua && e.numero ? `${e.rua}, ${e.numero}` : e.rua,
    e.complemento,
    e.bairro,
    e.cidade && e.estado ? `${e.cidade}/${e.estado}` : e.cidade || e.estado,
  ].filter(Boolean);
  return partes.join(", ");
}

export function exportImoveisXlsx(imoveis: Imovel[]) {
  const header = [
    "#",
    "Imóvel",
    "Ref.",
    "Tipo",
    "Área (m²)",
    "Quartos",
    "Condomínio (R$)",
    "IPTU/ano (R$)",
    "Preço (Venda)",
  ];

  const linhas: (string | number)[][] = imoveis.map((im, i) => [
    i + 1,
    enderecoCompleto(im),
    im.titulo || im.codigo || "",
    tipoLabel(im.tipo),
    im.area || "",
    typeof im.quartos === "number" ? im.quartos : "",
    typeof im.valorCondominio === "number" ? im.valorCondominio : "",
    typeof im.valorIptu === "number" ? im.valorIptu : "",
    typeof im.preco === "number" ? im.preco : "",
  ]);

  const total = imoveis.reduce((s, im) => s + (im.preco || 0), 0);
  const totalRow: (string | number)[] = ["", "TOTAL GERAL", "", "", "", "", "", "", total];

  const aoa = [header, ...linhas, totalRow];
  const ws = XLSX.utils.aoa_to_sheet(aoa);

  ws["!cols"] = [
    { wch: 4 },
    { wch: 54 },
    { wch: 30 },
    { wch: 18 },
    { wch: 10 },
    { wch: 9 },
    { wch: 18 },
    { wch: 18 },
    { wch: 18 },
  ];

  // Formato de moeda nas colunas Condomínio (6), IPTU (7) e Preço (8)
  const moneyFmt = '"R$" #,##0.00';
  const lastRow = aoa.length - 1;
  for (let r = 1; r <= lastRow; r++) {
    for (const c of [6, 7, 8]) {
      const ref = XLSX.utils.encode_cell({ r, c });
      const cell = ws[ref];
      if (cell && typeof cell.v === "number") cell.z = moneyFmt;
    }
  }

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Portfólio");
  const data = new Date().toISOString().slice(0, 10);
  XLSX.writeFile(wb, `portfolio-h55-${data}.xlsx`);
}
