import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h2>Products Page</h2>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Products;
