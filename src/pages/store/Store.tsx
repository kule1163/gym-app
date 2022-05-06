import React from "react";
import { Outlet } from "react-router-dom";
import StoreProducts from "../../components/storeProducts/StoreProducts";
import Contact from "../../layout/contact/Contact";
import XtremeProducts from "../../layout/pagesLayouts/store/xtremeProduxts/XtremeProducts";

const Store = () => {
  return (
    <div>
      <div className="layout-margin-bottom"></div>
      <XtremeProducts />
      <div className="layout-margin-bottom"></div>
    </div>
  );
};

export default Store;
