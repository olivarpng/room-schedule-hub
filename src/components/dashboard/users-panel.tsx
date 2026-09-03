import { ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Usuario } from "./data";

function perfilColor(perfil: Usuario["perfil"]) {
  switch (perfil) {
    case "Administrador":
      return "bg-primary/10 text-primary border-transparent";
    case "Coordenador":
      return "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 border-transparent";
    case "Professor":
      return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-transparent";
    default:
      return "bg-secondary text-secondary-foreground border-transparent";
  }
}

export function UsersPanel({ usuarios }: { usuarios: Usuario[] }) {
  return (
    <Card className="border-border bg-card shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold text-foreground">
          <ShieldCheck className="h-4 w-4 text-primary" />
          Usuários e níveis de acesso
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          O perfil de Coordenador acumula as permissões de Professor
        </p>
      </CardHeader>
      <CardContent className="space-y-2">
        {usuarios.map((u) => (
          <div key={u.id} className="rounded-lg border border-border bg-background p-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-foreground">{u.nome}</p>
                <p className="truncate text-xs text-muted-foreground">{u.email}</p>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                <Badge variant="outline" className={perfilColor(u.perfil)}>
                  {u.perfil}
                </Badge>
                {u.tambemProfessor && (
                  <Badge variant="outline" className="border-transparent bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                    Professor
                  </Badge>
                )}
              </div>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {u.nivelAcesso.map((f) => (
                <span
                  key={f}
                  className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
