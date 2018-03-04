import * as actionTypes from '../constants'


const defaultState = {
    longitude:0,
    latitude:0,
    location:{},
    foodentry:[],
    activity:[],
    offset:0,
    restaurants:false,
    hasMore:false
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
        case actionTypes.GET_ENTRIES_DATA:
            return {...state,
                foodentry:action.foodentry,
                activity:action.activity
            }
        case actionTypes.GET_RESTAURANTS:
            return {...state,
                restaurants:[...state.restaurants,...action.restaurants],
                offset:action.offset,
                hasMore:action.hasMore
            }
        default:
            return state
    }
}

export default home