"use client";

import { useState } from "react";
import {
  LuBuilding2,
  LuChevronLeft,
  LuChevronRight,
  LuGrip,
  LuHouse,
  LuImage,
  LuMapPin,
  LuTrash2,
  LuUpload,
  LuUser,
} from "react-icons/lu";
import type {
  CaracteristicasEdificio,
  CaracteristicasImovel,
  Endereco,
  Imovel,
  Proprietario,
} from "@/types/imovel";
import { uploadFoto } from "@/lib/storage";

const TIPOS: [string, string][] = [
  ["apartamento", "Apartamento"],
  ["cobertura", "Cobertura"],
  ["apto-area-privativa", "Área privativa"],
  ["casa-condominio", "Casa em condomínio"],
  ["casa-residencial", "Casa residencial"],
  ["casa-comercial", "Casa comercial"],
  ["flat-hotel", "Flat / Hotel"],
  ["loja", "Loja"],
  ["galpao", "Galpão"],
  ["lote-terreno", "Lote / Terreno"],
  ["andar-corrido", "Andar corrido"],
  ["predio-comercial", "Prédio comercial"],
  ["salas", "Salas"],
];

const CARAC_IMOVEL_BOOL: [string, string][] = [
  ["aguaIndividual", "Água Individual"],
  ["alugado", "Alugado"],
  ["arCondicionado", "Ar Condicionado"],
  ["areaDeServico", "Área de Serviço"],
  ["aceitaPermuta", "Aceita Permuta"],
  ["churrasqueira", "Churrasqueira"],
  ["closet", "Closet"],
  ["dce", "DCE"],
  ["esquadriasDeAluminio", "Esquadrias de Alumínio"],
  ["gasIndividual", "Gás Individual"],
  ["lavabo", "Lavabo"],
  ["mobiliado", "Mobiliado"],
  ["naPlanta", "Na Planta"],
  ["varandaGourmet", "Varanda Gourmet"],
];

const CARAC_EDIFICIO_BOOL: [string, string][] = [
  ["academia", "Academia"],
  ["alarme", "Alarme"],
  ["aquecimentoSolar", "Aquecimento Solar"],
  ["areadelazer", "Área de Lazer"],
  ["bicicletario", "Bicicletário"],
  ["boxDespejo", "Box despejo"],
  ["cercaEletrica", "Cerca elétrica"],
  ["churrasqueira", "Churrasqueira"],
  ["circuitoTv", "Circuito TV"],
  ["elevadorsocial", "Elevador Social"],
  ["elevadorServico", "Elevador Serviço"],
  ["gasCanalizado", "Gás Canalizado"],
  ["interfone", "Interfone"],
  ["jardim", "Jardim"],
  ["lavanderia", "Lavanderia"],
  ["mercadinho", "Mercadinho"],
  ["piscina", "Piscina"],
  ["piscinaRaia", "Piscina de raia"],
  ["playground", "Playground"],
  ["portaria24h", "Portaria 24h"],
  ["portaoEletronico", "Portão Eletrônico"],
  ["quadraesportiva", "Quadra Esportiva"],
  ["quadraTenis", "Quadra de Tênis"],
  ["quadraAreia", "Quadra de areia"],
  ["rampaCadeirante", "Rampa cadeirante"],
  ["rooftop", "Rooftop"],
  ["salaodefestas", "Salão de Festas"],
  ["salaoJogos", "Salão de Jogos"],
  ["sauna", "Sauna"],
  ["tomadaEletrica", "Tomada Elétrica"],
];

type StepKey = "localizacao" | "imovel" | "predio" | "proprietario" | "midia";
type PosicaoValue = NonNullable<CaracteristicasImovel["posicao"]>;
type PosicaoSolarValue = NonNullable<CaracteristicasImovel["posicaoSolar"]>;
type TipoPortariaValue = NonNullable<CaracteristicasEdificio["tipoPortaria"]>;
type OcupacaoValue = NonNullable<Proprietario["ocupacao"]>;

const POSICOES: PosicaoValue[] = [
  "Nao informado",
  "Frente",
  "Fundos",
  "Lateral",
  "Interno",
  "Cobertura",
];

const POSICOES_SOLAR: PosicaoSolarValue[] = [
  "Nao informado",
  "Manha",
  "Tarde",
  "Integral",
  "Sombra",
];

const TIPOS_PORTARIA: TipoPortariaValue[] = ["Nenhuma", "24h", "Virtual", "Diurna", "Noturna"];
const OCUPACOES: OcupacaoValue[] = [
  "Desocupado",
  "Ocupado pelo proprietario",
  "Alugado",
  "Vago",
];

const STEPS: {
  key: StepKey;
  label: string;
  icon: typeof LuMapPin;
}[] = [
  { key: "localizacao", label: "Localização", icon: LuMapPin },
  { key: "imovel", label: "Imóvel", icon: LuHouse },
  { key: "predio", label: "Prédio", icon: LuBuilding2 },
  { key: "proprietario", label: "Proprietário", icon: LuUser },
  { key: "midia", label: "Mídia", icon: LuImage },
];

