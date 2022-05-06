import React from "react";
import { Badge as MuiBadge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setCartToggle } from "../../../features/cocktails/xTreme";

const Badge = () => {
  const dispatch = useAppDispatch();
  const totalProduct = useAppSelector((state) => state.xTreme.totalProducts);

  return (
    <div
      role="contentinfo"
      data-testid="exmp"
      className="badge-container"
      onClick={() => dispatch(setCartToggle(true))}
    >
      <div className="icon-box">
        <ShoppingCartIcon />
      </div>
      <div className="totalProduct">{totalProduct}</div>
    </div>
  );
};

export default Badge;
