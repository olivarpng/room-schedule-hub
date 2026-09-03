import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { MoreHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Booking } from "./data";

function statusColor(status: Booking["status"]) {
  switch (status) {
    case "confirmado":
      return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-transparent";
    case "pendente":
      return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-transparent";
    case "cancelado":
      return "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 border-transparent";
    default:
      return "";
  }
}

export function RecentBookings({ bookings }: { bookings: Booking[] }) {
  return (
    <Card className="border-border bg-card shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <div>
          <CardTitle className="text-lg font-semibold text-foreground">Agendamentos recentes</CardTitle>
          <p className="text-sm text-muted-foreground">{format(new Date(), "EEEE, dd 'de' MMMM", { locale: ptBR })}</p>
        </div>
        <Button variant="outline" size="sm" className="hidden sm:flex">
          Ver todos
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground">Evento</TableHead>
                <TableHead className="text-muted-foreground">Sala</TableHead>
                <TableHead className="text-muted-foreground">Horário</TableHead>
                <TableHead className="text-muted-foreground">Participantes</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="w-10" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id} className="border-border">
                  <TableCell>
                    <div className="font-medium text-foreground">{booking.title}</div>
                    <div className="text-xs text-muted-foreground">{booking.organizer}</div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium text-foreground">{booking.roomName}</div>
                    <div className="text-xs text-muted-foreground">{booking.roomLocation}</div>
                  </TableCell>
                  <TableCell className="text-foreground">
                    {booking.startTime} — {booking.endTime}
                  </TableCell>
                  <TableCell className="text-foreground">{booking.attendees}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`capitalize ${statusColor(booking.status)}`}>
                      {booking.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
