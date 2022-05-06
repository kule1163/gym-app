import { v4 as uuidv4 } from "uuid";

interface FooterFeatureProps {
  id: string;
  text: string;
}

export const footerFeatures: FooterFeatureProps[] = [
  { id: uuidv4(), text: "UPDATES" },
  { id: uuidv4(), text: "STYLES" },
  { id: uuidv4(), text: "LICENSES" },
];
