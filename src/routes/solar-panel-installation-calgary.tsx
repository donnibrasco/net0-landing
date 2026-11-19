import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/guide-page";
import { guides } from "@/lib/guides";
import { faqJsonLd, pageHead } from "@/lib/seo";

const page = guides.installation;

export const Route = createFileRoute("/solar-panel-installation-calgary")({
  head: () =>
    pageHead({
      title: page.title,
      description: page.description,
      path: page.path,
      jsonLd: [faqJsonLd(page.faqs)],
    }),
  component: InstallationPage,
});

function InstallationPage() {
  return <GuidePage page={page} />;
}
