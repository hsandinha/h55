# H55 — Guia de lançamento

Passo a passo para colocar o site no ar (Next.js 16 + Supabase + Vercel).

## 1. Rodar localmente

```bash
npm install
npm run dev        # http://localhost:3000
```

Sem `.env.local`, as integrações com Supabase ficam indisponíveis e o painel não permite gestão de dados. Com Supabase configurado, tudo persiste.

## 2. Variáveis de ambiente

Copie `.env.local.example` para `.env.local` e preencha:

```
NEXT_PUBLIC_SUPABASE_URL=https://SEU-PROJETO.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br
```

(Supabase → Settings → API)

## 3. Banco de dados (Supabase → SQL Editor)

Rode os arquivos da pasta `supabase/` **nesta ordem**:

1. `imoveis.sql` — tabela de imóveis
2. `storage_e_visitas.sql` — bucket de fotos + tabela de visitas
3. `leads.sql` — tabela de leads
4. `seguranca.sql` — view pública `imoveis_publicos` (esconde `proprietario`) e ajuste de RLS

## 4. Usuário do painel admin

Supabase → Authentication → Users → **Add user** (e-mail + senha). Esse login dá acesso a `/admin/imoveis`, `/admin/visitas` e `/admin/leads`.

## 5. Segurança (já configurada nos SQLs)

- A vitrine lê a **view `imoveis_publicos`** — o campo `proprietario` nunca é exposto ao público.
- Escrita de imóveis: só usuários autenticados.
- Visitas e leads: envio público (qualquer visitante), leitura só da equipe.
- `/admin` é bloqueado no `robots.txt`.

## 6. Build de produção

```bash
npm run build
npm start
```

Resolva qualquer aviso de tipo/lint que aparecer antes do deploy.

## 7. Deploy na Vercel

1. Suba o repositório para o GitHub.
2. Vercel → **New Project** → importe o repositório.
3. Em **Environment Variables**, adicione as três variáveis do passo 2.
4. Deploy. A Vercel detecta Next.js automaticamente (build `next build`).
5. Configure o domínio em **Settings → Domains** e atualize `NEXT_PUBLIC_SITE_URL`.

## 8. Pós-deploy (checklist)

- [ ] Cadastrar imóveis reais no `/admin` (com fotos via upload).
- [ ] Conferir `/sitemap.xml` e `/robots.txt` no domínio final.
- [ ] Testar agendamento de visita e contato (devem aparecer em `/admin/visitas` e `/admin/leads`).
- [ ] Validar Open Graph (compartilhar um imóvel no WhatsApp/redes).

## Estrutura (resumo)

- **Vitrine**: `/` (home imersiva), `/imoveis` (filtro + mapa + favoritos + comparar), `/imoveis/[id]` (detalhe premium), `/comparar`, `/contact`.
- **Admin**: `/admin/imoveis` (CRUD + upload), `/admin/visitas`, `/admin/leads`, `/admin/login`.
- **Dados**: `lib/properties.ts`, `lib/visitas.ts`, `lib/leads.ts`, `lib/storage.ts` (Supabase).
