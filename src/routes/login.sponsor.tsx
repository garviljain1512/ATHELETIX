import { createFileRoute } from "@tanstack/react-router";
import { AuthPanel } from "@/components/athletix/auth-panel";

export const Route = createFileRoute("/login/sponsor")({
  head: () => ({
    meta: [
      { title: "Sponsor Login | ATHLETIX" },
      {
        name: "description",
        content:
          "Sign in as a sponsor to fund verified athletes and track the impact of every contribution on ATHLETIX.",
      },
      { property: "og:title", content: "Sponsor Login | ATHLETIX" },
      {
        property: "og:description",
        content: "Fund verified athletes and track measurable impact.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <AuthPanel
      role="Sponsor"
      headline="Back talent that can be verified."
      blurb="Clear funding requirements, verified achievements and transparent progress."
      highlights={[
        "Verified sponsorship requests",
        "Transparent funding progress",
        "Impact reporting",
      ]}
      to="/sponsor"
    />
  ),
});
