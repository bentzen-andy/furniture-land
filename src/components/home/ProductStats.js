import React from "react";
import InfoGraphic from "./InfoGraphic";

const ProductStats = () => {
  const infoGraphics = [
    <InfoGraphic
      key="1"
      img=""
      heading="Experts & Innovators"
      tagline="We’ve got over 70 years of experience. And thousands of ideas."
    />,
    <InfoGraphic
      key="2"
      img=""
      heading="Designers & Dreamers"
      tagline="You’ll find so many choices to keep you well, day in and day out."
    />,
    <InfoGraphic
      key="3"
      img=""
      heading="Craftsmanship & Quality"
      tagline="Everything we make is for the long haul. It’s even tested for commercial use."
    />,
    <InfoGraphic
      key="4"
      img=""
      heading="Ease & Convenience"
      tagline="All orders ship free. All returns are no problem."
    />,
  ];

  return (
    <div className="product-stats">
      <h1>Let’s WFH like we mean it.</h1>
      <p>
        We’re here to help you every step of the way, from choosing your setup
        to making sure you love it.
      </p>
      {infoGraphics}
    </div>
  );
};

export default ProductStats;
