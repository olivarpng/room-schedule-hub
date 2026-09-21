import { createFileRoute } from "@tanstack/react-router";

import { CalendarPanel } from "@/components/dashboard/calendar-panel";
import { DashboardLayout } from "@/components/dashboard/layout";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { agendamentos, indicadores } from "@/components/dashboard/data";

export const Route = createFileRoute("/")({
  component: DashboardPage,
  head: () => ({
    meta: [
      { title: "Dashboard — Agendamento de Salas de Aula" },
      {
        name: "description",
        content:
          "Painel de gestão e controle de agendamento de salas de aula e laboratórios: calendário de agendamentos e indicadores.",
      },
      { property: "og:title", content: "Dashboard — Agendamento de Salas de Aula" },
      {
        property: "og:description",
        content: "Gestão de salas, laboratórios, turmas, disciplinas e agendamentos acadêmicos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              Gestão e controle de agendamento de salas de aula e laboratórios.
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            Sessão de <span className="font-medium text-foreground">Marcos Andrade</span> · Administrador
          </div>
        </div>

        <StatsCards indicadores={indicadores} />

        <CalendarPanel agendamentos={agendamentos} />
      </div>
    </DashboardLayout>
  );
}
