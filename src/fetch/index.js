import Http from '../util/http'

let HomeModel = {
    async getEntriesData(latitude,longitude) {
      const result = await Http.get(`/api/home/entries?latitude=${latitude}&longitude=${longitude}`)
      return result   
    },
    async getRestaurants(latitude, longitude, offset, limit, filter){
      const result = await Http.get(`/api/shopping/restaurants?latitude=${latitude}&longitude=${longitude}&offset=${offset}&limit=${limit}&filter=${filter}`)
      return result
    }
  };
  export default HomeModel;