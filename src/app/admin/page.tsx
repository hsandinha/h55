"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  LuArrowRight,
  LuBuilding2,
  LuCalendar,
  LuImage,
  LuShieldCheck,
  LuUserCog,
  LuUsers,
} from "react-icons/lu";
import { AdminGuard } from "@/components/admin/AdminGuard";
import { getAllImoveis } from "@/lib/properties";
import { getVisitas } from "@/lib/visitas";
import { getLeads } from "@/lib/leads";
import { getAllHeroSlides } from "@/lib/hero";
import { listAdminUsers } from "@/lib/users";

export default function AdminHomePage() {
  return (
    <AdminGuard>
      <Inner />
    </AdminGuard>
  );
}

function Inner() {
  const [counts, setCounts] = useState({ imoveis: 0, visitas: 0, leads: 0, hero: 0, usuarios: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const safe = async <T,>(promise: Promise<T>, emptyValue: T) => {
      try {
        return await promise;
      } catch {
        return emptyValue;
      }
    };

    (async () => {
      const [im, vi, le, he, us] = await Promise.all([
        safe(getAllImoveis(), []),
        safe(getVisitas(), []),
        safe(getLeads(), []),
        safe(getAllHeroSlides(), []),
        safe(listAdminUsers(), { users: [] }),
      ]);
      if (!cancelled) {
        setCounts({
          imoveis: im.length,
          visitas: vi.length,
          leads: le.length,
          hero: he.length,
          usuarios: us.users.length,
        });
        setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const cards = [
    {
      label: "Imóveis",
      n: counts.imoveis,
      href: "/admin/imoveis",
      icon: LuBuilding2,
      desc: "Portfólio, fotos, valores e status comercial.",
    },
    {
      label: "Visitas",
      n: counts.visitas,
      href: "/admin/visitas",
      icon: LuCalendar,
      desc: "Solicitações de agendamento recebidas pelo site.",
    },
    {
      label: "Leads",
      n: counts.leads,
      href: "/admin/leads",
      icon: LuUsers,
      desc: "Conversas e contatos enviados pelos formulários.",
    },
    {
      label: "Hero",
      n: counts.hero,
      href: "/admin/hero",
      icon: LuImage,
      desc: "Mídia principal da página inicial.",
    },
    {
      label: "Usuários",
      n: counts.usuarios,
      href: "/admin/usuarios",
      icon: LuUserCog,
      desc: "Acessos internos da equipe H55.",
    },
  ];

  return (
    <div className="space-y-8">
      <section className="border border-[#d7c7a6] bg-[#071b31] p-6 text-[#f7f4ee] sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow text-[#caa64a]">Operação H55</p>
            <h1 className="font-display mt-3 text-4xl font-bold md:text-5xl">Painel executivo</h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#b7c2d0]">
              Gestão do portfólio, solicitações comerciais, mídia da home e acessos da equipe em
              um ambiente mais direto para rotina de operação.
            </p>
          </div>
          <div className="border border-[#caa64a]/20 bg-white/[0.04] p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center border border-[#caa64a]/35 text-[#caa64a]">
                <LuShieldCheck size={20} />
              </span>
              <div>
                <p className="text-[0.58rem] uppercase tracking-[0.24em] text-[#6f839c]">
                  Ambiente
                </p>
                <p className="mt-1 text-sm font-semibold text-[#f7f4ee]">Autenticado</p>
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-[#9fb0c4]">
              Dados reais via Supabase. Sem base local ou registros simulados no painel.
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <Link
              key={c.href}
              href={c.href}
              className="group flex min-h-48 flex-col border border-[#d7c7a6] bg-white/90 p-5 shadow-[0_18px_50px_rgba(7,27,49,0.05)] transition hover:-translate-y-0.5 hover:border-[#b8860b]/55"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center border border-[#b8860b]/35 bg-[#f7f4ee] text-[#9a6b04]">
                  <Icon size={20} />
                </span>
                <span className="font-display text-3xl font-bold text-[#071b31]">
                  {loading ? "·" : c.n}
                </span>
              </div>
              <h2 className="font-display mt-5 text-xl font-bold text-[#071b31]">{c.label}</h2>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-[#52617a]">{c.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[0.58rem] uppercase tracking-[0.24em] text-[#9a6b04]">
                Abrir
                <LuArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          );
        })}
      </div>

      <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="border border-[#d7c7a6] bg-white/90 p-6">
          <p className="eyebrow text-[#9a6b04]">Prioridade</p>
          <h2 className="font-display mt-2 text-2xl font-bold text-[#071b31]">
            Cadastre imóveis reais e mantenha status ativos
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#52617a]">
            A vitrine pública exibe apenas imóveis ativos vindos da view segura do Supabase.
            Use o cadastro para controlar portfólio, mídia e indicadores.
          </p>
          <Link
            href="/admin/imoveis/novo"
            className="mt-5 inline-flex items-center gap-2 bg-[#071b31] px-5 py-3 text-[0.62rem] uppercase tracking-[0.24em] text-[#f7f4ee] transition hover:bg-[#b8860b] hover:text-[#1a1206]"
          >
            Novo imóvel
            <LuArrowRight size={14} />
          </Link>
        </div>
        <div className="border border-[#d7c7a6] bg-[#f9f6ef] p-6">
          <p className="eyebrow text-[#9a6b04]">Leitura rápida</p>
          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between border-b border-[#d7c7a6] pb-3">
              <span className="text-sm text-[#52617a]">Demandas comerciais</span>
              <span className="font-display text-xl font-bold text-[#071b31]">
                {loading ? "·" : counts.visitas + counts.leads}
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-[#d7c7a6] pb-3">
              <span className="text-sm text-[#52617a]">Mídias do hero</span>
              <span className="font-display text-xl font-bold text-[#071b31]">
                {loading ? "·" : counts.hero}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#52617a]">Usuários com acesso</span>
              <span className="font-display text-xl font-bold text-[#071b31]">
                {loading ? "·" : counts.usuarios}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
