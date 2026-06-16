-- =====================================================================
-- h55 · Supabase · tabela "hero_slides" (vídeos/fotos do hero)
-- As mídias usam o bucket "imoveis" (já público). Rode no SQL Editor.
-- =====================================================================

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

-- Atualiza o cache do PostgREST para a tabela aparecer em /rest/v1.
notify pgrst, 'reload schema';
