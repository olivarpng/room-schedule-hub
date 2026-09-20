import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { GraduationCap, KeyRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/login")({
  component: LoginPage,
  head: () => ({
    meta: [
      { title: "Entrar — SalaFácil" },
      { name: "description", content: "Acesse o SalaFácil com seu RA e senha para agendar salas e laboratórios." },
      { property: "og:title", content: "Entrar — SalaFácil" },
      { property: "og:description", content: "Acesso ao sistema de agendamento de salas e laboratórios." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function LoginPage() {
  const navigate = useNavigate();
  const [ra, setRa] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  // Senha temporária = data de nascimento (ex.: 10082004)
  const senhaTemporaria = /^\d{8}$/.test(senha);

  function entrar(e: React.FormEvent) {
    e.preventDefault();
    if (!ra || !senha) {
      setErro("Informe o RA e a senha.");
      return;
    }
    setErro("");
    if (senhaTemporaria) {
      navigate({ to: "/nova-senha", search: { ra } });
      return;
    }
    navigate({ to: "/" });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-primary/10 to-background px-4 py-10">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-8 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">SalaFácil</span>
        </div>

        <h1 className="mt-6 text-xl font-bold text-foreground">Entrar</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Use seu RA e senha. No primeiro acesso, a senha é sua data de nascimento (ex.: 10082004).
        </p>

        <form className="mt-6 space-y-4" onSubmit={entrar}>
          <div className="space-y-1.5">
            <Label htmlFor="ra">RA</Label>
            <Input id="ra" inputMode="numeric" placeholder="20230014" value={ra} onChange={(e) => setRa(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="senha">Senha</Label>
            <Input id="senha" type="password" placeholder="••••••••" value={senha} onChange={(e) => setSenha(e.target.value)} />
          </div>

          {erro && <p className="text-sm text-destructive">{erro}</p>}

          <Button type="submit" className="w-full">Entrar</Button>
        </form>

        <div className="mt-5 flex items-center gap-2 rounded-lg border border-border bg-background p-3 text-xs text-muted-foreground">
          <KeyRound className="h-4 w-4 shrink-0 text-primary" />
          Esqueceu a senha? Procure a coordenação para gerar uma nova senha temporária.
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Novos cadastros são feitos pelo administrador em{" "}
          <Link to="/cadastro" className="font-medium text-primary hover:underline">
            Cadastro de usuários
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
