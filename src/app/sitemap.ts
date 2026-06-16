import type { MetadataRoute } from "next";
import { getImoveis } from "@/lib/properties";
import { bairros } from "@/data/bairros";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://h55negociosimob.com.br";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["", "/imoveis", "/bairros", "/comparar", "/contact", "/about", "/services"].map(
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
    /* ignora — sitemap sai só com as rotas estáticas */
  }

  const bairroRoutes: MetadataRoute.Sitemap = bairros.map((b) => ({
    url: `${SITE}/bairros/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...bairroRoutes, ...imovelRoutes];
}
