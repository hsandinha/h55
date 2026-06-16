-- =====================================================================
-- h55 · Supabase · corrigir/verificar tabela do hero
-- Rode no SQL Editor se /admin/hero mostrar erro de tabela/cache.
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

drop policy if exists "hero leitura publica" on public.hero_slides;
create policy "hero leitura publica"
  on public.hero_slides for select
  to anon, authenticated
  using (ativo = true);

drop policy if exists "hero gestao autenticada" on public.hero_slides;
create policy "hero gestao autenticada"
  on public.hero_slides for all
  to authenticated
  using (true)
  with check (true);

notify pgrst, 'reload schema';

select
  count(*) as total,
  count(*) filter (where ativo = true) as ativos
from public.hero_slides;
