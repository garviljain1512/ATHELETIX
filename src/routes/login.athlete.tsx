import { createFileRoute } from "@tanstack/react-router";
import { AuthPanel } from "@/components/athletix/auth-panel";

export const Route = createFileRoute("/login/athlete")({
  head: () => ({
    meta: [
      { title: "Athlete Login | ATHLETIX" },
      {
        name: "description",
        content:
          "Sign in to your ATHLETIX athlete profile to track performance, verify achievements and unlock opportunities.",
      },
      { property: "og:title", content: "Athlete Login | ATHLETIX" },
      {
        property: "og:description",
        content: "Track performance, verify achievements, get discovered.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <AuthPanel
      role="Athlete"
      headline="Your performance, on the record."
      blurb="Verified results, tracked progress and real opportunities in one professional profile."
      highlights={[
        "Verified achievement records",
        "Performance progress tracking",
        "Coach and sponsor visibility",
      ]}
      to="/athlete"
    />
  ),
});
