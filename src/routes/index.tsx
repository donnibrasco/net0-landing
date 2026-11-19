import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BatteryCharging,
  Check,
  ChevronRight,
  CircleGauge,
  CloudSun,
  Leaf,
  Menu,
  MonitorDot,
  PanelsTopLeft,
  Play,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

import salesLetterAsset from "@/assets/net0-video-sales-letter.mp4.asset.json";
import salesLetterPosterAsset from "@/assets/net0-vsl-poster.jpg.asset.json";
import { PhoneLink, SiteFooter, SiteLogo } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { pageHead } from "@/lib/seo";
import { addonNav, guideNav, site, solarProduction } from "@/lib/site";

const homeTitle = "Solar Calgary | net0 — Solar Panels for Calgary Homes";
const homeDescription =
  "Calgary solar installation with $0-down financing, a free roof scan, and Alberta micro-generation credits. See what your roof could save.";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: homeTitle,
      description: homeDescription,
      path: "/",
    }),
  component: Index,
});

const hardware = [
  {
    icon: PanelsTopLeft,
    label: "N-type modules",
    stat: "23.2%",
    detail: "Maximum efficiency",
    copy: "All-black 450W modules engineered for high output and minimal annual degradation.",
  },
  {
    icon: CircleGauge,
    label: "Micro-inverters",
    stat: "99.8%",
    detail: "Peak efficiency",
    copy: "Every panel works independently, keeping production high through shade and changing conditions.",
  },
  {
    icon: BatteryCharging,
    label: "Home battery",
    stat: "13.5",
    detail: "kWh capacity",
    copy: "Keep your solar power for the evening and stay protected when the grid goes down.",
  },
];

const process = [
  [
    "01",
    "Roof intelligence",
    "Satellite mapping and a technical roof scan build your precise 3D energy model.",
  ],
  [
    "02",
    "A plan built for you",
    "Your engineer balances production, aesthetics, and returns—then shares one clear proposal.",
  ],
  [
    "03",
    "Installed in one day",
    "Our certified crew handles a straightforward Calgary roof in a day, and says so when a house needs longer.",
  ],
  [
    "04",
    "Always performing",
    "Live monitoring catches issues early and keeps your system working at its best.",
  ],
];

const cadFormatter = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  maximumFractionDigits: 0,
});

function FreeEnergyBadge() {
  return (
    <div
      className="free-energy-badge relative grid size-28 place-items-center rounded-full bg-primary text-primary-foreground sm:size-36"
      aria-label="Calgary typically sees more than 2,300 hours of bright sunshine in a year"
    >
      <svg
        className="pointer-events-none absolute inset-0 size-full -rotate-90"
        viewBox="0 0 120 120"
        aria-hidden="true"
      >
        <circle className="free-energy-track" cx="60" cy="60" r="55" pathLength="100" />
        <circle className="free-energy-progress" cx="60" cy="60" r="55" pathLength="100" />
      </svg>
      <span className="relative z-10 text-center font-display leading-none">
        <span className="block text-[0.66rem] font-semibold uppercase sm:text-xs">calgary</span>
        <span className="mt-1.5 block text-xl font-semibold tabular-nums sm:text-2xl">2,300+</span>
        <span className="mt-1 block text-[0.55rem] font-semibold uppercase opacity-70 sm:text-[0.62rem]">
          sun hours
        </span>
      </span>
    </div>
  );
}

