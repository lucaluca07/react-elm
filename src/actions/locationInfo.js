import * as actionType from '../constants'

export const setLongitudeAndLatitude = (longitude,latitude) => ({
    type:actionType.SET_LONGITUDE_LATITUDE,
    longitude,
    latitude
})

export const setLocationInfo = (location) => ({
    type:actionType.SET_LONGITUDE_LATITUDE,
    location
})