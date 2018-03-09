import Http from '../util/http'

let LocationModel = {
    async getLocationInfo(latitude, longitude){
      const result = await Http.get(`/api/location/address?latitude=${latitude}&longitude=${longitude}`)
      return result
    },

    async getLocationList(latitude, longitude, keyword){
      const result = await Http.get(`/api/location/search_poi_nearby?latitude=${latitude}&longitude=${longitude}&keyword=${keyword}`)
      return result
    }
  };
export default LocationModel;