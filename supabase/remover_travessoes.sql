-- Remove travessões (— e –) dos textos dos imóveis cadastrados no Supabase.
-- O código do site já está limpo; isto trata o conteúdo que vive no banco
-- (títulos e descrições cadastrados pelo admin ou criados pelo seed).
--
-- Como usar: rode o passo 1 para ver o que seria alterado. Se estiver de
-- acordo, rode o passo 2. O passo 3 mostra o que sobrou para ajuste manual.

-- ---------------------------------------------------------------------------
-- 1. Prévia: o que vai mudar
-- ---------------------------------------------------------------------------
select
  id,
  titulo                                        as titulo_atual,
  replace(replace(titulo, ' — ', ', '), ' – ', ', ') as titulo_novo,
  left(descricao, 120)                          as descricao_atual
from public.imoveis
where titulo like '%—%' or titulo like '%–%'
   or descricao like '%—%' or descricao like '%–%'
order by titulo;

-- ---------------------------------------------------------------------------
-- 2. Aplicar: troca o travessão por vírgula
-- ---------------------------------------------------------------------------
update public.imoveis
set
  titulo    = replace(replace(titulo,    ' — ', ', '), ' – ', ', '),
  descricao = replace(replace(descricao, ' — ', ', '), ' – ', ', ')
where titulo like '%—%' or titulo like '%–%'
   or descricao like '%—%' or descricao like '%–%';

-- ---------------------------------------------------------------------------
-- 3. Sobras: travessão sem espaço em volta, que precisa de revisão humana
--    (a troca automática por vírgula pode não fazer sentido no meio da frase)
-- ---------------------------------------------------------------------------
select id, titulo, descricao
from public.imoveis
where titulo like '%—%' or titulo like '%–%'
   or descricao like '%—%' or descricao like '%–%';
