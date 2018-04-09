import * as actionTypes from "../constants";

const defaultState = {
  id: false,
  user_id: false,
  newUser: false,
  username: false,
  mobile: false,
  address: [],
  captchas:false
};

const userinfo = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_CAPTCHAS:
      return {...state,
        captchas:action.captchas
      }
    case actionTypes.LOGIN:
      return { ...state };
    case actionTypes.LOGOUT:
      return { ...state };
    default:
      return state;
  }
};

export default userinfo;
