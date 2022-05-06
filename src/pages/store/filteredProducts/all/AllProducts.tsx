import React from "react";
import StoreProducts from "../../../../components/storeProducts/StoreProducts";
import { products } from "../../../../utils/products/products";

const AllProducts = () => {
  return (
    <>
      <StoreProducts products={products} />
    </>
  );
};

export default AllProducts;
