/**
 * Single source for the public brand and contact details.
 * Header, footer, contact blocks, and structured data all read from here.
 */
export const site = {
  name: "net0",
  legalName: "net0 Energy",
  url: "https://gonet0.ca",
  locale: "en_CA",
  email: "info@gonet0.ca",
  phoneDisplay: "(403) 917-2240",
  phoneTel: "+14039172240",
  phoneSchema: "+1-403-917-2240",
  hours: "Mon–Fri · 08:00–18:00 MT",
  serviceArea: "Calgary and surrounding communities",
  ogImagePath: "/og.jpg",
  address: {
    street: "4121 23b St NE Unit 4121",
    city: "Calgary",
    region: "AB",
    postalCode: "T2E 7V9",
    country: "Canada",
    countryCode: "CA",
  },
} as const;

/** Planning production for an unshaded Calgary-area roof. Shown as an estimate, not a quote. */
export const solarProduction = {
  lowKwhPerKw: 1100,
  highKwhPerKw: 1300,
  planningKwhPerKw: 1200,
} as const;

export type AppPath =
  | "/"
  | "/blog"
  | "/solar-panels-calgary"
  | "/solar-panel-cost-calgary"
  | "/solar-panel-installation-calgary"
  | "/calgary-solar-companies"
  | "/window-replacement-calgary"
  | "/permanent-christmas-lights-calgary"
  | "/heat-pump-calgary"
  | "/air-conditioning-calgary"
  | "/whole-house-water-filter-calgary"
  | "/spray-foam-insulation-calgary";

const appPaths = new Set<string>([
  "/",
  "/blog",
  "/solar-panels-calgary",
  "/solar-panel-cost-calgary",
  "/solar-panel-installation-calgary",
  "/calgary-solar-companies",
  "/window-replacement-calgary",
  "/permanent-christmas-lights-calgary",
  "/heat-pump-calgary",
  "/air-conditioning-calgary",
  "/whole-house-water-filter-calgary",
  "/spray-foam-insulation-calgary",
]);

export function isAppPath(href: string): href is AppPath {
  return appPaths.has(href);
}

export function addressLine(): string {
  const { street, city, region, postalCode, country } = site.address;
  return `${street}, ${city}, ${region} ${postalCode}, ${country}`;
}

export function absoluteUrl(path: string): string {
  if (path === "/" || path === "") return `${site.url}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${normalized}`;
}

export function phoneHref(): string {
  return `tel:${site.phoneTel}`;
}

export function emailHref(): string {
  return `mailto:${site.email}`;
}

export function mapsHref(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressLine())}`;
}

export const guideNav = [
  {
    to: "/solar-panels-calgary",
    label: "Solar panels",
    blurb: "What works on Calgary roofs, including hail, snow, and direction.",
  },
  {
    to: "/solar-panel-cost-calgary",
    label: "Solar panel cost",
    blurb: "Budget ranges per watt and by system size, plus payback and credits.",
  },
  {
    to: "/solar-panel-installation-calgary",
    label: "Installation",
    blurb: "Roof scan, permits, interconnection, and what install day is like.",
  },
  {
    to: "/calgary-solar-companies",
    label: "Choosing a company",
    blurb: "How to compare Calgary solar companies without a fake ranking.",
  },
] as const;

export const addonNav = [
  {
    to: "/window-replacement-calgary",
    label: "Window replacement",
    blurb: "Tighter windows so the house needs less heat, quoted with the solar contract.",
  },
  {
    to: "/permanent-christmas-lights-calgary",
    label: "Permanent lights",
    blurb: "Year-round roofline LEDs, plus a seasonal holiday install, on one visit.",
  },
  {
    to: "/heat-pump-calgary",
    label: "Heat pumps",
    blurb: "Cold-climate heating and cooling, with honest winter solar math.",
  },
  {
    to: "/air-conditioning-calgary",
    label: "Air conditioning",
    blurb: "A planned cooling install, sized against summer solar production.",
  },
  {
    to: "/whole-house-water-filter-calgary",
    label: "Whole-house water filter",
    blurb: "Filtration for the whole house, as a comfort add-on rather than an energy product.",
  },
  {
    to: "/spray-foam-insulation-calgary",
    label: "Spray foam insulation",
    blurb: "Attic spray foam that shrinks the heating load solar and a heat pump then cover.",
  },
] as const;
