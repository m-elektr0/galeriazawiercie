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

export type Pavilion = "Brama Jury" | "M Park" | "Aura Park";

export interface Store {
  name: string;
  category: StoreCategory;
  pavilion: Pavilion;
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

export const pavilions: Pavilion[] = ["Brama Jury", "M Park", "Aura Park"];

export const stores: Store[] = [
  // ===== BRAMA JURY =====
  { name: "4F", category: "Moda", pavilion: "Brama Jury" },
  { name: "Agata", category: "Dom", pavilion: "Brama Jury" },
  { name: "Apart", category: "Biżuteria i akcesoria", pavilion: "Brama Jury" },
  { name: "Big Star", category: "Moda", pavilion: "Brama Jury" },
  { name: "Biuro Podróży Laguna", category: "Usługi i multimedia", pavilion: "Brama Jury" },
  { name: "Briju", category: "Biżuteria i akcesoria", pavilion: "Brama Jury" },
  { name: "Café Crèma", category: "Jedzenie", pavilion: "Brama Jury" },
  { name: "Chasta", category: "Moda", pavilion: "Brama Jury" },
  { name: "D&P Perfumum", category: "Zdrowie i uroda", pavilion: "Brama Jury" },
  { name: "Diverse", category: "Moda", pavilion: "Brama Jury" },
  { name: "Dolce Isola", category: "Jedzenie", pavilion: "Brama Jury" },
  { name: "Douglas", category: "Zdrowie i uroda", pavilion: "Brama Jury" },
  { name: "Dr Materac", category: "Dom", pavilion: "Brama Jury" },
  { name: "Empik", category: "Usługi i multimedia", pavilion: "Brama Jury" },
  { name: "Esotiq", category: "Moda", pavilion: "Brama Jury" },
  { name: "Greenpoint", category: "Moda", pavilion: "Brama Jury" },
  { name: "H&M", category: "Moda", pavilion: "Brama Jury" },
  { name: "Hebe", category: "Zdrowie i uroda", pavilion: "Brama Jury" },
  { name: "Intermarché", category: "Artykuły spożywcze", pavilion: "Brama Jury" },
  { name: "IQOS", category: "Usługi i multimedia", pavilion: "Brama Jury" },
  { name: "Itaka", category: "Usługi i multimedia", pavilion: "Brama Jury" },
  { name: "Kantor Europa", category: "Usługi i multimedia", pavilion: "Brama Jury" },
  { name: "Maxi Zoo", category: "Dom", pavilion: "Brama Jury" },
  { name: "New Yorker", category: "Moda", pavilion: "Brama Jury" },
  { name: "Nexterio", category: "Dom", pavilion: "Brama Jury" },
  { name: "Ochnik", category: "Moda", pavilion: "Brama Jury" },
  { name: "One Gym", category: "Sport", pavilion: "Brama Jury" },
  { name: "Orange", category: "Usługi i multimedia", pavilion: "Brama Jury" },
  { name: "Pierre Cardin", category: "Moda", pavilion: "Brama Jury" },
  { name: "Pioneer", category: "Moda", pavilion: "Brama Jury" },
  { name: "Planet Cinema", category: "Rozrywka", pavilion: "Brama Jury" },
  { name: "Planet Games", category: "Rozrywka", pavilion: "Brama Jury" },
  { name: "Play", category: "Usługi i multimedia", pavilion: "Brama Jury" },
  { name: "Plus", category: "Usługi i multimedia", pavilion: "Brama Jury" },
  { name: "Rituals", category: "Zdrowie i uroda", pavilion: "Brama Jury" },
  { name: "Rossmann", category: "Zdrowie i uroda", pavilion: "Brama Jury" },
  { name: "Silesia Jeans", category: "Moda", pavilion: "Brama Jury" },
  { name: "Sinsay", category: "Moda", pavilion: "Brama Jury" },
  { name: "Sizeer", category: "Moda", pavilion: "Brama Jury" },
  { name: "Smokeless", category: "Usługi i multimedia", pavilion: "Brama Jury" },
  { name: "T-Mobile", category: "Usługi i multimedia", pavilion: "Brama Jury" },
  { name: "Tatuum", category: "Moda", pavilion: "Brama Jury" },
  { name: "Teletorium", category: "Usługi i multimedia", pavilion: "Brama Jury" },
  { name: "The Flame", category: "Jedzenie", pavilion: "Brama Jury" },
  { name: "Top Secret", category: "Moda", pavilion: "Brama Jury" },
  { name: "TRAVIS", category: "Moda", pavilion: "Brama Jury" },
  { name: "Vezzi", category: "Moda", pavilion: "Brama Jury" },
  { name: "Villaro", category: "Moda", pavilion: "Brama Jury" },
  { name: "W.KRUK", category: "Biżuteria i akcesoria", pavilion: "Brama Jury" },
  { name: "Wojas", category: "Moda", pavilion: "Brama Jury" },
  { name: "Piekarnia Ziarenko", category: "Jedzenie", pavilion: "Brama Jury" },

  // ===== M PARK =====
  { name: "Castorama", category: "Dom", pavilion: "M Park" },
  { name: "TEDi", category: "Dom", pavilion: "M Park" },
  { name: "Smyk", category: "Moda", pavilion: "M Park" },
  { name: "HalfPrice", category: "Moda", pavilion: "M Park" },
  { name: "Worldbox", category: "Moda", pavilion: "M Park" },
  { name: "CCC", category: "Moda", pavilion: "M Park" },
  { name: "Rossmann (M Park)", category: "Zdrowie i uroda", pavilion: "M Park" },
  { name: "Lidl", category: "Artykuły spożywcze", pavilion: "M Park" },

  // ===== AURA PARK =====
  { name: "McDonald’s", category: "Jedzenie", pavilion: "Aura Park" },
  { name: "KFC", category: "Jedzenie", pavilion: "Aura Park" },
  { name: "Shell", category: "Usługi i multimedia", pavilion: "Aura Park" },
  { name: "Biedronka", category: "Artykuły spożywcze", pavilion: "Aura Park" },
  { name: "NKD", category: "Moda", pavilion: "Aura Park" },
  { name: "dm", category: "Zdrowie i uroda", pavilion: "Aura Park" },
  { name: "Dealz", category: "Dom", pavilion: "Aura Park" },
  { name: "Pepco", category: "Moda", pavilion: "Aura Park" },
  { name: "Martes Sport", category: "Sport", pavilion: "Aura Park" },
  { name: "Media Expert", category: "Usługi i multimedia", pavilion: "Aura Park" },
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
