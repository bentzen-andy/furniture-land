import React from "react";

const HeroImage = ({
  src = "https://foyr.com/learn/wp-content/uploads/2019/03/ideas-for-office-interior-design-scaled.jpg",
  alt = "Conference Table",
}) => {
  return <img className="hero-img" src={src} alt={alt} width="100%" />;
};

export default HeroImage;
