import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Sitemap from "../public/sitemap.xml";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/sitemap.xml" element={<Sitemap />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;