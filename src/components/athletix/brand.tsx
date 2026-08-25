import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Check, Clock, AlertTriangle } from "lucide-react";

export function Logo({ className, to = "/" }: { className?: string; to?: string }) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-baseline text-lg font-extrabold tracking-[0.18em] text-foreground",
        className,
      )}
    >
      ATHLE<span className="text-primary text-glow">TIX</span>
    </Link>
  );
}

export function VerifiedBadge({
  label = "VERIFIED",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md border border-primary/40 bg-primary/10 px-2 py-0.5 text-[10px] font-bold tracking-widest text-primary shadow-[var(--glow-sm)]",
        className,
      )}
    >
      <Check className="size-3" strokeWidth={3} />
      {label}
    </span>
  );
}

export function StatusBadge({ status }: { status: "pending" | "review" }) {
  const map = {
    pending: { icon: Clock, text: "PENDING", cls: "border-warning/40 bg-warning/10 text-warning" },
    review: {
      icon: AlertTriangle,
      text: "REVIEW REQUIRED",
      cls: "border-destructive/40 bg-destructive/10 text-destructive",
    },
  } as const;
  const { icon: Icon, text, cls } = map[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-bold tracking-widest",
        cls,
      )}
    >
      <Icon className="size-3" />
      {text}
    </span>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-bold tracking-[0.28em] text-primary uppercase">{children}</p>
  );
}

export function Stat({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div>
      <p
        className={cn(
          "stat-number text-2xl md:text-3xl",
          accent ? "text-primary" : "text-foreground",
        )}
      >
        {value}
      </p>
      <p className="mt-1 text-[11px] tracking-widest text-muted-foreground uppercase">{label}</p>
    </div>
  );
}
