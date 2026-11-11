export const guideSlug = "best-power-inverters-under-200";
export const guideTitle = "6 Best Power Inverters Under 200 in 2026";
export const metaTitle = "Best Power Inverters Under $200 in 2026";
export const metaDescription = "Six inverters under $200 chosen for headroom: surge ratings, direct-to-battery wiring and fusing, from a 300W pure sine unit to a 4000W hardwired model.";
export const mainKeyword = "best power inverters under 200";
export const introParagraphs = [
  "Spending up to $200 changes what you are really buying: it is no longer a charger, it is headroom. Headroom means the gap between what your devices draw while running and what an inverter can deliver for a second when a compressor or a pump kicks on. A '2000W with 4000W surge' rating is the standard format, and the surge number is what keeps a good unit from tripping on startup. Six picks here range from 300W to 4000W continuous, and the ranking follows how much usable headroom each gives per dollar.",
  "The other half of this budget is wiring. Anything beyond the roughly 150 W a lighter socket supports must be wired directly to the battery, with correct fusing between the battery and the inverter. A 2500W unit working near its rating asks for about 210 A at 12V, and a 4000W unit for more than 340 A, which is why cable thickness and fuse placement matter more than any feature on a spec sheet. These inverters ship with clamps, a terminal block or nothing at all, so the connection is part of the purchase.",
  "We favored picks that make a safe installation easy and ones that match the headroom to a likely battery bank. The 1000W pure sine unit leads because it pairs clean output with cables in the box, while the 4000W hardwired unit takes the top of the range for van builders. Two bargain units, a 750W and a 300W, cover tight budgets, and a tool-battery inverter avoids wiring entirely. If you only need to charge phones, a cheaper guide in this series fits better, since none of the headroom here would ever be used."
];
export const lastUpdated = "2026-11-11";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41vWnqM2vNL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-power-inverters-under-200-1",
    "rank": 1,
    "badge": "Best Value Under $200",
    "name": "BELTTT 1000Watt Pure Sine Wave Inverter 12V DC to 120V AC",
    "price": "$101.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41vWnqM2vNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DCJHY3TH?tag=rvgearlab-amz-20",
    "description": "The BELTTT 1000Watt is a pure sine unit rated at 1000W with a 2000W surge, offering two AC sockets, a USB port and a live status LCD. Thicker 3 ft cables and a fitting tool come in the box. At about $120 it is the entry point for headroom in this guide, a 2-to-1 ratio between surge and running watts that covers the startup kick of small motors.\n\nIt sits about $35 under the TVNIKD 2500W and about $50 under the LVYUAN 4000W, and it takes the clean waveform that neither of those larger units lists. The mechanism is the 2000W surge on top of 1000W continuous: a fan or a small compressor draws a brief spike at startup, and this inverter absorbs it without tripping.\n\nIt is best for campers who run laptops, a CPAP-class device and a small appliance from a deep-cycle battery. Pure sine keeps motors and chargers cool, and the cables in the box mean a direct connection is ready on day one. Buyers who want a first battery-wired inverter will find it the most forgiving of the six.",
    "specs": [
      "1000W pure sine, 2000W surge rating",
      "Dual AC sockets, USB port, live LCD",
      "3 ft heavy cables and fitting tool"
    ],
    "pros": [
      "Pure sine output suits motors and electronics",
      "Thicker cables come in the box",
      "LCD shows real-time status at a glance",
      "Handles a wide range of everyday loads"
    ],
    "cons": [
      "Too small for a microwave or kettle",
      "No remote switch for a distant install"
    ],
    "bestFor": "Everyday camper loads"
  },
  {
    "id": "best-power-inverters-under-200-2",
    "rank": 2,
    "badge": "Best Mid-Power Pick",
    "name": "TVNIKD 2500 Watt car Power Inverter 12V to 110V /120V",
    "price": "$155.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51clmwjfdpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09JGHKFXD?tag=rvgearlab-amz-20",
    "description": "The TVNIKD 2500W supplies 2500W through three AC outlets and a smart 2A USB port. It protects the load with ten 30A built-in fuses and an LCD that reports live battery status with an alarm. Three cooling fans keep the unit steady under load. At about $155 it is the step up into microwave and coffee maker territory without paying for a 4000W frame.\n\nIt costs about $35 more than the BELTTT 1000Watt and brings 1500W of additional capacity plus an extra outlet. Against the LVYUAN 4000W, it saves roughly $15 and sits in the sweet spot between a laptop inverter and a whole-van system. The fans are the mechanism here, because a unit running near its rating sheds heat steadily instead of throttling.\n\nIt is best for an RV or truck that runs a microwave or coffee maker off a battery bank. The LCD alarm warns you before a sagging battery shuts the unit down, which matters on a cold morning with the heater on. Wire it with heavy cable and a fuse near the battery, and it delivers.",
    "specs": [
      "2500W output with three AC outlets",
      "Ten 30A built-in fuses, three fans",
      "LCD with battery status and alarm"
    ],
    "pros": [
      "Three AC outlets power several devices",
      "Ten built-in fuses guard the circuit",
      "LCD battery alarm warns before a shutdown",
      "Three fans keep it cool under load"
    ],
    "cons": [
      "Modified sine output suits basic loads",
      "Needs heavy battery cables and a fuse"
    ],
    "bestFor": "Microwaves and coffee makers"
  },
  {
    "id": "best-power-inverters-under-200-3",
    "rank": 3,
    "badge": "Best Hardwired Pick",
    "name": "LVYUAN 4000 Watt Power Inverter 12V to 110V 120V DC to AC Converter with 4 AC Outlets",
    "price": "$169.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Z2HBLhliL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FCBX4RF7?tag=rvgearlab-amz-20",
    "description": "The LVYUAN 4000W provides 4000W continuous and 8000W peak with four AC outlets, a USB port and a hardwire terminal. A 16.4 ft wired remote switches it on and off, and an LCD shows battery, output and load. At about $170 it is the most powerful unit in the guide and the one meant to be mounted, not carried.\n\nIt gives 1500W more than the TVNIKD 2500W for about $15 more, and the remote is the feature the compact units do not offer. The 8000W peak rating is the headroom story at its extreme: a compressor or a pump that kicks hard at startup finds room, and the terminal block lets a permanent cable run replace the clamps.\n\nIt is best for an RV or van conversion with a lithium bank and a planned installation. Mount it where the cable run to the battery is short, put the remote beside the bed or the galley, and leave the unit alone. Pair it with the thick cable and the fusing the maker calls for, and it becomes a permanent part of the rig.",
    "specs": [
      "4000W continuous, 8000W peak output",
      "Four AC outlets, hardwire terminal",
      "16.4 ft wired remote, LCD readout"
    ],
    "pros": [
      "Most power of any pick in this guide",
      "Wired remote switches it from across the van",
      "Four AC outlets cover a full galley",
      "LCD shows battery and load together"
    ],
    "cons": [
      "Too big for a small battery bank",
      "Needs a permanent, properly fused hardwire installation"
    ],
    "bestFor": "Van and RV installs"
  },
  {
    "id": "best-power-inverters-under-200-4",
    "rank": 4,
    "badge": "Best Tool-Battery Pick",
    "name": "EGO POWER+ Portable Inverter",
    "price": "$122.55",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41zhqURspTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BW83F6QJ?tag=rvgearlab-amz-20",
    "description": "The EGO POWER+ inverter is a pure sine unit that holds 400W with an 800W surge and offers a USB-C PD 100W port, a second USB-C and a USB-A. It also charges EGO 56V ARC batteries through the PD port. At about $123 it sits close to the BELTTT 1000Watt on price and carries a place in this guide for one reason: it works with the engine off.\n\nNext to the BELTTT 1000Watt, it delivers 600W less and swaps a wired connection for a tool-battery input. The mechanism is the pack: power comes from an EGO 56V battery you can recharge, so there is no cable to run, no fuse to size and no vehicle battery to protect. That simplicity is the headroom this unit trades for.\n\nIt is best for owners of EGO 56V batteries who want clean AC power at the campsite or in the yard. The 100W PD port charges a laptop quickly in either direction, which turns the inverter into a pass-through charger for the battery pack. The battery and charger are sold separately, so it suits someone who already owns them.",
    "specs": [
      "400W pure sine, 800W surge output",
      "100W USB-C PD input and output",
      "Runs from an EGO 56V battery pack"
    ],
    "pros": [
      "Pure sine wave output protects electronics",
      "100W USB-C PD port charges laptops fast",
      "Recharges EGO batteries through the same port",
      "Works with the vehicle switched off"
    ],
    "cons": [
      "Battery and charger are sold separately",
      "400W caps what it can run"
    ],
    "bestFor": "EGO battery owners"
  },
  {
    "id": "best-power-inverters-under-200-5",
    "rank": 5,
    "badge": "Best Entry Pure Sine",
    "name": "BESTEK 300W Pure Sine Wave Power Inverter",
    "price": "$51.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/519I1cTYXWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B082PN7C6J?tag=rvgearlab-amz-20",
    "description": "The BESTEK 300W produces pure sine wave with 4.8A of dual USB charging and two ways to connect, plug or clamp. It has a smart cooling fan, isolated voltage protection and defenses against overload, overheating and reverse polarity. At about $58 it is the lowest-priced pure sine unit in the guide and a clean way to start.\n\nIt costs less than half the BELTTT 1000Watt and delivers less than a third of the capacity, so it suits a modest bank and a short device list. Against the POTEK 750W at about $50, it swaps raw watts for the clean waveform, and the reverse polarity protection is a quiet advantage for a first installation where the clamps might be swapped.\n\nIt is best for a sensitive-electronics setup in a car or a van, where the laptop, the camera battery charger and a phone are the whole load. Clean power at a budget price keeps expensive chargers running cool. A buyer comparing headroom might pass over it, and a buyer comparing waveform will not, so read your own device list before deciding.",
    "specs": [
      "300W pure sine wave output",
      "4.8A total dual USB charging",
      "Plug or clamp connection, polarity protection"
    ],
    "pros": [
      "Pure sine output at an entry price",
      "Dual USB with 4.8A total charging",
      "Reverse polarity protection guards first installs",
      "Plug or clamp connection in one unit"
    ],
    "cons": [
      "300W offers little headroom for bigger loads",
      "No LCD screen to show status"
    ],
    "bestFor": "Laptops and cameras"
  },
  {
    "id": "best-power-inverters-under-200-6",
    "rank": 6,
    "badge": "Best Cheapest Power",
    "name": "POTEK 750W Car Power Inverter DC 12 V to AC 110V Dual AC Charging Ports / 2A USB Ports for Laptop",
    "price": "$49.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51gBELlyaCL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01N1033XI?tag=rvgearlab-amz-20",
    "description": "The POTEK 750W delivers 750W continuous and 1500W peak through two AC outlets and a USB port. It includes battery clamps, a cigarette lighter adapter and two fuses, along with six protection systems. At about $50 it is the cheapest route to a 2-to-1 surge ratio in this guide, and the box holds everything needed to start.\n\nIt costs less than half the BELTTT 1000Watt and offers three quarters of the continuous watts. Next to the BESTEK 300W at about $58, it brings 450W more capacity for $8 less, and the mechanism is the waveform trade: modified sine output is what makes the extra watts affordable. The clamps and spare fuses mean the first connection needs no extra parts.\n\nIt is best for a tight budget that still needs a power tool or a blender in the car or at camp. Clip it to the battery with the engine running for real loads, and use the lighter adapter for chargers. Anyone assembling a low-cost kit with room for the odd tool will find the value hard to match.",
    "specs": [
      "750W continuous, 1500W peak output",
      "Two AC outlets, one USB port",
      "Clamps, lighter adapter, two fuses"
    ],
    "pros": [
      "750W continuous at a rock-bottom price",
      "Clamps and fuses come in the box",
      "Six protection systems guard battery and load",
      "Two AC outlets for two devices"
    ],
    "cons": [
      "Modified sine output suits simple loads",
      "Needs clamps to the battery for big loads"
    ],
    "bestFor": "Tools on a tight budget"
  }
];

