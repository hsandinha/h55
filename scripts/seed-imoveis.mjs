/**
 * Script de seed — adiciona os 12 imóveis ao Supabase.
 * Uso:
 *   node scripts/seed-imoveis.mjs
 *
 * Requer .env.local com:
 *   NEXT_PUBLIC_SUPABASE_URL=...
 *   SUPABASE_SERVICE_ROLE_KEY=...   ← Settings → API no painel do Supabase
 *
 * Após rodar o script, acesse cada imóvel no admin e:
 *   - Faça upload das fotos
 *   - Confirme / corrija área, quartos, banheiros, vagas, suítes
 *   - Preencha descrição, proprietário e demais detalhes
 */

import { readFileSync } from "fs";
import { resolve } from "path";
import { createClient } from "@supabase/supabase-js";

// ── Carrega .env.local ──────────────────────────────────────────────────────
function loadEnv() {
  try {
    const content = readFileSync(resolve(process.cwd(), ".env.local"), "utf-8");
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eqIdx = trimmed.indexOf("=");
      if (eqIdx === -1) continue;
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim();
      if (!(key in process.env)) process.env[key] = val;
    }
  } catch {
    console.warn("⚠️  Não foi possível ler .env.local — verifique o arquivo.");
  }
}
loadEnv();

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.error(
    "❌  Variáveis faltando no .env.local:\n" +
    "    NEXT_PUBLIC_SUPABASE_URL e/ou SUPABASE_SERVICE_ROLE_KEY\n\n" +
    "    Encontre a Service Role Key em:\n" +
    "    Supabase Dashboard → Settings → API → service_role"
  );
  process.exit(1);
}

const supabase = createClient(url, key);
const now = new Date().toISOString();

