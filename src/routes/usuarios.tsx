import { createFileRoute, Link } from "@tanstack/react-router";
import { UserPlus } from "lucide-react";

import { DashboardLayout } from "@/components/dashboard/layout";
import { UsersPanel } from "@/components/dashboard/users-panel";
import { Button } from "@/components/ui/button";
import { usuarios } from "@/components/dashboard/data";

export const Route = createFileRoute("/usuarios")({
  component: UsuariosPage,
  head: () => ({
    meta: [
      { title: "Usuários e acessos — SalaFácil" },
      { name: "description", content: "Gerencie perfis de administrador, coordenador, professor e aluno e seus níveis de acesso." },
      { property: "og:title", content: "Usuários e acessos — SalaFácil" },
      { property: "og:description", content: "Perfis e permissões dos usuários do sistema." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function UsuariosPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Usuários e acessos</h1>
            <p className="text-sm text-muted-foreground">
              O perfil de Coordenador acumula as permissões de Professor.
            </p>
          </div>
          <Button asChild>
            <Link to="/cadastro">
              <UserPlus className="mr-1 h-4 w-4" /> Cadastrar usuário
            </Link>
          </Button>
        </div>
        <UsersPanel usuarios={usuarios} />
      </div>
    </DashboardLayout>
  );
}
