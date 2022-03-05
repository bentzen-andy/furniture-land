import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import "./App.css";

// Pages
import Home from "../home/Home";
import ProductCategory from "../product-category/ProductCategory";

export function App() {
  return (
    <React.StrictMode>
      <Router>
        <div className="app">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/seating"
              element={<ProductCategory productType="seating" />}
            />
            <Route
              path="/desks-and-tables"
              element={<ProductCategory productType="tables" />}
            />
            <Route
              path="/lighting"
              element={<ProductCategory productType="lighting" />}
            />
            {/* <Route path="/*" element={<PageNotFound />} /> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;
