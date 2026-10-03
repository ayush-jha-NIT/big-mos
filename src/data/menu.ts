import type { MenuCategory, MenuCategoryId, MenuItem } from "@/types/menu";

export const menuCategories = [
  { id: "burger", label: "Burger", order: 1, group: "food" },
  { id: "fries", label: "Fries", order: 2, group: "food" },
  { id: "sandwich", label: "Sandwich", order: 3, group: "food" },
  { id: "pizza", label: "Pizza", order: 4, group: "food" },
  { id: "momo", label: "Momo", order: 5, group: "food" },
  { id: "noodles", label: "Noodles", order: 6, group: "food" },
  { id: "chilli-potato", label: "Chilli Potato", order: 7, group: "food" },
  { id: "spring-roll", label: "Spring Roll", order: 8, group: "food" },
  { id: "paneer", label: "Paneer", order: 9, group: "food" },
  { id: "rice", label: "Rice", order: 10, group: "food" },
  { id: "manchurian", label: "Manchurian", order: 11, group: "food" },
  { id: "tea", label: "Tea", order: 12, group: "beverage" },
  { id: "combo", label: "Combo", order: 13, group: "food" },
  { id: "pasta", label: "Pasta", order: 14, group: "food" },
  { id: "wrap", label: "Wrap", order: 15, group: "food" },
  { id: "sweet-corn", label: "Sweet Corn", order: 16, group: "food" },
  { id: "dessert", label: "Dessert", order: 17, group: "food" },
  { id: "add-ons", label: "Add Ons", order: 18, group: "extras" },
  { id: "caffeine", label: "Caffeine", order: 19, group: "beverage" },
  { id: "mojito", label: "Mojito", order: 20, group: "beverage" },
  { id: "shakes", label: "Shakes", order: 21, group: "beverage" },
  { id: "ice-tea", label: "Ice Tea", order: 22, group: "beverage" },
] as const satisfies readonly MenuCategory[];

