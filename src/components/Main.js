import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./menu";
import SelectDish from "./SelectDish";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
function Main() {
  const [data, setData] = useState({
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS,
  });
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <Router>
      <div className="">
        <Header />
      </div>
      <Routes>
        <Route
          path="/home"
          element={
            <Home
              dish={data.dishes.filter((dish) => dish.featured)[0]}
              promotion={data.promotions.filter((promo) => promo.featured)[0]}
              leader={data.leaders.filter((leader) => leader.featured)[0]}
            />
          }
        />

        <Route
          exact
          path="/menu"
          element={
            <Menu dishes={data.dishes} setSelectDish={setSelectedDish} />
          }
        />

        <Route path="/menu/:dishId" element={<SelectDish data={data} />} />

        <Route path="/contactus" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Main;
