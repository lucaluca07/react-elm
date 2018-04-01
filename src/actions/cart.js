import * as actionType from "../constants";

export const changeCart = (shopId,goodsId,info) => ({
  type: actionType.CHANGE_CART,
  shopId,
  goodsId,
  info
});

export const clearCart = shopId => ({
    type:actionType.CHANGE_CART,
    shopId
})
