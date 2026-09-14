import type { MetadataRoute } from "next";
import { getImoveis } from "@/lib/properties";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://h55negociosimob.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["", "/imoveis", "/comparar", "/contact", "/about", "/services", "/lancamentos", "/imoveis-selecionados", "/equity", "/frontstay"].map(
    (p) => ({
      url: `${SITE}${p}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: p === "" ? 1 : 0.7,
    }),
  );

  let imovelRoutes: MetadataRoute.Sitemap = [];
  try {
    const imoveis = await getImoveis();
    imovelRoutes = imoveis.map((i) => ({
      url: `${SITE}/imoveis/${i.id}`,
      lastModified: i.dataCadastro ? new Date(i.dataCadastro) : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));
  } catch {
    /* ignora: sitemap sai só com as rotas estáticas */
  }

  return [...staticRoutes, ...imovelRoutes];
}
