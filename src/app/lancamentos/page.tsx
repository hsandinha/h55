// src/app/lancamentos/page.tsx
import {
  Abertura,
  BotaoPrimario,
  Label,
  LinkSecundario,
  PLAYFAIR,
} from "../../../components/frentes/Base";

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
        lead="Acelere a liquidez do seu lançamento com quem responde pelo processo inteiro."
        cta={{ href: "/contact?area=lancamentos", label: "Apresentar o lançamento" }}
        secundario={{ href: "#metodo", label: "Como operamos" }}
      />

      {/* Método: a página inteira depois da abertura. Cada etapa da coordenação
          aparece aqui na ordem em que acontece, e é aqui que a página fecha. */}
      <section id="metodo" className="scroll-mt-20 bg-[#0a2540] text-white">
        <div className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <Label dark>Como operamos</Label>
              <h2
                className="mt-6 text-balance text-4xl font-semibold leading-[1.06] md:text-[3.4rem]"
                style={PLAYFAIR}
              >
                Nove etapas, três fases, um responsável.
              </h2>
            </div>
            <p className="self-end text-lg leading-8 text-[#c5d0dd]">
              O mesmo método em todo lançamento que coordenamos. A incorporadora
              sabe em que fase está, o que já foi entregue e o que vem a seguir.
            </p>
          </div>

          <div className="mt-16 border-t border-white/15 md:mt-20">
            {metodo.map((bloco, bi) => (
              <div
                key={bloco.fase}
                className="grid gap-8 border-b border-white/15 py-12 lg:grid-cols-[0.32fr_1fr] lg:gap-12 md:py-14"
              >
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <span className="text-sm font-semibold tracking-[0.12em] text-[#d8ad45]">
                    Fase {String(bi + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="mt-3 text-balance text-3xl font-semibold leading-tight md:text-[2.1rem]"
                    style={PLAYFAIR}
                  >
                    {bloco.fase}
                  </h3>
                </div>
                <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
                  {bloco.etapas.map(([titulo, texto], ei) => (
                    <div key={titulo} className="border-t border-white/20 pt-5">
                      <span className="text-sm font-semibold text-[#d8ad45]">
                        {String(bi * 3 + ei + 1).padStart(2, "0")}
                      </span>
                      <p
                        className="mt-3 text-xl font-semibold leading-snug md:text-[1.4rem]"
                        style={PLAYFAIR}
                      >
                        {titulo}
                      </p>
                      <p className="mt-3 text-base leading-7 text-[#c5d0dd]">{texto}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <p
              className="text-balance text-3xl font-semibold leading-snug md:text-[2.4rem]"
              style={PLAYFAIR}
            >
              Do primeiro estudo de tabela à última assinatura, com um só
              interlocutor.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <BotaoPrimario href="/contact?area=lancamentos" dark>
                Apresentar o lançamento
              </BotaoPrimario>
              <LinkSecundario href="/services" dark>
                Ver áreas de atuação
              </LinkSecundario>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
