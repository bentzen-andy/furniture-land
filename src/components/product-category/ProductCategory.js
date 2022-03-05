import React, { useEffect, useState } from "react";

const ProductCategory = ({ productType }) => {
  const [products, setProducts] = useState(["one", "two", "three"]);

  useEffect(() => {
    // let REST_API_URL = "http://localhost:8080/products";
    let REST_API_URL = "https://furniture-land-abentzen.herokuapp.com/products";

    fetch(REST_API_URL)
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
