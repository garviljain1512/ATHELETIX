import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo, Eyebrow } from "@/components/athletix/brand";
import { ArrowRight, Compass, HandCoins, Zap } from "lucide-react";

export const Route = createFileRoute("/roles")({
  head: () => ({
    meta: [
      { title: "Choose Your Role | ATHLETIX" },
      {
        name: "description",
        content:
          "Join ATHLETIX as an athlete, coach or sponsor and enter India's verified sports talent network.",
      },
      { property: "og:title", content: "Choose Your Role | ATHLETIX" },
      {
        property: "og:description",
        content: "Athlete, coach or sponsor — pick how you enter the ATHLETIX network.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Roles,
});

const roles = [
  {
    to: "/login/athlete" as const,
    icon: Zap,
    title: "Athlete",
    line: "Build a verified performance profile",
    points: ["Performance tracking", "Verified achievements", "Funding & opportunities"],
  },
  {
    to: "/login/coach" as const,
    icon: Compass,
    title: "Coach",
    line: "Discover and shortlist real talent",
    points: ["Filtered discovery", "Match scoring", "Direct connections"],
  },
  {
    to: "/login/sponsor" as const,
    icon: HandCoins,
    title: "Sponsor",
    line: "Fund athletes with measurable impact",
    points: ["Sponsorship pipeline", "Verified potential", "Impact tracking"],
  },
];

function Roles() {
  return (
    <div className="hero-gradient min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <Logo />
        <div className="mt-16 max-w-2xl">
          <Eyebrow>Step 1 of 2</Eyebrow>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-6xl">
            How do you enter <span className="text-primary text-glow">ATHLETIX</span>?
          </h1>
          <p className="mt-4 text-muted-foreground">
            One platform, three priorities. Your role shapes what you see first.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {roles.map(({ to, icon: Icon, title, line, points }) => (
            <Link key={title} to={to} className="surface-card card-hover group block p-6">
              <Icon className="size-6 text-primary" />
              <h2 className="mt-5 text-xl font-bold tracking-tight">{title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{line}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-4 text-sm text-muted-foreground">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Continue <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
