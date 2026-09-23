// src/app/frontstay/page.tsx
import Link from "next/link";
import Image from "next/image";
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";

const PLAYFAIR = { fontFamily: "var(--font-playfair-display)" };
const SITE_FRONTSTAY = "https://www.frontstay.com.br";
const CONTATO = "/contact?area=frontstay";

const numeros = [
  ["2.354", "unidades em administração até 2031"],
  ["240", "quartos de hotel em gestão"],
  ["250", "estações de coworking em gestão"],
  ["20 anos", "em hotelaria, coworking e mercado imobiliário"],
];

const etapas = [
  {
    quem: "Você",
    titulo: "Compra a unidade",
    texto: "Um studio ou apartamento em um empreendimento Front Stay.",
  },
  {
    quem: "Front Stay",
    titulo: "Decora e equipa",
    texto:
      "Projeto de interiores, mobiliário durável e montagem em até 120 dias, com pagamento facilitado durante a obra.",
  },
  {
    quem: "Front Stay",
    titulo: "Opera como hotel",
    texto:
      "Anuncia, precifica, recebe o hóspede, limpa e mantém a unidade. Por diária ou em contratos de 90 dias, conforme a demanda.",
  },
  {
    quem: "Você",
    titulo: "Recebe o resultado",
    texto:
      "Demonstrativo mensal da sua unidade, com reservas, despesas e o resultado apurado.",
  },
];

const gestao = [
  {
    titulo: "Reservas e preço",
    itens: [
      "Pesquisa de mercado e leitura da concorrência",
      "Precificação dinâmica da diária",
      "Distribuição nos canais de reserva online",
      "Equipe de vendas dedicada, SEO e anúncios",
    ],
  },
  {
    titulo: "Operação da unidade",
    itens: [
      "Vistoria e limpeza",
      "Manutenção preventiva e preditiva",
      "Check-in e check-out em sistema integrado",
    ],
  },
  {
    titulo: "Pagamentos",
    itens: [
      "Meios de pagamento para o hóspede",
      "Análise de crédito",
      "Assessoria jurídica em caso de inadimplência",
    ],
  },
  {
    titulo: "Experiência do hóspede",
    itens: [
      "Concierge e suporte 24 horas",
      "Aplicativo do prédio: acesso, reservas de áreas comuns e serviços",
      "Parceiros da região com desconto pelo app: restaurantes, academias, serviços",
      "Pesquisa de satisfação ao fim da estadia",
    ],
  },
  {
    titulo: "Prestação de contas",
    itens: [
      "Cada unidade gerida e apurada separadamente",
      "Reservas distribuídas de forma equilibrada entre as unidades",
      "Relatório de desempenho enviado ao proprietário",
    ],
  },
];

const diferenciais = [
  {
    titulo: "Gestão centralizada do prédio",
    texto:
      "A Front Stay responde pela gestão do prédio e administra as unidades destinadas à hospedagem, com o mesmo padrão de preço, limpeza e atendimento. Quem compra para morar convive com uma operação organizada.",
  },
  {
    titulo: "Diária ou contrato de 90 dias",
    texto:
      "Além do short stay, a unidade pode receber estadias longas em contratos renováveis a cada 90 dias, com acesso digital controlado pela operação.",
  },
  {
    titulo: "Cashback para o proprietário",
    texto:
      "O hóspede tem desconto nos parceiros pelo app, e parte do que ele consome volta como cashback para o dono da unidade.",
  },
];

const empreendimentos = [
  ["Esopo Vale do Sereno", "Alameda Flamboiant, 285", "Nova Lima"],
  ["City Santo Agostinho", "Rua Tenente Brito Melo, 1383", "Belo Horizonte"],
  ["Ágora Expominas", "Rua Herculano Pena, 806", "Belo Horizonte"],
  ["Lourdes", "Rua Professor Antônio Aleixo, 465", "Belo Horizonte"],
  ["Savassi", "Rua Pernambuco, 284", "Belo Horizonte"],
  ["Shopping Cidade", "Rua São Paulo, 957", "Belo Horizonte"],
  ["Icon Centro", "Rua Goitacazes", "Belo Horizonte"],
];

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#9a7b1e]">
    {children}
  </p>
);

