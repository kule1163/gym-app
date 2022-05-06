import { Typography } from "@mui/material";
import React from "react";
import { terms } from "../../../utils/terms/terms";

const Terms = () => {
  return (
    <div className="flex-c-c terms-container">
      <div className="flex-c-c terms-box">
        {terms.map((item) => (
          <div key={item.id} className="version-box">
            <Typography className="dual-grid-header-text">
              {item.header}
            </Typography>
            {item.text.map((single) => (
              <div className="text-box">
                <Typography className="dual-grid-text" key={single.id}>
                  - {single.text}
                </Typography>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terms;
