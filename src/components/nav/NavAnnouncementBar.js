import React from "react";

const AnnouncementBar = () => {
  return (
    <nav className="announcement-bar">
      <div className="announcement-bar__tag-line">
        Free shipping on everything
      </div>
      <ul>
        <li className="announcement-bar__item">Account</li>
        <li className="announcement-bar__item">Cart</li>
      </ul>
    </nav>
  );
};

export default AnnouncementBar;
