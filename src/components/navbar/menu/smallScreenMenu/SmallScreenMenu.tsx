import React from "react";
import Logo from "../../../../assets/logo.svg";
import Badge from "../../navComp/Badge";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { setMenuToggle } from "../../../../features/cocktails/xTreme";

const SmallScreenMenu = () => {
  const menuToggle = useAppSelector((state) => state.xTreme.menuToggle);
  const dispatch = useAppDispatch();

  return (
    <div className="ss-container">
      <div className="left-box">
        <img alt="logo" src={Logo} />
      </div>
      <div className="right-box">
        <div className="badge-box">
          <Badge />
        </div>
        <div className="menu-box flex-c-c">
          <div
            data-testid="menuToggle"
            className="icon-box flex-c-c"
            onClick={() => dispatch(setMenuToggle(!menuToggle))}
          >
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallScreenMenu;
