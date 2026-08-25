# Plano: reestruturar o site por frente

Documento de decisão, nada implementado. Base: conversa de 24/08/2026 e o site como está no ar hoje.

**Revisão 2:** três frentes, não quatro. O bloco do comprador passa a viver dentro da coordenação de imóveis selecionados.

---

## 1. O diagnóstico

**As vozes estão misturadas na mesma frase.** Exemplos literais do que está publicado:

- `/coordenacao`: "A H55 funciona como a inteligência central **do proprietário e da incorporadora**"
- `/services`: "**O proprietário ou a incorporadora** entrega a operação comercial para uma coordenação única"

Quem lê é uma pessoa só, com um problema só. O dono de um apartamento na Sergipe não se reconhece em "incorporadora", e o diretor comercial da Ycon não se reconhece em "o seu imóvel". Escrever para os dois ao mesmo tempo faz o texto não ser de ninguém.

**Coordenação virou marca paralela em vez de serviço.** Hoje ela tem página própria no menu, no mesmo nível de Imóveis e Serviços. Isso inflou uma frente e achatou as outras.

**Private equity não existe no site.** Sendo que o conteúdo já está escrito, no lugar errado: a seção "Soluções Financeiras Avançadas" dentro de Sobre Nós, com Equity Imobiliário, Estruturação de Dívida e Permutas Estratégicas. E a narrativa de origem da H55 (nascemos atendendo um investidor com carteira e apetite para equity e revenda) é exatamente a credencial dessa frente, hoje usada só como história.

**Serviços fala 100% com quem compra.** A frente 01 é o concierge inteiro. As outras entraram como blocos.

---

## 2. As frentes

Três, como você definiu. A representação do comprador deixa de ser candidata a frente e vira parte da coordenação de imóveis selecionados.

| Frente | Cliente | O que vende |
|---|---|---|
| Coordenação de empreendimentos | Incorporadora, loteadora | Velocidade de vendas e VGV |
| Coordenação de imóveis selecionados (avulsos) | Proprietário de um lado, comprador do outro | Uma carteira curada e uma venda conduzida do início ao fim |
| Private equity | Investidor com capital, family office | Participação no resultado da incorporação |

**O que a decisão implica.** A frente 2 passa a ter dois interlocutores, e é justamente essa a armadilha que originou esta revisão. A saída é ela ter um objeto único, o imóvel selecionado, e não dois públicos: a H55 seleciona, prepara, documenta e conduz a venda daquele imóvel. O proprietário entrega a operação, o comprador encontra um imóvel já auditado. Uma frase para cada, nunca uma frase para os dois.

### O destino dos seis cards de hoje

| Card em /services | Vai para |
|---|---|
| Due diligence completa | Frente 2, direto. Vira o argumento central: o imóvel entra na carteira auditado |
| Negociação estratégica | Frente 2, direto |
| Vistoria técnica de recebimento | Frente 2, direto |
| Acompanhamento completo | Frente 2, direto |
| Busca ativa de imóveis | Só faz sentido para comprador. Vira o bloco "para quem procura" dentro da frente 2 |
| Consultoria personalizada | Idem, no mesmo bloco |

**A regra do conflito fica mais necessária, não menos.** Com proprietário e comprador na mesma página, "nunca pelas duas pontas do mesmo negócio" precisa aparecer ali dentro, escrita como regra de operação e não como slogan: quando a H55 coordena a venda de um imóvel, ela não representa quem está comprando aquele imóvel.

## 3. Voz de cada frente

O que muda não é o layout, é quem está do outro lado.

### 3.1 Coordenação de empreendimentos
- **Fala com:** diretor comercial, sócio incorporador
- **Dor:** tabela furada, imobiliárias desalinhadas, VGV parado, contrato e repasse travando a obra
- **Vocabulário:** VGV, velocidade de vendas, convenção de vendas, regra de comissionamento, tabela, mapa chave, funil, CCV, repasse, correspondente bancário
- **Prova:** URB Cidade Central, com mapa chave, conferência de contrato e anexo de corretagem, assinatura digital e imobiliárias parceiras operando na mesma regra
- **Tom:** operacional e numérico. Ele quer saber como você controla, não como você se sente.
- **CTA:** apresentar o empreendimento
- **Não dizer:** "o seu imóvel"

