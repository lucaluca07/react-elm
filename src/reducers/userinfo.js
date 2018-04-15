import * as actionTypes from "../constants";

const defaultState = {
  id: false,
  gift_amount: false,
  newUser: false,
  username: false,
  mobile: false,
  avatar: false,
  point: 0,
  balance: 0,
  address: [],
  tempAddress: {},
  order:[]
};

const userinfo = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_CAPTCHAS:
      return {
        ...state
      }
    case actionTypes.LOGIN:
    case actionTypes.GET_USERINFO:
      return {
        ...state,
        username: action.username,
        id: action.user_id,
        mobile: action.mobile,
        gift_amount: action.gift_amount,
        avatar: action.avatar,
        point: action.point,
        balance: action.balance
      };
    case actionTypes.GET_CURRENT_USER:
      return {
        ...state,
        id: action.user_id
      }
    case actionTypes.UPLOAD_AVATAR:
      return {
        ...state,
        avatar: action.avatar
      }
    case actionTypes.ERROR_401:
    case actionTypes.SIGNOUT:
      return {
        ...state,
        ...defaultState
      };
    case actionTypes.GET_ADDRESS:
    case actionTypes.ADD_ADDRESS:
    case actionTypes.DELETE_ADDRESS:
    case actionTypes.MODIFY_ADDRESS:
      return {
        ...state,
        address: action.addresses
      }
    case actionTypes.TEMP_ADDRESS:
      return {
        ...state,
        tempAddress: action.address
      }
    case actionTypes.GET_ORDER:
      return {
        ...state,
        order:[...state.order,...action.order]
      }
    default:
      return state;
  }
};

export default userinfo;
