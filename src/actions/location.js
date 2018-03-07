import * as actionType from '../constants'
import LocationModel from '../fetch/location'

export const setLongitudeAndLatitude = (longitude,latitude) => ({
    type:actionType.SET_LONGITUDE_LATITUDE,
    longitude,
    latitude
})
export const setCurrentAddress = (currentAddresss) => ({
    type:actionType.SET_CURRENT_ADDRESS,
    currentAddresss
})
export const getLocationInfo = async(longitude,latitude) => {
    try{
        const {result} = await LocationModel.getLocationInfo(longitude,latitude)
        return {
            type:actionType.SET_LOCATION_INFO,
            name:result.name
        }
    }catch(e){
        return e
    }
}