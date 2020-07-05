import { combineReducers } from "redux";
import signReducer from "./signReducer";
// import signinReducer from './signinReducer';

export default combineReducers({
  auth: signReducer,
});
