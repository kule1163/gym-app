import { v4 as uuidv4 } from "uuid";
import BagOneBlue from "../../assets/productss/bag1/blue.png";
import BagOneGreen from "../../assets/productss/bag1/green.png";
import BagOneOrange from "../../assets/productss/bag1/orange.png";
import BagOnePink from "../../assets/productss/bag1/pink.png";
import BagTwoBlue from "../../assets/productss/bag2/blue.png";
import BagTwoGreen from "../../assets/productss/bag2/green.png";
import BagTwoPurple from "../../assets/productss/bag2/purple.png";
import BagTwoPink from "../../assets/productss/bag2/pink.png";
import ShoesOneBlue from "../../assets/productss/shoes1/blue.png";
import ShoesOneGreen from "../../assets/productss/shoes1/green.png";
import ShoesOnePurple from "../../assets/productss/shoes1/purple.png";
import ShoesOneYellow from "../../assets/productss/shoes1/yellow.png";
import ShoesTwoBlue from "../../assets/productss/shoes2/blue.png";
import ShoesTwoGreen from "../../assets/productss/shoes2/green.png";
import ShoesTwoPink from "../../assets/productss/shoes2/pink.png";
import ShoesTwoYellow from "../../assets/productss/shoes2/yellow.png";
import ShoesThereeBlue from "../../assets/productss/shoes3/blue.png";
import ShoesThereeGreen from "../../assets/productss/shoes3/green.png";
import ShoesThereePink from "../../assets/productss/shoes3/pink.png";
import ShoesThereePurple from "../../assets/productss/shoes3/purple.png";
import TshirtOneBlue from "../../assets/productss/tshirt1/blue.png";
import TshirtOneGreen from "../../assets/productss/tshirt1/green.png";
import TshirtOneRed from "../../assets/productss/tshirt1/red.png";
import TshirtOneYellow from "../../assets/productss/tshirt1/yellow.png";
import TshirtTwoGreen from "../../assets/productss/tshirt2/green.png";
import TshirtTwoPink from "../../assets/productss/tshirt2/pink.png";
import TshirtTwoPurple from "../../assets/productss/tshirt2/purple.png";
import TshirtTwoYellow from "../../assets/productss/tshirt2/yellow.png";
import TshirtThereeGreen from "../../assets/productss/tshirt3/green.png";
import TshirtThereePurple from "../../assets/productss/tshirt3/purple.png";
import TshirtThereeRed from "../../assets/productss/tshirt3/red.png";
import TshirtThereeYellow from "../../assets/productss/tshirt3/yellow.png";
import { SelectProps } from "../htmlelEmentTypes/select";

export interface DetailProps {
  id: string;
  img: string;
}

export interface ProductProps {
  id: string;
  details: DetailProps[];
  category: string;
  header: string;
  info: string;
  select?: SelectProps[];
  featured: boolean;
  firstPrice?: string;
  secondPrice: string;
  license: string;
}

