import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  Bell,
  Compass,
  Handshake,
  Heart,
  LayoutGrid,
  Menu,
  Settings,
  Trophy,
  UserRound,
  X,
} from "lucide-react";
import { Logo } from "./brand";
import { cn } from "@/lib/utils";

const items = [
  { label: "Discover", icon: Compass },
  { label: "Profile", icon: UserRound },
  { label: "Shortlisted", icon: Heart },
  { label: "Connections", icon: Handshake },
  { label: "Opportunities", icon: Trophy },
  { label: "Notifications", icon: Bell },
  { label: "Settings", icon: Settings },
];

export function DashboardShell({
  role,
  active,
  user,
  children,
}: {
  role: string;
  active: string;
  user: { name: string; initials: string };
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const nav = (
    <nav className="space-y-1">
      {items.map(({ label, icon: Icon }) => {
        const isActive = label === active;
        return (
          <button
            key={label}
            onClick={() => setOpen(false)}
            className={cn(
              "relative flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200",
              isActive
                ? "bg-sidebar-accent text-primary"
                : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground",
            )}
          >
            {isActive && (
              <span className="absolute top-1/2 left-0 h-6 w-0.5 -translate-y-1/2 rounded-full bg-primary shadow-[var(--glow-sm)]" />
            )}
            <Icon className="size-4" />
            {label}
          </button>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3">
            <button
              className="rounded-md p-2 text-muted-foreground hover:text-foreground lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
            <Logo />
            <span className="hidden rounded-md border border-border px-2 py-0.5 text-[10px] font-bold tracking-widest text-muted-foreground uppercase sm:inline">
              {role}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="relative rounded-md p-2 text-muted-foreground hover:text-foreground"
              aria-label="Notifications"
            >
              <Bell className="size-5" />
              <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-primary shadow-[var(--glow-sm)]" />
            </button>
            <div className="flex items-center gap-2">
              <span className="hidden text-sm font-medium sm:inline">{user.name}</span>
              <span className="grid size-9 place-items-center rounded-full border border-primary/40 bg-primary/10 text-xs font-bold text-primary">
                {user.initials}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-60 shrink-0 border-r border-sidebar-border bg-sidebar p-3 lg:block">
          {nav}
          <Link
            to="/roles"
            className="mt-6 block rounded-lg border border-border p-3 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
          >
            <LayoutGrid className="mb-2 size-4 text-primary" />
            Switch role view
          </Link>
        </aside>

        {open && (
          <div className="fixed inset-x-0 top-16 z-30 border-b border-border bg-sidebar p-3 lg:hidden">
            {nav}
          </div>
        )}

        <main className="min-w-0 flex-1 px-4 py-6 md:px-8 md:py-8">{children}</main>
      </div>
    </div>
  );
}
