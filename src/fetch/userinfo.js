import Http from "../util/http";

let UserModel = {
  async getCaptchas(mobile) {
    const result = await Http.get(`/api/captchas?mobile=${mobile}`);
    return result;
  },
  async login(username, password, messageLogin) {
    const result = await Http.post(`/api/login`, {
      body: {
        username: username,
        password: !messageLogin && password,
        captcha_code: messageLogin && password
      }
    });
    return result;
  },
  async getCurrentUser() {
    const result = await Http.get(`/api/current_user`);
    return result;
  },
  async getUserInfo(user_id) {
    const result = await Http.get(`/api/userinfo?userid=${user_id}`);
    return result;
  },

  async uploadAvatar(user_id, data) {
    let result = {code:400, message:"上传失败"};
    try {
      result = await fetch(`/api/user/${user_id}/avatar`, {
        method: "POST",
        credentials: "include",
        body: data
      });
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }
};

export default UserModel;
