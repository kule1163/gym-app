import React from "react";
import Header from "../../../../components/header/Header";
import StoreProducts from "../../../../components/storeProducts/StoreProducts";
import { products } from "../../../../utils/products/products";

const LatestProducts = () => {
  return (
    <div id="products" style={{ width: "100%", paddingInline: "2rem" }}>
      <Header first="LATEST" second="PRODUCTS" />
      <StoreProducts products={products} />
    </div>
  );
};

export default LatestProducts;
