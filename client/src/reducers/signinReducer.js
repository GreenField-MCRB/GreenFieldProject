import { SIGN_IN } from "../actions/types";

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
}
