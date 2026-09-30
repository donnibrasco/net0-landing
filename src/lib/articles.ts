export interface ArticleSection {
  heading: string;
  body: string[];
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  intro: string;
  sections: ArticleSection[];
  takeaway: string;
}

export const articles: Article[] = [
  {
    slug: "alberta-ai-data-centers-energy-costs",
    title: "Why AI Data Centers Are Pushing Alberta's Power Bills Higher — and What Homeowners Can Do",
    description:
      "Alberta's electricity demand is surging as AI data centers flock to the province. Here's what that means for your monthly power bill — and how rooftop solar locks in your rate.",
    category: "Energy market",
    date: "September 2026",
    readTime: "6 min read",
    intro:
      "Alberta has quietly become one of North America's hottest markets for AI data centers. Cheap land, a deregulated power market, and a cool climate have drawn billions of dollars in proposed facilities — and each one consumes as much electricity as a small city. That demand is starting to show up where it hurts: your monthly power bill.",
    sections: [
      {
        heading: "The scale of the demand surge",
        body: [
          "The Alberta Electric System Operator (AESO) has reported a pipeline of proposed data center projects that, if all built, would add several gigawatts of new demand to a grid that currently peaks around 12 gigawatts. Even a fraction of that pipeline coming online represents the fastest demand growth the province has ever seen.",
          "Unlike homes, which use more power in the evening, data centers draw a flat, massive load 24 hours a day. That kind of demand requires new generation, new transmission lines, and new grid infrastructure — all of which is paid for, ultimately, by everyone connected to the grid.",
        ],
      },
      {
        heading: "Why that raises your bill",
        body: [
          "Alberta's deregulated market means electricity prices move with supply and demand. When demand spikes faster than new generation can be built, wholesale prices climb — and retailers pass that through to residential customers.",
          "It's not just the energy charge. Transmission and distribution fees, which already make up a large share of a typical Alberta bill, rise as the grid is expanded to serve industrial-scale loads. Homeowners end up subsidizing infrastructure built for someone else's servers.",
        ],
      },
      {
        heading: "Solar as a hedge, not just a savings tool",
        body: [
          "Most people think of rooftop solar as a way to save money today. In a market with structurally rising prices, it's better understood as a way to lock in your electricity cost for 25 years. Every kilowatt-hour your roof produces is one you don't buy at whatever the market charges next year — or in 2035.",
          "Alberta is one of the sunniest provinces in Canada, with Calgary averaging over 300 days of sunshine a year. A well-designed residential system here can offset the majority of a home's annual consumption, and Alberta's micro-generation regulation lets you sell excess production back to your retailer.",
        ],
      },
      {
        heading: "The window to act early",
        body: [
          "Equipment and installation costs for solar have fallen steadily, while grid electricity in Alberta has trended the other way. The homeowners who benefit most are the ones who install before the next wave of demand-driven price increases lands — because their savings grow every time the grid rate goes up.",
          "A free roof analysis takes minutes and gives you a concrete production forecast for your address, so you can compare your locked-in solar rate against where grid prices are heading.",
        ],
      },
    ],
    takeaway:
      "AI data centers aren't leaving Alberta, and neither is the upward pressure on power prices. Rooftop solar is the one move a homeowner can make that steps outside that market entirely — turning a rising cost into a fixed, shrinking one.",
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
