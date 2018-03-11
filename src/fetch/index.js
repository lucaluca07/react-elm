import Http from '../util/http'

let HomeModel = {
    async getEntriesData(latitude,longitude) {
      //latitude=31.27051&longitude=121.40635&keyword=&offset=0&limit=8&activity_types[]=1&support_ids[]=8&support_ids[]=3&delivery_mode[]=1&average_cost_ids[]=1&super_vip=1&restaurant_category_ids[]=265
      const result = await Http.get(`/api/home/entries?latitude=${latitude}&longitude=${longitude}`)
      return result   
    },
    async getRestaurants(latitude, longitude, offset, limit, filter,order,vip,delivery,activity,support_ids,category_ids){
      const support = support_ids.reduce((a,b) => ("support_ids="+a+"&"+"support_ids"+b))
      const category = category_ids.reduce((a,b) => ("category_ids="+a+"&"+"category_ids="+b))
      const result = await Http.get(`/api/shopping/restaurants?latitude=${latitude}&longitude=${longitude}&offset=${offset}&limit=${limit}&filter=${filter}&order=${order}&vip=${vip}&delivery=${delivery}&activity=${activity}&${support}&${category}`)
      return result
    }
  };
  export default HomeModel;