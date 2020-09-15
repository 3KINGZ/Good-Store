import formatNaira from "format-to-naira";
import flatNikeSneakers from "../../images/products/men/shoes/menshoe1.jpg";
import flips from "../../images/products/men/shoes/menshoe2.jpg";
import sandal from "../../images/products/men/shoes/menshoe3.jpg";
import nikeAirForce from "../../images/products/men/shoes/menshoe4.jpg";
import browns from "../../images/products/men/shoes/menshoe5.jpg";
import mocassins from "../../images/products/men/shoes/menshoe6.jpg";
import brogues from "../../images/products/men/shoes/menshoe7.jpg";
import polishedBlacks from "../../images/products/men/shoes/menshoe8.jpg";

const menShoes = [
  {
    id: 11,
    title: "Flat Nike Sneakers",
    type: "shoe",
    description:
      "Sunt minim duis sunt ex id. In do commodo est ad minim nisi ad ullamco commodo deserunt. Lorem do officia eu laborum sint do laboris. In incididunt ullamco do duis. Veniam esse nisi in ad culpa ullamco. Ullamco deserunt duis officia reprehenderit nostrud eiusmod. Qui nisi eu minim mollit dolor dolor nostrud duis.",
    price: formatNaira(8000),
    image: flatNikeSneakers,
  },
  {
    id: 12,
    title: "flips",
    type: "shoe",
    description:
      "Sunt minim duis sunt ex id. In do commodo est ad minim nisi ad ullamco commodo deserunt. Lorem do officia eu laborum sint do laboris. In incididunt ullamco do duis. Veniam esse nisi in ad culpa ullamco. Ullamco deserunt duis officia reprehenderit nostrud eiusmod. Qui nisi eu minim mollit dolor dolor nostrud duis.",
    price: formatNaira(3000),
    image: flips,
  },
  {
    id: 13,
    title: "Sandal",
    type: "shoe",
    description:
      "Sunt minim duis sunt ex id. In do commodo est ad minim nisi ad ullamco commodo deserunt. Lorem do officia eu laborum sint do laboris. In incididunt ullamco do duis. Veniam esse nisi in ad culpa ullamco. Ullamco deserunt duis officia reprehenderit nostrud eiusmod. Qui nisi eu minim mollit dolor dolor nostrud duis.",
    price: formatNaira(5000),
    image: sandal,
  },
  {
    id: 14,
    title: "Nike Air Force",
    type: "shoe",
    description:
      "Sunt minim duis sunt ex id. In do commodo est ad minim nisi ad ullamco commodo deserunt. Lorem do officia eu laborum sint do laboris. In incididunt ullamco do duis. Veniam esse nisi in ad culpa ullamco. Ullamco deserunt duis officia reprehenderit nostrud eiusmod. Qui nisi eu minim mollit dolor dolor nostrud duis.",
    price: formatNaira(5000),
    image: nikeAirForce,
  },
  {
    id: 15,
    title: "Browns",
    type: "shoe",
    description:
      "Sunt minim duis sunt ex id. In do commodo est ad minim nisi ad ullamco commodo deserunt. Lorem do officia eu laborum sint do laboris. In incididunt ullamco do duis. Veniam esse nisi in ad culpa ullamco. Ullamco deserunt duis officia reprehenderit nostrud eiusmod. Qui nisi eu minim mollit dolor dolor nostrud duis.",
    price: formatNaira(5000),
    image: browns,
  },
  {
    id: 16,
    title: "Mocassins",
    type: "shoe",
    description:
      "Sunt minim duis sunt ex id. In do commodo est ad minim nisi ad ullamco commodo deserunt. Lorem do officia eu laborum sint do laboris. In incididunt ullamco do duis. Veniam esse nisi in ad culpa ullamco. Ullamco deserunt duis officia reprehenderit nostrud eiusmod. Qui nisi eu minim mollit dolor dolor nostrud duis.",
    price: formatNaira(5000),
    image: mocassins,
  },
  {
    id: 17,
    title: "Brogues",
    type: "shoe",
    description:
      "Sunt minim duis sunt ex id. In do commodo est ad minim nisi ad ullamco commodo deserunt. Lorem do officia eu laborum sint do laboris. In incididunt ullamco do duis. Veniam esse nisi in ad culpa ullamco. Ullamco deserunt duis officia reprehenderit nostrud eiusmod. Qui nisi eu minim mollit dolor dolor nostrud duis.",
    price: formatNaira(5000),
    image: brogues,
  },
  {
    id: 18,
    title: "Polished Blacks",
    type: "shoe",
    description:
      "Sunt minim duis sunt ex id. In do commodo est ad minim nisi ad ullamco commodo deserunt. Lorem do officia eu laborum sint do laboris. In incididunt ullamco do duis. Veniam esse nisi in ad culpa ullamco. Ullamco deserunt duis officia reprehenderit nostrud eiusmod. Qui nisi eu minim mollit dolor dolor nostrud duis.",
    price: formatNaira(5000),
    image: polishedBlacks,
  },
];

export default menShoes;
