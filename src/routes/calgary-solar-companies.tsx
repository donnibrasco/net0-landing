import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/guide-page";
import { guides } from "@/lib/guides";
import { faqJsonLd, pageHead } from "@/lib/seo";

const page = guides.companies;

export const Route = createFileRoute("/calgary-solar-companies")({
  head: () =>
    pageHead({
      title: page.title,
      description: page.description,
      path: page.path,
      jsonLd: [faqJsonLd(page.faqs)],
    }),
  component: CompaniesPage,
});

function CompaniesPage() {
  return <GuidePage page={page} />;
}
