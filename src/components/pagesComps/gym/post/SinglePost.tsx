import { Typography } from "@mui/material";
import React from "react";
import { BsDot } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { posts } from "../../../../utils/posts/posts";

const SingleWorkout = () => {
  const navigate = useNavigate();

  return (
    <>
      {posts.map((item) => (
        <div key={item.id} className={`single-container ${item.bgColor}`}>
          <div className="single-box">
            <div className="img-box">
              <img src={item.img} />
            </div>
            <div className="date-box">
              <Typography className="text">
                {item.type.toUpperCase()}
              </Typography>
              <BsDot className="icon" size={20} />
              <Typography className="text">{item.date}</Typography>
            </div>
            <Typography className="info-text">{item.header}</Typography>
            <div>
              <button
                onClick={() => navigate(`/post/${item.id}`)}
                className="button"
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SingleWorkout;
