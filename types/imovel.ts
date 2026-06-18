// types/imovel.ts
// Modelo de dados de imóvel — compatível com o projeto "strutural" (Firestore),
// adotado no h55 para que a vitrine consuma os mesmos dados do back-office.

export interface Proprietario {
  nome: string;
  contato: string;
  horarioContato?: string;
  email?: string;
  endereco?: string;
  ocupacao?: "Desocupado" | "Ocupado pelo proprietario" | "Alugado" | "Vago";
  localizacaoChaves?: string;
  tipoDocumento?: "Registro" | "Escritura" | "Contrato" | "Matricula" | "Outro";
  observacoesDocumentacao?: string;
  placaNoLocal?: boolean;
  usaFgts?: boolean;
}

export interface Endereco {
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  nomeCondominio?: string;
  pontoReferencia?: string;
}

export interface CaracteristicasImovel {
  areaDeServico?: boolean;
  aceitaPermuta?: boolean;
  churrasqueira?: boolean;
  closet?: boolean;
  dce?: boolean;
  lavabo?: boolean;
  mobiliado?: boolean;
  naPlanta?: boolean;
  alugado?: boolean;
  arCondicionado?: boolean;
  esquadriasDeAluminio?: boolean;
  varandaGourmet?: boolean;
  gasIndividual?: boolean;
  aguaIndividual?: boolean;
  semiSuites?: number;
  salas?: number;
  posicao?: "Frente" | "Fundos" | "Lateral" | "Interno" | "Cobertura" | "Nao informado";
  posicaoSolar?: "Manha" | "Tarde" | "Integral" | "Sombra" | "Nao informado";
  tipoPiso?: string;
  armariosEmbutidos?: string;
  benfeitorias?: string;
}

export interface CaracteristicasEdificio {
  alarme?: boolean;
  bicicletario?: boolean;
  churrasqueira?: boolean;
  elevadorsocial?: boolean;
  interfone?: boolean;
  jardim?: boolean;
  piscina?: boolean;
  playground?: boolean;
  portaria24h?: boolean;
  quadraesportiva?: boolean;
  salaodefestas?: boolean;
  sauna?: boolean;
  academia?: boolean;
  areadelazer?: boolean;
  rooftop?: boolean;
  tipoPortaria?: "Nenhuma" | "24h" | "Virtual" | "Diurna" | "Noturna";
  numeroPavimentos?: number;
  andarApartamento?: number;
  unidadesPorAndar?: number;
  numeroElevadores?: number;
  aquecimentoSolar?: boolean;
  boxDespejo?: boolean;
  cercaEletrica?: boolean;
  circuitoTv?: boolean;
  elevadorServico?: boolean;
  gasCanalizado?: boolean;
  lavanderia?: boolean;
  mercadinho?: boolean;
  piscinaRaia?: boolean;
  portaoEletronico?: boolean;
  quadraTenis?: boolean;
  quadraAreia?: boolean;
  rampaCadeirante?: boolean;
  salaoJogos?: boolean;
  tomadaEletrica?: boolean;
}

export type TipoImovel =
  | ""
  | "andar-corrido"
  | "apartamento"
  | "apto-area-privativa"
  | "casa-comercial"
  | "casa-residencial"
  | "casa-condominio"
  | "cobertura"
  | "estacionamento"
  | "fazenda-sitio"
  | "flat-hotel"
  | "galpao"
  | "loja"
  | "lote-terreno"
  | "predio-comercial"
  | "salas"
  | "vaga-de-garagem";

export interface Imovel {
  id: string;
  dataCadastro: string;
  codigo?: string;

  // Principais
  titulo: string;
  descricao?: string;
  preco: number;
  descontoPercent?: number;
  finalidade: "Comprar" | "Alugar";
  tipo: TipoImovel;
  emDestaque?: boolean;

  // Mídia
  fotos: string[];
  videoUrl?: string;
  panoUrl?: string; // imagem equiretangular para tour 360°
  matterportUrl?: string;

  // Endereço + coordenadas (lat/lng usados no mapa)
  endereco: Endereco;
  lat?: number;
  lng?: number;

  // Estrutura
  area: number;
  quartos: number;
  suites?: number;
  banheiros: number;
  vagas: number;
  varandas?: number;
  anoConstrucao?: number;

  // Valores adicionais
  valorCondominio?: number;
  valorIptu?: number;

  // Indicadores de investimento (exclusivos do h55)
  rentabilidadeAnual?: number; // % ao ano projetado
  valorizacao12m?: number; // % nos últimos 12 meses
  entradaMinima?: number; // R$ de entrada sugerida

  // Características
  caracteristicasImovel?: Partial<CaracteristicasImovel>;
  caracteristicasEdificio?: Partial<CaracteristicasEdificio>;

  // Status e negociação
  status?: "Ativo" | "Vendido" | "Inativo";
  finalidadeUso?: "Residencial" | "Comercial";
  exclusividade?: boolean;
  aceitaFinanciamento?: boolean;
  aceitaProposta?: boolean;

  // Proprietário
  proprietario?: Proprietario;
}

export type SearchFilters = {
  finalidade: "Comprar";
  localizacao: string[];
  tipo: string[];
  quartos: string;
  banheiros: string;
  suites: string;
  vagas: string;
  valorMin: string;
  valorMax: string;
  areaMin: string;
  areaMax: string;
  caracteristicasImovel: string[];
  caracteristicasEdificio: string[];
  codigo: string;
};

export const defaultFilters: SearchFilters = {
  finalidade: "Comprar",
  localizacao: [],
  tipo: [],
  quartos: "Todos",
  banheiros: "Todos",
  suites: "Todos",
  vagas: "Todos",
  valorMin: "",
  valorMax: "",
  areaMin: "",
  areaMax: "",
  caracteristicasImovel: [],
  caracteristicasEdificio: [],
  codigo: "",
};
