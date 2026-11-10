export const guideSlug = "best-rv-router-with-wifi-as-wan";
export const guideTitle = "2 Best RV Router With Wifi As Wan in 2026";
export const metaTitle = "Best RV Router With Wifi As Wan in 2026";
export const metaDescription = "Best RV routers that can use Wi-Fi as the WAN, two TP-Link and GL.iNet travel routers compared by speed class, ports and modes.";
export const mainKeyword = "best rv router with wifi as wan";
export const introParagraphs = [
  "Wi-Fi as WAN means the router joins a campground or hotel Wi-Fi network as its internet source and shares it on your own private network. Only two listings here state that kind of mode clearly, so this is a short shortlist.",
  "Picks were ordered by how clearly each listing describes hotspot or repeater modes, the radio speed class and the ports. Neither product includes cellular."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41O2lueo7pL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-rv-router-with-wifi-as-wan-1",
    "rank": 1,
    "badge": "Best Wi-Fi 6 Travel Router",
    "name": "TP-Link Roam 6 AX3000 Dual-Band Wi-Fi 6 Travel Router",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41O2lueo7pL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DY8K122V?tag=rvgearlab-amz-20",
    "description": "The TP-Link Roam 6 AX3000 is a dual-band Wi-Fi 6 travel router with up to 2402 Mbps on 5 GHz and 574 Mbps on 2.4 GHz, router, hotspot and AP or client modes and a 2.5 Gbps WAN and LAN port. OpenVPN and WireGuard are supported.\n\nHotspot mode is the Wi-Fi as WAN mode, and it comes with VPN support. It carries a faster class than the Opal.\n\nBest for owners who want fast, secure WAN over Wi-Fi. On the plus side, fast Wi-Fi 6 radios.",
    "specs": [
      "AX3000 Wi-Fi 6 dual band",
      "2.5G WAN/LAN, 1G LAN",
      "Hotspot mode, VPN client"
    ],
    "pros": [
      "Hotspot mode joins public Wi-Fi",
      "OpenVPN and WireGuard",
      "2.5 Gbps port",
      "Fast Wi-Fi 6 radios"
    ],
    "cons": [
      "No cellular modem",
      "Higher price than the Opal"
    ],
    "bestFor": "Fast Wi-Fi WAN"
  },
  {
    "id": "best-rv-router-with-wifi-as-wan-2",
    "rank": 2,
    "badge": "Best Budget Travel Router",
    "name": "GL.iNet GL-SFT1200 Opal Travel Router",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31ghUfztYXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09N72FMH5?tag=rvgearlab-amz-20",
    "description": "The GL.iNet GL-SFT1200 Opal is an AC1200 dual-band travel router with two gigabit LAN ports and one gigabit WAN port, a 145 gram body and OpenVPN and WireGuard pre-installed. Another reason it earns a slot: gigabit ports.\n\nIt is the cheaper and lighter pick, ideal for a small bag. Its listing does not spell out the Wi-Fi as WAN mode as clearly as TP-Link.\n\nA fit for budget travelers. On the plus side, low price.",
    "specs": [
      "AC1200 dual band",
      "Gigabit WAN and two LAN",
      "145 g with VPN support"
    ],
    "pros": [
      "Lightweight 145 g body",
      "Gigabit ports",
      "VPN pre-installed",
      "Low price"
    ],
    "cons": [
      "Wi-Fi WAN mode not spelled out",
      "Wi-Fi 5 speed class"
    ],
    "bestFor": "Budget travelers"
  }
];

export const howWeEvaluated = [
  {
    "title": "WAN modes",
    "description": "Hotspot and repeater mentions were read."
  },
  {
    "title": "Speed",
    "description": "Wi-Fi class and ports were compared."
  },
  {
    "title": "VPN",
    "description": "VPN support was noted."
  },
  {
    "title": "Price",
    "description": "Cost was weighed."
  }
];

