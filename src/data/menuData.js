import { image } from "../data";
import comboMenuCover from "../assets/menu-cover/combo-menu.png";
import dessertsMenuCover from "../assets/menu-cover/desserts-menu.png";
import drinksMenuCover from "../assets/menu-cover/drinks-menu.png";
import foodMenuCover from "../assets/menu-cover/food-menu.png";
import todaysSpecialCover from "../assets/menu-cover/todays-special.png";

export const menus = [
  {
    id: "food",
    title: "Food Menu",
    description: "Signature dishes, mains, sides, and chef favorites.",
    coverImage: foodMenuCover,
    sections: [
      {
        id: "starters",
        title: "Starters",
        description: "Small plates to begin your meal.",
        items: [
          {
            id: "grilled-chicken-skewers",
            name: "Grilled Chicken Skewers",
            description: "Tender grilled chicken served with pepper-herb house sauce.",
            price: "GHS 85",
            image: image("photo-1529692236671-f1f6cf9683ba", 900, 700),
            tags: ["Popular"],
          },
          {
            id: "charred-market-salad",
            name: "Charred Market Salad",
            description: "Crisp greens, roasted corn, avocado, herbs, and citrus vinaigrette.",
            price: "GHS 68",
            image: image("photo-1512621776951-a57141f2eefd", 900, 700),
            tags: ["Vegetarian", "New"],
          },
          {
            id: "plantain-bites",
            name: "Golden Plantain Bites",
            description: "Sweet ripe plantain with spiced tomato relish.",
            price: "GHS 48",
            image: "",
            tags: ["Vegetarian"],
          },
        ],
      },
      {
        id: "main-dishes",
        title: "Main Dishes",
        description: "Generous plates from the grill and kitchen.",
        items: [
          {
            id: "coal-seared-burger",
            name: "Coal-Seared Bunvillin Burger",
            description: "Dry-aged beef, smoked tomato relish, melted cheddar, pickles, and brioche.",
            price: "GHS 145",
            image: image("photo-1551782450-a2132b4ba21d", 900, 700),
            tags: ["Popular", "Chef's Pick"],
          },
          {
            id: "herb-roasted-chicken",
            name: "Herb Roasted Chicken",
            description: "Half chicken roasted with garden herbs, crispy potatoes, greens, and pan sauce.",
            price: "GHS 165",
            image: image("photo-1544025162-d76694265947", 900, 700),
            tags: ["Chef's Pick"],
          },
          {
            id: "pepper-steak-rice",
            name: "Pepper Steak Rice Bowl",
            description:
              "Seared steak, jollof-style rice, grilled vegetables, fermented chili butter, and scallions.",
            price: "GHS 155",
            image: image("photo-1600891964092-4316c288032e", 900, 700),
            tags: ["Spicy"],
          },
        ],
      },
      {
        id: "sides",
        title: "Sides",
        description: "Easy additions for the table.",
        items: [
          {
            id: "truffle-fries",
            name: "Truffle Parmesan Fries",
            description: "Crisp fries, parmesan, herbs, and roasted garlic aioli.",
            price: "GHS 62",
            image: image("photo-1576107232684-1279f390859f", 900, 700),
            tags: ["Popular", "Vegetarian"],
          },
          {
            id: "seasonal-vegetables",
            name: "Seasonal Vegetables",
            description: "Fire-kissed vegetables with lemon oil.",
            price: "",
            image: image("photo-1540420773420-3366772f4999", 900, 700),
            tags: [],
          },
        ],
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks Menu",
    description: "Fresh juices, cocktails, mocktails, coffee, and easy table pours.",
    coverImage: drinksMenuCover,
    sections: [
      {
        id: "mocktails",
        title: "Mocktails",
        description: "Bright, chilled, and alcohol-free.",
        items: [
          {
            id: "garden-highball",
            name: "Garden Highball",
            description: "Cucumber, mint, lemon, ginger, and sparkling tonic.",
            price: "GHS 55",
            image: image("photo-1544145945-f90425340c7e", 900, 700),
            tags: ["Popular"],
          },
          {
            id: "hibiscus-cooler",
            name: "Hibiscus Cooler",
            description: "Sobolo, lime, orange peel, rosemary, and crushed ice.",
            price: "GHS 48",
            image: image("photo-1622597467836-f3285f2131b8", 900, 700),
            tags: ["New"],
          },
        ],
      },
      {
        id: "cocktails",
        title: "Cocktails",
        description: "Balanced pours for dinner and late tables.",
        items: [
          {
            id: "smoke-citrus-spritz",
            name: "Smoke & Citrus Spritz",
            description: "Charred orange, lime, bitters, and sparkling wine.",
            price: "GHS 92",
            image: image("photo-1551538827-9c037cb4f32a", 900, 700),
            tags: ["Chef's Pick"],
          },
          {
            id: "spiced-pineapple-margarita",
            name: "Spiced Pineapple Margarita",
            description: "Pineapple, tequila, lime, chili salt, and agave.",
            price: "GHS 98",
            image: image("photo-1551024709-8f23befc6f87", 900, 700),
            tags: ["Spicy"],
          },
        ],
      },
      {
        id: "coffee-tea",
        title: "Coffee & Tea",
        description: "Slow sips and clean finishes.",
        items: [
          {
            id: "velvet-espresso-tonic",
            name: "Velvet Espresso Tonic",
            description: "Cold espresso, tonic, brown sugar, and orange peel.",
            price: "GHS 46",
            image: image("photo-1514432324607-a09d9b4aefdd", 900, 700),
            tags: [],
          },
        ],
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    description: "Sweet endings with chocolate, fruit, cream, and warm pastry.",
    coverImage: dessertsMenuCover,
    sections: [
      {
        id: "cakes",
        title: "Cakes",
        description: "Rich slices and plated favorites.",
        items: [
          {
            id: "warm-chocolate-cake",
            name: "Warm Chocolate Cake",
            description: "Soft-centered chocolate cake with berry compote and vanilla cream.",
            price: "GHS 78",
            image: image("photo-1606313564200-e75d5e30476c", 900, 700),
            tags: ["Popular"],
          },
          {
            id: "salted-honey-tart",
            name: "Salted Honey Tart",
            description: "Buttery crust, whipped creme fraiche, smoked sea salt, and citrus zest.",
            price: "GHS 70",
            image: image("photo-1519915028121-7d3463d20b13", 900, 700),
            tags: ["Chef's Pick"],
          },
        ],
      },
      {
        id: "cold-desserts",
        title: "Cold Desserts",
        description: "Light, creamy, and refreshing.",
        items: [
          {
            id: "mango-panna-cotta",
            name: "Mango Panna Cotta",
            description: "Vanilla cream, mango glaze, toasted coconut, and lime.",
            price: "GHS 66",
            image: image("photo-1488477181946-6428a0291777", 900, 700),
            tags: ["New"],
          },
        ],
      },
    ],
  },
  {
    id: "specials",
    title: "Specials",
    description: "Limited plates built around market finds and chef ideas.",
    coverImage: todaysSpecialCover,
    sections: [
      {
        id: "chef-specials",
        title: "Chef Specials",
        description: "Limited dishes from the kitchen team.",
        items: [
          {
            id: "giant-prawn-plate",
            name: "Giant River Prawn Plate",
            description: "Coal-roasted prawns, saffron rice, burnt lemon, herb oil, and chili crunch.",
            price: "GHS 210",
            image: image("photo-1559847844-5315695dadae", 900, 700),
            tags: ["Chef's Pick", "Spicy"],
          },
          {
            id: "short-rib-bun",
            name: "Honey Butter Short Rib Bun",
            description: "Glazed short rib, cultured honey butter, shaved onion, and soft milk bun.",
            price: "GHS 135",
            image: image("photo-1565299507177-b0ac66763828", 900, 700),
            tags: ["Popular"],
          },
        ],
      },
      {
        id: "today-only",
        title: "Today Only",
        description: "Small-run plates that change with the market.",
        items: [
          {
            id: "fire-garden-grain-bowl",
            name: "Fire Garden Grain Bowl",
            description: "Charred roots, toasted grains, herb tahini, crisp shallot, and garden leaves.",
            price: "GHS 95",
            image: image("photo-1546069901-ba9599a7e63c", 900, 700),
            tags: ["Vegetarian", "New"],
          },
        ],
      },
    ],
  },
  {
    id: "combos",
    title: "Combos",
    description: "Complete pairings for lunch, groups, and easy ordering.",
    coverImage: comboMenuCover,
    sections: [
      {
        id: "lunch-combos",
        title: "Lunch Combos",
        description: "Fast combinations with a main, side, and drink.",
        items: [
          {
            id: "burger-fries-cooler",
            name: "Burger, Fries & Cooler",
            description: "Coal-seared burger, truffle parmesan fries, and hibiscus cooler.",
            price: "GHS 210",
            image: image("photo-1568901346375-23c9450c58cd", 900, 700),
            tags: ["Popular"],
          },
          {
            id: "salad-skewers-tea",
            name: "Skewers, Salad & Iced Tea",
            description: "Chicken skewers, market salad, and brass iced tea.",
            price: "GHS 175",
            image: image("photo-1555939594-58d7cb561ad1", 900, 700),
            tags: [],
          },
        ],
      },
      {
        id: "group-combos",
        title: "Group Combos",
        description: "Built for sharing around the table.",
        items: [
          {
            id: "family-fire-table",
            name: "Family Fire Table",
            description:
              "Roasted chicken, prawn plate, two sides, four drinks, and two dessert plates for sharing.",
            price: "GHS 690",
            image: image("photo-1600891964599-f61ba0e24092", 900, 700),
            tags: ["Chef's Pick"],
          },
        ],
      },
    ],
  },
];
