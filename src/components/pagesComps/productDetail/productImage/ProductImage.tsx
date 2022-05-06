import React from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { setCurrentProductIndex } from "../../../../features/cocktails/xTreme";
import { ProductProps } from "../../../../utils/products/products";

interface ProductImageProps {
  product: ProductProps;
}

const ProductImage = ({ product }: ProductImageProps) => {
  const dispatch = useAppDispatch();
  const currentProductIndex = useAppSelector(
    (state) => state.xTreme.currentProductIndex
  );

  return (
    <div className="product-images-container ">
      <div className="big-image-container">
        <img src={product?.details[currentProductIndex].img} />
      </div>
      <div className="small-image-container">
        {product?.details.map((item, index) => (
          <div
            data-testid="image-box"
            onClick={() => dispatch(setCurrentProductIndex(index))}
            className="small-image-box"
          >
            <img
              className={
                index === currentProductIndex ? "test-product-image" : ""
              }
              src={item.img}
              alt="product-images"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
