# Backlog do site H55 — tudo que o Rodrigo pediu

**Fontes:** conversa do WhatsApp com Rodrigo Sodré (16/04/2025 → 20/08/2026) + os 7 prints enviados por ele em **08/08/2026 09:20** com a legenda _"Material para o nosso site"_.
**Compilado e implementado em:** 24/08/2026 · **Status verificado contra o código deste repositório (main).**

Legenda: ❌ pendente · ⚠️ parcial · ✅ feito

---

## 0. O que foi implementado em 24/08/2026

| Entrega | Arquivos |
|---|---|
| Nova página **Coordenação de Vendas** — duas soluções com o texto aprovado, três pilares, comparativo ativo pontual × lançamento e bloco sobre a remuneração | `src/app/coordenacao/page.tsx` (novo) |
| Link no menu (desktop + mobile) e no sitemap | `components/layout/Header.tsx`, `src/app/sitemap.ts` |
| **Serviços**: cards de Due Diligence e Vistoria Técnica de Recebimento, "Como Atuamos" em 6 etapas numeradas, chamada para a coordenação | `src/app/services/page.tsx` |
| **Sobre Nós**: Missão no texto aprovado, Visão criada, 5 valores aprovados, Nossa Origem restaurada, "Como Atuamos" removido | `src/app/about/page.tsx` |
| **Home**: frase de entrada com a logo | `components/sections/HeroSection.tsx` |
| Correção de bug: 3 botões apontavam para `/contato`, rota inexistente | `about`, `services`, `terms` |

`npm run build` validado — 26 rotas compilam, `/coordenacao` inclusa.

**Não implementado (de propósito):** a seção de cases. Falta conteúdo real — quais vendas podem ser citadas, com que números e com autorização de quem. Inventar case em site de imobiliária não é opção; depende do Rodrigo, que ficou de pensar nisso em 19/07/2025.

---

## 1. Prioridade máxima — novo posicionamento (últimas semanas)

Nos últimos 30 dias o pedido do Rodrigo mudou de patamar: não é mais ajuste de texto, é **um novo serviço no site**. A H55 deixa de se apresentar só como _buyer's agent / concierge_ e passa a vender também **coordenação de vendas** (o que ele e você já estão fazendo na prática com o URB Cidade Central: mapa-chave, conferência de contratos, gestão das imobiliárias parceiras, anexo de corretagem).

### 1.1 ✅ Coordenação de Vendas — Imóveis Compactos para Investimento
**Pedido em 02/08/2026 11:04**, texto já aprovado por ele (ele mesmo gerou e mandou "Para o site 👊👊"). Publicar como está:

> **Coordenação de Vendas: Imóveis Compactos para Investimento**
> _Maximizando a rentabilidade do seu empreendimento com inteligência imobiliária._
>
> A h55 expande seu portfólio para liderar a estratégia e coordenação de vendas de imóveis compactos focados em investimento. Conectamos incorporadoras e investidores através de uma gestão comercial estruturada, eficiente e orientada a resultados.
>
> - **Estratégia Comercial Integrada:** alinhamento de preço, posicionamento e canais de distribuição.
> - **Gestão de Parcerias e Corretores:** treinamento, engajamento e acompanhamento ativo do funil de vendas.
> - **Foco em Investidores:** abordagem técnica baseada em métricas de rentabilidade e valorização.
>
> 💡 _Acelere a liquidez dos seus lançamentos compactos com quem entende o mercado de investimentos._

### 1.2 ✅ Representação Exclusiva & Centralização de Vendas (imóveis avulsos)
**Pedido em 02/08/2026 11:04**, mesmo bloco:

> **Representação Exclusiva & Centralização de Vendas**
> _A h55 cuida de tudo. Você conversa apenas com um parceiro._
>
> Tentar vender um imóvel distribuindo a chave para dezenas de imobiliárias gera desencontro de informações, desvalorização do patrimônio e dor de cabeça. Na h55, assumimos a captação e coordenação centralizada da venda do seu imóvel avulso.
>
> - **Um Único Ponto de Contato:** a h55 representa você perante todo o mercado imobiliário.
> - **Estratégia Multicanal Sem Desordem:** mapeamos e coordenamos as melhores imobiliárias e corretores parceiros sem que você precise gerenciar ninguém.
> - **Valorização do Seu Patrimônio:** informações padronizadas, preço alinhado e fotos profissionais que protegem o valor real do seu imóvel.
>
> 🏙️ _Menos desgaste, mais controle e muito mais eficiência na venda do seu imóvel._

