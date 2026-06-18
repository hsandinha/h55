import type { Metadata } from "next";
import { getImovelById } from "@/lib/properties";
import { ImovelDetailClient } from "@/components/property/ImovelDetailClient";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://h55negociosimob.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const im = await getImovelById(id);
  if (!im) return { title: "Imóvel não encontrado · H55" };

  const local = [im.endereco?.bairro, im.endereco?.cidade].filter(Boolean).join(", ");
  const preco = im.preco
    ? new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        maximumFractionDigits: 0,
      }).format(im.preco)
    : "";
  const titulo = `${im.titulo} · H55`;
  const desc =
    im.descricao ||
    `${(im.tipo || "Imóvel").replace(/-/g, " ")}${local ? ` em ${local}` : ""}${
      preco ? `, ${preco}` : ""
    }.`;
  const img = im.fotos?.[0];
  const url = `${SITE}/imoveis/${id}`;

  return {
    title: titulo,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: titulo,
      description: desc,
      url,
      type: "website",
      images: img ? [{ url: img }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: titulo,
      description: desc,
      images: img ? [img] : [],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ImovelDetailClient id={id} />;
}
