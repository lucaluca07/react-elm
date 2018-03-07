import * as actionType from '../constants'
import LocationModel from '../fetch/location'

export const setLongitudeAndLatitude = (longitude,latitude) => ({
    type:actionType.SET_LONGITUDE_LATITUDE,
    longitude,
    latitude
})
export const setCurrentAddress = (address) => ({
    type:actionType.SET_CURRENT_ADDRESS,
    address
})
export const getLocationInfo = async(longitude,latitude) => {
    try{
        const {result} = await LocationModel.getLocationInfo(longitude,latitude)
        return {
            type:actionType.SET_LOCATION_INFO,
            location:{name:result.name,
                latitude:result.latitude,
                longitude:result.longitude}
        }
    }catch(e){
        return e
    }
}