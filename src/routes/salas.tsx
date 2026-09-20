import { createFileRoute } from "@tanstack/react-router";

import { DashboardLayout } from "@/components/dashboard/layout";
import { RoomsGrid } from "@/components/dashboard/rooms-grid";
import { salas } from "@/components/dashboard/data";

export const Route = createFileRoute("/salas")({
  component: SalasPage,
  head: () => ({
    meta: [
      { title: "Salas e laboratórios — SalaFácil" },
      { name: "description", content: "Cadastro de salas e laboratórios com capacidade, localização, recursos e status de uso." },
      { property: "og:title", content: "Salas e laboratórios — SalaFácil" },
      { property: "og:description", content: "Recursos e disponibilidade de cada sala e laboratório." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function SalasPage() {
  const total = salas.length;
  const disponiveis = salas.filter((s) => s.status === "disponível").length;
  const manutencao = salas.filter((s) => s.status === "manutenção").length;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Salas e laboratórios</h1>
          <p className="text-sm text-muted-foreground">
            {total} espaços cadastrados · {disponiveis} disponíveis · {manutencao} em manutenção
          </p>
        </div>
        <RoomsGrid salas={salas} />
      </div>
    </DashboardLayout>
  );
}
