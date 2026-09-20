import { createFileRoute } from "@tanstack/react-router";

import { DashboardLayout } from "@/components/dashboard/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/configuracoes")({
  component: ConfiguracoesPage,
  head: () => ({
    meta: [
      { title: "Configurações — SalaFácil" },
      { name: "description", content: "Preferências da instituição, regras de agendamento e política de senhas do sistema." },
      { property: "og:title", content: "Configurações — SalaFácil" },
      { property: "og:description", content: "Regras de agendamento e segurança de acesso." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ConfiguracoesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Configurações</h1>
          <p className="text-sm text-muted-foreground">Regras de agendamento e segurança de acesso.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-border bg-card shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-foreground">Regras de agendamento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="antecedencia">Antecedência mínima (horas)</Label>
                <Input id="antecedencia" type="number" defaultValue={24} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="duracao">Duração máxima por reserva (minutos)</Label>
                <Input id="duracao" type="number" defaultValue={100} />
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border bg-background p-3">
                <div>
                  <p className="text-sm font-medium text-foreground">Bloquear conflitos de horário</p>
                  <p className="text-xs text-muted-foreground">Impede duas reservas na mesma sala e horário.</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border bg-background p-3">
                <div>
                  <p className="text-sm font-medium text-foreground">Aprovação do coordenador</p>
                  <p className="text-xs text-muted-foreground">Reservas de alunos ficam pendentes até aprovação.</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-foreground">Acesso e senhas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border border-border bg-background p-3">
                <div>
                  <p className="text-sm font-medium text-foreground">Senha temporária pela data de nascimento</p>
                  <p className="text-xs text-muted-foreground">Formato DDMMAAAA no primeiro acesso.</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border bg-background p-3">
                <div>
                  <p className="text-sm font-medium text-foreground">Troca obrigatória no primeiro login</p>
                  <p className="text-xs text-muted-foreground">A nova senha é gravada criptografada.</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="minsenha">Tamanho mínimo da senha</Label>
                <Input id="minsenha" type="number" defaultValue={8} />
              </div>
              <Button>Salvar configurações</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
