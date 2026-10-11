// src/app/negocios/page.tsx
// Frente 04 · Originação de negócios.
// Em validação com os sócios: a rota responde, mas não é anunciada em nenhum
// lugar do site (ver layout.tsx para o noindex e robots.ts para o disallow).
import { Descritivo } from "../../../components/frentes/Descritivo";
import {
  Abertura,
  BotaoPrimario,
  Label,
  LinkSecundario,
  PLAYFAIR,
} from "../../../components/frentes/Base";

const CONTATO = "/contact?area=negocios";

const entregas = [
  "Leitura do que você procura ou do que tem a oferecer",
  "Identificação de quem, na nossa rede, faz sentido para esse negócio",
  "Apresentação das duas partes, com o contexto de cada lado",
  "Condução do processo até o fechamento",
];

const etapas = [
  {
    titulo: "Conversa",
    texto:
      "Você traz o que procura ou o que tem a oferecer, em conversa reservada.",
  },
  {
    titulo: "Conexão",
    texto:
      "Identificamos a contraparte na nossa rede, validamos o interesse dos dois lados e apresentamos cada parte com o contexto do outro.",
  },
  {
    titulo: "Condução",
    texto:
      "Organizamos as reuniões e acompanhamos a evolução do negócio até a assinatura.",
  },
];

const conduta = [
  "A identidade de cada parte só é revelada com autorização da outra.",
  "A H55 atua sempre com o conhecimento das duas partes.",
  "A decisão de fechar é sempre das partes. A H55 coordena o processo, não a decisão.",
];

export default function NegociosPage() {
  return (
    <div className="[font-variant-numeric:lining-nums]">
      <Abertura
        rotulo="04 · Conexões"
        titulo="Conexões geram"
        destaque="negócios."
        lead="A H55 aproxima pessoas e empresas que têm negócio a fazer e ainda não se encontraram."
        cta={{ href: CONTATO, label: "Apresentar um negócio" }}
        secundario={{ href: "#escopo", label: "O que está incluído" }}
      />

      <Descritivo
        numero="04"
        titulo="Originação de negócios"
        texto={
          <>
            A rede da H55 não se limita a um setor. Negócio não falta: falta
            quem conheça as duas pontas e saiba aproximá-las.{" "}
            <span className="text-[#9a7b1e]">
              É esse trabalho que colocamos em contrato.
            </span>
          </>
        }
        entregas={entregas}
      />

      {/* Como funciona */}
      <section className="bg-[#f7f3ea] text-[#0a2540]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
          <Label>Como funciona</Label>
          <h2
            className="mt-5 max-w-2xl text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
            style={PLAYFAIR}
          >
            Da conversa à assinatura, com um responsável pelo processo.
          </h2>

          <div className="mt-14 grid gap-px bg-[#0a2540]/12 md:grid-cols-3">
            {etapas.map((e, i) => (
              <div key={e.titulo} className="bg-[#f7f3ea] p-7 md:p-8">
                <span className="text-sm font-semibold text-[#9a7b1e]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-2xl font-semibold leading-tight" style={PLAYFAIR}>
                  {e.titulo}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-7 text-[#46566e]">{e.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regras de conduta */}
      <section className="bg-white text-[#0a2540]">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-14">
          <div>
            <Label>Regras de conduta</Label>
            <p
              className="mt-6 text-balance text-2xl font-semibold leading-[1.35] md:text-[1.9rem]"
              style={PLAYFAIR}
            >
              Uma conexão só se sustenta se as duas partes confiarem em quem fez
              a ponte.
            </p>
          </div>

          <ul className="self-center border-t border-[#0a2540]/15">
            {conduta.map((c) => (
              <li
                key={c}
                className="border-b border-[#0a2540]/15 py-5 text-base leading-7 text-[#26364a]"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a2540] text-white">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-2 lg:gap-20 lg:px-14">
          <div>
            <Label dark>Próximo passo</Label>
            <h2
              className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
              style={PLAYFAIR}
            >
              Tem um negócio para fazer ou alguém para encontrar?
            </h2>
          </div>
          <div className="self-end">
            <p className="text-base leading-8 text-[#c5d0dd] md:text-lg">
              Em uma conversa reservada, entendemos o que você procura. Se houver
              caminho na nossa rede, definimos o escopo por escrito antes de
              qualquer apresentação.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <BotaoPrimario href={CONTATO} dark>
                Apresentar um negócio
              </BotaoPrimario>
              <LinkSecundario href="/services" dark>
                Ver áreas de atuação
              </LinkSecundario>
            </div>
            <p className="mt-10 text-xs leading-6 text-[#8196ad]">
              Esta página tem caráter institucional. A atuação da H55 é de
              aproximação e coordenação entre as partes; escopo e
              responsabilidades são definidos em contrato específico para cada
              caso.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
