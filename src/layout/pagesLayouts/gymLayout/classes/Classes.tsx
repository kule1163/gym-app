import { Typography } from "@mui/material";
import React from "react";
import Image from "../../../../assets/gym/homeBack.jpg";
import Header from "../../../../components/header/Header";
import { classes } from "../../../../utils/classes/classes";

const Classes = () => {
  return (
    <div id="classes" className="about-container">
      <Header first="XTREME" second="CLASSES" />
      <div className="section">
        <div className="info-section">
          <Typography className="header">
            THE BEST WAY TO PREDICT THE FUTURE IS TO CREATE IT
          </Typography>
          <Typography className="header-info">
            ‍Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim
            magna, condimentum at imperdiet ac.
          </Typography>
          <Typography className="content">
            Aliquam erat volutpat. Donec elit nibh, luctus eu nisi eu, tempus
            condimentum ipsum. Nunc euismod viverra ante vel imperdiet. In
            pretium sagittis neque nec lacinia. Integer lorem odio, lobortis et
            odio eu, ullamcorper placerat arcu.
          </Typography>
          <div className="features-container">
            {classes.map((item) => (
              <div className="text-box" key={item.id}>
                <Typography>{item.text}</Typography>
              </div>
            ))}
          </div>
          <button className="orange-button-container">SUBSCRIBE TODAY</button>
        </div>
        <img src={Image} />
      </div>
    </div>
  );
};

export default Classes;
