import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const goProductPage = () => {
    navigate("/products?q=pants");
  };
  return (
    <div>
      <h1>Homepage</h1>
      <Link to="/about">About</Link>
      <button onClick={goProductPage}>go to Product page</button>
    </div>
  );
};

export default Homepage;
