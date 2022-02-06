import React from "react";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <div className="footer">
      <FooterLeft />
      <FooterRight />
      <FooterBottom />
    </div>
  );
};

export default Footer;
