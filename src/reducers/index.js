import { combineReducers } from "redux";
import home from './home'
import location from './location'
import search from './search'
import category from './category'
import errorReducer from './errorReducer'


const rootReducer = combineReducers({
  home,
  location,
  search,
  category,
  errorReducer
});

export default rootReducer;
