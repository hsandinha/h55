// src/app/imoveis-selecionados/page.tsx
import { Descritivo } from "../../../components/frentes/Descritivo";
import {
  Abertura,
  BotaoPrimario,
  Label,
  LinkSecundario,
  PLAYFAIR,
} from "../../../components/frentes/Base";


const entregas = [
  "Seleção e curadoria das imobiliárias que vão vender o imóvel",
  "Precificação com comparativos e leitura de liquidez da região",
  "Auditoria de matrícula e certidões antes de anunciar",
  "Material próprio: fotos, drone, tour virtual e página do imóvel",
  "Liberação e acompanhamento das visitas",
  "Propostas qualificadas, com capacidade de pagamento verificada",
  "Elaboração e conferência dos contratos",
  "Transferência do imóvel, até a entrega das chaves",
];

const antesDepois = {
  sem: [
    "A chave circula em dez imobiliárias, cada uma com uma foto e um preço.",
    "Corretor liga no domingo pedindo visita para amanhã cedo.",
    "Proposta chega por recado, sem saber se o comprador tem crédito.",
    "Matrícula e certidões só aparecem na hora do contrato, e a venda trava.",
    "Ninguém responde por nada. O proprietário vira gestor de corretores.",
  ],
  com: [
    "Um só anúncio, um só preço, um só material, em todas as imobiliárias.",
    "A H55 libera e acompanha as visitas. O proprietário só é chamado quando há proposta.",
    "Proposta chega qualificada, com capacidade de pagamento verificada.",
    "Imóvel auditado antes de anunciar. O contrato não trava no cartório.",
    "Um interlocutor, um relatório, um responsável: a H55.",
  ],
};

const conducao = [
  {
    title: "Leitura do imóvel",
    desc: "Entendemos o ativo, o seu prazo e o seu objetivo, e definimos o preço de anúncio com comparativos e leitura de liquidez da região.",
  },
  {
    title: "Auditoria documental",
    desc: "Matrícula atualizada, certidões e pendências resolvidas enquanto o material é produzido.",
  },
  {
    title: "Material próprio",
    desc: "Fotos profissionais, drone quando o imóvel justifica, tour virtual e uma página exclusiva.",
  },
  {
    title: "Seleção das imobiliárias",
    desc: "Escolhemos as imobiliárias que fazem sentido para aquele imóvel e alinhamos preço, discurso e regra de comissão.",
  },
  {
    title: "Visitas e propostas",
    desc: "Liberamos e acompanhamos as visitas. Você recebe proposta real, com capacidade de pagamento verificada, e não recado de corretor.",
  },
  {
    title: "Contrato e transferência",
    desc: "Elaboração e conferência do contrato, assinatura, acompanhamento do pagamento e transferência do imóvel.",
  },
];

export default function ImoveisSelecionadosPage() {
  return (
    <div className="[font-variant-numeric:lining-nums]">
      <Abertura
        rotulo="02 · Para proprietários"
        titulo="Assumimos"
        destaque="a operação da venda."
        cta={{ href: "/contact?area=imoveis-selecionados", label: "Quero vender o meu imóvel" }}
        secundario={{ href: "#escopo", label: "O que está incluído" }}
      />

      <Descritivo
        numero="02"
        titulo="Coordenação de imóveis selecionados"
        texto={
          <>
            Assumimos a operação da venda. O proprietário trata apenas com a
            H55, e a coordenação vai da seleção das imobiliárias à transferência
            do imóvel, passando pela liberação das visitas e pela elaboração dos
            contratos.{" "}
            <span className="text-[#9a7b1e]">
              Profissionalizar a venda do seu imóvel protege prazo e dinheiro.
            </span>
          </>
        }
        entregas={entregas}
      />

      {/* Sem a H55 / Com a H55 */}
      <section className="bg-[#f7f3ea] text-[#0a2540]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
            <div>
              <Label>Para proprietários</Label>
              <h2
                className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
                style={PLAYFAIR}
              >
                Seu imóvel no mercado sem você administrar a operação.
              </h2>
            </div>
            <p className="self-end text-base leading-8 text-[#46566e] md:text-lg">
              Quando várias imobiliárias atuam sem coordenação, informações,
              visitas e propostas podem se perder. A H55 centraliza essa rotina
              e representa o proprietário durante toda a venda.
            </p>
          </div>

          <div className="mt-14 grid gap-px bg-[#0a2540]/12 lg:grid-cols-2">
            <div className="bg-white p-7 md:p-10">
              <p className="text-sm font-semibold text-[#5b6a80]">Venda sem coordenação</p>
              <ul className="mt-6 border-t border-[#0a2540]/12">
                {antesDepois.sem.map((t) => (
                  <li
                    key={t}
                    className="flex gap-4 border-b border-[#0a2540]/12 py-4 text-[0.95rem] leading-7 text-[#6b7a90]"
                  >
                    <span aria-hidden className="mt-[0.85rem] h-px w-4 shrink-0 bg-[#8a97a8]" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0a2540] p-7 text-white md:p-10">
              <p className="text-sm font-semibold text-[#d8ad45]">Com a H55 na coordenação</p>
              <ul className="mt-6 border-t border-white/15">
                {antesDepois.com.map((t) => (
                  <li
                    key={t}
                    className="flex gap-4 border-b border-white/15 py-4 text-[0.95rem] leading-7 text-[#e3e9f0]"
                  >
                    <span aria-hidden className="mt-[0.85rem] h-px w-4 shrink-0 bg-[#d8ad45]" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p
            className="mt-12 max-w-2xl text-balance text-2xl font-semibold leading-snug md:text-[1.9rem]"
            style={PLAYFAIR}
          >
            Menos desgaste, mais controle e muito mais eficiência na venda do seu
            imóvel.
          </p>
        </div>
      </section>

      {/* Como operamos */}
      <section className="bg-white text-[#0a2540]">
        <div className="mx-auto grid max-w-[1240px] gap-14 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Label>Como operamos</Label>
            <h2
              className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
              style={PLAYFAIR}
            >
              Da leitura do imóvel à transferência.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-[#46566e]">
              Não são serviços avulsos nem extras cobrados à parte. É o que a H55
              faz por cada imóvel que aceita coordenar.
            </p>
          </div>

          <ol className="border-t border-[#0a2540]/15">
            {conducao.map((etapa, i) => (
              <li
                key={etapa.title}
                className="grid gap-4 border-b border-[#0a2540]/15 py-7 sm:grid-cols-[3.5rem_1fr] md:py-8"
              >
                <span className="text-sm font-semibold text-[#9a7b1e]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold leading-tight" style={PLAYFAIR}>
                    {etapa.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#46566e]">{etapa.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a2540] text-white">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-2 lg:gap-20 lg:px-14">
          <div>
            <Label dark>Transparência</Label>
            <h2
              className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
              style={PLAYFAIR}
            >
              Vamos entender o seu imóvel.
            </h2>
          </div>
          <div className="self-end">
            <p className="text-base leading-8 text-[#c5d0dd] md:text-lg">
              Cada imóvel exige uma estratégia própria. Em uma conversa inicial,
              avaliamos o ativo, o momento da venda e o escopo necessário para
              que a H55 assuma a coordenação com clareza.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <BotaoPrimario href="/contact?area=imoveis-selecionados" dark>
                Quero vender o meu imóvel
              </BotaoPrimario>
              <LinkSecundario href="/imoveis" dark>
                Ver a carteira
              </LinkSecundario>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
