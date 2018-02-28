import * as actionType from '../constants'
import HomeModel from '../fetch'

export const setLongitudeAndLatitude = (longitude,latitude) => ({
    type:actionType.SET_LONGITUDE_LATITUDE,
    longitude,
    latitude
})

