import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Pages
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/*" element={<Navigate to ="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
