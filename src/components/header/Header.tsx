import { Typography } from "@mui/material";
import React from "react";

interface HeaderProps {
  first: string;
  second: string;
}

const Header = ({ first, second }: HeaderProps) => {
  return (
    <div className="header-comp-container">
      <div className="header-comp-box">
        <div className="first">
          <Typography className="text">{first}</Typography>
        </div>
        <div className="second">
          <Typography className="text">{second}</Typography>
        </div>
      </div>
      <div className="hr"></div>
    </div>
  );
};

export default Header;
