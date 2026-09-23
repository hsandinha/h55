// src/app/lancamentos/page.tsx
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { Descritivo } from "../../../components/frentes/Descritivo";
import {
  Abertura,
  BotaoPrimario,
  Label,
  LinkSecundario,
  PLAYFAIR,
} from "../../../components/frentes/Base";


const entregas = [
  "Estratégia comercial do lançamento",
  "Assessoria para elaboração da tabela de vendas",
  "Seleção e curadoria das imobiliárias parceiras",
  "Treinamento das equipes de venda",
  "Gestão dos documentos do empreendimento",
  "Plataforma própria para distribuição e follow-up de leads",
  "Alinhamento contínuo com as ações de marketing",
  "Centralização dos contratos e assinaturas, com distribuição às partes interessadas",
];

const ganhos = [
  {
    title: "Estratégia comercial integrada",
    desc: "Posicionamento, tabela de vendas, condições comerciais e canais de distribuição são alinhados antes e durante o lançamento.",
  },
  {
    title: "Leads acompanhados",
    desc: "A plataforma própria distribui os leads entre as imobiliárias parceiras e apoia o acompanhamento de cada oportunidade.",
  },
  {
    title: "Documentos centralizados",
    desc: "A gestão documental, os contratos e as assinaturas são organizados em um fluxo único, com distribuição às partes interessadas.",
  },
];

const metodo = [
  {
    fase: "Antes de abrir",
    etapas: [
      ["Estratégia comercial", "Leitura do produto, do público e da concorrência. Posicionamento e canais de distribuição definidos com a incorporadora."],
      ["Tabela de vendas", "Assessoria na elaboração da tabela, das condições de pagamento e da regra de comissionamento."],
      ["Curadoria das imobiliárias", "Seleção das parceiras que fazem sentido para aquele produto, convenção de vendas e treinamento das equipes."],
    ],
  },
  {
    fase: "Com as vendas abertas",
    etapas: [
      ["Distribuição de leads", "Plataforma própria da H55 distribui os leads entre as imobiliárias e registra cada contato."],
      ["Follow-up e funil", "Acompanhamento do atendimento e da evolução dos leads ao longo da jornada comercial."],
      ["Marketing alinhado", "Alinhamento contínuo entre as ações de marketing, a disponibilidade e a estratégia de vendas."],
    ],
  },
  {
    fase: "Do sim ao contrato",
    etapas: [
      ["Gestão documental", "Documentos do comprador e do empreendimento reunidos e conferidos antes de virar minuta."],
      ["Contratos e assinaturas", "Contrato centralizado na H55, conferido, assinado e distribuído a incorporadora, imobiliária e comprador."],
      ["Prestação de contas", "Relatório aberto de vendas, comissionamento e pendências, com um único responsável por responder."],
    ],
  },
];

