import { Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo, Eyebrow } from "./brand";
import heroImage from "@/assets/hero-athlete.jpg";

export function AuthPanel({
  role,
  headline,
  blurb,
  highlights,
  to,
}: {
  role: string;
  headline: string;
  blurb: string;
  highlights: string[];
  to: "/athlete" | "/coach" | "/sponsor";
}) {
  const navigate = useNavigate();

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="hero-gradient flex flex-col justify-between px-6 py-10 md:px-12">
        <Logo />
        <div className="mx-auto w-full max-w-sm py-12">
          <Eyebrow>{role} Access</Eyebrow>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">{headline}</h1>
          <p className="mt-3 text-sm text-muted-foreground">{blurb}</p>

          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              navigate({ to });
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@athletix.in" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" required />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">
              Enter ATHLETIX →
            </Button>
            <Button type="button" variant="outline" size="lg" className="w-full">
              Create {role.toLowerCase()} account
            </Button>
          </form>

          <Link
            to="/roles"
            className="mt-6 inline-block text-xs text-muted-foreground hover:text-primary"
          >
            ← Choose a different role
          </Link>
        </div>
        <p className="text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
          Discover. Verify. Connect. Rise.
        </p>
      </div>

      <div className="relative hidden overflow-hidden border-l border-border lg:block">
        <img
          src={heroImage}
          alt="Neon wireframe sprinter accelerating on a track"
          className="h-full w-full object-cover opacity-70"
          loading="lazy"
          width={1408}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute right-8 bottom-10 left-8 space-y-2">
          {highlights.map((h) => (
            <p key={h} className="flex items-center gap-2 text-sm text-foreground">
              <span className="text-primary">✓</span>
              {h}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
