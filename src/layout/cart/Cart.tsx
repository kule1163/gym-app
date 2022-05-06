import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import CartItem from "../../components/cart/cartItem/CartItem";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { handleTotal, setCartToggle } from "../../features/cocktails/xTreme";

const Cart = () => {
  const cartToggle = useAppSelector((state) => state.xTreme.cartToggle);
  const cartItems = useAppSelector((state) => state.xTreme.cartItems);
  const totalPrice = useAppSelector((state) => state.xTreme.totalPrice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(handleTotal());
  }, [cartItems]);

  return (
    <div className={`cart-container ${cartToggle && "show-cart"}`}>
      <div className="cart-box">
        <div className="top-section">
          <Typography className="top-text">YOUR CART</Typography>
          <div
            data-testid="close-button"
            className="close-icon"
            onClick={() => dispatch(setCartToggle(false))}
          >
            <AiOutlineClose />
          </div>
        </div>
        <div
          className={`${
            cartItems.length > 0
              ? "cart-item-container"
              : "cart-item-empty-container"
          }`}
        >
          <CartItem cartItems={cartItems} />
        </div>
        <div className="bottom-section">
          <Typography className="dual-grid-text">Subtotal</Typography>
          <Typography className="dual-grid-header-secondry-text">
            $ {totalPrice.toFixed(2)}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Cart;
