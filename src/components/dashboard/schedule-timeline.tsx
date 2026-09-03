import { Clock } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ScheduleTimeline({ schedule }: { schedule: { time: string; bookings: string[] }[] }) {
  return (
    <Card className="border-border bg-card shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-foreground">Agenda do dia</CardTitle>
        <p className="text-sm text-muted-foreground">Visão por horário</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-0">
          {schedule.map((slot, index) => (
            <div key={slot.time} className="relative flex gap-4">
              {/* timeline line */}
              {index !== schedule.length - 1 && (
                <div className="absolute left-[19px] top-8 h-full w-px bg-border" />
              )}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background">
                <Clock className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 pb-6">
                <span className="text-sm font-semibold text-foreground">{slot.time}</span>
                {slot.bookings.length === 0 ? (
                  <p className="mt-1 text-sm text-muted-foreground">Nenhum agendamento</p>
                ) : (
                  <div className="mt-1 space-y-1.5">
                    {slot.bookings.map((booking) => (
                      <div
                        key={booking}
                        className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm"
                      >
                        {booking}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
