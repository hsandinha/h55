"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const MAX = 4;

type CompareCtx = {
  ids: string[];
  has: (id: string) => boolean;
  toggle: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
  count: number;
  max: number;
  full: boolean;
};

const Ctx = createContext<CompareCtx | undefined>(undefined);
const KEY = "h55:comparar";

export function CompareProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setIds(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(ids));
    } catch {
      /* ignore */
    }
  }, [ids]);

  const toggle = (id: string) =>
    setIds((p) => {
      if (p.includes(id)) return p.filter((x) => x !== id);
      if (p.length >= MAX) return p;
      return [...p, id];
    });
  const remove = (id: string) => setIds((p) => p.filter((x) => x !== id));
  const clear = () => setIds([]);
  const has = (id: string) => ids.includes(id);

  return (
    <Ctx.Provider
      value={{ ids, has, toggle, remove, clear, count: ids.length, max: MAX, full: ids.length >= MAX }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useCompare() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCompare deve ser usado dentro de CompareProvider");
  return c;
}
