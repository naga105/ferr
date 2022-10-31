import React, { useEffect } from "react";
import { addComment, fetchDishes } from "../redux/ActionCreators";
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
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
});
function Main({
  dishes,
  comments,
  promotions,
  leaders,
  addComment,
  fetchDishes,
  resetFeedbackForm,
}) {
  const [selectedDish, setSelectedDish] = useState(null);

  useEffect(() => {
    fetchDishes();
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
              promotion={promotions.filter((promo) => promo.featured)[0]}
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
              comments={comments}
              addComment={addComment}
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