**Contexto que ele deu (usar como argumento de venda):** o pedido dele ao Gemini foi literalmente _"para imóveis avulsos queremos ser os captadores e coordenadores apenas. Queremos representar os donos dos imóveis e centralizar o trabalho na h55 ao invés do proprietário administrar várias imobiliárias"_.

### 1.3 ✅ Vistoria técnica de recebimento
**07/08/2026 10:44** — _"Outra coisa pra colocar no site da h55: **fazemos a vistoria técnica de recebimento do seu imóvel**"_. Entra como card em `/services`.

### 1.4 ✅ Descritivo da função de coordenação/conferência
**31/07/2026 16:25** — _"Vamos pensar em desenvolver nosso site com esse descritivo de função que estamos nos moldando. Acho q faz toda diferença"_ — dito logo depois da rodada de conferência dos contratos da LAR Imóveis (401, 1004, 1103). Ou seja: transformar em serviço vendável o que hoje já é rotina — conferência de contrato e anexo de corretagem, mapa-chave, checagem de fração ideal/valores/extenso, subida para assinatura no Clicksign, controle de status por unidade.

---

## 2. Os 7 prints de 08/08/2026 ("Material para o nosso site")

São prints de uma conversa dele com o Gemini validando exatamente esse modelo. Transcrição do conteúdo aproveitável:

**Nome do modelo no mercado:** Coordenação de Vendas · Master de Vendas · Gestão de Ativos Imobiliários.
Funciona como a **"inteligência central" do proprietário ou da construtora**, assumindo a estratégia comercial, a gestão documental e a curadoria das imobiliárias parceiras — sem necessariamente colocar corretores próprios na ponta.

**Três pilares (viram os 3 cards da seção):**
1. **Centralização e Controle de Imagem** — evita que o imóvel seja anunciado por 10 imobiliárias com fotos de qualidades distintas, preços divergentes ou descrições incorretas.
2. **Governança e Blindagem Jurídica** — análise de certidões, minutas de contrato, alinhamento bancário e de cartório costumam ser o maior gargalo; equipe dedicada reduz risco e estresse.
3. **Orquestração de Mercado** — ao emular o papel do proprietário, define regras claras de comissionamento (_fifty_), tabela de preços unificada e campanhas para atrair os melhores corretores da região.

**Ponto de atenção (usar para justificar a taxa, não esconder):** como a coordenadora cobra taxa de gestão ou fatia da comissão, ela precisa entregar ganho real de velocidade ou de valor de venda; e a relação com as imobiliárias parceiras precisa ser impecável para o mercado querer vender esse imóvel.

**Os dois cenários — ele respondeu "Ambos" quando o Gemini perguntou:**

| | **Ativo Pontual (imóvel avulso)** | **Lançamento de Empreendimento** |
|---|---|---|
| Foco principal | Liquidez do ativo e valorização máxima | Velocidade de venda e atingimento do VGV |
| Canal | Curadoria de 3 a 5 imobiliárias parceiras | Rede ampla de imobiliárias e corretores autônomos |
| Marketing | Ensaio fotográfico, tour virtual e anúncio direcionado | Identidade visual completa, estande e campanhas digitais |
| Dor que resolve | Desgaste na negociação e burocracia de cartório | Quebra de tabela de preço e concorrência desalinhada |

_(os rótulos da coluna da esquerda estavam cortados no print — foram inferidos pelo conteúdo das linhas)_

**Detalhamento por cenário (vira o corpo da página):**
- **Ativo pontual:** _Posicionamento de mercado_ (imóvel tratado como produto exclusivo, com material profissional e estratégia clara de precificação, em vez de jogado no portfólio genérico de várias imobiliárias) · _Filtro de propostas_ (o proprietário não negocia com múltiplos corretores; a coordenadora filtra só propostas reais e pré-qualificadas financeiramente) · _Gestão de certidões e matrícula_ (regularização documental, CNDs e minutagem 100% sob a gestão).
- **Lançamento:** _Gestão da força de vendas_ (convenção de vendas, treinamento das imobiliárias, regra de _fifty_, aplicação correta da tabela) · _Inteligência de vendas e marketing_ (acompanhamento em tempo real do VGV lançado × vendido, ajustando campanhas ao ritmo das unidades remanescentes) · _Padronização jurídica e repasse_ (alinhamento dos CCVs, apoio ao financiamento bancário dos compradores e coordenação do repasse de verbas).

> Sugestão: esse material cobre 1.1, 1.2 e 1.4 de uma vez. Vira uma página `/coordenacao` (ou duas abas dentro de `/services`) com o comparativo Ativo Pontual × Lançamento — e você já tem case real para provar (URB Cidade Central).

---