export const howWeEvaluated = [
  {
    "title": "Surge against continuous",
    "description": "We read every listing for two numbers, the running watts and the peak or surge figure, and compared them to the price. A 1000W unit with a 2000W surge and a 4000W unit with an 8000W peak both follow the normal 2-to-1 pattern. Where a surge rating was missing from the page, we planned around the continuous figure alone."
  },
  {
    "title": "Direct-to-battery connection",
    "description": "Every pick above a charger-class rating needs a battery connection, so we compared clamps, terminal blocks and tool-pack input. A hardwire terminal suits a permanent install, and clamps suit a weekend rig. We noted what each box includes, since cables and fuses are real money when bought separately."
  },
  {
    "title": "Fusing and protection",
    "description": "Based on product specs, we reviewed built-in fuses, replaceable fuses and the named protections such as reverse polarity and overheating. A unit with its own fuses still wants a fuse near the battery on the input cable. We gave extra weight to features that guard a first-time installer against a swapped clamp."
  },
  {
    "title": "Cooling and monitoring",
    "description": "We looked at fans, case materials and displays, because headroom is only useful if the unit can shed heat and tell you what is happening. An LCD with a battery alarm, a wired remote and three cooling fans each address a different risk. Units with no display scored lower for large loads."
  },
  {
    "title": "Value against the $200 cap",
    "description": "Every pick is at or under $200, and the lowest tier starts at about $50. We compared dollars per usable watt and per clean watt, since a $170 unit that suits a van conversion is a different purchase from a $50 unit for tools. The final order rewards the best match between headroom and the buyer's wiring."
  }
];

