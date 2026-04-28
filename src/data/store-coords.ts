// Coordinates (in % of map image) for stores on the interactive site plan.
// Map image: src/assets/site-map.png (1493 x 1079)
// Each entry: { x, y } as percentages (0-100). Optional w/h for box dimensions.

export interface StoreCoord {
  x: number; // center x %
  y: number; // center y %
  w?: number; // width % (default 6)
  h?: number; // height % (default 5)
}

// Coordinates were estimated from the map image. Tweak as needed.
export const storeCoords: Record<string, StoreCoord> = {
  // ===== BRAMA JURY (top-left cluster) =====
  "H&M": { x: 11.5, y: 8.5, w: 9, h: 7 },
  "Rossmann": { x: 18.5, y: 8.5, w: 4, h: 5 },
  "Douglas": { x: 21.5, y: 10, w: 3, h: 7 },
  "Agata": { x: 25, y: 8, w: 3.5, h: 4 },
  "Greenpoint": { x: 29.5, y: 8, w: 4, h: 4 },
  "The Flame": { x: 33, y: 9.5, w: 3.5, h: 4 },
  "Planet Cinema": { x: 36, y: 10, w: 5, h: 6 },
  "Apart": { x: 8, y: 14, w: 4, h: 4 },
  "Briju": { x: 11, y: 15, w: 2.5, h: 3 },
  "Diverse": { x: 15, y: 16, w: 5, h: 3 },
  "Sizeer": { x: 20, y: 16, w: 3, h: 3 },
  "4F": { x: 23, y: 16, w: 3, h: 3 },
  "Ochnik": { x: 26, y: 16, w: 3, h: 3 },
  "Tatuum": { x: 30, y: 16, w: 3, h: 3 },
  "Empik": { x: 33, y: 16, w: 3, h: 3 },
  "Planet Games": { x: 38, y: 14.5, w: 4, h: 3 },
  "Chasta": { x: 35, y: 18.5, w: 5, h: 4 },
  "Sinsay": { x: 35.5, y: 24, w: 6, h: 4 },
  "Nexterio": { x: 36, y: 29, w: 5, h: 4 },
  "Hebe": { x: 36, y: 33, w: 3, h: 3 },
  "New Yorker": { x: 36, y: 38, w: 6, h: 4 },
  "Maxi Zoo": { x: 16, y: 35, w: 5, h: 3 },
  "Intermarché": { x: 23, y: 39, w: 9, h: 7 },
  "Villaro": { x: 39, y: 42, w: 3, h: 4 },
  "One Gym": { x: 43, y: 43, w: 4, h: 4 },

  // ===== M PARK (top-right cluster) =====
  "Castorama": { x: 60, y: 22, w: 13, h: 12 },
  "TEDi": { x: 71, y: 18, w: 3, h: 3 },
  "Smyk": { x: 74, y: 18, w: 3, h: 3 },
  "HalfPrice": { x: 78, y: 18, w: 5, h: 3 },
  "Worldbox": { x: 84, y: 18, w: 4, h: 3 },
  "CCC": { x: 86, y: 24, w: 5, h: 5 },
  "Rossmann (M Park)": { x: 86, y: 30, w: 5, h: 4 },
  "Lidl": { x: 87, y: 36, w: 5, h: 4 },

  // ===== AURA PARK (bottom cluster) =====
  "Shell": { x: 38, y: 62, w: 3, h: 4 },
  "McDonald’s": { x: 46, y: 62, w: 4, h: 4 },
  "KFC": { x: 53, y: 69, w: 4, h: 3 },
  "Biedronka": { x: 47, y: 78, w: 6, h: 6 },
  "NKD": { x: 41, y: 90, w: 4, h: 5 },
  "dm": { x: 45, y: 90, w: 4, h: 5 },
  "Dealz": { x: 49, y: 90, w: 4, h: 5 },
  "Pepco": { x: 53, y: 90, w: 4, h: 5 },
  "Martes Sport": { x: 57, y: 90, w: 4, h: 5 },
  "Media Expert": { x: 61, y: 88, w: 4, h: 7 },
};
