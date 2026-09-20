import { createFileRoute } from "@tanstack/react-router";
import { Download, FileBarChart } from "lucide-react";

import { DashboardLayout } from "@/components/dashboard/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { agendamentos, relatorio, salas } from "@/components/dashboard/data";

export const Route = createFileRoute("/relatorios")({
  component: RelatoriosPage,
  head: () => ({
    meta: [
      { title: "Relatórios de uso — SalaFácil" },
      { name: "description", content: "Relatórios de ocupação de salas e laboratórios por período, com horas de uso e exportação." },
      { property: "og:title", content: "Relatórios de uso — SalaFácil" },
      { property: "og:description", content: "Taxa de ocupação e horas de uso das salas por período." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function RelatoriosPage() {
  const usoPorSala = salas.map((s) => {
    const qtd = agendamentos.filter((a) => a.salaCodigo === s.codigo).length;
    return { ...s, qtd, pct: Math.min(100, qtd * 30) };
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Relatórios de uso</h1>
            <p className="text-sm text-muted-foreground">
              Período de {relatorio.periodoInicio} a {relatorio.periodoFim}
            </p>
          </div>
          <Button variant="outline">
            <Download className="mr-1 h-4 w-4" /> Exportar relatório
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="border-border bg-card shadow-sm">
            <CardContent className="p-5">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Total de horas de uso</p>
              <p className="mt-1 text-3xl font-bold text-foreground">{relatorio.totalHoras}h</p>
            </CardContent>
          </Card>
          <Card className="border-border bg-card shadow-sm">
            <CardContent className="p-5">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Taxa média de ocupação</p>
              <p className="mt-1 text-3xl font-bold text-foreground">{relatorio.taxaOcupacao}%</p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border bg-card shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <FileBarChart className="h-4 w-4 text-primary" />
              Ocupação por sala
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {usoPorSala.map((s) => (
              <div key={s.id} className="space-y-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">
                    {s.codigo} · {s.nome}
                  </span>
                  <span className="text-muted-foreground">{s.pct}%</span>
                </div>
                <Progress value={s.pct} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
