import Http from "../util/http";

let SearchModel = {
  async getTypeAhead(keyword, latitude, longitude) {
    const result = await Http.get(
      `/api/shopping/typeahead?latitude=${latitude}&longitude=${longitude}&keyword=${keyword}`
    );
    return result;
  },
  async getHotSearchWords(latitude, longitude) {
    const result = await Http.get(
      `/api/shopping/hot_search_words?latitude=${latitude}&longitude=${longitude}`
    );
    return result;
  },
  async getSearchResult(
    keyword,
    offset,
    limit,
    latitude,
    longitude,
    order,
    category,
    delivery,
    activity,
    support
  ) {
    const result = await Http.get(
      `/api/shopping/search?offset=${offset}&limit=${limit}&keyword=${keyword}&order=${order}&delivery=${delivery}&activity=${activity}&support_ids=${support}&category_ids=${category}&latitude=${latitude}&longitude=${longitude}`
    );
    return result;
  }
};
export default SearchModel;
