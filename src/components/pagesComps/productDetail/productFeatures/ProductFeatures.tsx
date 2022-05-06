import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { setCartItem } from "../../../../features/cocktails/xTreme";
import { ProductProps } from "../../../../utils/products/products";
import Select from "../../../select/Select";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { CartItem } from "../../../../utils/cartItems/cartItems";
import { v4 as uuidv4 } from "uuid";

interface ProductFeaturesProps {
  product: ProductProps;
}

const ProductFeatures = ({ product }: ProductFeaturesProps) => {
  const dispatch = useAppDispatch();
  const methods = useForm();
  const productt = useAppSelector((state) => state.xTreme.cartItems);
  const [count, setCount] = useState<string>("1");

  const onSubmit = (data: any) => {
    const { color, size, count } = data;
    const cartItem: CartItem = {
      ...product,
      color,
      size,
      count,
      sign: product.id + color + size,
      cartItemId: uuidv4(),
    };

    dispatch(setCartItem(cartItem));
  };

  return (
    <div className="product-features-container">
      <Typography className="dual-grid-header-text">
        {product.header}
      </Typography>
      <div className="price-box">
        <Typography className="discount-text">
          $ {product.secondPrice}
        </Typography>
        {product.firstPrice && (
          <Typography className="price-text">
            <del className="del">$ {product.firstPrice}</del>
          </Typography>
        )}
      </div>
      <div className="content-box">
        <Typography className="dual-grid-text">{product.info}</Typography>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {product.select?.map((item) => (
            <div key={item.id} className="w-100 select-box">
              <Select
                methods={methods}
                name={item.type}
                options={item.option}
              />
            </div>
          ))}

          <div className="bottom-box">
            <div className="input-box">
              <label>COUNT</label>
              <input
                {...methods.register("count")}
                min="1"
                required
                value={count}
                onChange={(e) => setCount(e.target.value)}
                className="count"
                type="number"
              />
            </div>
            <button type="submit" className="orange-button-container">
              ADD TO CART
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ProductFeatures;
