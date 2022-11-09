import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import logger from "redux-logger";

import { Dishes } from "./dishes";

import { Comments } from "./comments";

import { Promotions } from "./promotions";

import { Leaders } from "./leaders";
import { Forms } from "./forms";
import { InitialFeedback } from "./forms";

import { createForms } from "react-redux-form";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,

      comments: Comments,

      promotions: Promotions,

      leaders: Leaders,

      forms: Forms,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
