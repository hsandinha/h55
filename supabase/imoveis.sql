-- =====================================================================
-- h55 · Supabase · tabela "imoveis"
-- Colunas em camelCase (com aspas) para casar 1:1 com o tipo Imovel
-- (types/imovel.ts), de modo que `select *` já retorne objetos prontos.
-- Rode este arquivo no SQL Editor do Supabase.
-- =====================================================================

create table if not exists public.imoveis (
  id                       uuid primary key default gen_random_uuid(),
  "dataCadastro"           timestamptz not null default now(),
  codigo                   text,

  -- Principais
  titulo                   text not null,
  descricao                text,
  preco                    numeric not null default 0,
  finalidade               text not null default 'Comprar'
                             check (finalidade in ('Comprar','Alugar')),
  tipo                     text,
  "emDestaque"             boolean default false,

  -- Mídia
  fotos                    text[] not null default '{}',
  "videoUrl"               text,
  "panoUrl"                text,
  "matterportUrl"          text,

  -- Endereço + coordenadas
  endereco                 jsonb,
  lat                      double precision,
  lng                      double precision,

  -- Estrutura
  area                     numeric default 0,
  quartos                  integer default 0,
  suites                   integer default 0,
  banheiros                integer default 0,
  vagas                    integer default 0,
  varandas                 integer default 0,
  "anoConstrucao"          integer,

  -- Valores adicionais
  "valorCondominio"        numeric,
  "valorIptu"              numeric,

  -- Indicadores de investimento (exclusivos do h55)
  "rentabilidadeAnual"     numeric,
  "valorizacao12m"         numeric,
  "entradaMinima"          numeric,

  -- Características (objetos)
  "caracteristicasImovel"  jsonb default '{}'::jsonb,
  "caracteristicasEdificio" jsonb default '{}'::jsonb,

  -- Status e negociação
  status                   text default 'Ativo'
                             check (status in ('Ativo','Vendido','Inativo')),
  "finalidadeUso"          text,
  exclusividade            boolean default false,
  "aceitaFinanciamento"    boolean default false,
  "aceitaProposta"         boolean default true,

  -- Proprietário (privado — não exposto na vitrine)
  proprietario             jsonb,

  "updatedAt"              timestamptz not null default now()
);

-- Índices úteis para a vitrine/filtros
create index if not exists imoveis_status_idx on public.imoveis (status);
create index if not exists imoveis_tipo_idx   on public.imoveis (tipo);
create index if not exists imoveis_preco_idx  on public.imoveis (preco);
create index if not exists imoveis_cidade_idx on public.imoveis ((endereco->>'cidade'));

-- =====================================================================
-- RLS: a tabela base fica restrita à equipe.
-- A vitrine pública lê a view "imoveis_publicos" criada em seguranca.sql.
-- =====================================================================
alter table public.imoveis enable row level security;

grant usage on schema public to anon, authenticated;
revoke all on table public.imoveis from anon;
grant select, insert, update, delete on public.imoveis to authenticated;

drop policy if exists "leitura publica de ativos" on public.imoveis;

drop policy if exists "leitura autenticada total" on public.imoveis;
create policy "leitura autenticada total"
  on public.imoveis for select
  to authenticated
  using (true);

drop policy if exists "escrita autenticada" on public.imoveis;
create policy "escrita autenticada"
  on public.imoveis
  for all
  to authenticated
  using (true)
  with check (true);
