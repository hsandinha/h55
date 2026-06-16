-- =====================================================================
-- h55 · Supabase · tabela "leads" (contatos do site)
-- Rode no SQL Editor do Supabase.
-- =====================================================================

create table if not exists public.leads (
  id            uuid primary key default gen_random_uuid(),
  nome          text not null,
  email         text,
  telefone      text not null,
  mensagem      text,
  origem        text,
  "imovelId"    text,
  "imovelTitulo" text,
  status        text default 'Novo',
  "criadoEm"    timestamptz not null default now()
);

create index if not exists leads_status_idx on public.leads (status);
create index if not exists leads_imovel_idx on public.leads ("imovelId");

alter table public.leads enable row level security;

-- Visitante (anônimo) pode enviar um contato
drop policy if exists "leads contato publico" on public.leads;
create policy "leads contato publico"
  on public.leads for insert
  to anon, authenticated
  with check (true);

-- Apenas a equipe (autenticada) lê/gerencia
drop policy if exists "leads gestao autenticada" on public.leads;
create policy "leads gestao autenticada"
  on public.leads for select
  to authenticated
  using (true);
