import React from "react";
import Image from "../../assets/gym/homeBack.jpg";
import { useParams } from "react-router-dom";
import { posts } from "../../utils/posts/posts";
import { Typography } from "@mui/material";

const PostDeatail = () => {
  const { postID } = useParams();

  const singlePost = posts.find((item) => item.id === postID);

  return (
    <>
      {singlePost ? (
        <>
          <div className="layout-margin-bottom"></div>
          <div className="post-detail-container">
            <div className="img-box">
              <img src={Image} />
            </div>
            <div className="section-container">
              <Typography className="dual-grid-header-text">
                {singlePost.header}
              </Typography>
              <Typography className="dual-grid-header-secondry-text">
                {singlePost.secondaryHeader}
              </Typography>
              <Typography className="dual-grid-text">
                {singlePost.info}
              </Typography>
            </div>
            <div className="layout-margin-bottom"></div>
          </div>
        </>
      ) : (
        <div>no post matched</div>
      )}
    </>
  );
};

export default PostDeatail;
