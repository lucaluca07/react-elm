import Http from '../util/http'

let HomeModel = {
    async getEntriesData() {
      const result = await Http.get('/api/home/entries')
      return result   
    },

    async getLocationInfo(latitude, longitude){
      const result = await Http.get(`/api/home/address?latitude=${latitude}&longitude=${longitude}`)
      return result
    }
  };
  export default HomeModel;