import React from "react";
import Menu from "./menu/Menu";
import Logo from "../../assets/logo.svg";
import Badge from "./navComp/Badge";
import TopMenu from "./menu/smallScreenMenu/topmenu/TopMenu";
import { useAppSelector } from "../../app/hooks";

const Navbar = () => {
  const menuToggle = useAppSelector((state) => state.xTreme.menuToggle);
  const topMenuHeight = useAppSelector((state) => state.xTreme.topMenuHeight);

  return (
    <div className="nav-container">
      <div className="nav-box">
        <div className="logoBox">
          <img src={Logo} alt="logo" />
        </div>
        <Menu />
        <div data-testid="badge" className="logoBox">
          <Badge />
        </div>
      </div>
      <div
        style={{ height: `${menuToggle ? `${topMenuHeight}px` : "0"}` }}
        data-testid="topMenu"
        className={`top-menu-container ${menuToggle && "test"}`}
      >
        <TopMenu />
      </div>
    </div>
  );
};

export default Navbar;
