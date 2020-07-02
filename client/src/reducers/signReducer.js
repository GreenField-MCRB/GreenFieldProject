import { SIGN_UP } from "../actions/types";
import { SIGN_IN } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
    case SIGN_IN:
      localStorage.setItem("token", action.payload.token);
      console.log(action.payload);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    default:
      return state;
  }
}
