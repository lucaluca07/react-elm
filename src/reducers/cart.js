import * as actionTypes from "../constants";
const defaultState = {};

function errorReducer(state = defaultState, action) {
  let result = null;
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
      // console.warn('未定义的异常', action);
      return state;
  }
}

export default errorReducer;
