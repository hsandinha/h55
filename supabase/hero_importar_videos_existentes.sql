-- =====================================================================
-- h55 · Supabase · importar vídeos já enviados para o hero
-- Rode depois de criar public.hero_slides.
-- =====================================================================

insert into public.hero_slides (tipo, url, ordem, ativo)
select *
from (
  values
    (
      'video'::text,
      'https://vuwmgpcqeyszbtaobwxw.supabase.co/storage/v1/object/public/imoveis/1781605061107-4tvcuc.mp4'::text,
      1781605061107::bigint,
      true
    ),
    (
      'video'::text,
      'https://vuwmgpcqeyszbtaobwxw.supabase.co/storage/v1/object/public/imoveis/1781605079581-aocdpg.mp4'::text,
      1781605079581::bigint,
      true
    )
) as existing_slides (tipo, url, ordem, ativo)
where not exists (
  select 1
  from public.hero_slides
  where hero_slides.url = existing_slides.url
);

notify pgrst, 'reload schema';
