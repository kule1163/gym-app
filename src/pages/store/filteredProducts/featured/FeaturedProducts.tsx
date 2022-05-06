import { constants } from "perf_hooks";
import React from "react";
import StoreProducts from "../../../../components/storeProducts/StoreProducts";
import { ProductProps, products } from "../../../../utils/products/products";

const FeaturedProducts = () => {
  const filteredProducts: ProductProps[] = products.filter(
    (item) => item.featured === true
  );

  return (
    <>
      <StoreProducts products={filteredProducts} />
    </>
  );
};

export default FeaturedProducts;
