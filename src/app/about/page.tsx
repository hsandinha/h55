// src/app/about/page.tsx
import Link from "next/link";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";

const PLAYFAIR = { fontFamily: "var(--font-playfair-display)" };

const pilares = [
  {
    titulo: "Nossa missão",
    paragrafos: [
      "Gerar maior liquidez e rentabilidade para incorporadores, loteadores, proprietários e investidores.",
    ],
  },
  {
    titulo: "Nossa visão",
    paragrafos: [
      "Ser a referência no mercado imobiliário como a principal assessoria independente para nossos clientes, reconhecida pela expertise, confiabilidade e geração de valor em cada transação.",
    ],
  },
  {
    titulo: "Por que H55?",
    paragrafos: [
      "No modelo convencional, o proprietário lista o imóvel em imobiliárias e aguarda. O trabalho estratégico da venda fica sob sua responsabilidade ou não é feito.",
      "Resultado? Processo arrastado e baixa liquidez.",
      "Enquanto as imobiliárias focam em vender, a H55 assume a inteligência do processo: gerencia o valor do patrimônio para que a venda saia no menor tempo e pelo melhor valor.",
    ],
  },
];

const movimentos = [
  {
    titulo: "Estratégia",
    texto:
      "Cada trabalho começa pela compreensão do ativo, do objetivo e das partes envolvidas. A partir disso, definimos a direção comercial e o escopo da coordenação.",
  },
  {
    titulo: "Coordenação",
    texto:
      "Centralizamos informações, parceiros, visitas, documentos, contratos e acompanhamentos para que o processo avance de forma organizada.",
  },
  {
    titulo: "Especialização",
    texto:
      "Atuamos em três áreas: lançamentos imobiliários, imóveis selecionados e private equity. Cada uma possui público e abordagem próprios.",
  },
];

const valores = [
  {
    titulo: "Foco no cliente",
    texto:
      "Nossas ações são sempre direcionadas para entender e satisfazer as necessidades de quem contrata a H55, colocando seus interesses acima de tudo.",
  },
  {
    titulo: "Imparcialidade e transparência",
    texto:
      "Atuamos sem conflitos de interesse, garantindo que o cliente receba as informações mais claras e objetivas para tomar a melhor decisão.",
  },
  {
    titulo: "Expertise de mercado",
    texto:
      "Conhecimento aprofundado e atualizado sobre o mercado imobiliário, transformado em vantagem para quem nos contrata.",
  },
  {
    titulo: "Segurança e confiança",
    texto:
      "Nosso compromisso é proporcionar um processo de compra, venda ou investimento seguro, construindo um relacionamento duradouro.",
  },
  {
    titulo: "Inovação",
    texto:
      "Buscamos constantemente novas formas de aprimorar a assessoria, com as melhores ferramentas e abordagens do mercado.",
  },
];

const Label = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
  <p
    className={`text-[0.7rem] font-semibold uppercase tracking-[0.24em] ${
      dark ? "text-[#d8ad45]" : "text-[#9a7b1e]"
    }`}
  >
    {children}
  </p>
);

