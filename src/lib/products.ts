import type { Product } from "../types/products";
import waffleDesktop from "../assets/image-waffle-desktop.jpg";
import waffleMobile from "../assets/image-waffle-mobile.jpg";
import waffleTablet from "../assets/image-waffle-tablet.jpg";
import cremeBruleeDesktop from "../assets/image-creme-brulee-desktop.jpg";
import cremeBruleeMobile from "../assets/image-creme-brulee-mobile.jpg";
import cremeBruleeTablet from "../assets/image-creme-brulee-tablet.jpg";
import macaronDesktop from "../assets/image-macaron-desktop.jpg";
import macaronMobile from "../assets/image-macaron-mobile.jpg";
import macaronTablet from "../assets/image-macaron-tablet.jpg";
import tiramisuDesktop from "../assets/image-tiramisu-desktop.jpg";
import tiramisuMobile from "../assets/image-tiramisu-mobile.jpg";
import tiramisuTablet from "../assets/image-tiramisu-tablet.jpg";
import baklavaDesktop from "../assets/image-baklava-desktop.jpg";
import baklavaMobile from "../assets/image-baklava-mobile.jpg";
import baklavaTablet from "../assets/image-baklava-tablet.jpg";
import pieDesktop from "../assets/image-meringue-desktop.jpg";
import pieMobile from "../assets/image-meringue-mobile.jpg";
import pieTablet from "../assets/image-meringue-tablet.jpg";
import cakeDesktop from "../assets/image-cake-desktop.jpg";
import cakeMobile from "../assets/image-cake-mobile.jpg";
import cakeTablet from "../assets/image-cake-tablet.jpg";
import brownieDekstop from "../assets/image-brownie-desktop.jpg";
import brownieMobile from "../assets/image-brownie-desktop.jpg";
import brownieTablet from "../assets/image-brownie-desktop.jpg";
import pannaCottaDesktop from "../assets/image-panna-cotta-desktop.jpg";
import pannaCottaMobile from "../assets/image-panna-cotta-mobile.jpg";
import pannaCottaTablet from "../assets/image-panna-cotta-tablet.jpg";

export const products: Product[] = [
  {
    id: 1,
    title: "Waffle",
    description: "Waffle with Berries",
    price: "$6.00",
    image: {
      desktop: waffleDesktop,
      mobile: waffleMobile,
      tablet: waffleTablet,
    },
  },
  {
    id: 2,
    title: "Crème Brûlée",
    description: "Vanilla Bean Crème Brûlée",
    price: "$7.00",
    image: {
      desktop: cremeBruleeDesktop,
      mobile: cremeBruleeMobile,
      tablet: cremeBruleeTablet,
    },
  },
  {
    id: 3,
    title: "Macaron",
    description: "Macaron Mix of Five",
    price: "$8.00",
    image: {
      desktop: macaronDesktop,
      mobile: macaronMobile,
      tablet: macaronTablet,
    },
  },
  {
    id: 4,
    title: "Tiramisu",
    description: "Classic Tiramisu",
    price: "$5.50",
    image: {
      desktop: tiramisuDesktop,
      mobile: tiramisuMobile,
      tablet: tiramisuTablet,
    },
  },
  {
    id: 5,
    title: "Baklava",
    description: "Pistachio Baklava",
    price: "$4.00",
    image: {
      desktop: baklavaDesktop,
      mobile: baklavaMobile,
      tablet: baklavaTablet,
    },
  },
  {
    id: 6,
    title: "Pie",
    description: "Lemon Meringue Pie",
    price: "$5.00",
    image: {
      desktop: pieDesktop,
      mobile: pieMobile,
      tablet: pieTablet,
    },
  },
  {
    id: 7,
    title: "Cake",
    description: "Red Velvet Cake",
    price: "$4.50",
    image: {
      desktop: cakeDesktop,
      mobile: cakeMobile,
      tablet: cakeTablet,
    },
  },
  {
    id: 8,
    title: "Brownie",
    description: "Salted Caramel Brownie",
    price: "$5.50",
    image: {
      desktop: brownieDekstop,
      mobile: brownieMobile,
      tablet: brownieTablet,
    },
  },
  {
    id: 9,
    title: "Panna Cotta",
    description: "Vanilla Panna Cotta",
    price: "$6.50",
    image: {
      desktop: pannaCottaDesktop,
      mobile: pannaCottaMobile,
      tablet: pannaCottaTablet,
    },
  },
];