function QuoteSheet({
  children,
  postcode = "",
  houseNumber = "",
}: {
  children: React.ReactNode;
  postcode?: string;
  houseNumber?: string;
}) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  return (
    <Sheet
      onOpenChange={(open) => {
        if (!open) {
          setStep(1);
          setSubmitted(false);
        }
      }}
    >
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-full overflow-y-auto border-border bg-background p-0 sm:max-w-xl">
        <div className="flex min-h-full flex-col p-6 sm:p-10">
          <SheetHeader className="pr-8 text-left">
            <div className="mb-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <Sparkles className="size-4" /> Free solar plan
            </div>
            <SheetTitle className="font-display text-4xl font-medium tracking-normal">
              {submitted
                ? "Your roof is on our radar."
                : step === 1
                  ? "Let’s find your roof."
                  : step === 2
                    ? "Tell us about the property."
                    : "Where should we send your plan?"}
            </SheetTitle>
            <SheetDescription className="mt-3 text-base leading-relaxed">
              {submitted
                ? "A solar designer will review your details and get in touch within 24 hours."
                : `Step ${step} of 3 · Takes less than two minutes.`}
            </SheetDescription>
          </SheetHeader>

          {submitted ? (
            <div className="mt-14 grid place-items-center rounded-lg border border-primary/30 bg-primary/5 px-8 py-16 text-center">
              <div className="grid size-16 place-items-center rounded-full bg-primary text-primary-foreground">
                <Check className="size-7" />
              </div>
              <p className="mt-6 text-xl font-medium">Request received</p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                We’ll pair your Calgary address with local sunlight data before we call.
              </p>
            </div>
          ) : (
            <div className="mt-10 flex flex-1 flex-col">
              <div className="mb-10 flex gap-2">
                {[1, 2, 3].map((n) => (
                  <span
                    key={n}
                    className={`h-1 flex-1 rounded-full ${n <= step ? "bg-primary" : "bg-muted"}`}
                  />
                ))}
              </div>
              {step === 1 && (
                <div className="space-y-5">
                  <label className="space-y-2 text-sm font-medium">
                    House number
                    <Input className="h-12 bg-card" defaultValue={houseNumber} placeholder="24" />
                  </label>
                  <label className="space-y-2 text-sm font-medium">
                    Postal code
                    <Input className="h-12 bg-card" defaultValue={postcode} placeholder="T2P 1A1" />
                  </label>
                </div>
              )}
              {step === 2 && (
                <div className="space-y-7">
                  <fieldset>
                    <legend className="mb-3 text-sm font-medium">Property type</legend>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        className="rounded-md border border-primary bg-primary/10 p-4 text-left text-sm font-medium"
                        type="button"
                      >
                        Residential
                      </button>
                      <button
                        className="rounded-md border border-border bg-card p-4 text-left text-sm font-medium hover:border-primary/50"
                        type="button"
                      >
                        Commercial
                      </button>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="mb-3 text-sm font-medium">Roof type</legend>
                    <div className="grid grid-cols-3 gap-3">
                      {["Pitched", "Flat", "Not sure"].map((item) => (
                        <button
                          key={item}
                          className="rounded-md border border-border bg-card p-3 text-sm hover:border-primary/50"
                          type="button"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                </div>
              )}
              {step === 3 && (
                <div className="space-y-5">
                  <label className="space-y-2 text-sm font-medium">
                    Your name
                    <Input className="h-12 bg-card" placeholder="Full name" />
                  </label>
                  <label className="space-y-2 text-sm font-medium">
                    Email
                    <Input className="h-12 bg-card" type="email" placeholder="you@email.com" />
                  </label>
                  <label className="space-y-2 text-sm font-medium">
                    Phone
                    <Input className="h-12 bg-card" type="tel" placeholder="(403) 555-0123" />
                  </label>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    By continuing, you agree that net0 may contact you about this request. No spam,
                    ever.
                  </p>
                </div>
              )}
              <div className="mt-auto flex gap-3 pt-10">
                {step > 1 && (
                  <Button variant="outline" className="h-12 px-6" onClick={() => setStep(step - 1)}>
                    Back
                  </Button>
                )}
                <Button
                  className="h-12 flex-1"
                  onClick={() => (step < 3 ? setStep(step + 1) : setSubmitted(true))}
                >
                  {step < 3 ? "Continue" : "Request my solar plan"}
                  <ArrowRight />
                </Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

function VideoSalesLetter() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    if (!activated) return;
    const video = videoRef.current;
    if (!video) return;
    void video.play().catch(() => undefined);
  }, [activated]);

  return (
    <section id="watch" className="relative border-b border-border bg-card py-24 sm:py-32">
      <div className="section-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2">
            <Play className="size-3.5 fill-current" /> Watch and discover
          </p>
          <h2 className="mt-6 font-display text-4xl font-medium leading-[1.02] sm:text-6xl">
            How net0 approaches a Calgary power bill
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A short walkthrough of the roof scan, the install, and $0-down financing. The video
            loads only when you press play.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-5xl rounded-lg border border-primary/45 bg-background p-1.5 ring-1 ring-primary/15 sm:p-2">
          <div className="relative aspect-video overflow-hidden rounded-md bg-background">
            {activated ? (
              <video
                ref={videoRef}
                src={salesLetterAsset.url}
                poster={salesLetterPosterAsset.url}
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="none"
                aria-label="How net0 solar works"
              >
                Your browser does not support video playback.
              </video>
            ) : (
              <>
                <img
                  src={salesLetterPosterAsset.url}
                  alt=""
                  width={1344}
                  height={768}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <Button
                  type="button"
                  size="icon"
                  className="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-foreground/25 bg-primary text-primary-foreground sm:size-20"
                  onClick={() => setActivated(true)}
                  aria-label="Play net0 solar video"
                >
                  <Play className="size-7 fill-current sm:size-9" />
                </Button>
              </>
            )}
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-5xl flex-col items-center justify-between gap-7 lg:flex-row">
          <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
            {["$0 Down Financing", "Tier-1 hardware", "25-year product coverage"].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-medium sm:text-sm"
              >
                <Check className="size-4 text-primary" /> {item}
              </span>
            ))}
          </div>
          <QuoteSheet>
            <Button size="lg" className="h-14 shrink-0 px-7">
              Check my roof eligibility <ArrowRight />
            </Button>
          </QuoteSheet>
        </div>
      </div>
    </section>
  );
}

function Index() {
  const [bill, setBill] = useState(180);
  const [property, setProperty] = useState<"home" | "business">("home");
  const [sun, setSun] = useState<"ideal" | "good" | "mixed">("ideal");
  const [battery, setBattery] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [postcode, setPostcode] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const results = useMemo(() => {
    const exposure = sun === "ideal" ? 1 : sun === "good" ? 0.88 : 0.72;
    const annualUse = (bill / 0.18) * 12;
    const targetOffset = property === "business" ? 0.55 : 0.7;
    const cap = property === "business" ? 30 : 15;
    const rawKw = (annualUse * targetOffset) / (solarProduction.planningKwhPerKw * exposure);
    const systemKw = Math.round(Math.min(cap, Math.max(3, rawKw)) * 10) / 10;
    const production = Math.round(systemKw * solarProduction.planningKwhPerKw * exposure);
    const valueLow = Math.round(production * 0.12);
    const valueHigh = Math.round(production * 0.22);
    const paybackLow = valueHigh > 0 ? (systemKw * 1000 * 2.5) / valueHigh : 0;
    const paybackHigh = valueLow > 0 ? (systemKw * 1000 * 3.8) / valueLow : 0;
    return { systemKw, production, valueLow, valueHigh, paybackLow, paybackHigh };
  }, [bill, property, sun]);

  return (
    <main id="top" className="overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-40 border-b border-border/50 bg-background/40 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <SiteLogo href="#top" />
          <nav
            className="hidden items-center gap-8 text-sm text-muted-foreground lg:flex"
            aria-label="Primary"
          >
            <a href="#calculator" className="transition-colors hover:text-foreground">
              Savings
            </a>
            <a href="#solutions" className="transition-colors hover:text-foreground">
              Technology
            </a>
            <a href="#process" className="transition-colors hover:text-foreground">
              How it works
            </a>
            <a href="#guides" className="transition-colors hover:text-foreground">
              Guides
            </a>
            <a href="#addons" className="transition-colors hover:text-foreground">
              Upgrades
            </a>
            <Link to="/blog" className="transition-colors hover:text-foreground">
              Insights
            </Link>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <PhoneLink className="text-sm text-muted-foreground hover:text-foreground" />
            <QuoteSheet>
              <Button>
                Get your plan <ArrowRight />
              </Button>
            </QuoteSheet>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {mobileOpen && (
          <nav
            className="border-t border-border bg-background px-5 py-6 lg:hidden"
            aria-label="Mobile"
          >
            {[
              ["Savings", "calculator"],
              ["Technology", "solutions"],
              ["How it works", "process"],
              ["Guides", "guides"],
              ["Upgrades", "addons"],
            ].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMobileOpen(false)}
                className="block border-b border-border py-4 text-lg"
              >
                {label}
              </a>
            ))}
            {guideNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="block border-b border-border py-4 text-lg"
              >
                {item.label}
              </Link>
            ))}
            {addonNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="block border-b border-border py-4 text-lg"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/blog"
              onClick={() => setMobileOpen(false)}
              className="block border-b border-border py-4 text-lg"
            >
              Insights
            </Link>
            <PhoneLink className="mt-4 text-base" />
            <QuoteSheet>
              <Button className="mt-5 h-12 w-full">Get your plan</Button>
            </QuoteSheet>
          </nav>
        )}
      </header>

      <section className="hero-mesh relative min-h-[900px] overflow-hidden border-b border-border sm:min-h-[980px] lg:min-h-[820px]">
        <div className="arch-motif absolute -left-20 top-28 h-72 w-44 opacity-35" />
        <div className="relative mx-auto grid min-h-[900px] max-w-[1440px] grid-rows-[auto_1fr] items-center gap-4 px-5 pb-52 pt-32 sm:min-h-[980px] sm:px-8 sm:pb-52 lg:min-h-[820px] lg:grid-cols-[0.92fr_1.08fr] lg:grid-rows-1 lg:gap-0 lg:px-12 lg:pb-28">
          <div className="relative z-10 max-w-xl lg:py-16">
            <p className="mb-5 font-display text-sm font-semibold text-primary">
              Solar installation in Calgary
            </p>
            <h1 className="font-display text-[clamp(2.6rem,4.8vw,4.8rem)] font-semibold leading-[0.98] tracking-normal">
              Calgary Solar That Cuts the Bill and Locks In Your Power Cost
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              net0 designs and installs residential solar for Calgary homes. A free roof scan uses
              your roof, local sunshine, and Alberta micro-generation rules to show what a system
              can offset before you spend anything.
            </p>
            <p className="mt-4 text-sm font-semibold text-primary">
              Serving Calgary and surrounding communities.
            </p>
          </div>

          <div className="relative mx-auto h-[430px] w-full max-w-[610px] self-end sm:h-[570px] lg:h-[650px] lg:max-w-[690px] lg:self-center">
            <div className="hero-artwork absolute -inset-x-[2%] bottom-[-2%] top-0 overflow-hidden sm:inset-x-0 lg:-right-[4%] lg:left-0">
              <picture>
                <source
                  type="image/avif"
                  srcSet="/images/hero-640.avif 640w, /images/hero-1024.avif 1024w"
                  sizes="(min-width: 1024px) 690px, 92vw"
                />
                <source
                  type="image/webp"
                  srcSet="/images/hero-640.webp 640w, /images/hero-1024.webp 1024w"
                  sizes="(min-width: 1024px) 690px, 92vw"
                />
                <img
                  src="/images/hero-1024.webp"
                  width={1024}
                  height={1536}
                  alt="net0 solar technician holding a rooftop solar panel"
                  className="hero-technician h-full w-full object-cover object-[50%_18%]"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="absolute bottom-[8%] right-[1%] sm:right-[2%] lg:right-[3%]">
              <FreeEnergyBadge />
            </div>
          </div>

          <div className="absolute inset-x-5 bottom-8 z-20 mx-auto max-w-4xl sm:inset-x-8 lg:bottom-12 lg:left-12 lg:right-auto lg:mx-0 lg:w-[780px]">
            <div className="roof-scan grid gap-5 rounded-lg bg-quote-card p-5 text-quote-card-foreground shadow-2xl sm:grid-cols-[1fr_auto] sm:items-center sm:p-7">
              <div>
                <p className="font-display text-xl font-semibold sm:text-2xl">
                  Check if your roof is suitable!
                </p>
                <p className="mt-1 text-sm text-brand-violet">Get a free custom quote</p>
              </div>
              <div className="grid grid-cols-[1fr_0.7fr_auto] gap-2">
                <Input
                  value={postcode}
                  onChange={(event) => setPostcode(event.target.value)}
                  aria-label="Postal code"
                  placeholder="Postal code"
                  className="h-12 border-brand-violet/45 bg-quote-card"
                />
                <Input
                  value={houseNumber}
                  onChange={(event) => setHouseNumber(event.target.value)}
                  aria-label="House number"
                  placeholder="No."
                  className="h-12 border-border bg-quote-card"
                />
                <QuoteSheet postcode={postcode} houseNumber={houseNumber}>
                  <Button className="h-12 bg-solar px-6 text-solar-foreground hover:bg-solar/90">
                    Go <ArrowRight />
                  </Button>
                </QuoteSheet>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoSalesLetter />

      <section id="calculator" className="section-grid border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="eyebrow">Your solar potential</p>
              <h2 className="section-title">What could your Calgary roof produce?</h2>
              <p className="section-copy">
                Adjust the details for a planning estimate. Production uses{" "}
                {solarProduction.planningKwhPerKw.toLocaleString("en-CA")} kWh per kW per year, the
                middle of a {solarProduction.lowKwhPerKw.toLocaleString("en-CA")}–
                {solarProduction.highKwhPerKw.toLocaleString("en-CA")} kWh band for an unshaded
                Calgary-area roof, then scaled for the exposure you pick. It is an estimate, not a
                quote.
              </p>
              <div className="mt-10 hidden items-center gap-3 text-sm text-muted-foreground lg:flex">
                <ShieldCheck className="size-5 text-primary" /> Estimate with no personal details
                required
              </div>
            </div>
            <div className="border border-border bg-card/80 p-5 shadow-xl backdrop-blur-sm sm:p-8">
              <div className="space-y-8">
                <div>
                  <div className="mb-4 flex items-end justify-between">
                    <label className="text-sm text-muted-foreground">
                      Monthly electricity bill (CAD)
                    </label>
                    <span className="font-display text-3xl">{cadFormatter.format(bill)}</span>
                  </div>
                  <Slider
                    value={[bill]}
                    min={60}
                    max={600}
                    step={10}
                    onValueChange={(v) => setBill(v[0] ?? 180)}
                  />
                  <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                    <span>$60</span>
                    <span>$600+</span>
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <OptionGroup
                    label="Property"
                    options={[
                      ["home", "Residential"],
                      ["business", "Commercial"],
                    ]}
                    value={property}
                    setValue={(v) => setProperty(v as typeof property)}
                  />
                  <OptionGroup
                    label="Sun exposure"
                    options={[
                      ["ideal", "Ideal"],
                      ["good", "Good"],
                      ["mixed", "Mixed"],
                    ]}
                    value={sun}
                    setValue={(v) => setSun(v as typeof sun)}
                  />
                </div>
                <div className="flex items-center justify-between border-y border-border py-5">
                  <div className="flex items-center gap-3">
                    <BatteryCharging className="size-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Add home battery</p>
                      <p className="text-xs text-muted-foreground">
                        Stores energy. It does not create more of it.
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={battery}
                    onCheckedChange={setBattery}
                    aria-label="Include home battery"
                  />
                </div>
              </div>
              <div className="mt-7 grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
                <Result
                  label="Est. system size"
                  value={`${results.systemKw.toFixed(1)} kW`}
                  accent
                />
                <Result
                  label="Est. yearly production"
                  value={`${results.production.toLocaleString("en-CA")} kWh`}
                />
                <Result
                  label="Illustrative yearly value"
                  value={`${cadFormatter.format(results.valueLow)}–${cadFormatter.format(results.valueHigh)}`}
                />
                <Result
                  label="Simple payback, estimate"
                  value={`${Math.round(results.paybackLow)}–${Math.round(results.paybackHigh)} yrs`}
                />
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Dollar figures use a planning electricity value of 12–22¢/kWh and an installed cost
                of about $2.50–$3.80/W. They are not a guarantee that your bill will fall by that
                amount. Shade, snow, and your retailer’s export credit change the result.
                {battery
                  ? " A battery is priced separately and can shift use into the evening. It is not included in the production figure."
                  : ""}
              </p>
              <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <p className="text-xs text-muted-foreground">
                  Read the assumptions behind these bands on the{" "}
                  <Link
                    to="/solar-panel-cost-calgary"
                    className="font-medium text-primary hover:underline"
                  >
                    Calgary cost guide
                  </Link>
                  .
                </p>
                <QuoteSheet>
                  <Button>
                    Get a precise design <ChevronRight />
                  </Button>
                </QuoteSheet>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow">One connected system</p>
            <h2 className="section-title">
              Better hardware.
              <br />
              Specified for the roof.
            </h2>
            <p className="section-copy">
              These are the pieces net0 specifies for Calgary homes. The roof scan decides the
              count. A package does not.
            </p>
          </div>
          <div className="mt-14 grid gap-px bg-border lg:grid-cols-3">
            {hardware.map((item, i) => (
              <article
                key={item.label}
                className="group relative min-h-96 overflow-hidden bg-card p-7 sm:p-9"
              >
                <div
                  className={`absolute right-5 top-4 font-display text-7xl ${i === 0 ? "text-solar/20" : i === 1 ? "text-brand-blue/20" : "text-brand-violet/20"}`}
                >
                  0{i + 1}
                </div>
                <item.icon
                  className={`size-7 ${i === 0 ? "text-solar" : i === 1 ? "text-brand-blue" : "text-primary"}`}
                />
                <h3 className="mt-14 text-sm text-muted-foreground">{item.label}</h3>
                <p className="mt-2 font-display text-5xl font-medium">
                  {item.stat}
                  <span className="ml-2 text-base text-primary">{item.detail}</span>
                </p>
                <p className="mt-7 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {item.copy}
                </p>
                <div
                  className={`absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${i === 0 ? "bg-solar" : i === 1 ? "bg-brand-blue" : "bg-primary"}`}
                />
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 border-l-2 border-primary bg-secondary/50 p-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-medium">Not sure what your home needs?</p>
              <p className="mt-1 text-sm text-muted-foreground">
                We specify each component around your consumption and roof—not a sales package. Hail
                rating, shade, and the electrical panel are part of that conversation.
              </p>
            </div>
            <QuoteSheet>
              <Button variant="outline">
                Talk to an engineer <ArrowRight />
              </Button>
            </QuoteSheet>
          </div>
        </div>
      </section>

      <section id="process" className="section-grid border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div>
              <p className="eyebrow">From roof to results</p>
              <h2 className="section-title">
                Four steps.
                <br />
                Zero guesswork.
              </h2>
              <p className="section-copy">
                Permits and interconnection sit between the design and the day the system may
                operate. The{" "}
                <Link
                  to="/solar-panel-installation-calgary"
                  className="font-medium text-primary hover:underline"
                >
                  installation guide
                </Link>{" "}
                spells that out for Calgary.
              </p>
            </div>
            <div className="lg:col-span-2">
              {process.map(([n, title, copy]) => (
                <div
                  key={n}
                  className="group grid gap-4 border-t border-border py-7 sm:grid-cols-[70px_1fr_1.3fr] sm:items-start"
                >
                  <span className="font-mono text-xs text-primary">/{n}</span>
                  <h3 className="font-display text-2xl font-medium">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="local" className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow">Calgary, specifically</p>
            <h2 className="section-title">
              Local sun.
              <br />
              Local rules.
            </h2>
            <p className="section-copy">
              Alberta sunshine is the resource. Micro-generation is the rule that lets a house use
              it and export the surplus. Neither one is a promise that every line on the bill
              disappears.
            </p>
          </div>
          <div className="mt-14 grid gap-px bg-border lg:grid-cols-3">
            <article className="bg-card p-8">
              <h3 className="font-display text-2xl font-medium">Sunshine and output</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Calgary typically records well over 2,300 hours of bright sunshine a year. An
                unshaded roof here is often planned at{" "}
                {solarProduction.lowKwhPerKw.toLocaleString("en-CA")}–
                {solarProduction.highKwhPerKw.toLocaleString("en-CA")} kWh per kW per year. That is
                an estimate until the scan replaces it.
              </p>
            </article>
            <article className="bg-card p-8">
              <h3 className="font-display text-2xl font-medium">Micro-generation</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Alberta’s Micro-generation Regulation lets you use your own production and receive a
                retailer credit for surplus. Fixed charges and the export rate remain. The proposal
                should show the credit it assumed.
              </p>
            </article>
            <article className="bg-card p-8">
              <h3 className="font-display text-2xl font-medium">A local install</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Design, the City electrical permit, interconnection, and a crew that works on
                Calgary roofs. Hail is a design input, not a slogan. No residential panel is immune
                to the worst storm.
              </p>
            </article>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
            {(
              [
                [ShieldCheck, "25-year module coverage"],
                [Check, "Certified installers"],
                [MonitorDot, "Production monitoring"],
                [Leaf, "Ask about end-of-life recycling"],
              ] as const
            ).map(([Icon, label]) => (
              <div key={label} className="flex items-center gap-3 bg-background p-5 text-sm">
                <Icon className="size-5 shrink-0 text-primary" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="guides" className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow">Calgary solar guides</p>
            <h2 className="section-title">Read the local detail before you book.</h2>
            <p className="section-copy">
              Four pages for the searches homeowners actually make: panels, cost, installation, and
              how to compare companies. Each one links back here when you want the scan.
            </p>
          </div>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
            {guideNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group bg-card p-8 transition-colors hover:bg-secondary/40"
              >
                <h3 className="font-display text-2xl font-medium group-hover:text-primary">
                  {item.label}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {item.blurb}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Read the guide <ArrowRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="addons" className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow">On the same contract</p>
            <h2 className="section-title">Home upgrades quoted with solar, or on their own.</h2>
            <p className="section-copy">
              Windows, heating and cooling, attic foam, water, and permanent lights are separate
              lines. Each page says what the job is. None of them invents a price or a rebate.
            </p>
          </div>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {addonNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group bg-card p-8 transition-colors hover:bg-secondary/40"
              >
                <h3 className="font-display text-2xl font-medium group-hover:text-primary">
                  {item.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.blurb}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Read the page <ArrowRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-cta-glow" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <CloudSun className="mx-auto size-9 text-primary" />
          <p className="eyebrow mt-6">Your Calgary roof</p>
          <h2 className="font-display text-5xl font-medium leading-[0.95] sm:text-7xl">
            Turn sunlight into
            <br />
            something tangible.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Get a free roof analysis for your Calgary address, an honest production estimate, and a
            fixed-price proposal.
          </p>
          <QuoteSheet>
            <Button size="lg" className="mt-9 h-14 px-8">
              Design my solar system <ArrowRight />
            </Button>
          </QuoteSheet>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function OptionGroup({
  label,
  options,
  value,
  setValue,
}: {
  label: string;
  options: Array<[string, string]>;
  value: string;
  setValue: (value: string) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm text-muted-foreground">{label}</legend>
      <div className="flex rounded-md border border-border bg-background p-1">
        {options.map(([key, text]) => (
          <button
            key={key}
            type="button"
            onClick={() => setValue(key)}
            className={`min-h-9 flex-1 rounded-sm px-2 text-xs font-medium transition-colors ${value === key ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            {text}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function Result({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="bg-background p-4">
      <p
        className={`font-display text-2xl font-medium sm:text-3xl ${accent ? "text-primary" : ""}`}
      >
        {value}
      </p>
      <p className="mt-2 text-[11px] text-muted-foreground">{label}</p>
    </div>
  );
}
