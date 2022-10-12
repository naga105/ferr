import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./menu";
import DishDetail from "./DishDetail/DishDetail";
import { DISHES } from "../shared/dishes";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

function Main() {
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <Router>
      <div className="">
        <Header />
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          exact
          path="/menu"
          element={
            <div className="container">
              <div className="row">
                <Menu dishes={DISHES} setSelectDish={setSelectedDish} />
                <DishDetail selectDish={selectedDish} />
              </div>
            </div>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Main;
