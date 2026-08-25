import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/athletix/dashboard-shell";
import { AthleteCard } from "@/components/athletix/athlete-card";
import { MatchScore } from "@/components/athletix/performance-chart";
import { Eyebrow } from "@/components/athletix/brand";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { athletes, filterGroups } from "@/lib/athletix-data";
import { Search, SearchX } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/coach")({
  head: () => ({
    meta: [
      { title: "Coach Discovery | ATHLETIX" },
      {
        name: "description",
        content:
          "Discover verified athletes by sport, region, age and competition level with ATHLETIX match scoring.",
      },
      { property: "og:title", content: "Coach Discovery | ATHLETIX" },
      {
        property: "og:description",
        content: "Search, filter and shortlist verified athletes in seconds.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CoachDashboard,
});

function CoachDashboard() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string[]>([]);

  const toggle = (o: string) =>
    setActive((p) => (p.includes(o) ? p.filter((x) => x !== o) : [...p, o]));

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return athletes.filter((a) => {
      const text = `${a.name} ${a.sport} ${a.location} ${a.level}`.toLowerCase();
      const matchQuery = !q || text.includes(q);
      const matchFilters = active.length === 0 || active.every((f) => text.includes(f.toLowerCase()));
      return matchQuery && matchFilters;
    });
  }, [query, active]);

  return (
    <DashboardShell
      role="Coach"
      active="Discover"
      user={{ name: "Coach Rathore", initials: "CR" }}
    >
      <Eyebrow>Discovery</Eyebrow>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">Discover Athletes</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {results.length} verified and emerging athletes match your criteria.
      </p>

      <div className="relative mt-6">
        <Search className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, sport, city or level…"
          className="h-14 rounded-xl pl-11 text-base"
        />
      </div>

      <div className="mt-5 -mx-4 flex gap-6 overflow-x-auto px-4 pb-2 md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
        {filterGroups.map((g) => (
          <div key={g.label} className="shrink-0">
            <p className="mb-2 text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
              {g.label}
            </p>
            <div className="flex gap-2">
              {g.options.map((o) => (
                <button
                  key={o}
                  onClick={() => toggle(o)}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-all duration-200",
                    active.includes(o)
                      ? "border-primary bg-primary text-primary-foreground shadow-[var(--glow-sm)]"
                      : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
                  )}
                >
                  {o}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase">
            Recommended Athletes
          </h2>
          {results.length > 0 ? (
            <div className="mt-4 grid gap-5 xl:grid-cols-2">
              {results.map((a) => (
                <AthleteCard key={a.id} athlete={a} />
              ))}
            </div>
          ) : (
            <div className="surface-card mt-4 flex flex-col items-center px-6 py-16 text-center">
              <SearchX className="size-8 text-primary" />
              <p className="mt-4 text-base font-semibold">No athletes found</p>
              <p className="mt-1 text-sm text-muted-foreground">Try adjusting your filters.</p>
              <Button
                variant="outline"
                className="mt-5"
                onClick={() => {
                  setActive([]);
                  setQuery("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        <aside className="surface-card h-fit p-5">
          <MatchScore score={athletes[0].match} />
          <div className="mt-6 border-t border-border pt-5">
            <p className="text-sm font-semibold">{athletes[0].name}</p>
            <p className="text-xs text-muted-foreground">
              {athletes[0].sport} · {athletes[0].location}
            </p>
            <Button className="mt-4 w-full" variant="hero">
              Connect
            </Button>
          </div>
        </aside>
      </div>
    </DashboardShell>
  );
}
