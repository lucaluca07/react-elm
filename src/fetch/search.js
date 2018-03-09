import Http from '../util/http'

let SearchModel = {  
    async getTypeAhead(keyword, latitude, longitude){
      const result = await Http.get(`/api/shopping/typeahead?latitude=${latitude}&longitude=${longitude}&keyword=${keyword}`)
      return result
    },
    async getHotSearchWords(latitude, longitude){
        const result = await Http.get(`/api/shopping/hot_search_words?latitude=${latitude}&longitude=${longitude}`)
        return result
      },
  };
export default SearchModel;