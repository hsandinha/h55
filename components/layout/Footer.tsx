"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-white border-t border-gray-200 py-10 mt-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 tracking-tight">
            H55 Negócios Imobiliários
          </h3>
          <p className="text-gray-500 text-sm">
            &copy; {year ? year : ""} H55. Todos os direitos reservados.
          </p>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-h55-blue transition-colors"
              >
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-h55-blue transition-colors"
              >
                Termos de Uso
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
