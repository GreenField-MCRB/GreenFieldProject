import { combineReducers } from 'redux';
import postReducer from './signupReducer';
import signinReducer from './signinReducer';

export default combineReducers({
  posts: postReducer
  
});
