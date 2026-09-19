import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BatteryCharging,
  Check,
  ChevronRight,
  CircleGauge,
  CloudSun,
  Euro,
  Leaf,
  Menu,
  MonitorDot,
  PanelsTopLeft,
  Phone,
  ShieldCheck,
  Sparkles,
  Sun,
  Trees,
  X,
  Zap,
} from "lucide-react";

import heroImage from "@/assets/solar-home-hero.jpg";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Helio — Solar, engineered around you" },
      { name: "description", content: "Premium solar panels, battery storage, and intelligent energy monitoring designed for your home." },
      { property: "og:title", content: "Helio — Solar, engineered around you" },
      { property: "og:description", content: "See your solar potential, projected savings, and a system designed around your roof." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const hardware = [
  { icon: PanelsTopLeft, label: "N-type modules", stat: "23.2%", detail: "Maximum efficiency", copy: "All-black 450W modules engineered for high output and minimal annual degradation." },
  { icon: CircleGauge, label: "Micro-inverters", stat: "99.8%", detail: "Peak efficiency", copy: "Every panel works independently, keeping production high through shade and changing conditions." },
  { icon: BatteryCharging, label: "Home battery", stat: "13.5", detail: "kWh capacity", copy: "Keep your solar power for the evening and stay protected when the grid goes down." },
];

const process = [
  ["01", "Roof intelligence", "Satellite mapping and a technical roof scan build your precise 3D energy model."],
  ["02", "A plan built for you", "Your engineer balances production, aesthetics, and returns—then shares one clear proposal."],
  ["03", "Installed in one day", "Our certified crew handles every detail, with minimal disruption to your home."],
  ["04", "Always performing", "Live monitoring catches issues early and keeps your system working at its best."],
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="Helio home">
      <span className="relative grid size-8 place-items-center rounded-full border border-primary/50">
        <Sun className="size-4 text-primary" />
      </span>
      <span className="font-display text-xl font-semibold tracking-normal">helio<span className="text-primary">.</span></span>
    </a>
  );
}

