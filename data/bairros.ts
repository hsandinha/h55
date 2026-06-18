// data/bairros.ts
// Conteúdo editorial dos bairros onde o h55 tem imóveis no portfólio.
const U = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

export type Bairro = {
  slug: string;
  nome: string;
  cidade: string;
  estado: string;
  tagline: string;
  descricao: string[];
  destaques: string[];
  img: string;
  empreendimento?: {
    nome: string;
    construtora: string;
    descricao: string[];
    destaques: string[];
    img: string;
  };
};

export const bairros: Bairro[] = [
  {
    slug: "savassi",
    nome: "Savassi",
    cidade: "Belo Horizonte",
    estado: "MG",
    tagline: "O coração boêmio e gastronômico de Belo Horizonte.",
    descricao: [
      "A Savassi é o endereço mais vibrante de Belo Horizonte, onde os melhores restaurantes, bares e o comércio sofisticado da capital se encontram. Viver ali é estar no centro de tudo, a poucos passos da boa mesa e da vida cultural da cidade.",
      "Para o investidor, a região combina localização central, altíssima procura por locação e valorização sustentada por ser um dos bairros mais desejados de BH.",
    ],
    destaques: ["Gastronomia e vida noturna", "Comércio sofisticado", "Localização central", "Alta demanda de locação"],
    img: U("photo-1486325212027-8081e485255e"),
  },
  {
    slug: "lourdes",
    nome: "Lourdes",
    cidade: "Belo Horizonte",
    estado: "MG",
    tagline: "O endereço mais nobre de Belo Horizonte.",
    descricao: [
      "Lourdes é sinônimo de sofisticação em Belo Horizonte. O bairro reúne edifícios de alto padrão, lojas de grife e serviços premium, ao lado da efervescência da Savassi, em um ambiente residencial elegante e arborizado.",
      "É um mercado de ticket alto e oferta limitada, o que sustenta a valorização e mantém a vacância baixa. Um clássico para quem busca patrimônio sólido.",
    ],
    destaques: ["Alto padrão", "Comércio de luxo", "Vizinho da Savassi", "Baixa vacância"],
    img: U("photo-1545324418-cc1a3fa10c00"),
  },
  {
    slug: "barra-da-tijuca",
    nome: "Barra da Tijuca",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    tagline: "O bairro planejado do Rio de Janeiro.",
    descricao: [
      "A Barra da Tijuca é a expressão do estilo de vida carioca contemporâneo: praias extensas, condomínios amplos e arborizados, shoppings, gastronomia e o legado de infraestrutura olímpica.",
      "Com lançamentos constantes e espaços generosos, atrai famílias e investidores em busca de qualidade de vida e potencial de valorização no longo prazo.",
    ],
    destaques: ["Praia extensa", "Condomínios planejados", "Shoppings e lazer", "Espaços amplos"],
    img: U("photo-1483729558449-99ef09a8c325"),
    empreendimento: {
      nome: "Oceana Golf",
      construtora: "por Patrimar",
      descricao: [
        "Assinado pela Patrimar e projetado pela FEU Arquitetura, o Oceana Golf é um lançamento de altíssimo padrão na Barra da Tijuca. Ocupa um terreno monumental de mais de 27 mil m² de frente para o Campo Olímpico de Golfe, com vista para o mar e para a Lagoa de Marapendi.",
        "São apartamentos de 194 a 268 m² e coberturas lineares de 396 a 547 m², todos com 4 suítes, somados a uma infraestrutura de lazer e bem estar inédita na região e à Certificação EDGE de sustentabilidade.",
      ],
      destaques: [
        "Frente ao Campo Olímpico de Golfe",
        "Apartamentos de 194 a 268 m²",
        "Coberturas até 547 m²",
        "4 suítes",
        "Terreno de 27 mil m²",
        "Certificação EDGE",
      ],
      img: U("photo-1545324418-cc1a3fa10c00"),
    },
  },
];

export const getBairro = (slug: string) => bairros.find((b) => b.slug === slug) ?? null;
