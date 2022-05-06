import { v4 as uuidv4 } from "uuid";
import { ProductProps } from "../products/products";

export interface CartItem extends ProductProps {
  color: string;
  size: string;
  count: string;
  cartItemId: string;
  sign: string;
}
