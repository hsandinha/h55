// src/app/internacional/page.tsx
// Investimento no exterior: tese de spec homes de alto padrão em Orlando (FL).
// Mesmo padrão visual da /frontstay. Sem números de retorno ou margem: só
// prazos, estrutura e referências de mercado.
import {
  BotaoPrimario,
  Label,
  LinkSecundario,
  PLAYFAIR,
} from "../../../components/frentes/Base";

const CONTATO = "/contact?area=internacional";
const OURO = "#d8ad45";

const numeros = [
  ["12\u00a0a\u00a018", "meses de ciclo, da compra do terreno à venda da casa"],
  ["70\u00a0a\u00a080%", "do custo da obra financiado por construction loan"],
  ["5", "bairros de Orlando na seleção de terrenos"],
  ["10 anos", "de garantia estrutural por seguradora, no sistema 2-10"],
];

const ciclo = [
  {
    prazo: "Antes de comprar",
    titulo: "Terreno",
    texto:
      "Originação off-market, por relacionamento com realtors locais, antes de o imóvel chegar ao Zillow ou ao MLS. Sondagem de solo e inspeção ambiental antes da assinatura.",
  },
  {
    prazo: "Cerca de 4 meses",
    titulo: "Aprovação",
    texto:
      "Projeto de arquitetura e licenças (permits) junto à prefeitura, com o cronograma de obra já desenhado em função da data de venda.",
  },
  {
    prazo: "8 a 10 meses",
    titulo: "Obra",
    texto:
      "Demolição da casa antiga e construção da nova, com 70\u00a0a\u00a080% do custo de obra financiado por banco.",
  },
  {
    prazo: "Maio a agosto",
    titulo: "Venda",
    texto:
      "A entrega mira a janela em que se concentram as compras de famílias, antes do início do ano letivo americano.",
  },
];

const controles = [
  {
    titulo: "Antes da compra",
    itens: [
      "Seleção off-market, fora da disputa de ofertas dos portais",
      "Sondagem de solo e escaneamento 3D do terreno (RTK) para prever fundação e aterro",
      "Mapeamento de árvores protegidas (live oaks) e de fauna (gopher tortoises) antes de assinar",
    ],
  },
  {
    titulo: "Estrutura e acabamento",
    itens: [
      "Subpiso estrutural no pavimento superior, sem os rangidos típicos das casas de madeira",
      "Paredes e tetos lisos em drywall nível 5, com iluminação embutida e difusores lineares de ar",
      "Pedras naturais (quartzito) na cozinha e nas áreas sociais, sem materiais sintéticos",
    ],
  },
  {
    titulo: "Projeto",
    itens: [
      "Arquitetura autoral e contemporânea",
      "Suíte master no térreo, preferência do comprador da Flórida Central",
      "Troca do solo e grama Zoysia: jardim formado em 90 dias, antes da venda",
    ],
  },
  {
    titulo: "Capital",
    itens: [
      "Construction loan de 70\u00a0a\u00a080% da obra, com prazo de 18 a 24 meses",
      "Reserva para seis meses de custo financeiro após a obra, para não vender sob pressão",
      "Bancos com atendimento dedicado ao investidor brasileiro",
    ],
  },
  {
    titulo: "Depois da venda",
    itens: [
      "Garantia 2-10: cobertura de sistemas nos primeiros anos e estrutural por dez anos, via seguradora",
      "Equipe de atendimento ao comprador para entrega e manutenção",
      "O investidor não recebe chamado do comprador final",
    ],
  },
];

const diferenciais = [
  {
    titulo: "O resultado nasce na compra",
    texto:
      "O ganho de uma spec home é definido na aquisição do terreno. Por isso a originação é off-market, longe do preço inflado e do leilão de ofertas do mercado aberto.",
  },
  {
    titulo: "Entre o volume e o sob medida",
    texto:
      "Acabamento acima das construtoras de volume e preço abaixo das casas ultraexclusivas. É a faixa em que a procura por qualidade supera a oferta.",
  },
  {
    titulo: "O calendário como ferramenta",
    texto:
      "Conclusão programada para o início do ano, o que mantém o imposto predial do ciclo sobre o valor do terreno, e venda na janela de maior liquidez.",
  },
];

