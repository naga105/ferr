import React, { useEffect, useReducer } from "react";
import {
  postComment,
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders,
  pushForm,
} from "../redux/ActionCreators";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Menu from "./menu";
import SelectDish from "./SelectDish";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./about";
import Contact from "./contact/Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
  postFeedbackForm: (forms) => dispatch(pushForm(forms)),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
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
  fetchLeaders,
  postFeedbackForm,
}) {
  const [selectedDish, setSelectedDish] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchDishes();
    fetchPromos();
    fetchComments();
    fetchLeaders();
  }, []);

  return (
    <>
      <div className="">
        <Header />
      </div>
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="page" timeout={300}>
          <Routes location={location}>
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
                  leader={
                    leaders.leaders.filter((leader) => leader.featured)[0]
                  }
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
            <Route
              path="/aboutus"
              element={<About leaders={leaders.leaders} />}
            />
            <Route
              path="/contactus"
              element={
                <Contact
                  postFeedbackForm={postFeedbackForm}
                  resetFeedbackForm={resetFeedbackForm}
                />
              }
            />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
