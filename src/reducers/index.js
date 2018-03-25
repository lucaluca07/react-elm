import { combineReducers } from "redux";
import shop from "./shop";
import location from "./location";
import search from "./search";
import category from "./category";
import shopDetail from "./shopDetail";
import cart from './cart'
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  shop,
  location,
  search,
  category,
  shopDetail,
  cart,
  errorReducer
});

export default rootReducer;
