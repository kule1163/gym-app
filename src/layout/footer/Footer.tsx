import { Typography } from "@mui/material";
import React from "react";
import { footerFeatures } from "../../utils/footerFeaturs/footerFeatures";
import { socialIcons } from "../../utils/socialIcons/socialIcons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="features-container">
        {footerFeatures.map((item) => (
          <Typography key={item.id} className="text-features">
            {item.text}
          </Typography>
        ))}
      </div>
      <div className="icon-container">
        {socialIcons.map((item) => (
          <div key={item.id} className="icon">
            <item.icon />
          </div>
        ))}
      </div>
      <Typography className="powered-text">
        POWERED BY
        <span
          style={{ color: "white", marginLeft: ".4rem" }} /* className="span" */
        >
          WEBFLOW.COM
        </span>
      </Typography>
    </div>
  );
};

export default Footer;
