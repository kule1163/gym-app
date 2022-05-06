import { v4 as uuidv4 } from "uuid";
import { IconType } from "react-icons";
import { BsClockFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { MdPhoneEnabled } from "react-icons/md";

export interface DynamicTextProps {
  firstText?: string;
  secondText?: string;
}

export interface MenuItemChildren {
  id: string;
  text: string;
  href?: string;
  dynamicText?: DynamicTextProps;
  useToFilter: boolean;
  first?: string;
}

export interface MenuItem {
  id: string;
  text: string;
  url: string;
  children: MenuItemChildren[];
}

export interface MenuItemSecond {
  id: string;
  text: string;
  icon: IconType;
}

export const defaultText: DynamicTextProps = {
  firstText: "xtreme",
  secondText: "arenas",
};

export const menuItems: MenuItem[] = [
  {
    id: uuidv4(),
    url: "/",
    text: "gym",
    children: [
      {
        id: uuidv4(),
        text: "about us",
        href: "about",
        dynamicText: {
          firstText: "xtreme",
          secondText: "arenas",
        },
        useToFilter: false,
      },
      { id: uuidv4(), text: "gallery", href: "gallery", useToFilter: false },
      { id: uuidv4(), text: "classes", href: "classes", useToFilter: false },
      { id: uuidv4(), text: "schedule", href: "schedule", useToFilter: false },
      { id: uuidv4(), text: "pricing", href: "pricing", useToFilter: false },
      { id: uuidv4(), text: "contact", href: "contact", useToFilter: false },
    ],
  },
  {
    id: uuidv4(),
    url: "/store",
    text: "store",
    children: [
      {
        id: uuidv4(),
        text: "all",
        dynamicText: {
          firstText: "xtreme",
          secondText: "store",
        },
        useToFilter: true,
        first: "first",
      },
      {
        id: uuidv4(),
        text: "featured",
        dynamicText: {
          firstText: "FEATURED",
          secondText: "PRODUCT",
        },
        useToFilter: true,
      },
      {
        id: uuidv4(),
        text: "apparel",
        dynamicText: { firstText: "apparel" },
        useToFilter: true,
      },
      {
        id: uuidv4(),
        text: "footwear",
        dynamicText: { firstText: "FOOTWEAR" },
        useToFilter: true,
      },
      {
        id: uuidv4(),
        text: "accessories",
        dynamicText: { firstText: "ACCESSORIES" },
        useToFilter: true,
      },
      { id: uuidv4(), text: "contact", href: "contact", useToFilter: false },
    ],
  },
  {
    id: uuidv4(),
    url: "/blog",
    text: "blog",
    children: [
      {
        id: uuidv4(),
        text: "all",
        dynamicText: {
          firstText: "XTREME",
          secondText: "JURNAL",
        },
        useToFilter: true,
        first: "first",
      },
      {
        id: uuidv4(),
        text: "featured",
        dynamicText: {
          firstText: "FEATURED",
          secondText: "POSTS",
        },
        useToFilter: true,
      },
      {
        id: uuidv4(),
        text: "exercise",
        dynamicText: {
          firstText: "EXERCISE",
        },
        useToFilter: true,
      },
      {
        id: uuidv4(),
        text: "nutrition",
        dynamicText: {
          firstText: "NUTRITION",
        },
        useToFilter: true,
      },
      {
        id: uuidv4(),
        text: "habits",
        dynamicText: { firstText: "HABITS" },
        useToFilter: true,
      },
      { id: uuidv4(), text: "contact", href: "contact", useToFilter: false },
    ],
  },
  {
    id: uuidv4(),
    url: "/faq",
    text: "faq",

    children: [
      {
        id: uuidv4(),
        text: "licenses",
        dynamicText: {
          firstText: "XTREME",
          secondText: "LICENSES",
        },
        useToFilter: true,
        first: "first",
      },
      {
        id: uuidv4(),
        text: "terms",
        dynamicText: {
          firstText: "XTREME",
          secondText: "UPDATES",
        },
        useToFilter: true,
      },
      { id: uuidv4(), text: "contact", href: "contact", useToFilter: false },
    ],
  },
];

export const menuItemsSecond: MenuItemSecond[] = [
  { id: uuidv4(), text: "MON - SUN: 6 AM - 8 PM", icon: BsClockFill },
  { id: uuidv4(), text: "(+44) 7911 123456", icon: MdPhoneEnabled },
  { id: uuidv4(), text: "OFFICE@XTREME.COM", icon: BsFillEnvelopeFill },
];
