import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { articles } from "@/lib/articles";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — net0 Energy" },
      {
        name: "description",
        content:
          "Plain-language analysis of Alberta's energy market, solar technology, and how homeowners can take control of rising power costs.",
      },
      { property: "og:title", content: "Insights — net0 Energy" },
      {
        property: "og:description",
        content:
          "Plain-language analysis of Alberta's energy market, solar technology, and how homeowners can take control of rising power costs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border py-20 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <p className="eyebrow">net0 Insights</p>
          <h1 className="section-title mt-4 max-w-3xl">
            Energy, explained.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Plain-language analysis of Alberta's energy market, solar
            technology, and what it all means for your monthly bill.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid gap-px bg-border">
            {articles.map((article) => (
              <Link
                key={article.slug}
                to="/blog/$slug"
                params={{ slug: article.slug }}
                className="group grid gap-6 bg-background p-8 transition-colors hover:bg-card sm:grid-cols-[1fr_auto] sm:items-center sm:p-10"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                    <span className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-medium text-primary">
                      {article.category}
                    </span>
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="mt-4 max-w-2xl font-display text-2xl font-medium leading-snug sm:text-3xl">
                    {article.title}
                  </h2>
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                    {article.description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Read article
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-lg border border-border bg-card p-8 text-center sm:p-12">
            <h2 className="font-display text-3xl font-medium">
              Curious what your roof could produce?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Get a free, no-pressure roof analysis with a real production
              forecast for your address.
            </p>
            <Link
              to="/"
              hash="calculator"
              className="mt-7 inline-flex h-12 items-center gap-2 rounded-md bg-primary px-7 font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Calculate my savings <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
