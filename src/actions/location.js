import * as actionType from "../constants";
import LocationModel from "../fetch/location";

export const setLongitudeAndLatitude = (longitude, latitude) => ({
  type: actionType.SET_LONGITUDE_LATITUDE,
  longitude,
  latitude
});

export const setCurrentAddress = address => ({
  type: actionType.SET_CURRENT_ADDRESS,
  address
});

export const setLocationInfo = (address, longitude, latitude) => {
  return {
    type: actionType.SET_LOCATION_INFO,
    location: {
      name: address,
      latitude: latitude,
      longitude: longitude
    }
  };
};

export const clearLocationList = () => {
  return {
    type: actionType.GET_LOCATION_LIST,
    locationList: []
  };
};

export const getLocationInfo = async (longitude, latitude) => {
  try {
    const { result } = await LocationModel.getLocationInfo(longitude, latitude);
    return {
      type: actionType.SET_LOCATION_INFO,
      location: {
        name: result.name,
        latitude: result.latitude,
        longitude: result.longitude
      }
    };
  } catch (e) {
    return e;
  }
};

export const getLocationList = async (longitude, latitude, keyword) => {
  try {
    const { result } = await LocationModel.getLocationList(
      longitude,
      latitude,
      keyword
    );
    return {
      type: actionType.GET_LOCATION_LIST,
      locationList: result
    };
  } catch (e) {
    return e;
  }
};
