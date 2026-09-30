import { Link } from "@tanstack/react-router";
import { Zap } from "lucide-react";

export function SiteLogo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground">
        <Zap className="size-5" fill="currentColor" />
      </span>
      <span className="font-display text-2xl font-semibold tracking-tight">net0</span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 sm:px-8">
        <SiteLogo />
        <nav className="flex items-center gap-6 text-sm">
          <Link to="/blog" className="text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground font-medium" }}>
            Insights
          </Link>
          <Link
            to="/"
            hash="calculator"
            className="rounded-full bg-primary px-4 py-2 font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Free roof scan
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-6 px-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:px-8">
        <div className="flex items-center gap-2.5">
          <span className="grid size-7 place-items-center rounded-full bg-primary text-primary-foreground">
            <Zap className="size-4" fill="currentColor" />
          </span>
          <span>© 2026 net0 Energy · Designed in Canada</span>
        </div>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <Link to="/blog" className="hover:text-foreground">Insights</Link>
          <a href="tel:+15872887237" className="hover:text-foreground">587-288-7237</a>
        </div>
      </div>
    </footer>
  );
}