type FormState = {
  titulo: string;
  codigo: string;
  tipo: string;
  finalidade: "Comprar" | "Alugar";
  status: "Ativo" | "Vendido" | "Inativo";
  finalidadeUso: "Residencial" | "Comercial";
  preco?: number;
  descontoPercent?: number;
  descricao: string;
  emDestaque: boolean;
  exclusividade: boolean;
  aceitaFinanciamento: boolean;
  aceitaProposta: boolean;
  area?: number;
  quartos?: number;
  suites?: number;
  semiSuites?: number;
  banheiros?: number;
  salas?: number;
  vagas?: number;
  varandas?: number;
  anoConstrucao?: number;
  valorCondominio?: number;
  valorIptu?: number;
  rentabilidadeAnual?: number;
  valorizacao12m?: number;
  entradaMinima?: number;
  lat?: number;
  lng?: number;
  endereco: Partial<Endereco>;
  posicao: NonNullable<CaracteristicasImovel["posicao"]>;
  posicaoSolar: NonNullable<CaracteristicasImovel["posicaoSolar"]>;
  tipoPiso: string;
  armariosEmbutidos: string;
  benfeitorias: string;
  numeroPavimentos?: number;
  andarApartamento?: number;
  unidadesPorAndar?: number;
  numeroElevadores?: number;
  tipoPortaria: NonNullable<CaracteristicasEdificio["tipoPortaria"]>;
  ocupacao: NonNullable<Proprietario["ocupacao"]>;
  localizacaoChaves: string;
  placaNoLocal: boolean;
  usaFgts: boolean;
  proprietario: Partial<Proprietario>;
  caracteristicasImovel: Record<string, boolean>;
  caracteristicasEdificio: Record<string, boolean>;
  fotos: string[];
  videoUrl: string;
  matterportUrl: string;
  panoUrl: string;
};

const inputCls =
  "h-12 w-full border border-[#d8dde5] bg-white px-4 text-sm text-[#233247] placeholder-[#9aa6b6] focus:border-[#2962ff] focus:outline-none";
const textareaCls =
  "min-h-32 w-full border border-[#d8dde5] bg-white px-4 py-3 text-sm text-[#233247] placeholder-[#9aa6b6] focus:border-[#2962ff] focus:outline-none";
const labelCls = "mb-2 block text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[#748095]";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-[#edf1f6] pt-6 first:border-0 first:pt-0">
      <div className="mb-5 flex items-center gap-4">
        <h3 className="text-3xl font-semibold tracking-[-0.03em] text-[#334155]">{title}</h3>
        <div className="h-px flex-1 bg-[#edf1f6]" />
      </div>
      {children}
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className={labelCls}>{label}</label>
      {children}
    </div>
  );
}

