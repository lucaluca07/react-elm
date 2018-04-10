import * as actionTypes from "../constants";

const defaultState = {
  id: false,
  gift_amount: false,
  newUser: false,
  username: false,
  mobile: false,
  avatar:false,
  address: []
};

const userinfo = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_CAPTCHAS:
      return {...state}
    case actionTypes.LOGIN:
    case actionTypes.GET_USERINFO:
      return { ...state,
        username:action.username,
        id:action.user_id,
        mobile:action.mobile,
        gift_amount:action.gift_amount,
        avatar:action.avatar
      };
    case actionTypes.GET_CURRENT_USER:
      return {...state,
        id:action.user_id
      }
    case actionTypes.UPLOAD_AVATAR:
      return {...state,
        avatar:action.avatar
      }
    case actionTypes.LOGOUT:
      return { ...state };
    default:
      return state;
  }
};

export default userinfo;
