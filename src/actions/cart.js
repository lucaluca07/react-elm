import * as actionType from "../constants";

export const changeCart = (shopId,goodsId,num) => ({
  type: actionType.CHANGE_CART,
  shopId,
  goodsId,
  num
});

export const clearCart = shopId => ({
    type:actionType.CHANGE_CART,
    shopId
})
