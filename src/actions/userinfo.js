import * as actionTypes from "../constants";
import UserModel from "../fetch/userinfo";
import Toast from "../components/Toast";

export const getCaptchas = async mobile => {
  try {
    const { result } = await UserModel.getCaptchas(mobile);
    if (result.code == 200) {
      Toast.info("验证码已发送");
    }
    return {
      type: actionTypes.GET_CAPTCHAS
    };
  } catch (e) {
    return e;
  }
};
export const login = async (username, password, messageLogin) => {
  try {
    const { result } = await UserModel.login(username, password, messageLogin);
    if (result.code == 400) {
      Toast.info(result.message);
    }
    return {
      type: actionTypes.LOGIN,
      username: result.username,
      user_id: result.user_id,
      mobile: result.mobile,
      gift_amount: result.gift_amount
    };
  } catch (e) {
    return e;
  }
};

export const getCurrentUser = async () => {
  try {
    const { result } = await UserModel.getCurrentUser();
    return {
      type: actionTypes.GET_CURRENT_USER,
      user_id: result.user_id
    };
  } catch (e) {
    return e;
  }
};
export const getUserinfo = async user_id => {
  try {
    const { result } = await UserModel.getUserInfo(user_id);
    return {
      type: actionTypes.GET_USERINFO,
      username: result.username,
      user_id: result.user_id,
      mobile: result.mobile,
      gift_amount: result.gift_amount,
      avatar: result.avatar,
      point:result.point,
      balance:result.balance
    };
  } catch (e) {
    return e;
  }
};
export const uploadAvatar = async (user_id, data) => {
  try {
    const result  = await UserModel.uploadAvatar(user_id, data);
    return {
      type: actionTypes.UPLOAD_AVATAR,
      avatar: result.avatar
    };
  } catch (e) {
    return e;
  }
};

export const signout = async (user_id, data) => {
  try {
    await UserModel.signout();
    return {
      type: actionTypes.SIGNOUT
    };
  } catch (e) {
    return e;
  }
};

export const getAddresses = async (user_id) => {
  try {
    const {result} = await UserModel.getAddresses(user_id);
    return {
      type: actionTypes.GET_ADDRESS,
      addresses:result
    };
  } catch (e) {
    return e;
  }
};