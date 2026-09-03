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
import type { Agendamento } from "./data";

function statusColor(status: Agendamento["status"]) {
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

export function RecentBookings({ agendamentos }: { agendamentos: Agendamento[] }) {
  return (
    <Card className="border-border bg-card shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <div>
          <CardTitle className="text-lg font-semibold text-foreground">Agendamentos do dia</CardTitle>
          <p className="text-sm text-muted-foreground">
            Disciplina, turma, sala e professor responsável — quinta-feira, 03 de setembro
          </p>
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
                <TableHead className="text-muted-foreground">Disciplina / Turma</TableHead>
                <TableHead className="text-muted-foreground">Sala</TableHead>
                <TableHead className="text-muted-foreground">Horário</TableHead>
                <TableHead className="text-muted-foreground">Professor responsável</TableHead>
                <TableHead className="text-muted-foreground">Solicitante</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="w-10" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {agendamentos.map((ag) => (
                <TableRow key={ag.id} className="border-border">
                  <TableCell>
                    <div className="font-medium text-foreground">{ag.disciplina}</div>
                    <div className="text-xs text-muted-foreground">
                      {ag.disciplinaCodigo} · {ag.turma}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium text-foreground">{ag.salaCodigo}</div>
                    <div className="text-xs text-muted-foreground">{ag.salaLocalizacao}</div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-foreground">
                    {ag.horaInicio} — {ag.horaFim}
                  </TableCell>
                  <TableCell className="text-foreground">{ag.professorResponsavel}</TableCell>
                  <TableCell>
                    <div className="text-foreground">{ag.solicitanteNome}</div>
                    <div className="text-xs text-muted-foreground">{ag.solicitantePerfil}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`capitalize ${statusColor(ag.status)}`}>
                      {ag.status}
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
