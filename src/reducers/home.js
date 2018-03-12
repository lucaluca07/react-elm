import * as actionTypes from '../constants'


const defaultState = {
    foodentry:[],
    activity:[],
    offset:0,
    restaurants:false,
    siftFactors:[],
    hasMore:false,
    filterMore:false
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
        case actionTypes.CLEAR_RESTAURANTS:
            return {...state,
                offset:0,
                restaurants:false,
                hasMore:false
            }
        case actionTypes.GET_SIFT_FACTORS:
            return {...state,
                siftFactors:action.siftFactors
            }
        case actionTypes.GET_FILTER_BAR:
            return{...state,
                filterMore:action.filterMore
            }
        default:
            return state
    }
}

export default home