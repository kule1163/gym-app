import React from "react";
import { Outlet } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <div className="layout-margin-bottom"></div>
      <Outlet />
      <div className="layout-margin-bottom"></div>
    </div>
  );
};

export default Blog;
