import * as actionType from '../constants'
import HomeModel from '../fetch'

export const setLongitudeAndLatitude = (longitude,latitude) => ({
    type:actionType.SET_LONGITUDE_LATITUDE,
    longitude,
    latitude
})

export const getLocationInfo = async(longitude,latitude) => {
    try{
        const {result} = await HomeModel.getLocationInfo(longitude,latitude)
        return {
            type:actionType.SET_LOCATION_INFO,
            name:result.name
        }
    }catch(e){
        return e
    }
}

export const getEntries = async(longitude,latitude) => {
    try{
        const {result} = await HomeModel.getEntriesData(longitude,latitude)
        return {
            type:actionType.GET_ENTRIES_DATA,
            foodentry:result[0],
            activity:result[1]
        }
    }catch(e){
        return e
    }
}