export interface HowToChooseSection {
  subheading: string; intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Surge and Continuous Headroom",
    "intro": "Start with the biggest load and its startup kick. The rating you need is continuous watts for running and surge watts for starting.",
    "table": {
      "headers": [
        "Your heaviest load",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Laptop, CPAP-class device and fan",
          "BELTTT 1000Watt",
          "1000W continuous with a 2000W surge."
        ],
        [
          "Microwave or coffee maker",
          "TVNIKD 2500W",
          "2500W with three AC outlets."
        ],
        [
          "Compressor or pump with a hard start",
          "LVYUAN 4000W",
          "8000W peak, 4000W continuous."
        ],
        [
          "A power tool or blender on a budget",
          "POTEK 750W",
          "750W continuous, 1500W peak."
        ],
        [
          "Phone, laptop and camera chargers",
          "BESTEK 300W",
          "300W pure sine for sensitive gear."
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "The bands below come from this guide's actual price figures, and the gaps between them are bigger than they look.",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick",
        "What the money buys"
      ],
      "rows": [
        [
          "About $50",
          "POTEK 750W",
          "750W with clamps and fuses in the box"
        ],
        [
          "About $58",
          "BESTEK 300W",
          "Entry pure sine, 300W"
        ],
        [
          "About $120 to $123",
          "BELTTT 1000Watt or EGO POWER+",
          "1000W pure sine, or a pack-powered 400W"
        ],
        [
          "About $155",
          "TVNIKD 2500W",
          "2500W with ten built-in fuses"
        ],
        [
          "About $170",
          "LVYUAN 4000W",
          "4000W continuous, hardwire terminal, remote"
        ]
      ]
    }
  },
  {
    "subheading": "Clamps and Cables vs a Hardwired Terminal",
    "intro": "This choice sets how permanent the installation is and how much work the first connection takes.",
    "cards": [
      {
        "label": "Clamps and cables",
        "text": "The POTEK 750W ships with clamps and two fuses, the BELTTT 1000Watt arrives with 3 ft thick cables and a fitting tool, and the BESTEK 300W plugs in or clamps on. These suit a weekend rig that comes apart again, and they put the connection on battery terminals you can reach."
      },
      {
        "label": "Hardwired terminal",
        "text": "The LVYUAN 4000W uses a terminal block and a 16.4 ft wired remote for a fixed installation, and the TVNIKD 2500W wants heavy cable on a permanent run. A 4000W load pulls more than 340 A, so the cable and fuse belong on a planned route."
      }
    ],
    "note": "Choose the BELTTT 1000Watt to learn the ropes, and move to the LVYUAN 4000W when the wiring is part of a build."
  },
  {
    "subheading": "By What the Display Tells You",
    "intro": "A second axis that matters once loads grow: what you can see before something trips.",
    "table": {
      "headers": [
        "Monitoring need",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Real-time status on a small bank",
          "BELTTT 1000Watt",
          "LCD shows live status."
        ],
        [
          "Battery alarm before shutdown",
          "TVNIKD 2500W",
          "LCD with a battery alarm."
        ],
        [
          "Battery and load from across the van",
          "LVYUAN 4000W",
          "Wired remote plus an LCD."
        ],
        [
          "Basic protections with no screen",
          "BESTEK 300W",
          "Fan and reverse polarity protection."
        ]
      ]
    }
  },
  {
    "subheading": "For a Microwave and Coffee Maker Specifically",
    "intro": "These are the loads that need real headroom, and a microwave or induction cooktop wants roughly 1000 to 2000 W or more.",
    "cards": [
      {
        "label": "Look for",
        "text": "Continuous watts comfortably above the appliance label, as the TVNIKD 2500W offers, a surge rating on top, heavy cable and a fuse near the battery. A bank sized for the draw matters as much as the inverter."
      },
      {
        "label": "In this comparison",
        "text": "The TVNIKD 2500W is the pick for a microwave or coffee maker, the LVYUAN 4000W covers a bigger galley on a lithium bank, and the BELTTT 1000Watt tops out below a microwave."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "intro": "Moving from $50 to $170 buys capacity, remote control and monitoring, and each only matters if your loads need it.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want a microwave or pump to run without tripping, which points to the TVNIKD 2500W or the LVYUAN 4000W, or you want clean power for electronics, which points to the BELTTT 1000Watt."
      },
      {
        "label": "Save if",
        "text": "Your loads are tools and chargers. The POTEK 750W and BESTEK 300W cover them at about $50 and $58, and the EGO POWER+ is a fair choice if you already own the pack."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Surge rating and continuous rating",
    "explanation": "Continuous watts is what the inverter holds all evening, and surge watts is the burst it delivers for a second when a motor starts. A rating such as 2000W with a 4000W surge shows the usual pattern of roughly 2-to-1. A compressor or pump can draw a spike at startup well above its running watts, and an inverter with too little surge trips right then. Look for both numbers in the title or the bullets, and size for the continuous one first."
  },
  {
    "criterion": "Direct-to-battery wiring",
    "explanation": "Any inverter above about 150 W has to be wired directly to the battery, because the lighter socket circuit cannot supply more. Current rises quickly with wattage, at roughly 85 A per 1000W at 12V. A 2500W unit therefore asks for about 210 A, and a 4000W unit for more than 340 A. Look at what the box includes, because thick cable of the right length is a real expense."
  },
  {
    "criterion": "Fusing on the input side",
    "explanation": "A fuse near the battery on the positive cable protects the wiring from a short, and it is separate from any fuses inside the inverter. Larger inverters need correct fusing on the input side, and it matters because a battery can deliver hundreds of amps into a fault. Check whether the unit ships with fuses and clamps, as the POTEK 750W does. Do not rely on internal fuses alone."
  },
  {
    "criterion": "Waveform and what it runs",
    "explanation": "Pure sine matches utility power and runs motors, compressors and sensitive electronics correctly, while modified sine is adequate for resistive loads such as lights. Motors tend to run rough on the stepped waveform and some refuse to start. The BELTTT 1000Watt, EGO POWER+ and BESTEK 300W are pure sine here, and the three bigger-wattage picks are not named as such. Find the waveform in the title before comparing prices."
  },
  {
    "criterion": "Cooling and noise",
    "explanation": "Fans on higher-wattage units can run loud, which matters when the inverter sits in a van or a cab. A unit with several fans or a temperature-controlled fan spins up only under load. A 2500W inverter with three fans keeps its heat in check, but the noise is real. Read the fan description in the bullets, and mount a big unit away from where you sleep."
  },
  {
    "criterion": "Battery bank size",
    "explanation": "The inverter does not set runtime, the battery does. A 1000W draw runs a 100 Ah battery flat in well under an hour, so an inverter's rating means little if the bank is small. A 4000W unit only makes sense with a big lithium or multi-battery bank. Add up the amp-hours you own before you pick a size."
  }
];

export const faq = [
  {
    "q": "What is a surge rating and why does it matter?",
    "a": "It is the brief power an inverter delivers when a motor or compressor starts, which can be much higher than the running load. A 1000W unit with a 2000W surge can start a small fan or pump that spikes for a second. Without enough surge, the inverter shuts down at startup. Size for the running watts first, then check that the surge covers the kick."
  },
  {
    "q": "Can I plug a 2500W inverter into a car socket?",
    "a": "No. A lighter socket circuit tops out near 150 W, and a 2500W unit needs thick cables straight to a battery, with a fuse on the input side. A short, heavy cable and a solid terminal connection are the difference between a safe install and a melted wire. The TVNIKD 2500W and LVYUAN 4000W are built for that kind of connection."
  },
  {
    "q": "Is the TVNIKD 2500W worth it over the BELTTT 1000Watt?",
    "a": "It is worth it if you want a microwave or coffee maker, which the BELTTT 1000Watt cannot carry. The TVNIKD costs about $35 more and adds 1500W and an outlet, though its output is modified sine. If your gear is laptops and motors, the BELTTT's pure sine is the better fit. Decide by the heaviest appliance on your list."
  },
  {
    "q": "How do I wire the LVYUAN 4000W?",
    "a": "Mount it near the battery to keep the cable short, and use heavy cable with a fuse on the positive lead close to the battery terminal. Connect the hardwire terminal with the unit switched off, then run the 16.4 ft wired remote to where you will use it. Tighten every lug, because a loose connection heats up under hundreds of amps. Follow the cable and fuse sizes the maker calls for."
  },
  {
    "q": "How do I look after a high-power inverter?",
    "a": "Keep the vents and fans clear, and check the terminals for tightness and discoloration every season. Dust inside a fan shortens its life. A unit that runs near its rating for hours should sit in a cool, ventilated spot. The three fans on the TVNIKD 2500W are worth clearing of dust."
  },
  {
    "q": "Does the EGO POWER+ work without a vehicle?",
    "a": "Yes, it runs from an EGO 56V battery pack, so it needs no vehicle and no cable run. The 400W pure sine output suits laptops, cameras and small fans, and the 100W USB-C PD port charges devices quickly. The battery and charger are sold separately, so it suits someone who owns them. Runtime depends on the pack's capacity."
  }
];

export const bottomLine = [
  "The BELTTT 1000Watt is the right headroom for most readers, because a 2000W surge on a clean sine waveform covers a laptop, a CPAP-class device and a small appliance, and the cables and tool come in the box. Step up to the TVNIKD 2500W if a microwave or coffee maker is on the list.",
  "Van builders with a lithium bank should look at the LVYUAN 4000W, which brings 8000W of peak headroom, four outlets and a wired remote for a permanent install. Anyone on a tight budget with tools to run will find the POTEK 750W a good value, and EGO battery owners get a wiring-free option in the EGO POWER+."
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Portable Solar Panels",
    "href": "/camp-power/best-portable-solar-panels"
  },
  {
    "title": "Best Power Station",
    "href": "/camp-power/best-power-station"
  },
  {
    "title": "Best Solar Power Bank",
    "href": "/camp-power/best-solar-power-bank"
  },
  {
    "title": "Best Portable Solar Panels For Home",
    "href": "/camp-power/best-portable-solar-panels-for-home"
  }
];
