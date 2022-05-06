import React from "react";
import ContactForm from "../../components/contactComp/contactForm/ContactForm";
import Image from "../../assets/gym/homeBack.jpg";
import { Typography } from "@mui/material";
import GoogleMap from "../../components/contactComp/googleMap/GoogleMap";
import FooterComp from "../../components/contactComp/footerComp/FooterComp";

const Contact = () => {
  return (
    <div
      id="contact"
      data-testid="background"
      style={{ backgroundImage: `url(${Image})` }}
      className="contact-container"
    >
      <div className="header-container">
        <Typography className="layout-small-header">MESSAGE</Typography>
        <div className="line"></div>
      </div>
      <div className="section-container">
        <ContactForm />
        <GoogleMap />
      </div>
      <FooterComp />
    </div>
  );
};

export default Contact;
