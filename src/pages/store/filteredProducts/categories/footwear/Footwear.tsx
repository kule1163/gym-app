import React from "react";
import StoreProducts from "../../../../../components/storeProducts/StoreProducts";
import { products } from "../../../../../utils/products/products";
import { useAppSelector } from "../../../../../app/hooks";

const Footwear = () => {
  const category = useAppSelector((state) => state.xTreme.menuChildrenCategory);

  console.log("categggg", category);

  const filteredProducts = products.filter(
    (item) => item.category.toLowerCase() == category.toLowerCase()
  );

  console.log(filteredProducts);

  return (
    <>
      <StoreProducts products={filteredProducts} />
    </>
  );
};

export default Footwear;
