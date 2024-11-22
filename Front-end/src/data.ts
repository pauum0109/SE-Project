type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Matcha Latte",
    desc: "Indulge in the velvety smoothness of our matcha latte, a harmonious blend of creamy milk and vibrant green tea for a serene and energizing escape.",
    img: "/unnamed.jpg",
    price: 5,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Milk Coffee",
    desc: "Savor the rich, comforting embrace of our creamy milk coffee, a perfect blend of bold coffee and velvety milk for a delightful caffeine fix.",
    img: "/images (1).jfif",
    price: 3,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Strawberry Milk Shake",
    desc: "Quench your thirst and satisfy your sweet cravings with our luscious Strawberry Milkshake. Made with fresh, ripe strawberries blended to perfection with creamy milk and a touch of sweetness, every sip is a burst of fruity flavor.",
    img: "/800px-Strawberry_milk_shake_(cropped).jpg",
    price: 7,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Pesto Primavera",
    desc: "A vibrant symphony of fresh vegetables and creamy pesto sauce, a delightful dance of flavors for your palate.",
    img: "/temporary/p10.png",
    price: 11,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Mozzarella Sticks",
    desc: "Our Mozzarella Sticks are the ultimate comfort food. Golden-brown, crispy on the outside, and oozing with melted mozzarella cheese on the inside, they're the perfect snack to satisfy your cravings.",
    img: "/Homemade-Mozzarella-Sticks-9.jpeg",
    price: 10,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Ramen",
    desc: "Warm up your soul with a steaming bowl of our delicious ramen. Rich, flavorful broth, tender noodles, and your choice of toppings. Every spoonful is a moment of pure bliss.",
    img: "/ramen.jpg",
    price: 12,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 7,
    title: "Wings",
    desc: "Crispy, golden-brown chicken wings, tossed in your favorite flavor, a finger-licking good treat for any occasion.",
    img: "/wings.jpg",
    price: 12,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 8,
    title: "Spicy Arrabbiata",
    desc: "A fiery blend of tomatoes, chili peppers, and garlic, creating a robust and flavorful sauce that will tantalize your taste buds.",
    img: "/temporary/p4.png",
    price: 12,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 9,
    title: "Jalapeño Fiesta",
    desc: "Ignite your taste buds with a fiery kick! This burger features a succulent beef patty, fiery jalapeños, pepper jack cheese, and a zesty chipotle mayo sauce , and all the classic fixings on a toasted bun.",
    img: "/temporary/p5.png",
    price: 12,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
];


export const pizzas: Products = [
  {
    id: 1,
    title: "Matcha Latte",
    desc: "Indulge in the velvety smoothness of our matcha latte, a harmonious blend of creamy milk and vibrant green tea for a serene and energizing escape.",
    img: "/unnamed.jpg",
    price: 5,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Milk Coffee",
    desc: "Savor the rich, comforting embrace of our creamy milk coffee, a perfect blend of bold coffee and velvety milk for a delightful caffeine fix.",
    img: "/images (1).jfif",
    price: 3,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Strawberry Milk Shake",
    desc: "Quench your thirst and satisfy your sweet cravings with our luscious Strawberry Milkshake. Made with fresh, ripe strawberries blended to perfection with creamy milk and a touch of sweetness, every sip is a burst of fruity flavor.",
    img: "/800px-Strawberry_milk_shake_(cropped).jpg",
    price: 7,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Pesto Primavera",
    desc: "A vibrant symphony of fresh vegetables and creamy pesto sauce, a delightful dance of flavors for your palate.",
    img: "/temporary/p10.png",
    price: 11,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Mozzarella Sticks",
    desc: "Our Mozzarella Sticks are the ultimate comfort food. Golden-brown, crispy on the outside, and oozing with melted mozzarella cheese on the inside, they're the perfect snack to satisfy your cravings.",
    img: "/Homemade-Mozzarella-Sticks-9.jpeg",
    price: 10,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Ramen",
    desc: "Warm up your soul with a steaming bowl of our delicious ramen. Rich, flavorful broth, tender noodles, and your choice of toppings. Every spoonful is a moment of pure bliss.",
    img: "/ramen.jpg",
    price: 12,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 7,
    title: "Wings",
    desc: "Crispy, golden-brown chicken wings, tossed in your favorite flavor, a finger-licking good treat for any occasion.",
    img: "/wings.jpg",
    price: 12,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 8,
    title: "Spicy Arrabbiata",
    desc: "A fiery blend of tomatoes, chili peppers, and garlic, creating a robust and flavorful sauce that will tantalize your taste buds.",
    img: "/temporary/p4.png",
    price: 12,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 9,
    title: "Jalapeño Fiesta",
    desc: "Ignite your taste buds with a fiery kick! This burger features a succulent beef patty, fiery jalapeños, pepper jack cheese, and a zesty chipotle mayo sauce , and all the classic fixings on a toasted bun.",
    img: "/temporary/p5.png",
    price: 12,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
];

export const singleProduct: Product = {
  id: 1,
  title: "Matcha Latte",
  desc: "Indulge in the serene harmony of our matcha latte, a perfect blend of earthy flavors and creamy milk, offering a moment of tranquility and revitalization.",
  img: "/unnamed.jpg",
  price: 5,
  options: [
    {
      title: "Small",
      additionalPrice: 0,
    },
    {
      title: "Medium",
      additionalPrice: 4,
    },
    {
      title: "Large",
      additionalPrice: 6,
    },
  ],
};


type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "Appetizer",
    title: "Appetizer",
    desc: "",
    img: "/FreshSpringRolls_Shot5_82.jpg",
    color: "black",
  },
  {
    id: 2,
    slug: "maincourses",
    title: "Maincourses",
    desc: "",
    img: "/ramen.jpg",
    color: "black",
  },
  {
    id: 3,
    slug: "Drinks",
    title: "Drinks",
    desc: "",
    img: "/matcha-latte-co-ngon-khong.jpg",
    color: "black",
  },
];
