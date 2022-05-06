import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { Typography } from "@mui/material";
import Background from "../../assets/gym/homeBack.jpg";
import { socialIcons } from "../../utils/socialIcons/socialIcons";
import { useAppSelector } from "../../app/hooks";
import { useLocation } from "react-router-dom";
import Badge from "../../components/navbar/navComp/Badge";

const Home = () => {
  const location = useLocation();

  const homeDynamicText = useAppSelector(
    (state) => state.xTreme.homeDynamicText
  );

  return (
    <>
      <div
        id="home"
        data-testid="background"
        style={{ backgroundImage: `url(${Background})` }}
        className="home-container"
      >
        <div className="header-container">
          <div>
            <Typography className="left-text font" variant="h2">
              {homeDynamicText.firstText?.toUpperCase()}
            </Typography>
          </div>
          <div>
            <Typography className="right-text font" variant="h2">
              {homeDynamicText.secondText?.toUpperCase()}
            </Typography>
          </div>
        </div>
        <div className="left-top sm-hidden">
          <Typography className="top-text">
            VOTED <span className="span">BEST GYM</span> IN 2019
          </Typography>
        </div>
        <div className="middle">
          <Badge />
        </div>
        <div className="right-top sm-hidden">
          <Typography className="top-text">
            ESTABLISHED IN <span className="span">2003</span>
          </Typography>
        </div>
        <div className="left-bottom">
          {socialIcons.map((item) => (
            <div key={item.id} className="icon-container">
              <item.icon />
            </div>
          ))}
        </div>
        <div className="right-bottom">
          <input
            aria-label="email-text"
            className="input"
            placeholder="Newsletter (enter email)"
            type="text"
          />
          <div className="icon-container">
            <FaTelegramPlane />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
