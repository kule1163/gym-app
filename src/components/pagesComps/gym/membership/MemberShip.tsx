import React from "react";
import { Typography } from "@mui/material";
import { AiTwotoneDownSquare } from "react-icons/ai";
import { MemberShipItem } from "../../../../utils/membership/memberships";

interface MemberShipProps {
  item: MemberShipItem;
}

const MemberShip = ({ item }: MemberShipProps) => {
  return (
    <div className={`member-ship-container ${item.background}`}>
      <div className="member-ship-box">
        <div className="price-box">{item.price}$</div>
        <Typography className="type-text">{item.type.toUpperCase()}</Typography>
        <Typography className="membership-text">
          {item.membership.toUpperCase()}
        </Typography>
        <div className="text-container">
          {item.children.map((item) => (
            <div className="text-box">
              <AiTwotoneDownSquare size={11} />
              <Typography className="text">{item.text}</Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberShip;
