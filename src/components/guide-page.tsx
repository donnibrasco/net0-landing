import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { ContactBlock, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { otherGuides, type GuidePageData } from "@/lib/guides";
import { isAppPath, phoneHref, site, type AppPath } from "@/lib/site";

function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const label = match[1] ?? "";
    const href = match[2] ?? "";
    const className =
      "font-medium text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary";
    if (isAppPath(href)) {
      nodes.push(
        <Link key={`${match.index}-${href}`} to={href} className={className}>
          {label}
        </Link>,
      );
    } else if (href.startsWith("/")) {
      nodes.push(
        <a key={`${match.index}-${href}`} href={href} className={className}>
          {label}
        </a>,
      );
    } else {
      nodes.push(match[0]);
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}

export function GuidePage({ page }: { page: GuidePageData }) {
  const related = otherGuides(page.path);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <article>
        <header className="section-grid border-b border-border py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <p className="eyebrow">{page.eyebrow}</p>
            <h1 className="mt-4 font-display text-4xl font-medium leading-[1.05] sm:text-6xl">
              {page.h1}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{page.lede}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12">
                <Link to="/" hash="calculator">
                  Check my roof <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12">
                <a href={phoneHref()}>Call {site.phoneDisplay}</a>
              </Button>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          {page.sections.map((section) => (
            <section key={section.id} id={section.id} className="mt-14 first:mt-0">
              <h2 className="font-display text-3xl font-medium leading-tight sm:text-4xl">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={index} className="mt-5 leading-[1.8] text-muted-foreground">
                  <RichText text={paragraph} />
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-5 list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              {section.table && (
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <caption className="mb-3 text-left leading-relaxed text-muted-foreground">
                      {section.table.caption}
                    </caption>
                    <thead>
                      <tr className="border-b border-border text-foreground">
                        {section.table.headers.map((header) => (
                          <th key={header} className="py-3 pr-4 font-medium">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row) => (
                        <tr key={row.join("-")} className="border-b border-border">
                          {row.map((cell, index) => (
                            <td
                              key={`${cell}-${index}`}
                              className="py-3 pr-4 align-top text-muted-foreground"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}

          <section className="mt-16" id="faq">
            <h2 className="font-display text-3xl font-medium sm:text-4xl">
              Questions Calgary homeowners ask
            </h2>
            <div className="mt-8 divide-y divide-border border-y border-border">
              {page.faqs.map((faq) => (
                <div key={faq.question} className="py-6">
                  <h3 className="font-display text-xl font-medium">{faq.question}</h3>
                  <p className="mt-3 leading-[1.8] text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="font-display text-3xl font-medium">Related Calgary guides</h2>
            <div className="mt-6 grid gap-px bg-border sm:grid-cols-3">
              {related.map((guide) => (
                <Link
                  key={guide.path}
                  to={guide.path as AppPath}
                  className="bg-background p-5 transition-colors hover:bg-card"
                >
                  <p className="font-medium">{guide.eyebrow}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{guide.h1}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-lg border border-primary/30 bg-primary/5 p-8 sm:p-10">
            <h2 className="font-display text-3xl font-medium">See the figure for your roof</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The ranges and production bands on this page are planning estimates for Calgary. A
              free roof scan turns them into a layout and a fixed proposal for your address. No
              rebate is assumed unless it is actually open when the proposal is written.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-12">
                <Link to="/" hash="calculator">
                  Start with my roof <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12">
                <a href={phoneHref()}>Call {site.phoneDisplay}</a>
              </Button>
            </div>
          </section>

          <section className="mt-16 border-t border-border pt-10">
            <ContactBlock heading="net0 in Calgary" />
          </section>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
