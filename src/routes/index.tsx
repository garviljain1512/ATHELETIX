import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, BarChart3, Search, ShieldCheck, Sparkles } from "lucide-react";
import { Logo, Eyebrow } from "@/components/athletix/brand";
import { Button } from "@/components/ui/button";
import heroAthlete from "@/assets/hero-athlete.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ATHLETIX | India's Verified Sports Network" },
      {
        name: "description",
        content:
          "ATHLETIX connects verified athletes, coaches and sponsors through trusted performance data and intelligent talent discovery.",
      },
      { property: "og:title", content: "ATHLETIX | India's Verified Sports Network" },
      {
        property: "og:description",
        content: "Discover, verify and connect India's next generation of sporting talent.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const proofPoints = [
  { value: "10K+", label: "Athletes mapped" },
  { value: "28", label: "States covered" },
  { value: "94%", label: "Verified records" },
];

const pillars = [
  {
    icon: BadgeCheck,
    title: "Verified identity",
    body: "Achievements and documents become trusted records, not unverified claims.",
  },
  {
    icon: BarChart3,
    title: "Performance intelligence",
    body: "Track measurable progress and turn raw results into a clear athlete trajectory.",
  },
  {
    icon: Search,
    title: "Talent discovery",
    body: "Coaches and sponsors find athletes through sport, level, region and potential.",
  },
];

function Index() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative min-h-[92vh] border-b border-border">
        <img
          src={heroAthlete}
          alt="Digital athlete accelerating across a performance track"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <Logo className="text-xl" />
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild className="hidden sm:inline-flex">
              <Link to="/login/athlete">Sign in</Link>
            </Button>
            <Button asChild>
              <Link to="/roles">Join ATHLETIX <ArrowRight /></Link>
            </Button>
          </div>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-[calc(92vh-88px)] max-w-7xl items-center px-6 pb-20 lg:px-10">
          <div className="max-w-3xl pt-12">
            <div className="mb-6 inline-flex items-center gap-2 border border-primary/30 bg-background/70 px-3 py-2 text-xs font-bold uppercase text-primary backdrop-blur-sm">
              <Sparkles className="size-4" /> India's verified sports talent network
            </div>
            <h1 className="max-w-3xl text-5xl font-extrabold uppercase leading-[0.98] md:text-7xl lg:text-8xl">
              Talent is everywhere. <span className="text-primary text-glow">Opportunity isn't.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
              ATHLETIX turns performance into proof—helping athletes get seen, coaches discover
              real talent and sponsors back measurable potential.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild>
                <Link to="/roles">Enter the network <ArrowRight /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/coach">Explore talent</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto -mt-16 grid max-w-7xl grid-cols-3 border-y border-border bg-background/90 px-6 backdrop-blur-md lg:px-10">
          {proofPoints.map((item) => (
            <div key={item.label} className="border-r border-border px-3 py-5 last:border-r-0 md:px-8">
              <p className="stat-number text-xl text-primary md:text-3xl">{item.value}</p>
              <p className="mt-1 text-[10px] uppercase text-muted-foreground md:text-xs">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid-lines border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Eyebrow>Built on proof</Eyebrow>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <h2 className="text-4xl font-extrabold uppercase md:text-6xl">
              From raw performance to <span className="text-primary">real opportunity.</span>
            </h2>
            <p className="max-w-xl leading-7 text-muted-foreground lg:justify-self-end">
              A shared system of trust for the people who compete, identify talent and invest in
              the next generation of Indian sport.
            </p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, body }, index) => (
              <article key={title} className="bg-card p-7 md:p-9">
                <div className="flex items-center justify-between">
                  <Icon className="size-6 text-primary" />
                  <span className="text-xs font-bold text-muted-foreground">0{index + 1}</span>
                </div>
                <h3 className="mt-10 text-xl font-bold uppercase">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <Eyebrow>One ecosystem. Three pathways.</Eyebrow>
              <h2 className="mt-4 max-w-3xl text-4xl font-extrabold uppercase md:text-6xl">
                Discover. Verify. Connect. <span className="text-primary text-glow">Rise.</span>
              </h2>
            </div>
            <Button variant="hero" size="lg" asChild>
              <Link to="/roles">Choose your role <ArrowRight /></Link>
            </Button>
          </div>
          <div className="mt-14 flex items-center gap-3 border-t border-border pt-7 text-sm text-muted-foreground">
            <ShieldCheck className="size-5 text-primary" /> Every profile is built for trust,
            discovery and measurable progress.
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <Logo className="text-base" />
        <p>© 2026 ATHLETIX. Performance deserves proof.</p>
      </footer>
    </main>
  );
}
