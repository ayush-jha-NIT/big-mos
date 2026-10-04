export const MENU_CATEGORY_IDS = [
  "burger",
  "fries",
  "sandwich",
  "pizza",
  "momo",
  "noodles",
  "chilli-potato",
  "spring-roll",
  "paneer",
  "rice",
  "manchurian",
  "tea",
  "combo",
  "pasta",
  "wrap",
  "sweet-corn",
  "dessert",
  "add-ons",
  "caffeine",
  "mojito",
  "shakes",
  "ice-tea",
] as const;

export type MenuCategoryId = (typeof MENU_CATEGORY_IDS)[number];

export interface MenuCategory {
  id: MenuCategoryId;
  label: string;
  order: number;
  group?: "food" | "beverage" | "extras";
}

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategoryId;
  price: number;
  vegetarian: true;
  available: boolean;
  note?: string;
  bestseller?: boolean;
}
