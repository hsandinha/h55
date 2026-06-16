"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type FavoritesCtx = {
  ids: string[];
  isFav: (id: string) => boolean;
  toggle: (id: string) => void;
  count: number;
};

const Ctx = createContext<FavoritesCtx | undefined>(undefined);
const KEY = "h55:favoritos";

export function FavoritesProvider({ children }: { children: ReactNode }) {
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
    setIds((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  const isFav = (id: string) => ids.includes(id);

  return (
    <Ctx.Provider value={{ ids, isFav, toggle, count: ids.length }}>
      {children}
    </Ctx.Provider>
  );
}

export function useFavorites() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useFavorites deve ser usado dentro de FavoritesProvider");
  return c;
}
