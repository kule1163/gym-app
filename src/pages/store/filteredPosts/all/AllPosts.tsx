import React from "react";
import { posts } from "../../../../utils/posts/posts";
import BlogPost from "../../../../layout/pagesLayouts/blog/blogPosts/BlogPost";

const AllPosts = () => {
  return (
    <>
      <BlogPost posts={posts} />
    </>
  );
};

export default AllPosts;