export const menuItems = [
  { id: "crunchy-veg", name: "Crunchy Veg", category: "burger", price: 60, vegetarian: true, available: true },
  { id: "veg-delight", name: "Veg Delight", category: "burger", price: 80, vegetarian: true, available: true },
  { id: "veg-delight-special", name: "Veg Delight Special", category: "burger", price: 90, vegetarian: true, available: true },
  { id: "veg-delight-cheese", name: "Veg Delight Cheese", category: "burger", price: 110, vegetarian: true, available: true },

  { id: "salted-fries-regular", name: "Salted Fries (Regular)", category: "fries", price: 70, vegetarian: true, available: true },
  { id: "salted-fries-large", name: "Salted Fries (Large)", category: "fries", price: 99, vegetarian: true, available: true },
  { id: "cheesy-fries", name: "Cheesy Fries", category: "fries", price: 120, vegetarian: true, available: true },

  { id: "veggies-loaded", name: "Veggies Loaded", category: "sandwich", price: 99, vegetarian: true, available: true },
  { id: "grilled-cheese", name: "Grilled Cheese", category: "sandwich", price: 99, vegetarian: true, available: true },
  { id: "corn-and-cheese", name: "Corn & Cheese", category: "sandwich", price: 110, vegetarian: true, available: true },
  { id: "paneer-tikka-sandwich", name: "Paneer Tikka Sandwich", category: "sandwich", price: 139, vegetarian: true, available: true },

  { id: "cheesy-margherita", name: "Cheesy Margherita", category: "pizza", price: 149, vegetarian: true, available: true },
  { id: "cheese-and-corn", name: "Cheese and Corn", category: "pizza", price: 149, vegetarian: true, available: true },
  { id: "veggie-crunch", name: "Veggie Crunch", category: "pizza", price: 149, vegetarian: true, available: true },
  { id: "papas-paneer", name: "Papa's Paneer", category: "pizza", price: 169, vegetarian: true, available: true },
  { id: "veggie-lovers-pizza", name: "Veggie Lovers Pizza", category: "pizza", price: 179, vegetarian: true, available: true },

  { id: "veg-steamed-momos-6pc", name: "Veg Steamed Momos (6 pc)", category: "momo", price: 99, vegetarian: true, available: true },

  { id: "veg-noodles", name: "Veg Noodles", category: "noodles", price: 99, vegetarian: true, available: true },
  { id: "schezwan-noodles", name: "Schezwan Noodles", category: "noodles", price: 120, vegetarian: true, available: true },

  { id: "chilli-potato", name: "Chilli Potato", category: "chilli-potato", price: 99, vegetarian: true, available: true },
  { id: "honey-chilli-potato", name: "Honey Chilli Potato", category: "chilli-potato", price: 129, vegetarian: true, available: true },

  { id: "veg-spring-roll", name: "Veg Spring Roll", category: "spring-roll", price: 99, vegetarian: true, available: true },

  { id: "chilli-paneer-dry", name: "Chilli Paneer (Dry)", category: "paneer", price: 129, vegetarian: true, available: true },
  { id: "chilli-paneer-gravy", name: "Chilli Paneer (Gravy)", category: "paneer", price: 149, vegetarian: true, available: true },

  { id: "veg-fried-rice", name: "Veg Fried Rice", category: "rice", price: 99, vegetarian: true, available: true },
  { id: "paneer-fried-rice", name: "Paneer Fried Rice", category: "rice", price: 129, vegetarian: true, available: true },

  { id: "veg-manchurian-dry", name: "Veg Manchurian (Dry)", category: "manchurian", price: 99, vegetarian: true, available: true },
  { id: "veg-manchurian-gravy", name: "Veg manchurian (Gravy)", category: "manchurian", price: 129, vegetarian: true, available: true },

  { id: "masala-tea", name: "Masala Tea", category: "tea", price: 40, vegetarian: true, available: true },
  { id: "cardamom-tea", name: "Cardamom Tea", category: "tea", price: 40, vegetarian: true, available: true },
  { id: "lemon-grass-tea", name: "Lemon Grass Tea", category: "tea", price: 40, vegetarian: true, available: true },

  {
    id: "combo-crunchy-veg-hot-coffee-fries",
    name: "Crunchy Veg + Hot Coffee + Regular Fries",
    category: "combo",
    price: 169,
    vegetarian: true,
    available: true,
    note: "Save Rs. 30",
  },
  {
    id: "combo-crunchy-veg-cold-coffee-fries",
    name: "Crunchy Veg + Cold Coffee + Regular Fries",
    category: "combo",
    price: 199,
    vegetarian: true,
    available: true,
    note: "Save Rs. 30",
  },
  {
    id: "combo-veggie-crunch-mojito-fries",
    name: "Veggie Crunch + Mojito + Fries",
    category: "combo",
    price: 269,
    vegetarian: true,
    available: true,
    note: "Save Rs.50",
  },

  { id: "redsauce-pasta", name: "RedSauce Pasta", category: "pasta", price: 129, vegetarian: true, available: true },
  { id: "white-sauce-pasta", name: "White Sauce Pasta", category: "pasta", price: 149, vegetarian: true, available: true },
  { id: "arrabiata-pasta", name: "Arrabiata pasta", category: "pasta", price: 149, vegetarian: true, available: true },

  { id: "vegetable-wrap", name: "Vegetable Wrap", category: "wrap", price: 99, vegetarian: true, available: true },
  { id: "paneer-vegetable-wrap", name: "Paneer Vegetable Wrap", category: "wrap", price: 120, vegetarian: true, available: true },

  { id: "salted-corn", name: "Salted Corn", category: "sweet-corn", price: 60, vegetarian: true, available: true },
  { id: "maxicorn-corn", name: "Maxicorn Corn", category: "sweet-corn", price: 80, vegetarian: true, available: true },

  { id: "chocolava", name: "Chocolava", category: "dessert", price: 109, vegetarian: true, available: true },
  { id: "brownie", name: "Brownie", category: "dessert", price: 129, vegetarian: true, available: true },
  { id: "brownie-with-ice-cream", name: "Brownie with Ice Cream", category: "dessert", price: 149, vegetarian: true, available: true },

  { id: "mayo-dip", name: "Mayo Dip", category: "add-ons", price: 10, vegetarian: true, available: true },
  { id: "schezwan-dip", name: "Schezwan Dip", category: "add-ons", price: 10, vegetarian: true, available: true },
  { id: "cheese-dip", name: "Cheese Dip", category: "add-ons", price: 15, vegetarian: true, available: true },
  { id: "with-cheese-liquid", name: "With Cheese (Liquid)", category: "add-ons", price: 15, vegetarian: true, available: true },
  { id: "tandoori-dip", name: "Tandoori Dip", category: "add-ons", price: 20, vegetarian: true, available: true },
  { id: "ice-cream-shake", name: "Ice Cream (Shake)", category: "add-ons", price: 30, vegetarian: true, available: true },
  { id: "extra-cheese-pizza", name: "Extra Cheese (Pizza)", category: "add-ons", price: 40, vegetarian: true, available: true },
  { id: "club-sandwich", name: "Club Sandwich", category: "add-ons", price: 50, vegetarian: true, available: true },

  { id: "black-coffee", name: "Black Coffee", category: "caffeine", price: 40, vegetarian: true, available: true },
  { id: "classic-creamy-coffee", name: "Classic Creamy Coffee", category: "caffeine", price: 60, vegetarian: true, available: true },
  { id: "classic-cold-coffee", name: "Classic Cold Coffee", category: "caffeine", price: 99, vegetarian: true, available: true },
  { id: "caramel-mocha", name: "Caramel Mocha", category: "caffeine", price: 99, vegetarian: true, available: true },

  { id: "passion-fruit-honey-soda", name: "Passion fruit Honey Soda", category: "mojito", price: 99, vegetarian: true, available: true },
  { id: "green-apple-soda", name: "Green Apple Soda", category: "mojito", price: 99, vegetarian: true, available: true },
  { id: "seablue-soda", name: "Seablue Soda", category: "mojito", price: 99, vegetarian: true, available: true },
  { id: "mint-mojito", name: "Mint Mojito", category: "mojito", price: 99, vegetarian: true, available: true },
  { id: "blue-berry-mojito", name: "Blue Berry Mojito", category: "mojito", price: 99, vegetarian: true, available: true },
  { id: "water-mellon", name: "Water Mellon", category: "mojito", price: 99, vegetarian: true, available: true },

  { id: "vanilla-shake", name: "Vanilla Shake", category: "shakes", price: 99, vegetarian: true, available: true },
  { id: "strawberry-shake", name: "Strawberry Shake", category: "shakes", price: 99, vegetarian: true, available: true },
  { id: "chocolate-shake", name: "Chocolate Shake", category: "shakes", price: 129, vegetarian: true, available: true },
  { id: "oreo-shake", name: "Oreo Shake", category: "shakes", price: 129, vegetarian: true, available: true },
  { id: "kitkat-shake", name: "Kitkat Shake", category: "shakes", price: 129, vegetarian: true, available: true },

  { id: "lemon-ice-tea", name: "Lemon Ice Tea", category: "ice-tea", price: 99, vegetarian: true, available: true },
  { id: "peach-ice-tea", name: "Peach Ice Tea", category: "ice-tea", price: 99, vegetarian: true, available: true },
  { id: "apple-lemon-ice-tea", name: "Apple Lemon Ice Tea", category: "ice-tea", price: 99, vegetarian: true, available: true },
] as const satisfies readonly MenuItem[];

export function getMenuItemsByCategory(category: MenuCategoryId) {
  return menuItems.filter((item) => item.category === category);
}

export function getMenuItemById(id: string) {
  return menuItems.find((item) => item.id === id);
}

export function getMenuCategoryById(id: MenuCategoryId) {
  return menuCategories.find((category) => category.id === id);
}