export default function AboutPage() {
  return (
    <div className="[font-variant-numeric:lining-nums]">
      {/* 1. Abertura */}
      <section className="bg-[#f7f3ea] text-[#0a2540]">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-14">
          <div>
            <Label>Sobre a H55</Label>
            <h1
              className="mt-8 text-4xl font-semibold leading-[1.08] md:text-[3.1rem]"
              style={PLAYFAIR}
            >
              Estratégia e coordenação{" "}
              <span className="text-[#9a7b1e] lg:block">para negócios imobiliários.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#46566e]">
              A H55 coordena o negócio imobiliário de ponta a ponta: lançamentos,
              imóveis selecionados e private equity. Representamos quem compra e
              investe, com curadoria criteriosa, acesso a ativos off-market e
              alinhamento total de interesses.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[#0a2540] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#12375c]"
              >
                Falar com a coordenação
                <LuArrowRight size={16} />
              </Link>
              <a
                href="#origem"
                className="inline-flex items-center justify-center gap-2 px-2 py-3.5 text-sm font-semibold text-[#0a2540] underline decoration-[#b8860b] decoration-2 underline-offset-8 transition hover:text-[#9a7b1e]"
              >
                Nossa história
              </a>
            </div>
          </div>

          <div className="hidden items-center justify-end lg:flex">
            <Image
              src="/images/h55-marca.png"
              alt="H55 Negócios Imobiliários"
              width={1032}
              height={917}
              priority
              className="h-auto w-full max-w-[300px]"
            />
          </div>
        </div>
      </section>

      {/* 2. Origem */}
      <section id="origem" className="scroll-mt-20 bg-white text-[#0a2540]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Label>Nossa origem</Label>
              <h2
                className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
                style={PLAYFAIR}
              >
                Nascemos para atender um único investidor.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#46566e] md:text-lg">
                Nossa história começou de forma singular: atender com excelência
                um único investidor, detentor de uma robusta carteira de imóveis
                e apetite para novas oportunidades em equity e revenda de ativos
                prontos.
              </p>
            </div>
            <div className="space-y-6 self-end text-base leading-8 text-[#46566e]">
              <p>
                Essa relação exclusiva nos ensinou que o mercado imobiliário
                carece de algo essencial: uma representação estratégica e
                personalizada, voltada apenas aos interesses de quem compra e
                investe. A partir dessa jornada inicial, percebemos que o mercado
                carecia de uma atuação realmente personalizada, com foco em
                resultado financeiro, economia de tempo e tomada de decisão
                estratégica.
              </p>
              <p>
                Nosso compromisso é representar, com excelência, quem deseja
                comprar bem, investir melhor e encontrar oportunidades sólidas no
                mercado imobiliário. Atuamos lado a lado com nossos clientes,
                oferecendo uma curadoria criteriosa, acesso a ativos off-market e
                inteligência de mercado, sempre com discrição, agilidade e
                alinhamento total de interesses.
              </p>
            </div>
          </div>

          <div className="mt-16 border-t border-[#0a2540]/15 pt-12">
            <p
              className="max-w-3xl text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
              style={PLAYFAIR}
            >
              Afinal, não vendemos imóveis.{" "}
              <span className="text-[#9a7b1e]">Representamos pessoas.</span>
            </p>
          </div>
        </div>
      </section>

      {/* 3. Missão, visão, por quê */}
      <section className="bg-[#f7f3ea] text-[#0a2540]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
          <Label>O que nos move</Label>
          <h2
            className="mt-5 max-w-2xl text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
            style={PLAYFAIR}
          >
            Missão, visão e o motivo de existirmos.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#46566e]">
            Três definições que orientam cada uma das áreas em que atuamos.
          </p>

          <div className="mt-14 grid gap-px bg-[#0a2540]/12 md:grid-cols-3">
            {pilares.map((p, i) => (
              <div key={p.titulo} className="flex flex-col bg-[#f7f3ea] p-7 md:p-8">
                <span className="text-sm font-semibold text-[#9a7b1e]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-2xl font-semibold leading-tight" style={PLAYFAIR}>
                  {p.titulo}
                </h3>
                <div className="mt-3 space-y-4">
                  {p.paragrafos.map((t) => (
                    <p key={t} className="text-[0.95rem] leading-7 text-[#46566e]">
                      {t}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Como operamos */}
      <section className="bg-white text-[#0a2540]">
        <div className="mx-auto grid max-w-[1240px] gap-14 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Label>Como operamos</Label>
            <h2
              className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
              style={PLAYFAIR}
            >
              Uma atuação estruturada em três movimentos.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-[#46566e]">
              Diferentes objetivos exigem abordagens específicas.{" "}
              <span className="text-[#9a7b1e]">A coordenação conecta todas as etapas.</span>
            </p>
          </div>

          <ol className="border-t border-[#0a2540]/15">
            {movimentos.map((m, i) => (
              <li
                key={m.titulo}
                className="grid gap-4 border-b border-[#0a2540]/15 py-8 sm:grid-cols-[3.5rem_1fr] md:py-10"
              >
                <span className="text-sm font-semibold text-[#9a7b1e]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold leading-tight" style={PLAYFAIR}>
                    {m.titulo}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#46566e]">{m.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Valores */}
      <section className="bg-[#0a2540] text-white">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Label dark>Nossos valores</Label>
            <h2
              className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
              style={PLAYFAIR}
            >
              O que você pode cobrar de nós.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-[#c5d0dd]">
              Estes princípios orientam a maneira como estruturamos a estratégia,
              conduzimos a operação e nos relacionamos com cada cliente.
            </p>
          </div>
          <ol className="border-t border-white/15">
            {valores.map((v, i) => (
              <li
                key={v.titulo}
                className="grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[3.5rem_1fr] md:py-8"
              >
                <span className="text-sm font-semibold text-[#d8ad45]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-semibold leading-tight md:text-2xl" style={PLAYFAIR}>
                    {v.titulo}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#c5d0dd]">{v.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. Próximo passo */}
      <section className="bg-[#f7f3ea] text-[#0a2540]">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-2 lg:gap-20 lg:px-14">
          <div>
            <Label>Próximo passo</Label>
            <h2
              className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
              style={PLAYFAIR}
            >
              Qual é o seu caso?
            </h2>
          </div>
          <div className="self-end">
            <p className="text-base leading-8 text-[#46566e] md:text-lg">
              Um lançamento para coordenar, um imóvel para vender ou capital para
              alocar. Diga qual é o seu caso e a conversa começa no ponto certo.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[#0a2540] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#12375c]"
              >
                Falar com a coordenação
                <LuArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-2 py-3.5 text-sm font-semibold text-[#0a2540] underline decoration-[#b8860b] decoration-2 underline-offset-8 transition hover:text-[#9a7b1e]"
              >
                Ver áreas de atuação
              </Link>
            </div>
            <p className="mt-10 text-xs leading-6 text-[#8a97a8]">
              H55 Negócios Imobiliários · CRECI-PJ 9045
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
