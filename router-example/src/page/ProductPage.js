import React from "react";
import { useSearchParams } from "react-router-dom";
const ProductPage = () => {
  let [query, setQuery] = useSearchParams();
  return (
    <div>
      <h1>Show All Product</h1>
    </div>
  );
};

export default ProductPage;
