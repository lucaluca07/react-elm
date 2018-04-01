import * as actionTypes from "../constants";
const defaultState = {};

function errorReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CART:
      return {
        ...state,
        [action.shopId]: {
          ...state[action.shopId],
          [action.goodsId]: action.info
        }
      };
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        [action.shopId]: {
          ...state[action.shopId],
          [action.goodsId]: action.info
        }
      };
    default:
      return state;
  }
}

export default errorReducer;
