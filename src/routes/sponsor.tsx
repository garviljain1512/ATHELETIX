import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/athletix/dashboard-shell";
import { SponsorshipCard } from "@/components/athletix/athlete-card";
import { MatchScore } from "@/components/athletix/performance-chart";
import { Eyebrow, VerifiedBadge, Stat } from "@/components/athletix/brand";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { athletes, inr } from "@/lib/athletix-data";
import { Search } from "lucide-react";

export const Route = createFileRoute("/sponsor")({
  head: () => ({
    meta: [
      { title: "Sponsor Opportunities | ATHLETIX" },
      {
        name: "description",
        content:
          "Browse verified athlete sponsorship opportunities with clear funding goals, progress and impact on ATHLETIX.",
      },
      { property: "og:title", content: "Sponsor Opportunities | ATHLETIX" },
      {
        property: "og:description",
        content: "Fund verified athletes with transparent goals and progress.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SponsorDashboard,
});

function SponsorDashboard() {
  const a = athletes[0];
  const [query, setQuery] = useState("");
  const results = athletes.filter((x) =>
    `${x.name} ${x.sport} ${x.location}`.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <DashboardShell
      role="Sponsor"
      active="Opportunities"
      user={{ name: "Vertex Sports", initials: "VS" }}
    >
      <section className="surface-card p-6 md:p-8">
        <Eyebrow>Featured Opportunity</Eyebrow>
        <div className="mt-3 flex flex-wrap items-start gap-6">
          <div className="min-w-0 flex-1">
            <h1 className="text-2xl font-extrabold tracking-tight uppercase md:text-4xl">
              Support Aarav's road to Nationals
            </h1>
            <p className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              {a.name} · {a.sport} · {a.location} <VerifiedBadge />
            </p>
            <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
              <Stat value={inr(a.funding.goal)} label="Funding Needed" accent />
              <Stat value={a.best} label="Personal Best" />
              <Stat value={`${a.level} Level`} label="Competition" />
              <Stat value={a.improvement} label="Improvement" accent />
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {a.funding.purpose.map((p) => (
                <span
                  key={p}
                  className="rounded-md border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {p}
                </span>
              ))}
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="hero" size="lg" className="mt-7">
                  Sponsor Athlete
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Connect with Aarav</DialogTitle>
                </DialogHeader>
                <Textarea placeholder="Introduce yourself…" rows={5} />
                <Button variant="hero" className="w-full">
                  Send Request
                </Button>
              </DialogContent>
            </Dialog>
          </div>
          <div className="w-full max-w-sm rounded-xl border border-border bg-surface p-5">
            <MatchScore score={a.match} />
          </div>
        </div>
      </section>

      <div className="relative mt-8">
        <Search className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search sponsorship opportunities…"
          className="h-14 rounded-xl pl-11 text-base"
        />
      </div>

      <h2 className="mt-8 text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase">
        Open Sponsorships
      </h2>
      <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {results.map((x) => (
          <SponsorshipCard key={x.id} athlete={x} />
        ))}
      </div>
    </DashboardShell>
  );
}
