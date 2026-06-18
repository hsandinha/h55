// lib/exportImoveisPdf.ts
// Gera um PDF de apresentação do portfólio (deck navy/ouro): capa, uma página
// por imóvel (foto grande + ficha) e fechamento com o total.
import { jsPDF } from "jspdf";
import type { Imovel } from "@/types/imovel";

type RGB = readonly [number, number, number];
const NAVY: RGB = [7, 27, 49];
const NAVY2: RGB = [12, 32, 54];
const GOLD: RGB = [184, 134, 11];
const GOLDL: RGB = [202, 166, 74];
const CREAM: RGB = [247, 244, 238];
const SLATE: RGB = [150, 168, 190];
const MUTED: RGB = [110, 131, 156];

const brl = (n?: number) =>
  n
    ? new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        maximumFractionDigits: 0,
      }).format(n)
    : "Sob consulta";

const tipoLabel = (t?: string) =>
  (t || "").replace(/-/g, " ").replace(/^./, (c) => c.toUpperCase());

function enderecoCompleto(im: Imovel): string {
  const e = im.endereco;
  if (!e) return im.titulo || "";
  return [
    e.rua && e.numero ? `${e.rua}, ${e.numero}` : e.rua,
    e.complemento,
    e.bairro,
    e.cidade && e.estado ? `${e.cidade}/${e.estado}` : e.cidade || e.estado,
  ]
    .filter(Boolean)
    .join(", ");
}

type ImgData = { dataURL: string; w: number; h: number };

function loadImageData(url?: string): Promise<ImgData | null> {
  return new Promise((resolve) => {
    if (!url) return resolve(null);
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const c = document.createElement("canvas");
        c.width = img.naturalWidth;
        c.height = img.naturalHeight;
        const ctx = c.getContext("2d");
        if (!ctx) return resolve(null);
        ctx.drawImage(img, 0, 0);
        resolve({ dataURL: c.toDataURL("image/jpeg", 0.82), w: img.naturalWidth, h: img.naturalHeight });
      } catch {
        resolve(null);
      }
    };
    img.onerror = () => resolve(null);
    img.src = url;
  });
}

function loadPngDataURL(src: string): Promise<string | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const c = document.createElement("canvas");
        c.width = img.naturalWidth;
        c.height = img.naturalHeight;
        const ctx = c.getContext("2d");
        if (!ctx) return resolve(null);
        ctx.drawImage(img, 0, 0);
        resolve(c.toDataURL("image/png"));
      } catch {
        resolve(null);
      }
    };
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

