import formatNaira from "format-to-naira";
import slips from "../../images/products/women/shoes/womenshoe1.jpg";
import gladiator from "../../images/products/women/shoes/womenshoe2.webp";
import tigerSneakers from "../../images/products/women/shoes/womenshoe3.jpg";
import blackBoots from "../../images/products/women/shoes/womenshoe4.jpg";
import suedeHills from "../../images/products/women/shoes/womenshoe5.jpg";
import brownHills from "../../images/products/women/shoes/womenshoe1.jpg";
import greyHills from "../../images/products/women/shoes/womenshoe1.jpg";
import rainCoatBoots from "../../images/products/women/shoes/womenshoe1.jpg";

const womenShoes = [
  {
    id: 29,
    title: "Slips",
    type: "shoe",
    description:
      "Sunt minim duis sunt ex id. In do commodo est ad minim nisi ad ullamco commodo deserunt. Lorem do officia eu laborum sint do laboris. In incididunt ullamco do duis. Veniam esse nisi in ad culpa ullamco. Ullamco deserunt duis officia reprehenderit nostrud eiusmod. Qui nisi eu minim mollit dolor dolor nostrud duis.",
    price: formatNaira(3000),
    image: slips,
  },
  {
    id: 30,
    title: "Gladiator",
    type: "shoe",
    description:
      "Sunt minim duis sunt ex id. In do commodo est ad minim nisi ad ullamco commodo deserunt. Lorem do officia eu laborum sint do laboris. In incididunt ullamco do duis. Veniam esse nisi in ad culpa ullamco. Ullamco deserunt duis officia reprehenderit nostrud eiusmod. Qui nisi eu minim mollit dolor dolor nostrud duis.",
    price: formatNaira(8000),
    image: gladiator,
  },
  {
    id: 31,
    title: "Tiger Sneakers",
    type: "shoe",
    description:
      "Sunt minim duis sunt ex id. In do commodo est ad minim nisi ad ullamco commodo deserunt. Lorem do officia eu laborum sint do laboris. In incididunt ullamco do duis. Veniam esse nisi in ad culpa ullamco. Ullamco deserunt duis officia reprehenderit nostrud eiusmod. Qui nisi eu minim mollit dolor dolor nostrud duis.",
    price: formatNaira(8000),
    image: tigerSneakers,
  },
  {
    id: 32,
    title: "Black Boots",
    type: "shoe",
    description:
      "Sunt minim duis sunt ex id. In do commodo est ad minim nisi ad ullamco commodo deserunt. Lorem do officia eu laborum sint do laboris. In incididunt ullamco do duis. Veniam esse nisi in ad culpa ullamco. Ullamco deserunt duis officia reprehenderit nostrud eiusmod. Qui nisi eu minim mollit dolor dolor nostrud duis.",
    price: formatNaira(14000),
    image: blackBoots,
  },
  {
    id: 33,
    title: "Suede Hills",
    type: "shoe",
    description:
      "Sunt minim duis sunt ex id. In do commodo est ad minim nisi ad ullamco commodo deserunt. Lorem do officia eu laborum sint do laboris. In incididunt ullamco do duis. Veniam esse nisi in ad culpa ullamco. Ullamco deserunt duis officia reprehenderit nostrud eiusmod. Qui nisi eu minim mollit dolor dolor nostrud duis.",
    price: formatNaira(8000),
    image: suedeHills,
  },
  {
    id: 34,
    title: "Brown Hills",
    type: "shoe",
    description:
      "Sunt minim duis sunt ex id. In do commodo est ad minim nisi ad ullamco commodo deserunt. Lorem do officia eu laborum sint do laboris. In incididunt ullamco do duis. Veniam esse nisi in ad culpa ullamco. Ullamco deserunt duis officia reprehenderit nostrud eiusmod. Qui nisi eu minim mollit dolor dolor nostrud duis.",
    price: formatNaira(10000),
    image: brownHills,
  },
  {
    id: 35,
    title: "Grey Hills",
    type: "shoe",
    description:
      "Sunt minim duis sunt ex id. In do commodo est ad minim nisi ad ullamco commodo deserunt. Lorem do officia eu laborum sint do laboris. In incididunt ullamco do duis. Veniam esse nisi in ad culpa ullamco. Ullamco deserunt duis officia reprehenderit nostrud eiusmod. Qui nisi eu minim mollit dolor dolor nostrud duis.",
    price: formatNaira(10000),
    image: greyHills,
  },
  {
    id: 36,
    title: "Rain Coat Boots",
    type: "shoe",
    description:
      "Sunt minim duis sunt ex id. In do commodo est ad minim nisi ad ullamco commodo deserunt. Lorem do officia eu laborum sint do laboris. In incididunt ullamco do duis. Veniam esse nisi in ad culpa ullamco. Ullamco deserunt duis officia reprehenderit nostrud eiusmod. Qui nisi eu minim mollit dolor dolor nostrud duis.",
    price: formatNaira(10000),
    image: rainCoatBoots,
  },
];

export default womenShoes;
