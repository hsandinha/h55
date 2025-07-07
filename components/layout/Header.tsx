"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm py-3 transition-all">
      <nav className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/h55.png"
            alt="H55 Negócios Imobiliários"
            width={100}
            height={100}
            priority
            className="rounded md:w-[50px] md:h-[40px]" // maior no desktop
          />
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <Link
              href="/about"
              className="text-gray-700 hover:text-h55-gold transition-colors font-medium"
            >
              Sobre Nós
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="text-gray-700 hover:text-h55-gold transition-colors font-medium"
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              href="/insights"
              className="text-gray-700 hover:text-h55-gold transition-colors font-medium"
            >
              Insights
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-h55-gold transition-colors font-medium"
            >
              Contato
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 rounded-full bg-h55-gold text-gray-700 font-semibold shadow hover:bg-h55-blue hover:text-h55-gold transition-colors"
            >
              Fale com um Especialista
            </Link>
          </li>
        </ul>

        {/* Menu Mobile */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded hover:bg-gray-100 transition"
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
          <div className="absolute top-full left-0 w-full bg-white/95 shadow-md md:hidden animate-fade-in z-50">
            <ul className="flex flex-col items-center py-4 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-h55-gold transition-colors font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-700 hover:text-h55-gold transition-colors font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="text-gray-700 hover:text-h55-gold transition-colors font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-h55-gold transition-colors font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="mt-2 px-5 py-2 rounded-full bg-h55-gold text-gray-700 font-semibold shadow hover:bg-h55-blue hover:text-h55-gold transition-colors"
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
