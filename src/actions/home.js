import * as actionTypes from "../constants";
import HomeModel from "../fetch";

export const getEntries = async (longitude, latitude) => {
  try {
    const { result } = await HomeModel.getEntriesData(longitude, latitude);
    return {
      type: actionTypes.GET_ENTRIES_DATA,
      foodentry: result[0].entries,
      activity: result[1].entries
    };
  } catch (e) {
    return e;
  }
};

export const getRestaurants = async (
  longitude,
  latitude,
  offset,
  limit,
  filter,
  order,
  vip,
  delivery,
  activity,
  support_ids,
  category_ids
) => {
  try {
    const { result } = await HomeModel.getRestaurants(
      longitude,
      latitude,
      offset,
      limit,
      filter,
      order,
      vip,
      delivery,
      activity,
      support_ids,
      category_ids
    );
    return {
      type: actionTypes.GET_RESTAURANTS,
      restaurants: result.items,
      offset: offset + limit,
      hasMore: result.items.length === limit
    };
  } catch (e) {
    return e;
  }
};

export const clearRestaurants = () => ({
  type: actionTypes.CLEAR_RESTAURANTS
});

export const getFilterBar = async (longitude, latitude) => {
  try {
    const { result } = await HomeModel.getFilterBar(longitude, latitude);
    return {
      type: actionTypes.GET_FILTER_BAR,
      filterMore: result
    };
  } catch (e) {
    return e;
  }
};
