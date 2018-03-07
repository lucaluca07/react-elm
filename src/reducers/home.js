import * as actionTypes from '../constants'


const defaultState = {
    foodentry:[],
    activity:[],
    offset:0,
    restaurants:false,
    hasMore:false
}
const home = (state = defaultState,action) => {
    switch(action.type){
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