import { combineReducers } from "redux";
import home from './home'
import errorReducer from './errorReducer'


const rootReducer = combineReducers({
  home,
  errorReducer
});

export default rootReducer;