export async function exportImoveisPdf(imoveis: Imovel[]) {
  const doc = new jsPDF({ orientation: "landscape", unit: "pt", format: "a4" });
  const PW = doc.internal.pageSize.getWidth();
  const PH = doc.internal.pageSize.getHeight();

  const fill = (c: RGB) => doc.setFillColor(c[0], c[1], c[2]);
  const stroke = (c: RGB) => doc.setDrawColor(c[0], c[1], c[2]);
  const color = (c: RGB) => doc.setTextColor(c[0], c[1], c[2]);

  const dateStr = new Date().toLocaleDateString("pt-BR");
  const total = imoveis.reduce((s, im) => s + (im.preco || 0), 0);
  const logoDataURL = await loadPngDataURL("/images/h55.png");

  // ---------- CAPA ----------
  fill(NAVY);
  doc.rect(0, 0, PW, PH, "F");

  const logoSize = 170;
  const logoX = (PW - logoSize) / 2;
  const logoY = 68;
  if (logoDataURL) {
    doc.addImage(logoDataURL, "PNG", logoX, logoY, logoSize, logoSize);
  }

  doc.setFont("times", "normal");
  doc.setFontSize(46);
  color(CREAM);
  doc.text("Portfólio de", PW / 2, logoY + logoSize + 52, { align: "center" });
  doc.setFontSize(54);
  color(GOLDL);
  doc.text("Oportunidades", PW / 2, logoY + logoSize + 52 + 60, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  color(SLATE);
  doc.text(
    `${imoveis.length} ${imoveis.length === 1 ? "imóvel selecionado" : "imóveis selecionados"}  ·  ${dateStr}`,
    PW / 2,
    PH - 68,
    { align: "center" },
  );
  doc.setFontSize(9);
  color(MUTED);
  doc.text("H55 Negócios Imobiliários  ·  h55negociosimob.com", PW / 2, PH - 48, { align: "center" });

  // ---------- IMÓVEIS ----------
  const splitX = 472;
  for (let i = 0; i < imoveis.length; i++) {
    const im = imoveis[i];
    doc.addPage();
    fill(NAVY);
    doc.rect(0, 0, PW, PH, "F");

    const data = await loadImageData(im.fotos?.[0]);
    if (data) {
      const scale = Math.max(splitX / data.w, PH / data.h);
      const dw = data.w * scale;
      const dh = data.h * scale;
      doc.addImage(data.dataURL, "JPEG", (splitX - dw) / 2, (PH - dh) / 2, dw, dh);
    } else {
      fill(NAVY2);
      doc.rect(0, 0, splitX, PH, "F");
    }

    // Painel direito
    fill(NAVY);
    doc.rect(splitX, 0, PW - splitX, PH, "F");
    stroke(GOLD);
    doc.setLineWidth(2);
    doc.line(splitX, 0, splitX, PH);

    const cx = splitX + 34;
    const cright = PW - 34;
    const cw = cright - cx;
    let y = 84;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    color(GOLDL);
    doc.text(
      `${tipoLabel(im.tipo)}   ·   ${im.endereco?.cidade || ""}${im.endereco?.estado ? "/" + im.endereco.estado : ""}`.toUpperCase(),
      cx,
      y,
    );
    y += 28;

    doc.setFont("times", "bold");
    doc.setFontSize(22);
    color(CREAM);
    const tituloLines = doc.splitTextToSize(im.titulo || "", cw);
    doc.text(tituloLines, cx, y);
    y += tituloLines.length * 25 + 6;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10.5);
    color(SLATE);
    const endLines = doc.splitTextToSize(enderecoCompleto(im), cw);
    doc.text(endLines, cx, y);
    y += endLines.length * 15 + 14;

    stroke(GOLD);
    doc.setLineWidth(1);
    doc.line(cx, y, cx + 42, y);
    y += 26;

    // Specs
    const stats = [
      { l: "Área", v: im.area ? `${im.area} m²` : null },
      { l: "Quartos", v: im.quartos || null },
      { l: "Suítes", v: im.suites || null },
      { l: "Banh.", v: im.banheiros || null },
      { l: "Vagas", v: im.vagas || null },
    ].filter((s) => s.v != null && s.v !== 0);
    const colW = cw / Math.max(stats.length, 1);
    stats.forEach((s, idx) => {
      const sx = cx + idx * colW;
      doc.setFont("times", "bold");
      doc.setFontSize(15);
      color(CREAM);
      doc.text(String(s.v), sx, y);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      color(MUTED);
      doc.text(String(s.l).toUpperCase(), sx, y + 13);
    });
    y += 46;

    // Preço
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    color(MUTED);
    doc.text("PREÇO DE VENDA", cx, y);

    if (im.preco && typeof im.descontoPercent === "number" && im.descontoPercent > 0) {
      // Preço original tachado
      doc.setFont("times", "normal");
      doc.setFontSize(13);
      color(SLATE);
      const originalText = brl(im.preco);
      doc.text(originalText, cx, y + 18);
      const strikeW = doc.getTextWidth(originalText);
      stroke(SLATE);
      doc.setLineWidth(0.8);
      doc.line(cx, y + 14, cx + strikeW, y + 14);

      // Preço com desconto
      const precoFinal = Math.round(im.preco * (1 - im.descontoPercent / 100));
      doc.setFont("times", "bold");
      doc.setFontSize(27);
      color(GOLDL);
      doc.text(brl(precoFinal), cx, y + 46);

      // Badge desconto
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      color(GOLDL);
      doc.text(`${im.descontoPercent}% de desconto`, cx, y + 62);
      y += 80;
    } else {
      doc.setFont("times", "bold");
      doc.setFontSize(27);
      color(GOLDL);
      doc.text(brl(im.preco), cx, y + 29);
      y += 60;
    }

    // Valores adicionais
    const rows: [string, string][] = [];
    if (typeof im.valorCondominio === "number") rows.push(["Condomínio", brl(im.valorCondominio)]);
    if (typeof im.valorIptu === "number") rows.push(["IPTU/ano", brl(im.valorIptu)]);
    if (typeof im.rentabilidadeAnual === "number")
      rows.push(["Rentabilidade", `${im.rentabilidadeAnual}% a.a.`]);
    if (im.codigo) rows.push(["Referência", im.codigo]);
    rows.forEach(([l, v]) => {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      color(SLATE);
      doc.text(l, cx, y);
      color(CREAM);
      doc.text(v, cright, y, { align: "right" });
      y += 18;
    });

    // Rodapé
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    color(MUTED);
    doc.text(`${String(i + 1).padStart(2, "0")} / ${String(imoveis.length).padStart(2, "0")}`, cx, PH - 38);
    doc.text("h55negociosimob.com", cright, PH - 38, { align: "right" });
  }

  // ---------- FECHAMENTO ----------
  doc.addPage();
  fill(NAVY);
  doc.rect(0, 0, PW, PH, "F");
  stroke(GOLD);
  doc.setLineWidth(1.4);
  doc.line(60, 92, 132, 92);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  color(GOLDL);
  doc.text("RESUMO DO PORTFÓLIO", 60, 112);
  doc.setFont("times", "normal");
  doc.setFontSize(22);
  color(CREAM);
  doc.text(
    `${imoveis.length} ${imoveis.length === 1 ? "oportunidade selecionada" : "oportunidades selecionadas"}`,
    60,
    180,
  );
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  color(SLATE);
  doc.text("Valor total do portfólio", 60, 250);
  doc.setFont("times", "bold");
  doc.setFontSize(42);
  color(GOLDL);
  doc.text(brl(total), 60, 296);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  color(CREAM);
  doc.text("Fale com um especialista", 60, 384);
  doc.setFontSize(10.5);
  color(SLATE);
  doc.text("contato@h55negociosimob.com", 60, 408);
  doc.text("(31) 99169-7999", 60, 428);
  doc.setFontSize(9);
  color(MUTED);
  doc.text("H55 Negócios Imobiliários  ·  h55negociosimob.com", 60, PH - 50);

  const fileDate = new Date().toISOString().slice(0, 10);
  doc.save(`portfolio-h55-${fileDate}.pdf`);
}
