import * as actionTypes from "../constants";

const defaultState = {
  id: false,
  user_id: false,
  newUser: false,
  username: false,
  mobile: false,
  address: []
};

const userinfo = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return { ...state };
    case actionTypes.LOGOUT:
      return { ...state };
    default:
      return state;
  }
};

export default userinfo;
