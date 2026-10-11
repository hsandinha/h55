"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuChevronDown, LuUser, LuMenu, LuX } from "react-icons/lu";

/**
 * As frentes vivem dentro do menu "Áreas de atuação" em vez de ocuparem uma
 * posição no topo cada uma. Assim uma frente nova não alarga a barra.
 */
const AREAS = [
  { href: "/lancamentos", label: "Lançamentos imobiliários", para: "Para incorporadoras" },
  { href: "/imoveis-selecionados", label: "Imóveis selecionados", para: "Para proprietários" },
  { href: "/equity", label: "Private equity imobiliário", para: "Para investidores" },
  { href: "/frontstay", label: "Front Stay", para: "Unidade em operação hoteleira" },
  { href: "/internacional", label: "Investir nos EUA", para: "Imóvel no exterior" },
  { href: "/negocios", label: "Originação de negócios", para: "Para quem tem um negócio" },
];

const LINKS = [
  { href: "/about", label: "Sobre nós" },
  { href: "/imoveis", label: "Imóveis" },
];

const linkBase =
  "relative text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#26364a] transition-colors hover:text-[#9a7b1e]";

/** Sublinhado dourado que cresce a partir da esquerda e marca a página atual. */
const sublinhado =
  "after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-[#b8860b] after:transition-all after:duration-300 after:w-0 hover:after:w-full";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const areasRef = useRef<HTMLLIElement>(null);

  // A barra ganha sombra assim que a página sai do topo.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trocar de página fecha o que estiver aberto.
  useEffect(() => {
    setMenuOpen(false);
    setAreasOpen(false);
  }, [pathname]);

  // Esc fecha; clique fora fecha o menu de áreas.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setAreasOpen(false);
      setMenuOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (!areasRef.current?.contains(e.target as Node)) setAreasOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const emArea = AREAS.some((a) => pathname.startsWith(a.href)) || pathname === "/services";

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b bg-[#f7f3ea]/92 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "border-[#0a2540]/12 shadow-[0_1px_24px_rgba(10,37,64,0.07)]" : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 md:px-8 lg:px-10">
        {/* Marca */}
        <Link href="/" className="flex shrink-0 items-center gap-3.5" aria-label="H55, página inicial">
          <Image
            src="/images/h55.png"
            alt="H55 Negócios Imobiliários"
            width={48}
            height={48}
            priority
            className="h-10 w-10 md:h-11 md:w-11"
          />
          <span className="hidden h-7 w-px bg-[#0a2540]/15 sm:block" />
          <span className="hidden whitespace-nowrap text-[0.55rem] font-medium uppercase tracking-[0.22em] text-[#7b8ca1] sm:block">
            CRECI-PJ 9045
          </span>
        </Link>

        {/* Navegação */}
        <ul className="hidden items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`${linkBase} ${sublinhado} ${
                  pathname === l.href ? "text-[#9a7b1e] after:w-full" : ""
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}

          {/* Áreas de atuação */}
          <li
            ref={areasRef}
            className="relative"
            onMouseEnter={() => setAreasOpen(true)}
            onMouseLeave={() => setAreasOpen(false)}
          >
            <button
              type="button"
              onClick={() => setAreasOpen((v) => !v)}
              aria-expanded={areasOpen}
              aria-haspopup="true"
              className={`${linkBase} ${sublinhado} flex items-center gap-1.5 ${
                emArea ? "text-[#9a7b1e] after:w-full" : ""
              }`}
            >
              Áreas de atuação
              <LuChevronDown
                size={13}
                className={`transition-transform duration-300 ${areasOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`absolute right-0 top-full w-[21rem] pt-5 transition-all duration-200 ${
                areasOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0"
              }`}
            >
              <div className="border border-[#0a2540]/10 bg-[#fdfbf7] shadow-[0_18px_50px_rgba(10,37,64,0.13)]">
                <ul>
                  {AREAS.map((a) => (
                    <li key={a.href}>
                      <Link
                        href={a.href}
                        className="group block border-b border-[#0a2540]/8 px-6 py-4 transition-colors hover:bg-[#f2ece0]"
                      >
                        <span className="text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-[#9a7b1e]">
                          {a.para}
                        </span>
                        <span className="mt-1.5 block text-[0.92rem] font-medium leading-snug text-[#0a2540]">
                          {a.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="block px-6 py-3.5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#60748d] transition-colors hover:text-[#9a7b1e]"
                >
                  Ver todas as áreas
                </Link>
              </div>
            </div>
          </li>

          {/* Acesso restrito */}
          <li>
            <Link
              href="/admin"
              aria-label="Acesso restrito"
              title="Acesso restrito"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0a2540]/15 text-[#46566e] transition-colors hover:border-[#b8860b] hover:text-[#9a7b1e]"
            >
              <LuUser size={17} strokeWidth={1.7} />
            </Link>
          </li>
        </ul>

        {/* Mobile */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <Link
            href="/admin"
            aria-label="Acesso restrito"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0a2540]/15 text-[#46566e] transition-colors hover:border-[#b8860b] hover:text-[#9a7b1e]"
          >
            <LuUser size={17} strokeWidth={1.7} />
          </Link>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0a2540]/15 text-[#0a2540] transition hover:bg-[#0a2540]/5"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <LuX size={19} /> : <LuMenu size={19} />}
          </button>
        </div>

        {/* Painel mobile */}
        {menuOpen && (
          <div className="absolute left-0 top-full max-h-[calc(100vh-5rem)] w-full overflow-y-auto border-b border-[#0a2540]/10 bg-[#f7f3ea] shadow-[0_18px_40px_rgba(10,37,64,0.12)] lg:hidden">
            <ul className="px-5 py-2">
              {LINKS.map((l) => (
                <li key={l.href} className="border-b border-[#0a2540]/10">
                  <Link
                    href={l.href}
                    className="block py-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[#26364a]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="px-5 pb-6">
              <p className="pt-3 text-[0.56rem] font-semibold uppercase tracking-[0.22em] text-[#9a7b1e]">
                Áreas de atuação
              </p>
              <ul className="mt-1">
                {AREAS.map((a) => (
                  <li key={a.href} className="border-b border-[#0a2540]/10">
                    <Link href={a.href} className="block py-3.5">
                      <span className="text-[0.55rem] uppercase tracking-[0.2em] text-[#8a7a5e]">
                        {a.para}
                      </span>
                      <span className="mt-1 block text-[0.95rem] font-medium text-[#0a2540]">
                        {a.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="mt-4 inline-block text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#60748d]"
              >
                Ver todas as áreas
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
