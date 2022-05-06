import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { setTopMenuHeight } from "../../../../../features/cocktails/xTreme";

import MenuChildren from "../../menuChildren/MenuChildren";
import MenuItems from "../../menuItems/MenuItems";

const TopMenu = () => {
  const ref = useRef<HTMLDivElement>(null);
  const currentMenu = useAppSelector((state) => state.xTreme.currentMenu);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (ref.current?.offsetHeight) {
      dispatch(setTopMenuHeight(ref.current?.offsetHeight));
    }
  }, [currentMenu]);

  return (
    <div className="top-menu-box" ref={ref}>
      <div className="first-section">
        <MenuItems />
      </div>
      <div className="second-section">
        <MenuChildren />
      </div>
    </div>
  );
};

export default TopMenu;
