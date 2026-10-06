// src/app/internacional/page.tsx
// Investimento no exterior: página curta, no padrão visual da /frontstay.
// Texto aprovado pelo Rodrigo em 06/10/2026.
import { BotaoPrimario, Label, PLAYFAIR } from "../../../components/frentes/Base";

const CONTATO = "/contact?area=internacional";
const OURO = "#d8ad45";

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
          FLÓRIDA CENTRAL
        </text>
        <text x="764" y="578" textAnchor="end" fill="#ffffff" fillOpacity="0.35" fontSize="10">
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
            <Label>Investimento no exterior · Flórida Central</Label>
            <h1
              className="mt-8 text-balance text-4xl font-semibold leading-[1.08] md:text-[3.4rem]"
              style={PLAYFAIR}
            >
              Invista no mercado imobiliário da Flórida Central{" "}
              <span className="text-[#9a7b1e]">com segurança e rentabilidade em dólar.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#46566e]">
              Se o seu objetivo é construir patrimônio em moeda forte ou
              garantir uma excelente rentabilidade em dólar, a Flórida Central
              é hoje um dos destinos mais estratégicos e promissores do mundo.
              Assessoramos você na construção de casas na região e oferecemos
              uma estrutura completa para tornar o seu projeto de investimento
              simples, seguro e rentável.
            </p>
            <div className="mt-10">
              <BotaoPrimario href={CONTATO}>Falar com a H55</BotaoPrimario>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0a2540]">
            <Elevacao />
          </div>
        </div>
      </section>

      {/* 2. Contato */}
      <section className="bg-[#0a2540] text-white">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-14">
          <h2
            className="text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
            style={PLAYFAIR}
          >
            Entendemos que investir no exterior exige confiança e clareza.
          </h2>
          <div>
            <p className="text-base leading-8 text-[#c5d0dd] md:text-lg">
              Por isso, caminhamos ao seu lado desde o primeiro instante até o
              momento do retorno do investimento.
            </p>
            <div className="mt-9">
              <BotaoPrimario href={CONTATO} dark>
                Agendar reunião
              </BotaoPrimario>
            </div>
            <p className="mt-10 text-xs leading-6 text-[#8196ad]">
              Esta página tem caráter institucional e não constitui oferta
              pública de investimento nem promessa de rentabilidade.
              Investimentos imobiliários no exterior envolvem riscos de obra,
              de mercado e de câmbio.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
