import { v4 as uuidv4 } from "uuid";
import { OptionProps } from "./option";

export interface SelectProps {
  id: string;
  type: string;
  option: OptionProps[];
}
