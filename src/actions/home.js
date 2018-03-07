import * as actionType from '../constants'
import HomeModel from '../fetch'

export const getEntries = async(longitude,latitude) => {
    try{
        const {result} = await HomeModel.getEntriesData(longitude,latitude)
        return {
            type:actionType.GET_ENTRIES_DATA,
            foodentry:result[0].entries,
            activity:result[1].entries
        }
    }catch(e){
        return e
    }
}

export const getRestaurants = async(longitude,latitude,offset,limit,filter) => {
    try{
        const {result} = await HomeModel.getRestaurants(longitude,latitude,offset,limit,filter)
        return {
            type:actionType.GET_RESTAURANTS,
            restaurants:result.items,
            offset:offset+limit,
            hasMore:result.items.length === limit
        }
    }catch(e){
        return e
    }
}