// ── Dados dos imóveis ───────────────────────────────────────────────────────
// ATENÇÃO: campos marcados com "TODO" devem ser revisados no admin após a inserção.
const imoveis = [
  // ── 1. Hotel Motto by Hilton, SP ─────────────────────────────────────────
  {
    dataCadastro: now,
    titulo: "Unidade Hotel Motto by Hilton, SP",
    tipo: "flat-hotel",
    finalidade: "Comprar",
    finalidadeUso: "Comercial",
    status: "Ativo",
    preco: 520000,
    fotos: [], // TODO: fazer upload das fotos
    area: 0,   // TODO: preencher
    quartos: 1,
    banheiros: 1,
    vagas: 0,
    aceitaProposta: true,
    endereco: {
      rua: "Av. Professor Ascendino Reis",
      numero: "721",
      complemento: "",
      bairro: "Moema",
      cidade: "São Paulo",
      estado: "SP",
      cep: "04027-000",
    },
  },

  // ── 2. Ed. You Home — Apto. 305 ──────────────────────────────────────────
  {
    dataCadastro: now,
    titulo: "Ed. You Home — Apto. 305",
    tipo: "apartamento",
    finalidade: "Comprar",
    finalidadeUso: "Residencial",
    status: "Ativo",
    preco: 970000,
    fotos: [],
    area: 0,   // TODO: preencher
    quartos: 0, // TODO: preencher
    banheiros: 0, // TODO: preencher
    vagas: 0,
    aceitaProposta: true,
    endereco: {
      rua: "Rua Montes Claros",
      numero: "395",
      complemento: "Apto 305",
      bairro: "Sion",
      cidade: "Belo Horizonte",
      estado: "MG",
      cep: "30310-130",
      nomeCondominio: "Ed. You Home",
    },
  },

  // ── 3. Ed. You Home — Apto. 306 ──────────────────────────────────────────
  {
    dataCadastro: now,
    titulo: "Ed. You Home — Apto. 306",
    tipo: "apartamento",
    finalidade: "Comprar",
    finalidadeUso: "Residencial",
    status: "Ativo",
    preco: 980000,
    fotos: [],
    area: 0,
    quartos: 0,
    banheiros: 0,
    vagas: 0,
    aceitaProposta: true,
    endereco: {
      rua: "Rua Montes Claros",
      numero: "395",
      complemento: "Apto 306",
      bairro: "Sion",
      cidade: "Belo Horizonte",
      estado: "MG",
      cep: "30310-130",
      nomeCondominio: "Ed. You Home",
    },
  },

  // ── 4. Ed. You Home — Apto. 401 ──────────────────────────────────────────
  {
    dataCadastro: now,
    titulo: "Ed. You Home — Apto. 401",
    tipo: "apartamento",
    finalidade: "Comprar",
    finalidadeUso: "Residencial",
    status: "Ativo",
    preco: 970000,
    fotos: [],
    area: 0,
    quartos: 0,
    banheiros: 0,
    vagas: 0,
    aceitaProposta: true,
    endereco: {
      rua: "Rua Montes Claros",
      numero: "395",
      complemento: "Apto 401",
      bairro: "Sion",
      cidade: "Belo Horizonte",
      estado: "MG",
      cep: "30310-130",
      nomeCondominio: "Ed. You Home",
    },
  },

  // ── 5. Ed. You Home — Apto. 402 ──────────────────────────────────────────
  {
    dataCadastro: now,
    titulo: "Ed. You Home — Apto. 402",
    tipo: "apartamento",
    finalidade: "Comprar",
    finalidadeUso: "Residencial",
    status: "Ativo",
    preco: 980000,
    fotos: [],
    area: 0,
    quartos: 0,
    banheiros: 0,
    vagas: 0,
    aceitaProposta: true,
    endereco: {
      rua: "Rua Montes Claros",
      numero: "395",
      complemento: "Apto 402",
      bairro: "Sion",
      cidade: "Belo Horizonte",
      estado: "MG",
      cep: "30310-130",
      nomeCondominio: "Ed. You Home",
    },
  },

  // ── 6. Ed. You Home — Apto. 405 ──────────────────────────────────────────
  {
    dataCadastro: now,
    titulo: "Ed. You Home — Apto. 405",
    tipo: "apartamento",
    finalidade: "Comprar",
    finalidadeUso: "Residencial",
    status: "Ativo",
    preco: 970000,
    fotos: [],
    area: 0,
    quartos: 0,
    banheiros: 0,
    vagas: 0,
    aceitaProposta: true,
    endereco: {
      rua: "Rua Montes Claros",
      numero: "395",
      complemento: "Apto 405",
      bairro: "Sion",
      cidade: "Belo Horizonte",
      estado: "MG",
      cep: "30310-130",
      nomeCondominio: "Ed. You Home",
    },
  },

  // ── 7. Ed. You Home — Apto. 406 ──────────────────────────────────────────
  {
    dataCadastro: now,
    titulo: "Ed. You Home — Apto. 406",
    tipo: "apartamento",
    finalidade: "Comprar",
    finalidadeUso: "Residencial",
    status: "Ativo",
    preco: 980000,
    fotos: [],
    area: 0,
    quartos: 0,
    banheiros: 0,
    vagas: 0,
    aceitaProposta: true,
    endereco: {
      rua: "Rua Montes Claros",
      numero: "395",
      complemento: "Apto 406",
      bairro: "Sion",
      cidade: "Belo Horizonte",
      estado: "MG",
      cep: "30310-130",
      nomeCondominio: "Ed. You Home",
    },
  },

  // ── 8. Cobertura Oceana Golf — RJ ────────────────────────────────────────
  {
    dataCadastro: now,
    titulo: "Cobertura Oceana Golf — RJ",
    tipo: "cobertura",
    finalidade: "Comprar",
    finalidadeUso: "Residencial",
    status: "Ativo",
    preco: 19000000,
    fotos: [],
    area: 0,   // TODO: preencher
    quartos: 0, // TODO: preencher
    banheiros: 0,
    vagas: 0,
    aceitaProposta: true,
    endereco: {
      rua: "Av. Ermanno Dallari",
      numero: "811",
      complemento: "Apto 2101-3",
      bairro: "Barra da Tijuca",
      cidade: "Rio de Janeiro",
      estado: "RJ",
      cep: "22793-083",
      nomeCondominio: "Oceana Golf",
    },
  },

  // ── 9. Apto. Ed. Casamirador Catarina ────────────────────────────────────
  {
    dataCadastro: now,
    titulo: "Apto. Ed. Casamirador Catarina",
    tipo: "apartamento",
    finalidade: "Comprar",
    finalidadeUso: "Residencial",
    status: "Ativo",
    preco: 4700000,
    fotos: [],
    area: 0,
    quartos: 0,
    banheiros: 0,
    vagas: 0,
    aceitaProposta: true,
    endereco: {
      rua: "Rua Santa Catarina",
      numero: "1200",
      complemento: "Apto 302",
      bairro: "Lourdes",
      cidade: "Belo Horizonte",
      estado: "MG",
      cep: "30170-082",
      nomeCondominio: "Ed. Casamirador Catarina",
    },
  },

  // ── 10. Ed. Casamirador Uno — Apto. 903 ──────────────────────────────────
  {
    dataCadastro: now,
    titulo: "Ed. Casamirador Uno — Apto. 903",
    tipo: "apartamento",
    finalidade: "Comprar",
    finalidadeUso: "Residencial",
    status: "Ativo",
    preco: 740000,
    fotos: [],
    area: 0,
    quartos: 0,
    banheiros: 0,
    vagas: 0,
    aceitaProposta: true,
    endereco: {
      rua: "Rua Piauí",
      numero: "2020",
      complemento: "Apto 903",
      bairro: "Savassi",
      cidade: "Belo Horizonte",
      estado: "MG",
      cep: "30150-321",
      nomeCondominio: "Ed. Casamirador Uno",
    },
  },

  // ── 11. Ed. Casamirador Uno — Apto. 904 ──────────────────────────────────
  {
    dataCadastro: now,
    titulo: "Ed. Casamirador Uno — Apto. 904",
    tipo: "apartamento",
    finalidade: "Comprar",
    finalidadeUso: "Residencial",
    status: "Ativo",
    preco: 700000,
    fotos: [],
    area: 0,
    quartos: 0,
    banheiros: 0,
    vagas: 0,
    aceitaProposta: true,
    endereco: {
      rua: "Rua Piauí",
      numero: "2020",
      complemento: "Apto 904",
      bairro: "Savassi",
      cidade: "Belo Horizonte",
      estado: "MG",
      cep: "30150-321",
      nomeCondominio: "Ed. Casamirador Uno",
    },
  },

  // ── 12. Casa Alma Aramis (Maraú) ─────────────────────────────────────────
  {
    dataCadastro: now,
    titulo: "Casa Alma Aramis (Maraú)",
    tipo: "casa-condominio",
    finalidade: "Comprar",
    finalidadeUso: "Residencial",
    status: "Ativo",
    preco: 3500000,
    fotos: [],
    area: 0,   // TODO: preencher
    quartos: 0, // TODO: preencher
    banheiros: 0,
    vagas: 0,
    aceitaProposta: true,
    endereco: {
      rua: "Praia do Cassange",
      numero: "s/nº",
      complemento: "Casa 20",
      bairro: "Cassange",
      cidade: "Maraú",
      estado: "BA",
      cep: "45520-000",
      nomeCondominio: "Alma Aramis",
    },
  },
];

// ── Execução ────────────────────────────────────────────────────────────────
async function main() {
  console.log(`\n🏠  Inserindo ${imoveis.length} imóveis no Supabase...\n`);
  let ok = 0;
  let fail = 0;

  for (const imovel of imoveis) {
    const { data, error } = await supabase
      .from("imoveis")
      .insert(imovel)
      .select("id")
      .single();

    if (error) {
      console.error(`❌  ${imovel.titulo}\n    → ${error.message}`);
      fail++;
    } else {
      console.log(`✅  ${imovel.titulo}\n    → id: ${data.id}`);
      ok++;
    }
  }

  console.log(`\n─────────────────────────────────────`);
  console.log(`Concluído: ${ok} inseridos, ${fail} erros.`);
  if (ok > 0) {
    console.log(`\nPróximos passos no admin:`);
    console.log(`  1. Faça upload das fotos de cada imóvel`);
    console.log(`  2. Confirme área, quartos, banheiros e vagas`);
    console.log(`  3. Adicione descrição e dados do proprietário`);
  }
}

main().catch((e) => {
  console.error("Erro inesperado:", e);
  process.exit(1);
});
