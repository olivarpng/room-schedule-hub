import { AlertTriangle, BellRing, CheckCircle2, Info, XCircle } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Notificacao } from "./data";

function icon(tipo: Notificacao["tipo"]) {
  switch (tipo) {
    case "conflito":
      return <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />;
    case "confirmacao":
      return <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />;
    case "cancelamento":
      return <XCircle className="h-4 w-4 text-rose-600 dark:text-rose-400" />;
    default:
      return <Info className="h-4 w-4 text-primary" />;
  }
}

export function NotificationsPanel({ notificacoes }: { notificacoes: Notificacao[] }) {
  return (
    <Card className="border-border bg-card shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold text-foreground">
          <BellRing className="h-4 w-4 text-primary" />
          Notificações
        </CardTitle>
        <p className="text-sm text-muted-foreground">Conflitos, confirmações e avisos do sistema</p>
      </CardHeader>
      <CardContent className="space-y-2">
        {notificacoes.map((n) => (
          <div key={n.id} className="flex gap-3 rounded-lg border border-border bg-background p-3">
            <div className="mt-0.5">{icon(n.tipo)}</div>
            <div className="min-w-0">
              <p className="text-sm text-foreground">{n.mensagem}</p>
              <p className="mt-1 text-xs text-muted-foreground">{n.dataHora}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
