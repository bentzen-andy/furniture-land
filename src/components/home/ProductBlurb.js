import React from "react";
import BrandHighlightSmall from "./BrandHighlightSmall";

const ProductBlurb = () => {
  const brandHighlights = [
    <BrandHighlightSmall
      key="1"
      product="Fern"
      tagline="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
      img=""
      componentClassName="product-blurb__brand-highlight"
    />,
    <BrandHighlightSmall
      key="2"
      product="Zody"
      tagline="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
      img=""
      componentClassName="product-blurb__brand-highlight"
    />,
    <BrandHighlightSmall
      key="3"
      product="Soji"
      tagline="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
      img=""
      componentClassName="product-blurb__brand-highlight"
    />,
    <BrandHighlightSmall
      key="4"
      product="Very"
      tagline="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
      img=""
      componentClassName="product-blurb__brand-highlight"
    />,
  ];

  return (
    <div className="product-blurb">
      <h1>15% off everything</h1>
      <h2>
        The WFH Better Event is here to help you have a better busy day. Save on
        seating, desks, lighting, and more.
      </h2>
      <div className="product-blurb__brand-highlights">{brandHighlights}</div>
      <div className="product-blurb__btn">Shop Seating</div>
    </div>
  );
};

export default ProductBlurb;
