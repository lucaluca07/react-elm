import * as actionTypes from "../constants";
const defaultState = {};

function errorReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CART:
      return {
        ...state,
        [action.shopId]: {
          ...state[action.shopId],
          [action.goodsId]: action.num
        }
      };
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        [action.shopId]: {
          ...state[action.shopId],
          [action.goodsId]: action.num
        }
      };
    default:
      return state;
  }
}

export default errorReducer;
