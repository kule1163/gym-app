import React from "react";

const GoogleMap = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.20109827358!2d36.84433231479746!3d37.385076242258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152e7132f1c602b9%3A0x9b0a29b6ab84943c!2sVak%C4%B1fBank%20ATM!5e0!3m2!1str!2str!4v1651016548261!5m2!1str!2str"
        width="600"
        height="450"
        style={{ border: "0", width: "100%", height: "100%" }}
        /*  allowfullscreen="" */
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
