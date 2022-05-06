import { Typography } from "@mui/material";
import React from "react";
import { reviews } from "../../../../../utils/about/reviews";
import { AiFillStar } from "react-icons/ai";
import Image from "../../../../../assets/gym/homeBack.jpg";

const Rewies = () => {
  return (
    <>
      <div
        data-testid="background"
        style={{ backgroundImage: `url(${Image})` }}
        className="reviews-container"
      >
        {reviews.map((item) => (
          <div key={item.id} className="single-container">
            <div className="img-container">
              <img alt="person-img" src={item.img} />
            </div>

            <Typography className="job-text">{item.job}</Typography>
            <Typography className="name-text">{item.name}</Typography>
            <div className="content-box">
              <Typography className="content-text">{item.content}</Typography>
            </div>
            <div className="star-box">
              {Array.from(Array(5)).map((item, index) => (
                <AiFillStar key={index} className="icon" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Rewies;
