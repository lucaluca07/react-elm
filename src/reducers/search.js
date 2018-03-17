import * as actionTypes from '../constants'


const defaultState = {
    typeahead:{},
    hotSearchWords:[],
    fliter:[],
    highlights:[],
    data:{
        restaurant_with_foods:false,
        offset:0,
        hasMore:false
    }
}

const search = (state = defaultState,action) => {
    switch(action.type){
        case actionTypes.GET_TYPE_AHEAD:
            return {...state,
                typeahead:action.typeahead}
        case actionTypes.GET_HOT_SEARCH_WORDS:
            return {...state,
                hotSearchWords:action.hotSearchWords}
        case actionTypes.GET_SEARCH_RESULT:
            return {...state,
                fliter:action.fliter,
                highlights:action.highlights,
                data:{
                    restaurant_with_foods:[...state.data.restaurant_with_foods,...action.restaurant_with_foods],
                    offset:action.offset,
                    hasMore:action.hasMore
                }
            }
        case actionTypes.CLEAR_SEARCH_RESULT:{
            return {...state,
                data:{...state.data,
                    restaurant_with_foods:false,
                    offset:0,
                    hasMore:false
                }
            }
        }
        
        default:
            return state
    }
}

export default search