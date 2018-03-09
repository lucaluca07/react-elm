import * as actionTypes from '../constants'


const defaultState = {
    typeahead:{},
    hotSearchWords:[]
}
const search = (state = defaultState,action) => {
    switch(action.type){
        case actionTypes.GET_TYPE_AHEAD:
            return {...state,
                typeahead:action.typeahead}
        case actionTypes.GET_HOT_SEARCH_WORDS:
            return {...state,
                hotSearchWords:action.hotSearchWords}
        default:
            return state
    }
}

export default search