import { AMAZON_TAG } from "@/lib/affiliate";

export interface BestGuideProduct {
  id: string;
  rank: number;
  badge: string;
  name: string;
  amazonQuery: string;
  amazonUrl?: string;
  imageUrl: string;
  specs: string[];
  specList: { label: string; value: string }[];
  description: string;
  bestFor: string;
  take?: string;
  catch?: string;
  pros: string[];
  cons: string[];
}

export interface BestGuideSpec {
  guideSlug: string;
  guideTitle: string;
  metaTitle: string;
  metaDescription: string;
  mainKeyword: string;
  categorySlug: string;
  lastUpdated: string;
  readTime: string;
  heroImage: string;
  introParagraphs: string[];
  editorialSections: { heading: string; paragraphs: string[] }[];
  products: BestGuideProduct[];
  buyingCriteria: { criterion: string; explanation: string }[];
  howWeEvaluated: { title: string; description: string }[];
  howToChoose: Array<{
    subheading: string;
    intro?: string;
    table?: { headers: string[]; rows: string[][] };
    cards?: { label: string; text: string }[];
    note?: string;
  }>;
  faq: { q: string; a: string }[];
  relatedGuides: { title: string; href: string }[];
  sources: { title: string; href: string }[];
}

export function amazonSearch(query: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query).replace(/%20/g, "+")}&tag=${AMAZON_TAG}`;
}

export function withAmazonUrls(products: BestGuideProduct[]) {
  return products.map((product) => ({
    ...product,
    amazonUrl: product.amazonUrl ?? amazonSearch(product.amazonQuery),
    price: "Check current price",
    ctaLabel: "Check price on Amazon",
    shortCtaLabel: "Check price",
  }));
}
