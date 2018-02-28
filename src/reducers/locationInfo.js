import * as actionTypes from '../constants'


const defaultState = {
    longitude:0,
    latitude:0,
}
const locationInfo = (state = defaultState,action) => {
    switch(action.type){
        case actionTypes.SET_LONGITUDE_LATITUDE:
            return {...state,
                longitude:action.longitude,
                latitude:action.latitude}
        case actionTypes.SET_LOCATION_INFO:
            return {...state,
                location:action.location}
        default:
            return state
    }
}

export default locationInfo