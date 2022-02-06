import React from "react";
import FooterLeft from "./FooterLeft";
import FooterBlock from "./FooterBlock";
import FooterMid from "./FooterMid";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <div className="footer">
      <FooterLeft />
      <FooterBlock />
      <FooterBlock />
      <FooterBlock />
      <FooterBlock />
      <FooterMid />
      <FooterBottom />
    </div>
  );
};

export default Footer;
