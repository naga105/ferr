import * as ActionTypes from "./ActionTypes";
export const InitialFeedback = {
  firstname: "",

  lastname: "",

  telnum: "",

  email: "",

  agree: false,

  contactType: "Tel.",

  message: "",
};

export const Forms = (
  state = {
    isLoading: true,

    errMess: null,

    forms: InitialFeedback,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.PUSH_FORM:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        feedback: action.payload,
      };

    case ActionTypes.DEL_FORM:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        feedback: InitialFeedback,
      };

    default:
      return state;
  }
};
