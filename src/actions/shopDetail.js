import * as actionTypes from '../constants'
import ShopDetaiModel from '../fetch/shopDetail'

export const getMenu = async (shop_id, latitude, longitude) => {
    const {result} = await ShopDetaiModel.getMenu(shop_id, latitude, longitude)
    return {
        type: actionTypes.GET_MENU,
        menu:result
    }
}

export const getShopInfo = async (shop_id,latitude, longitude) => {
    const {result} = await ShopDetaiModel.getShopInfo(shop_id,latitude, longitude)
    return {
        type: actionTypes.GET_HOT_SEARCH_WORDS,
        shopinfo:result.map(val => val.word)
    }
}

export const getRating = async (shop_id,offset,limit,latitude, longitude) => {
    const {result} = await ShopDetaiModel.getRating(shop_id,offset,limit,latitude, longitude)
    return {
        type:actionTypes.GET_SEARCH_RESULT,
        rating:result,
        offset:offset+limit,
        hasMore:result.length === limit
    }
}

export const clearSearchResult = () => {
    return {
        type:actionTypes.CLEAR_SEARCH_RESULT
    }
}