export default function FrontStayPage() {
  return (
    <div className="[font-variant-numeric:lining-nums]">
      {/* 1. Abertura */}
      <section className="bg-[#f7f3ea] text-[#0a2540]">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-14">
          <div>
            <Image
              src="/images/frontstay/logo-frontstay.png"
              alt="Front Stay"
              width={672}
              height={165}
              priority
              className="h-9 w-auto md:h-10"
            />
            <h1
              className="mt-10 text-balance text-4xl font-semibold leading-[1.08] md:text-[3.4rem]"
              style={PLAYFAIR}
            >
              Você investe no apartamento.{" "}
              <span className="text-[#9a7b1e] lg:block">A Front Stay cuida do resto.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#46566e]">
              A Front Stay é a empresa de gestão de estadias do grupo H55. Ela
              transforma apartamentos em hospedagem, por diária ou por mês, e
              administra tudo: decoração, reservas, hóspedes, manutenção e
              prestação de contas ao proprietário.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href={CONTATO}
                className="inline-flex items-center justify-center gap-3 bg-[#0a2540] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#12375c]"
              >
                Falar com a H55
                <LuArrowRight size={16} />
              </Link>
              <a
                href="#gestao"
                className="inline-flex items-center justify-center gap-2 px-2 py-3.5 text-sm font-semibold text-[#0a2540] underline decoration-[#b8860b] decoration-2 underline-offset-8 transition hover:text-[#9a7b1e]"
              >
                O que a gestão inclui
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e9e1d2]">
            <Image
              src="/images/frontstay/quarto.webp"
              alt="Quarto decorado em unidade Front Stay"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. O que é */}
      <section className="bg-white text-[#0a2540]">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-2 lg:gap-20 lg:px-14">
          <div>
            <Label>O que é a Front Stay</Label>
            <h2
              className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
              style={PLAYFAIR}
            >
              A rotina de um hotel dentro de um prédio residencial.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#46566e] md:text-lg">
              Nascida como spin-off da Front Hotéis e Coworking, a Front Stay
              aplica a gestão hoteleira a apartamentos. O hóspede reserva
              online, faz check-in e é atendido como num hotel. O proprietário
              tem uma unidade que gera renda sem precisar administrá-la.
            </p>
          </div>

          <dl className="grid grid-cols-2 self-end border-l border-t border-[#0a2540]/12">
            {numeros.map(([valor, texto]) => (
              <div
                key={texto}
                className="border-b border-r border-[#0a2540]/12 p-6 md:p-8"
              >
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

      {/* 3. Como funciona */}
      <section className="bg-[#f7f3ea] text-[#0a2540]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
          <Label>Como funciona</Label>
          <h2
            className="mt-5 max-w-2xl text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
            style={PLAYFAIR}
          >
            Você entra duas vezes. No começo e no resultado.
          </h2>

          <ol className="mt-14 grid gap-px bg-[#0a2540]/12 sm:grid-cols-2 lg:grid-cols-4">
            {etapas.map((e, i) => {
              const fs = e.quem === "Front Stay";
              return (
                <li key={e.titulo} className="flex flex-col bg-[#f7f3ea] p-7 md:p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#9a7b1e]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={
                        fs
                          ? "bg-[#0a2540] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white"
                          : "border border-[#b8860b] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#9a7b1e]"
                      }
                    >
                      {e.quem}
                    </span>
                  </div>
                  <h3
                    className="mt-8 text-2xl font-semibold leading-tight"
                    style={PLAYFAIR}
                  >
                    {e.titulo}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-7 text-[#46566e]">{e.texto}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* 4. A gestão */}
      <section id="gestao" className="scroll-mt-20 bg-white text-[#0a2540]">
        <div className="mx-auto grid max-w-[1240px] gap-14 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Label>A gestão Front Stay</Label>
            <h2
              className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
              style={PLAYFAIR}
            >
              O que a Front Stay faz pela sua unidade.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-[#46566e]">
              Uma única administradora do decorado à prestação de contas. O
              proprietário não contrata fornecedor, não atende hóspede e não
              acompanha manutenção.
            </p>
            <div className="relative mt-10 hidden aspect-[846/693] w-full overflow-hidden bg-[#e9e1d2] lg:block">
              <Image
                src="/images/frontstay/sala.webp"
                alt="Sala e cozinha decoradas em unidade Front Stay"
                fill
                sizes="480px"
                className="object-cover"
              />
            </div>
          </div>

          <ol className="border-t border-[#0a2540]/15">
            {gestao.map((g, i) => (
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
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#d8ad45]">
            O que muda para quem investe
          </p>
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

      {/* 6. Empreendimentos */}
      <section className="bg-[#f7f3ea] text-[#0a2540]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Label>Onde a Front Stay está</Label>
              <h2
                className="mt-5 text-balance text-3xl font-semibold leading-tight md:text-[2.6rem]"
                style={PLAYFAIR}
              >
                Empreendimentos Front Stay
              </h2>
            </div>
            <a
              href={SITE_FRONTSTAY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a2540] underline decoration-[#b8860b] decoration-2 underline-offset-8 transition hover:text-[#9a7b1e]"
            >
              Ver no site da Front Stay
              <LuArrowUpRight size={16} />
            </a>
          </div>

          <ul className="mt-12 grid border-t border-[#0a2540]/15 md:grid-cols-2 md:gap-x-16">
            {empreendimentos.map(([nome, endereco, cidade]) => (
              <li
                key={nome}
                className="flex items-baseline justify-between gap-6 border-b border-[#0a2540]/15 py-5"
              >
                <span className="text-lg font-semibold" style={PLAYFAIR}>
                  {nome}
                </span>
                <span className="text-right text-sm leading-6 text-[#5b6a80]">
                  {endereco}
                  <span className="block text-[#8a97a8]">{cidade}</span>
                </span>
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
            A H55 vende. A Front Stay administra.
          </h2>
          <div>
            <p className="text-base leading-8 text-[#c5d0dd] md:text-lg">
              A H55 coordena a comercialização das unidades. A Front Stay,
              empresa do mesmo grupo, assume a gestão depois da entrega. Para
              conhecer as unidades disponíveis e o estudo de cada empreendimento,
              fale com a H55.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href={CONTATO}
                className="inline-flex items-center justify-center gap-3 bg-[#d8ad45] px-7 py-3.5 text-sm font-semibold text-[#191207] transition hover:bg-[#f0c85a]"
              >
                Falar com a H55
                <LuArrowRight size={16} />
              </Link>
              <a
                href={SITE_FRONTSTAY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-white/35 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                frontstay.com.br
                <LuArrowUpRight size={16} />
              </a>
            </div>
            <p className="mt-10 text-xs leading-6 text-[#8196ad]">
              Diária, ocupação e resultado variam conforme o empreendimento e o
              mercado. As estimativas são elaboradas pela Front Stay caso a caso
              e não constituem promessa de rentabilidade.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
