import { createFileRoute } from "@tanstack/react-router";
import { AuthPanel } from "@/components/athletix/auth-panel";

export const Route = createFileRoute("/login/coach")({
  head: () => ({
    meta: [
      { title: "Coach Login | ATHLETIX" },
      {
        name: "description",
        content:
          "Sign in as a coach to discover, filter and shortlist verified athletes across India on ATHLETIX.",
      },
      { property: "og:title", content: "Coach Login | ATHLETIX" },
      {
        property: "og:description",
        content: "Discover verified talent with performance-backed filters.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <AuthPanel
      role="Coach"
      headline="Find the athlete before anyone else does."
      blurb="Search verified profiles by sport, level, region and performance trajectory."
      highlights={[
        "Filtered talent discovery",
        "ATHLETIX match scoring",
        "Shortlist and connect instantly",
      ]}
      to="/coach"
    />
  ),
});
