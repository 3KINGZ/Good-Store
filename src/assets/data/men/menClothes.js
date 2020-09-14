import formatNaira from "format-to-naira";
import blueJeanJacket from "../../images/products/men/clothes/men1.jpg";
import brownWindBreaker from "../../images/products/men/clothes/men2.jpg";
import fadeJeanJacket from "../../images/products/men/clothes/men3.jpg";
import whiteShirt from "../../images/products/men/clothes/men4.jpg";
import longSleeveShirt from "../../images/products/men/clothes/men5.jpg";
import pinkHoodie from "../../images/products/men/clothes/men6.jpg";
import joggers from "../../images/products/men/clothes/men7.jpg";
import boxers from "../../images/products/men/clothes/men8.jpg";
import carrotJean from "../../images/products/men/clothes/men9.jpg";
import jean from "../../images/products/men/clothes/men10.jpg";

const menClothes = [
  {
    id: 1,
    title: "Blue Jean Jacket",
    type: "cloth",
    description:
      "Sunt minim duis sunt ex id. In do commodo est ad minim nisi ad ullamco commodo deserunt. Lorem do officia eu laborum sint do laboris. In incididunt ullamco do duis. Veniam esse nisi in ad culpa ullamco. Ullamco deserunt duis officia reprehenderit nostrud eiusmod. Qui nisi eu minim mollit dolor dolor nostrud duis.",
    price: formatNaira(5000),
    image: blueJeanJacket,
  },
  {
    id: 2,
    title: "Brown Wind Breaker",
    type: "cloth",
    description:
      "Sunt minim duis sunt ex id. In do commodo est ad minim nisi ad ullamco commodo deserunt. Lorem do officia eu laborum sint do laboris. In incididunt ullamco do duis. Veniam esse nisi in ad culpa ullamco. Ullamco deserunt duis officia reprehenderit nostrud eiusmod. Qui nisi eu minim mollit dolor dolor nostrud duis.",
    price: formatNaira(5000),
    image: brownWindBreaker,
  },
  {
    id: 3,
    title: "Jean",
    type: "cloth",
    description:
      "Sunt minim duis sunt ex id. In do commodo est ad minim nisi ad ullamco commodo deserunt. Lorem do officia eu laborum sint do laboris. In incididunt ullamco do duis. Veniam esse nisi in ad culpa ullamco. Ullamco deserunt duis officia reprehenderit nostrud eiusmod. Qui nisi eu minim mollit dolor dolor nostrud duis.",
    price: formatNaira(5500),
    image: jean,
  },
  {
    id: 4,
    title: "Fade Jean Jacket",
    type: "cloth",
    description:
      "Sunt minim duis sunt ex id. In do commodo est ad minim nisi ad ullamco commodo deserunt. Lorem do officia eu laborum sint do laboris. In incididunt ullamco do duis. Veniam esse nisi in ad culpa ullamco. Ullamco deserunt duis officia reprehenderit nostrud eiusmod. Qui nisi eu minim mollit dolor dolor nostrud duis.",
    price: formatNaira(4000),
    image: fadeJeanJacket,
  },
  {
    id: 5,
    title: "White Shirt",
    type: "cloth",
    description:
      "Sunt minim duis sunt ex id. In do commodo est ad minim nisi ad ullamco commodo deserunt. Lorem do officia eu laborum sint do laboris. In incididunt ullamco do duis. Veniam esse nisi in ad culpa ullamco. Ullamco deserunt duis officia reprehenderit nostrud eiusmod. Qui nisi eu minim mollit dolor dolor nostrud duis.",
    price: formatNaira(2500),
    image: whiteShirt,
  },
  {
    id: 6,
    title: "Long Sleeve Shirt",
    type: "cloth",
    description:
      "Sunt minim duis sunt ex id. In do commodo est ad minim nisi ad ullamco commodo deserunt. Lorem do officia eu laborum sint do laboris. In incididunt ullamco do duis. Veniam esse nisi in ad culpa ullamco. Ullamco deserunt duis officia reprehenderit nostrud eiusmod. Qui nisi eu minim mollit dolor dolor nostrud duis.",
    price: formatNaira(3000),
    image: longSleeveShirt,
  },
  {
    id: 7,
    title: "Pink Hoodie",
    type: "cloth",
    description:
      "Sunt minim duis sunt ex id. In do commodo est ad minim nisi ad ullamco commodo deserunt. Lorem do officia eu laborum sint do laboris. In incididunt ullamco do duis. Veniam esse nisi in ad culpa ullamco. Ullamco deserunt duis officia reprehenderit nostrud eiusmod. Qui nisi eu minim mollit dolor dolor nostrud duis.",
    price: formatNaira(4000),
    image: pinkHoodie,
  },
  {
    id: 8,
    title: "Joggers",
    type: "cloth",
    description:
      "Sunt minim duis sunt ex id. In do commodo est ad minim nisi ad ullamco commodo deserunt. Lorem do officia eu laborum sint do laboris. In incididunt ullamco do duis. Veniam esse nisi in ad culpa ullamco. Ullamco deserunt duis officia reprehenderit nostrud eiusmod. Qui nisi eu minim mollit dolor dolor nostrud duis.",
    price: formatNaira(5000),
    image: joggers,
  },
  {
    id: 9,
    title: "Boxers",
    type: "cloth",
    description:
      "Sunt minim duis sunt ex id. In do commodo est ad minim nisi ad ullamco commodo deserunt. Lorem do officia eu laborum sint do laboris. In incididunt ullamco do duis. Veniam esse nisi in ad culpa ullamco. Ullamco deserunt duis officia reprehenderit nostrud eiusmod. Qui nisi eu minim mollit dolor dolor nostrud duis.",
    price: formatNaira(1000),
    image: boxers,
  },
  {
    id: 10,
    title: "Carrot Jean",
    type: "cloth",
    description:
      "Sunt minim duis sunt ex id. In do commodo est ad minim nisi ad ullamco commodo deserunt. Lorem do officia eu laborum sint do laboris. In incididunt ullamco do duis. Veniam esse nisi in ad culpa ullamco. Ullamco deserunt duis officia reprehenderit nostrud eiusmod. Qui nisi eu minim mollit dolor dolor nostrud duis.",
    price: formatNaira(7500),
    image: carrotJean,
  },
];

export default menClothes;
