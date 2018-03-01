import * as actionTypes from '../constants'


const defaultState = {
    longitude:0,
    latitude:0,
    location:{}
}
const home = (state = defaultState,action) => {
    switch(action.type){
        case actionTypes.SET_LONGITUDE_LATITUDE:
            return {...state,
                longitude:action.longitude,
                latitude:action.latitude,
                name:"正在识别位置..."}
        case actionTypes.SET_LOCATION_INFO:
            return {...state,
                name:action.name}
        default:
            return state
    }
}

export default home