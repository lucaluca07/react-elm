import { combineReducers } from "redux";
import home from './home'
import location from './location'
import errorReducer from './errorReducer'


const rootReducer = combineReducers({
  home,
  location,
  errorReducer
});

export default rootReducer;
