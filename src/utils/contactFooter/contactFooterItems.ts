import { IconType } from "react-icons";
import { v4 as uuidv4 } from "uuid";
import { BsClockFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { MdPhoneEnabled } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

interface ContactFooterItem {
  id: string;
  text: string;
  icon: IconType;
}

export const contactFooterItems: ContactFooterItem[] = [
  { id: uuidv4(), text: "MON - SUN: 6 AM - 8 PM", icon: BsClockFill },
  { id: uuidv4(), text: "OFFICE@XTREME.COM", icon: BsFillEnvelopeFill },
  { id: uuidv4(), text: "(+44) 7911 123456", icon: MdPhoneEnabled },
  { id: uuidv4(), text: "50 XTREME BLVD, LONDON, U.K.", icon: MdLocationPin },
];
