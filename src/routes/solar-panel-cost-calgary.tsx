import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/guide-page";
import { guides } from "@/lib/guides";
import { faqJsonLd, pageHead } from "@/lib/seo";

const page = guides.cost;

export const Route = createFileRoute("/solar-panel-cost-calgary")({
  head: () =>
    pageHead({
      title: page.title,
      description: page.description,
      path: page.path,
      jsonLd: [faqJsonLd(page.faqs)],
    }),
  component: CostPage,
});

function CostPage() {
  return <GuidePage page={page} />;
}
