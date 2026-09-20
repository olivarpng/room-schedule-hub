import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ShieldCheck, UserPlus } from "lucide-react";

import { DashboardLayout } from "@/components/dashboard/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usuarios } from "@/components/dashboard/data";

export const Route = createFileRoute("/cadastro")({
  component: CadastroPage,
  head: () => ({
    meta: [
      { title: "Cadastro de usuários — SalaFácil" },
      { name: "description", content: "Área do administrador para cadastrar professores, coordenadores e alunos com senha temporária." },
      { property: "og:title", content: "Cadastro de usuários — SalaFácil" },
      { property: "og:description", content: "Cadastro de usuários com RA, dados pessoais e senha temporária." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function CadastroPage() {
  const [nascimento, setNascimento] = useState("");
  const [criado, setCriado] = useState<string | null>(null);

  const senhaTemporaria = nascimento ? nascimento.split("-").reverse().join("") : "--------";

  function salvar(e: React.FormEvent) {
    e.preventDefault();
    setCriado(senhaTemporaria);
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Cadastro de usuários</h1>
            <p className="text-sm text-muted-foreground">
              Somente o administrador pode cadastrar novos usuários.
            </p>
          </div>
          <Badge variant="outline" className="border-transparent bg-primary/10 text-primary">
            <ShieldCheck className="mr-1 h-3 w-3" /> Acesso restrito ao Administrador
          </Badge>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          <Card className="border-border bg-card shadow-sm xl:col-span-2">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <UserPlus className="h-4 w-4 text-primary" />
                Novo usuário
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4 sm:grid-cols-2" onSubmit={salvar}>
                <div className="space-y-1.5 sm:col-span-2">
                  <Label htmlFor="nome">Nome completo</Label>
                  <Input id="nome" placeholder="Ana Souza" required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input id="telefone" placeholder="(11) 90000-0000" required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="ana.souza@instituicao.edu.br" required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="ra">RA</Label>
                  <Input id="ra" inputMode="numeric" placeholder="20230014" required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="nascimento">Data de nascimento</Label>
                  <Input
                    id="nascimento"
                    type="date"
                    value={nascimento}
                    onChange={(e) => setNascimento(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <Label htmlFor="perfil">Perfil de acesso</Label>
                  <Select defaultValue="Professor">
                    <SelectTrigger id="perfil">
                      <SelectValue placeholder="Selecione o perfil" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Administrador">Administrador</SelectItem>
                      <SelectItem value="Coordenador">Coordenador (também Professor)</SelectItem>
                      <SelectItem value="Professor">Professor</SelectItem>
                      <SelectItem value="Aluno">Aluno</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="rounded-lg border border-border bg-background p-3 text-sm sm:col-span-2">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Senha temporária gerada</p>
                  <p className="mt-1 font-mono text-lg font-semibold text-foreground">{senhaTemporaria}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    É a data de nascimento no formato DDMMAAAA. No primeiro login com RA + senha temporária, o
                    usuário é obrigado a criar uma senha nova, gravada criptografada.
                  </p>
                </div>

                {criado && (
                  <p className="text-sm text-primary sm:col-span-2">
                    Usuário cadastrado. Senha temporária: <span className="font-mono">{criado}</span>
                  </p>
                )}

                <div className="flex gap-2 sm:col-span-2">
                  <Button type="submit">Cadastrar usuário</Button>
                  <Button type="reset" variant="outline" onClick={() => { setNascimento(""); setCriado(null); }}>
                    Limpar
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="border-border bg-card shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-foreground">Últimos cadastrados</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {usuarios.map((u) => (
                <div key={u.id} className="rounded-lg border border-border bg-background p-3">
                  <p className="truncate text-sm font-medium text-foreground">{u.nome}</p>
                  <p className="truncate text-xs text-muted-foreground">{u.email}</p>
                  <Badge variant="outline" className="mt-2 border-transparent bg-secondary text-secondary-foreground">
                    {u.perfil}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
