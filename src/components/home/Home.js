import React from "react";
import HeroImage from "../home/HeroImage";
import ProductBlurb from "../home/ProductBlurb";
import ProductStats from "../home/ProductStats";
import BigQuote from "../home/BigQuote";
import InspirationBoard from "../home/InspirationBoard";

const Home = () => {
  return (
    <React.Fragment>
      <HeroImage />
      <ProductBlurb /> {/* white */}
      <ProductStats /> {/* dark blue */}
      <InspirationBoard /> {/* white */}
      <BigQuote /> {/* orange */}
    </React.Fragment>
  );
};

export default Home;