export const products: ProductProps[] = [
  {
    id: uuidv4(),
    featured: false,
    category: "ACCESSORIES",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed posuere est, in malesuada libero. Cras euismod, mi non accumsan ultrices, est est scelerisque nunc, non tempor nisi velit nec est. Cras ut felis vel tortor ornare cursus. Donec odio ante, lacinia vitae massa semper, varius bibendum eros.",
    header: "XTREME ARENAS SPORT BAG RIDER SB-099 HDE-XT",
    firstPrice: "325.75",
    secondPrice: "257.52",
    license:
      "https://www.shutterstock.com/tr/image-photo/sports-bag-isolated-on-white-193337798",
    select: [
      {
        id: uuidv4(),
        type: "color",
        option: [
          { id: uuidv4(), value: "color", text: "Select Color" },
          { id: uuidv4(), value: "blue", text: "blue" },
          { id: uuidv4(), value: "green", text: "green" },
          { id: uuidv4(), value: "orange", text: "orange" },
          { id: uuidv4(), value: "pink", text: "pink" },
        ],
      },
    ],
    details: [
      {
        id: uuidv4(),
        img: BagOneBlue,
      },
      {
        id: uuidv4(),
        img: BagOneGreen,
      },
      {
        id: uuidv4(),
        img: BagOneOrange,
      },
      {
        id: uuidv4(),
        img: BagOnePink,
      },
    ],
  },
  {
    id: uuidv4(),
    featured: true,
    category: "ACCESSORIES",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed posuere est, in malesuada libero. Cras euismod, mi non accumsan ultrices, est est scelerisque nunc, non tempor nisi velit nec est. Cras ut felis vel tortor ornare cursus. Donec odio ante, lacinia vitae massa semper, varius bibendum eros.",
    header: "XTREME ARENAS SPORT BAG RIDER SB-009 HDE-F",
    secondPrice: "189.69",
    license:
      "https://www.shutterstock.com/tr/image-photo/sports-bag-isolated-on-white-193337795",
    select: [
      {
        id: uuidv4(),
        type: "color",
        option: [
          { id: uuidv4(), value: "color", text: "Select Color" },
          { id: uuidv4(), value: "blue", text: "blue" },
          { id: uuidv4(), value: "green", text: "green" },
          { id: uuidv4(), value: "purple", text: "purple" },
          { id: uuidv4(), value: "pink", text: "pink" },
        ],
      },
    ],
    details: [
      {
        id: uuidv4(),
        img: BagTwoBlue,
      },
      {
        id: uuidv4(),
        img: BagTwoGreen,
      },
      {
        id: uuidv4(),
        img: BagTwoPurple,
      },
      {
        id: uuidv4(),
        img: BagTwoPink,
      },
    ],
  },
  {
    id: uuidv4(),
    featured: false,
    category: "footwear",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed posuere est, in malesuada libero. Cras euismod, mi non accumsan ultrices, est est scelerisque nunc, non tempor nisi velit nec est. Cras ut felis vel tortor ornare cursus. Donec odio ante, lacinia vitae massa semper, varius bibendum eros.",
    firstPrice: "679.89",
    secondPrice: "568.56",
    license:
      "https://www.shutterstock.com/tr/image-photo/pair-sport-trainers-isolated-on-white-184842302",
    select: [
      {
        id: uuidv4(),
        type: "size",
        option: [
          { id: uuidv4(), value: "size", text: "Select Size" },
          { id: uuidv4(), value: "39", text: "39" },
          { id: uuidv4(), value: "40", text: "40" },
          { id: uuidv4(), value: "41", text: "41" },
          { id: uuidv4(), value: "42", text: "42" },
        ],
      },
      {
        id: uuidv4(),
        type: "color",
        option: [
          { id: uuidv4(), value: "color", text: "Select Color" },
          { id: uuidv4(), value: "blue", text: "blue" },
          { id: uuidv4(), value: "green", text: "green" },
          { id: uuidv4(), value: "yellow", text: "yellow" },
          { id: uuidv4(), value: "purple", text: "purple" },
        ],
      },
    ],
    header: "XTREME ARENAS SPORT BAG RIDER SB-009 HDE-F",

    details: [
      {
        id: uuidv4(),
        img: ShoesOneBlue,
      },
      {
        id: uuidv4(),
        img: ShoesOneGreen,
      },
      {
        id: uuidv4(),
        img: ShoesOneYellow,
      },
      {
        id: uuidv4(),
        img: ShoesOnePurple,
      },
    ],
  },
  {
    id: uuidv4(),
    featured: true,
    category: "footwear",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed posuere est, in malesuada libero. Cras euismod, mi non accumsan ultrices, est est scelerisque nunc, non tempor nisi velit nec est. Cras ut felis vel tortor ornare cursus. Donec odio ante, lacinia vitae massa semper, varius bibendum eros.",
    secondPrice: "440.23",
    license:
      "https://www.shutterstock.com/tr/image-photo/samara-russia-june-8-2015-female-526457407",
    select: [
      {
        id: uuidv4(),
        type: "size",
        option: [
          { id: uuidv4(), value: "size", text: "Select Size" },
          { id: uuidv4(), value: "39", text: "39" },
          { id: uuidv4(), value: "40", text: "40" },
          { id: uuidv4(), value: "41", text: "41" },
          { id: uuidv4(), value: "42", text: "42" },
        ],
      },
      {
        id: uuidv4(),
        type: "color",
        option: [
          { id: uuidv4(), value: "color", text: "Select Color" },
          { id: uuidv4(), value: "blue", text: "blue" },
          { id: uuidv4(), value: "green", text: "green" },
          { id: uuidv4(), value: "yellow", text: "yellow" },
          { id: uuidv4(), value: "pink", text: "pink" },
        ],
      },
    ],
    header: "XTREME ARENAS SPORT BAG RIDER SB-009 HDE-F",
    details: [
      {
        id: uuidv4(),
        img: ShoesTwoBlue,
      },
      {
        id: uuidv4(),
        img: ShoesTwoGreen,
      },
      {
        id: uuidv4(),
        img: ShoesTwoYellow,
      },
      {
        id: uuidv4(),
        img: ShoesTwoPink,
      },
    ],
  },
  {
    id: uuidv4(),
    featured: false,
    category: "footwear",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed posuere est, in malesuada libero. Cras euismod, mi non accumsan ultrices, est est scelerisque nunc, non tempor nisi velit nec est. Cras ut felis vel tortor ornare cursus. Donec odio ante, lacinia vitae massa semper, varius bibendum eros.",
    firstPrice: "820.42",
    secondPrice: "648.86",
    license:
      "https://www.shutterstock.com/tr/image-photo/unbranded-modern-sneakers-isolated-on-white-313774466",
    select: [
      {
        id: uuidv4(),
        type: "size",
        option: [
          { id: uuidv4(), value: "size", text: "Select Size" },
          { id: uuidv4(), value: "39", text: "39" },
          { id: uuidv4(), value: "40", text: "40" },
          { id: uuidv4(), value: "41", text: "41" },
          { id: uuidv4(), value: "42", text: "42" },
        ],
      },
      {
        id: uuidv4(),
        type: "color",
        option: [
          { id: uuidv4(), value: "color", text: "Select Color" },
          { id: uuidv4(), value: "blue", text: "blue" },
          { id: uuidv4(), value: "green", text: "green" },
          { id: uuidv4(), value: "pink", text: "pink" },
          { id: uuidv4(), value: "purple", text: "purple" },
        ],
      },
    ],
    header: "XTREME ARENAS SPORT BAG RIDER SB-009 HDE-F",
    details: [
      {
        id: uuidv4(),
        img: ShoesThereeBlue,
      },
      {
        id: uuidv4(),
        img: ShoesThereeGreen,
      },
      {
        id: uuidv4(),
        img: ShoesThereePink,
      },
      {
        id: uuidv4(),
        img: ShoesThereePurple,
      },
    ],
  },
  {
    id: uuidv4(),
    featured: true,
    category: "apparel",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed posuere est, in malesuada libero. Cras euismod, mi non accumsan ultrices, est est scelerisque nunc, non tempor nisi velit nec est. Cras ut felis vel tortor ornare cursus. Donec odio ante, lacinia vitae massa semper, varius bibendum eros.",
    firstPrice: "185.20",
    secondPrice: "156.10",
    license:
      "https://www.shutterstock.com/tr/image-vector/tshirt-sport-design-template-soccer-jersey-1151418485",
    select: [
      {
        id: uuidv4(),
        type: "size",
        option: [
          { id: uuidv4(), value: "size", text: "Select Size" },
          { id: uuidv4(), value: "small", text: "small" },
          { id: uuidv4(), value: "medium", text: "medium" },
          { id: uuidv4(), value: "large", text: "large" },
          { id: uuidv4(), value: "xLarge", text: "xLarge" },
        ],
      },
      {
        id: uuidv4(),
        type: "color",
        option: [
          { id: uuidv4(), value: "color", text: "Select Color" },
          { id: uuidv4(), value: "blue", text: "blue" },
          { id: uuidv4(), value: "green", text: "green" },
          { id: uuidv4(), value: "red", text: "red" },
          { id: uuidv4(), value: "yellow", text: "yellow" },
        ],
      },
    ],
    header: "XTREME ARENAS SPORT BAG RIDER SB-009 HDE-F",
    details: [
      {
        id: uuidv4(),
        img: TshirtOneBlue,
      },
      {
        id: uuidv4(),
        img: TshirtOneGreen,
      },
      {
        id: uuidv4(),
        img: TshirtOneRed,
      },
      {
        id: uuidv4(),
        img: TshirtOneYellow,
      },
    ],
  },
  {
    id: uuidv4(),
    featured: false,
    category: "apparel",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed posuere est, in malesuada libero. Cras euismod, mi non accumsan ultrices, est est scelerisque nunc, non tempor nisi velit nec est. Cras ut felis vel tortor ornare cursus. Donec odio ante, lacinia vitae massa semper, varius bibendum eros.",
    secondPrice: "140.50",
    license:
      "https://www.shutterstock.com/tr/image-vector/tshirt-sport-design-template-soccer-jersey-1263176830",
    select: [
      {
        id: uuidv4(),
        type: "size",
        option: [
          { id: uuidv4(), value: "size", text: "Select Size" },
          { id: uuidv4(), value: "small", text: "small" },
          { id: uuidv4(), value: "medium", text: "medium" },
          { id: uuidv4(), value: "large", text: "large" },
          { id: uuidv4(), value: "xLarge", text: "xLarge" },
        ],
      },
      {
        id: uuidv4(),
        type: "color",
        option: [
          { id: uuidv4(), value: "color", text: "Select Color" },
          { id: uuidv4(), value: "pink", text: "pink" },
          { id: uuidv4(), value: "green", text: "green" },
          { id: uuidv4(), value: "yellow", text: "yellow" },
          { id: uuidv4(), value: "purple", text: "purple" },
        ],
      },
    ],
    header: "XTREME ARENAS SPORT BAG RIDER SB-009 HDE-F",
    details: [
      {
        id: uuidv4(),
        img: TshirtTwoPink,
      },
      {
        id: uuidv4(),
        img: TshirtTwoGreen,
      },
      {
        id: uuidv4(),
        img: TshirtTwoYellow,
      },
      {
        id: uuidv4(),
        img: TshirtTwoPurple,
      },
    ],
  },
  {
    id: uuidv4(),
    featured: true,
    category: "apparel",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed posuere est, in malesuada libero. Cras euismod, mi non accumsan ultrices, est est scelerisque nunc, non tempor nisi velit nec est. Cras ut felis vel tortor ornare cursus. Donec odio ante, lacinia vitae massa semper, varius bibendum eros.",
    firstPrice: "220.64",
    secondPrice: "199.99",
    license:
      "https://www.shutterstock.com/tr/image-vector/tshirt-sport-design-templatesoccer-jersey-mockupuniform-1135214936",
    select: [
      {
        id: uuidv4(),
        type: "size",
        option: [
          { id: uuidv4(), value: "size", text: "Select Size" },
          { id: uuidv4(), value: "small", text: "small" },
          { id: uuidv4(), value: "medium", text: "medium" },
          { id: uuidv4(), value: "large", text: "large" },
          { id: uuidv4(), value: "xLarge", text: "xLarge" },
        ],
      },
      {
        id: uuidv4(),
        type: "color",
        option: [
          { id: uuidv4(), value: "color", text: "Select Color" },
          { id: uuidv4(), value: "green", text: "green" },
          { id: uuidv4(), value: "purple", text: "purple" },
          { id: uuidv4(), value: "red", text: "red" },
          { id: uuidv4(), value: "yellow", text: "yellow" },
        ],
      },
    ],
    header: "XTREME ARENAS SPORT BAG RIDER SB-009 HDE-F",
    details: [
      {
        id: uuidv4(),
        img: TshirtThereeGreen,
      },
      {
        id: uuidv4(),
        img: TshirtThereePurple,
      },
      {
        id: uuidv4(),
        img: TshirtThereeRed,
      },
      {
        id: uuidv4(),
        img: TshirtThereeYellow,
      },
    ],
  },
];
