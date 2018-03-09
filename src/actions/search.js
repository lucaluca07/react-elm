import * as actionType from '../constants'
import SearchModel from '../fetch/search'

export const getTypeAhead = async (keyword, latitude, longitude) => {
    const {result} = await SearchModel.getTypeAhead(keyword, latitude, longitude)
    return {
        type: actionType.GET_TYPE_AHEAD,
        typeahead:result
    }
}

export const getHotSearchWrods = async (latitude, longitude) => {
    const {result} = await SearchModel.getHotSearchWords(latitude, longitude)
    return {
        type: actionType.GET_HOT_SEARCH_WORDS,
        hotSearchWords:result.map(val => val.word)
    }
}