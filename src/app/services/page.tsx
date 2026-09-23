// src/app/services/page.tsx
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

const PLAYFAIR = { fontFamily: "var(--font-playfair-display)" };

const frentes = [
  {
    num: "01",
    id: "lancamentos",
    label: "Incorporadoras",
    title: "Coordenação de lançamentos imobiliários",
    lead: "Conduzimos a operação de vendas do seu lançamento.",
    body: "Estratégia comercial, tabela de vendas, curadoria e treinamento das imobiliárias parceiras, gestão documental, plataforma própria para distribuição e follow-up de leads, alinhamento com o marketing e centralização de contratos e assinaturas, com distribuição a todas as partes interessadas.",
    itens: [
      [
        "Estratégia e tabela",
        "assessoria na tabela de vendas, posicionamento e regra de comissionamento antes de abrir as vendas.",
      ],
      [
        "Imobiliárias selecionadas e treinadas",
        "curadoria das parceiras e plataforma própria para distribuir e acompanhar os leads.",
      ],
      [
        "Contratos centralizados",
        "documentos, contratos e assinaturas em um só lugar, distribuídos às partes.",
      ],
    ],
    fecho:
      "Acelere a liquidez do seu lançamento com quem responde pelo processo inteiro.",
    href: "/lancamentos",
    cta: "Ver coordenação de lançamentos",
  },
  {
    num: "02",
    id: "imoveis-selecionados",
    label: "Proprietários",
    title: "Coordenação de imóveis selecionados",
    lead: "Assumimos a operação da venda.",
    body: "O proprietário trata apenas com a H55, e nós coordenamos a venda inteira: seleção das imobiliárias, liberação de visitas, contratos e transferência do imóvel. Profissionalizar a venda protege prazo e preço.",
    itens: [
      [
        "Um único interlocutor",
        "a H55 representa você perante todo o mercado imobiliário.",
      ],
      [
        "Imobiliárias selecionadas",
        "coordenamos quem vende, com qual material e com qual regra, sem que você gerencie ninguém.",
      ],
      [
        "Imóvel auditado antes de anunciar",
        "matrícula, certidões e vistoria conferidas, para a proposta não travar no cartório.",
      ],
    ],
    fecho:
      "Menos desgaste, mais controle e muito mais eficiência na venda do seu imóvel.",
    href: "/imoveis-selecionados",
    cta: "Ver coordenação de imóveis selecionados",
  },
  {
    num: "03",
    id: "equity",
    label: "Investidores",
    title: "Private equity imobiliário",
    lead: "Participar da operação, não só comprar a unidade.",
    body: "Investir em imóvel pode ir muito além da compra de uma unidade na planta. A H55 apresenta oportunidades selecionadas de private equity imobiliário de acordo com o perfil e os objetivos de cada investidor.",
    itens: [
      ["Acesso", "oportunidades selecionadas no mercado imobiliário."],
      [
        "Leitura",
        "avaliação do contexto, da estrutura e do horizonte de cada oportunidade.",
      ],
      ["Relacionamento", "conversa conduzida pela coordenação da H55."],
    ],
    fecho: "Agende uma reunião com a coordenação.",
    href: "/equity",
    cta: "Ver private equity",
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

export default function ServicesPage() {
  return (
    <div className="[font-variant-numeric:lining-nums]">
      {/* 1. Abertura */}
      <section className="bg-[#f7f3ea] text-[#0a2540]">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-14">
          <div>
            <Label>Áreas de atuação</Label>
            <h1
              className="mt-8 text-4xl font-semibold leading-[1.08] md:text-[3.1rem]"
              style={PLAYFAIR}
            >
              Como a H55{" "}
              <span className="text-[#9a7b1e]">pode atuar?</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#46566e]">
              A H55 atua em três áreas complementares, com soluções específicas
              para incorporadoras, proprietários e investidores. Conheça cada
              atuação e encontre o caminho mais adequado ao seu objetivo.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[#0a2540] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#12375c]"
              >
                Falar com a coordenação
                <LuArrowRight size={16} />
              </Link>
            </div>
          </div>

          <ul className="border border-[#0a2540]/12 bg-white">
            {frentes.map((f) => (
              <li key={f.num} className="border-b border-[#0a2540]/12 last:border-b-0">
                <a
                  href={`#${f.id}`}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 p-6 transition-colors hover:bg-[#f7f3ea] md:p-8"
                >
                  <span className="text-sm font-semibold text-[#9a7b1e]">{f.num}</span>
                  <span>
                    <span className="block text-xl font-semibold leading-tight" style={PLAYFAIR}>
                      {f.title}
                    </span>
                    <span className="mt-1.5 block text-sm text-[#5b6a80]">{f.label}</span>
                  </span>
                  <LuArrowRight
                    size={18}
                    className="rotate-90 text-[#9a7b1e] transition-transform duration-300 group-hover:translate-y-1"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. Uma seção por área */}
      {frentes.map((f, i) => (
        <section
          key={f.num}
          id={f.id}
          className={`scroll-mt-20 text-[#0a2540] ${i % 2 === 0 ? "bg-white" : "bg-[#f7f3ea]"}`}
        >
          <div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-14">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-[#9a7b1e]">{f.num}</span>
                <span className="border border-[#b8860b] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#9a7b1e]">
                  {f.label}
                </span>
              </div>
              <h2
                className="mt-6 text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
                style={PLAYFAIR}
              >
                {f.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#9a7b1e]">{f.lead}</p>
              <p className="mt-4 max-w-xl text-base leading-8 text-[#46566e]">{f.body}</p>
              <Link
                href={f.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0a2540] underline decoration-[#b8860b] decoration-2 underline-offset-8 transition hover:text-[#9a7b1e]"
              >
                {f.cta}
                <LuArrowRight size={16} />
              </Link>
            </div>

            <div>
              <ol className="border-t border-[#0a2540]/15">
                {f.itens.map(([titulo, texto], j) => (
                  <li
                    key={titulo}
                    className="grid gap-4 border-b border-[#0a2540]/15 py-7 sm:grid-cols-[3.5rem_1fr] md:py-8"
                  >
                    <span className="text-sm font-semibold text-[#9a7b1e]">
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-2xl font-semibold leading-tight" style={PLAYFAIR}>
                        {titulo}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-[#46566e]">
                        {texto.charAt(0).toUpperCase() + texto.slice(1)}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <p
                className="mt-10 text-balance text-2xl font-semibold leading-snug md:text-[1.9rem]"
                style={PLAYFAIR}
              >
                {f.fecho}
              </p>
            </div>
          </div>
        </section>
      ))}

      {/* 3. Como operamos */}
      <section className="bg-[#0a2540] text-white">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-2 lg:gap-20 lg:px-14">
          <div>
            <Label dark>Como operamos</Label>
            <h2
              className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
              style={PLAYFAIR}
            >
              Um responsável pela coordenação do processo.
            </h2>
          </div>
          <div className="self-end">
            <p className="text-base leading-8 text-[#c5d0dd] md:text-lg">
              Em cada área de atuação, a H55 centraliza informações, organiza os
              participantes e acompanha a evolução da operação. Assim, quem
              contrata sabe com quem falar e tem clareza sobre os próximos
              passos, da primeira conversa à assinatura.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[#d8ad45] px-7 py-3.5 text-sm font-semibold text-[#191207] transition hover:bg-[#f0c85a]"
              >
                Falar com a coordenação
                <LuArrowRight size={16} />
              </Link>
              <Link
                href="/imoveis"
                className="inline-flex items-center justify-center gap-3 border border-white/35 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Ver a carteira
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
