import React from "react";
import { Outlet } from "react-router-dom";

const Faq = () => {
  return (
    <div style={{ maxWidth: "100vw" }}>
      <div className="layout-margin-bottom"></div>
      <Outlet />
      <div className="layout-margin-bottom"></div>
    </div>
  );
};

export default Faq;
