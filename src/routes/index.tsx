import { createFileRoute } from "@tanstack/react-router";

import { CalendarPanel } from "@/components/dashboard/calendar-panel";
import { DashboardLayout } from "@/components/dashboard/layout";
import { NotificationsPanel } from "@/components/dashboard/notifications-panel";
import { RecentBookings } from "@/components/dashboard/recent-bookings";
import { RoomsGrid } from "@/components/dashboard/rooms-grid";
import { ScheduleTimeline } from "@/components/dashboard/schedule-timeline";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { UsersPanel } from "@/components/dashboard/users-panel";
import {
  agendaDoDia,
  agendamentos,
  indicadores,
  notificacoes,
  relatorio,
  salas,
  usuarios,
} from "@/components/dashboard/data";

export const Route = createFileRoute("/")({
  component: DashboardPage,
  head: () => ({
    meta: [
      { title: "Dashboard — Agendamento de Salas de Aula" },
      {
        name: "description",
        content:
          "Painel de gestão e controle de agendamento de salas de aula e laboratórios: agendamentos, recursos, usuários e relatórios.",
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

        <div className="grid gap-6 xl:grid-cols-3">
          <div className="space-y-6 xl:col-span-2">
            <RecentBookings agendamentos={agendamentos} />
            <RoomsGrid salas={salas} />
            <UsersPanel usuarios={usuarios} />
          </div>
          <div className="space-y-6 xl:col-span-1">
            <ScheduleTimeline agenda={agendaDoDia} />
            <NotificationsPanel notificacoes={notificacoes} />

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground">Relatório de uso</h2>
              <p className="text-sm text-muted-foreground">
                Período de {relatorio.periodoInicio} a {relatorio.periodoFim}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-border bg-background p-3">
                  <p className="text-xs text-muted-foreground">Total de horas</p>
                  <p className="text-2xl font-bold text-foreground">{relatorio.totalHoras}h</p>
                </div>
                <div className="rounded-lg border border-border bg-background p-3">
                  <p className="text-xs text-muted-foreground">Taxa de ocupação</p>
                  <p className="text-2xl font-bold text-foreground">{relatorio.taxaOcupacao}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