function Stepper({
  step,
  setStep,
}: {
  step: number;
  setStep: (value: number) => void;
}) {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="min-w-[860px]">
        <div className="relative flex items-start justify-between">
          <div className="absolute left-8 right-8 top-5 h-px bg-[#dfe5ee]" />
          <div
            className="absolute left-8 top-5 h-px bg-[#2962ff] transition-all"
            style={{ width: `calc(${(step / (STEPS.length - 1)) * 100}% - 2rem)` }}
          />
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            const active = index === step;
            const done = index < step;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setStep(index)}
                className="relative z-10 flex w-32 flex-col items-center gap-3 text-center"
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm transition ${
                    active || done
                      ? "border-[#2962ff] bg-white text-[#2962ff]"
                      : "border-[#dfe5ee] bg-white text-[#9aa6b6]"
                  }`}
                >
                  {done ? "✓" : <Icon size={17} />}
                </span>
                <span
                  className={`text-[0.78rem] font-semibold uppercase tracking-[0.08em] ${
                    active || done ? "text-[#2962ff]" : "text-[#9aa6b6]"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ToggleChip({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 border px-4 py-3 text-sm transition ${
        active
          ? "border-[#2962ff] bg-[#eff5ff] text-[#2962ff]"
          : "border-[#d8dde5] bg-white text-[#4a5568] hover:border-[#b7c2d0]"
      }`}
    >
      <span
        className={`h-5 w-5 border text-xs leading-[18px] ${
          active ? "border-[#2962ff] bg-[#2962ff] text-white" : "border-[#cfd7e3] bg-white text-transparent"
        }`}
      >
        ✓
      </span>
      {label}
    </button>
  );
}

function cleanObject<T extends Record<string, unknown>>(input: T): T | undefined {
  const entries = Object.entries(input).filter(([, value]) => {
    if (typeof value === "boolean") return value;
    if (typeof value === "number") return !Number.isNaN(value);
    return value !== undefined && value !== null && String(value).trim() !== "";
  });
  if (!entries.length) return undefined;
  return Object.fromEntries(entries) as T;
}

function pickOption<T extends readonly string[]>(value: unknown, options: T, fallback: T[number]): T[number] {
  return typeof value === "string" && (options as readonly string[]).includes(value) ? (value as T[number]) : fallback;
}

export function ImovelForm({
  initial,
  submitting,
  onSubmit,
  submitLabel = "Salvar imóvel",
}: {
  initial?: Imovel | null;
  submitting?: boolean;
  onSubmit: (values: Partial<Imovel>) => void;
  submitLabel?: string;
}) {
  const imovelMeta = (initial?.caracteristicasImovel ?? {}) as Record<string, unknown>;
  const edificioMeta = (initial?.caracteristicasEdificio ?? {}) as Record<string, unknown>;
  const owner: Partial<Proprietario> = initial?.proprietario ?? {};

  const [step, setStep] = useState(0);
  const [geocoding, setGeocoding] = useState(false);
  const [form, setForm] = useState<FormState>({
    titulo: initial?.titulo ?? "",
    codigo: initial?.codigo ?? "",
    tipo: initial?.tipo ?? "apartamento",
    finalidade: initial?.finalidade ?? "Comprar",
    status: initial?.status ?? "Ativo",
    finalidadeUso: initial?.finalidadeUso ?? "Residencial",
    preco: initial?.preco,
    descontoPercent: initial?.descontoPercent,
    descricao: initial?.descricao ?? "",
    emDestaque: initial?.emDestaque ?? false,
    exclusividade: initial?.exclusividade ?? false,
    aceitaFinanciamento: initial?.aceitaFinanciamento ?? false,
    aceitaProposta: initial?.aceitaProposta ?? true,
    area: initial?.area,
    quartos: initial?.quartos,
    suites: initial?.suites,
    semiSuites: typeof imovelMeta.semiSuites === "number" ? imovelMeta.semiSuites : undefined,
    banheiros: initial?.banheiros,
    salas: typeof imovelMeta.salas === "number" ? imovelMeta.salas : undefined,
    vagas: initial?.vagas,
    varandas: initial?.varandas,
    anoConstrucao: initial?.anoConstrucao,
    valorCondominio: initial?.valorCondominio,
    valorIptu: initial?.valorIptu,
    rentabilidadeAnual: initial?.rentabilidadeAnual,
    valorizacao12m: initial?.valorizacao12m,
    entradaMinima: initial?.entradaMinima,
    lat: initial?.lat,
    lng: initial?.lng,
    endereco: { ...(initial?.endereco ?? {}) },
    posicao: pickOption(imovelMeta.posicao, POSICOES, "Nao informado"),
    posicaoSolar: pickOption(imovelMeta.posicaoSolar, POSICOES_SOLAR, "Nao informado"),
    tipoPiso: typeof imovelMeta.tipoPiso === "string" ? imovelMeta.tipoPiso : "",
    armariosEmbutidos:
      typeof imovelMeta.armariosEmbutidos === "string" ? imovelMeta.armariosEmbutidos : "",
    benfeitorias: typeof imovelMeta.benfeitorias === "string" ? imovelMeta.benfeitorias : "",
    numeroPavimentos:
      typeof edificioMeta.numeroPavimentos === "number" ? edificioMeta.numeroPavimentos : undefined,
    andarApartamento:
      typeof edificioMeta.andarApartamento === "number" ? edificioMeta.andarApartamento : undefined,
    unidadesPorAndar:
      typeof edificioMeta.unidadesPorAndar === "number" ? edificioMeta.unidadesPorAndar : undefined,
    numeroElevadores:
      typeof edificioMeta.numeroElevadores === "number" ? edificioMeta.numeroElevadores : undefined,
    tipoPortaria: pickOption(edificioMeta.tipoPortaria, TIPOS_PORTARIA, "Nenhuma"),
    ocupacao: pickOption(owner.ocupacao, OCUPACOES, "Desocupado"),
    localizacaoChaves: owner.localizacaoChaves ?? "",
    placaNoLocal: owner.placaNoLocal ?? false,
    usaFgts: owner.usaFgts ?? false,
    proprietario: {
      nome: owner.nome ?? "",
      contato: owner.contato ?? "",
      email: owner.email ?? "",
      horarioContato: owner.horarioContato ?? "",
      endereco: owner.endereco ?? "",
      tipoDocumento: owner.tipoDocumento ?? "Registro",
      observacoesDocumentacao: owner.observacoesDocumentacao ?? "",
    },
    caracteristicasImovel: Object.fromEntries(
      CARAC_IMOVEL_BOOL.map(([key]) => [key, Boolean(imovelMeta[key])]),
    ),
    caracteristicasEdificio: Object.fromEntries(
      CARAC_EDIFICIO_BOOL.map(([key]) => [key, Boolean(edificioMeta[key])]),
    ),
    fotos: initial?.fotos?.length ? [...initial.fotos] : [],
    videoUrl: initial?.videoUrl ?? "",
    matterportUrl: initial?.matterportUrl ?? "",
    panoUrl: initial?.panoUrl ?? "",
  });

  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [cepLoading, setCepLoading] = useState(false);
  const [cepError, setCepError] = useState<string | null>(null);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const setEndereco = (key: keyof Endereco, value: string) =>
    setForm((prev) => ({ ...prev, endereco: { ...prev.endereco, [key]: value } }));

  const buscarCep = async (cepRaw: string) => {
    const cep = cepRaw.replace(/\D/g, "");
    if (cep.length !== 8) return;

    setCepLoading(true);
    setCepError(null);
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!res.ok) throw new Error("Não foi possível consultar o CEP.");
      const data = await res.json();
      if (data.erro) {
        setCepError("CEP não encontrado.");
        return;
      }
      setForm((prev) => ({
        ...prev,
        endereco: {
          ...prev.endereco,
          rua: data.logradouro || prev.endereco.rua,
          bairro: data.bairro || prev.endereco.bairro,
          cidade: data.localidade || prev.endereco.cidade,
          estado: data.uf || prev.endereco.estado,
          complemento: data.complemento || prev.endereco.complemento,
        },
      }));
    } catch (e) {
      setCepError(e instanceof Error ? e.message : "Falha ao consultar o CEP.");
    } finally {
      setCepLoading(false);
    }
  };

  const setProprietario = (key: keyof Proprietario, value: string) =>
    setForm((prev) => ({ ...prev, proprietario: { ...prev.proprietario, [key]: value } }));

  const num = (value: string) => (value === "" ? undefined : Number(value));

  const formatCurrency = (value?: number) => {
    if (value === undefined || value === null) return "";
    return new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const handleCurrencyChange = <K extends keyof FormState>(val: string, field: K) => {
    const digits = val.replace(/\D/g, "");
    if (!digits) {
      set(field, undefined as FormState[K]);
      return;
    }
    set(field, (Number(digits) / 100) as FormState[K]);
  };

  const toggleCarac = (
    group: "caracteristicasImovel" | "caracteristicasEdificio",
    key: string,
  ) =>
    setForm((prev) => ({
      ...prev,
      [group]: { ...prev[group], [key]: !prev[group][key] },
    }));

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploading(true);
    setUploadError(null);
    const urls: string[] = [];

    for (const file of Array.from(files)) {
      const result = await uploadFoto(file);
      if (result.ok && result.url) {
        urls.push(result.url);
      } else {
        setUploadError(result.error || "Falha no upload de uma imagem.");
      }
    }

    if (urls.length) {
      setForm((prev) => ({ ...prev, fotos: [...prev.fotos, ...urls] }));
    }
    setUploading(false);
  };

  const setFoto = (index: number, value: string) =>
    setForm((prev) => ({
      ...prev,
      fotos: prev.fotos.map((foto, idx) => (idx === index ? value : foto)),
    }));

  const addFoto = () => setForm((prev) => ({ ...prev, fotos: [...prev.fotos, ""] }));

  const removeFoto = (index: number) =>
    setForm((prev) => ({ ...prev, fotos: prev.fotos.filter((_, idx) => idx !== index) }));

  const nextStep = () => setStep((prev) => Math.min(prev + 1, STEPS.length - 1));
  const previousStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload: Partial<Imovel> = {
      titulo: form.titulo,
      codigo: form.codigo || undefined,
      tipo: form.tipo as Imovel["tipo"],
      finalidade: form.finalidade,
      status: form.status,
      finalidadeUso: form.finalidadeUso,
      preco: form.preco ?? 0,
      descontoPercent: form.descontoPercent,
      descricao: form.descricao || undefined,
      emDestaque: form.emDestaque,
      exclusividade: form.exclusividade,
      aceitaFinanciamento: form.aceitaFinanciamento,
      aceitaProposta: form.aceitaProposta,
      area: form.area ?? 0,
      quartos: form.quartos ?? 0,
      suites: form.suites,
      banheiros: form.banheiros ?? 0,
      vagas: form.vagas ?? 0,
      varandas: form.varandas,
      anoConstrucao: form.anoConstrucao,
      valorCondominio: form.valorCondominio,
      valorIptu: form.valorIptu,
      rentabilidadeAnual: form.rentabilidadeAnual,
      valorizacao12m: form.valorizacao12m,
      entradaMinima: form.entradaMinima,
      lat: form.lat,
      lng: form.lng,
      endereco: cleanObject({
        ...form.endereco,
      } as Record<string, unknown>) as Endereco | undefined,
      caracteristicasImovel: cleanObject({
        ...form.caracteristicasImovel,
        semiSuites: form.semiSuites,
        salas: form.salas,
        posicao: form.posicao,
        posicaoSolar: form.posicaoSolar,
        tipoPiso: form.tipoPiso,
        armariosEmbutidos: form.armariosEmbutidos,
        benfeitorias: form.benfeitorias,
      }) as Partial<CaracteristicasImovel> | undefined,
      caracteristicasEdificio: cleanObject({
        ...form.caracteristicasEdificio,
        numeroPavimentos: form.numeroPavimentos,
        andarApartamento: form.andarApartamento,
        unidadesPorAndar: form.unidadesPorAndar,
        numeroElevadores: form.numeroElevadores,
        tipoPortaria: form.tipoPortaria,
      }) as Partial<CaracteristicasEdificio> | undefined,
      proprietario: cleanObject({
        ...form.proprietario,
        ocupacao: form.ocupacao,
        localizacaoChaves: form.localizacaoChaves,
        placaNoLocal: form.placaNoLocal,
        usaFgts: form.usaFgts,
      }) as Proprietario | undefined,
      fotos: form.fotos.map((foto) => foto.trim()).filter(Boolean),
      videoUrl: form.videoUrl || undefined,
      matterportUrl: form.matterportUrl || undefined,
      panoUrl: form.panoUrl || undefined,
    };

    onSubmit(payload);
  };

  const renderLocalizacao = () => (
    <Section title="Endereço">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
        <Field label="CEP">
          <input
            className={inputCls}
            value={form.endereco.cep ?? ""}
            onChange={(e) => {
              const digits = e.target.value.replace(/\D/g, "").slice(0, 8);
              const masked = digits.replace(/^(\d{5})(\d)/, "$1-$2");
              setEndereco("cep", masked);
              if (digits.length === 8) buscarCep(digits);
            }}
            onBlur={(e) => buscarCep(e.target.value)}
            inputMode="numeric"
            maxLength={9}
            placeholder="00000-000"
          />
          {cepLoading && (
            <p className="mt-1 text-[0.65rem] text-[#9a6b04]">Buscando endereço...</p>
          )}
          {cepError && <p className="mt-1 text-[0.65rem] text-[#a33]">{cepError}</p>}
        </Field>
        <div className="md:col-span-3">
          <Field label="Rua / Av.">
            <input
              className={inputCls}
              value={form.endereco.rua ?? ""}
              onChange={(e) => setEndereco("rua", e.target.value)}
              placeholder="Rua das Flores"
            />
          </Field>
        </div>
        <Field label="Número">
          <input
            className={inputCls}
            value={form.endereco.numero ?? ""}
            onChange={(e) => setEndereco("numero", e.target.value)}
            placeholder="123"
          />
        </Field>
        <Field label="Complemento">
          <input
            className={inputCls}
            value={form.endereco.complemento ?? ""}
            onChange={(e) => setEndereco("complemento", e.target.value)}
            placeholder="Apto 201"
          />
        </Field>
        <div className="md:col-span-2">
          <Field label="Bairro">
            <input
              className={inputCls}
              value={form.endereco.bairro ?? ""}
              onChange={(e) => setEndereco("bairro", e.target.value)}
              placeholder="Centro"
            />
          </Field>
        </div>
        <div className="md:col-span-2">
          <Field label="Cidade">
            <input
              className={inputCls}
              value={form.endereco.cidade ?? ""}
              onChange={(e) => setEndereco("cidade", e.target.value)}
              placeholder="Belo Horizonte"
            />
          </Field>
        </div>
        <Field label="Estado">
          <input
            className={inputCls}
            value={form.endereco.estado ?? ""}
            onChange={(e) => setEndereco("estado", e.target.value)}
            placeholder="MG"
          />
        </Field>
      </div>

      <div className="mt-8">
        <Section title="Detalhes do endereço">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field label="Nome do condomínio">
              <input
                className={inputCls}
                value={form.endereco.nomeCondominio ?? ""}
                onChange={(e) => setEndereco("nomeCondominio", e.target.value)}
                placeholder="Residencial das Flores"
              />
            </Field>
            <Field label="Ponto de referência">
              <input
                className={inputCls}
                value={form.endereco.pontoReferencia ?? ""}
                onChange={(e) => setEndereco("pontoReferencia", e.target.value)}
                placeholder="Próximo ao shopping"
              />
            </Field>
            <Field label="Latitude">
              <input
                type="number"
                step="any"
                className={inputCls}
                value={form.lat ?? ""}
                onChange={(e) => set("lat", num(e.target.value))}
              />
            </Field>
            <Field label="Longitude">
              <input
                type="number"
                step="any"
                className={inputCls}
                value={form.lng ?? ""}
                onChange={(e) => set("lng", num(e.target.value))}
              />
            </Field>
            <Field label=" ">
              <button
                type="button"
                disabled={geocoding}
                onClick={async () => {
                  const { rua, numero, bairro, cidade, estado } = form.endereco;
                  const q = [rua, numero, bairro, cidade, estado].filter(Boolean).join(", ");
                  if (!q) return;
                  setGeocoding(true);
                  try {
                    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
                    const res = await fetch(
                      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(q)}&key=${key}`
                    );
                    const data = await res.json();
                    if (data.results?.[0]) {
                      const loc = data.results[0].geometry.location;
                      set("lat", loc.lat);
                      set("lng", loc.lng);
                    } else {
                      alert("Endereço não encontrado. Tente ser mais específico.");
                    }
                  } catch {
                    alert("Erro ao buscar coordenadas.");
                  } finally {
                    setGeocoding(false);
                  }
                }}
                className="flex h-10 w-full items-center justify-center gap-2 border border-[#b8860b]/40 bg-[#b8860b]/8 text-[0.72rem] font-semibold uppercase tracking-widest text-[#9a7b1e] transition hover:bg-[#b8860b]/15 disabled:opacity-50"
              >
                <LuMapPin size={13} />
                {geocoding ? "Buscando..." : "Buscar coordenadas"}
              </button>
            </Field>
          </div>
        </Section>
      </div>
    </Section>
  );

  const renderImovel = () => (
    <>
      <Section title="Anúncio">
        <div className="grid grid-cols-1 gap-5">
          <Field label="Título do anúncio">
            <input
              required
              className={inputCls}
              value={form.titulo}
              onChange={(e) => set("titulo", e.target.value)}
              placeholder="Apartamento 04 quartos / Cobertura"
            />
          </Field>
          <Field label="Descrição">
            <textarea
              className={textareaCls}
              value={form.descricao}
              onChange={(e) => set("descricao", e.target.value)}
              placeholder="Descrição comercial do imóvel"
            />
          </Field>
        </div>
      </Section>

      <Section title="Tipologia e preço">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <Field label="Finalidade">
            <select
              className={inputCls}
              value={form.finalidade}
              onChange={(e) => set("finalidade", e.target.value as FormState["finalidade"])}
            >
              <option value="Comprar">Comprar</option>
              <option value="Alugar">Alugar</option>
            </select>
          </Field>
          <Field label="Tipo de imóvel">
            <select className={inputCls} value={form.tipo} onChange={(e) => set("tipo", e.target.value)}>
              {TIPOS.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Status">
            <select
              className={inputCls}
              value={form.status}
              onChange={(e) => set("status", e.target.value as FormState["status"])}
            >
              <option value="Ativo">Ativo</option>
              <option value="Vendido">Vendido</option>
              <option value="Inativo">Inativo</option>
            </select>
          </Field>
          <Field label="Código interno">
            <input
              className={inputCls}
              value={form.codigo}
              onChange={(e) => set("codigo", e.target.value)}
              placeholder="Código"
            />
          </Field>
          <Field label="Preço">
            <input
              type="text"
              inputMode="numeric"
              className={inputCls}
              value={formatCurrency(form.preco)}
              onChange={(e) => handleCurrencyChange(e.target.value, "preco")}
            />
          </Field>
          <Field label="Desconto (%)">
            <input
              type="number"
              inputMode="decimal"
              min={0}
              max={100}
              step={0.1}
              className={inputCls}
              value={form.descontoPercent ?? ""}
              onChange={(e) => set("descontoPercent", num(e.target.value))}
              placeholder="Ex: 5"
            />
          </Field>
          <Field label="Condomínio">
            <input
              type="text"
              inputMode="numeric"
              className={inputCls}
              value={formatCurrency(form.valorCondominio)}
              onChange={(e) => handleCurrencyChange(e.target.value, "valorCondominio")}
            />
          </Field>
          <Field label="IPTU">
            <input
              type="text"
              inputMode="numeric"
              className={inputCls}
              value={formatCurrency(form.valorIptu)}
              onChange={(e) => handleCurrencyChange(e.target.value, "valorIptu")}
            />
          </Field>
          <Field label="Área (m²)">
            <input
              type="number"
              className={inputCls}
              value={form.area ?? ""}
              onChange={(e) => set("area", num(e.target.value))}
            />
          </Field>
        </div>
      </Section>

      <Section title="Cômodos e vagas">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 xl:grid-cols-7">
          {([
            ["quartos", "Quartos"],
            ["suites", "Suítes"],
            ["semiSuites", "Semi-suítes"],
            ["banheiros", "Banheiros"],
            ["salas", "Salas"],
            ["varandas", "Varandas"],
            ["vagas", "Vagas"],
          ] as [keyof FormState, string][]).map(([key, label]) => (
            <Field key={key} label={label}>
              <input
                type="number"
                className={inputCls}
                value={(form[key] as number | undefined) ?? ""}
                onChange={(e) => set(key, num(e.target.value) as never)}
              />
            </Field>
          ))}
        </div>
      </Section>

      <Section title="Detalhes adicionais">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
          <Field label="Ano de construção">
            <input
              type="number"
              className={inputCls}
              value={form.anoConstrucao ?? ""}
              onChange={(e) => set("anoConstrucao", num(e.target.value))}
            />
          </Field>
          <Field label="Posição">
            <select
              className={inputCls}
              value={form.posicao}
              onChange={(e) => set("posicao", e.target.value as PosicaoValue)}
            >
              {POSICOES.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Posição solar">
            <select
              className={inputCls}
              value={form.posicaoSolar}
              onChange={(e) => set("posicaoSolar", e.target.value as PosicaoSolarValue)}
            >
              {POSICOES_SOLAR.map((value) => (
                <option key={value} value={value}>
                  {value === "Manha" ? "Manhã" : value}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Tipo de piso">
            <input
              className={inputCls}
              value={form.tipoPiso}
              onChange={(e) => set("tipoPiso", e.target.value)}
              placeholder="Ex: Porcelanato"
            />
          </Field>
          <div className="md:col-span-2">
            <Field label="Armários embutidos">
              <input
                className={inputCls}
                value={form.armariosEmbutidos}
                onChange={(e) => set("armariosEmbutidos", e.target.value)}
                placeholder="Ex: Cozinha, quartos"
              />
            </Field>
          </div>
          <div className="md:col-span-2">
            <Field label="Benfeitorias">
              <input
                className={inputCls}
                value={form.benfeitorias}
                onChange={(e) => set("benfeitorias", e.target.value)}
                placeholder="Ex: Reforma completa"
              />
            </Field>
          </div>
        </div>
        <div className="mt-6">
          <ToggleChip
            active={form.emDestaque}
            label="Em destaque"
            onClick={() => set("emDestaque", !form.emDestaque)}
          />
        </div>
      </Section>

      <Section title="Características do imóvel">
        <div className="flex flex-wrap gap-3">
          {CARAC_IMOVEL_BOOL.map(([key, label]) => (
            <ToggleChip
              key={key}
              active={Boolean(form.caracteristicasImovel[key])}
              label={label}
              onClick={() => toggleCarac("caracteristicasImovel", key)}
            />
          ))}
        </div>
      </Section>
    </>
  );

  const renderPredio = () => (
    <>
      <Section title="Dados do prédio">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
          <Field label="Nº de pavimentos">
            <input
              type="number"
              className={inputCls}
              value={form.numeroPavimentos ?? ""}
              onChange={(e) => set("numeroPavimentos", num(e.target.value))}
            />
          </Field>
          <Field label="Andar do apt.">
            <input
              type="number"
              className={inputCls}
              value={form.andarApartamento ?? ""}
              onChange={(e) => set("andarApartamento", num(e.target.value))}
            />
          </Field>
          <Field label="Unidades / andar">
            <input
              type="number"
              className={inputCls}
              value={form.unidadesPorAndar ?? ""}
              onChange={(e) => set("unidadesPorAndar", num(e.target.value))}
            />
          </Field>
          <Field label="Nº de elevadores">
            <input
              type="number"
              className={inputCls}
              value={form.numeroElevadores ?? ""}
              onChange={(e) => set("numeroElevadores", num(e.target.value))}
            />
          </Field>
          <Field label="Tipo de portaria">
            <select
              className={inputCls}
              value={form.tipoPortaria}
              onChange={(e) => set("tipoPortaria", e.target.value as TipoPortariaValue)}
            >
              {TIPOS_PORTARIA.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </Field>
        </div>
      </Section>

      <Section title="Características do edifício">
        <div className="flex flex-wrap gap-3">
          {CARAC_EDIFICIO_BOOL.map(([key, label]) => (
            <ToggleChip
              key={key}
              active={Boolean(form.caracteristicasEdificio[key])}
              label={label}
              onClick={() => toggleCarac("caracteristicasEdificio", key)}
            />
          ))}
        </div>
      </Section>
    </>
  );

  const renderProprietario = () => (
    <>
      <Section title="Status e negociação">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <Field label="Uso do imóvel">
            <select
              className={inputCls}
              value={form.finalidadeUso}
              onChange={(e) => set("finalidadeUso", e.target.value as FormState["finalidadeUso"])}
            >
              <option value="Residencial">Residencial</option>
              <option value="Comercial">Comercial</option>
            </select>
          </Field>
          <Field label="Ocupação">
            <select
              className={inputCls}
              value={form.ocupacao}
              onChange={(e) => set("ocupacao", e.target.value as OcupacaoValue)}
            >
              {OCUPACOES.map((value) => (
                <option key={value} value={value}>
                  {value === "Ocupado pelo proprietario" ? "Ocupado pelo proprietário" : value}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Localização das chaves">
            <input
              className={inputCls}
              value={form.localizacaoChaves}
              onChange={(e) => set("localizacaoChaves", e.target.value)}
              placeholder="Ex: Portaria, Imobiliária"
            />
          </Field>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <ToggleChip
            active={form.exclusividade}
            label="Exclusividade"
            onClick={() => set("exclusividade", !form.exclusividade)}
          />
          <ToggleChip
            active={form.placaNoLocal}
            label="Placa no local"
            onClick={() => set("placaNoLocal", !form.placaNoLocal)}
          />
          <ToggleChip
            active={form.aceitaFinanciamento}
            label="Aceita financiamento"
            onClick={() => set("aceitaFinanciamento", !form.aceitaFinanciamento)}
          />
          <ToggleChip
            active={form.usaFgts}
            label="Usa FGTS"
            onClick={() => set("usaFgts", !form.usaFgts)}
          />
          <ToggleChip
            active={form.aceitaProposta}
            label="Aceita proposta"
            onClick={() => set("aceitaProposta", !form.aceitaProposta)}
          />
        </div>
      </Section>

      <Section title="Dados do proprietário">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Field label="Nome completo">
            <input
              className={inputCls}
              value={form.proprietario.nome ?? ""}
              onChange={(e) => setProprietario("nome", e.target.value)}
            />
          </Field>
          <Field label="Contato (telefone / whatsapp)">
            <input
              className={inputCls}
              value={form.proprietario.contato ?? ""}
              onChange={(e) => setProprietario("contato", e.target.value)}
            />
          </Field>
          <Field label="E-mail">
            <input
              className={inputCls}
              value={form.proprietario.email ?? ""}
              onChange={(e) => setProprietario("email", e.target.value)}
              placeholder="proprietario@email.com"
            />
          </Field>
          <Field label="Melhor horário para contato">
            <input
              className={inputCls}
              value={form.proprietario.horarioContato ?? ""}
              onChange={(e) => setProprietario("horarioContato", e.target.value)}
              placeholder="OBS: Chaves na portaria."
            />
          </Field>
          <div className="md:col-span-2">
            <Field label="Endereço do proprietário">
              <input
                className={inputCls}
                value={form.proprietario.endereco ?? ""}
                onChange={(e) => setProprietario("endereco", e.target.value)}
                placeholder="Endereço completo"
              />
            </Field>
          </div>
        </div>
      </Section>

      <Section title="Documentação">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Field label="Tipo de documento">
            <select
              className={inputCls}
              value={form.proprietario.tipoDocumento ?? "Registro"}
              onChange={(e) => setProprietario("tipoDocumento", e.target.value)}
            >
              <option value="Registro">Registro</option>
              <option value="Escritura">Escritura</option>
              <option value="Contrato">Contrato</option>
              <option value="Matricula">Matrícula</option>
              <option value="Outro">Outro</option>
            </select>
          </Field>
          <div className="md:col-span-2">
            <Field label="Observações sobre a documentação">
              <textarea
                className={textareaCls}
                value={form.proprietario.observacoesDocumentacao ?? ""}
                onChange={(e) => setProprietario("observacoesDocumentacao", e.target.value)}
              />
            </Field>
          </div>
        </div>
      </Section>
    </>
  );

  const renderMidia = () => (
    <>
      <Section title="Fotos do imóvel">
        <label className="flex cursor-pointer flex-col items-center justify-center gap-3 border border-dashed border-[#d8dde5] bg-[#f7f9fc] px-6 py-14 text-center hover:border-[#2962ff] hover:bg-[#fbfdff]">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#eef4ff] text-[#2962ff]">
            <LuImage size={24} />
          </span>
          <span className="text-xl font-medium text-[#334155]">
            {uploading ? "Enviando fotos..." : "Clique para adicionar fotos"}
          </span>
          <span className="text-sm text-[#98a3b3]">JPG, PNG, WEBP — múltiplas ao mesmo tempo</span>
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            disabled={uploading}
            onChange={(e) => handleFiles(e.target.files)}
          />
        </label>
        {uploadError && <p className="mt-3 text-sm text-[#b42318]">{uploadError}</p>}

        {form.fotos.length > 0 && (
          <>
            <p className="mt-8 text-sm text-[#98a3b3]">
              Arraste para reordenar · {form.fotos.length} fotos · A primeira será a capa
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
              {form.fotos.map((foto, index) => (
                <div key={`${foto}-${index}`} className="relative overflow-hidden border border-[#d8dde5] bg-white">
                  <div className="absolute left-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-md bg-[#00000080] text-white">
                    <LuGrip size={14} />
                  </div>
                  {index === 0 && (
                    <span className="absolute left-2 top-12 z-10 bg-[#ffb100] px-2 py-1 text-[0.65rem] font-semibold uppercase text-white">
                      Capa
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => removeFoto(index)}
                    className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-md bg-[#00000080] text-white"
                    aria-label="Remover foto"
                  >
                    <LuTrash2 size={14} />
                  </button>
                  <div className="aspect-[4/3] bg-[#f5f7fb]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={foto} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="border-t border-[#edf1f6] p-3">
                    <div className="mb-2 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[#748095]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <input
                      className={inputCls}
                      value={foto}
                      onChange={(e) => setFoto(index, e.target.value)}
                      placeholder="https://..."
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <button
          type="button"
          onClick={addFoto}
          className="mt-5 inline-flex items-center gap-2 border border-[#d8dde5] bg-white px-4 py-3 text-sm font-medium text-[#334155] transition hover:border-[#2962ff] hover:text-[#2962ff]"
        >
          <LuUpload size={16} />
          Adicionar URL manual
        </button>
      </Section>

      <Section title="Links de vídeo e tour virtual">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="md:col-span-1">
            <Field label="URL do vídeo (YouTube)">
              <input
                className={inputCls}
                value={form.videoUrl}
                onChange={(e) => set("videoUrl", e.target.value)}
                placeholder="https://youtube.com/watch?v=..."
              />
            </Field>
          </div>
          <div className="md:col-span-1">
            <Field label="URL Matterport (tour 3D)">
              <input
                className={inputCls}
                value={form.matterportUrl}
                onChange={(e) => set("matterportUrl", e.target.value)}
                placeholder="https://my.matterport.com/show/..."
              />
            </Field>
          </div>
          <div className="md:col-span-2">
            <Field label="URL panorâmica 360°">
              <input
                className={inputCls}
                value={form.panoUrl}
                onChange={(e) => set("panoUrl", e.target.value)}
                placeholder="https://..."
              />
            </Field>
          </div>
        </div>
      </Section>
    </>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Stepper step={step} setStep={setStep} />

      <div className="border border-[#e5eaf1] bg-white px-6 py-8 shadow-[0_12px_40px_rgba(15,23,42,0.05)] sm:px-8">
        {step === 0 && renderLocalizacao()}
        {step === 1 && renderImovel()}
        {step === 2 && renderPredio()}
        {step === 3 && renderProprietario()}
        {step === 4 && renderMidia()}
      </div>

      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={previousStep}
          disabled={step === 0}
          className="inline-flex min-w-36 items-center justify-center gap-2 border border-[#d8dde5] bg-white px-5 py-4 text-sm font-medium text-[#5c6778] transition disabled:opacity-50"
        >
          <LuChevronLeft size={16} />
          Anterior
        </button>

        <p className="hidden text-sm text-[#98a3b3] md:block">
          Etapa {step + 1} de {STEPS.length}
        </p>

        {step < STEPS.length - 1 ? (
          <button
            type="button"
            onClick={nextStep}
            className="inline-flex min-w-36 items-center justify-center gap-2 bg-[#2962ff] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#1f53e5]"
          >
            Próximo
            <LuChevronRight size={16} />
          </button>
        ) : (
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex min-w-44 items-center justify-center gap-2 bg-[#2962ff] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#1f53e5] disabled:opacity-50"
          >
            {submitting ? "Salvando..." : submitLabel}
          </button>
        )}
      </div>
    </form>
  );
}
