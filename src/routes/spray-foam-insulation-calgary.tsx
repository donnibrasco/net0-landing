import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/guide-page";
import { addons } from "@/lib/addons";
import { faqJsonLd, pageHead, serviceJsonLd } from "@/lib/seo";

const page = addons.foam;

export const Route = createFileRoute("/spray-foam-insulation-calgary")({
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
  component: SprayFoamPage,
});

function SprayFoamPage() {
  return <GuidePage page={page} />;
}
