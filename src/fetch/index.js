import Http from '../util/http'

let HomeModel = {
    async getEntriesData(latitude,longitude) {
      //latitude=31.27051&longitude=121.40635&keyword=&offset=0&limit=8&activity_types[]=1&support_ids[]=8&support_ids[]=3&delivery_mode[]=1&average_cost_ids[]=1&super_vip=1&restaurant_category_ids[]=265
      const result = await Http.get(`/api/home/entries?latitude=${latitude}&longitude=${longitude}`)
      return result   
    },
    async getRestaurants(latitude, longitude, offset, limit, filter,order,vip,delivery,activity,support_ids,category_ids){
      const support = support_ids&&support_ids.length>0?support_ids.reduce((a,b) => (`${a}&support_ids=${b}`)):""
      const category = category_ids&&category_ids.length>0?category_ids.reduce((a,b) => (`${a}&category_ids=${b}`)):""
      const result = await Http.get(`/api/shopping/restaurants?latitude=${latitude}&longitude=${longitude}&offset=${offset}&limit=${limit}&filter=${filter}&order=${order}&vip=${vip}&delivery=${delivery}&activity=${activity}&support_ids=${support}&category_ids=${category}`)
      return result
    },
    async getSiftFactors(latitude, longitude, entryId){
      const result = await Http.get(`/api/shopping/food/sift_factors?latitude=${latitude}&longitude=${longitude}&entry_id=${entryId}`)
      return result
    },
    async getFilterBar(latitude, longitude){
      const result = await Http.get(` /api/shopping/restaurants/filter-bar?latitude=${latitude}&longitude=${longitude}`)
      return result
    }
    
  };
  export default HomeModel;