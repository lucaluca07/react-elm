import Http from "../util/http";

let ShopDetaiModel = {
  async getMenu(shop_id, latitude, longitude) {
    const result = await Http.get(
      `/api/shopping/shop/menu?shop_id=${shop_id}&latitude=${latitude}&longitude=${longitude}`
    );
    return result;
  },
  async getShopInfo(shop_id, latitude, longitude) {
    const result = await Http.get(
      `/api/shopping/shopinfo/${shop_id}?latitude=${latitude}&longitude=${longitude}`
    );
    return result;
  },
  async getRating(shop_id, offset, limit, latitude, longitude) {
    const result = await Http.get(
      `/api/shopping/shop/ratings/${shop_id}?offset=${offset}&limit=${limit}$latitude=${latitude}&longitude=${longitude}`
    );
    return result;
  }
};
export default ShopDetaiModel;
