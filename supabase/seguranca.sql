-- =====================================================================
-- h55 · Supabase · Endurecimento de segurança
-- Expõe ao público apenas um subconjunto seguro de colunas (sem o campo
-- "proprietario") através de uma view. A tabela base passa a ser legível
-- somente por usuários autenticados (equipe).
-- Rode DEPOIS de imoveis.sql.
-- =====================================================================

alter table public.imoveis add column if not exists "panoUrl" text;
alter table public.imoveis add column if not exists "matterportUrl" text;

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

-- A vitrine pública passa a ler a view; a tabela base não é mais lida por anon.
drop policy if exists "leitura publica de ativos" on public.imoveis;

-- Garante leitura total da tabela base para a equipe (admin).
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
