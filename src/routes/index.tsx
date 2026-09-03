import { createFileRoute } from "@tanstack/react-router";

import { DashboardLayout } from "@/components/dashboard/layout";
import { RecentBookings } from "@/components/dashboard/recent-bookings";
import { RoomsGrid } from "@/components/dashboard/rooms-grid";
import { ScheduleTimeline } from "@/components/dashboard/schedule-timeline";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { bookings, rooms, stats, todaySchedule } from "@/components/dashboard/data";

export const Route = createFileRoute("/")({
  component: DashboardPage,
  head: () => ({
    meta: [
      { title: "Dashboard — RoomBook" },
      { name: "description", content: "Painel de controle do sistema de agendamento de salas RoomBook." },
      { property: "og:title", content: "Dashboard — RoomBook" },
      { property: "og:description", content: "Painel de controle do sistema de agendamento de salas RoomBook." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Dashboard</h1>
            <p className="text-sm text-muted-foreground">Acompanhe salas, agendamentos e ocupação do dia.</p>
          </div>
          <div className="text-sm text-muted-foreground">
            Bem-vindo de volta, <span className="font-medium text-foreground">Admin</span>
          </div>
        </div>

        {/* Stats */}
        <StatsCards stats={stats} />

        {/* Main content */}
        <div className="grid gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2 space-y-6">
            <RecentBookings bookings={bookings} />
            <RoomsGrid rooms={rooms} />
          </div>
          <div className="xl:col-span-1">
            <ScheduleTimeline schedule={todaySchedule} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
