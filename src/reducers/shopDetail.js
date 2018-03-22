import * as actionTypes from "../constants";

const defaultState = {
  shopinfo: false,
  menu: false,
  rating: {
    data: false,
    hasMore: false,
    offset: 0
  }
};
const shopDetail = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_MENU:
      return {
        ...state,
        menu: action.menu
      };
    case actionTypes.GET_RATING:
      return {
        ...state,
        rating: {
          data: [...state.rating.data, ...action.rating],
          offset: action.offset,
          hasMore: action.hasMore
        }
      };
    case actionTypes.GET_SHOPINFO:
      return {
        ...state,
        shopinfo: action.shopinfo
      };
    case actionTypes.CLEAR_RATING:
      return {
        ...state,
        rating: {
          data: [],
          offset: 0,
          hasMore: false
        }
      };
    default:
      return state;
  }
};

export default shopDetail;