export default function LancamentosPage() {
  return (
    <div className="[font-variant-numeric:lining-nums]">
      <Abertura
        rotulo="01 · Para incorporadoras e loteadoras"
        titulo="Um só responsável"
        destaque="pela operação de vendas."
        cta={{ href: "/contact?area=lancamentos", label: "Apresentar o lançamento" }}
        secundario={{ href: "#escopo", label: "O que está incluído" }}
      />

      <Descritivo
        numero="01"
        titulo="Coordenação de lançamentos imobiliários"
        texto={
          <>
            Estratégia comercial, tabela de vendas, curadoria e treinamento das
            imobiliárias, gestão dos documentos, plataforma própria para
            distribuição e follow-up de leads, alinhamento contínuo com o
            marketing e centralização dos contratos e assinaturas.{" "}
            <span className="text-[#9a7b1e]">
              Uma gestão integrada para todas as etapas comerciais.
            </span>
          </>
        }
        entregas={entregas}
      />

      {/* O que a incorporadora ganha */}
      <section className="bg-[#f7f3ea] text-[#0a2540]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
            <div>
              <Label>Para incorporadoras e loteadoras</Label>
              <h2
                className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
                style={PLAYFAIR}
              >
                Uma operação comercial alinhada em torno da mesma tabela.
              </h2>
            </div>
            <p className="self-end text-base leading-8 text-[#46566e] md:text-lg">
              A coordenação conecta estratégia, imobiliárias, leads, marketing e
              documentos. Com todos trabalhando a partir das mesmas informações,
              o lançamento ganha continuidade e clareza.
            </p>
          </div>

          <div className="mt-14 grid gap-px bg-[#0a2540]/12 md:grid-cols-3">
            {ganhos.map((g, i) => (
              <div key={g.title} className="bg-[#f7f3ea] p-7 md:p-8">
                <span className="text-sm font-semibold text-[#9a7b1e]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-2xl font-semibold leading-tight" style={PLAYFAIR}>
                  {g.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-7 text-[#46566e]">{g.desc}</p>
              </div>
            ))}
          </div>

          <p
            className="mt-12 max-w-2xl text-balance text-2xl font-semibold leading-snug md:text-[1.9rem]"
            style={PLAYFAIR}
          >
            Acelere a liquidez do seu lançamento com quem responde pelo processo
            inteiro.
          </p>
        </div>
      </section>

      {/* Método */}
      <section className="bg-[#0a2540] text-white">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
            <div>
              <Label dark>Como operamos</Label>
              <h2
                className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
                style={PLAYFAIR}
              >
                Nove etapas, três fases, um responsável.
              </h2>
            </div>
            <p className="self-end text-base leading-8 text-[#c5d0dd] md:text-lg">
              O mesmo método em todo lançamento que coordenamos. A incorporadora
              sabe em que fase está, o que já foi entregue e o que vem a seguir.
            </p>
          </div>

          <div className="mt-14 border-t border-white/15">
            {metodo.map((bloco, bi) => (
              <div
                key={bloco.fase}
                className="grid gap-6 border-b border-white/15 py-10 lg:grid-cols-[0.3fr_1fr] lg:gap-10"
              >
                <div>
                  <span className="text-sm font-semibold text-[#d8ad45]">
                    Fase {String(bi + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight" style={PLAYFAIR}>
                    {bloco.fase}
                  </h3>
                </div>
                <div className="grid gap-8 sm:grid-cols-3">
                  {bloco.etapas.map(([titulo, texto], ei) => (
                    <div key={titulo}>
                      <span className="text-xs text-[#8196ad]">Etapa {bi * 3 + ei + 1}</span>
                      <p className="mt-2 text-lg font-semibold leading-snug" style={PLAYFAIR}>
                        {titulo}
                      </p>
                      <p className="mt-2 text-[0.95rem] leading-7 text-[#c5d0dd]">{texto}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Front Stay */}
      <section className="bg-white text-[#0a2540]">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-14">
          <div className="lg:self-start">
            <Label>Front Stay · empresa do grupo H55</Label>
          </div>
          <div>
            <p className="text-base leading-8 text-[#46566e]">
              Para empreendimentos residenciais pensados como operação de short
              stay, a Front Stay, empresa do grupo H55, assessora o projeto, o
              decorado e a gestão do prédio e das unidades depois de prontas.
            </p>
            <Link
              href="/frontstay"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0a2540] underline decoration-[#b8860b] decoration-2 underline-offset-8 transition hover:text-[#9a7b1e]"
            >
              Conhecer a Front Stay
              <LuArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Transparência e CTA */}
      <section className="bg-[#f7f3ea] text-[#0a2540]">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-2 lg:gap-20 lg:px-14">
          <div>
            <Label>Transparência</Label>
            <h2
              className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
              style={PLAYFAIR}
            >
              Uma proposta adequada ao seu empreendimento.
            </h2>
          </div>
          <div className="self-end">
            <p className="text-base leading-8 text-[#46566e] md:text-lg">
              Cada lançamento possui características, estágio comercial e
              necessidades próprias. Em uma reunião inicial, entendemos o
              empreendimento e definimos o escopo de coordenação mais adequado
              para a operação.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <BotaoPrimario href="/contact?area=lancamentos">Apresentar o lançamento</BotaoPrimario>
              <LinkSecundario href="/services">Ver áreas de atuação</LinkSecundario>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
