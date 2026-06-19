"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="mt-auto border-t border-[#b8860b]/25 bg-[#030c17] py-12 text-[#f4efe6]">
      <div className="container mx-auto flex flex-col gap-8 px-6 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col items-start">
          <Image
            src="/images/h55.png"
            alt="H55 Negócios Imobiliários"
            width={58}
            height={42}
            className="mb-5 h-auto w-14"
          />
          <h3
            className="mb-2 text-2xl font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            H55 Negócios Imobiliários
          </h3>
          <p className="text-sm text-[#9fb0c4]">
            &copy; {year ? year : ""} H55. Curadoria imobiliária para investidores.
          </p>
          <p className="mt-1 text-xs text-[#607080] tracking-wide">CRECI-PJ 9045</p>
        </div>
        <nav>
          <ul className="flex flex-col gap-3 text-sm sm:flex-row sm:gap-6">
            <li>
              <Link
                href="/privacy"
                className="text-[#9fb0c4] transition-colors hover:text-[#d9ad45]"
              >
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-[#9fb0c4] transition-colors hover:text-[#d9ad45]"
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
