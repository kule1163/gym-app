import React from "react";
import { posts } from "../../../../utils/posts/posts";
import BlogPost from "../../../../layout/pagesLayouts/blog/blogPosts/BlogPost";

const FeaturedPosts = () => {
  const filteredPosts = posts.filter((item) => item.featured === true);

  return (
    <>
      <BlogPost posts={filteredPosts} />
    </>
  );
};

export default FeaturedPosts;
