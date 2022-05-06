import React from "react";
import { posts } from "../../../../../utils/posts/posts";
import { useAppSelector } from "../../../../../app/hooks";
import BlogPost from "../../../../../layout/pagesLayouts/blog/blogPosts/BlogPost";

const Habits = () => {
  const category = useAppSelector((state) => state.xTreme.menuChildrenCategory);

  const filteredPosts = posts.filter(
    (item) => item.type.toLowerCase() === category
  );

  return (
    <>
      <BlogPost posts={filteredPosts} />
    </>
  );
};

export default Habits;
