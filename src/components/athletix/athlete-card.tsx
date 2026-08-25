import { useState } from "react";
import { Button } from "@/components/ui/button";
import { VerifiedBadge } from "./brand";
import { inr, type Athlete } from "@/lib/athletix-data";
import { Check, Send, TrendingUp } from "lucide-react";

export function AthleteCard({ athlete }: { athlete: Athlete }) {
  const [shortlisted, setShortlisted] = useState(false);
  const [connected, setConnected] = useState(false);

  return (
    <article className="surface-card card-hover flex flex-col p-5">
      <div className="flex items-start gap-3">
        <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-border bg-secondary text-sm font-bold">
          {athlete.initials}
        </span>
        <div className="min-w-0">
          <h3 className="truncate text-base font-bold tracking-tight">{athlete.name}</h3>
          <p className="text-sm text-muted-foreground">{athlete.sport}</p>
          <p className="text-xs text-muted-foreground">{athlete.location}</p>
        </div>
        <span className="ml-auto">
          {athlete.verified ? (
            <VerifiedBadge />
          ) : (
            <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-bold tracking-widest text-muted-foreground">
              UNVERIFIED
            </span>
          )}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-4">
        <div>
          <p className="stat-number text-lg text-primary">{athlete.best}</p>
          <p className="text-[10px] tracking-widest text-muted-foreground uppercase">
            {athlete.bestLabel}
          </p>
        </div>
        <div>
          <p className="truncate text-sm font-semibold">{athlete.achievement}</p>
          <p className="text-[10px] tracking-widest text-muted-foreground uppercase">Achievement</p>
        </div>
        <div>
          <p className="flex items-center gap-1 text-sm font-semibold text-primary">
            <TrendingUp className="size-3.5" /> {athlete.trend}
          </p>
          <p className="text-[10px] tracking-widest text-muted-foreground uppercase">Performance</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <Button size="sm" variant="outline" className="flex-1">
          View Profile
        </Button>
        <Button
          size="sm"
          variant={shortlisted ? "default" : "secondary"}
          onClick={() => setShortlisted((v) => !v)}
        >
          {shortlisted ? (
            <>
              <Check /> Shortlisted
            </>
          ) : (
            "Shortlist"
          )}
        </Button>
        <Button size="sm" variant="default" onClick={() => setConnected(true)} disabled={connected}>
          {connected ? (
            <>
              <Send /> Request Sent
            </>
          ) : (
            "Connect"
          )}
        </Button>
      </div>
    </article>
  );
}

export function SponsorshipCard({ athlete }: { athlete: Athlete }) {
  const pct = Math.round((athlete.funding.raised / athlete.funding.goal) * 100);
  return (
    <article className="surface-card card-hover flex flex-col p-5">
      <div className="flex items-center gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-secondary text-sm font-bold">
          {athlete.initials}
        </span>
        <div className="min-w-0">
          <h3 className="truncate text-sm font-bold">{athlete.name}</h3>
          <p className="text-xs text-muted-foreground">
            {athlete.sport} · {athlete.level} Level
          </p>
        </div>
        {athlete.verified && <VerifiedBadge className="ml-auto" />}
      </div>

      <p className="mt-4 text-sm font-semibold tracking-tight">{athlete.funding.title}</p>

      <div className="mt-4">
        <p className="stat-number text-2xl text-primary">{inr(athlete.funding.goal)}</p>
        <p className="text-[10px] tracking-widest text-muted-foreground uppercase">
          Funding Required
        </p>
      </div>

      <div className="mt-4">
        <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary shadow-[var(--glow-sm)] transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
          <span>
            {inr(athlete.funding.raised)} / {inr(athlete.funding.goal)}
          </span>
          <span className="font-semibold text-primary">{pct}% funded</span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {athlete.funding.purpose.map((p) => (
          <span
            key={p}
            className="rounded-md border border-border px-2 py-0.5 text-[11px] text-muted-foreground"
          >
            {p}
          </span>
        ))}
      </div>

      <Button className="mt-5 w-full" variant="hero">
        Support Athlete
      </Button>
    </article>
  );
}
