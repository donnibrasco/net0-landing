import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  addonNav,
  addressLine,
  emailHref,
  guideNav,
  mapsHref,
  phoneHref,
  site,
  type AppPath,
} from "@/lib/site";

export function BrandMark() {
  return (
    <span className="grid size-9 place-items-center text-primary" aria-hidden="true">
      <svg viewBox="0 0 44 44" className="size-9" fill="none">
        <circle cx="22" cy="22" r="18.5" stroke="currentColor" strokeWidth="4" />
        <path
          d="M15 11v8m14-8v8M12 20h20v3c0 6-4.5 10-10 10S12 29 12 23v-3Z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M22 33v7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export function SiteLogo({ href = "/" }: { href?: AppPath | "#top" }) {
  const className = "flex items-center gap-2.5";
  const mark = (
    <>
      <BrandMark />
      <span className="font-display text-2xl font-semibold tracking-normal">net0</span>
    </>
  );
  if (href === "#top") {
    return (
      <a href="#top" className={className} aria-label="net0 home">
        {mark}
      </a>
    );
  }
  return (
    <Link to={href} className={className} aria-label="net0 home">
      {mark}
    </Link>
  );
}

export function PhoneLink({ className = "" }: { className?: string }) {
  return (
    <a href={phoneHref()} className={`inline-flex items-center gap-2 ${className}`}>
      <Phone className="size-4" aria-hidden="true" />
      {site.phoneDisplay}
    </a>
  );
}

export function ContactBlock({ heading = "Contact" }: { heading?: string }) {
  return (
    <div>
      <p className="text-sm font-medium text-foreground">{heading}</p>
      <div className="mt-4 space-y-3 text-sm text-muted-foreground">
        <p>
          <a className="hover:text-foreground" href={phoneHref()}>
            {site.phoneDisplay}
          </a>
        </p>
        <p>
          <a className="hover:text-foreground" href={emailHref()}>
            {site.email}
          </a>
        </p>
        <address className="not-italic leading-relaxed">{addressLine()}</address>
        <p>{site.hours}</p>
        <p>Serving {site.serviceArea}.</p>
        <p>
          <a className="hover:text-foreground" href={mapsHref()}>
            View the address on Google Maps
          </a>
        </p>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-8">
        <SiteLogo />
        <nav className="hidden items-center gap-5 text-sm lg:flex" aria-label="Primary">
          {guideNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "font-medium text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/blog"
            className="text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "font-medium text-foreground" }}
          >
            Insights
          </Link>
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <PhoneLink className="text-sm text-muted-foreground hover:text-foreground" />
          <Button asChild>
            <Link to="/" hash="calculator">
              Free roof scan
            </Link>
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav
          className="border-t border-border bg-background px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          {guideNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-3 text-base"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/blog"
            onClick={() => setOpen(false)}
            className="block border-b border-border py-3 text-base"
          >
            Insights
          </Link>
          {addonNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-3 text-base"
            >
              {item.label}
            </Link>
          ))}
          <PhoneLink className="mt-4 text-base text-foreground" />
          <Button asChild className="mt-4 h-12 w-full">
            <Link to="/" hash="calculator" onClick={() => setOpen(false)}>
              Free roof scan
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <SiteLogo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Residential solar for Calgary homes. Clean energy, designed and installed locally.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Calgary solar guides</p>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              {guideNav.map((item) => (
                <Link key={item.to} to={item.to} className="block hover:text-foreground">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Explore</p>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <Link to="/" hash="calculator" className="block hover:text-foreground">
                Savings calculator
              </Link>
              <Link to="/" hash="process" className="block hover:text-foreground">
                How installation works
              </Link>
              <Link to="/blog" className="block hover:text-foreground">
                Insights and blog
              </Link>
            </div>
          </div>
          <ContactBlock />
        </div>
        <div className="mt-10 border-t border-border pt-8">
          <p className="text-sm font-medium text-foreground">Home upgrades</p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {addonNav.map((item) => (
              <Link key={item.to} to={item.to} className="hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 {site.legalName}</p>
          <p>{addressLine()}</p>
        </div>
      </div>
    </footer>
  );
}
