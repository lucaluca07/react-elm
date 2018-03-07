import * as actionTypes from '../constants'


const defaultState = {
    longitude:0,
    latitude:0,
    address:"",
    location:{}
}
const location = (state = defaultState,action) => {
    switch(action.type){
        case actionTypes.SET_LONGITUDE_LATITUDE:
            return {...state,
                longitude:action.longitude,
                latitude:action.latitude,
                address:"正在识别位置..."}
        case actionTypes.SET_LOCATION_INFO:
            return {...state,
                location:action.location}
        case actionTypes.SET_CURRENT_ADDRESS:
            return {...state,
                address:action.address
            } 
        default:
            return state
    }
}

export default location