import { v4 as uuidv4 } from "uuid";

interface MemberShipTextProps {
  id: string;
  text: string;
}

export interface MemberShipItem {
  id: string;
  membership: string;
  children: MemberShipTextProps[];
  price: number;
  type: string;
  background: string;
}

export const memberships: MemberShipItem[] = [
  {
    id: uuidv4(),
    type: "bronz",
    membership: "membership",
    background: "third",
    children: [
      { id: uuidv4(), text: "Sed viverra nunc evarius" },
      { id: uuidv4(), text: "Sed elit purus vehiculam" },
    ],
    price: 29,
  },
  {
    id: uuidv4(),
    type: "silver",
    membership: "membership",
    background: "first",
    children: [
      { id: uuidv4(), text: "Sed viverra nunc evarius" },
      { id: uuidv4(), text: "Sed elit purus vehiculam" },
      { id: uuidv4(), text: "Mauris malesua enim" },
    ],
    price: 49,
  },
  {
    id: uuidv4(),
    type: "gold",
    membership: "membership",
    background: "orange",
    children: [
      { id: uuidv4(), text: "Sed viverra nunc evarius" },
      { id: uuidv4(), text: "Sed elit purus vehiculam" },
      { id: uuidv4(), text: "Mauris malesua enim" },
      { id: uuidv4(), text: "Fusce quis pellentesqueq" },
    ],
    price: 69,
  },
  {
    id: uuidv4(),
    type: "platinum",
    membership: "membership",
    background: "first",
    children: [
      { id: uuidv4(), text: "Sed viverra nunc evarius" },
      { id: uuidv4(), text: "Sed elit purus vehiculam" },
      { id: uuidv4(), text: "Mauris malesua enim" },
      { id: uuidv4(), text: "Fusce quis pellentesqueq" },
      { id: uuidv4(), text: "Sed tincidunt scelerisque" },
      { id: uuidv4(), text: "Tulu elit purus vehiculam" },
      { id: uuidv4(), text: "Mauris malesua enim" },
    ],
    price: 89,
  },
];
