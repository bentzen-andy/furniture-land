import React from "react";

const InfoGraphic = ({ img, heading, tagline }) => {
  return (
    <div className="info-graphic">
      <img src={img} alt="Infographic" />
      <h1>{heading}</h1>
      <p>{tagline}</p>
    </div>
  );
};

export default InfoGraphic;
