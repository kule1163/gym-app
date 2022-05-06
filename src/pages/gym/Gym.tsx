import React from "react";
import About from "../../layout/pagesLayouts/gymLayout/about/About";
import Rewies from "../../layout/pagesLayouts/gymLayout/about/reviews/Rewies";
import Gallery from "../../layout/pagesLayouts/gymLayout/gallery/Gallery";
import Classes from "../../layout/pagesLayouts/gymLayout/classes/Classes";
import Schedule from "../../layout/pagesLayouts/gymLayout/schedule/Schedule";
import Pricing from "../../layout/pagesLayouts/gymLayout/pricing/Pricing";
import LatestProducts from "../../layout/pagesLayouts/gymLayout/latestProducts/LatestProducts";
import Posts from "../../layout/pagesLayouts/gymLayout/posts/Posts";

const Gym = () => {
  return (
    <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
      <Posts />
      <div className="layout-margin-bottom"></div>
      <About />
      <div className="layout-margin-bottom"></div>
      <Rewies />
      <Gallery />
      <div className="layout-margin-bottom"></div>
      <Classes />
      <div className="layout-margin-bottom"></div>
      <Schedule />
      <Pricing />
      <div className="layout-margin-bottom"></div>
      <LatestProducts />
      <div className="layout-margin-bottom"></div>
    </div>
  );
};

export default Gym;
