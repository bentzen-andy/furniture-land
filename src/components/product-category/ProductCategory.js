import React, { useEffect, useState } from "react";

const ProductCategory = ({ productType }) => {
  const [products, setProducts] = useState(["one", "two", "three"]);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      // fetch("https://furniture-land-abentzen.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => data[productType])
      .then((data) => setProducts(data));
  }, [productType]);

  return (
    <div>
      {products.map((product) => (
        <div key={product}>{product}</div>
      ))}
    </div>
  );
};

export default ProductCategory;
