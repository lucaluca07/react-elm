import * as actionTypes from '../constants'


const defaultState = {
    shopinfo:false,
    menu:false,
    rating:{
        data:false,
        hasMore:false,
        offset:0
    }
}
const shopDetail = (state = defaultState,action) => {
    switch(action.type){
        case actionTypes.GET_ENTRIES_DATA:
            return {...state,
                foodentry:action.foodentry,
                activity:action.activity
            }
        case actionTypes.GET_RESTAURANTS:
            return {...state,
                result:{
                    restaurants:[...state.result.restaurants,...action.restaurants],
                    offset:action.offset,
                    hasMore:action.hasMore
                },
            }
        case actionTypes.CLEAR_RESTAURANTS:
            return {...state,
                result:{
                    ...state.result,
                    offset:0,
                    restaurants:false,
                    hasMore:false
                }
                
            }
        case actionTypes.GET_FILTER_BAR:
            return{...state,
                filterMore:action.filterMore
            }
        default:
            return state
    }
}

export default shopDetail