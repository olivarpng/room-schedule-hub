import { createFileRoute } from "@tanstack/react-router";

import { DashboardLayout } from "@/components/dashboard/layout";
import { CalendarPanel } from "@/components/dashboard/calendar-panel";
import { RecentBookings } from "@/components/dashboard/recent-bookings";
import { agendamentos } from "@/components/dashboard/data";

export const Route = createFileRoute("/agendamentos")({
  component: AgendamentosPage,
  head: () => ({
    meta: [
      { title: "Agendamentos — SalaFácil" },
      { name: "description", content: "Consulte, confirme e edite agendamentos de salas e laboratórios por data, turma e professor." },
      { property: "og:title", content: "Agendamentos — SalaFácil" },
      { property: "og:description", content: "Lista e calendário de agendamentos acadêmicos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function AgendamentosPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Agendamentos</h1>
          <p className="text-sm text-muted-foreground">
            Solicitações de uso de salas e laboratórios, com status e responsáveis.
          </p>
        </div>
        <CalendarPanel agendamentos={agendamentos} />
        <RecentBookings agendamentos={agendamentos} />
      </div>
    </DashboardLayout>
  );
}
