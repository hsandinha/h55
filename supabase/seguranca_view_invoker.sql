-- =====================================================================
-- h55 · Supabase · tira o SECURITY DEFINER da view pública (aviso "critical" do Advisor)
-- A view imoveis_publicos passa a rodar com os privilégios de quem consulta (security_invoker).
-- Para o visitante (anon) continuar vendo só os imóveis ativos e só as colunas públicas, ele ganha
-- SELECT apenas nessas colunas da tabela base e uma política de RLS que libera só status = 'Ativo'.
-- "proprietario" e qualquer outra coluna fora da lista continuam inacessíveis ao público.
-- Rode uma vez no SQL Editor (projeto vuwmgpcqeyszbtaobwxw).
-- =====================================================================

alter table public.imoveis enable row level security;

revoke all on table public.imoveis from anon;
grant select (
  id, "dataCadastro", codigo, titulo, descricao, preco, finalidade, tipo,
  "emDestaque", fotos, "videoUrl", "panoUrl", "matterportUrl", endereco, lat, lng,
  area, quartos, suites, banheiros, vagas, varandas, "anoConstrucao",
  "valorCondominio", "valorIptu", "rentabilidadeAnual", "valorizacao12m",
  "entradaMinima", "caracteristicasImovel", "caracteristicasEdificio",
  status, "finalidadeUso", exclusividade, "aceitaFinanciamento", "aceitaProposta"
) on public.imoveis to anon;

drop policy if exists "leitura publica de ativos" on public.imoveis;
create policy "leitura publica de ativos"
  on public.imoveis for select
  to anon
  using (status = 'Ativo');

-- a equipe (authenticated) já tem "leitura autenticada total" e "escrita autenticada"

alter view public.imoveis_publicos set (security_invoker = true);
grant select on public.imoveis_publicos to anon, authenticated;

notify pgrst, 'reload schema';

-- conferência: a vitrine continua enxergando os ativos
select count(*) as imoveis_publicos_ativos from public.imoveis_publicos;
