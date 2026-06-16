-- =====================================================================
-- h55 · Supabase · Storage (fotos/vídeos) + hero + tabela de visitas
-- Rode no SQL Editor do Supabase (depois de imoveis.sql).
-- =====================================================================

-- ----- Storage: bucket público "imoveis" para fotos e vídeos -----
insert into storage.buckets (id, name, public)
values ('imoveis', 'imoveis', true)
on conflict (id) do nothing;

drop policy if exists "imoveis fotos leitura publica" on storage.objects;
create policy "imoveis fotos leitura publica"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'imoveis');

drop policy if exists "imoveis fotos upload autenticado" on storage.objects;
create policy "imoveis fotos upload autenticado"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'imoveis');

drop policy if exists "imoveis fotos update autenticado" on storage.objects;
create policy "imoveis fotos update autenticado"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'imoveis');

drop policy if exists "imoveis fotos delete autenticado" on storage.objects;
create policy "imoveis fotos delete autenticado"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'imoveis');

-- ----- Tabela do hero (vídeos/fotos da página inicial) -----
create table if not exists public.hero_slides (
  id         uuid primary key default gen_random_uuid(),
  tipo       text not null default 'foto' check (tipo in ('video', 'foto')),
  url        text not null,
  poster     text,
  ordem      bigint default 0,
  ativo      boolean default true,
  "criadoEm" timestamptz not null default now()
);

create index if not exists hero_slides_ordem_idx on public.hero_slides (ordem);

grant usage on schema public to anon, authenticated;
grant select on public.hero_slides to anon, authenticated;
grant insert, update, delete on public.hero_slides to authenticated;

alter table public.hero_slides enable row level security;

-- Leitura pública apenas dos slides ativos
drop policy if exists "hero leitura publica" on public.hero_slides;
create policy "hero leitura publica"
  on public.hero_slides for select
  to anon, authenticated
  using (ativo = true);

-- Equipe autenticada gerencia tudo
drop policy if exists "hero gestao autenticada" on public.hero_slides;
create policy "hero gestao autenticada"
  on public.hero_slides for all
  to authenticated
  using (true)
  with check (true);

-- ----- Tabela de visitas (agendamentos vindos do site) -----
create table if not exists public.visitas (
  id            uuid primary key default gen_random_uuid(),
  "imovelId"    text,
  "imovelTitulo" text,
  nome          text not null,
  telefone      text not null,
  email         text,
  data          date,
  hora          text,
  mensagem      text,
  status        text default 'Agendada',
  "criadoEm"    timestamptz not null default now()
);

create index if not exists visitas_imovel_idx on public.visitas ("imovelId");
create index if not exists visitas_status_idx on public.visitas (status);

alter table public.visitas enable row level security;

-- Visitante (anônimo) pode solicitar uma visita
drop policy if exists "visitas solicitacao publica" on public.visitas;
create policy "visitas solicitacao publica"
  on public.visitas for insert
  to anon, authenticated
  with check (true);

-- Apenas usuários autenticados (equipe) leem/gerenciam
drop policy if exists "visitas gestao autenticada" on public.visitas;
create policy "visitas gestao autenticada"
  on public.visitas for select
  to authenticated
  using (true);

-- Atualiza o cache do PostgREST para as novas tabelas aparecerem em /rest/v1.
notify pgrst, 'reload schema';
