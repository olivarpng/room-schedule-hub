import { Check, Users, Wrench } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Room } from "./data";

function statusColor(status: Room["status"]) {
  switch (status) {
    case "disponível":
      return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-transparent";
    case "ocupada":
      return "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 border-transparent";
    case "manutenção":
      return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-transparent";
    default:
      return "";
  }
}

function statusIcon(status: Room["status"]) {
  switch (status) {
    case "disponível":
      return <Check className="h-3 w-3" />;
    case "ocupada":
      return <Users className="h-3 w-3" />;
    case "manutenção":
      return <Wrench className="h-3 w-3" />;
    default:
      return null;
  }
}

export function RoomsGrid({ rooms }: { rooms: Room[] }) {
  return (
    <Card className="border-border bg-card shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-foreground">Salas</CardTitle>
        <p className="text-sm text-muted-foreground">Status das salas de reunião</p>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="group rounded-xl border border-border bg-background p-4 transition-colors hover:border-primary/30 hover:bg-accent/30"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">{room.name}</h3>
                  <p className="text-xs text-muted-foreground">{room.location}</p>
                </div>
                <Badge variant="outline" className={`flex items-center gap-1 capitalize ${statusColor(room.status)}`}>
                  {statusIcon(room.status)}
                  {room.status}
                </Badge>
              </div>
              <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Users className="h-3.5 w-3.5" />
                  {room.capacity} pessoas
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {room.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
