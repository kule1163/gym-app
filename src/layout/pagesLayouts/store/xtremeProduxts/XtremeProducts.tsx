import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../../components/header/Header";
import StoreProducts from "../../../../components/storeProducts/StoreProducts";
import { products } from "../../../../utils/products/products";

const XtremeProducts = () => {
  return (
    <div id="products" className="xtreme-products-container">
      <Header first="XTREME" second="PRODUCTS" />
      {/* <StoreProducts products={products} /> */}
      <Outlet />
    </div>
  );
};

export default XtremeProducts;