### 3.2 Coordenação de imóveis selecionados (avulsos)
- **Fala com:** proprietário pessoa física, investidor com carteira, herdeiro resolvendo espólio. Em bloco separado da mesma página, quem procura imóvel
- **Dor:** chave espalhada em dez imobiliárias, anúncio ruim, preço divergente, corretor que some, cartório e certidão, ninguém responde por nada
- **Vocabulário:** representação, curadoria de imobiliárias, matrícula, certidões, proposta qualificada, um interlocutor
- **Prova:** Sergipe, Três Vales, Oceana Golf, Quintas do Sol, com material próprio (fotos, drone, tour virtual, página do imóvel)
- **Tom:** alívio e controle. Ele quer parar de administrar gente.
- **CTA:** quero vender o meu imóvel
- **Não dizer:** VGV, lançamento, estande

### 3.3 Private equity
- **Fala com:** investidor com capital, family office
- **Dor:** onde alocar sem virar sócio operacional de uma obra, ticket alto para comprar pronto, quer o resultado da incorporação e não o metro quadrado
- **Vocabulário:** participação societária, SPE, tese, ciclo do empreendimento, desinvestimento, permuta, estruturação de dívida
- **Prova:** a origem da H55 e as parcerias com incorporadoras
- **Tom:** sóbrio, técnico, discreto. Nada de entusiasmo.
- **CTA:** conversar sobre teses disponíveis
- **Atenção:** ver risco no item 7

### 3.4 O bloco do comprador, dentro da frente 2
Não é frente e não é página. É uma seção da coordenação de imóveis selecionados, com voz própria e separada por um respiro visual claro: "para quem procura". Reaproveita busca ativa e consultoria personalizada, mais a regra do conflito de interesse. O resto do conteúdo do comprador que existe hoje se dissolve nos serviços da frente 2.

---

## 4. Arquitetura proposta

Menu com os mesmos cinco itens de hoje, sem "Coordenação" solto:

```
Sobre Nós   Imóveis   Bairros   Serviços   Contato
                                   |
                                   +-- /empreendimentos   (incorporadora)
                                   +-- /selecionados      (proprietário e comprador)
                                   +-- /equity            (investidor)
```

- **/services vira índice**, não conteúdo. Uma pergunta ("o que você precisa fazer?") e três portas, cada uma com uma frase que faz a pessoa se reconhecer. Zero mistura de voz: a separação acontece aqui.
- **URLs curtas e de nível raiz**, porque vocês mandam link por WhatsApp o dia inteiro.
- **/coordenacao deixa de existir** e passa a redirecionar para /services. O Rodrigo já mandou esse link para gente, então redirect é obrigatório, não opcional.
- Header volta a respirar: some um item do menu, que é o que estava apertando entre 1024 e 1280px.

---

## 5. Página por página

| Página | O que acontece | De onde vem o conteúdo |
|---|---|---|
| `/services` (índice) | Reescrita: pergunta de entrada e três portas | Nova, curta |
| `/empreendimentos` | Página nova, voz de incorporadora | Metade de /coordenacao: cenário "lançamento", pilares, texto aprovado dos compactos |
| `/selecionados` | Página nova, a maior das três | Outra metade de /coordenacao (ativo pontual, representação exclusiva, remuneração) mais os 6 cards e o processo de 6 etapas de /services |
| `/equity` | Página nova | "Soluções Financeiras Avançadas" que sai de Sobre Nós, mais a narrativa de origem |
| `/about` | Encolhe e volta a ser história | Perde as soluções financeiras para /equity |
| `/` (home) | Ganha uma seção de roteamento por público depois do hero | Nova, três portas iguais |
| `/coordenacao` | Redirect 301 para /services | - |

O comparativo "ativo pontual x lançamento" **deixa de existir como tabela**. Ele foi útil enquanto as duas coisas dividiam a mesma página. Com páginas separadas, cada uma só afirma o que faz, sem se comparar com a irmã.

---

## 6. Ordem de execução

| Etapa | O que entra | Esforço |
|---|---|---|
| 1 | `/empreendimentos` e `/selecionados` a partir de /coordenacao, com as vozes separadas, mais o redirect | meio dia |
| 2 | `/services` vira índice e o conteúdo do comprador migra para dentro de `/selecionados` | meio dia |
| 3 | `/equity` e limpeza de Sobre Nós | meio dia, depois da decisão 2 |
| 4 | Seção de roteamento na home, menu, sitemap e metadata por página | meio dia |

Etapas 1 e 2 podem ir ao ar juntas. A 3 depende da decisão sobre exposição pública do equity. A 4 é a que faz o Instagram e o tapume caírem na porta certa.

