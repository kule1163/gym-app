import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../../../components/header/Header";
import ProductFeatures from "../../../../components/pagesComps/productDetail/productFeatures/ProductFeatures";
import ProductImage from "../../../../components/pagesComps/productDetail/productImage/ProductImage";
import { products } from "../../../../utils/products/products";

const ProductContainer = () => {
  const { productID } = useParams();

  const product = products.find((item) => item.id === productID);

  return (
    <>
      {product ? (
        <div className="product-container">
          <Header first="PRODUCT" second="DETAILS" />
          <div className="product-box">
            <ProductImage product={product} />
            <ProductFeatures product={product} />
          </div>
        </div>
      ) : (
        <div>np matched product</div>
      )}
    </>
  );
};

export default ProductContainer;
