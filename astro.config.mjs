// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "RL1001",
      sidebar: [
        {
          label: "Introduction",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "introduction/example" },
          ],
        },
        {
          label: "Credit Cards",
          items: [{ label: "Example Guide", slug: "credit-cards/example" }],
        },
        {
          label: "Insurance",
          items: [{ label: "Example Guide", slug: "insurance/example" }],
        },
        {
          label: "Investing",
          items: [{ label: "Example Guide", slug: "investing/example" }],
        },
        {
          label: "Taxes",
          items: [{ label: "Example Guide", slug: "taxes/example" }],
        },
        {
          label: "Career",
          items: [
            {
              label: "You are not your work",
              slug: "career/you-are-not-your-work",
            },
            {
              label: "Your collegues are not your friends",
              slug: "career/your-collegues-are-not-your-friends",
            },
            {
              label: "Make Documentation your best friend",
              slug: "career/make-documentation-your-best-friend",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
