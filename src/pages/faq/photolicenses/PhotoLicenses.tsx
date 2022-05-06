import React from "react";
import { products } from "../../../utils/products/products";

const PhotoLicenses = () => {
  return (
    <div className="photo-license-container">
      {products.map((item) => (
        <div key={item.id} className="single-box">
          <div className="flex-c-c">
            <img src={item.details[0].img} alt="license" />
          </div>
          <div
            onClick={() => window.open(item.license, "_blank")}
            className="button-box-b"
          >
            <button className="orange-button-container">CHECK LICENSE</button>
          </div>
          <div className="button-box-s">
            <div className="orange-icon">CL</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoLicenses;
