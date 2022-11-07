import React, { useEffect, useReducer } from "react";
import {
  postComment,
  fetchDishes,
  fetchComments,
  fetchPromos,
} from "../redux/ActionCreators";
import Menu from "./menu";
import SelectDish from "./SelectDish";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./about";
import Contact from "./contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { actions } from "react-redux-form";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};
const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) =>
    dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
});
function Main({
  dishes,
  comments,
  promotions,
  leaders,
  postComment,
  fetchDishes,
  resetFeedbackForm,
  fetchComments,
  fetchPromos,
}) {
  const [selectedDish, setSelectedDish] = useState(null);

  useEffect(() => {
    fetchDishes();
    fetchPromos();
    fetchComments();
  }, []);

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
              dish={dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={dishes.isLoading}
              dishesErrMess={dishes.errMess}
              promotion={
                promotions.promotions.filter((promo) => promo.featured)[0]
              }
              promoLoading={promotions.promotions.isLoading}
              promoErrMess={promotions.promotions.errMess}
              leader={leaders.filter((leader) => leader.featured)[0]}
            />
          }
        />

        <Route
          exact
          path="/menu"
          element={
            <Menu
              dishes={dishes.dishes}
              dishesLoading={dishes.isLoading}
              dishesErrMess={dishes.errMess}
              setSelectDish={setSelectedDish}
            />
          }
        />

        <Route
          path="/menu/:dishId"
          element={
            <SelectDish
              dishes={dishes.dishes}
              dishesLoading={dishes.isLoading}
              dishesErrMess={dishes.errMess}
              comments={comments.comments}
              postComment={postComment}
            />
          }
        />
        <Route path="/aboutus" element={<About leaders={leaders} />} />
        <Route
          path="/contactus"
          element={<Contact resetFeedbackForm={resetFeedbackForm} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
