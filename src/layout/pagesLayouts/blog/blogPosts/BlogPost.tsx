import React from "react";
import { Post } from "../../../../utils/posts/posts";
import { Typography } from "@mui/material";
import Header from "../../../../components/header/Header";
import { useNavigate } from "react-router-dom";

interface BlogPostsProps {
  posts: Post[];
}

const BlogPosts = ({ posts }: BlogPostsProps) => {
  const navigate = useNavigate();

  return (
    <div className="blog-posts-container">
      <Header first="LATEST" second="STORIES" />
      <div className="blog-posts-box">
        {posts.map((item) => (
          <div key={item.id} className={`single-container ${item.bgColor}`}>
            <div className="single-box">
              <div className="img-box">
                <img src={item.img} />
              </div>
              <Typography className="type-text">
                {item.type.toUpperCase()}
              </Typography>

              <Typography className="info-text">{item.header}</Typography>

              <button
                onClick={() => navigate(`/post/${item.id}`)}
                className="orange-button-container"
              >
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