const bairros = [
  {
    nome: "Winter Park",
    perfil: "A referência de Orlando",
    texto:
      "Maior preservação de capital e liquidez da região. O comprador paga prêmio por qualidade.",
  },
  {
    nome: "College Park",
    perfil: "Boutique em valorização",
    texto:
      "Pede design contemporâneo e acabamento refinado, para um público jovem de médicos e executivos.",
  },
  {
    nome: "Colonial Town e Audubon Park",
    perfil: "Escolas de excelência",
    texto:
      "Vizinhos ao centro, com demanda sustentada por distritos escolares entre os mais bem avaliados.",
  },
  {
    nome: "Baldwin Park",
    perfil: "Bairro planejado",
    texto:
      "Conveniência urbana, parques e segurança, para famílias que querem a rotina perto de casa.",
  },
];

/** Elevação frontal estilizada, no lugar da foto da abertura. Ilustrativa. */
function Elevacao() {
  const fiadas = Array.from({ length: 9 }, (_, i) => 354 + i * 14);
  const juntas = fiadas
    .map((y, r) =>
      Array.from({ length: 5 }, (_, k) => 128 + (r % 2) * 17 + k * 34)
        .filter((x) => x < 290)
        .map((x) => `M${x} ${y - 14}V${y}`)
        .join(""),
    )
    .join("");
  const ripas = Array.from({ length: 12 }, (_, i) => `M${496 + i * 9} 228V326`).join("");
  const hachura = Array.from({ length: 45 }, (_, i) => `M${44 + i * 16} 492l12 -12`).join("");
  const niveis: [number, string][] = [
    [480, "±0,00"],
    [326, "+3,60"],
    [196, "+6,90"],
  ];

  return (
    <svg
      viewBox="0 0 800 600"
      role="img"
      aria-label="Ilustração: elevação frontal de uma residência contemporânea"
      className="block h-full w-full"
    >
      <defs>
        <pattern id="intl-grade" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#ffffff" strokeOpacity="0.05" />
        </pattern>
      </defs>
      <rect width="800" height="600" fill="#0a2540" />
      <rect width="800" height="600" fill="url(#intl-grade)" />

      <g fill="none" stroke={OURO} strokeWidth="1.5" strokeLinejoin="round">
        {/* terreno */}
        <path d="M36 480H764" />
        <path d={hachura} strokeOpacity="0.25" strokeWidth="1" />

        {/* volumes */}
        <rect x="120" y="340" width="520" height="140" fill="#0d2d4f" />
        <rect x="280" y="212" width="336" height="114" fill="#0d2d4f" />
        <rect x="96" y="326" width="568" height="14" fill="#0a2540" />
        <rect x="258" y="196" width="380" height="16" fill="#0a2540" />

        {/* pedra */}
        <path
          d={fiadas.map((y) => `M120 ${y}H290`).join("") + juntas}
          strokeOpacity="0.28"
          strokeWidth="1"
        />
        <path d="M290 340V480" />

        {/* vidros iluminados */}
        <rect x="310" y="358" width="220" height="122" fill={OURO} fillOpacity="0.13" />
        <path d="M365 358V480M420 358V480M475 358V480" strokeWidth="1" />
        <path d="M447 358V380" strokeWidth="1" strokeOpacity="0.7" />
        <circle cx="447" cy="384" r="3.5" fill={OURO} stroke="none" />
        <rect x="298" y="228" width="176" height="98" fill={OURO} fillOpacity="0.13" />
        <path d="M357 228V326M416 228V326" strokeWidth="1" />

        {/* ripado e porta */}
        <path d={ripas} strokeOpacity="0.4" strokeWidth="1" />
        <rect x="556" y="372" width="46" height="108" />
        <path d="M593 418V436" strokeWidth="2" />

        {/* paisagismo */}
        <path
          d="M128 480a14 12 0 0 1 28 0M160 480a18 15 0 0 1 36 0M200 480a12 10 0 0 1 24 0M232 480a16 13 0 0 1 32 0"
          strokeOpacity="0.55"
          strokeWidth="1"
        />
        <path
          d="M676 398C664 372 684 346 710 352C716 326 756 324 764 350C788 358 790 394 768 402C766 422 736 428 722 414C706 428 680 422 676 398Z"
          fill="#0a2540"
          strokeOpacity="0.6"
          strokeWidth="1"
        />
        <path d="M716 480L718 440L710 420M718 440L726 414M722 480V446" strokeOpacity="0.7" strokeWidth="1" />

        {/* cota */}
        <g strokeOpacity="0.55" strokeWidth="1">
          <path d="M258 160H638M252 166L264 154M632 166L644 154" />
          <path d="M258 166V190M638 166V190" strokeDasharray="3 4" />
        </g>

        {/* níveis */}
        {niveis.map(([y]) => (
          <g key={y} strokeWidth="1">
            <path d={`M36 ${y}H96`} strokeOpacity="0.35" strokeDasharray="3 5" />
            <path d={`M44 ${y - 9}L50 ${y}L56 ${y - 9}Z`} strokeOpacity="0.8" />
          </g>
        ))}

        {/* norte */}
        <circle cx="716" cy="100" r="18" strokeOpacity="0.5" strokeWidth="1" />
      </g>
      <path d="M716 78L722 104L716 99L710 104Z" fill={OURO} />

      <g style={{ fontFamily: "var(--font-inter)" }} fontSize="11" letterSpacing="2">
        <text x="448" y="150" textAnchor="middle" fill={OURO} fillOpacity="0.75">
          15,20 m
        </text>
        {niveis.map(([y, t]) => (
          <text key={t} x="60" y={y - 4} fill={OURO} fillOpacity="0.75">
            {t}
          </text>
        ))}
        <text x="716" y="68" textAnchor="middle" fill={OURO}>
          N
        </text>
        <path d="M36 528H764" stroke="#ffffff" strokeOpacity="0.15" />
        <text x="36" y="556" fill={OURO}>
          ELEVAÇÃO FRONTAL · ESC. 1:100
        </text>
        <text x="764" y="556" textAnchor="end" fill="#ffffff" fillOpacity="0.6">
          ORLANDO, FLÓRIDA
        </text>
        <text x="764" y="578" textAnchor="end" fill="#ffffff" fillOpacity="0.35" fontSize="10">
          IMAGEM ILUSTRATIVA
        </text>
      </g>
    </svg>
  );
}

