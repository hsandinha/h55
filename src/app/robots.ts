import type { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://h55negociosimob.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /negocios está em validação com os sócios: a rota responde, mas não
        // deve aparecer em buscador nem ser anunciada no site.
        disallow: ["/admin", "/admin/", "/bairros", "/bairros/", "/negocios", "/negocios/"],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
  };
}
