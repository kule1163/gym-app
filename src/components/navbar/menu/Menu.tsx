import React from "react";
import { Typography } from "@mui/material";
import MenuFooter from "./menuFooter/MenuFooter";
import SmallScreenMenu from "./smallScreenMenu/SmallScreenMenu";
import { menuItemsSecond } from "../../../utils/menuItems";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useNavigate } from "react-router-dom";
import MenuItems from "./menuItems/MenuItems";

const Menu = () => {
  return (
    <>
      <div className="menu-container">
        <div className="top-section">
          <div className="first-section">
            <MenuItems />
          </div>
          <div className="second-section">
            {menuItemsSecond.map((item) => (
              <div key={item.id} className="flex-c-c">
                <item.icon size={20} />
                <Typography>{item.text}</Typography>
              </div>
            ))}
          </div>
        </div>
        <MenuFooter />
      </div>
      <SmallScreenMenu />
    </>
  );
};

export default Menu;