---

## 7. Riscos e decisões

**Decisão 1: resolvida.** São três frentes. O comprador vira bloco dentro da coordenação de imóveis selecionados.

**Decisão 2:** o private equity vai ao ar como página pública ou fica como material sob demanda, entregue em reunião? Página pública dá autoridade e capta investidor, mas expõe a frente que mais atrai atenção indesejada.

**Decisão 3:** nome da terceira frente no site. "Private equity" é claro para investidor e opaco para o resto. Alternativas: "Participação em incorporações", "Equity imobiliário", "Investimento estruturado".

**Risco regulatório:** captar investidor para participação societária em incorporação tem regra. Uma página pública que prometa rentabilidade pode ser lida como oferta de valor mobiliário. Recomendação: página institucional, sem número de retorno, sem "a partir de X% ao ano", com CTA de conversa. Vale passar pelo jurídico da PSAC antes de publicar.

**Risco de credibilidade que já está no ar:** a home exibe "18% ROI médio entregue" e "+32% valorização média". Com uma frente de equity no site, esses números deixam de ser enfeite e viram promessa. Ou se sustentam com base real, ou saem.

**O que não pode se perder na mudança:** o bloco "nunca pelas duas pontas do mesmo negócio". Com proprietário e comprador convivendo na frente 2, ele deixa de ser slogan e vira regra de operação, escrita dentro daquela página.

**Decisão 4 (nova):** o nome da frente 2 no menu e na URL. "Imóveis selecionados" é bonito e diz curadoria, mas não diz que a H55 vende para o proprietário. "Coordenação de vendas" diz, e perde a curadoria. Vale decidir antes da etapa 1, porque define a URL.

---

## 8. O bloco das duas colunas vira o mapa das três frentes

Ele não sai. Passa de dois painéis para três, e é ele que faz o papel de índice: a pessoa se reconhece em um dos três e entra. Os textos que o Rodrigo aprovou em 02/08 ficam preservados nos painéis 1 e 2.

### Painel 01 · Incorporadoras
**Coordenação de empreendimentos**
_Maximizando a rentabilidade do seu empreendimento com inteligência imobiliária._

A H55 lidera a estratégia e a coordenação de vendas do seu empreendimento. Conectamos incorporadoras e investidores através de uma gestão comercial estruturada, eficiente e orientada a resultados.

- **Estratégia comercial integrada:** alinhamento de preço, posicionamento e canais de distribuição.
- **Gestão de parcerias e corretores:** treinamento, engajamento e acompanhamento ativo do funil de vendas.
- **Governança do contrato:** conferência, assinatura digital e repasse, sem atraso no caixa da obra.

_Acelere a liquidez do seu lançamento com quem responde pelo processo inteiro._

### Painel 02 · Proprietários
**Coordenação de imóveis selecionados**
_A H55 cuida de tudo. Você conversa apenas com um parceiro._

Distribuir a chave do imóvel para dezenas de imobiliárias gera desencontro de informações, desvalorização do patrimônio e dor de cabeça. Assumimos a captação, a documentação e a coordenação centralizada da venda.

- **Um único ponto de contato:** a H55 representa você perante todo o mercado imobiliário.
- **Estratégia multicanal sem desordem:** coordenamos as melhores imobiliárias e corretores parceiros sem que você precise gerenciar ninguém.
- **Imóvel auditado antes de anunciar:** matrícula, certidões e vistoria conferidas, para a proposta não morrer no cartório.

_Menos desgaste, mais controle e muito mais eficiência na venda do seu imóvel._

### Painel 03 · Investidores
**Private equity imobiliário**
_Participar do resultado da incorporação, não do metro quadrado._

Estruturamos a entrada do investidor em incorporações, da leitura da tese até a saída. Foi assim que a H55 nasceu: atendendo um investidor com carteira e apetite para equity e revenda de ativos prontos.

- **Leitura da tese:** viabilidade, ciclo do empreendimento e cenário de saída.
- **Estruturação da entrada:** participação societária, permuta ou estruturação de dívida.
- **Acompanhamento até o desinvestimento.**

_Converse com a coordenação sobre as teses em análise._

**Notas de execução:** o painel 3 não traz número de rentabilidade, pelo motivo do item 7. Em desktop os três ficam lado a lado com o mesmo tamanho; em telas médias, dois em cima e um embaixo ocupando a largura; no celular, empilhados. Cada painel leva para a sua página.
