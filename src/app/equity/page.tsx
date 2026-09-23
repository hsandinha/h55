// src/app/equity/page.tsx
import { Descritivo } from "../../../components/frentes/Descritivo";
import {
  Abertura,
  BotaoPrimario,
  Label,
  LinkSecundario,
  PLAYFAIR,
} from "../../../components/frentes/Base";


const entregas = [
  "Acesso a oportunidades selecionadas no mercado imobiliário",
  "Apresentação do contexto e da estrutura de cada oportunidade",
  "Conversa alinhada ao perfil e ao horizonte do investidor",
  "Relacionamento conduzido pela coordenação da H55",
];

const oQueFazemos = [
  {
    title: "Acesso",
    desc: "A H55 acompanha o mercado imobiliário e seleciona oportunidades para apresentar em conversas individuais com investidores.",
  },
  {
    title: "Leitura",
    desc: "Cada oportunidade é apresentada com seu contexto, sua estrutura e seu horizonte, para apoiar uma avaliação consciente.",
  },
  {
    title: "Acompanhamento",
    desc: "A coordenação da H55 conduz o relacionamento e mantém o investidor informado sobre a evolução da oportunidade apresentada.",
  },
];

export default function EquityPage() {
  return (
    <div className="[font-variant-numeric:lining-nums]">
      <Abertura
        rotulo="03 · Para investidores"
        titulo="Participar da operação,"
        destaque="não só comprar a unidade."
        cta={{ href: "/contact?area=equity", label: "Agendar reunião" }}
        secundario={{ href: "#escopo", label: "O que está incluído" }}
      />

      <Descritivo
        numero="03"
        titulo="Private equity imobiliário"
        texto={
          <>
            Investir em imóvel pode ir muito além da compra de uma unidade na
            planta. Selecionamos oportunidades e apresentamos o contexto, a
            estrutura e o horizonte de cada uma.{" "}
            <span className="text-[#9a7b1e]">
              Agende uma reunião com a coordenação.
            </span>
          </>
        }
        entregas={entregas}
      />

      {/* O que fazemos */}
      <section className="bg-[#f7f3ea] text-[#0a2540]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
            <div>
              <Label>Para investidores</Label>
              <h2
                className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
                style={PLAYFAIR}
              >
                Uma forma diferente de acessar o mercado imobiliário.
              </h2>
            </div>
            <p className="self-end text-base leading-8 text-[#46566e] md:text-lg">
              Cada conversa começa pela compreensão do perfil, dos objetivos e do
              horizonte do investidor. A partir disso, apresentamos as
              oportunidades disponíveis e suas características.
            </p>
          </div>

          <div className="mt-14 grid gap-px bg-[#0a2540]/12 md:grid-cols-3">
            {oQueFazemos.map((c, i) => (
              <div key={c.title} className="bg-[#f7f3ea] p-7 md:p-8">
                <span className="text-sm font-semibold text-[#9a7b1e]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-2xl font-semibold leading-tight" style={PLAYFAIR}>
                  {c.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-7 text-[#46566e]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA sóbrio */}
      <section className="bg-[#0a2540] text-white">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-2 lg:gap-20 lg:px-14">
          <div>
            <Label dark>Próximo passo</Label>
            <h2
              className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
              style={PLAYFAIR}
            >
              Agende uma reunião com a coordenação.
            </h2>
          </div>
          <div className="self-end">
            <p className="text-base leading-8 text-[#c5d0dd] md:text-lg">
              Em uma conversa reservada, entendemos seus objetivos e seu
              horizonte de investimento para apresentar a atuação da H55 e as
              oportunidades que possam fazer sentido para o seu perfil.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <BotaoPrimario href="/contact?area=equity" dark>
                Agendar reunião
              </BotaoPrimario>
              <LinkSecundario href="/services" dark>
                Ver áreas de atuação
              </LinkSecundario>
            </div>
            <p className="mt-10 text-xs leading-6 text-[#8196ad]">
              Esta página tem caráter institucional. Não constitui oferta pública
              de investimento nem promessa de rentabilidade.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
