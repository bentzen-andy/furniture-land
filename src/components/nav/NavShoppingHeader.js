import React from "react";

const ShoppingHeader = () => {
  return (
    <nav className="shopping-header">
      <div className="shopping-header__logo">LOGO</div>
      <ul>
        <li className="shopping-header__item">Seating</li>
        <li className="shopping-header__item">Desks & Tables</li>
        <li className="shopping-header__item">Lighting</li>
        <li className="shopping-header__item">Accessories</li>
      </ul>
    </nav>
  );
};

export default ShoppingHeader;
