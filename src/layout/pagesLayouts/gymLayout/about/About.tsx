import { Typography } from "@mui/material";
import React from "react";
import Image from "../../../../assets/gym/homeBack.jpg";
import Header from "../../../../components/header/Header";
import { featuresItems } from "../../../../utils/about/featuresItem";

const About = () => {
  return (
    <div id="about" className="about-container">
      <Header first="XTREME" second="ARENAS" />
      <div className="section">
        <img src={Image} />
        <div className="info-section">
          <Typography className="dual-grid-header-text">
            RESPECT YOUR BODY, IT’S THE ONLY ONE YOU GET
          </Typography>
          <Typography className="dual-grid-header-secondry-text">
            ‍Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim
            magna, condimentum at imperdiet ac.
          </Typography>
          <Typography className="dual-grid-text">
            Aliquam erat volutpat. Donec elit nibh, luctus eu nisi eu, tempus
            condimentum ipsum. Nunc euismod viverra ante vel imperdiet. In
            pretium sagittis neque nec lacinia. Integer lorem odio, lobortis et
            odio eu, ullamcorper placerat arcu.
          </Typography>
          <div className="features-container">
            {featuresItems.map((item) => (
              <div className="text-box" key={item.id}>
                <Typography>{item.text}</Typography>
              </div>
            ))}
          </div>
          <button className="orange-button-container">SUBSCRIBE TODAY</button>
        </div>
      </div>
    </div>
  );
};

export default About;
