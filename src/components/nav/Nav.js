import React from "react";
import NavAnnouncementBar from "./NavAnnouncementBar";
import NavShoppingHeader from "./NavShoppingHeader";

const Nav = () => {
  return (
    <nav className="nav">
      <NavAnnouncementBar />
      <NavShoppingHeader />
    </nav>
  );
};

export default Nav;
