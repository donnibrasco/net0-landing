import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { getArticle } from "@/lib/articles";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article not found — net0 Energy" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return {
      meta: [
        { title: `${loaderData.title} — net0 Energy` },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  notFoundComponent: ArticleNotFound,
  component: ArticlePage,
});

function ArticlePage() {
  const article = Route.useLoaderData();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> All insights
        </Link>

        <div className="mt-10 flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
          <span className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-medium text-primary">
            {article.category}
          </span>
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>

        <h1 className="mt-6 font-display text-4xl font-medium leading-[1.05] sm:text-5xl">
          {article.title}
        </h1>

        <p className="mt-8 border-l-2 border-primary pl-6 text-xl leading-relaxed text-muted-foreground">
          {article.intro}
        </p>

        {article.sections.map((section) => (
          <section key={section.heading} className="mt-14">
            <h2 className="font-display text-2xl font-medium sm:text-3xl">
              {section.heading}
            </h2>
            {section.body.map((paragraph, index) => (
              <p
                key={index}
                className="mt-5 leading-[1.8] text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </section>
        ))}

        <div className="mt-14 rounded-lg border border-primary/30 bg-primary/5 p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            The takeaway
          </p>
          <p className="mt-3 text-lg leading-relaxed">{article.takeaway}</p>
        </div>

        <div className="mt-14 rounded-lg border border-border bg-card p-8 text-center sm:p-10">
          <h2 className="font-display text-2xl font-medium sm:text-3xl">
            Lock in your rate before the next increase.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            A free roof analysis shows exactly what your home could produce —
            and what you'd stop paying the grid.
          </p>
          <Link
            to="/"
            hash="calculator"
            className="mt-7 inline-flex h-12 items-center gap-2 rounded-md bg-primary px-7 font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Check my roof <ArrowRight className="size-4" />
          </Link>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}

function ArticleNotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-5 py-32 text-center sm:px-8">
        <h1 className="font-display text-4xl font-medium">Article not found</h1>
        <p className="mt-4 text-muted-foreground">
          This article may have been moved or removed.
        </p>
        <Link
          to="/blog"
          className="mt-8 inline-flex items-center gap-2 text-primary hover:underline"
        >
          <ArrowLeft className="size-4" /> Back to all insights
        </Link>
      </div>
      <SiteFooter />
    </main>
  );
}
