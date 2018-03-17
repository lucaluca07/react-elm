import * as actionTypes from '../constants'
import SearchModel from '../fetch/search'

export const getTypeAhead = async (keyword, latitude, longitude) => {
    const {result} = await SearchModel.getTypeAhead(keyword, latitude, longitude)
    return {
        type: actionTypes.GET_TYPE_AHEAD,
        typeahead:result
    }
}

export const getHotSearchWrods = async (latitude, longitude) => {
    const {result} = await SearchModel.getHotSearchWords(latitude, longitude)
    return {
        type: actionTypes.GET_HOT_SEARCH_WORDS,
        hotSearchWords:result.map(val => val.word)
    }
}

export const getSearchResult = async (keyword,offset,limit,latitude, longitude,order,category,delivery,activity,support,cost) => {
    const {result} = await SearchModel.getSearchResult(keyword,offset,limit,latitude, longitude,order,category,delivery,activity,support,cost)
    const name = Object.keys(result.inside)[0]
    const data = result.inside[name]
    return {
        type:actionTypes.GET_SEARCH_RESULT,
        fliter:data.filter,
        restaurant_with_foods:data.restaurant_with_foods,
        highlights:data.highlights,
        offset:offset+limit,
        hasMore:data.restaurant_with_foods.length === limit
    }
}

export const clearSearchResult = () => {
    return {
        type:actionTypes.CLEAR_SEARCH_RESULT
    }
}