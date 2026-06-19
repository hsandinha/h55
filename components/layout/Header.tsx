"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#0a2540]/10 bg-[#f7f3ea]/88 py-3 backdrop-blur-md transition-all">
      <nav className="container mx-auto flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/h55.png"
            alt="H55 Negócios Imobiliários"
            width={60}
            height={40}
            priority
            className="md:h-[50px] md:w-[50px]"
          />
          <span className="hidden text-[0.58rem] font-medium uppercase tracking-[0.18em] text-[#60748d] sm:block">
            CRECI-PJ 9045
          </span>
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden items-center space-x-8 md:flex">
          <li>
            <Link
              href="/about"
              className="text-sm font-medium text-[#26364a] transition-colors hover:text-h55-gold"
            >
              Sobre Nós
            </Link>
          </li>
          <li>
            <Link
              href="/imoveis"
              className="text-sm font-medium text-[#26364a] transition-colors hover:text-h55-gold"
            >
              Imóveis
            </Link>
          </li>
          <li>
            <Link
              href="/bairros"
              className="text-sm font-medium text-[#26364a] transition-colors hover:text-h55-gold"
            >
              Bairros
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="text-sm font-medium text-[#26364a] transition-colors hover:text-h55-gold"
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              href="/admin"
              className="text-sm font-medium text-[#60748d] transition-colors hover:text-h55-gold"
            >
              Entrar
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="ml-4 border border-[#b8860b] bg-[#b8860b] px-5 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#191207] transition-colors hover:bg-[#0a2540] hover:text-[#f4efe6]"
            >
              Fale com um Especialista
            </Link>
          </li>
        </ul>

        {/* Menu Mobile */}
        <button
          className="flex h-10 w-10 items-center justify-center border border-[#0a2540]/15 transition hover:bg-[#0a2540]/5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <svg
            className="w-6 h-6 text-h55-blue"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>

        {/* Dropdown Mobile */}
        {menuOpen && (
          <div className="absolute left-0 top-full z-50 w-full border-b border-[#0a2540]/10 bg-[#f7f3ea]/97 shadow-md md:hidden">
            <ul className="flex flex-col items-center space-y-2 py-4">
              <li>
                <Link
                  href="/about"
                  className="font-medium text-[#26364a] transition-colors hover:text-h55-gold"
                  onClick={() => setMenuOpen(false)}
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/imoveis"
                  className="font-medium text-[#26364a] transition-colors hover:text-h55-gold"
                  onClick={() => setMenuOpen(false)}
                >
                  Imóveis
                </Link>
              </li>
              <li>
                <Link
                  href="/bairros"
                  className="font-medium text-[#26364a] transition-colors hover:text-h55-gold"
                  onClick={() => setMenuOpen(false)}
                >
                  Bairros
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-medium text-[#26364a] transition-colors hover:text-h55-gold"
                  onClick={() => setMenuOpen(false)}
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="font-medium text-[#60748d] transition-colors hover:text-h55-gold"
                  onClick={() => setMenuOpen(false)}
                >
                  Entrar
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="mt-2 border border-[#b8860b] bg-[#b8860b] px-5 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#191207] transition-colors hover:bg-[#0a2540] hover:text-[#f4efe6]"
                  onClick={() => setMenuOpen(false)}
                >
                  Fale com um Especialista
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
