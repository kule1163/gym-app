import React from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { setMenuChildrenCategory } from "../../features/cocktails/xTreme";
import { ProductProps } from "../../utils/products/products";
import gsap from "gsap";

interface StoreProductsProps {
  products: ProductProps[];
}

const StoreProducts = ({ products }: StoreProductsProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div className="store-products-container">
      {products?.map((item) => (
        <div key={item.id} className="product-container">
          <div className="price-box">
            <Typography className="second-price flex-c-c">
              $ {item.secondPrice}
            </Typography>
            {item.firstPrice && (
              <Typography className="first-price flex-c-c">
                $ {item.firstPrice}
              </Typography>
            )}
          </div>
          <div className="img-container">
            <div className="img-box">
              <img src={item.details[0].img} />
            </div>
          </div>
          <Typography className="categ-text">{item.category}</Typography>
          <Typography className="info-text">{item.header}</Typography>
          <button
            onClick={() => {
              navigate(`/product/${item.id}`);
              dispatch(setMenuChildrenCategory(item.header.toLowerCase()));
            }}
            className="orange-button-container"
          >
            PRODUCT DETAİLS
          </button>
        </div>
      ))}
    </div>
  );
};

export default StoreProducts;
