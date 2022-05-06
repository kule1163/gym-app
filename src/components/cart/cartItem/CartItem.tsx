import React from "react";
import { Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  removeCartItem,
  handleProductCount,
  setCartToggle,
} from "../../../features/cocktails/xTreme";
import { useNavigate } from "react-router-dom";
import { CartItem as CartItemType } from "../../../utils/cartItems/cartItems";

interface CartItemProps {
  cartItems: CartItemType[];
}

const CartItem = ({ cartItems }: CartItemProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  console.log(cartItems);

  return (
    <>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.cartItemId} className="cart-item-box">
            <div className="top-box">
              <img
                src={
                  item.details.find((detail) => detail.img.includes(item.color))
                    ?.img
                }
              />
              <Typography className="top-text">{item.header}</Typography>
              <input
                onChange={(e) =>
                  dispatch(
                    handleProductCount({
                      id: item.cartItemId,
                      target: e.target.value,
                    })
                  )
                }
                value={item.count}
                className="input"
                type="number"
                defaultValue="1"
              />
            </div>

            <div className="bottom-box">
              <Typography className="dual-grid-text">
                $ {item.secondPrice}
              </Typography>
              <Typography className="dual-grid-text">
                Size: {item.size}
              </Typography>
              <Typography className="dual-grid-text">
                Color: {item.color}
              </Typography>
              <Typography
                onClick={() => dispatch(removeCartItem(item.cartItemId))}
                className="remove"
              >
                REMOVE
              </Typography>
            </div>
          </div>
        ))
      ) : (
        <div
          onClick={() => {
            navigate("/store");
            dispatch(setCartToggle(false));
          }}
          className="empty-cart-container"
        >
          <div className="text-box flex-c-c">
            <Typography>No items found.</Typography>
          </div>
          <div className="shopping-box">
            <Typography>CONTINUE SHOPPING</Typography>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItem;
