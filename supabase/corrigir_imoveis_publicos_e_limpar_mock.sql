-- =====================================================================
-- h55 · Supabase · corrigir vitrine pública e remover imóveis de exemplo
-- Rode uma vez no SQL Editor.
-- =====================================================================

-- Colunas usadas pelo tipo Imovel e pela view pública.
alter table public.imoveis add column if not exists "panoUrl" text;
alter table public.imoveis add column if not exists "matterportUrl" text;

-- Remove os 6 registros de demonstração que foram inseridos antes.
delete from public.imoveis
where codigo in (
  'SP-COB-001',
  'SC-APT-002',
  'SP-CASA-003',
  'MG-APT-004',
  'SC-FLAT-005',
  'SP-LOJA-006'
);

-- Recria a view que a vitrine usa, sem expor dados do proprietário.
drop view if exists public.imoveis_publicos;
create view public.imoveis_publicos
  with (security_invoker = false)
as
  select
    id, "dataCadastro", codigo, titulo, descricao, preco, finalidade, tipo,
    "emDestaque", fotos, "videoUrl", "panoUrl", "matterportUrl", endereco, lat, lng,
    area, quartos, suites, banheiros, vagas, varandas, "anoConstrucao",
    "valorCondominio", "valorIptu", "rentabilidadeAnual", "valorizacao12m",
    "entradaMinima", "caracteristicasImovel", "caracteristicasEdificio",
    status, "finalidadeUso", exclusividade, "aceitaFinanciamento", "aceitaProposta"
  from public.imoveis
  where status = 'Ativo';

grant usage on schema public to anon, authenticated;
grant select on public.imoveis_publicos to anon, authenticated;
revoke all on table public.imoveis from anon;
grant select, insert, update, delete on public.imoveis to authenticated;

alter table public.imoveis enable row level security;

-- A tabela base não deve ser lida diretamente por visitantes.
drop policy if exists "leitura publica de ativos" on public.imoveis;

drop policy if exists "leitura autenticada total" on public.imoveis;
create policy "leitura autenticada total"
  on public.imoveis for select
  to authenticated
  using (true);

drop policy if exists "escrita autenticada" on public.imoveis;
create policy "escrita autenticada"
  on public.imoveis for all
  to authenticated
  using (true)
  with check (true);

notify pgrst, 'reload schema';

select 'imoveis' as origem, count(*) as total from public.imoveis
union all
select 'imoveis_publicos_ativos' as origem, count(*) as total from public.imoveis_publicos;
