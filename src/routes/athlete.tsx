import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/athletix/dashboard-shell";
import { PerformanceChart } from "@/components/athletix/performance-chart";
import { StatusBadge, VerifiedBadge, Stat, Eyebrow } from "@/components/athletix/brand";
import { Button } from "@/components/ui/button";
import { athletes, inr } from "@/lib/athletix-data";
import { FileCheck, Target, Trophy } from "lucide-react";

export const Route = createFileRoute("/athlete")({
  head: () => ({
    meta: [
      { title: "Athlete Profile Dashboard | ATHLETIX" },
      {
        name: "description",
        content:
          "A professional athlete profile: personal bests, verified achievements, performance trajectory and funding goals.",
      },
      { property: "og:title", content: "Athlete Profile Dashboard | ATHLETIX" },
      {
        property: "og:description",
        content: "Performance, verification, progress and opportunities in one profile.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AthleteDashboard,
});

function AthleteDashboard() {
  const a = athletes[0];

  if (!a) return null;

  const pct = Math.round((a.funding.raised / a.funding.goal) * 100);

  return (
    <DashboardShell role="Athlete" active="Profile" user={{ name: a.name, initials: a.initials }}>
      <section className="surface-card p-6 md:p-8">
        <div className="flex flex-wrap items-start gap-5">
          <span className="grid size-20 place-items-center rounded-2xl border border-primary/30 bg-primary/10 text-xl font-extrabold text-primary">
            {a.initials}
          </span>
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">{a.name}</h1>
            <p className="mt-1 text-muted-foreground">{a.sport}</p>
            <p className="text-sm text-muted-foreground">{a.location}</p>
            <div className="mt-3">
              <VerifiedBadge label="VERIFIED ATHLETE" />
            </div>
          </div>
          <div className="ml-auto flex gap-2">
            <Button variant="outline">Edit Profile</Button>
            <Button variant="hero">Share Profile</Button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6 md:grid-cols-4">
          <Stat value={a.best} label="Personal Best" accent />
          <Stat value={`${a.level} Level`} label="Competition Level" />
          <Stat value={a.rank} label="State Ranking" />
          <Stat value={a.improvement} label="Performance Improvement" accent />
        </div>
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <PerformanceChart data={a.progress} unit=" sec" />
        </div>

        <div className="surface-card p-5">
          <Eyebrow>Verification</Eyebrow>
          <h2 className="mt-2 text-base font-bold tracking-tight">Document Status</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-2">
                <FileCheck className="size-4 text-primary" /> State Meet Certificate
              </span>
              <VerifiedBadge />
            </li>
            <li className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-2">
                <FileCheck className="size-4 text-muted-foreground" /> Timing Sheet 2026
              </span>
              <StatusBadge status="pending" />
            </li>
            <li className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-2">
                <FileCheck className="size-4 text-muted-foreground" /> Coach Endorsement
              </span>
              <StatusBadge status="review" />
            </li>
          </ul>
          <Button variant="outline" className="mt-5 w-full">
            Upload Document
          </Button>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="surface-card p-5">
          <Eyebrow>Achievements</Eyebrow>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              "State Champion — 400m, 2026",
              "District Gold — 400m, 2025",
              "Inter-University Finalist, 2025",
            ].map((x) => (
              <li key={x} className="flex items-start gap-2">
                <Trophy className="mt-0.5 size-4 shrink-0 text-primary" />
                {x}
              </li>
            ))}
          </ul>
        </div>

        <div className="surface-card p-5">
          <Eyebrow>Goals</Eyebrow>
          <ul className="mt-4 space-y-3 text-sm">
            {["Sub-48.5 sec by Nationals", "National qualification 2026", "Strength block Q3"].map(
              (x) => (
                <li key={x} className="flex items-start gap-2">
                  <Target className="mt-0.5 size-4 shrink-0 text-primary" />
                  {x}
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="surface-card p-5">
          <Eyebrow>Funding</Eyebrow>
          <p className="mt-3 text-sm font-semibold">{a.funding.title}</p>
          <p className="stat-number mt-3 text-2xl text-primary">{inr(a.funding.goal)}</p>
          <p className="text-[10px] tracking-widest text-muted-foreground uppercase">
            Funding Required
          </p>
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-primary shadow-[var(--glow-sm)]"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            <span>
              {inr(a.funding.raised)} / {inr(a.funding.goal)}
            </span>
            <span className="font-semibold text-primary">{pct}% funded</span>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
