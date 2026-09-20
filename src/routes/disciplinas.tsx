import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Users } from "lucide-react";

import { DashboardLayout } from "@/components/dashboard/layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { agendamentos } from "@/components/dashboard/data";

export const Route = createFileRoute("/disciplinas")({
  component: DisciplinasPage,
  head: () => ({
    meta: [
      { title: "Disciplinas e turmas — SalaFácil" },
      { name: "description", content: "Disciplinas, turmas e professores responsáveis vinculados aos agendamentos." },
      { property: "og:title", content: "Disciplinas e turmas — SalaFácil" },
      { property: "og:description", content: "Vínculo entre disciplinas, turmas e professores." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function DisciplinasPage() {
  const disciplinas = agendamentos.map((a) => ({
    codigo: a.disciplinaCodigo,
    nome: a.disciplina,
    turma: a.turma,
    professor: a.professorResponsavel,
    alunos: a.alunos,
  }));

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Disciplinas e turmas</h1>
          <p className="text-sm text-muted-foreground">
            Cada disciplina tem um professor responsável e uma turma vinculada.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {disciplinas.map((d) => (
            <Card key={d.codigo} className="border-border bg-card shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-start gap-2 text-base font-semibold text-foreground">
                  <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {d.nome}
                </CardTitle>
                <Badge variant="outline" className="w-fit border-transparent bg-primary/10 text-primary">
                  {d.codigo}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-1.5 text-sm text-muted-foreground">
                <p className="text-foreground">{d.turma}</p>
                <p>{d.professor}</p>
                <p className="flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5" /> {d.alunos} alunos
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