## 3. Portfólio `/imoveis` — pedidos de junho/julho de 2026

Origem: 05/06/2026 22:04, quando ele mandou os hotsites da Patrimar (saldão com 800 corretores convidados) e pediu _"fazermos um material parecido para o saldão da or3… algo parecido com o que criou no oceana porém com todos os imóveis da carteira, e com o desconto de 30%… pra gente distribuir para os corretores por wapp também"_.

| Data | Pedido | Status |
|---|---|---|
| 05/06 | Catálogo de toda a carteira OR3 com desconto, padrão hotsite, distribuível por WhatsApp | ✅ `/imoveis` + geração de PDF/XLSX |
| 17/06 10:37 | Urgência: _"já recebemos umas 100 msgns depois do post do Ofli, precisamos dos imóveis com os valores"_ | ✅ |
| 17/06 11:37 | Dúvida dele: LP ou site próprio → ficou o próprio site | ✅ |
| 18/06 10:16 | _"As imagens não estão condizentes a cada imóvel"_ | ✅ fotos vinculadas |
| 18/06 14:51 | Incluir lotes do Três Vales e o apto da Rua Rio de Janeiro (prédio 2300 / Patrimar, **mobiliado**) — **sem valor, "sob consulta"** | ✅ "Sob consulta" implementado |
| 18/06 18:46 | Aplicar os descontos do Três Vales | ✅ |
| 18/06 20:53 | Retirar os aptos **UNO (rua Piauí)** até confirmarem valores; retirar os **2 lotes do Três Vales** | ✅ botão desativar |
| 19/06 15:56 | Incluir os **avulsos da PSAC** junto aos do Ofli (Lúcio apresentaria os demais) | ⚠️ cadastro, não é código |
| 19/06 17:09 | Corrigir o ano para **2026** no material | ✅ |
| 12/06 13:39 | Voltar a área privativa da Sergipe para o site | ✅ |
| 07/07 08:33 | Site fora do ar (Supabase em manutenção) | ✅ voltou — vale monitorar |

---

## 4. Pendências antigas que nunca foram fechadas (2025)

Conferi no código: continuam em aberto.

| Data | Pedido | Status hoje |
|---|---|---|
| 30/07/2025 19:48 | _"Não tem a **due diligence** aqui nos serviços"_ | ✅ card em `/services` |
| 30/07/2025 19:49 | Tirar **"Como Atuamos"** do Sobre Nós e levar para Serviços — _"o sobre nós ficou grande e misturando os assuntos; sobre nós é o nosso histórico"_ | ✅ movido, virou processo de 6 etapas |
| 08/07/2025 11:03 | **Frase de entrada com a logo:** _"A MELHOR ASSESSORIA PARA SEU SUCESSO NO MERCADO IMOBILIÁRIO"_ | ✅ no hero |
| 08/07/2025 10:58 | **Missão, Visão e Valores** completos (foco no cliente, imparcialidade e transparência, expertise, segurança e confiança, inovação) | ✅ os três no ar |
| 19/07/2025 11:20 | Falta o **"insight"** → seção de **cases** | ❌ parado: falta conteúdo real |
| 21–22/07/2025 | **"Nossa Origem"** — versão final consolidada (com off-market, inteligência de mercado, discrição, agilidade e alinhamento total de interesses) | ✅ versão completa no ar |
| 29/07/2025 19:39 | Corrigir _"gerando conflito de interesse"_ | ✅ |

**Slogans que ele mandou (21/07/2025) e nunca foram usados:** _"Representamos quem compra. Só quem compra."_ · _"Consultoria imobiliária para quem pensa como investidor."_ · _"Atendimento de concierge, resultado de investidor."_ · _"Porque imóveis certos não se compram por acaso."_

---

## 5. Onde mexer neste repositório

| Item | Arquivo |
|---|---|
| Frase de entrada / headline | `components/sections/HeroSection.tsx` |
| Missão, Visão, Valores + Nossa Origem | `src/app/about/page.tsx` |
| Mover "Como Atuamos" (sai daqui) | `src/app/about/page.tsx` (linhas ~160–200) |
| Due diligence, vistoria técnica, "Como Atuamos" (entra aqui) | `src/app/services/page.tsx` (array `services`) |
| Coordenação de vendas / representação exclusiva | `src/app/coordenacao/page.tsx` + link em `components/layout/Header.tsx` |
| Cases / insight | criar seção em `components/sections/` e montar em `src/app/page.tsx` — **único item em aberto** |
| Catálogo e exportações | `src/app/imoveis/`, `lib/exportImoveis.ts`, `lib/exportImoveisPdf.ts` |
