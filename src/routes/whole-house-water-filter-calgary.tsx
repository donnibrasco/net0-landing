import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/guide-page";
import { addons } from "@/lib/addons";
import { faqJsonLd, pageHead, serviceJsonLd } from "@/lib/seo";

const page = addons.water;

export const Route = createFileRoute("/whole-house-water-filter-calgary")({
  head: () =>
    pageHead({
      title: page.title,
      description: page.description,
      path: page.path,
      jsonLd: [
        serviceJsonLd({
          name: page.h1,
          serviceType: page.serviceType,
          description: page.description,
          path: page.path,
        }),
        faqJsonLd(page.faqs),
      ],
    }),
  component: WaterFilterPage,
});

function WaterFilterPage() {
  return <GuidePage page={page} />;
}
