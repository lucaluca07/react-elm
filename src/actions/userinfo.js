import * as actionTypes from "../constants";
import UserModel from "../fetch/userinfo";
import Toast from "../components/Toast"

export const getCaptchas = async(mobile) => {
    try {
        const { result } = await UserModel.getCaptchas(mobile);
        if(result.code == 200){
            Toast.info("验证码已发送")
        }
        return {
          type: actionTypes.GET_CAPTCHAS,
          captchas: result.code
        };
      } catch (e) {
        return e;
      }
};
