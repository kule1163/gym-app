import React from "react";
import StoreProducts from "../../../../../components/storeProducts/StoreProducts";
import { products } from "../../../../../utils/products/products";
import { useAppSelector } from "../../../../../app/hooks";

const Apparel = () => {
  const category = useAppSelector((state) => state.xTreme.menuChildrenCategory);

  const filteredProducts = products.filter(
    (item) => item.category.toLowerCase() === category
  );

  return (
    <>
      <StoreProducts products={filteredProducts} />
    </>
  );
};

export default Apparel;
