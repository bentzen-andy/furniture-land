import React from "react";

const BrandHighlightSmall = ({ product, tagline, img, componentClassName }) => {
  return (
    <div className={componentClassName}>
      <img src={img} alt="Task Chair" />
      <h1>{product}</h1>
      <p>{tagline}</p>
    </div>
  );
};

export default BrandHighlightSmall;