function QuoteSheet({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  return (
    <Sheet onOpenChange={(open) => { if (!open) { setStep(1); setSubmitted(false); } }}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-full overflow-y-auto border-border bg-background p-0 sm:max-w-xl">
        <div className="flex min-h-full flex-col p-6 sm:p-10">
          <SheetHeader className="pr-8 text-left">
            <div className="mb-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <Sparkles className="size-4" /> Free solar plan
            </div>
            <SheetTitle className="font-display text-4xl font-medium tracking-normal">
              {submitted ? "Your roof is on our radar." : step === 1 ? "Let’s find your roof." : step === 2 ? "Tell us about the property." : "Where should we send your plan?"}
            </SheetTitle>
            <SheetDescription className="mt-3 text-base leading-relaxed">
              {submitted ? "A solar designer will review your details and get in touch within 24 hours." : `Step ${step} of 3 · Takes less than two minutes.`}
            </SheetDescription>
          </SheetHeader>

          {submitted ? (
            <div className="mt-14 grid place-items-center rounded-lg border border-primary/30 bg-primary/5 px-8 py-16 text-center">
              <div className="grid size-16 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="size-7" /></div>
              <p className="mt-6 text-xl font-medium">Request received</p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">We’ll pair your address with local sunlight data before we call.</p>
            </div>
          ) : (
            <div className="mt-10 flex flex-1 flex-col">
              <div className="mb-10 flex gap-2">{[1,2,3].map((n) => <span key={n} className={`h-1 flex-1 rounded-full ${n <= step ? "bg-primary" : "bg-muted"}`} />)}</div>
              {step === 1 && <div className="space-y-5"><label className="space-y-2 text-sm font-medium">Property address<Input className="h-12 bg-card" placeholder="Street and house number" /></label><label className="space-y-2 text-sm font-medium">Postcode<Input className="h-12 bg-card" placeholder="1234 AB" /></label></div>}
              {step === 2 && <div className="space-y-7"><fieldset><legend className="mb-3 text-sm font-medium">Property type</legend><div className="grid grid-cols-2 gap-3"><button className="rounded-md border border-primary bg-primary/10 p-4 text-left text-sm font-medium" type="button">Residential</button><button className="rounded-md border border-border bg-card p-4 text-left text-sm font-medium hover:border-primary/50" type="button">Commercial</button></div></fieldset><fieldset><legend className="mb-3 text-sm font-medium">Roof type</legend><div className="grid grid-cols-3 gap-3">{["Pitched", "Flat", "Not sure"].map((item) => <button key={item} className="rounded-md border border-border bg-card p-3 text-sm hover:border-primary/50" type="button">{item}</button>)}</div></fieldset></div>}
              {step === 3 && <div className="space-y-5"><label className="space-y-2 text-sm font-medium">Your name<Input className="h-12 bg-card" placeholder="Full name" /></label><label className="space-y-2 text-sm font-medium">Email<Input className="h-12 bg-card" type="email" placeholder="you@email.com" /></label><label className="space-y-2 text-sm font-medium">Phone<Input className="h-12 bg-card" type="tel" placeholder="06 1234 5678" /></label><p className="text-xs leading-relaxed text-muted-foreground">By continuing, you agree that Helio may contact you about this request. No spam, ever.</p></div>}
              <div className="mt-auto flex gap-3 pt-10">
                {step > 1 && <Button variant="outline" className="h-12 px-6" onClick={() => setStep(step - 1)}>Back</Button>}
                <Button className="h-12 flex-1" onClick={() => step < 3 ? setStep(step + 1) : setSubmitted(true)}>{step < 3 ? "Continue" : "Request my solar plan"}<ArrowRight /></Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

function Index() {
  const [bill, setBill] = useState(180);
  const [property, setProperty] = useState<"home" | "business">("home");
  const [sun, setSun] = useState<"ideal" | "good" | "mixed">("ideal");
  const [battery, setBattery] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const results = useMemo(() => {
    const exposure = sun === "ideal" ? 1 : sun === "good" ? 0.86 : 0.7;
    const type = property === "business" ? 1.35 : 1;
    const storage = battery ? 1.12 : 1;
    const annual = Math.round(bill * 12 * 0.73 * exposure * type * storage);
    return { annual, lifetime: Math.round(annual * 25 * 1.18), payback: (9.2 / (exposure * type * storage)).toFixed(1), co2: Math.round(annual / 410), trees: Math.round(annual / 23) };
  }, [bill, property, sun, battery]);

  return (
    <main id="top" className="overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-40 border-b border-border/70 bg-background/55 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#calculator" className="transition-colors hover:text-foreground">Savings</a><a href="#solutions" className="transition-colors hover:text-foreground">Technology</a><a href="#process" className="transition-colors hover:text-foreground">How it works</a><a href="#proof" className="transition-colors hover:text-foreground">Results</a>
          </nav>
          <div className="hidden items-center gap-3 md:flex"><a href="tel:+31850130400" className="flex items-center gap-2 text-sm text-muted-foreground"><Phone className="size-4" /> 085 013 0400</a><QuoteSheet><Button>Get your plan <ArrowRight /></Button></QuoteSheet></div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">{mobileOpen ? <X /> : <Menu />}</Button>
        </div>
        {mobileOpen && <nav className="border-t border-border bg-background px-5 py-6 md:hidden">{[["Savings","calculator"],["Technology","solutions"],["How it works","process"],["Results","proof"]].map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMobileOpen(false)} className="block border-b border-border py-4 text-lg">{label}</a>)}<QuoteSheet><Button className="mt-5 h-12 w-full">Get your plan</Button></QuoteSheet></nav>}
      </header>

      <section className="relative min-h-[820px] overflow-hidden border-b border-border lg:min-h-[860px]">
        <img src={heroImage} width={1536} height={1024} alt="Modern home fitted with black solar panels at sunset" className="absolute inset-0 h-full w-full object-cover object-[64%_center]" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="energy-line absolute left-[58%] top-0 hidden h-full w-px bg-primary/50 lg:block" />
        <div className="relative mx-auto flex min-h-[820px] max-w-[1440px] flex-col justify-end px-5 pb-10 pt-36 sm:px-8 lg:min-h-[860px] lg:justify-center lg:px-12 lg:pb-24">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-primary"><span className="size-2 animate-pulse rounded-full bg-primary" /> Smart solar · The Netherlands</div>
            <h1 className="font-display text-[clamp(3.5rem,7.5vw,7.4rem)] font-medium leading-[0.88] tracking-normal">Power your life.<br/><span className="text-muted-foreground">Not the grid.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-foreground/75 sm:text-lg">Precision-engineered solar and storage that lowers your bills, protects your home, and looks built-in—not bolted on.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#calculator"><Button size="lg" className="h-13 w-full px-6 sm:w-auto">Calculate your savings <ArrowRight /></Button></a><QuoteSheet><Button size="lg" variant="outline" className="h-13 border-foreground/30 bg-background/20 px-6 backdrop-blur-md hover:bg-foreground hover:text-background">Request instant quote</Button></QuoteSheet></div>
          </div>
          <div className="mt-14 grid border-y border-border/70 bg-background/20 backdrop-blur-sm sm:grid-cols-3 lg:absolute lg:bottom-0 lg:left-12 lg:mt-0 lg:w-[720px]">
            {["25-year|Performance guarantee","€0|Down available","24 hrs|Custom plan turnaround"].map((item) => { const [stat,label]=item.split("|"); return <div key={label} className="border-b border-border/70 px-5 py-4 last:border-0 sm:border-b-0 sm:border-r"><p className="font-display text-2xl font-medium text-primary">{stat}</p><p className="mt-1 text-xs text-muted-foreground">{label}</p></div> })}
          </div>
        </div>
      </section>

      <section id="calculator" className="section-grid border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div><p className="eyebrow">Your solar potential</p><h2 className="section-title">What could your roof earn?</h2><p className="section-copy">Adjust the details. See an instant, realistic estimate based on Dutch production averages and current electricity rates.</p><div className="mt-10 hidden items-center gap-3 text-sm text-muted-foreground lg:flex"><ShieldCheck className="size-5 text-primary" /> Estimate with no personal details required</div></div>
            <div className="border border-border bg-card/70 p-5 backdrop-blur-sm sm:p-8">
              <div className="space-y-8">
                <div><div className="mb-4 flex items-end justify-between"><label className="text-sm text-muted-foreground">Monthly electricity bill</label><span className="font-display text-3xl">€{bill}</span></div><Slider value={[bill]} min={60} max={600} step={10} onValueChange={(v) => setBill(v[0] ?? 180)} /><div className="mt-2 flex justify-between text-xs text-muted-foreground"><span>€60</span><span>€600+</span></div></div>
                <div className="grid gap-5 sm:grid-cols-2"><OptionGroup label="Property" options={[["home","Residential"],["business","Commercial"]]} value={property} setValue={(v) => setProperty(v as typeof property)} /><OptionGroup label="Sun exposure" options={[["ideal","Ideal"],["good","Good"],["mixed","Mixed"]]} value={sun} setValue={(v) => setSun(v as typeof sun)} /></div>
                <div className="flex items-center justify-between border-y border-border py-5"><div className="flex items-center gap-3"><BatteryCharging className="size-5 text-primary"/><div><p className="text-sm font-medium">Add home battery</p><p className="text-xs text-muted-foreground">Use more of your own energy</p></div></div><Switch checked={battery} onCheckedChange={setBattery} aria-label="Include home battery" /></div>
              </div>
              <div className="mt-7 grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
                <Result label="Annual savings" value={`€${results.annual.toLocaleString()}`} accent /><Result label="25-year return" value={`€${results.lifetime.toLocaleString()}`} /><Result label="Payback" value={`${results.payback} yrs`} /><Result label="CO₂ avoided" value={`${results.co2} t/yr`} />
              </div>
              <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"><p className="flex items-center gap-2 text-xs text-muted-foreground"><Trees className="size-4 text-primary"/> Equivalent to {results.trees} trees planted each year</p><QuoteSheet><Button>Get a precise design <ChevronRight /></Button></QuoteSheet></div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="max-w-2xl"><p className="eyebrow">One connected system</p><h2 className="section-title">Better hardware.<br/>Beautifully integrated.</h2></div>
          <div className="mt-14 grid gap-px bg-border lg:grid-cols-3">{hardware.map((item, i) => <article key={item.label} className="group relative min-h-96 overflow-hidden bg-card p-7 sm:p-9"><div className="absolute right-5 top-4 font-display text-7xl text-foreground/[0.035]">0{i+1}</div><item.icon className="size-7 text-primary"/><p className="mt-14 text-sm text-muted-foreground">{item.label}</p><p className="mt-2 font-display text-5xl font-medium">{item.stat}<span className="ml-2 text-base text-primary">{item.detail}</span></p><p className="mt-7 max-w-xs text-sm leading-relaxed text-muted-foreground">{item.copy}</p><div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100"/></article>)}</div>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 border-l-2 border-primary bg-secondary/50 p-6 sm:flex-row sm:items-center"><div><p className="font-medium">Not sure what your home needs?</p><p className="mt-1 text-sm text-muted-foreground">We specify each component around your consumption and roof—not a sales package.</p></div><QuoteSheet><Button variant="outline">Talk to an engineer <ArrowRight /></Button></QuoteSheet></div>
        </div>
      </section>

      <section id="process" className="section-grid border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8"><div className="grid gap-12 lg:grid-cols-3"><div><p className="eyebrow">From roof to results</p><h2 className="section-title">Four steps.<br/>Zero guesswork.</h2></div><div className="lg:col-span-2">{process.map(([n,title,copy]) => <div key={n} className="group grid gap-4 border-t border-border py-7 sm:grid-cols-[70px_1fr_1.3fr] sm:items-start"><span className="font-mono text-xs text-primary">/{n}</span><h3 className="font-display text-2xl font-medium">{title}</h3><p className="text-sm leading-relaxed text-muted-foreground">{copy}</p></div>)}</div></div></div>
      </section>

      <section id="proof" className="border-b border-border py-24 sm:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div><p className="eyebrow">Measured, not promised</p><h2 className="section-title">Real homes.<br/>Real reductions.</h2><blockquote className="mt-10 border-l border-primary pl-6"><p className="font-display text-2xl leading-snug">“Our bill dropped from €231 to €28. The app makes every sunny day strangely satisfying.”</p><footer className="mt-5 text-sm text-muted-foreground">Mara & Koen · Utrecht · 12 panels + battery</footer></blockquote></div>
            <div className="grid gap-px bg-border sm:grid-cols-2"><div className="bg-card p-8"><p className="text-xs uppercase tracking-widest text-muted-foreground">Before Helio</p><p className="mt-5 font-display text-5xl">€231</p><p className="mt-2 text-sm text-muted-foreground">average monthly bill</p></div><div className="bg-primary p-8 text-primary-foreground"><p className="text-xs uppercase tracking-widest opacity-70">After Helio</p><p className="mt-5 font-display text-5xl">€28</p><p className="mt-2 text-sm opacity-70">average monthly bill</p></div><div className="bg-card p-8 sm:col-span-2"><div className="flex items-center justify-between"><div><p className="text-xs uppercase tracking-widest text-muted-foreground">Producing right now</p><p className="mt-3 font-display text-4xl">4.82 kW</p></div><div className="relative grid size-20 place-items-center rounded-full border border-primary/30"><Zap className="size-7 text-primary"/><span className="absolute inset-2 animate-ping rounded-full border border-primary/20"/></div></div><div className="mt-6 h-12 energy-chart" /></div></div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-px bg-border sm:grid-cols-4">{[[ShieldCheck,"25-year warranty"],[Check,"Certified installers"],[MonitorDot,"Lifetime monitoring"],[Leaf,"Circular recycling"]].map(([Icon,label]) => { const IconComponent = Icon as typeof ShieldCheck; return <div key={label as string} className="flex items-center gap-3 bg-background p-5 text-sm"><IconComponent className="size-5 text-primary"/>{label as string}</div> })}</div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 sm:py-32"><div className="absolute inset-0 bg-cta-glow"/><div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8"><CloudSun className="mx-auto size-9 text-primary"/><p className="eyebrow mt-6">Your roof is ready</p><h2 className="font-display text-5xl font-medium leading-[0.95] sm:text-7xl">Turn sunlight into<br/>something tangible.</h2><p className="mx-auto mt-6 max-w-xl text-muted-foreground">Get a free roof analysis, honest production forecast, and fixed-price proposal within 24 hours.</p><QuoteSheet><Button size="lg" className="mt-9 h-14 px-8">Design my solar system <ArrowRight /></Button></QuoteSheet></div></section>

      <footer className="border-t border-border bg-card py-12"><div className="mx-auto max-w-[1280px] px-5 sm:px-8"><div className="grid gap-10 md:grid-cols-4"><div className="md:col-span-2"><Logo/><p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">Clean energy, delivered with precision. Designed in the Netherlands.</p></div><div><p className="text-sm font-medium">Explore</p><div className="mt-4 space-y-3 text-sm text-muted-foreground"><a className="block hover:text-foreground" href="#calculator">Savings calculator</a><a className="block hover:text-foreground" href="#solutions">Technology</a><a className="block hover:text-foreground" href="#process">Installation</a></div></div><div><p className="text-sm font-medium">Contact</p><div className="mt-4 space-y-3 text-sm text-muted-foreground"><a className="block hover:text-foreground" href="tel:+31850130400">085 013 0400</a><a className="block hover:text-foreground" href="mailto:hello@helio.energy">hello@helio.energy</a><p>Mon–Fri · 08:00–18:00</p></div></div></div><div className="mt-12 flex flex-col justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row"><p>© 2026 Helio Energy B.V.</p><div className="flex gap-5"><a href="#top">Privacy</a><a href="#top">Terms</a><a href="#top">Cookies</a></div></div></div></footer>
    </main>
  );
}

function OptionGroup({ label, options, value, setValue }: { label: string; options: Array<[string, string]>; value: string; setValue: (value: string) => void }) {
  return <fieldset><legend className="mb-3 text-sm text-muted-foreground">{label}</legend><div className="flex rounded-md border border-border bg-background p-1">{options.map(([key,text]) => <button key={key} type="button" onClick={() => setValue(key)} className={`min-h-9 flex-1 rounded-sm px-2 text-xs font-medium transition-colors ${value === key ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>{text}</button>)}</div></fieldset>;
}

function Result({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return <div className="bg-background p-4"><p className={`font-display text-2xl font-medium sm:text-3xl ${accent ? "text-primary" : ""}`}>{value}</p><p className="mt-2 text-[11px] text-muted-foreground">{label}</p></div>;
}