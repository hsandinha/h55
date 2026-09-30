/**
 * Script de seed: adiciona 8 imóveis da planilha ao Supabase.
 * Uso:
 *   node scripts/seed-imoveis-2.mjs
 *
 * Requer .env.local com:
 *   NEXT_PUBLIC_SUPABASE_URL=...
 *   SUPABASE_SERVICE_ROLE_KEY=...   ← Settings → API no painel do Supabase
 *
 * Imóveis com o mesmo título já cadastrado são pulados, então dá para
 * rodar de novo sem duplicar.
 *
 * Após rodar o script, acesse cada imóvel no admin e:
 *   - Faça upload das fotos
 *   - Confirme os campos marcados com "TODO"
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
    console.warn("⚠️  Não foi possível ler .env.local. Verifique o arquivo.");
  }
}
loadEnv();

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
const modoSql = process.argv.includes("--sql");

if (!modoSql && (!url || !key)) {
  console.error(
    "❌  Variáveis faltando no .env.local:\n" +
    "    NEXT_PUBLIC_SUPABASE_URL e/ou SUPABASE_SERVICE_ROLE_KEY\n\n" +
    "    Encontre a Service Role Key em:\n" +
    "    Supabase Dashboard → Settings → API → service_role"
  );
  process.exit(1);
}

const supabase = modoSql ? null : createClient(url, key);
const now = new Date().toISOString();

const base = {
  dataCadastro: now,
  finalidade: "Comprar",
  status: "Ativo",
  fotos: [], // TODO: fazer upload das fotos
  aceitaProposta: true,
};

const bh = (rua, numero, complemento, bairro, cep, nomeCondominio) => ({
  rua,
  numero,
  complemento,
  bairro,
  cidade: "Belo Horizonte",
  estado: "MG",
  cep,
  nomeCondominio,
});

// ── Dados dos imóveis ───────────────────────────────────────────────────────
// ATENÇÃO: campos marcados com "TODO" devem ser revisados no admin após a inserção.
const imoveis = [
  // ── 1. Lote Quintas do Sol ───────────────────────────────────────────────
  {
    ...base,
    titulo: "Lote Quintas do Sol, Lote 32, Quadra 32",
    tipo: "lote-terreno",
    finalidadeUso: "Residencial",
    preco: 1430000,
    area: 1305,
    quartos: 0,
    banheiros: 0,
    vagas: 0,
    endereco: {
      rua: "", // TODO: preencher
      numero: "",
      complemento: "Lote 32, Quadra 32",
      bairro: "Quintas do Sol", // TODO: confirmar
      cidade: "", // TODO: preencher
      estado: "MG", // TODO: confirmar
      cep: "",
      nomeCondominio: "Quintas do Sol",
    },
  },

  // ── 2. Casa Arraial d'Ajuda ──────────────────────────────────────────────
  {
    ...base,
    titulo: "Casa em Arraial d'Ajuda, BA",
    tipo: "casa-residencial",
    finalidadeUso: "Residencial",
    preco: 3950000,
    area: 214,
    quartos: 4,
    suites: 2,
    banheiros: 0, // TODO: preencher
    vagas: 0, // TODO: preencher
    endereco: {
      rua: "Estrada da Balsa",
      numero: "", // TODO: preencher
      complemento: "",
      bairro: "Arraial d'Ajuda",
      cidade: "Porto Seguro",
      estado: "BA",
      cep: "",
    },
  },

  // ── 3. Ed. Sergipe Residencial, Apto. 202 ───────────────────────────────
  // Fontes: Loft, Lopes (2 quartos, 1 suíte, 2 vagas; 2019). Área privativa de 115 m² informada pela H55
  {
    ...base,
    titulo: "Ed. Sergipe Residencial, Apto. 202",
    descricao:
      "Apartamento com área privativa de 115 m², com 2 quartos, sendo 1 suíte, no Edifício Sergipe Residencial, a poucos quarteirões da Avenida Afonso Pena e da Praça da Liberdade. Prédio de 2019, com duas torres, elevador, salão de festas e espaço gourmet.",
    tipo: "apto-area-privativa",
    finalidadeUso: "Residencial",
    preco: 1250000,
    area: 115,
    quartos: 2,
    suites: 1,
    banheiros: 3,
    vagas: 2,
    anoConstrucao: 2019,
    valorCondominio: 1090, // TODO: confirmar
    caracteristicasEdificio: {
      elevadorsocial: true,
      salaodefestas: true,
      churrasqueira: true,
      gasCanalizado: true,
      andarApartamento: 2,
    },
    endereco: bh("Rua Sergipe", "319", "Apto 202", "Boa Viagem", "", "Ed. Sergipe Residencial"), // TODO: confirmar CEP
  },

  // ── 4. Ed. Rio Branco Residencial, Apto. 503 ────────────────────────────
  // Fontes: EPO Empreendimentos, Loft, Hub Imobiliário (17 pavimentos, 36
  // unidades; 4 unidades de 2 suítes com área privativa de 28 m² ou 73 m² e
  // 3 vagas; projeto de Gustavo Penna)
  {
    ...base,
    titulo: "Ed. Rio Branco Residencial, Apto. 503",
    descricao:
      "Apartamento com área privativa no Rio Branco Residencial, edifício da EPO Empreendimentos com projeto de Gustavo Penna, no ponto mais central da Savassi. São 80 m² internos e 73 m² de área privativa descoberta, com 2 suítes, sala para dois ambientes, lavabo e 3 vagas. Lazer completo com piscina aquecida coberta, fitness, sauna, espaço gourmet, salão de festas, pet care e bicicletário.",
    tipo: "apto-area-privativa",
    finalidadeUso: "Residencial",
    preco: 2150000,
    area: 153, // 80 m² internos + 73 m² de área privativa
    quartos: 2,
    suites: 2,
    banheiros: 3,
    vagas: 3,
    anoConstrucao: 2023,
    valorCondominio: 2032, // TODO: confirmar
    caracteristicasEdificio: {
      piscina: true,
      academia: true,
      sauna: true,
      salaodefestas: true,
      playground: true,
      bicicletario: true,
      elevadorsocial: true,
      portaria24h: true,
      numeroPavimentos: 17,
      andarApartamento: 5,
    },
    endereco: bh("Rua Tomé de Souza", "533", "Apto 503", "Savassi", "30140-131", "Ed. Rio Branco Residencial"),
  },

  // ── Ed. Jardins, Apto. 503 ───────────────────────────────────────────────
  // Fontes: Caparaó, Porcaro, Loft (108 m², 3 suítes + lavabo, 2 vagas;
  // entregue em fevereiro de 2025)
  {
    ...base,
    titulo: "Ed. Jardins, Apto. 503",
    descricao:
      "Apartamento de 108 m² com 3 suítes, uma delas com closet, sala para três ambientes, lavabo e 2 vagas, no Jardins, edifício da Caparaó no Lourdes entregue em 2025. Lazer com piscinas adulto e infantil, sauna e spa, espaço gourmet, fitness coberto e descoberto, salão de festas, playground, home office e sala de reunião.",
    tipo: "apartamento",
    finalidadeUso: "Residencial",
    preco: 2900000,
    area: 108,
    quartos: 3,
    suites: 3,
    banheiros: 4,
    vagas: 2, // TODO: confirmar (a planta prevê 2 ou 3 vagas)
    anoConstrucao: 2025,
    caracteristicasImovel: { closet: true, lavabo: true, areaDeServico: true },
    caracteristicasEdificio: {
      piscina: true,
      sauna: true,
      academia: true,
      salaodefestas: true,
      playground: true,
      bicicletario: true,
      elevadorsocial: true,
      portaria24h: true,
      andarApartamento: 5,
    },
    endereco: bh("Rua Curitiba", "2142", "Apto 503", "Lourdes", "30170-127", "Ed. Jardins"),
  },

  // ── Ed. Jardins, Apto. 504 ───────────────────────────────────────────────
  // Fontes: Caparaó, Porcaro, Loft (108 m², 3 suítes + lavabo, 2 vagas;
  // entregue em fevereiro de 2025)
  {
    ...base,
    titulo: "Ed. Jardins, Apto. 504",
    descricao:
      "Apartamento de 108 m² com 3 suítes, uma delas com closet, sala para três ambientes, lavabo e 2 vagas, no Jardins, edifício da Caparaó no Lourdes entregue em 2025. Lazer com piscinas adulto e infantil, sauna e spa, espaço gourmet, fitness coberto e descoberto, salão de festas, playground, home office e sala de reunião.",
    tipo: "apartamento",
    finalidadeUso: "Residencial",
    preco: 2900000,
    area: 108,
    quartos: 3,
    suites: 3,
    banheiros: 4,
    vagas: 2, // TODO: confirmar (a planta prevê 2 ou 3 vagas)
    anoConstrucao: 2025,
    caracteristicasImovel: { closet: true, lavabo: true, areaDeServico: true },
    caracteristicasEdificio: {
      piscina: true,
      sauna: true,
      academia: true,
      salaodefestas: true,
      playground: true,
      bicicletario: true,
      elevadorsocial: true,
      portaria24h: true,
      andarApartamento: 5,
    },
    endereco: bh("Rua Curitiba", "2142", "Apto 504", "Lourdes", "30170-127", "Ed. Jardins"),
  },

  // ── Ed. Soul Savassi, Apto. 703 ──────────────────────────────────────────
  // Fontes: Caparaó, MySide (116 m², 3 suítes + lavabo, 2 vagas; 35 pavimentos)
  {
    ...base,
    titulo: "Ed. Soul, Apto. 703",
    descricao:
      "Apartamento de 116 m² com 3 suítes, lavabo, sala para três ambientes e 2 vagas, no Soul Savassi, edifício da Caparaó na Rua Pernambuco. Lazer completo com piscinas, quadra de beach tennis, fitness, sauna, espaço gourmet, salão de festas, espaço zen, espaço beauty, playground e coworking.",
    tipo: "apartamento",
    finalidadeUso: "Residencial",
    preco: 2500000,
    area: 116,
    quartos: 3,
    suites: 3,
    banheiros: 4,
    vagas: 2,
    anoConstrucao: 2026,
    caracteristicasImovel: { lavabo: true, areaDeServico: true },
    caracteristicasEdificio: {
      piscina: true,
      sauna: true,
      academia: true,
      salaodefestas: true,
      playground: true,
      quadraAreia: true,
      elevadorsocial: true,
      numeroPavimentos: 35,
      andarApartamento: 7,
    },
    endereco: bh("Rua Pernambuco", "909", "Apto 703", "Savassi", "30130-155", "Ed. Soul"),
  },

  // ── Ed. Soul Savassi, Apto. 704 ──────────────────────────────────────────
  // Fontes: Caparaó, MySide (116 m², 3 suítes + lavabo, 2 vagas; 35 pavimentos)
  {
    ...base,
    titulo: "Ed. Soul, Apto. 704",
    descricao:
      "Apartamento de 116 m² com 3 suítes, lavabo, sala para três ambientes e 2 vagas, no Soul Savassi, edifício da Caparaó na Rua Pernambuco. Lazer completo com piscinas, quadra de beach tennis, fitness, sauna, espaço gourmet, salão de festas, espaço zen, espaço beauty, playground e coworking.",
    tipo: "apartamento",
    finalidadeUso: "Residencial",
    preco: 2500000,
    area: 116,
    quartos: 3,
    suites: 3,
    banheiros: 4,
    vagas: 2,
    anoConstrucao: 2026,
    caracteristicasImovel: { lavabo: true, areaDeServico: true },
    caracteristicasEdificio: {
      piscina: true,
      sauna: true,
      academia: true,
      salaodefestas: true,
      playground: true,
      quadraAreia: true,
      elevadorsocial: true,
      numeroPavimentos: 35,
      andarApartamento: 7,
    },
    endereco: bh("Rua Pernambuco", "909", "Apto 704", "Savassi", "30130-155", "Ed. Soul"),
  },
];

// ── Modo SQL: gera o insert para colar no SQL Editor do Supabase ────────────
function gerarSql() {
  const linhas = [
    "-- Gerado por scripts/seed-imoveis-2.mjs --sql",
    "-- Imóveis com o mesmo título já cadastrado são pulados.",
    "",
  ];
  for (const imovel of imoveis) {
    const cols = Object.keys(imovel).map((c) => `"${c}"`).join(", ");
    const json = JSON.stringify(imovel).replaceAll("$json$", "");
    const titulo = imovel.titulo.replaceAll("'", "''");
    linhas.push(
      `-- ${imovel.titulo}`,
      `insert into public.imoveis (${cols})`,
      `select ${Object.keys(imovel).map((c) => `r."${c}"`).join(", ")}`,
      `from jsonb_populate_record(null::public.imoveis, $json$${json}$json$::jsonb) r`,
      `where not exists (select 1 from public.imoveis where titulo = '${titulo}');`,
      ""
    );
  }
  console.log(linhas.join("\n"));
}

// ── Execução ────────────────────────────────────────────────────────────────
async function main() {
  if (modoSql) return gerarSql();

  console.log(`\n🏠  Inserindo ${imoveis.length} imóveis no Supabase...\n`);
  let ok = 0;
  let skip = 0;
  let fail = 0;

  const { data: existentes, error: listError } = await supabase
    .from("imoveis")
    .select("titulo");
  if (listError) {
    console.error(`❌  Não foi possível ler os imóveis existentes → ${listError.message}`);
    process.exit(1);
  }
  const titulos = new Set(existentes.map((i) => i.titulo));

  for (const imovel of imoveis) {
    if (titulos.has(imovel.titulo)) {
      console.log(`⏭️   ${imovel.titulo}\n    → já cadastrado, pulando`);
      skip++;
      continue;
    }

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
  console.log(`Concluído: ${ok} inseridos, ${skip} já existiam, ${fail} erros.`);
  if (ok > 0) {
    console.log(`\nPróximos passos no admin:`);
    console.log(`  1. Faça upload das fotos de cada imóvel`);
    console.log(`  2. Confirme área, quartos, banheiros e vagas`);
    console.log(`  3. Confirme os campos marcados com TODO no script`);
  }
}

main().catch((e) => {
  console.error("Erro inesperado:", e);
  process.exit(1);
});
