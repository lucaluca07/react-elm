import { combineReducers } from "redux";
import home from './home'
import location from './location'
import search from './search'
import errorReducer from './errorReducer'


const rootReducer = combineReducers({
  home,
  location,
  search,
  errorReducer
});

export default rootReducer;
