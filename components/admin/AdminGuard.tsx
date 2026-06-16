"use client";

import type { ComponentType, ReactNode } from "react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  LuBuilding2,
  LuCalendar,
  LuChevronLeft,
  LuImage,
  LuLayoutDashboard,
  LuLogOut,
  LuMenu,
  LuUsers,
  LuUserCog,
  LuX,
} from "react-icons/lu";
import { isSupabaseConfigured } from "@/lib/supabaseClient";
import { getSessionEmail, onAuthChange, signOut } from "@/lib/auth";

type NavItem = {
  href: string;
  label: string;
  description: string;
  icon: ComponentType<{ size?: number; className?: string }>;
};

const navItems: NavItem[] = [
  {
    href: "/admin",
    label: "Painel",
    description: "Visão geral",
    icon: LuLayoutDashboard,
  },
  {
    href: "/admin/imoveis",
    label: "Imóveis",
    description: "Portfólio e cadastro",
    icon: LuBuilding2,
  },
  {
    href: "/admin/visitas",
    label: "Visitas",
    description: "Agendamentos",
    icon: LuCalendar,
  },
  {
    href: "/admin/leads",
    label: "Leads",
    description: "Contatos do site",
    icon: LuUsers,
  },
  {
    href: "/admin/hero",
    label: "Hero",
    description: "Mídia da home",
    icon: LuImage,
  },
  {
    href: "/admin/usuarios",
    label: "Usuários",
    description: "Acessos da equipe",
    icon: LuUserCog,
  },
];

function isActive(pathname: string, href: string) {
  if (href === "/admin") return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

function AdminSidebar({
  email,
  pathname,
  mobile = false,
  onNavigate,
  onSignOut,
}: {
  email: string;
  pathname: string;
  mobile?: boolean;
  onNavigate: () => void;
  onSignOut: () => void;
}) {
  return (
    <aside
      className={`flex h-full flex-col border-r border-[#caa64a]/20 bg-[#071b31] text-[#f4efe6] ${
        mobile ? "w-[20rem] max-w-[86vw]" : "w-72"
      }`}
    >
      <div className="border-b border-[#caa64a]/15 px-6 py-6">
        <div className="flex items-start justify-between gap-4">
          <Link href="/admin" onClick={onNavigate} className="block">
            <span className="font-display block text-3xl font-bold leading-none text-[#f4efe6]">
              H55
            </span>
            <span className="mt-2 block text-[0.58rem] uppercase tracking-[0.3em] text-[#caa64a]">
              Painel executivo
            </span>
          </Link>
          {mobile && (
            <button
              type="button"
              onClick={onNavigate}
              aria-label="Fechar menu"
              className="flex h-9 w-9 items-center justify-center border border-[#caa64a]/25 text-[#caa64a]"
            >
              <LuX size={17} />
            </button>
          )}
        </div>
        <Link
          href="/"
          onClick={onNavigate}
          className="mt-6 inline-flex items-center gap-2 border border-[#caa64a]/30 px-3 py-2 text-[0.58rem] uppercase tracking-[0.24em] text-[#9fb0c4] transition hover:border-[#caa64a] hover:text-[#f4efe6]"
        >
          <LuChevronLeft size={13} />
          Site público
        </Link>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={`group flex items-center gap-3 border px-3 py-3 transition ${
                active
                  ? "border-[#caa64a]/35 bg-[#f7f4ee] text-[#071b31]"
                  : "border-transparent text-[#b7c2d0] hover:border-[#caa64a]/20 hover:bg-white/[0.04] hover:text-[#f4efe6]"
              }`}
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center border ${
                  active
                    ? "border-[#caa64a]/45 text-[#9a6b04]"
                    : "border-[#caa64a]/20 text-[#caa64a]"
                }`}
              >
                <Icon size={17} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold">{item.label}</span>
                <span
                  className={`mt-0.5 block text-[0.58rem] uppercase tracking-[0.2em] ${
                    active ? "text-[#66748a]" : "text-[#6f839c]"
                  }`}
                >
                  {item.description}
                </span>
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-[#caa64a]/15 p-4">
        <div className="border border-[#caa64a]/20 bg-white/[0.04] p-3">
          <p className="text-[0.56rem] uppercase tracking-[0.24em] text-[#6f839c]">Sessão</p>
          <p className="mt-1 truncate text-xs text-[#d7dee8]">{email}</p>
          <button
            onClick={onSignOut}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 border border-[#caa64a]/30 px-3 py-2 text-[0.58rem] uppercase tracking-[0.24em] text-[#caa64a] transition hover:bg-[#caa64a] hover:text-[#1a1206]"
          >
            <LuLogOut size={13} />
            Sair
          </button>
        </div>
      </div>
    </aside>
  );
}

export function AdminGuard({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const configured = isSupabaseConfigured();
  const [ready, setReady] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!configured) {
      setReady(true);
      return;
    }
    let unsub = () => {};
    (async () => {
      const e = await getSessionEmail();
      setEmail(e);
      setReady(true);
      if (!e) router.replace("/admin/login");
    })();
    unsub = onAuthChange((e) => {
      setEmail(e);
      if (!e) router.replace("/admin/login");
    });
    return () => unsub();
  }, [configured, router]);

  if (!ready) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7f4ee]">
        <p className="eyebrow text-[#9a7b1e]">Verificando acesso...</p>
      </main>
    );
  }

  if (!configured) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7f4ee] px-6">
        <div className="max-w-md border border-[#b8860b]/20 bg-white p-8 text-center">
          <p className="eyebrow text-[#9a7b1e]">Configuração necessária</p>
          <h1 className="font-display mt-3 text-2xl font-bold text-[#071b31]">
            Supabase não configurado
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-[#52617a]">
            Configure `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY`
            para acessar o painel e gerenciar dados reais.
          </p>
        </div>
      </main>
    );
  }

  if (!email) return null; // redirecionando para login

  const handleSignOut = async () => {
    await signOut();
    router.replace("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#071b31]">
      <div className="fixed inset-y-0 left-0 z-40 hidden lg:block">
        <AdminSidebar
          email={email}
          pathname={pathname}
          onNavigate={() => setMobileMenuOpen(false)}
          onSignOut={handleSignOut}
        />
      </div>

      <header className="sticky top-0 z-30 border-b border-[#d9caa7] bg-[#f8f4ed]/95 px-4 py-3 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
            className="flex h-10 w-10 items-center justify-center border border-[#caa64a]/35 text-[#071b31]"
          >
            <LuMenu size={18} />
          </button>
          <Link href="/admin" className="font-display text-xl font-bold text-[#071b31]">
            H55 · Painel
          </Link>
          <button
            onClick={handleSignOut}
            aria-label="Sair"
            className="flex h-10 w-10 items-center justify-center border border-[#caa64a]/35 text-[#9a6b04]"
          >
            <LuLogOut size={16} />
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Fechar menu"
            className="absolute inset-0 bg-[#06121f]/60"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative h-full">
            <AdminSidebar
              email={email}
              pathname={pathname}
              mobile
              onNavigate={() => setMobileMenuOpen(false)}
              onSignOut={handleSignOut}
            />
          </div>
        </div>
      )}

      <main className="min-h-screen lg:pl-72">
        <div className="mx-auto w-full max-w-[1520px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