export interface HowToChooseSection {
  subheading: string;
  intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By goal",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Fastest Wi-Fi WAN",
          "TP-Link Roam 6 AX3000",
          "Wi-Fi 6 with 2.5G port"
        ],
        [
          "Lowest cost",
          "GL.iNet Opal",
          "AC1200 at a low price"
        ],
        [
          "Lightest pack",
          "GL.iNet Opal",
          "145 g body"
        ],
        [
          "2.5 Gbps wired",
          "TP-Link Roam 6 AX3000",
          "2.5G WAN/LAN port"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick"
      ],
      "rows": [
        [
          "$30 to $40",
          "GL.iNet Opal"
        ],
        [
          "$80 to $90",
          "TP-Link Roam 6 AX3000"
        ]
      ]
    }
  },
  {
    "subheading": "Wi-Fi 6 vs Wi-Fi 5",
    "cards": [
      {
        "label": "Wi-Fi 6",
        "text": "Faster and better with many devices. TP-Link Roam 6 AX3000 sits here."
      },
      {
        "label": "Wi-Fi 5",
        "text": "Slower and cheaper. GL.iNet Opal sits here."
      }
    ],
    "note": "Most buyers should default to the TP-Link Roam 6 AX3000 for streaming."
  },
  {
    "subheading": "By travel style",
    "table": {
      "headers": [
        "Style",
        "Recommended pick"
      ],
      "rows": [
        [
          "Remote work",
          "TP-Link Roam 6 AX3000"
        ],
        [
          "Backpack",
          "GL.iNet Opal"
        ],
        [
          "Hotel Wi-Fi",
          "TP-Link Roam 6 AX3000"
        ],
        [
          "Budget",
          "GL.iNet Opal"
        ]
      ]
    }
  },
  {
    "subheading": "For Campground Wi-Fi Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "hotspot or repeater mode and VPN"
      },
      {
        "label": "In this comparison",
        "text": "The TP-Link Roam 6 AX3000 lists hotspot mode and VPN support."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want the TP-Link Roam 6 AX3000."
      },
      {
        "label": "Save if",
        "text": "Save with the GL.iNet Opal."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Wi-Fi as WAN",
    "explanation": "The router joins a network for internet. WAN is the connection that brings internet into the router, and it can be Ethernet, a Wi-Fi network you join, a USB phone tether or a cellular modem. Routers that list several WAN modes can fail over when one drops. Check which input modes the listing names, since a router without Wi-Fi-as-WAN cannot join campground Wi-Fi."
  },
  {
    "criterion": "Speed class",
    "explanation": "Wi-Fi class sets speed. Wi-Fi band decides range and speed: 2.4 GHz travels farther through walls and trees, while 5 GHz is faster at short distance. A dual-band product lets you use both, and listed speed totals are lab maximums rather than what a campground link delivers. Look for the band names and treat the headline Mbps figure as a ceiling."
  },
  {
    "criterion": "VPN",
    "explanation": "VPN protects traffic. Travel routers that create a private network behind a campground connection help keep your devices off shared Wi-Fi. VPN support such as OpenVPN or WireGuard adds another layer on public networks. Look for the VPN names and firmware notes on the listing."
  },
  {
    "criterion": "Ports",
    "explanation": "Ports help wired devices. Ethernet ports let you wire a smart TV or a laptop for better stability than Wi-Fi. Gigabit and 2.5 Gbps ports exceed what most campground links deliver but help with local transfers. Check the port speeds and how many are WAN versus LAN."
  },
  {
    "criterion": "Power",
    "explanation": "USB power decides where it works. Power source matters in a rig: USB-C or micro USB devices run from a battery bank, 12V units wire to the coach, and PoE units need an injector or switch. A product that needs 110V is dead on a dry-camping night. Look for the input voltage or connector in the spec line and plan the cable run."
  }
];

export const faq = [
  {
    "q": "What does Wi-Fi as WAN mean?",
    "a": "The router joins a Wi-Fi network for internet and shares it privately. It is also called client or hotspot mode."
  },
  {
    "q": "What mistake do buyers make?",
    "a": "Expecting the router to boost the Wi-Fi signal. It only joins it, so poor campground signal stays poor."
  },
  {
    "q": "Is the Roam 6 AX3000 worth it over the Opal?",
    "a": "It adds Wi-Fi 6 and a 2.5G port. The Opal costs less."
  },
  {
    "q": "How do I set up Wi-Fi as WAN?",
    "a": "Choose hotspot or repeater mode in the admin page. Scan for networks and join the one you want."
  },
  {
    "q": "How do I maintain it?",
    "a": "Update firmware when the maker releases it. Reset the connection after changing networks."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Long Range RV Wifi Booster",
    "href": "/camping-travel/best-long-range-rv-wifi-booster"
  },
  {
    "title": "Best RV Wifi Booster With External Antenna",
    "href": "/camping-travel/best-rv-wifi-booster-with-external-antenna"
  },
  {
    "title": "Best Wifi Router For RV",
    "href": "/camping-travel/best-wifi-router-for-rv"
  },
  {
    "title": "Best 5g Wifi Booster For RV",
    "href": "/camping-travel/best-5g-wifi-booster-for-rv"
  }
];
