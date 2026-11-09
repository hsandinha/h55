-- =====================================================================
-- h55 · Supabase · devolve a vitrine pública (projeto vuwmgpcqeyszbtaobwxw)
--
-- Sintoma: visitante anônimo via "0 imóveis" em /imoveis; logado funcionava.
--
-- Causa: a coluna "descontoPercent" entrou na tabela e na view
-- imoveis_publicos, mas não entrou no GRANT de colunas para o anon feito em
-- seguranca_view_invoker.sql. Como a view roda com security_invoker = true,
-- ela exige privilégio em TODAS as colunas que referencia — uma só faltando
-- derruba a view inteira com 42501 "permission denied for table imoveis".
--
-- Rode uma vez no SQL Editor.
-- =====================================================================

grant select ("descontoPercent") on public.imoveis to anon;

notify pgrst, 'reload schema';

-- Conferência 1: a view volta a responder para o público.
select count(*) as imoveis_publicos_ativos from public.imoveis_publicos;

-- Conferência 2: nenhuma coluna da view ficou sem grant para o anon.
-- Deve voltar vazio. O que aparecer aqui é a próxima coluna a quebrar a view.
select a.attname as coluna_sem_grant_para_anon
from pg_attribute a
where a.attrelid = 'public.imoveis'::regclass
  and a.attnum > 0
  and not a.attisdropped
  and a.attname in (
    select c.column_name
    from information_schema.view_column_usage c
    where c.view_schema = 'public' and c.view_name = 'imoveis_publicos'
  )
  and not has_column_privilege('anon', a.attrelid, a.attname, 'SELECT');
