import { v4 as uuidv4 } from "uuid";

interface TermItemText {
  id: string;
  text: string;
}

interface TermItem {
  id: string;
  header: string;
  text: TermItemText[];
}

export const terms: TermItem[] = [
  {
    id: uuidv4(),
    header: "VERSION 1.0",
    text: [{ id: uuidv4(), text: "First relesea" }],
  },
  {
    id: uuidv4(),
    header: "VERSION 1.1",
    text: [
      { id: uuidv4(), text: "Date 01/14/2020" },
      { id: uuidv4(), text: "Updates page added" },
      { id: uuidv4(), text: "Footer redesign" },
      { id: uuidv4(), text: "Navigation mobile glitch fixed" },
      { id: uuidv4(), text: "New asstes" },
      { id: uuidv4(), text: "Small design changes" },
    ],
  },
];
