import { IconType } from "react-icons";
import { v4 as uuidv4 } from "uuid";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

interface SocialIconProps {
  id: string;
  url: string;
  icon: IconType;
}

export const socialIcons: SocialIconProps[] = [
  { id: uuidv4(), url: "", icon: FaFacebookF },
  { id: uuidv4(), url: "", icon: AiOutlineTwitter },
  { id: uuidv4(), url: "", icon: AiFillInstagram },
];
