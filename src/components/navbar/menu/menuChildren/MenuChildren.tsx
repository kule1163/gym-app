import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  setMenuChildrenCategory,
  setCurrentMenuChild,
  setHomeDynamicText,
  setMenuToggle,
} from "../../../../features/cocktails/xTreme";

const MenuChildren = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const children = useAppSelector((state) => state.xTreme.currentMenuChildren);
  const currentMenu = useAppSelector((state) => state.xTreme.currentMenu);
  const currentMenuChild = useAppSelector(
    (state) => state.xTreme.currentMenuChild
  );
  const homeDynamicText = useAppSelector(
    (state) => state.xTreme.homeDynamicText
  );

  return (
    <>
      {children.map((item) => (
        <a
          onClick={() => {
            dispatch(setMenuToggle(false));
            dispatch(
              setMenuChildrenCategory(
                item.useToFilter ? item.text : currentMenuChild
              )
            );
            item.useToFilter &&
              navigate(
                item.first === "first"
                  ? `${currentMenu.toLowerCase()}`
                  : `${currentMenu.toLowerCase()}/${item.text.toLowerCase()}`
              );
            dispatch(setCurrentMenuChild(item.text));
            dispatch(
              setHomeDynamicText(
                item.dynamicText ? item.dynamicText : homeDynamicText
              )
            );
          }}
          href={item.href ? `#${item.href}` : "#home"}
          className={`${currentMenuChild === item.text && "white"}`}
        >
          {item.text.toUpperCase()}
        </a>
      ))}
    </>
  );
};

export default MenuChildren;
