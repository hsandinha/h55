// src/app/internacional/page.tsx
// Investimento no exterior: página curta, no padrão visual da /frontstay.
// Texto aprovado pelo Rodrigo em 06/10/2026.
import Image from "next/image";
import { BotaoPrimario, Label, PLAYFAIR } from "../../../components/frentes/Base";

const CONTATO = "/contact?area=internacional";
// Foto: Pexels (licença livre para uso comercial, sem atribuição obrigatória)
const FOTO = "https://images.pexels.com/photos/4386448/pexels-photo-4386448.jpeg";

export default function InternacionalPage() {
  return (
    <div className="[font-variant-numeric:lining-nums]">
      {/* 1. Abertura */}
      <section className="bg-[#f7f3ea] text-[#0a2540]">
        {/* título longo: fonte menor que a da /frontstay e foto esticada até a altura do texto */}
        <div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-2 lg:items-stretch lg:gap-16 lg:px-14">
          <div className="flex flex-col justify-center">
            <Label>Investimento no exterior · Flórida Central</Label>
            <h1
              className="mt-7 text-balance text-[2.1rem] font-semibold leading-[1.12] md:text-[2.6rem] lg:text-[2.75rem]"
              style={PLAYFAIR}
            >
              Invista no mercado imobiliário da Flórida Central{" "}
              <span className="text-[#9a7b1e] lg:block">com segurança e rentabilidade em dólar.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#46566e] md:text-[17px]">
              Se o seu objetivo é construir patrimônio em moeda forte ou
              garantir uma excelente rentabilidade em dólar, a Flórida Central
              é hoje um dos destinos mais estratégicos e promissores do mundo.
              Assessoramos você na construção de casas na região e oferecemos
              uma estrutura completa para tornar o seu projeto de investimento
              simples, seguro e rentável.
            </p>
            <div className="mt-9">
              <BotaoPrimario href={CONTATO}>Falar com a H55</BotaoPrimario>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e9e1d2] lg:aspect-auto lg:min-h-[520px]">
            <Image
              src={FOTO}
              alt="Notas de dólar sobre a bandeira dos Estados Unidos"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover object-[62%_50%]"
            />
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
