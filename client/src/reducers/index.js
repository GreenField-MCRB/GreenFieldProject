import { combineReducers } from 'redux';
import postReducer from './signupReducer';

export default combineReducers({
  posts: postReducer
});
