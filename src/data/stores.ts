export type StoreCategory =
  | "Moda"
  | "Rozrywka"
  | "Zdrowie i uroda"
  | "Dom"
  | "Biżuteria i akcesoria"
  | "Sport"
  | "Artykuły spożywcze"
  | "Usługi i multimedia"
  | "Jedzenie";

export interface Store {
  name: string;
  category: StoreCategory;
}

export const categoryEmoji: Record<StoreCategory, string> = {
  Moda: "👗",
  Rozrywka: "🎮",
  "Zdrowie i uroda": "💄",
  Dom: "🏠",
  "Biżuteria i akcesoria": "💍",
  Sport: "🏋️",
  "Artykuły spożywcze": "🛒",
  "Usługi i multimedia": "📱",
  Jedzenie: "🍔",
};

export const stores: Store[] = [
  // Moda
  { name: "4F", category: "Moda" },
  { name: "Big Star", category: "Moda" },
  { name: "Diverse", category: "Moda" },
  { name: "Greenpoint", category: "Moda" },
  { name: "H&M", category: "Moda" },
  { name: "HalfPrice", category: "Moda" },
  { name: "Martes Sport", category: "Moda" },
  { name: "New Yorker", category: "Moda" },
  { name: "Ochnik", category: "Moda" },
  { name: "Pepco", category: "Moda" },
  { name: "Pierre Cardin", category: "Moda" },
  { name: "Silesia Jeans", category: "Moda" },
  { name: "Sinsay", category: "Moda" },
  { name: "Sizeer", category: "Moda" },
  { name: "Tatuum", category: "Moda" },
  { name: "Top Secret", category: "Moda" },
  { name: "TRAVIS", category: "Moda" },
  { name: "Villaro", category: "Moda" },
  { name: "Wojas", category: "Moda" },
  { name: "Worldbox", category: "Moda" },
  { name: "CCC", category: "Moda" },
  // Rozrywka
  { name: "Planet Cinema", category: "Rozrywka" },
  { name: "Planet Games", category: "Rozrywka" },
  // Uroda
  { name: "dm", category: "Zdrowie i uroda" },
  { name: "Douglas", category: "Zdrowie i uroda" },
  { name: "Hebe", category: "Zdrowie i uroda" },
  { name: "Rituals", category: "Zdrowie i uroda" },
  { name: "Rossmann", category: "Zdrowie i uroda" },
  // Dom
  { name: "Agata", category: "Dom" },
  { name: "Castorama", category: "Dom" },
  { name: "Dr Materac", category: "Dom" },
  { name: "Nexterio", category: "Dom" },
  { name: "TEDi", category: "Dom" },
  // Biżuteria
  { name: "Apart", category: "Biżuteria i akcesoria" },
  { name: "Briju", category: "Biżuteria i akcesoria" },
  { name: "W.KRUK", category: "Biżuteria i akcesoria" },
  // Sport
  { name: "One Gym", category: "Sport" },
  // Spożywcze
  { name: "Biedronka", category: "Artykuły spożywcze" },
  { name: "Intermarché", category: "Artykuły spożywcze" },
  { name: "Lidl", category: "Artykuły spożywcze" },
  // Usługi
  { name: "Biuro Podróży Laguna", category: "Usługi i multimedia" },
  { name: "Empik", category: "Usługi i multimedia" },
  { name: "Itaka", category: "Usługi i multimedia" },
  { name: "Kantor Europa", category: "Usługi i multimedia" },
  { name: "Media Expert", category: "Usługi i multimedia" },
  { name: "Orange", category: "Usługi i multimedia" },
  { name: "Play", category: "Usługi i multimedia" },
  { name: "Plus", category: "Usługi i multimedia" },
  { name: "T-Mobile", category: "Usługi i multimedia" },
  { name: "Teletorium", category: "Usługi i multimedia" },
  { name: "IQOS", category: "Usługi i multimedia" },
  { name: "Smokeless", category: "Usługi i multimedia" },
  { name: "Shell", category: "Usługi i multimedia" },
  // Jedzenie
  { name: "Café Crèma", category: "Jedzenie" },
  { name: "Dolce Isola", category: "Jedzenie" },
  { name: "KFC", category: "Jedzenie" },
  { name: "McDonald’s", category: "Jedzenie" },
  { name: "The Flame", category: "Jedzenie" },
  { name: "Piekarnia Ziarenko", category: "Jedzenie" },
];

export const categories: StoreCategory[] = [
  "Moda",
  "Jedzenie",
  "Zdrowie i uroda",
  "Dom",
  "Sport",
  "Biżuteria i akcesoria",
  "Rozrywka",
  "Artykuły spożywcze",
  "Usługi i multimedia",
];