/** Planta do térreo estilizada, ao lado da lista de controles. Ilustrativa. */
function Planta() {
  const NAVY = "#0a2540";
  const comodos: [number, number, string][] = [
    [130, 214, "COZINHA"],
    [130, 334, "GARAGEM"],
    [265, 226, "ESTAR E JANTAR"],
    [265, 326, "ENTRADA"],
    [372, 340, "CLOSET"],
    [447, 340, "BANHO"],
    [305, 86, "PISCINA"],
    [305, 138, "LANAI"],
  ];

  return (
    <svg
      viewBox="0 0 600 490"
      role="img"
      aria-label="Ilustração: planta do térreo com suíte master, estar, cozinha, garagem e piscina"
      className="block h-full w-full"
    >
      <defs>
        <pattern id="intl-grade-planta" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#ffffff" strokeOpacity="0.05" />
        </pattern>
      </defs>
      <rect width="600" height="490" fill={NAVY} />
      <rect width="600" height="490" fill="url(#intl-grade-planta)" />

      <g fill="none" stroke={OURO} strokeLinejoin="round">
        {/* lote, piscina e lanai */}
        <rect x="28" y="28" width="544" height="392" strokeOpacity="0.25" strokeDasharray="4 6" />
        <rect x="210" y="56" width="190" height="52" fill={OURO} fillOpacity="0.12" strokeWidth="1.5" />
        <rect x="190" y="118" width="230" height="32" strokeOpacity="0.45" strokeDasharray="3 4" />

        {/* casa */}
        <rect x="70" y="150" width="420" height="240" fill="#0d2d4f" strokeWidth="3" />
        <rect x="340" y="150" width="150" height="130" fill={OURO} fillOpacity="0.1" stroke="none" />
        <path
          d="M70 270H190M190 210V390M190 300H240M280 300H340M340 150V390M340 280H490M405 280V390"
          strokeWidth="1.5"
        />

        {/* vãos: vidro para o lanai e a piscina, portas */}
        <path d="M200 150H330M360 150H470M88 390H172M250 390H290M340 232V262" stroke={NAVY} strokeWidth="5" />
        <path d="M200 148H330M200 152H330M360 148H470M360 152H470" strokeWidth="0.8" />
        <path d="M88 390H172" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M250 390V350A40 40 0 0 1 290 390M340 232H370A30 30 0 0 1 340 262" strokeWidth="1" strokeOpacity="0.7" />

        {/* acessos */}
        <path d="M88 392V420M172 392V420M258 392V420M282 392V420" strokeOpacity="0.35" strokeWidth="1" />

        {/* árvores preservadas */}
        <circle cx="528" cy="110" r="34" strokeOpacity="0.6" strokeDasharray="3 4" strokeWidth="1" />
        <path d="M522 110H534M528 104V116" strokeWidth="1" />
        <circle cx="104" cy="88" r="26" strokeOpacity="0.45" strokeDasharray="3 4" strokeWidth="1" />
        <path d="M98 88H110M104 82V94" strokeWidth="1" strokeOpacity="0.7" />

        {/* norte */}
        <circle cx="534" cy="372" r="14" strokeOpacity="0.5" strokeWidth="1" />
      </g>
      <path d="M534 355L539 376L534 372L529 376Z" fill={OURO} />

      <g style={{ fontFamily: "var(--font-inter)" }} fontSize="10" letterSpacing="1.5" textAnchor="middle">
        {comodos.map(([x, y, t]) => (
          <text key={t} x={x} y={y} fill="#ffffff" fillOpacity="0.7">
            {t}
          </text>
        ))}
        <text x="415" y="208" fill={OURO} fontSize="11">
          SUÍTE MASTER
        </text>
        <text x="415" y="224" fill={OURO} fillOpacity="0.7">
          NO TÉRREO
        </text>
        <text x="528" y="162" fill={OURO} fillOpacity="0.7" fontSize="9">
          LIVE OAK
        </text>
        <text x="534" y="346" fill={OURO} fontSize="10">
          N
        </text>
        <path d="M28 446H572" stroke="#ffffff" strokeOpacity="0.15" />
        <text x="28" y="472" fill={OURO} textAnchor="start" letterSpacing="2" fontSize="11">
          PLANTA DO TÉRREO · ESC. 1:200
        </text>
        <text x="572" y="472" fill="#ffffff" fillOpacity="0.35" textAnchor="end">
          IMAGEM ILUSTRATIVA
        </text>
      </g>
    </svg>
  );
}

