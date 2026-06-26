export const image = (id, w = 1400, h = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=85`;

export const socialIcons = [
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    src: "https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/01c3aff52f2a4dffa526d7a9843d46ea.png",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com",
    src: "https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0fdef751204647a3bbd7eaa2827ed4f9.png",
  },
];

export const frequentlyBoughtMenuItems = [
  {
    type: "Signature",
    name: "Charred Brisket Bun",
    copy: "Slow-smoked beef, onion jam, pickled mustard seed, toasted milk bun.",
    price: "$18",
    img: image("photo-1568901346375-23c9450c58cd", 900, 900),
  },
  {
    type: "Side",
    name: "Green Market Salad",
    copy: "Crisp leaves, herbs, shaved fennel, citrus vinaigrette.",
    price: "$12",
    img: image("photo-1512621776951-a57141f2eefd", 900, 900),
  },
  {
    type: "Dessert",
    name: "Salted Honey Tart",
    copy: "Buttery crust, whipped creme fraiche, smoked sea salt.",
    price: "$10",
    img: image("photo-1519915028121-7d3463d20b13", 900, 900),
  },
  {
    type: "Drink",
    name: "Garden Highball",
    copy: "Cucumber, mint, lemon, ginger, sparkling tonic.",
    price: "$11",
    img: image("photo-1544145945-f90425340c7e", 900, 900),
  },
];

export const menuSections = [
  {
    title: "Buns",
    items: [
      frequentlyBoughtMenuItems[0],
      {
        type: "Signature",
        name: "Honey Butter Rib Bun",
        copy: "Glazed short rib, cultured honey butter, shaved onion, soft milk bun.",
        price: "$19",
        img: image("photo-1565299507177-b0ac66763828", 900, 900),
      },
      {
        type: "Signature",
        name: "Coal-Seared Bunvillin Burger",
        copy: "Dry-aged beef, smoked tomato relish, melted cheddar, brioche crown.",
        price: "$21",
        img: image("photo-1551782450-a2132b4ba21d", 900, 900),
      },
    ],
  },
  {
    title: "Plates",
    items: [
      frequentlyBoughtMenuItems[1],
      {
        type: "Plate",
        name: "Fire Garden Plate",
        copy: "Charred seasonal greens, whipped herb cheese, toasted seeds, lemon ash.",
        price: "$16",
        img: image("photo-1546069901-ba9599a7e63c", 900, 900),
      },
      {
        type: "Plate",
        name: "Roasted Chicken Table",
        copy: "Herb-roasted chicken, crisp potatoes, greens, pan sauce.",
        price: "$26",
        img: image("photo-1544025162-d76694265947", 900, 900),
      },
    ],
  },
  {
    title: "Sweets & Drinks",
    items: [
      frequentlyBoughtMenuItems[2],
      frequentlyBoughtMenuItems[3],
      {
        type: "Drink",
        name: "Smoke & Citrus Spritz",
        copy: "Charred orange, lime, bitters, sparkling wine.",
        price: "$13",
        img: image("photo-1551538827-9c037cb4f32a", 900, 900),
      },
    ],
  },
];

const breakfastItems = [
  {
    type: "Breakfast",
    name: "Soft Egg Morning Bun",
    copy: "Folded egg, herb cheese, smoked tomato, toasted milk bun.",
    price: "$14",
    img: image("photo-1525351484163-7529414344d8", 900, 900),
  },
  {
    type: "Breakfast",
    name: "Maple Butter Toast",
    copy: "Thick-cut toast, whipped maple butter, berries, toasted grains.",
    price: "$12",
    img: image("photo-1484723091739-30a097e8f929", 900, 900),
  },
  {
    type: "Breakfast",
    name: "Charred Greens Omelet",
    copy: "Farm eggs, fire-wilted greens, brassica relish, aged cheddar.",
    price: "$15",
    img: image("photo-1510693206972-df098062cb71", 900, 900),
  },
  {
    type: "Breakfast",
    name: "Honey Oat Bowl",
    copy: "Steel-cut oats, citrus, toasted seeds, local honey.",
    price: "$11",
    img: image("photo-1517673132405-a56a62b18caf", 900, 900),
  },
];

const drinksItems = [
  frequentlyBoughtMenuItems[3],
  {
    type: "Drink",
    name: "Smoke & Citrus Spritz",
    copy: "Charred orange, lime, bitters, sparkling wine.",
    price: "$13",
    img: image("photo-1551538827-9c037cb4f32a", 900, 900),
  },
  {
    type: "Drink",
    name: "Brass Iced Tea",
    copy: "Black tea, peach, lemon thyme, crushed ice.",
    price: "$8",
    img: image("photo-1499638673689-79a0b5115d87", 900, 900),
  },
  {
    type: "Drink",
    name: "Velvet Espresso Tonic",
    copy: "Cold espresso, tonic, brown sugar, orange peel.",
    price: "$9",
    img: image("photo-1514432324607-a09d9b4aefdd", 900, 900),
  },
];

export const menuBooks = [
  {
    id: "todays-special",
    title: "Today's Special",
    kicker: "Limited fire-table plates",
    coverImage: image("photo-1559847844-5315695dadae", 900, 1200),
    pages: [
      {
        title: "Chef's Table",
        note: "A short run of plates built around the best market arrival of the day.",
        image: image("photo-1559847844-5315695dadae", 1100, 900),
        items: [
          {
            type: "Special",
            name: "Giant River Prawn Plate",
            copy: "Coal-roasted prawns, saffron rice, burnt lemon, herb oil.",
            price: "$32",
            img: image("photo-1559847844-5315695dadae", 900, 900),
          },
          {
            type: "Special",
            name: "Boiled Crab Butter Bun",
            copy: "Sweet crab, brown butter, celery leaf, toasted soft bun.",
            price: "$24",
            img: image("photo-1559737558-2f5a35f4523b", 900, 900),
          },
        ],
      },
      {
        title: "Today Only",
        note: "Ask the table team for the limited pour pairing.",
        image: image("photo-1600891964599-f61ba0e24092", 1100, 900),
        items: [
          {
            type: "Special",
            name: "Fire Garden Grain Bowl",
            copy: "Charred roots, toasted grains, herb tahini, crisp shallot.",
            price: "$18",
            img: image("photo-1546069901-ba9599a7e63c", 900, 900),
          },
          {
            type: "Sweet",
            name: "Warm Honey Cake",
            copy: "Brown butter cake, smoked honey, cultured cream.",
            price: "$12",
            img: image("photo-1464305795204-6f5bbfc7fb81", 900, 900),
          },
        ],
      },
    ],
  },
  {
    id: "main",
    title: "Main",
    kicker: "Buns, plates, and sides",
    coverImage: image("photo-1544025162-d76694265947", 900, 1200),
    pages: [
      {
        title: "Signature Buns",
        note: "Soft bread, smoke, acid, and slow-cooked fillings.",
        image: image("photo-1568901346375-23c9450c58cd", 1100, 900),
        items: menuSections[0].items,
      },
      {
        title: "Plates",
        note: "Built for the center of the table or a proper solo dinner.",
        image: image("photo-1544025162-d76694265947", 1100, 900),
        items: menuSections[1].items,
      },
      {
        title: "Sweets",
        note: "A small finish after the fire.",
        image: image("photo-1519915028121-7d3463d20b13", 1100, 900),
        items: menuSections[2].items.slice(0, 1),
      },
    ],
  },
  {
    id: "breakfast",
    title: "Breakfast",
    kicker: "Morning buns and slow starts",
    coverImage: image("photo-1484723091739-30a097e8f929", 900, 1200),
    pages: [
      {
        title: "Breakfast Time",
        note: "Warm, bright plates for the first table of the day.",
        image: image("photo-1484723091739-30a097e8f929", 1100, 900),
        items: breakfastItems.slice(0, 2),
      },
      {
        title: "Morning Plates",
        note: "Light greens, soft eggs, toasted grains, and honey.",
        image: image("photo-1525351484163-7529414344d8", 1100, 900),
        items: breakfastItems.slice(2),
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    kicker: "Spritzes, tonics, and tea",
    coverImage: image("photo-1551538827-9c037cb4f32a", 900, 1200),
    pages: [
      {
        title: "Cold Glasses",
        note: "Bright drinks to reset the table between smoky bites.",
        image: image("photo-1551538827-9c037cb4f32a", 1100, 900),
        items: drinksItems.slice(0, 2),
      },
      {
        title: "Low & Slow",
        note: "Tea, tonic, coffee, and late-afternoon pours.",
        image: image("photo-1499638673689-79a0b5115d87", 1100, 900),
        items: drinksItems.slice(2),
      },
    ],
  },
];

export const events = [
  { title: "Fire Table Fridays", meta: "Every Friday · 7 PM", copy: "A shared table menu built around live-fire specials." },
  { title: "Sunday Bun Brunch", meta: "Sundays · 10 AM", copy: "Soft buns, eggs, fresh greens, and bright low-proof drinks." },
];

export const chefSignatures = [
  {
    name: "Coal-Seared Bunvillin Burger",
    note: "Dry-aged beef, smoked tomato relish, melted cheddar, brioche crown.",
    tag: "Chef Mara",
    img: image("photo-1551782450-a2132b4ba21d", 900, 1100),
  },
  {
    name: "Fire Garden Plate",
    note: "Charred seasonal greens, whipped herb cheese, toasted seeds, lemon ash.",
    tag: "Market Pick",
    img: image("photo-1546069901-ba9599a7e63c", 900, 1100),
  },
  {
    name: "Honey Butter Rib Bun",
    note: "Glazed short rib, cultured honey butter, shaved onion, soft milk bun.",
    tag: "House Favorite",
    img: image("photo-1565299507177-b0ac66763828", 900, 1100),
  },
];
