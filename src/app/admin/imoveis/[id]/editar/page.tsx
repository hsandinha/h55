"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { LuChevronLeft } from "react-icons/lu";
import { AdminGuard } from "@/components/admin/AdminGuard";
import { ImovelForm } from "@/components/admin/ImovelForm";
import { getImovelByIdAdmin, updateImovel } from "@/lib/properties";
import type { Imovel } from "@/types/imovel";

export default function EditarImovelPage() {
  return (
    <AdminGuard>
      <Inner />
    </AdminGuard>
  );
}

function Inner() {
  const params = useParams();
  const id = String(params?.id ?? "");
  const router = useRouter();
  const [imovel, setImovel] = useState<Imovel | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const d = await getImovelByIdAdmin(id);
      if (!cancelled) {
        setImovel(d);
        setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [id]);

  const onSubmit = async (values: Partial<Imovel>) => {
    setSaving(true);
    setError(null);
    const r = await updateImovel(id, values);
    setSaving(false);
    if (r.ok) router.push("/admin/imoveis");
    else setError(r.error || "Erro ao salvar.");
  };

  return (
    <div className="space-y-7">
      <div className="border-b border-[#d7c7a6] pb-6">
        <Link
          href="/admin/imoveis"
          className="inline-flex h-12 w-12 items-center justify-center border border-[#d7dee8] bg-white text-[#52617a] transition hover:border-[#9a7b1e] hover:text-[#9a7b1e]"
          aria-label="Voltar ao portfólio"
        >
          <LuChevronLeft size={18} />
        </Link>
        <div className="mt-4">
          <p className="eyebrow text-[#8a97a8]">Portfólio</p>
          <h1 className="font-display mt-2 text-4xl font-bold text-[#071b31]">Editar Imóvel</h1>
          {imovel && (
            <p className="mt-3 text-lg text-[#52617a]">
              Alterando dados do imóvel:{" "}
              <span className="font-semibold text-[#233247]">{imovel.titulo}</span>
              {imovel.codigo ? ` (${imovel.codigo})` : ""}
            </p>
          )}
        </div>
      </div>
      {error && (
        <p className="mb-4 border border-[#a33]/30 bg-[#a33]/5 px-4 py-3 text-sm text-[#a33]">{error}</p>
      )}
      {loading ? (
        <p className="text-sm text-[#52617a]">Carregando...</p>
      ) : !imovel ? (
        <p className="text-sm text-[#52617a]">Imóvel não encontrado.</p>
      ) : (
        <ImovelForm
          initial={imovel}
          onSubmit={onSubmit}
          submitting={saving}
          submitLabel="Salvar alterações"
        />
      )}
    </div>
  );
}
