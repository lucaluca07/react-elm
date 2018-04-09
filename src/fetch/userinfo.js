import Http from "../util/http";

let UserModel = {
  async getCaptchas(mobile) {
    const result = await Http.get(
      `/api/captchas?mobile=${mobile}`
    );
    return result;
  },
  async getCategory(latitude, longitude) {
    const result = await Http.get(
      `/api/shopping/category?latitude=${latitude}&longitude=${longitude}`
    );
    return result;
  }
};
export default UserModel;
