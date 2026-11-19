import type { GuidePageData } from "./guides";

const quoteCta = {
  title: "Ask for a quote on this house",
  body: "This page will not invent a price. The request is the same free quote as the solar scan: your Calgary address, the add-on you want, and a call back from net0. A rebate is included only if a program is actually open when that quote is written.",
  label: "Request a free quote",
};

export const addons = {
  windows: {
    path: "/window-replacement-calgary",
    title: "Window Replacement in Calgary | Energy-Efficient Windows | net0",
    description:
      "Window replacement in Calgary from net0. Energy-efficient windows that cut heat loss, quoted on the same contract as solar. Free quote. No rebate assumed.",
    eyebrow: "Window replacement Calgary",
    h1: "Window Replacement in Calgary",
    serviceType: "Window replacement",
    lede: "Replacement windows are a building job, not a glass-cleaning visit. net0 quotes them as their own scope and, when you want it, on the same contract as rooftop solar. Better windows do not generate electricity. They reduce how much heat the house loses, so the solar system is covering a smaller load.",
    cta: quoteCta,
    related: [
      "/solar-panels-calgary",
      "/solar-panel-cost-calgary",
      "/spray-foam-insulation-calgary",
      "/heat-pump-calgary",
    ],
    sections: [
      {
        id: "what",
        heading: "What a Calgary window replacement actually includes",
        paragraphs: [
          "A replacement removes the old sash and frame and sets a new unit in the opening, then seals and trims it. A sash-only repair, a pane swap, or new interior trim is a different job and should not be priced as a full replacement. The quote should say which openings are in, which are out, and whether the exterior finish is being patched or replaced.",
          "Calgary’s freeze-thaw cycle, chinooks, and wind-driven rain are the conditions the install has to survive. A unit that looks fine in a showroom still has to be flashed and sealed on a real wall. Ask who does that sealing, and who comes back if the opening leaks. The manufacturer’s glass warranty and the installer’s workmanship warranty are two different documents.",
          "People also search for window installation in Calgary and for Calgary window replacement. On this page those phrases mean the same planned project: new windows, measured and installed, not an emergency board-up. Doors are a separate scope. If a door is on the quote, it should be its own line.",
        ],
      },
      {
        id: "envelope",
        heading: "How windows change the load solar has to cover",
        paragraphs: [
          "Solar makes electricity. Windows decide how fast the house loses heat in January and how fast it gains heat in July. A tighter, better-glazed opening does not add kilowatt-hours to the roof. It can shrink the heating and cooling the house asks for, which is the load a solar system, a heat pump, or both are then trying to offset.",
          "That is the cross-sell, stated plainly. [Solar panels in Calgary](/solar-panels-calgary) are sized to the bill you have. If the windows are the reason a room is cold, replacing them and then sizing the array to the old leaky bill can overbuild the roof. The useful order is to look at the envelope and the roof in one conversation, then price them as separate lines on one contract so you can accept either.",
          "net0 will not promise a percentage off your gas bill from windows alone. The drop depends on how bad the old units are, how many openings you change, and what the rest of the house is doing. [Attic spray foam](/spray-foam-insulation-calgary) is the other half of that envelope conversation. A [heat pump](/heat-pump-calgary) is what you consider once the house is no longer losing heat through every frame.",
        ],
      },
      {
        id: "compare",
        heading: "What to compare before you sign",
        paragraphs: [
          "Compare quotes on the same openings, the same frame material, and the same glass package. A low number that leaves out exterior capping, disposal, or a failed opening is not a low price. Ask for the U-factor and solar heat gain the manufacturer publishes for the exact unit, and treat those as the manufacturer’s ratings, not as a prediction of your utility bill.",
          "Ask who measures, who installs, and who warranties the installation. A sales visit that will not write those names down is a weak quote, whatever the brand on the sticker. net0 does not rank other window companies and does not claim to be the top installer in Calgary. The [guide to choosing a solar company](/calgary-solar-companies) is the same habit applied to any contractor: scope, permit if one is required, and a person who answers later.",
        ],
        bullets: [
          "Which openings are included, and which are refused because the frame is rotten or the size is unusual.",
          "Frame and glass, named, not described only as “energy efficient.”",
          "Who installs, and whether the workmanship warranty is in writing.",
          "What the exterior will look like when the old brickmould or siding is disturbed.",
          "A price with no rebate subtracted unless you can apply for that rebate now.",
        ],
      },
      {
        id: "timing",
        heading: "When Calgary homeowners usually plan this work",
        paragraphs: [
          "Window searches in this city tend to rise in late winter and early spring, when people are tired of drafts and want the work done before summer. That is a planning pattern, not a deadline net0 invented. Ordering custom sizes takes time. A quote signed in a rush in March is how measurement mistakes happen.",
          "If you are already booking a roof scan, ask for the windows to be looked at on the same visit. One contract can hold both scopes. You can still decline the windows after you see the line. The solar proposal should still stand on its own, which is what the [cost guide](/solar-panel-cost-calgary) is for.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does net0 replace windows in Calgary, or only solar?",
        answer:
          "Both can be on one contract. Window replacement is quoted as its own scope. You can take the windows, the solar, or both. The solar page still describes the roof. This page describes the openings.",
      },
      {
        question: "Will new windows cut my power bill by a set amount?",
        answer:
          "No set amount is honest. New windows can cut heat loss and summer heat gain. How much depends on the old units, how many you replace, and the rest of the house. The quote will not invent a percentage.",
      },
      {
        question: "Is there a government rebate for window replacement in Calgary?",
        answer:
          "Do not assume one. Programs open and close. net0 will only show a rebate you can actually apply for when the quote is written. A closed program is not a discount.",
      },
      {
        question: "How is window installation different from window replacement?",
        answer:
          "On a finished Calgary house they are usually the same job: take the old unit out and set a new one. A new opening in a new wall is a different project. The quote should say which one you are buying.",
      },
      {
        question: "Do you publish window prices on this page?",
        answer:
          "No. Openings, glass, and exterior repairs move the number too much for a posted price to be useful. Ask for a quote on your address.",
      },
    ],
  },
  lights: {
    path: "/permanent-christmas-lights-calgary",
    title: "Permanent Christmas Lights in Calgary | net0",
    description:
      "Permanent Christmas lights in Calgary from net0, plus seasonal holiday light installation. A small electric load you can bundle with a solar visit. Free quote.",
    eyebrow: "Permanent Christmas lights",
    h1: "Permanent Christmas Lights in Calgary",
    serviceType: "Permanent Christmas light installation",
    lede: "Permanent Christmas lights stay on the roofline all year and change colour from an app. net0 quotes that install, and a seasonal hang of traditional holiday lights, as add-ons. They are not a solar system. They are a small electric load and a job that fits on the same visit as a roof conversation.",
    cta: quoteCta,
    related: [
      "/solar-panels-calgary",
      "/solar-panel-installation-calgary",
      "/window-replacement-calgary",
    ],
    sections: [
      {
        id: "permanent",
        heading: "What permanent lights are, and what they are not",
        paragraphs: [
          "A permanent system is a track or a series of nodes fixed to the fascia, soffit, or rake, with LEDs you leave up through summer. You change the pattern for Christmas, Canada Day, or a Tuesday. You are not on a ladder in November unless something failed. That is the product people mean by permanent Christmas lights in Calgary.",
          "It is not a brand. Systems in this category are sold under several names, including styles people call Gemstone or Trimlight. net0 is not those brands. A quote from us should name the product we are actually proposing, the colour range, and who services a dead section. If the only name on the proposal is a trademark we do not sell, ask for the real product.",
          "The electrical load is small next to a furnace, an air conditioner, or a heat pump. Do not buy permanent lights because you think they will “use up” a solar array. Buy them because you want the lights. The honest solar link is simpler: the roof is already producing, the lights are a modest extra draw, and both can be talked through on one appointment instead of two companies and two ladders.",
        ],
      },
      {
        id: "holiday",
        heading: "Christmas and holiday light installation",
        paragraphs: [
          "Some houses want the permanent track. Some want a seasonal hang: lights up for the holidays, lights down after. Christmas light installation and holiday lighting installation are that second job. net0 can quote it. It is labour-heavy, it is seasonal, and it is not the same product as a track that stays up.",
          "Calgary’s holiday-light searches bunch in the fall. If you want a crew before the rush, ask earlier than the week the snow stays. That is scheduling, not a scare tactic. A permanent system can be installed outside that peak because it is not only a December product. A seasonal hang cannot.",
          "Say which you want when you request the quote. A price for a permanent track and a price for a one-season hang should not be blended into one number you cannot unpack.",
        ],
      },
      {
        id: "scope",
        heading: "What the quote should list",
        paragraphs: [
          "Linear footage, where the track sits, how it meets a metal roof or a fragile fascia, and where the power supply lands. A solar array, a vent, and a light track can all want the same edge of the roof. The layout should show they are not fighting. The [installation guide](/solar-panel-installation-calgary) is how the solar side of that roof is sequenced. The lights should be drawn onto the same roof, not assumed to fit after the modules are on.",
          "Ask about repairs. A node that dies in January is a service call, not a new sale. Ask who climbs, and whether the workmanship on the fasteners is separate from the manufacturer’s product warranty. Hail and wind are Calgary problems for anything attached to a roofline. Nobody should tell you a plastic track is storm-proof.",
        ],
        bullets: [
          "Permanent track or a seasonal hang, named as one or the other.",
          "Footage and the runs that are included.",
          "Power supply location and who connects it.",
          "How the layout shares the roof with solar, if solar is on the same contract.",
          "Who you call when a section goes dark.",
        ],
      },
      {
        id: "bundle",
        heading: "Why this sits on a solar contract",
        paragraphs: [
          "The electricity argument is the weak one, and it should stay weak. Roofline LEDs will not change your payback spreadsheet in a way you can feel. The practical argument is the visit. A fall appointment that is already measuring the roof can price permanent lights without a second sales process. You can say no.",
          "If the only thing you want is lights, you can still ask. You do not have to buy panels to get a lighting quote. If you want both, they should be separate lines so the [solar cost](/solar-panel-cost-calgary) is still readable. net0 will not fold a light package into the solar price and call the solar cheaper.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are permanent Christmas lights the same as Gemstone lights?",
        answer:
          "Gemstone is a brand. Permanent LED roofline lights are the category, and several brands sell them. net0 is not Gemstone. The quote will name the product being installed.",
      },
      {
        question: "Do you also hang seasonal Christmas lights in Calgary?",
        answer:
          "Yes, as a separate scope from a permanent track. Tell us which one you want. A seasonal hang is timed for the holidays. A permanent system can be scheduled outside that rush.",
      },
      {
        question: "Will the lights run off my solar panels?",
        answer:
          "They draw a small amount of electricity. Solar can cover that draw along with the rest of the house, but the lights are not a reason to buy solar, and solar is not required to buy the lights.",
      },
      {
        question: "How much do permanent Christmas lights cost in Calgary?",
        answer:
          "This page does not post a price. Footage, roof edge, and product choice move it. Ask for a quote on your house.",
      },
      {
        question: "Can the lights and the solar array share the roof?",
        answer:
          "Often yes, if they are designed together. Tracks, vents, and modules all want the edge and the face. The layout should show the conflict before anyone drills.",
      },
    ],
  },
  heatPump: {
    path: "/heat-pump-calgary",
    title: "Heat Pump Installation in Calgary | Cold-Climate Heat Pumps | net0",
    description:
      "Heat pump installation in Calgary from net0. Cold-climate heating and cooling, with honest winter solar math. Free quote. No rebate is assumed.",
    eyebrow: "Heat pump Calgary",
    h1: "Heat Pump Installation in Calgary",
    serviceType: "Heat pump installation",
    lede: "A cold-climate heat pump heats and cools with electricity. In Calgary that can move a large share of the heating load off the furnace. Solar can offset the new electric use. It will not offset all of it in January, and this page will not pretend otherwise.",
    cta: quoteCta,
    related: [
      "/solar-panels-calgary",
      "/solar-panel-cost-calgary",
      "/air-conditioning-calgary",
      "/spray-foam-insulation-calgary",
      "/window-replacement-calgary",
    ],
    sections: [
      {
        id: "what",
        heading: "What you are buying when you ask for a heat pump",
        paragraphs: [
          "A heat pump moves heat. In heating mode it pulls heat from outdoor air and puts it inside. In cooling mode it runs as an air conditioner. A cold-climate unit is built to keep working at temperatures where an older heat pump would have given up and left the furnace to do everything. “Cold climate” is a design claim you should see on the manufacturer’s sheet for the model being quoted, not a slogan on a truck.",
          "Calgary winters are the test. There will be hours when the heat pump is at its least efficient and the house still needs heat. A quote that shows only a mild-day output is incomplete. Ask what happens at the design temperature, what the backup heat is, and whether that backup is electric strips, the existing furnace, or both. Dual fuel — heat pump most of the time, furnace on the coldest stretches — is a normal Calgary answer. It is not a failure of the machine.",
          "People search for heat pump installation, heat pump Calgary, cold climate heat pump Calgary, and heat pump cost Calgary. The first is the job. The cost is not a number this page will invent. House size, ductwork, electrical panel, and whether the furnace stays all move it.",
        ],
      },
      {
        id: "solar",
        heading: "Solar covers part of the new electric load, not the coldest week",
        paragraphs: [
          "This is the strongest reason to talk about a heat pump and solar together, and it has a limit. An unshaded Calgary roof produces more in the bright months than in December and January. Heating demand does the opposite. A yearly solar total can offset a yearly heat-pump total and still leave you buying power on the coldest weeks, when the roof is doing less and the heat pump is working harder.",
          "A battery shifts some midday production into the evening. It does not store July for use in January. The proposal should show a year, and it should say what it assumed for winter production. The planning band we use for solar is about 1,100 to 1,300 kilowatt-hours per kilowatt per year before shade, which is explained on the [solar panels](/solar-panels-calgary) page. That band is an estimate. It is not a winter guarantee.",
          "If the envelope is leaky, the heat pump is sized to the leak. [Windows](/window-replacement-calgary) and [attic spray foam](/spray-foam-insulation-calgary) are how you shrink that load before you buy a bigger machine. They are optional lines, not a requirement to get a heat-pump quote.",
        ],
      },
      {
        id: "cooling",
        heading: "Cooling, and when a separate air conditioner is the ask",
        paragraphs: [
          "A heat pump already cools. If you want cooling and you are replacing heating equipment anyway, one outdoor unit can do both jobs. If you want cooling only and you are happy with the furnace, an [air conditioning installation](/air-conditioning-calgary) may be the smaller project. Say which problem you are solving. net0 will not sell a heat pump to someone who asked for a simple air conditioner without saying they are different machines.",
          "Neither page is an emergency repair desk. A heat pump that is already installed and has failed needs a service call. This page is for a planned installation.",
        ],
      },
      {
        id: "quote",
        heading: "Rebates, electrical work, and the quote",
        paragraphs: [
          "Do not count a rebate as part of the price. Heat-pump programs in Canada have opened, paused, and changed their rules. net0 will only apply one you can submit when the quote is written. A brochure from last year is not savings.",
          "The electrical panel matters. A heat pump, a solar inverter, an air conditioner, and a charger can all want space the panel does not have. If a panel upgrade is required, it is its own line. The [solar cost guide](/solar-panel-cost-calgary) treats panel upgrades the same way. Hiding that cost inside “the heat pump” makes both numbers useless.",
          "The quote should name the outdoor and indoor equipment, the backup heat, what happens to the old furnace and air conditioner, who pulls the electrical and gas permits if gas work is involved, and who commissions the system. A price without those sentences is not ready to sign.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will a heat pump heat a Calgary house in January?",
        answer:
          "A cold-climate unit is designed to keep heating in low temperatures. On the coldest stretches many houses still use backup heat, often the existing furnace. The quote should say which arrangement is being proposed.",
      },
      {
        question: "Does solar run a heat pump through the winter?",
        answer:
          "Over a year, solar can offset a large share of the extra electricity. In mid-winter the roof produces less, just when heating use is highest. A battery does not carry summer production into January. The proposal should show that, not hide it.",
      },
      {
        question: "How much does heat pump installation cost in Calgary?",
        answer:
          "This page does not post a price. Equipment, ductwork, backup heat, and the electrical panel change the number. Ask for a quote.",
      },
      {
        question: "Is there a heat pump rebate I should subtract?",
        answer:
          "Only if you can apply for it when the quote is written. net0 will not subtract a program that is closed or that you do not qualify for.",
      },
      {
        question: "Should I get a heat pump or just air conditioning?",
        answer:
          "If you only want cooling and the furnace stays, air conditioning may be the right scope. If you want to move heating onto electricity as well, that is a heat pump. They are quoted as different jobs.",
      },
    ],
  },
  ac: {
    path: "/air-conditioning-calgary",
    title: "Air Conditioning Installation in Calgary | net0",
    description:
      "Air conditioning installation in Calgary from net0. A planned cooling system, not an emergency repair line, quoted alongside rooftop solar. Free quote.",
    eyebrow: "Air conditioning Calgary",
    h1: "Air Conditioning Installation in Calgary",
    serviceType: "Air conditioning installation",
    lede: "This page is for a planned air conditioning installation in Calgary. It is not a same-day repair line for a unit that died this afternoon. Cooling is a summer electric load. Rooftop solar produces the most in those same months, which is the reason the two belong in one conversation.",
    cta: quoteCta,
    related: ["/solar-panels-calgary", "/heat-pump-calgary", "/solar-panel-cost-calgary"],
    sections: [
      {
        id: "install",
        heading: "Installation, not an emergency repair",
        paragraphs: [
          "Air conditioning Calgary searches mix two intents. One person wants a new system before July. Another wants a technician today because the house is hot. net0’s add-on is the first job: equipment chosen, ducts or heads planned, electrical checked, and a date that is not “this afternoon.” If your existing air conditioner has failed and you need a repair, say that when you call so we do not book you into a replacement quote you did not ask for.",
          "Air conditioner installation and AC installation mean the same planned work here. Central systems use the furnace ducts. A ductless head serves a room that the ducts never reached. They are different installs. The quote should say which one, how many tons or how many heads, and what happens to the old equipment. A number with none of that is not comparable to another company’s number.",
        ],
      },
      {
        id: "solar",
        heading: "Summer solar and summer cooling line up",
        paragraphs: [
          "Calgary’s brightest, longest days are also when cooling runs. A solar array produces more in those months than it does in December. Using solar to cover a cooling load is a better match than using it to cover mid-winter heating. That is the package: an air conditioner sized to the house, and a roof that is actually producing while the compressor runs.",
          "It is still not a promise that the power bill goes to zero in July. Production depends on roof direction, shade, and system size. The house still imports power at night unless you add storage. The estimate on the [solar panels page](/solar-panels-calgary) is the place those limits are written down. An air conditioner does not change the physics. It adds a load the roof can be aimed at.",
          "If you also want to change how the house is heated, look at a [heat pump](/heat-pump-calgary) before you buy a cooling-only machine. A heat pump cools and heats. Buying both without meaning to is how people pay twice.",
        ],
      },
      {
        id: "house",
        heading: "What the house has to be ready for",
        paragraphs: [
          "Ducts that were sized for a furnace are not automatically right for air conditioning. Low airflow, a hot attic, and windows that turn a room into a greenhouse will make a correctly sized machine look too small. [Window replacement](/window-replacement-calgary) and attic insulation are envelope work. They are worth mentioning during the cooling quote even if you decline them. We will not require them to sell you an air conditioner.",
          "The electrical panel needs a free slot and the capacity for the condenser. Solar may want that capacity too. If a panel upgrade is required, it is priced alone, the same way the [solar cost page](/solar-panel-cost-calgary) treats it. Permits for the electrical work should be pulled in the contractor’s name. You should see that, not hear it.",
        ],
      },
      {
        id: "when",
        heading: "When people in Calgary look for this",
        paragraphs: [
          "Cooling searches climb into summer and drop off in late fall. If you want the system in before the hot weeks, the design has to start earlier than the week you first feel it. Equipment lead times are real. net0 will not promise a July install to someone who calls in a heat wave unless the schedule actually has the room.",
          "A rebate is not part of the advertised price. If a cooling or heat-pump program is open for your house when we write the quote, it will be named. If it is not open, it will not be used to make the number look smaller.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you repair air conditioners in Calgary?",
        answer:
          "This offer is a planned installation. If you need a broken unit diagnosed today, say so when you contact net0 so we do not treat it as a replacement quote.",
      },
      {
        question: "Can solar run my air conditioning?",
        answer:
          "Solar production and cooling demand both peak in the bright months, so they pair better than solar and mid-winter heat. The roof still will not cover every hour, especially after sunset, unless you have storage. The proposal should show the assumption.",
      },
      {
        question: "How much does air conditioner installation cost in Calgary?",
        answer:
          "We do not post a price. Tonnage, ducts, line set, and the electrical panel change it. Ask for a quote on the house.",
      },
      {
        question: "Should I buy a heat pump instead?",
        answer:
          "If you want cooling only, an air conditioner is the direct scope. If you want electric heating as well, a heat pump does both. They should be quoted as different options, not blended.",
      },
      {
        question: "Is a rebate included?",
        answer:
          "No rebate is assumed. One is applied only when you can actually submit it at the time of the quote.",
      },
    ],
  },
  water: {
    path: "/whole-house-water-filter-calgary",
    title: "Whole-House Water Filter Installation in Calgary | net0",
    description:
      "Whole-house water filter installation in Calgary from net0. A home-comfort add-on on a solar contract, not an energy product. Free quote.",
    eyebrow: "Whole-house water filter",
    h1: "Whole-House Water Filtration in Calgary",
    serviceType: "Whole-house water filter installation",
    lede: "A whole-house water filter treats water where it enters the home, so every tap sees it. net0 quotes that install as a contract add-on. It is not an energy upgrade. Filtration will not meaningfully cut the power bill, and this page will not say that it does.",
    cta: quoteCta,
    related: ["/solar-panels-calgary", "/heat-pump-calgary", "/window-replacement-calgary"],
    sections: [
      {
        id: "whole-house",
        heading: "Whole-house filtration, not a pitcher",
        paragraphs: [
          "A pitcher, a fridge filter, or a single tap filter treats the water at one point. A whole-house system, sometimes called whole-home water filtration, sits on the main line after the meter. Showers, laundry, and every faucet are on the filtered side if the plumbing is done that way. Those are different products. A page about a cartridge under the kitchen sink is not this job, and a big-box pitcher is not an installation.",
          "Calgary houses are on treated municipal water. People usually ask about taste, chlorine, sediment, and hardness, not about a rural well. What you need depends on a water test and on what you actually dislike, not on a package with a famous name. net0 will not claim a removal percentage on this page. The equipment sheet for the unit that is quoted is where performance claims belong, and they should match a test of your water, not a national advertisement.",
        ],
      },
      {
        id: "not-energy",
        heading: "Why this is on a solar site at all",
        paragraphs: [
          "The honest reason is the contract, not the kilowatt-hours. A homeowner who is already talking to net0 about the roof is often ready to deal with the rest of the house in the same process: one company, separate lines, the right to refuse any line. Water is the comfort line. [Solar panels](/solar-panels-calgary) are the electricity line. They do not improve each other’s physics.",
          "A filter has a small pump or none at all, depending on the design. Either way it is not a reason to buy a larger array. If someone sizes your solar system “to run the filter,” ask them to show the watts. You will not find a serious load there.",
          "You can ask for filtration without buying solar. The quote form is the same one. Say that water is the scope so the visit is not only a roof scan.",
        ],
      },
      {
        id: "install",
        heading: "What an installation has to get right",
        paragraphs: [
          "The installer shuts the water down, cuts into the main, sets the equipment, and leaves you with a bypass so the house still has water when a cartridge is changed. A system without a bypass is a design you should question. Drains, if the equipment backwashes, have to go somewhere that will not freeze in a Calgary January. A softener and a filter are not the same machine. If you need both, the quote should say both.",
          "Maintenance is the part people skip. Cartridges and media have a service interval. Ask what you replace, how often, and what it costs as a supply, not as a surprise. A quote that is silent on upkeep is only the install day.",
          "net0 does not post a Calgary price for a whole-house system. Pipe size, the equipment, a drain, and whether a softener is included move the number too far. Ask for the quote. No rebate is assumed. If a water-efficiency program is actually open for your address, it will be named then, not used here as a discount.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a whole-house water filter an energy upgrade?",
        answer:
          "No. It treats water. It does not cut the power bill in a way that belongs in a solar payback. It is offered as a comfort add-on on the same contract, as its own line.",
      },
      {
        question: "Do you install under-sink or pitcher filters?",
        answer:
          "This page is the whole-house install, on the main line. A single drinking-water tap is a different product. Say which one you want so the quote matches.",
      },
      {
        question: "Will it fix Calgary water hardness and chlorine taste?",
        answer:
          "Only the equipment matched to a test of your water can answer that. We will not claim a removal percentage here. The proposal should name the equipment and what it is for.",
      },
      {
        question: "How much does whole-house water filter installation cost in Calgary?",
        answer:
          "We do not publish a price. Pipe, equipment, drain, and whether a softener is included all change it. Request a quote.",
      },
      {
        question: "Do I have to buy solar to get a water filter quote?",
        answer:
          "No. Say that filtration is what you want. Solar can be on the same visit or not at all.",
      },
    ],
  },
  foam: {
    path: "/spray-foam-insulation-calgary",
    title: "Spray Foam and Attic Insulation in Calgary | net0",
    description:
      "Spray foam and attic insulation in Calgary from net0. A tighter attic so heating equipment and solar cover less waste. Free quote. No rebate assumed.",
    eyebrow: "Spray foam insulation Calgary",
    h1: "Spray Foam Attic Insulation in Calgary",
    serviceType: "Spray foam attic insulation",
    lede: "Spray foam in a Calgary attic is an envelope job. It slows heat leaving the house in winter and heat entering it in summer. Solar does not do that. Solar offsets electricity you still use. Insulation is how you need less heat in the first place. net0 quotes the foam as its own line, often next to windows, a heat pump, or the roof.",
    cta: quoteCta,
    related: [
      "/solar-panel-cost-calgary",
      "/heat-pump-calgary",
      "/window-replacement-calgary",
      "/solar-panels-calgary",
    ],
    sections: [
      {
        id: "attic",
        heading: "Why the attic is the first place to look",
        paragraphs: [
          "Heat rises. A Calgary attic that is thin, patchy, or full of gaps at the hatches and penetrations is a large part of a winter heating bill, whether that bill is gas or electricity. Adding foam is not decoration. It is a change to the load that a furnace or a [heat pump](/heat-pump-calgary) has to meet every hour the temperature drops.",
          "That load is also what a solar proposal is quietly assuming. If the attic is improved after the array is sized, the solar system may be larger than the new house needs. If the attic is ignored, the heat pump is oversized for a leak. Looking at both before anyone orders equipment is the point of putting them on one contract. You can still buy only the foam.",
          "Attic insulation Calgary is the broader search. This page is specifically spray foam, which air-seals as it insulates. A batt laid on top of a leaky ceiling deck does not do the same job. The quote should say where the foam goes: roof deck, attic floor, rim joists, or some of each. Those are different assemblies.",
        ],
      },
      {
        id: "versus",
        heading: "Spray foam and blown-in are different jobs",
        paragraphs: [
          "Blown-in cellulose or fiberglass fills a flat attic to a depth. It is often the right add on top of an attic that is already air-sealed. Spray foam sticks, expands, and is used where you need a seal: the underside of a roof, a transition, a rim. Treating them as one product called “insulation” is how quotes become impossible to compare.",
          "net0’s offer on this page is spray foam. If a proposal includes blown-in as well, or instead, the line will say so. Do not assume both are in the price because both words appeared in a conversation. Open-cell and closed-cell spray foam are also different. Closed-cell is denser and is a vapour retarder at sufficient thickness. Open-cell is not the same product. The quote should name which one and the thickness, and it should say what happens to existing ventilation. Covering soffit vents by accident is a moisture problem, not a bonus.",
        ],
      },
      {
        id: "package",
        heading: "How this sits with solar, windows, and heating",
        paragraphs: [
          "The order that makes sense is envelope, then equipment, then generation. Foam and [windows](/window-replacement-calgary) reduce the heat you have to replace. A heat pump or the furnace replaces it. [Solar](/solar-panels-calgary) offsets electricity, including the electricity a heat pump adds. You do not have to do all three. You should not size the last one before you have decided about the first.",
          "Foam will not make a solar array produce more. Winter production in Calgary is still the lower season, as the solar pages already say. A tighter attic means the house asks for fewer of those scarce winter kilowatt-hours. That is the cross-sell. It is not a rebate and it is not a guaranteed bill.",
          "No government rebate is assumed. Insulation programs change, and a program that is not taking applications is not part of the price. The [solar cost page](/solar-panel-cost-calgary) uses the same rule. If something is open for your address on the day of the quote, it will be written as its own line that you can check.",
        ],
      },
      {
        id: "quote",
        heading: "What to ask before the foam truck is booked",
        paragraphs: [
          "Ask what is protected from overspray, how the crew isolates the living space, and how long before the house is back to normal use. Ask who addresses existing moisture, knob-and-tube wiring, or a bathroom fan that currently dumps into the attic. Those are reasons to stop, not details to discover after the foam is up. Ask for the thickness and the product name in writing.",
          "net0 will not publish a price per board-foot or per square foot here. Access, the existing insulation, the product, and the ventilation corrections move it. The quote is the price. Call or use the same free request as the roof scan and say the attic is in scope.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is spray foam the same as blown-in attic insulation?",
        answer:
          "No. Blown-in fills depth on an attic floor. Spray foam seals and insulates where it is sprayed, often the roof deck or the rim. The quote should name which one you are buying.",
      },
      {
        question: "Will attic foam make my solar panels produce more?",
        answer:
          "No. Foam reduces heat loss. Solar production depends on the roof, the sun, and the equipment. A tighter attic can mean you need less of that production for heating. It does not increase the production.",
      },
      {
        question: "Do you offer a spray foam rebate in Calgary?",
        answer:
          "No rebate is built into this page. A program is counted only when it is open and you qualify at the time of the quote.",
      },
      {
        question: "How much does spray foam insulation cost in Calgary?",
        answer:
          "We do not post a rate. Thickness, product, access, and ventilation work change the price. Ask for a quote on the attic.",
      },
      {
        question: "Can foam be on the same contract as solar and a heat pump?",
        answer:
          "Yes, as separate lines. The useful order is to decide the envelope before the equipment is sized. You can still decline any line.",
      },
    ],
  },
} as const satisfies Record<string, GuidePageData>;

export function addonList(): GuidePageData[] {
  return [addons.windows, addons.lights, addons.heatPump, addons.ac, addons.water, addons.foam];
}
