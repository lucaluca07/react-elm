import * as actionTypes from "../constants";
import ShopDetaiModel from "../fetch/shopDetail";

export const getMenu = async (shop_id, latitude, longitude) => {
  const { result } = await ShopDetaiModel.getMenu(shop_id, latitude, longitude);
  return {
    type: actionTypes.GET_MENU,
    menu: result
  };
};

export const getShopInfo = async (shop_id, latitude, longitude) => {
  const { result } = await ShopDetaiModel.getShopInfo(
    shop_id,
    latitude,
    longitude
  );
  return {
    type: actionTypes.GET_SHOPINFO,
    shopinfo: result
  };
};

export const getRating = async (
  shop_id,
  offset,
  limit,
  latitude,
  longitude
) => {
  const { result } = await ShopDetaiModel.getRating(
    shop_id,
    offset,
    limit,
    latitude,
    longitude
  );
  return {
    type: actionTypes.GET_RATING,
    rating: result,
    offset: offset + limit,
    hasMore: result.length <= limit
  };
};

export const clearRating = () => {
  return {
    type: actionTypes.CLEAR_RATING
  };
};

export const clearMenu = () => {
  return {
    type:actionTypes.CLEAR_MENU
  }
}
