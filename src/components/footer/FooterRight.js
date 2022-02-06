import React from "react";
import FooterBlock from "./FooterBlock";

const FooterRight = () => {
  const shopLinks = [
    "Seating",
    "Desks & Tables",
    "Lighting",
    "Accessories",
    "Parts",
    "Outlet",
  ];

  const aboutLinks = [
    "Haworth Story",
    "Why Ergonomics Matters",
    "Inspiration",
    "Small & Midsize Business Program",
    "Design Support",
    "Corporate Program",
  ];

  const supportLinks = [
    "Contact Us",
    "FAQs",
    "Warranty",
    "Returns & Refunds",
    "Shipping & Delivery",
    "Assembly & User Guides",
    "Promotions Terms & Conditions",
  ];

  return (
    <div className="footer-right">
      <FooterBlock heading="Shop" links={shopLinks} />
      <FooterBlock heading="About Us" links={aboutLinks} />
      <FooterBlock heading="Support" links={supportLinks} />
    </div>
  );
};

export default FooterRight;
