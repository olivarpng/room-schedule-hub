import { Link } from "@tanstack/react-router";
import {
  CalendarDays,
  Clock,
  Home,
  LayoutGrid,
  LogOut,
  MapPin,
  Menu,
  MessageSquare,
  Search,
  Settings,
  Users,
} from "lucide-react";
import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { icon: Home, label: "Dashboard", href: "/", active: true },
  { icon: CalendarDays, label: "Agendamentos", href: "/agendamentos" },
  { icon: MapPin, label: "Salas", href: "/salas" },
  { icon: Users, label: "Usuários", href: "/usuarios" },
  { icon: Clock, label: "Histórico", href: "/historico" },
  { icon: MessageSquare, label: "Mensagens", href: "/mensagens" },
  { icon: Settings, label: "Configurações", href: "/configuracoes" },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Sidebar desktop */}
      <aside className="hidden w-64 flex-col border-r border-border bg-card lg:flex">
        <div className="flex h-16 items-center gap-2 border-b border-border px-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <LayoutGrid className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">RoomBook</span>
        </div>

        <nav className="flex flex-1 flex-col gap-1 p-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                item.active
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-border p-4">
          <div className="flex items-center gap-3 rounded-lg border border-border bg-background p-3">
            <Avatar className="h-9 w-9 border border-border">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" alt="Admin" />
              <AvatarFallback className="bg-primary text-primary-foreground text-xs">AD</AvatarFallback>
            </Avatar>
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="truncate text-sm font-medium text-foreground">Admin RoomBook</span>
              <span className="truncate text-xs text-muted-foreground">admin@roombook.co</span>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-16 items-center gap-4 border-b border-border bg-card px-4 sm:px-6 lg:px-8">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <div className="flex h-16 items-center gap-2 border-b border-border px-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <LayoutGrid className="h-5 w-5" />
                </div>
                <span className="text-lg font-semibold tracking-tight text-foreground">RoomBook</span>
              </div>
              <nav className="flex flex-col gap-1 p-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      item.active
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar salas, agendamentos ou pessoas..."
              className="pl-9 bg-background border-border text-sm"
            />
          </div>

          <div className="ml-auto flex items-center gap-3">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              + Novo agendamento
            </Button>
            <Button size="sm" className="sm:hidden">
              +
            </Button>
            <Avatar className="h-9 w-9 border border-border">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" alt="Admin" />
              <AvatarFallback className="bg-primary text-primary-foreground text-xs">AD</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
