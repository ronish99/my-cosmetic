// src/components/AppRouter.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Products from "./Product";
import About from "./About";
import Contact from "./Contact";
import Ref from "./Ref/Ref";
import LayoutEffect from "./Uselayout/Uselayout";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ref" element={<Ref />} />
        <Route path="/layout" element={<LayoutEffect />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
