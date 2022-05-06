import { Typography } from "@mui/material";
import React from "react";
import { contactFooterItems } from "../../../utils/contactFooter/contactFooterItems";

const FooterComp = () => {
  return (
    <div className="footer-box">
      {contactFooterItems.map((item) => (
        <div key={item.id} className="single-box">
          <item.icon />
          <Typography className="text">{item.text}</Typography>
        </div>
      ))}
    </div>
  );
};

export default FooterComp;