export default function InternacionalPage() {
  return (
    <div className="[font-variant-numeric:lining-nums]">
      {/* 1. Abertura */}
      <section className="bg-[#f7f3ea] text-[#0a2540]">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-14">
          <div>
            <Label>Investimento no exterior · Orlando, Flórida</Label>
            <h1
              className="mt-8 text-balance text-4xl font-semibold leading-[1.08] md:text-[3.4rem]"
              style={PLAYFAIR}
            >
              Patrimônio em dólar,{" "}
              <span className="text-[#9a7b1e]">nos bairros mais disputados de Orlando.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#46566e]">
              A H55 conecta investidores brasileiros ao desenvolvimento de
              residências de alto padrão na Flórida Central. O modelo compra
              casas antigas em bairros consolidados, demole e constrói uma casa
              nova, pronta para morar, para venda no mercado americano.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <BotaoPrimario href={CONTATO}>Agendar reunião</BotaoPrimario>
              <LinkSecundario href="#ciclo">Como funciona o ciclo</LinkSecundario>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0a2540]">
            <Elevacao />
          </div>
        </div>
      </section>

      {/* 2. A tese */}
      <section className="bg-white text-[#0a2540]">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-2 lg:gap-20 lg:px-14">
          <div>
            <Label>A tese</Label>
            <h2
              className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
              style={PLAYFAIR}
            >
              Construir novo onde não existe mais terreno vazio.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#46566e] md:text-lg">
              Nos bairros nobres de Orlando quase não há lotes livres. Quem quer
              morar ali compra uma casa de 30 a 50 anos ou espera. A tese ocupa
              esse espaço com spec homes, casas construídas para venda: adquire
              o imóvel antigo, constrói uma residência com acabamento de casa
              sob medida e vende pronta para famílias de alta renda, muitas
              delas vindas de Nova York e da Califórnia.
            </p>
          </div>

          <dl className="grid grid-cols-2 self-end border-l border-t border-[#0a2540]/12">
            {numeros.map(([valor, texto]) => (
              <div key={texto} className="border-b border-r border-[#0a2540]/12 p-6 md:p-8">
                <dt
                  className="text-3xl font-semibold leading-none text-[#0a2540] md:text-[2.6rem]"
                  style={PLAYFAIR}
                >
                  {valor}
                </dt>
                <dd className="mt-3 text-sm leading-6 text-[#5b6a80]">{texto}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 3. O ciclo */}
      <section id="ciclo" className="scroll-mt-20 bg-[#f7f3ea] text-[#0a2540]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
          <Label>O ciclo</Label>
          <h2
            className="mt-5 max-w-2xl text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
            style={PLAYFAIR}
          >
            Do terreno à venda, cada etapa com prazo marcado.
          </h2>

          <ol className="mt-14 grid gap-px bg-[#0a2540]/12 sm:grid-cols-2 lg:grid-cols-4">
            {ciclo.map((e, i) => {
              const venda = i === ciclo.length - 1;
              return (
                <li key={e.titulo} className="flex flex-col bg-[#f7f3ea] p-7 md:p-8">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-[#9a7b1e]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={
                        venda
                          ? "bg-[#0a2540] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white"
                          : "border border-[#b8860b] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#9a7b1e]"
                      }
                    >
                      {e.prazo}
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold leading-tight" style={PLAYFAIR}>
                    {e.titulo}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-7 text-[#46566e]">{e.texto}</p>
                </li>
              );
            })}
          </ol>

          <p className="mt-10 max-w-2xl text-base leading-8 text-[#46566e]">
            O investidor acompanha por relatórios de obra e de venda, sem lidar
            com fornecedor, banco ou comprador.
          </p>
        </div>
      </section>

      {/* 4. Controles */}
      <section id="controles" className="scroll-mt-20 bg-white text-[#0a2540]">
        <div className="mx-auto grid max-w-[1240px] gap-14 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Label>Engenharia e risco</Label>
            <h2
              className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
              style={PLAYFAIR}
            >
              O que separa uma casa de luxo de uma casa cara.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-[#46566e]">
              O comprador de alto padrão quer mudar sem esperar uma obra, mas
              não aceita o padrão médio da construção americana. Cada etapa tem
              um controle definido, da compra do terreno ao pós-venda.
            </p>
            <div className="relative mt-10 hidden aspect-[600/490] w-full overflow-hidden bg-[#0a2540] lg:block">
              <Planta />
            </div>
          </div>

          <ol className="border-t border-[#0a2540]/15">
            {controles.map((g, i) => (
              <li
                key={g.titulo}
                className="grid gap-4 border-b border-[#0a2540]/15 py-8 sm:grid-cols-[3.5rem_1fr] md:py-10"
              >
                <span className="text-sm font-semibold text-[#9a7b1e]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold leading-tight" style={PLAYFAIR}>
                    {g.titulo}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {g.itens.map((item) => (
                      <li key={item} className="flex gap-3 text-base leading-7 text-[#46566e]">
                        <span aria-hidden className="mt-[0.85rem] h-px w-4 shrink-0 bg-[#b8860b]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Diferenciais */}
      <section className="bg-[#0a2540] text-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-10 md:py-24 lg:px-14">
          <Label dark>Por que esta tese</Label>
          <div className="mt-10 grid gap-px bg-white/12 md:grid-cols-3">
            {diferenciais.map((d) => (
              <div key={d.titulo} className="bg-[#0a2540] py-6 md:px-8 md:py-2 md:first:pl-0">
                <h3 className="text-2xl font-semibold leading-tight" style={PLAYFAIR}>
                  {d.titulo}
                </h3>
                <p className="mt-4 text-[0.95rem] leading-7 text-[#c5d0dd]">{d.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bairros */}
      <section className="bg-[#f7f3ea] text-[#0a2540]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Label>Microlocalizações</Label>
              <h2
                className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
                style={PLAYFAIR}
              >
                Os bairros da tese
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#46566e]">
              A escolha do terreno decide o resultado. A seleção se concentra em
              bairros consolidados, com demanda que não depende de ciclo de
              lançamento.
            </p>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bairros.map((b, i) => (
              <li key={b.nome} className="flex flex-col border border-[#0a2540]/12 bg-white p-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9a7b1e]">
                    Orlando, FL
                  </p>
                  <span className="text-sm font-semibold text-[#9a7b1e]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-10 text-xl font-semibold leading-tight" style={PLAYFAIR}>
                  {b.nome}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-[#0a2540]">{b.perfil}</p>
                <p className="mt-3 text-sm leading-6 text-[#5b6a80]">{b.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. H55 + contato */}
      <section className="bg-[#0a2540] text-white">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-14">
          <h2
            className="text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
            style={PLAYFAIR}
          >
            Um projeto em Orlando, com interlocução em Belo Horizonte.
          </h2>
          <div>
            <p className="text-base leading-8 text-[#c5d0dd] md:text-lg">
              A H55 apresenta a tese, o projeto e a estrutura de cada
              oportunidade em reunião reservada, e acompanha o investidor
              durante todo o ciclo, da aquisição do terreno à venda da casa.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <BotaoPrimario href={CONTATO} dark>
                Agendar reunião
              </BotaoPrimario>
              <LinkSecundario href="/equity" dark>
                Private equity no Brasil
              </LinkSecundario>
            </div>
            <p className="mt-10 text-xs leading-6 text-[#8196ad]">
              Esta página tem caráter institucional e não constitui oferta
              pública de investimento nem promessa de rentabilidade. Prazos e
              percentuais são referências de mercado e variam conforme o
              projeto. Investimentos imobiliários no exterior envolvem riscos de
              obra, de mercado e de câmbio.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
