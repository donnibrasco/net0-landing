import type { AppPath } from "./site";

export type GuideSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: {
    caption: string;
    headers: string[];
    rows: string[][];
  };
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type GuidePageData = {
  path: AppPath;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lede: string;
  sections: GuideSection[];
  faqs: GuideFaq[];
};

export const guides = {
  cost: {
    path: "/solar-panel-cost-calgary",
    title: "Solar Panel Cost Calgary (2026) | Prices, Payback & $0 Down | net0",
    description:
      "What solar panels cost in Calgary in 2026: typical system prices, payback, $0-down financing, and how Alberta micro-generation credits change the math.",
    eyebrow: "Calgary solar cost",
    h1: "Solar Panel Cost in Calgary: What Homeowners Actually Pay",
    lede: "A Calgary solar price is a range until someone measures the roof. Hardware, labour, the electrical permit, and the interconnection application all sit inside a real quote. The bands below are for budgeting a straightforward residential rooftop in 2026. They are not a net0 price list, and they are not a promise of savings.",
    sections: [
      {
        id: "included",
        heading: "What an installed Calgary price is supposed to include",
        paragraphs: [
          "When homeowners ask what solar panels cost in Calgary, they are usually comparing numbers that do not cover the same work. A useful price includes the modules, the racking, the inverters or microinverters, the mounts and flashing for a standard roof, the electrical work to a panel that can already take the system, the City of Calgary electrical permit, the interconnection paperwork, commissioning, and monitoring. Design should be in there too. A price that is only a panel-and-inverter package will look cheaper and then grow once the roof and the electrical room are real.",
          "net0 builds that scope from a roof scan rather than from a kit. The scan is free. The proposal that follows is the first number that belongs to your address. Until then, treat every figure on this page as a planning range for a grid-tied house in the Calgary area.",
          "A few things sit outside a standard installed price unless the proposal names them. A main electrical panel that is full or undersized, a roof that needs new shingles or structural repair, a battery and its backup equipment, tree work, and unusual roof details such as slate or a complicated dormer layout. Those are legitimate costs. They should be their own lines so you can see the price of the solar system without them.",
        ],
      },
      {
        id: "ranges",
        heading: "Planning ranges per watt and by system size",
        paragraphs: [
          "For a straightforward grid-tied residential rooftop in the Calgary area in 2026, a reasonable budgeting band is about $2.50 to $3.80 per watt of DC capacity. That is installed cost: equipment, standard installation labour, permit, and interconnection for a roof that does not need structural rebuild or a new electrical service. Smaller systems sit toward the high end of the band because fixed costs — design, permit, truck roll, electrical tie-in — are spread over fewer watts. Larger, simple roofs sit toward the low end.",
          "The table turns that band into system sizes Calgary homeowners actually ask about. A 5 kilowatt system is a smaller or very efficient house. Seven to eight kilowatts is a common detached home. Ten kilowatts is a larger load or a roof with room to spare. Multiply the kilowatts by 1,000 to get watts, then by the per-watt band, and you land in the same place. Round numbers are deliberate. A quote that pretends to be exact before anyone has seen the attic or the panel is not more accurate. It is just narrower than the facts.",
        ],
        table: {
          caption:
            "Budgeting ranges for a straightforward Calgary-area rooftop in 2026, before a battery, panel upgrade, or roof rebuild. Not a quote.",
          headers: ["System size", "Typical fit", "Planning range"],
          rows: [
            ["5 kW", "Smaller home or low use", "$12,500–$19,000"],
            ["8 kW", "Common detached home", "$20,000–$30,500"],
            ["10 kW", "Larger use or a big roof", "$25,000–$38,000"],
          ],
        },
      },
      {
        id: "moves",
        heading: "What moves a Calgary quote up or down",
        paragraphs: [
          "Roof shape matters more than the brand name on the module. A simple south-facing gable with asphalt shingles and a clear path to the electrical panel is the low end of the band. Hips, multiple storeys, steep pitches, and several small roof faces add labour and racking. A detached garage that needs its own trench is a different project from a system that lands on the house wall.",
          "Electrical capacity is the other big swing. Many Calgary houses can accept a residential system on the existing panel. Some cannot. A panel upgrade is often required by the code and the utility, and it should be priced on its own rather than buried in a blended 'solar' number. Ask the installer, in writing, whether the proposal assumes the current panel is adequate.",
          "A home battery is optional. It does not create more kilowatt-hours. It stores midday production for the evening and can keep selected circuits on during an outage if it is set up for backup. It is usually a separate five-figure line. Price the panels with and without it. Otherwise a short payback story is being told with equipment that has a different job.",
          "Snow, hail, and shade change production more than they change the sticker price, but they change the value of that price. A module with a published hail-impact rating can cost a little more and still be the right specification for this region. That is a design choice, not a slogan. No residential panel is immune to the worst hail Calgary sees.",
        ],
      },
      {
        id: "payback",
        heading: "Production, bill value, and simple payback",
        paragraphs: [
          "Southern Alberta rooftops that are reasonably clear of shade often produce about 1,100 to 1,300 kilowatt-hours per installed kilowatt per year. net0 uses 1,200 as the planning midpoint for an unshaded Calgary-area roof, then adjusts for the actual roof once it has been scanned. A mixed or shaded roof can land below that band. Cold weather helps module efficiency, and the long summer days do a lot of the year's work. Winter still produces, just less, and snow cover pauses a roof until it sheds or is cleared.",
          "Dollars follow from that production only after you know what a kilowatt-hour is worth on your bill. Alberta retail rates move. A planning value of roughly 12 to 22 cents per kilowatt-hour covers a wide slice of what solar can offset: the energy charge, and only the portion of delivery and fees that actually shrinks when you import less. It is not your whole bill, and it is not a forecast of next year's rate.",
          "Put those together and a straightforward unshaded system often shows a simple payback of about 9 to 16 years. The short end is a clear roof, a competitive installed price, and a higher value per kilowatt-hour. The long end is a shaded roof, a panel upgrade, a low export credit, or a rate that stays soft. Simple payback ignores financing interest and it ignores rate changes. It is a yardstick, not a guarantee that the system will be 'free' on a given birthday. The homepage calculator uses the same 1,100–1,300 kWh band and labels the result as an estimate.",
          "If you want the production side in more detail before you talk about money, the [solar panels in Calgary](/solar-panels-calgary) guide covers direction, hail, and winter. The [installation guide](/solar-panel-installation-calgary) covers the steps between a scan and a system that is allowed to operate.",
        ],
      },
      {
        id: "financing",
        heading: "What $0-down financing does, and does not, change",
        paragraphs: [
          "net0 can structure $0-down financing so the system is paid monthly instead of upfront. The roof-scan proposal is where the term and the payment are shown for your house. A monthly payment can be easier to carry than a cheque for the full install. It is not the same thing as a short payback. Interest and fees add cost. A payment that is lower than your current bill is a cash-flow comparison, and it depends on the rate you are paying the utility today.",
          "Ask three things before you sign a finance agreement: the total amount paid over the term, what happens if you sell the house, and whether the panels and the loan are separate from a battery you might not want. None of those answers should be verbal only.",
        ],
      },
      {
        id: "incentives",
        heading: "Alberta credits, and the incentives people still ask about",
        paragraphs: [
          "Alberta's Micro-generation Regulation lets a homeowner generate electricity for their own use and send surplus to the grid. For a typical house the system sits in the small micro-generation category. Your electricity retailer credits exported energy under its current terms. That credit is real, and it is not a cheque for the entire bill. Fixed delivery charges, administration fees, and the difference between the retail rate and the export credit still shape the result. The credit rate and the paperwork live with the retailer and the regulation, both of which change. A proposal should show the export assumption it used, and it should say what happens to the math if that credit is lower.",
          "There is not, as of this writing, a large permanent provincial rebate that knocks a fixed amount off every Calgary install. Federal home-energy programs have opened and closed. Some Alberta municipalities have offered property-tax financing for energy upgrades, and those programs pause. net0 will only apply a program that is actually accepting applications when your proposal is written. A closed grant is not savings. If someone subtracts a rebate you cannot apply for, ask them to put the price back.",
          "The practical local incentive is the one already in the regulation: you use your own production first, and you are credited for what you export, on the terms your retailer publishes. That is worth modelling. It is not worth inflating.",
        ],
      },
      {
        id: "compare",
        heading: "How to compare two Calgary quotes without getting lost",
        paragraphs: [
          "Line the quotes up on the same system size, the same equipment class, and the same list of included work. A 7 kilowatt quote and a 10 kilowatt quote are not competing prices. A quote that excludes the permit, or that assumes you will hire the electrician, is not competing with a turnkey price. Ask each company who pulls the electrical permit, who submits the interconnection, and who comes back if production falls.",
          "Then read the warranties as two different documents. The module manufacturer warranties the product. The installer warranties the workmanship: the flashing, the wiring, the attachment to the roof. A long product warranty does not cover a leak. The [guide to choosing a Calgary solar company](/calgary-solar-companies) goes through the questions worth asking before the price is the only thing on the page.",
          "When you are ready for a number that belongs to your roof, start with the free scan on the [net0 homepage](/). Bring your latest power bill. The estimate you can run there uses Calgary production assumptions and will not match a final proposal, which is the point of doing both.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much do solar panels cost in Calgary in 2026?",
        answer:
          "For a straightforward grid-tied house, budget about $2.50 to $3.80 per watt installed, or roughly $12,500 to $19,000 for 5 kW, $20,000 to $30,500 for 8 kW, and $25,000 to $38,000 for 10 kW. Those bands exclude a battery, a main-panel upgrade, and roof reconstruction. They are planning ranges, not a quote.",
      },
      {
        question: "What is a typical payback period for solar panels in Calgary?",
        answer:
          "On an unshaded roof, a simple payback of about 9 to 16 years is a fair planning window at 1,100 to 1,300 kWh per kW per year and an electricity value of roughly 12 to 22 cents per kWh. Shade, a panel upgrade, financing interest, or a low export credit can push that longer. It is an estimate, not a guaranteed date when the power becomes free.",
      },
      {
        question: "Does Alberta have a solar rebate that lowers the Calgary price?",
        answer:
          "Do not count on a large standing provincial rebate. The reliable program is micro-generation: you use your own electricity and your retailer credits surplus you export, on terms that change. Federal and municipal programs open and close. A proposal should only subtract a program you can actually apply for.",
      },
      {
        question: "Is $0-down financing the same as a short payback?",
        answer:
          "No. $0 down means you pay over time. Interest adds cost. A monthly payment can be easier than paying cash, and it can be lower than a current bill, but that comparison is cash flow. Payback is still about production, the installed price, and the value of each kilowatt-hour.",
      },
      {
        question: "What should be included in an installed solar price?",
        answer:
          "Modules, racking, inverters, standard roof attachment, electrical tie-in when the existing panel can take it, the municipal electrical permit, interconnection paperwork, commissioning, and monitoring. A battery, a panel upgrade, and roof repairs should be separate lines.",
      },
      {
        question: "Do micro-generation credits pay the entire power bill?",
        answer:
          "No. Exported energy can be credited by your retailer, and self-consumed energy is energy you do not buy. Fixed charges and the retailer's export rate remain. A well-sized system can offset a large share of annual use. It does not automatically zero every line on an Alberta bill.",
      },
    ],
  },
  panels: {
    path: "/solar-panels-calgary",
    title: "Solar Panels Calgary | Hail-Ready Systems & a Free Roof Scan | net0",
    description:
      "Solar panels for Calgary homes: typical system size, Alberta sun output, hail considerations, and a free roof scan from net0. See if your roof qualifies.",
    eyebrow: "Solar panels Calgary",
    h1: "Solar Panels in Calgary: What Actually Works on Local Roofs",
    lede: "Calgary is a strong place for rooftop solar and a hard place to pretend every roof is the same. Sunshine hours are high, winters are cold, and hail is a real design input. This page is about residential solar panels in Calgary: the hardware, the output you can plan around, and the roof conditions that change the answer.",
    sections: [
      {
        id: "sun",
        heading: "Why Calgary roofs are worth measuring",
        paragraphs: [
          "Calgary is among the sunnier cities in Canada. Environment and Climate Change Canada's climate normals put bright sunshine at the airport at well over 2,300 hours in a typical year. That is a weather statistic, not a production guarantee. It does explain why a clear residential roof here can do useful work for a house, including in the shoulder seasons when the days are still long and the air is cool. Modules are more efficient when they are cold. Summer heat trims that efficiency a little, which is one reason a Calgary roof is not modelled like a desert array and not modelled like a coastal climate either.",
          "The number net0 plans with, before a site-specific scan, is about 1,100 to 1,300 kilowatt-hours per installed kilowatt per year for an unshaded southern Alberta roof. The midpoint, 1,200, is an estimate. Shade from a neighbour's spruce, a dormer, or a roof that faces mostly east and west will come in lower. The scan exists so the proposal uses your roof instead of the city average.",
          "Most of the houses we design for are in Calgary, with surrounding communities on the same production climate. If you are comparing companies, the [guide to Calgary solar companies](/calgary-solar-companies) is the checklist. If you are comparing dollars, start with [solar panel cost in Calgary](/solar-panel-cost-calgary).",
        ],
      },
      {
        id: "hardware",
        heading: "What a residential system is actually made of",
        paragraphs: [
          "A grid-tied house system is modules, something to hold them to the roof, something to turn DC into AC, and a way to see whether it is working. net0 specifies all-black high-efficiency modules, microinverters so each panel produces on its own, and monitoring you can actually open. A battery is a separate decision. It stores energy. It does not make the roof bigger.",
          "Module wattage moves every year. A modern residential module is often in the mid-400-watt class. The count of modules matters less than the kilowatts that fit on the unshaded roof and the kilowatt-hours your bill says you use. A pretty full roof that is badly shaded will lose to a smaller roof with a clear southern pitch.",
          "Microinverters cost more than a single string inverter and they earn that difference on roofs with more than one direction, or with shade that crosses during the day. If one module is covered, the others stay at work. String inverters are a reasonable design on a single clear face. The proposal should say which one you are getting and why, in a sentence a non-specialist can check.",
        ],
      },
      {
        id: "size",
        heading: "How big a Calgary house system usually is",
        paragraphs: [
          "A common detached home in Calgary lands around 7 to 10 kilowatts if the roof and the electrical panel allow it, and smaller if the bill is small or the roof is broken into little faces. Five kilowatts is a real system for a smaller load. Ten kilowatts is not a mansion-only size when the roof is simple and the use is high. Commercial roofs are a different conversation: more metal, different interconnection rules, and a load shape that may favour daytime production even more than a house does. net0's residential work is the core of this site. A business roof can still start with the same scan.",
          "Sizing to 100 percent of annual use is not always the right target. Export credits, roof limits, and the electrical panel all cap the sensible size. A system that covers a large share of the year, with a plan for the rest, is often a better buy than a system that is oversized for a credit rate nobody will put in writing.",
        ],
      },
      {
        id: "direction",
        heading: "South-facing roofs, east-west roofs, and shade",
        paragraphs: [
          "A clear south-facing pitch produces the most energy across the year. East and west pitches produce less in total and they spread that production into the morning and late afternoon, which can match a house that is empty at noon and busy at dinner. Many Calgary neighbourhoods are not laid out for a perfect south roof. A mixed roof is a normal residential solar project here, not a disqualification.",
          "Shade is the condition that quietly wrecks a paper estimate. A tree that shades the lower row for two hours in June is a measured loss, not a vibe. Satellite views get you close. A proper scan, and someone who will talk about the tree instead of cropping it out of the drawing, gets you a number you can plan with. If the only way to make the production target is to pretend the spruce is not there, the target is wrong.",
        ],
      },
      {
        id: "hail",
        heading: "Hail: rated for impact, not immune to a Calgary storm",
        paragraphs: [
          "The title people search for is hail-ready solar panels. The honest version is more specific. Most modules sold for roofs are tested to an IEC 61215 hail impact: a 25 millimetre ice ball at about 23 metres per second. That test is a floor, not a description of every storm that crosses the hail belt north and northeast of the city, or the storms that hit Calgary itself. Severe hail can crack glass. A higher published impact rating, a module the manufacturer will document, and a mounting layout that does not create its own stress are the practical responses.",
          "Insurance is part of the specification. Ask your insurer how rooftop solar is treated before you sign, and ask the installer what they have replaced after hail, in plain language. 'Hail-proof' is not a specification. A datasheet with an impact rating is. net0 will match the module to the roof and to what the manufacturer publishes. We will not tell you a residential array cannot be damaged.",
        ],
      },
      {
        id: "winter",
        heading: "Snow, short days, and what winter production looks like",
        paragraphs: [
          "Winter days are short. A dark, tilted module sheds snow better than a flat skylight, and production returns once the glass is clear. Some snow sits. Some winters bury a low-pitch roof for days. That loss is already inside a yearly 1,100 to 1,300 kWh per kW estimate for this climate. It is not a surprise that appears in December and voids the model. What does surprise people is how much of the year's energy arrives from March through September, and how useful a cold, bright April afternoon is.",
          "You do not need to climb a Calgary roof to sweep snow for the system to make sense. If a particular storm leaves a thick crust, the monitoring will show a flat day and the yearly total still carries it. The monitoring is also how you notice a module that did not come back after the snow left, which is a service question rather than a weather question.",
        ],
      },
      {
        id: "scan",
        heading: "What the free roof scan is for",
        paragraphs: [
          "The scan turns a city-wide production band into a layout on your house: which faces are worth using, how many modules fit without crowding the ridges and the setbacks the code wants, and whether the electrical panel is an obvious problem from the information you provide. It is the start of a design, not a contract. You should be able to read the production estimate and see the assumption, including the 1,100 to 1,300 kWh per kW band adjusted for your shade and direction.",
          "From there the path is a proposal, a permit, and an install. That sequence is written out in the [solar panel installation in Calgary](/solar-panel-installation-calgary) guide. If the only question left is money, the [cost guide](/solar-panel-cost-calgary) has the budgeting bands and the payback yardstick. Or run the estimate on the [homepage](/#calculator) and then ask for the scan. The calculator is labelled as an estimate on purpose.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much electricity will solar panels produce in Calgary?",
        answer:
          "An unshaded southern Alberta roof often produces about 1,100 to 1,300 kilowatt-hours per installed kilowatt per year. A planning midpoint is 1,200. Shade, roof direction, and snow move a specific house inside or below that band. The figure is an estimate until a roof scan replaces it.",
      },
      {
        question: "Do solar panels work in a Calgary winter?",
        answer:
          "Yes, at a lower daily output. Days are short, and snow cover pauses production until the glass is clear. Cold, bright weather is good for module efficiency. A yearly production estimate for this climate already includes a real winter rather than twelve copies of July.",
      },
      {
        question: "Are solar panels hail-proof in Calgary?",
        answer:
          "No. Modules are impact-tested, commonly to a 25 millimetre hailstone at a set speed, and some carry a higher published rating. Calgary hail can exceed that test. Choose a documented rating and talk to your insurer. Do not accept a claim that a residential roof is immune.",
      },
      {
        question: "Do I need a south-facing roof for solar panels in Calgary?",
        answer:
          "South-facing and clear is the highest annual yield. East, west, and mixed roofs are common in Calgary and can still be worth doing, especially when shade is low. The scan should show the yield of the faces you actually have, not a generic south-facing house.",
      },
      {
        question: "What size solar system do Calgary homes usually install?",
        answer:
          "Many detached homes land around 7 to 10 kilowatts when the roof and the electrical panel allow it. Smaller houses and smaller bills are often closer to 5 kilowatts. The right size is the one that fits the roof, the panel, and the bill, not a package size.",
      },
      {
        question: "Can I add a battery later?",
        answer:
          "Often yes, if the inverter and the electrical layout leave room for it. A battery stores energy and can back up selected circuits. It does not increase how much the roof produces. Price it on its own so the panels can be judged on their own payback.",
      },
    ],
  },
  installation: {
    path: "/solar-panel-installation-calgary",
    title: "Solar Panel Installation Calgary | Certified One-Day Install | net0",
    description:
      "net0 installs residential solar in Calgary — roof scan, custom design, certified installers, and monitoring. Book a free assessment.",
    eyebrow: "Solar panel installation Calgary",
    h1: "Solar Panel Installation in Calgary, Start to Finish",
    lede: "A Calgary solar installation is a design, a permit, a day or more on the roof, and an interconnection that has to be approved before the system may operate. The order matters. This is the sequence net0 uses for residential solar panel installation in Calgary, and the questions worth asking any installer before you book one.",
    sections: [
      {
        id: "sequence",
        heading: "The sequence, without the brochure version",
        paragraphs: [
          "There are four stretches of work, and only one of them is the day with the crew on the roof. First the roof is measured and the bill is read. Then an engineer-level layout balances production, the electrical panel, and how the array will look. Then the permit and the utility application go in, and the crew installs. Then the system is inspected, energized when it is allowed to be, and watched in monitoring. Skipping ahead to 'we can be there Thursday' before the design exists is how change orders start.",
          "net0's certified crew handles the roof work and the electrical tie-in that the design calls for. 'Certified' here means the people doing electrical work are qualified to do it and the permit is pulled in the contractor's name. Ask which tickets will actually be on site. A logo on a proposal is not a ticket.",
        ],
      },
      {
        id: "scan",
        heading: "Roof scan and a design you can read",
        paragraphs: [
          "The free roof scan is a model of your house: usable faces, shade, module count, and a production estimate. For Calgary we start from about 1,100 to 1,300 kilowatt-hours per kilowatt per year and then adjust for the roof in front of us. The estimate stays labelled as an estimate until the layout is final. You should see the kilowatts, the expected yearly kilowatt-hours, and what was left off the roof and why.",
          "The design also has to survive the electrical panel. If the panel is full, the design says so before install day. That is a better surprise in a proposal than when the crew is in the driveway. The same document should name the module, the inverter type, and whether a battery is in or out. Hardware details and the cost bands live in the [solar panels](/solar-panels-calgary) and [cost](/solar-panel-cost-calgary) guides.",
        ],
      },
      {
        id: "permits",
        heading: "Permits, interconnection, and micro-generation",
        paragraphs: [
          "In Calgary the usual path is a site-specific electrical design, an electrical permit through the City of Calgary, and an interconnection application with the wires owner. For most addresses inside the city that wires owner is ENMAX Power. Your electricity retailer is a separate company, even when the name on the bill looks similar, and the retailer is who credits exported energy. Outside the city, a different municipality may issue the permit, and FortisAlberta is the wires owner in much of the surrounding area. The proposal should name the authority for your address rather than assuming every postal code works the same way.",
          "Alberta's Micro-generation Regulation is the framework that lets a home generate for its own use and export the surplus. A typical house is well inside the small micro-generation category. The paperwork is not optional, and the system should not be turned on for regular operation until the inspection and the utility have said it may. net0 includes that paperwork in the install. You should still see the permit and the application, not a promise that 'the office handles it' with nothing to show.",
          "Timelines for permits and interconnection are measured in weeks more often than in days, and they are not something an installer fully controls. A crew can be ready before the approval is. The honest schedule is the one that includes that wait.",
        ],
      },
      {
        id: "install-day",
        heading: "What install day is like, and when it is not one day",
        paragraphs: [
          "On a straightforward asphalt or similar residential roof, with the electrical panel ready and the materials staged, the array itself often goes on in a single day. The crew mounts the racking, flashes the attachments, sets the modules, and lands the electrical work the design described. You can usually stay home. The power may be off for a short window while the tie-in is made. Pets and a clear driveway matter more than anything else you can do to help.",
          "It is not a one-day project when the panel has to be upgraded, the roof needs repair first, the run to a detached garage is long, or the weather shuts the roof down. Calgary wind is a real stop-work condition. A company that promised a single day for every house is describing the easy version. net0 will tell you which version your house is before you are asked to book.",
          "Hail and snow change scheduling, not the laws of physics. Modules are impact-rated, as the [panels guide](/solar-panels-calgary) explains, and they are not hail-proof. Installers who work here plan around storm season instead of pretending it is a southern market with different weather.",
        ],
      },
      {
        id: "timeline",
        heading: "A realistic timeline from first call to permission to operate",
        paragraphs: [
          "A scan and a proposal can be turned around quickly, often inside a couple of weeks of usable photos, a bill, and a conversation. Permit and interconnection review sit on top of that and vary with the city and the utility. Install day is then scheduled against weather and crew load. Inspection follows the install. Only then is the system cleared to operate. If someone quotes a start-to-finish calendar that ignores the utility, ask them which step they skipped.",
          "You are not passive in this. The retailer may need a signed micro-generation form. The inspector may need access. Selling the house mid-process is a conversation to have early, because the interconnection is tied to the service at the address. None of that is exotic. It is the ordinary administration of putting generation on a Calgary house.",
        ],
      },
      {
        id: "crew",
        heading: "What to ask the installers before you hire them",
        paragraphs: [
          "Solar installers in Calgary are not interchangeable, even when the module brand is. Ask who designs the system, who is on the roof, and who pulls the permit. Ask whether the crew is employed by the company or subcontracted for the day, and who you call if a flashing leaks in month fourteen. Ask for the workmanship warranty in writing, separate from the manufacturer's product warranty. A 25-year module warranty does not, by itself, cover installation labour.",
          "Ask for a local reference you can actually speak to, and treat a wall of anonymous stars as marketing. The [Calgary solar companies](/calgary-solar-companies) page is a longer version of this list, written so you can use it on net0 or on anyone else. We would rather you compare scope than collect a ranking badge.",
        ],
      },
      {
        id: "after",
        heading: "After the system is allowed to run",
        paragraphs: [
          "Monitoring is how you know the array is doing what the proposal said, season by season. A flat line on a sunny afternoon is a service call, not a mystery. Production will not match the estimate every month. It should be in the neighbourhood across a year, once shade and snow are allowed to be real. If it is not, you should have a company that will open the monitoring with you.",
          "Keep the proposal, the permit, the module datasheet, and the interconnection approval with the house papers. The next owner, and your insurer, will ask. If you add a battery later, the original electrical design is what makes that a clean project instead of a redo.",
          "The next step is still the roof, not a generic package. Use the [homepage scan](/) and have a bill nearby. If you want the dollars before the site visit, the [cost page](/solar-panel-cost-calgary) is the budgeting tool, with the same production band and the same warning that it is not a quote.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does solar panel installation take in Calgary?",
        answer:
          "The array on a straightforward residential roof is often installed in one day once materials and the electrical panel are ready. Permit review, interconnection, and inspection add weeks around that day. A panel upgrade, roof repair, or bad weather makes the roof work longer than a day. The proposal should say which case you are.",
      },
      {
        question: "Who pulls the electrical permit for a Calgary solar install?",
        answer:
          "The contractor should pull the City of Calgary electrical permit in their own name, and you should see it. Outside the city, the municipality changes. Do not accept a design that assumes you will pull the permit yourself unless that was an explicit, priced choice.",
      },
      {
        question: "What is the interconnection step?",
        answer:
          "It is the application to the wires owner, ENMAX Power for most of Calgary, that lets the system connect and export. Your electricity retailer separately credits surplus under Alberta's micro-generation rules. The system should not operate normally until inspection and interconnection say it can.",
      },
      {
        question: "Can I stay in the house during the install?",
        answer:
          "Yes, on a typical residential day. Expect noise, a crew that needs the driveway and the electrical room, and a short power interruption while the tie-in is made. Clear access matters more than leaving the house.",
      },
      {
        question: "Do solar installers in Calgary also service the system later?",
        answer:
          "They should, and you should ask who actually answers. Monitoring is what flags a module or inverter that has stopped. Workmanship issues such as flashing are the installer's warranty, which is different from the manufacturer's product warranty. Get both in writing.",
      },
      {
        question: "Is every Calgary solar installation finished in one day?",
        answer:
          "No. One day is realistic for many straightforward roofs and unrealistic when the electrical service, the roof structure, or the weather says otherwise. A company that guarantees one day for every house is describing the easy project.",
      },
    ],
  },
  companies: {
    path: "/calgary-solar-companies",
    title: "Calgary Solar Companies | How to Compare Installers | net0",
    description:
      "Looking for Calgary solar companies? Compare workmanship, warranties, and local experience — and see how net0 approaches a Calgary install.",
    eyebrow: "Calgary solar companies",
    h1: "Calgary Solar Companies: How to Choose an Installer You Can Trust",
    lede: "Searching for solar companies in Calgary turns up a crowd: local crews, out-of-province sales teams, and lead sites that are not installers at all. A trustworthy company is one you can check, not one that bought a 'best of' badge. This page is a way to compare them, including net0, on the work rather than on a ranking.",
    sections: [
      {
        id: "hiring",
        heading: "What you are actually hiring",
        paragraphs: [
          "A solar company is not a panel brand. You are hiring a design, a permit, a crew, an interconnection, and someone who will still answer the phone when a year's production does not match the proposal. The modules might be the same on two quotes. The flashing details, the electrical judgement, and the service after hail or a failed inverter will not be.",
          "Split the market in your head before you split it by price. Some Calgary solar companies design and install with their own people. Some sell the job and subcontract the roof. Some are marketing sites that sell your contact details onward. All three can look like 'a solar company in Calgary' in a search result. The contract shows which one you are talking to, if you read who is obliged to do the work.",
        ],
      },
      {
        id: "questions",
        heading: "Questions that separate a careful installer from a smooth pitch",
        paragraphs: [
          "Ask who draws the layout and whether they will show you the production assumption. For an unshaded Calgary-area roof, a figure outside roughly 1,100 to 1,300 kilowatt-hours per kilowatt per year needs an explanation. A higher number is not a gift. It is either a better roof than average or a model that left the shade out. The estimate should be labelled as an estimate.",
          "Ask who pulls the City of Calgary electrical permit, or the permit in the municipality where the house actually sits. Ask who files the interconnection with the wires owner. Ask which people will be on the roof and which electrical qualification they hold. Ask whether those people are employees or a crew hired for the day. Write the answers into the notes you keep with the quote. A company that will not answer in writing is telling you how the service call will go.",
          "Ask for the workmanship warranty as a separate sentence from the module warranty. Twenty-five years on a panel is a manufacturer document. It does not patch a leak at year three. Ask what is excluded: roofing that was already tired, critter damage, hail beyond the module's published impact rating. The [installation guide](/solar-panel-installation-calgary) walks through the same milestones from the job's point of view.",
        ],
        bullets: [
          "Who designs the system, and will they show the shade and the production assumption?",
          "Who pulls the electrical permit, in whose name?",
          "Who files interconnection, and with which wires owner?",
          "Who is on the roof, and are they employees or subcontractors?",
          "What does the workmanship warranty cover, for how long, and who honours it?",
          "What does monitoring include, and who calls you if production drops?",
          "What is excluded: panel upgrade, roof repair, battery, hail beyond the datasheet?",
        ],
      },
      {
        id: "reviews",
        heading: "Reviews, awards, and the search for the 'best' company",
        paragraphs: [
          "People search for the best solar companies in Calgary because the quotes are hard to compare. A badge that says number one, or a paid 'best of the city' listing, does not survive contact with a roof. Use reviews as a pattern, not as a trophy. Look for comments that mention the crew, the cleanup, the inspection, and what happened when something went wrong. A page of identical praise and no mention of permits is thin evidence.",
          "net0 does not publish a ranking and does not claim to be the top installer in the city. We also do not invent customer quotes to fill a homepage. If we do not have a review we can stand behind, it does not go on the site. Ask us for recent Calgary homeowners you can talk to, and ask the other companies for the same. A reference who will take a call is worth more than a star average with no names.",
          "Be careful with directory sites that list every solar company in Calgary and then offer to 'match' you. You may be the product. Get the legal name of the installer, a civic address, and a phone that a person answers. Those three are the start of a real comparison.",
        ],
      },
      {
        id: "price",
        heading: "Price is the last filter, not the first",
        paragraphs: [
          "A low quote that leaves out the permit, the electrical upgrade, or half the roof attachments is not a low price. Put the quotes on the same kilowatts and the same included work before you rank them. The budgeting bands on the [solar panel cost in Calgary](/solar-panel-cost-calgary) page are there so a number that is wildly under the band prompts a question, not a celebration. Wildly over the band should prompt a question too. Complex roofs and panel upgrades are allowed to cost more. They are not allowed to be invisible.",
          "Financing changes the cash you need this month. It does not make two different scopes into the same deal. Compare the total paid, including interest, and compare the equipment lists. A $0-down offer from net0 is a way to pay for a defined system. It is not a reason to skip the equipment page.",
        ],
      },
      {
        id: "crew",
        heading: "In-house crews and subcontracted install days",
        paragraphs: [
          "Subcontracting is not automatically a bad sign. Electrical and roofing specialties get hired for a reason. The bad sign is a seller who cannot tell you the name of the company that will be on the roof, or who warranties the penetrations. If the sales company and the installer are different legal entities, you need to know which one owes you the repair. 'We use certified installers' is the beginning of an answer. The next sentence should be their names and their relationship to the warranty.",
          "Local experience is specific. A crew that has flashed roofs through a Calgary hail season, dealt with ENMAX interconnection, and come back after a chinook crust of snow left a module offline will sound different from a crew reading a national script. You are allowed to ask what they have had to fix. The answer is part of the qualification.",
        ],
      },
      {
        id: "net0",
        heading: "How net0 approaches a Calgary install",
        paragraphs: [
          "net0 is a residential solar company working in Calgary and surrounding communities. The public site, the phone, and the mailbox below are the same ones we ask you to use. The work starts with a free roof scan and a proposal that states the production assumption, the equipment, and the price for that roof. Many straightforward houses are installed in a day once the permit path is clear. Houses that need a panel upgrade or roof work are scheduled for what they actually are.",
          "We specify the system around the bill and the roof, including microinverters where the faces or the shade call for them, and monitoring so the year can be compared with the estimate. $0-down financing is available. The proposal shows the payment. Alberta micro-generation credits are explained as credits, not as a wiped-out bill, and we do not subtract a rebate that is closed.",
          "That is a description of a process, not a claim that every other solar company in Calgary is worse. Use the questions on this page on us. If the answers are clearer somewhere else, hire them. The hardware and the climate are discussed in [solar panels in Calgary](/solar-panels-calgary). The steps and the paperwork are in the [installation guide](/solar-panel-installation-calgary).",
        ],
      },
      {
        id: "red-flags",
        heading: "Red flags that do not require you to be an expert",
        paragraphs: [
          "Pressure to sign on the first visit, before a layout exists, is a sales tactic. A quote with no civic address and a phone that never reaches a person is a lead funnel. A production estimate with no shade study and a round number that only works if the roof faces due south is a model, not a design. A warranty that is '25 years on everything' but will not say who replaces labour is a sentence, not a warranty. A price that dropped the moment you hesitated, with no change in equipment, was not a price.",
          "None of those flags require you to disparage a named competitor. They show up across the industry, including in markets that are not Calgary. Walk away from the pattern. You are buying a 25-year object that is bolted to the house.",
        ],
      },
      {
        id: "contact",
        heading: "Talk to net0 directly",
        paragraphs: [
          "The contact details here are the ones to use. There is no second brand name and no separate sales number on this site. Call, email, or start with the roof scan if you would rather see the house on paper first. If you are gathering quotes, bring this page's question list with you. It works on our proposal and on the others.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I compare solar companies in Calgary?",
        answer:
          "Compare design assumptions, who pulls the permit, who is on the roof, the workmanship warranty, and the included scope at the same system size. Use reviews as a pattern of how problems were handled. Ignore number-one badges that are not tied to a checkable job.",
      },
      {
        question: "Should I hire the cheapest solar quote?",
        answer:
          "Only after the scopes match. A low price that excludes the permit, a panel upgrade, or part of the roof work is not the cheapest finished job. Line up kilowatts, equipment, and included labour before you rank the dollars.",
      },
      {
        question: "What warranties should a Calgary solar installer put in writing?",
        answer:
          "Two. The manufacturer warranty on the modules and inverters, and a workmanship warranty from the installer covering the installation, including roof attachments. A long product warranty does not cover labour or leaks. Ask who you call and what is excluded, including severe hail.",
      },
      {
        question: "Does a 'best solar company' award mean the installer is better?",
        answer:
          "Not by itself. Many of those lists are paid or unverified. Look for permits pulled in the company's name, a real Calgary address, and references who will talk about a finished install. net0 does not claim to be the best or the number-one installer in the city.",
      },
      {
        question: "What should be in the contract?",
        answer:
          "System size, equipment models, the production assumption, the price and what it excludes, the permit and interconnection responsibilities, the timeline with utility waits included, the workmanship warranty, and the financing terms if you are not paying cash. Verbal extras do not count.",
      },
      {
        question: "How do I contact net0?",
        answer:
          "Call (403) 917-2240, email info@gonet0.ca, or visit 4121 23b St NE Unit 4121, Calgary, AB T2E 7V9, Canada. Hours are Monday to Friday, 08:00 to 18:00 Mountain Time. You can also start with the free roof scan on gonet0.ca.",
      },
    ],
  },
} as const satisfies Record<string, GuidePageData>;

export type GuideKey = keyof typeof guides;

export function otherGuides(path: AppPath) {
  return guideList().filter((guide) => guide.path !== path);
}

export function guideList(): GuidePageData[] {
  return [guides.cost, guides.panels, guides.installation, guides.companies];
}
