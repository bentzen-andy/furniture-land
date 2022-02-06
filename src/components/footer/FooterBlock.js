import React from "react";

const FooterBlock = ({ heading, links }) => {
  return (
    <div className="footer-block">
      <div className="footer-block__heading">{heading}</div>
      <div className="footer-block__links">
        {links.map((link) => (
          <div className="footer-block__link" key={link}>
            {link}
          </div>
        ))}
      </div>
      {}
    </div>
  );
};

export default FooterBlock;
