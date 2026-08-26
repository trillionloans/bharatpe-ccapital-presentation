export type BusinessType =
  | "Retail"
  | "F&B"
  | "Grocery"
  | "Pharmacy"
  | "Electronics"
  | "Fashion"
  | "Services"
  | "Wholesale";

export interface Merchant {
  id: string;
  name: string;
  city: string;
  businessType: BusinessType;
  monthlyTxns: number;
  monthlyGmv: number;
  riskScore: number;
  growth: number;
  aiConfidence: number;
  x: number;
  y: number;
}

const cities = [
  "Mumbai", "Delhi", "Bengaluru", "Pune", "Jaipur", "Lucknow", "Surat",
  "Indore", "Patna", "Kanpur", "Nagpur", "Ahmedabad", "Chandigarh", "Kochi",
];

const names = [
  "Sharma General Store", "Krishna Sweets", "Modern Electronics", "City Pharmacy",
  "Rajdhani Kirana", "Style Junction", "FreshMart", "Om Traders", "Sunrise Bakery",
  "Metro Mobiles", "Green Grocers", "Tulsi Textiles", "Spice Route Cafe", "Prime Wholesale",
  "Nova Fashion", "Ganesh Hardware", "Cafe Aroma", "Vivid Apparel", "Sunshine Pharmacy",
  "Quick Bites", "Silver Line Electronics", "Heritage Sweets", "Urban Grocer", "Zenith Traders",
];

const types: BusinessType[] = [
  "Retail", "F&B", "Grocery", "Pharmacy", "Electronics", "Fashion", "Services", "Wholesale",
];

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export function generateMerchants(count = 220): Merchant[] {
  const rand = seededRandom(42);
  const merchants: Merchant[] = [];
  for (let i = 0; i < count; i++) {
    const name = names[Math.floor(rand() * names.length)];
    merchants.push({
      id: `m-${i}`,
      name: `${name} ${i % names.length === 0 ? "" : ""}`.trim(),
      city: cities[Math.floor(rand() * cities.length)],
      businessType: types[Math.floor(rand() * types.length)],
      monthlyTxns: Math.floor(400 + rand() * 9000),
      monthlyGmv: Math.floor(50000 + rand() * 4500000),
      riskScore: Math.floor(20 + rand() * 78),
      growth: Math.round((-8 + rand() * 45) * 10) / 10,
      aiConfidence: Math.floor(72 + rand() * 27),
      x: rand(),
      y: rand(),
    });
  }
  return merchants;
}

export const merchants = generateMerchants();
