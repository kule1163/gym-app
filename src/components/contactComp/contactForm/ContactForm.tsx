import React from "react";
import { Typography } from "@mui/material";
import FormComp from "./formComp/FormComp";

const ContactForm = () => {
  const onSubmit = () => {};

  return (
    <div className="comp-form-container">
      <div className="header-container">
        <Typography className="text">MESSAGE</Typography>
        <div className="line"></div>
      </div>
      <FormComp onSubmit={onSubmit} />
    </div>
  );
};

export default ContactForm;
