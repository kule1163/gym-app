import { v4 as uuidv4 } from "uuid";
import Image from "../../assets/gym/homeBack.jpg";
import Exmp from "../../assets/gym/exmp.jpg";

export interface GaleryItemChildren {
  img: string;
  id: string;
}

export interface GaleryItem {
  id: string;
  img: string;
  children: GaleryItemChildren[];
}

export const galleryItems: GaleryItem[] = [
  {
    id: uuidv4(),
    img: Image,
    children: [
      { id: uuidv4(), img: Image },
      { id: uuidv4(), img: Image },
      { id: uuidv4(), img: Image },
    ],
  },
  {
    id: uuidv4(),
    img: Image,
    children: [
      { id: uuidv4(), img: Exmp },
      { id: uuidv4(), img: Image },
      { id: uuidv4(), img: Exmp },
    ],
  },
  {
    id: uuidv4(),
    img: Image,
    children: [
      { id: uuidv4(), img: Image },
      { id: uuidv4(), img: Image },
      { id: uuidv4(), img: Image },
    ],
  },
  {
    id: uuidv4(),
    img: Image,
    children: [
      { id: uuidv4(), img: Image },
      { id: uuidv4(), img: Image },
      { id: uuidv4(), img: Image },
    ],
  },
];
