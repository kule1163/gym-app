import React from "react";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import { useNavigate } from "react-router-dom";
import { menuItems } from "../../../../utils/menuItems";
import {
  setCurrentMenuChildren,
  setCurrentMenu,
  setMenuToggle,
  setHomeDynamicText,
} from "../../../../features/cocktails/xTreme";
import { defaultText } from "../../../../utils/menuItems";

const MenuItems = () => {
  const currentMenu = useAppSelector((state) => state.xTreme.currentMenu);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <>
      {menuItems.map((item) => (
        <div
          data-testid="menu-items"
          key={item.id}
          className={`single-item flex-c-c ${
            currentMenu === item.text && "current-item"
          }`}
          onClick={() => {
            dispatch(setCurrentMenuChildren(item.children));
            dispatch(setCurrentMenu(item.text));
            dispatch(setMenuToggle(false));
            dispatch(
              setHomeDynamicText(
                item.children[0].dynamicText
                  ? item.children[0].dynamicText
                  : defaultText
              )
            );
            navigate(item.url);
          }}
        >
          {item.text.toUpperCase()}
        </div>
      ))}
    </>
  );
};

export default MenuItems;
